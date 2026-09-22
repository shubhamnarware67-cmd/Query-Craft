/* ==========================================================================
   QueryCraft — SQL Learning Simulator Engine (Phase 4)
   IMPORTANT: This is an educational, browser-only SQL simulator. It is NOT a
   real MySQL engine and does not connect to any real database server. It
   supports a deliberately limited subset of SQL for teaching purposes:
     SELECT (columns, *, DISTINCT, WHERE, single JOIN, GROUP BY, aggregate
             functions, ORDER BY, LIMIT)
     basic INSERT INTO ... VALUES (...)
     basic UPDATE ... SET ... WHERE ...
     basic DELETE FROM ... WHERE ...
   Anything outside this subset returns a clear "not supported in this
   simulator" message rather than silently behaving incorrectly.
   ========================================================================== */

(function () {
  'use strict';

  function QCSimError(message) {
    this.name = 'QCSimError';
    this.message = message;
  }
  QCSimError.prototype = Object.create(Error.prototype);

  // ---- Tokenizing helpers -------------------------------------------------

  function stripTrailingSemicolon(sql) {
    return sql.trim().replace(/;\s*$/, '');
  }

  // Splits "col1, col2 AS alias, COUNT(col3)" into a clean array of pieces,
  // respecting parentheses so COUNT(a, b)-style calls aren't split incorrectly.
  function splitTopLevel(str, sep) {
    const parts = [];
    let depth = 0;
    let current = '';
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      if (c === '(') depth++;
      if (c === ')') depth--;
      if (c === sep && depth === 0) {
        parts.push(current.trim());
        current = '';
      } else {
        current += c;
      }
    }
    if (current.trim()) parts.push(current.trim());
    return parts;
  }

  // ---- WHERE clause expression parser -------------------------------------
  // Supports: =, !=, <>, >, <, >=, <=, LIKE, NOT LIKE, IN (...), NOT IN (...),
  // BETWEEN a AND b, IS NULL, IS NOT NULL, AND, OR, NOT, parentheses.

  function tokenizeWhere(str) {
    const tokenRegex = /\s*(=|!=|<>|>=|<=|>|<|\(|\)|,|'[^']*'|"[^"]*"|\bAND\b|\bOR\b|\bNOT\b|\bLIKE\b|\bIN\b|\bBETWEEN\b|\bIS\b|\bNULL\b|[A-Za-z_][A-Za-z0-9_.]*|-?\d+\.?\d*)\s*/gi;
    const tokens = [];
    let match;
    let lastIndex = 0;
    while ((match = tokenRegex.exec(str)) !== null) {
      if (match.index !== lastIndex) {
        throw new QCSimError('Could not understand part of the WHERE condition near: ' + str.slice(lastIndex, match.index));
      }
      tokens.push(match[1]);
      lastIndex = tokenRegex.lastIndex;
    }
    if (lastIndex !== str.length) {
      throw new QCSimError('Could not understand the end of the WHERE condition.');
    }
    return tokens;
  }

  // ---- Scalar subquery resolution (for WHERE clauses like: WHERE salary > (SELECT AVG(salary) FROM employees)) ----

  function findMatchingParen(str, openIndex) {
    let depth = 0;
    for (let i = openIndex; i < str.length; i++) {
      if (str[i] === '(') depth++;
      if (str[i] === ')') {
        depth--;
        if (depth === 0) return i;
      }
    }
    return -1;
  }

  function resolveScalarSubqueries(whereStr, dbState) {
    let result = whereStr;
    let searchFrom = 0;
    // Guard against runaway loops on malformed input
    let iterations = 0;
    while (iterations < 20) {
      iterations++;
      const openMatch = result.slice(searchFrom).match(/\(\s*SELECT\b/i);
      if (!openMatch) break;
      const openIndex = searchFrom + openMatch.index;
      const closeIndex = findMatchingParen(result, openIndex);
      if (closeIndex === -1) {
        throw new QCSimError('Unbalanced parentheses in subquery.');
      }
      const subquerySql = result.slice(openIndex + 1, closeIndex).trim();
      let subResult;
      try {
        subResult = execSelect(subquerySql, dbState);
      } catch (e) {
        throw new QCSimError('Error inside subquery: ' + e.message);
      }
      if (!subResult.rows.length) {
        result = result.slice(0, openIndex) + 'NULL' + result.slice(closeIndex + 1);
      } else {
        const firstRow = subResult.rows[0];
        const firstCol = Object.keys(firstRow)[0];
        const scalarVal = firstRow[firstCol];
        const literal = typeof scalarVal === 'string' ? `'${scalarVal.replace(/'/g, "''")}'` : (scalarVal === null || scalarVal === undefined ? 'NULL' : String(scalarVal));
        result = result.slice(0, openIndex) + literal + result.slice(closeIndex + 1);
      }
      searchFrom = 0; // restart scan in case of multiple subqueries
    }
    return result;
  }

  function parseWhereExpression(str) {
    const tokens = tokenizeWhere(str);
    let pos = 0;

    function peek() { return tokens[pos]; }
    function next() { return tokens[pos++]; }
    function expect(tok) {
      const t = next();
      if (!t || t.toUpperCase() !== tok.toUpperCase()) {
        throw new QCSimError('Expected "' + tok + '" in WHERE clause near token ' + (pos - 1));
      }
    }

    function parseOr() {
      let left = parseAnd();
      while (peek() && peek().toUpperCase() === 'OR') {
        next();
        const right = parseAnd();
        const l = left, r = right;
        left = (row) => l(row) || r(row);
      }
      return left;
    }

    function parseAnd() {
      let left = parseNot();
      while (peek() && peek().toUpperCase() === 'AND') {
        next();
        const right = parseNot();
        const l = left, r = right;
        left = (row) => l(row) && r(row);
      }
      return left;
    }

    function parseNot() {
      if (peek() && peek().toUpperCase() === 'NOT') {
        next();
        const inner = parseNot();
        return (row) => !inner(row);
      }
      return parsePrimary();
    }

    function parsePrimary() {
      if (peek() === '(') {
        next();
        const expr = parseOr();
        expect(')');
        return expr;
      }
      return parseComparison();
    }

    function resolveValue(token, row) {
      if (token === undefined) throw new QCSimError('Unexpected end of WHERE condition.');
      if (/^'.*'$/.test(token) || /^".*"$/.test(token)) return token.slice(1, -1);
      if (/^-?\d+\.?\d*$/.test(token)) return parseFloat(token);
      if (token.toUpperCase() === 'NULL') return null;
      // treat as column reference (support table.column by taking last part)
      const col = token.indexOf('.') !== -1 ? token.split('.').pop() : token;
      return row ? row[col] : undefined;
    }

    function parseComparison() {
      const leftToken = next();
      const isColumn = !(/^'.*'$/.test(leftToken) || /^".*"$/.test(leftToken) || /^-?\d+\.?\d*$/.test(leftToken));

      if (peek() && peek().toUpperCase() === 'IS') {
        next();
        let negate = false;
        if (peek() && peek().toUpperCase() === 'NOT') { next(); negate = true; }
        expect('NULL');
        return (row) => {
          const v = resolveValue(leftToken, row);
          const isNull = v === null || v === undefined;
          return negate ? !isNull : isNull;
        };
      }

      if (peek() && peek().toUpperCase() === 'BETWEEN') {
        next();
        const lowTok = next();
        expect('AND');
        const highTok = next();
        return (row) => {
          const v = resolveValue(leftToken, row);
          const low = resolveValue(lowTok, null) !== undefined ? resolveValue(lowTok, row) : undefined;
          const high = resolveValue(highTok, row);
          const lowVal = resolveValue(lowTok, row);
          return v >= lowVal && v <= high;
        };
      }

      if (peek() && (peek().toUpperCase() === 'LIKE' || (peek().toUpperCase() === 'NOT' && tokens[pos + 1] && tokens[pos + 1].toUpperCase() === 'LIKE'))) {
        let negate = false;
        if (peek().toUpperCase() === 'NOT') { next(); negate = true; }
        next(); // LIKE
        const patternTok = next();
        const pattern = resolveValue(patternTok, null);
        const regexStr = '^' + String(pattern)
          .replace(/[.+^${}()|[\]\\]/g, '\\$&')
          .replace(/%/g, '.*')
          .replace(/_/g, '.') + '$';
        const regex = new RegExp(regexStr, 'i');
        return (row) => {
          const v = resolveValue(leftToken, row);
          const matches = v !== null && v !== undefined && regex.test(String(v));
          return negate ? !matches : matches;
        };
      }

      if (peek() && (peek().toUpperCase() === 'IN' || (peek().toUpperCase() === 'NOT' && tokens[pos + 1] && tokens[pos + 1].toUpperCase() === 'IN'))) {
        let negate = false;
        if (peek().toUpperCase() === 'NOT') { next(); negate = true; }
        next(); // IN
        expect('(');
        const values = [];
        if (peek() !== ')') {
          values.push(resolveValue(next(), null));
          while (peek() === ',') {
            next();
            values.push(resolveValue(next(), null));
          }
        }
        expect(')');
        return (row) => {
          const v = resolveValue(leftToken, row);
          const isIn = values.some((x) => x == v);
          return negate ? !isIn : isIn;
        };
      }

      const opToken = next();
      if (!opToken || !/^(=|!=|<>|>=|<=|>|<)$/.test(opToken)) {
        throw new QCSimError('Expected a comparison operator (=, >, <, etc.) in WHERE clause.');
      }
      const rightToken = next();

      return (row) => {
        const l = resolveValue(leftToken, row);
        const r = resolveValue(rightToken, row);
        switch (opToken) {
          case '=': return l == r;
          case '!=':
          case '<>': return l != r;
          case '>': return l > r;
          case '<': return l < r;
          case '>=': return l >= r;
          case '<=': return l <= r;
          default: throw new QCSimError('Unsupported operator: ' + opToken);
        }
      };
    }

    const predicate = parseOr();
    if (pos !== tokens.length) {
      throw new QCSimError('Unexpected extra content in WHERE clause.');
    }
    return predicate;
  }

  // ---- Aggregate function helpers -----------------------------------------

  const AGG_FN_REGEX = /^(COUNT|SUM|AVG|MIN|MAX)\(\s*(\*|[A-Za-z_][A-Za-z0-9_.]*)\s*\)$/i;

  function computeAggregate(fnName, colExpr, rows) {
    const upper = fnName.toUpperCase();
    if (colExpr === '*') {
      if (upper !== 'COUNT') throw new QCSimError(upper + '(*) is not supported — only COUNT(*) is.');
      return rows.length;
    }
    const col = colExpr.indexOf('.') !== -1 ? colExpr.split('.').pop() : colExpr;
    const values = rows.map((r) => r[col]).filter((v) => v !== null && v !== undefined);
    switch (upper) {
      case 'COUNT': return values.length;
      case 'SUM': return values.reduce((a, b) => a + Number(b), 0);
      case 'AVG': return values.length ? values.reduce((a, b) => a + Number(b), 0) / values.length : null;
      case 'MIN': return values.length ? values.reduce((a, b) => (b < a ? b : a)) : null;
      case 'MAX': return values.length ? values.reduce((a, b) => (b > a ? b : a)) : null;
      default: throw new QCSimError('Unsupported aggregate function: ' + fnName);
    }
  }

  // ---- Database access ------------------------------------------------------

  function findTable(dbState, tableName) {
    const name = tableName.trim();
    if (!dbState.tables[name]) {
      throw new QCSimError('Table "' + name + '" does not exist in this sample database.');
    }
    return dbState.tables[name];
  }

  // ---- SELECT ---------------------------------------------------------------

  function execSelect(sql, dbState) {
    const m = sql.match(/^SELECT\s+(DISTINCT\s+)?(.+?)\s+FROM\s+(.+)$/is);
    if (!m) throw new QCSimError('Could not parse this SELECT statement. Check the syntax against the examples.');

    const isDistinct = !!m[1];
    const columnsRaw = m[2].trim();
    let rest = m[3].trim();

    // Extract clauses from the tail, in reverse order of appearance
    let limitVal = null;
    let offsetVal = 0;
    let orderBy = null;
    let groupByCols = null;
    let whereStr = null;
    let joinClause = null;

    // Supports: LIMIT n | LIMIT n OFFSET m | LIMIT m, n (MySQL shorthand)
    const limitOffsetMatch = rest.match(/\sLIMIT\s+(\d+)\s+OFFSET\s+(\d+)\s*$/i);
    const limitCommaMatch = !limitOffsetMatch && rest.match(/\sLIMIT\s+(\d+)\s*,\s*(\d+)\s*$/i);
    const limitOnlyMatch = !limitOffsetMatch && !limitCommaMatch && rest.match(/\sLIMIT\s+(\d+)\s*$/i);

    if (limitOffsetMatch) {
      limitVal = parseInt(limitOffsetMatch[1], 10);
      offsetVal = parseInt(limitOffsetMatch[2], 10);
      rest = rest.slice(0, limitOffsetMatch.index).trim();
    } else if (limitCommaMatch) {
      // MySQL shorthand: LIMIT offset, count
      offsetVal = parseInt(limitCommaMatch[1], 10);
      limitVal = parseInt(limitCommaMatch[2], 10);
      rest = rest.slice(0, limitCommaMatch.index).trim();
    } else if (limitOnlyMatch) {
      limitVal = parseInt(limitOnlyMatch[1], 10);
      rest = rest.slice(0, limitOnlyMatch.index).trim();
    }

    const orderMatch = rest.match(/\sORDER\s+BY\s+(.+)$/i);
    if (orderMatch) {
      orderBy = orderMatch[1].trim();
      rest = rest.slice(0, orderMatch.index).trim();
    }

    const havingMatch = rest.match(/\sHAVING\s+(.+)$/i);
    let havingStr = null;
    if (havingMatch) {
      havingStr = havingMatch[1].trim();
      rest = rest.slice(0, havingMatch.index).trim();
    }

    const groupMatch = rest.match(/\sGROUP\s+BY\s+(.+)$/i);
    if (groupMatch) {
      groupByCols = splitTopLevel(groupMatch[1].trim(), ',');
      rest = rest.slice(0, groupMatch.index).trim();
    }

    const whereMatch = rest.match(/\sWHERE\s+(.+)$/i);
    if (whereMatch) {
      whereStr = whereMatch[1].trim();
      rest = rest.slice(0, whereMatch.index).trim();
    }

    const leftJoinMatch = rest.match(/\sLEFT\s+JOIN\s+(.+?)\s+ON\s+(.+)$/i);
    let isLeftJoin = false;
    if (leftJoinMatch) {
      joinClause = { table: leftJoinMatch[1].trim(), on: leftJoinMatch[2].trim() };
      isLeftJoin = true;
      rest = rest.slice(0, leftJoinMatch.index).trim();
    } else {
      const joinMatch = rest.match(/\s(?:INNER\s+)?JOIN\s+(.+?)\s+ON\s+(.+)$/i);
      if (joinMatch) {
        joinClause = { table: joinMatch[1].trim(), on: joinMatch[2].trim() };
        rest = rest.slice(0, joinMatch.index).trim();
      }
    }

    const fromTable = rest.trim();
    if (!fromTable) throw new QCSimError('Could not determine the table in FROM.');

    let baseRows = findTable(dbState, fromTable).map((r) => Object.assign({}, r));

    // Handle join (very simplified: supports "table1.col = table2.col")
    if (joinClause) {
      const joinTableRows = findTable(dbState, joinClause.table);
      const onMatch = joinClause.on.match(/([A-Za-z_][A-Za-z0-9_.]*)\s*=\s*([A-Za-z_][A-Za-z0-9_.]*)/);
      if (!onMatch) throw new QCSimError('Could not parse the JOIN ON condition.');
      const leftCol = onMatch[1].split('.').pop();
      const rightCol = onMatch[2].split('.').pop();

      const joined = [];
      baseRows.forEach((leftRow) => {
        const matches = joinTableRows.filter((rightRow) => leftRow[leftCol] === rightRow[rightCol] || leftRow[rightCol] === rightRow[leftCol]);
        if (matches.length) {
          matches.forEach((rightRow) => joined.push(Object.assign({}, rightRow, leftRow)));
        } else if (isLeftJoin) {
          joined.push(Object.assign({}, leftRow));
        }
      });
      baseRows = joined;
    }

    // WHERE
    let rows = baseRows;
    if (whereStr) {
      const resolvedWhere = resolveScalarSubqueries(whereStr, dbState);
      const predicate = parseWhereExpression(resolvedWhere);
      rows = rows.filter(predicate);
    }

    // Determine if this is an aggregate-only query (no GROUP BY) or grouped query
    const columnParts = splitTopLevel(columnsRaw, ',');
    const hasAggregate = columnParts.some((c) => AGG_FN_REGEX.test(c.trim().split(/\s+AS\s+/i)[0].trim()));

    let resultRows;

    if (groupByCols) {
      const groups = new Map();
      rows.forEach((row) => {
        const key = groupByCols.map((c) => row[c.split('.').pop()]).join('||');
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(row);
      });

      resultRows = Array.from(groups.values()).map((groupRows) => {
        const out = {};
        columnParts.forEach((colExprRaw) => {
          const aliasMatch = colExprRaw.match(/^(.+?)\s+AS\s+(.+)$/i);
          const colExpr = (aliasMatch ? aliasMatch[1] : colExprRaw).trim();
          const aggMatch = colExpr.match(AGG_FN_REGEX);
          // Aggregate expressions always get a safe internal key (even without an
          // explicit alias) so HAVING clauses referencing them, e.g. COUNT(*), can
          // be resolved without needing to tokenize raw "(" and "*" characters.
          const alias = aliasMatch ? aliasMatch[2].trim() : (aggMatch ? colExpr.replace(/[^A-Za-z0-9_]/g, '_') : colExpr);
          if (aggMatch) {
            out[alias] = computeAggregate(aggMatch[1], aggMatch[2], groupRows);
          } else {
            const col = colExpr.indexOf('.') !== -1 ? colExpr.split('.').pop() : colExpr;
            out[alias] = groupRows[0][col];
          }
        });
        return out;
      });

      if (havingStr) {
        // Substitute raw aggregate expressions (e.g. COUNT(*)) and column aliases
        // in the HAVING string with their corresponding output column names, so
        // the WHERE-style expression parser can evaluate it against resultRows.
        let havingResolved = havingStr;
        columnParts.forEach((colExprRaw) => {
          const aliasMatch = colExprRaw.match(/^(.+?)\s+AS\s+(.+)$/i);
          const colExpr = (aliasMatch ? aliasMatch[1] : colExprRaw).trim();
          const aggMatch = colExpr.match(AGG_FN_REGEX);
          const alias = aliasMatch ? aliasMatch[2].trim() : (aggMatch ? colExpr.replace(/[^A-Za-z0-9_]/g, '_') : colExpr);
          if (alias !== colExpr) {
            const escaped = colExpr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            havingResolved = havingResolved.replace(new RegExp(escaped, 'gi'), alias);
          }
        });
        const predicate = parseWhereExpression(havingResolved);
        resultRows = resultRows.filter((r) => {
          try { return predicate(r); } catch (e) { return false; }
        });
      }
    } else if (hasAggregate) {
      const out = {};
      columnParts.forEach((colExprRaw) => {
        const aliasMatch = colExprRaw.match(/^(.+?)\s+AS\s+(.+)$/i);
        const colExpr = (aliasMatch ? aliasMatch[1] : colExprRaw).trim();
        const alias = aliasMatch ? aliasMatch[2].trim() : colExpr;
        const aggMatch = colExpr.match(AGG_FN_REGEX);
        if (aggMatch) {
          out[alias] = computeAggregate(aggMatch[1], aggMatch[2], rows);
        } else {
          throw new QCSimError('Mixing plain columns with aggregate functions requires GROUP BY in this simulator.');
        }
      });
      resultRows = [out];
    } else {
      resultRows = rows.map((row) => {
        if (columnsRaw.trim() === '*') return Object.assign({}, row);
        const out = {};
        columnParts.forEach((colExprRaw) => {
          const aliasMatch = colExprRaw.match(/^(.+?)\s+AS\s+(.+)$/i);
          const colExpr = (aliasMatch ? aliasMatch[1] : colExprRaw).trim();
          const alias = aliasMatch ? aliasMatch[2].trim() : colExpr;
          const col = colExpr.indexOf('.') !== -1 ? colExpr.split('.').pop() : colExpr;
          out[alias] = row[col];
        });
        return out;
      });
    }

    // DISTINCT
    if (isDistinct) {
      const seen = new Set();
      resultRows = resultRows.filter((row) => {
        const key = JSON.stringify(row);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    // ORDER BY
    if (orderBy) {
      const orderParts = splitTopLevel(orderBy, ',').map((part) => {
        const descMatch = part.match(/^(.+?)\s+(ASC|DESC)$/i);
        return descMatch
          ? { col: descMatch[1].trim().split('.').pop(), dir: descMatch[2].toUpperCase() }
          : { col: part.trim().split('.').pop(), dir: 'ASC' };
      });
      resultRows = resultRows.slice().sort((a, b) => {
        for (const { col, dir } of orderParts) {
          const av = a[col], bv = b[col];
          if (av < bv) return dir === 'ASC' ? -1 : 1;
          if (av > bv) return dir === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }

    // LIMIT / OFFSET
    if (offsetVal > 0) {
      resultRows = resultRows.slice(offsetVal);
    }
    if (limitVal !== null) {
      resultRows = resultRows.slice(0, limitVal);
    }

    return { columns: resultRows.length ? Object.keys(resultRows[0]) : (columnsRaw === '*' ? [] : columnParts.map((c) => {
      const aliasMatch = c.match(/^(.+?)\s+AS\s+(.+)$/i);
      return aliasMatch ? aliasMatch[2].trim() : c.trim();
    })), rows: resultRows };
  }

  // ---- INSERT ----------------------------------------------------------------

  function execInsert(sql, dbState) {
    const m = sql.match(/^INSERT\s+INTO\s+([A-Za-z_][A-Za-z0-9_]*)\s*(?:\(([^)]*)\))?\s*VALUES\s*\(([^)]*)\)\s*$/is);
    if (!m) throw new QCSimError('Could not parse this INSERT statement. Expected: INSERT INTO table (col1, col2) VALUES (val1, val2);');

    const tableName = m[1];
    const table = findTable(dbState, tableName);
    const colsRaw = m[2];
    const valsRaw = splitTopLevel(m[3], ',');

    const parseVal = (token) => {
      const t = token.trim();
      if (/^'.*'$/.test(t) || /^".*"$/.test(t)) return t.slice(1, -1);
      if (/^-?\d+\.?\d*$/.test(t)) return parseFloat(t);
      if (t.toUpperCase() === 'NULL') return null;
      return t;
    };

    let newRow = {};
    if (colsRaw) {
      const cols = splitTopLevel(colsRaw, ',').map((c) => c.trim());
      if (cols.length !== valsRaw.length) throw new QCSimError('Number of columns does not match number of values.');
      cols.forEach((c, i) => { newRow[c] = parseVal(valsRaw[i]); });
    } else {
      const templateCols = table.length ? Object.keys(table[0]) : [];
      if (templateCols.length && templateCols.length !== valsRaw.length) {
        throw new QCSimError('Number of values does not match the table\'s column count. Try specifying column names explicitly.');
      }
      templateCols.forEach((c, i) => { newRow[c] = parseVal(valsRaw[i]); });
    }

    table.push(newRow);
    return { insertedRow: newRow, tableName: tableName };
  }

  // ---- UPDATE ------------------------------------------------------------------

  function execUpdate(sql, dbState) {
    const m = sql.match(/^UPDATE\s+([A-Za-z_][A-Za-z0-9_]*)\s+SET\s+(.+?)(?:\s+WHERE\s+(.+))?$/is);
    if (!m) throw new QCSimError('Could not parse this UPDATE statement. Expected: UPDATE table SET col = val WHERE condition;');

    const tableName = m[1];
    const table = findTable(dbState, tableName);
    const setClauseRaw = m[2];
    const whereStr = m[3];

    const assignments = splitTopLevel(setClauseRaw, ',').map((pair) => {
      const [colRaw, valRaw] = pair.split('=').map((s) => s.trim());
      const parseVal = (token) => {
        if (/^'.*'$/.test(token) || /^".*"$/.test(token)) return token.slice(1, -1);
        if (/^-?\d+\.?\d*$/.test(token)) return parseFloat(token);
        if (token.toUpperCase() === 'NULL') return null;
        return token;
      };
      return { col: colRaw, val: parseVal(valRaw) };
    });

    const predicate = whereStr ? parseWhereExpression(resolveScalarSubqueries(whereStr, dbState)) : () => true;
    let affected = 0;
    table.forEach((row) => {
      if (predicate(row)) {
        assignments.forEach(({ col, val }) => { row[col] = val; });
        affected++;
      }
    });

    return { affectedRows: affected };
  }

  // ---- DELETE ---------------------------------------------------------------

  function execDelete(sql, dbState) {
    const m = sql.match(/^DELETE\s+FROM\s+([A-Za-z_][A-Za-z0-9_]*)\s*(?:WHERE\s+(.+))?$/is);
    if (!m) throw new QCSimError('Could not parse this DELETE statement. Expected: DELETE FROM table WHERE condition;');

    const tableName = m[1];
    const table = findTable(dbState, tableName);
    const whereStr = m[2];

    if (!whereStr) {
      const count = table.length;
      table.length = 0;
      return { affectedRows: count };
    }

    const predicate = parseWhereExpression(resolveScalarSubqueries(whereStr, dbState));
    const toKeep = [];
    let affected = 0;
    table.forEach((row) => {
      if (predicate(row)) {
        affected++;
      } else {
        toKeep.push(row);
      }
    });
    table.length = 0;
    toKeep.forEach((r) => table.push(r));
    return { affectedRows: affected };
  }

  // ---- Public entry point -----------------------------------------------------

  function run(sqlInput, dbState) {
    const sql = stripTrailingSemicolon(sqlInput);
    if (!sql) throw new QCSimError('Please enter a SQL query to run.');

    const firstWord = (sql.match(/^\s*([A-Za-z]+)/) || [])[1];
    if (!firstWord) throw new QCSimError('Could not recognize this as a SQL statement.');

    switch (firstWord.toUpperCase()) {
      case 'SELECT':
        return { type: 'select', result: execSelect(sql, dbState) };
      case 'INSERT':
        return { type: 'insert', result: execInsert(sql, dbState) };
      case 'UPDATE':
        return { type: 'update', result: execUpdate(sql, dbState) };
      case 'DELETE':
        return { type: 'delete', result: execDelete(sql, dbState) };
      case 'CREATE':
      case 'DROP':
      case 'ALTER':
      case 'TRUNCATE':
        throw new QCSimError('This simulator supports SELECT, INSERT, UPDATE, and DELETE only — ' + firstWord.toUpperCase() + ' is not available here, to keep the sample data stable for everyone practicing.');
      default:
        throw new QCSimError('Unrecognized or unsupported statement type: ' + firstWord.toUpperCase() + '. This simulator supports SELECT, INSERT, UPDATE, and DELETE.');
    }
  }

  window.QC_SQL_ENGINE = { run: run, QCSimError: QCSimError };
})();
