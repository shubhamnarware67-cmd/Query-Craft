/* ==========================================================================
   QueryCraft — SQL Playground UI (Phase 4)
   Wires the SQL Learning Simulator engine to the playground page: database
   picker, editor, run/clear/reset buttons, and a results table/error view.
   ========================================================================== */

(function () {
  'use strict';

  let currentDbName = 'school';
  let workingDb = null; // deep-cloned, mutable copy of the selected sample db

  function cloneDb(name) {
    return JSON.parse(JSON.stringify(QC_SAMPLE_DBS[name]));
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
  }

  function renderTableList(container) {
    const db = QC_SAMPLE_DBS[currentDbName];
    const tableNames = Object.keys(db.tables);
    container.innerHTML = tableNames.map(function (t) {
      const rowCount = workingDb.tables[t].length;
      const cols = rowCount ? Object.keys(workingDb.tables[t][0]) : (db.tables[t][0] ? Object.keys(db.tables[t][0]) : []);
      return `
        <div class="pg-table-card">
          <div class="pg-table-name">${escapeHtml(t)}</div>
          <div class="pg-table-meta">${rowCount} row${rowCount === 1 ? '' : 's'}</div>
          <div class="pg-table-cols">${cols.map(function (c) { return `<span class="pg-col-chip">${escapeHtml(c)}</span>`; }).join('')}</div>
        </div>`;
    }).join('');
  }

  function renderResult(container, execResult) {
    if (execResult.type === 'select') {
      const { columns, rows } = execResult.result;
      if (!rows.length) {
        container.innerHTML = '<div class="pg-empty-result">Query ran successfully — 0 rows returned.</div>';
        return;
      }
      let html = '<div class="pg-table-scroll"><table class="pg-result-table"><thead><tr>';
      columns.forEach(function (c) { html += `<th>${escapeHtml(c)}</th>`; });
      html += '</tr></thead><tbody>';
      rows.forEach(function (row) {
        html += '<tr>';
        columns.forEach(function (c) {
          const val = row[c];
          html += `<td>${val === null || val === undefined ? '<span class="pg-null">NULL</span>' : escapeHtml(val)}</td>`;
        });
        html += '</tr>';
      });
      html += '</tbody></table></div>';
      html += `<div class="pg-result-meta">${rows.length} row${rows.length === 1 ? '' : 's'} returned</div>`;
      container.innerHTML = html;
    } else if (execResult.type === 'insert') {
      container.innerHTML = `<div class="pg-success">✓ 1 row inserted into <code>${escapeHtml(execResult.result.tableName)}</code>.</div>`;
    } else if (execResult.type === 'update') {
      container.innerHTML = `<div class="pg-success">✓ ${execResult.result.affectedRows} row(s) updated.</div>`;
    } else if (execResult.type === 'delete') {
      container.innerHTML = `<div class="pg-success">✓ ${execResult.result.affectedRows} row(s) deleted.</div>`;
    }
  }

  function renderError(container, message) {
    container.innerHTML = `<div class="pg-error"><strong>Error:</strong> ${escapeHtml(message)}</div>`;
  }

  function runQuery(sql, resultContainer, tableListContainer) {
    if (!sql.trim()) {
      renderError(resultContainer, 'Please enter a SQL query first.');
      return;
    }
    try {
      const execResult = QC_SQL_ENGINE.run(sql, workingDb);
      renderResult(resultContainer, execResult);
      if (execResult.type !== 'select') {
        renderTableList(tableListContainer);
      }
    } catch (e) {
      renderError(resultContainer, e.message);
    }
  }

  function init() {
    const root = document.getElementById('playground-app');
    if (!root || typeof QC_SAMPLE_DBS === 'undefined' || typeof QC_SQL_ENGINE === 'undefined') return;

    workingDb = cloneDb(currentDbName);

    const dbOptions = Object.keys(QC_SAMPLE_DBS).map(function (key) {
      return `<option value="${key}">${escapeHtml(QC_SAMPLE_DBS[key].label)}</option>`;
    }).join('');

    root.innerHTML = `
      <div class="pg-layout">
        <div class="pg-sidebar">
          <label class="pg-label" for="pg-db-select">Sample Database</label>
          <select id="pg-db-select" class="pg-select">${dbOptions}</select>
          <div id="pg-table-list" class="pg-table-list"></div>
        </div>

        <div class="pg-main">
          <div class="pg-editor-toolbar">
            <button class="btn btn-primary btn-sm" id="pg-run-btn">▶ Run Query</button>
            <button class="btn btn-ghost btn-sm" id="pg-clear-btn">Clear</button>
            <button class="btn btn-ghost btn-sm" id="pg-copy-btn">Copy</button>
            <button class="btn btn-ghost btn-sm" id="pg-reset-btn">Reset Data</button>
          </div>
          <textarea id="pg-editor" class="pg-editor" spellcheck="false" placeholder="SELECT * FROM students;">SELECT * FROM students;</textarea>

          <div class="pg-examples">
            <span class="pg-examples-label">Try:</span>
            <button class="pg-example-chip" data-sql="SELECT * FROM students WHERE age > 20;">Filter by age</button>
            <button class="pg-example-chip" data-sql="SELECT name, AVG(age) AS avg_age FROM students;">Average age</button>
            <button class="pg-example-chip" data-sql="SELECT students.name, courses.course_name FROM enrollments JOIN students ON enrollments.student_id = students.student_id JOIN courses ON enrollments.course_id = courses.course_id;">Join example</button>
          </div>

          <div class="pg-result-label">Result</div>
          <div id="pg-result" class="pg-result" aria-live="polite"></div>
        </div>
      </div>`;

    const editor = document.getElementById('pg-editor');
    const resultContainer = document.getElementById('pg-result');
    const tableListContainer = document.getElementById('pg-table-list');
    const dbSelect = document.getElementById('pg-db-select');

    renderTableList(tableListContainer);
    runQuery(editor.value, resultContainer, tableListContainer);

    document.getElementById('pg-run-btn').addEventListener('click', function () {
      runQuery(editor.value, resultContainer, tableListContainer);
    });

    document.getElementById('pg-clear-btn').addEventListener('click', function () {
      editor.value = '';
      editor.focus();
    });

    document.getElementById('pg-copy-btn').addEventListener('click', function () {
      navigator.clipboard && navigator.clipboard.writeText(editor.value).catch(function () {});
    });

    document.getElementById('pg-reset-btn').addEventListener('click', function () {
      workingDb = cloneDb(currentDbName);
      renderTableList(tableListContainer);
      resultContainer.innerHTML = '<div class="pg-empty-result">Sample data reset to its original state.</div>';
    });

    dbSelect.addEventListener('change', function () {
      currentDbName = dbSelect.value;
      workingDb = cloneDb(currentDbName);
      renderTableList(tableListContainer);
      resultContainer.innerHTML = '';
    });

    root.querySelectorAll('.pg-example-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        editor.value = chip.getAttribute('data-sql');
        runQuery(editor.value, resultContainer, tableListContainer);
      });
    });

    editor.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runQuery(editor.value, resultContainer, tableListContainer);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
