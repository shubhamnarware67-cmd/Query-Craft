/* ==========================================================================
   QueryCraft — Interview Preparation Data (Phase 5)
   Two data sets:
   1. QC_INTERVIEW_CONCEPTS — conceptual Q&A across Beginner, Intermediate,
      Advanced, and Industry Scenario categories.
   2. QC_INTERVIEW_CODING — classic SQL coding interview questions, each with
      a solutionSql validated against the sample databases from
      sample-data.js, using the same engine that powers the Playground.
   ========================================================================== */

const QC_INTERVIEW_CONCEPTS = [
  // ---------------- BEGINNER ----------------
  {
    id: 'c1', category: 'Beginner',
    question: 'What is SQL?',
    shortAnswer: 'SQL (Structured Query Language) is the standard language for creating, reading, updating, and deleting data in a relational database.',
    detailedExplanation: 'SQL is not a database itself — it is the language used to communicate with relational database systems. It includes sublanguages for defining structure (DDL: CREATE, ALTER, DROP), manipulating data (DML: INSERT, UPDATE, DELETE), querying data (DQL: SELECT), controlling access (DCL: GRANT, REVOKE), and managing transactions (TCL: COMMIT, ROLLBACK).',
    example: 'SELECT name, price FROM products WHERE category = \'Electronics\';',
    interviewTip: 'Interviewers often ask this to see if you confuse SQL (the language) with MySQL/PostgreSQL (the software). Be precise about that distinction.',
  },
  {
    id: 'c2', category: 'Beginner',
    question: 'What is MySQL?',
    shortAnswer: 'MySQL is a popular open-source relational database management system (RDBMS) that implements SQL.',
    detailedExplanation: 'MySQL is one of many RDBMS products — others include PostgreSQL, Oracle Database, and SQL Server. It is widely used in web development due to being free, fast, and well-documented. MySQL is currently owned and maintained by Oracle Corporation.',
    example: 'SELECT VERSION();',
    interviewTip: 'If asked to compare MySQL with another database, focus on practical differences (licensing, JSON support, replication features) rather than claiming one is universally "better".',
  },
  {
    id: 'c3', category: 'Beginner',
    question: 'What is a DBMS?',
    shortAnswer: 'A DBMS (Database Management System) is software that lets you create, read, update, and manage data in a database.',
    detailedExplanation: 'A DBMS acts as an intermediary between applications and the raw data stored on disk, handling concurrency, security, storage, and retrieval. Examples include MySQL, PostgreSQL, MongoDB, and SQL Server.',
    example: '-- MySQL, PostgreSQL, MongoDB are all examples of DBMS software.',
    interviewTip: 'Be ready to name a few DBMS examples immediately — hesitating here signals shaky fundamentals.',
  },
  {
    id: 'c4', category: 'Beginner',
    question: 'What is an RDBMS, and how does it differ from a DBMS?',
    shortAnswer: 'An RDBMS is a DBMS that organizes data into related tables using keys — all RDBMS are DBMS, but not all DBMS are relational.',
    detailedExplanation: 'RDBMS products (MySQL, PostgreSQL, Oracle) store data in structured tables connected via primary and foreign keys. Non-relational DBMS, like MongoDB, store data differently (e.g., as documents) and don\'t enforce the same table-based relational structure.',
    example: 'CREATE TABLE orders (order_id INT PRIMARY KEY, customer_id INT, FOREIGN KEY (customer_id) REFERENCES customers(customer_id));',
    interviewTip: 'A common follow-up is "name a DBMS that is NOT an RDBMS" — MongoDB or Redis are safe, well-known answers.',
  },
  {
    id: 'c5', category: 'Beginner',
    question: 'What is a Primary Key?',
    shortAnswer: 'A Primary Key is a column (or set of columns) that uniquely identifies every row in a table and cannot be NULL.',
    detailedExplanation: 'A table can have only one primary key, though it may be composite (span multiple columns). MySQL automatically indexes the primary key, and in InnoDB it also serves as the clustered index, determining the physical storage order of rows.',
    example: 'CREATE TABLE students (student_id INT PRIMARY KEY, name VARCHAR(100));',
    interviewTip: 'Be ready to explain WHY email or phone number is usually a poor primary key choice (they can change, unlike a stable surrogate ID).',
  },
  {
    id: 'c6', category: 'Beginner',
    question: 'What is a Foreign Key?',
    shortAnswer: 'A Foreign Key is a column in one table that references the Primary Key of another table, enforcing a valid relationship between them.',
    detailedExplanation: 'Foreign keys prevent "orphan" rows — for example, an order referencing a customer_id that doesn\'t actually exist. They also support cascading behavior: ON DELETE CASCADE, RESTRICT, or SET NULL define what happens to child rows when the referenced parent row is deleted.',
    example: 'FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE',
    interviewTip: 'Interviewers often follow up by asking you to explain the difference between CASCADE, RESTRICT, and SET NULL — know all three cold.',
  },
  {
    id: 'c7', category: 'Beginner',
    question: 'What is the difference between DELETE, DROP, and TRUNCATE?',
    shortAnswer: 'DELETE removes specific rows (optionally with WHERE) and can be rolled back; DROP removes an entire table/database permanently; TRUNCATE quickly clears all rows in a table but keeps its structure.',
    detailedExplanation: 'DELETE is a DML command, operates row-by-row, can use WHERE, and can be rolled back within a transaction. DROP is a DDL command that removes the entire table (or database) structure and data — irreversible without a backup. TRUNCATE is also DDL-like in behavior; it removes all rows instantly, resets AUTO_INCREMENT, and generally cannot be filtered with WHERE.',
    example: 'DELETE FROM orders WHERE status = \'Cancelled\';\nTRUNCATE TABLE temp_logs;\nDROP TABLE old_backup;',
    interviewTip: 'This is one of the most commonly asked SQL interview questions — practice explaining all three differences fluently without hesitation.',
  },
  {
    id: 'c8', category: 'Beginner',
    question: 'What does the WHERE clause do?',
    shortAnswer: 'WHERE filters rows based on a specified condition, so only matching rows are selected, updated, or deleted.',
    detailedExplanation: 'WHERE is evaluated before any grouping or aggregation happens. It supports comparison operators, AND/OR/NOT, LIKE, IN, BETWEEN, and IS NULL. Critically, WHERE cannot filter on aggregate function results — that requires HAVING instead.',
    example: 'SELECT * FROM employees WHERE department = \'Sales\' AND salary > 50000;',
    interviewTip: 'If asked "can WHERE filter on a SUM() result?", the correct answer is no — that\'s exactly why HAVING exists.',
  },
  {
    id: 'c9', category: 'Beginner',
    question: 'What is NULL in SQL, and how is it different from 0 or an empty string?',
    shortAnswer: 'NULL represents a missing or unknown value — it is not the same as 0 (a defined number) or \'\' (a defined empty string).',
    detailedExplanation: 'You cannot use = or != to compare with NULL, since any comparison to an unknown value returns UNKNOWN, not TRUE or FALSE. You must use IS NULL or IS NOT NULL. Most aggregate functions ignore NULL values automatically.',
    example: 'SELECT * FROM customers WHERE phone_number IS NULL;',
    interviewTip: 'A classic trap question: "Why does WHERE column = NULL return no rows?" — explain SQL\'s three-valued logic.',
  },
  {
    id: 'c10', category: 'Beginner',
    question: 'What does DISTINCT do?',
    shortAnswer: 'DISTINCT removes duplicate rows from a query result, returning only unique values or unique combinations of selected columns.',
    detailedExplanation: 'DISTINCT applies to the full combination of selected columns, not just one column individually, when multiple columns are selected. It can be combined with COUNT to count unique values: COUNT(DISTINCT column).',
    example: 'SELECT DISTINCT department FROM employees;',
    interviewTip: 'Know that DISTINCT can be more expensive on large tables, since MySQL must compare rows to detect duplicates.',
  },

  // ---------------- INTERMEDIATE ----------------
  {
    id: 'c11', category: 'Intermediate',
    question: 'What is the difference between WHERE and HAVING?',
    shortAnswer: 'WHERE filters individual rows before grouping/aggregation; HAVING filters groups after aggregation, and can reference aggregate functions.',
    detailedExplanation: 'Since WHERE executes before GROUP BY logically, it cannot reference the result of an aggregate function like SUM() or COUNT(). HAVING runs after grouping and is specifically designed for filtering on aggregated values.',
    example: 'SELECT department_id, COUNT(*) AS cnt FROM employees GROUP BY department_id HAVING COUNT(*) > 5;',
    interviewTip: 'Be ready to write a quick example live — this is one of the most frequently asked practical SQL questions.',
  },
  {
    id: 'c12', category: 'Intermediate',
    question: 'Explain GROUP BY and how it works with aggregate functions.',
    shortAnswer: 'GROUP BY groups rows sharing the same value(s) in specified columns, letting aggregate functions compute a separate result for each group.',
    detailedExplanation: 'Every non-aggregated column in SELECT must appear in the GROUP BY clause, since SQL needs to know which single value to display for that column across each group\'s (potentially many) rows.',
    example: 'SELECT category, AVG(price) AS avg_price FROM products GROUP BY category;',
    interviewTip: 'A common follow-up: "what happens if a non-aggregated column is left out of GROUP BY?" — explain the ambiguity error in strict SQL mode.',
  },
  {
    id: 'c13', category: 'Intermediate',
    question: 'What are the main types of JOINs in SQL?',
    shortAnswer: 'The main JOIN types are INNER JOIN, LEFT JOIN, RIGHT JOIN, CROSS JOIN, and SELF JOIN.',
    detailedExplanation: 'INNER JOIN returns only matching rows from both tables. LEFT JOIN keeps all rows from the left table, filling unmatched right-side columns with NULL. RIGHT JOIN mirrors this from the right table. CROSS JOIN produces every combination of rows (Cartesian product). SELF JOIN joins a table to itself using aliases, often for hierarchical data.',
    example: 'SELECT e.name, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.employee_id;',
    interviewTip: 'Draw or describe a simple Venn-diagram mental model for INNER vs LEFT vs RIGHT — it helps you explain clearly under pressure.',
  },
  {
    id: 'c14', category: 'Intermediate',
    question: 'What is the difference between UNION and UNION ALL?',
    shortAnswer: 'UNION combines results from two queries and removes duplicate rows; UNION ALL combines them without removing duplicates, making it faster.',
    detailedExplanation: 'Since UNION must compare all rows to eliminate duplicates, it is generally slower than UNION ALL on large result sets. Both require the combined queries to have the same number of columns with compatible data types.',
    example: 'SELECT city FROM customers\nUNION ALL\nSELECT city FROM suppliers;',
    interviewTip: 'If duplicates genuinely don\'t matter or are already known not to exist, always prefer UNION ALL for performance.',
  },
  {
    id: 'c15', category: 'Intermediate',
    question: 'What is a subquery, and where can it be used?',
    shortAnswer: 'A subquery is a query nested inside another query, used to compute an intermediate result the outer query then uses.',
    detailedExplanation: 'Subqueries can appear in SELECT (to compute a derived column), FROM (as a derived table), and WHERE (to filter based on a computed value or list). A subquery always runs (or conceptually re-runs, for correlated subqueries) before the outer query uses its result.',
    example: 'SELECT name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);',
    interviewTip: 'Be ready to distinguish a regular subquery from a correlated subquery, which references a column from the outer query.',
  },
  {
    id: 'c16', category: 'Intermediate',
    question: 'What does EXISTS do, and when would you use it?',
    shortAnswer: 'EXISTS checks whether a subquery returns any rows at all, returning true or false — commonly used with a correlated subquery.',
    detailedExplanation: 'EXISTS is often more efficient than IN for large subqueries, since it can stop as soon as one matching row is found. NOT EXISTS is a common, NULL-safe way to find rows with no matching relationship, often preferred over NOT IN.',
    example: 'SELECT name FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);',
    interviewTip: 'Know why NOT EXISTS is generally safer than NOT IN when the subquery\'s column might contain NULLs.',
  },
  {
    id: 'c17', category: 'Intermediate',
    question: 'What is an index, and why does it improve performance?',
    shortAnswer: 'An index is a lookup structure that lets MySQL find matching rows quickly, instead of scanning the entire table.',
    detailedExplanation: 'Indexes speed up SELECT/WHERE/JOIN/ORDER BY operations, but slightly slow down INSERT/UPDATE/DELETE, since the index must also be maintained. Primary keys and UNIQUE columns are automatically indexed.',
    example: 'CREATE INDEX idx_email ON users (email);',
    interviewTip: 'Be ready to explain the read-vs-write tradeoff — over-indexing is a common junior-developer mistake interviewers probe for.',
  },
  {
    id: 'c18', category: 'Intermediate',
    question: 'What are constraints in SQL? Name a few common types.',
    shortAnswer: 'Constraints are rules enforced on columns to maintain data accuracy, such as NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, and DEFAULT.',
    detailedExplanation: 'Constraints are enforced by the database itself, not just application code, guaranteeing integrity regardless of what inserts the data. For example, CHECK (price > 0) prevents negative prices at the database level.',
    example: 'CREATE TABLE products (price DECIMAL(10,2) CHECK (price > 0));',
    interviewTip: 'Mention that database-level constraints protect against bugs or bypasses in application code — a point interviewers like to hear.',
  },
  {
    id: 'c19', category: 'Intermediate',
    question: 'What is normalization, and why is it important?',
    shortAnswer: 'Normalization organizes tables to reduce data redundancy and prevent update anomalies, typically by following a series of rules called normal forms (1NF, 2NF, 3NF).',
    detailedExplanation: '1NF requires atomic column values. 2NF removes partial dependencies on part of a composite key. 3NF removes transitive dependencies, where a non-key column depends on another non-key column. Over-normalization can hurt performance by requiring many joins, so real-world design often balances normalization with practical needs.',
    example: '-- Instead of repeating department_name in every employee row,\n-- store department_id and look up department_name from a separate departments table.',
    interviewTip: 'Be ready to briefly explain 1NF, 2NF, and 3NF with a one-sentence definition each — this is asked very frequently.',
  },
  {
    id: 'c20', category: 'Intermediate',
    question: 'What is a view, and why would you use one?',
    shortAnswer: 'A view is a virtual table based on a stored query — it doesn\'t store data itself, but runs its underlying query dynamically each time it\'s accessed.',
    detailedExplanation: 'Views are used to simplify complex, frequently-repeated queries and to enforce security by exposing only specific columns or rows without granting direct table access. Views based on simple single-table queries are often updatable; views based on joins or aggregates typically are not.',
    example: 'CREATE VIEW active_employees AS SELECT employee_id, name FROM employees WHERE status = \'Active\';',
    interviewTip: 'If asked "can you INSERT through a view?", the honest answer is "it depends" — explain when it works and when it doesn\'t.',
  },

  // ---------------- ADVANCED ----------------
  {
    id: 'c21', category: 'Advanced',
    question: 'What is a CTE (Common Table Expression), and why use one over a subquery?',
    shortAnswer: 'A CTE is a named, temporary result set defined with WITH, that can be referenced within a single query — improving readability over deeply nested subqueries.',
    detailedExplanation: 'CTEs exist only for the duration of the query they\'re attached to. You can define multiple CTEs in one WITH clause, and even reference earlier CTEs from later ones, making complex multi-step logic much easier to follow than nested subqueries.',
    example: 'WITH high_earners AS (SELECT name, salary FROM employees WHERE salary > 60000)\nSELECT * FROM high_earners WHERE name LIKE \'A%\';',
    interviewTip: 'Mention recursive CTEs (WITH RECURSIVE) if asked about hierarchical data like org charts — it shows deeper knowledge.',
  },
  {
    id: 'c22', category: 'Advanced',
    question: 'What are window functions, and how do they differ from GROUP BY?',
    shortAnswer: 'Window functions calculate values across a set of related rows using OVER(), without collapsing rows into one summary row per group like GROUP BY does.',
    detailedExplanation: 'PARTITION BY divides rows into groups for the window calculation, similar to GROUP BY, but every individual row remains visible in the output. Common window functions include ROW_NUMBER, RANK, DENSE_RANK, LEAD, and LAG.',
    example: 'SELECT name, salary, AVG(salary) OVER (PARTITION BY department_id) AS dept_avg FROM employees;',
    interviewTip: 'This is one of the highest-value advanced topics to master — expect it in almost any mid-to-senior SQL interview.',
  },
  {
    id: 'c23', category: 'Advanced',
    question: 'What is the difference between RANK() and DENSE_RANK()?',
    shortAnswer: 'RANK() leaves gaps in the ranking sequence after ties (1, 2, 2, 4); DENSE_RANK() does not skip any numbers after ties (1, 2, 2, 3).',
    detailedExplanation: 'Both assign the same rank to tied rows. The difference is purely in what happens to the number immediately after a tie. ROW_NUMBER(), by contrast, never produces ties at all — every row gets a unique sequential number, even if the underlying values are identical.',
    example: 'SELECT name, score, RANK() OVER (ORDER BY score DESC) AS rnk, DENSE_RANK() OVER (ORDER BY score DESC) AS drnk FROM results;',
    interviewTip: 'Interviewers frequently ask you to trace through a small example by hand — practice this until it\'s automatic.',
  },
  {
    id: 'c24', category: 'Advanced',
    question: 'What are transactions, and why are they important?',
    shortAnswer: 'A transaction groups multiple SQL statements into a single unit of work — either all succeed together (COMMIT) or none take effect (ROLLBACK).',
    detailedExplanation: 'Transactions are essential for operations that must succeed or fail as a whole, like a bank transfer that debits one account and credits another. SAVEPOINT allows partial rollback within a larger transaction, undoing only recent changes rather than the entire transaction.',
    example: 'START TRANSACTION;\nUPDATE accounts SET balance = balance - 500 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 500 WHERE account_id = 2;\nCOMMIT;',
    interviewTip: 'Be ready to explain what would go wrong WITHOUT a transaction in a transfer scenario — this is a very common framing.',
  },
  {
    id: 'c25', category: 'Advanced',
    question: 'What does ACID stand for?',
    shortAnswer: 'ACID stands for Atomicity, Consistency, Isolation, and Durability — four properties guaranteeing reliable transaction processing.',
    detailedExplanation: 'Atomicity means all-or-nothing execution. Consistency means a transaction takes the database from one valid state to another, respecting constraints. Isolation means concurrent transactions don\'t interfere with each other\'s intermediate states. Durability means committed changes survive crashes or power failures.',
    example: '-- InnoDB (MySQL\'s default engine) is fully ACID-compliant.\n-- MyISAM, an older engine, is not (no transaction support).',
    interviewTip: 'Know that InnoDB is ACID-compliant but MyISAM is not — this specific fact is a very common trivia-style follow-up.',
  },
  {
    id: 'c26', category: 'Advanced',
    question: 'What are isolation levels, and what is MySQL\'s default?',
    shortAnswer: 'Isolation levels control how much visibility one transaction has into another concurrent transaction\'s uncommitted changes. MySQL\'s (InnoDB\'s) default is REPEATABLE READ.',
    detailedExplanation: 'The four standard levels, from least to most strict, are READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, and SERIALIZABLE. Stricter levels provide more consistency but can reduce concurrency and performance under heavy load.',
    example: 'SET TRANSACTION ISOLATION LEVEL READ COMMITTED;',
    interviewTip: 'Be ready to define a "dirty read" (seeing another transaction\'s uncommitted data) — allowed only under READ UNCOMMITTED.',
  },
  {
    id: 'c27', category: 'Advanced',
    question: 'What is a deadlock, and how does MySQL handle it?',
    shortAnswer: 'A deadlock occurs when two or more transactions are each waiting for a lock the other holds, forming a cycle. MySQL automatically detects this and rolls back one transaction to break it.',
    detailedExplanation: 'The "losing" transaction receives an error and should be retried by the application. A common prevention strategy is to always access/lock shared resources (like rows) in the same, consistent order across all transactions.',
    example: '-- Transaction A locks row 1, then tries to lock row 2\n-- Transaction B locks row 2, then tries to lock row 1\n-- => deadlock, MySQL rolls one back automatically',
    interviewTip: 'A great answer includes both the detection mechanism (automatic) AND a concrete prevention technique (consistent lock ordering).',
  },
  {
    id: 'c28', category: 'Advanced',
    question: 'What does EXPLAIN do, and how would you use it to diagnose a slow query?',
    shortAnswer: 'EXPLAIN shows MySQL\'s execution plan for a query without running it — revealing whether indexes are used and roughly how many rows will be scanned.',
    detailedExplanation: 'A "type: ALL" result usually indicates a full table scan (often a red flag on large tables). The "key" column shows which index, if any, MySQL actually used. EXPLAIN replaces guesswork with concrete evidence when optimizing slow queries.',
    example: 'EXPLAIN SELECT * FROM orders WHERE customer_id = 5;',
    interviewTip: 'If asked to "optimize this query" live, always say you\'d start with EXPLAIN before guessing at a fix.',
  },
  {
    id: 'c29', category: 'Advanced',
    question: 'What are some common query optimization techniques?',
    shortAnswer: 'Avoid wrapping indexed columns in functions in WHERE, select only needed columns instead of SELECT *, add appropriate indexes based on real query patterns, and use EXPLAIN to verify.',
    detailedExplanation: 'A function like YEAR(order_date) applied to a column in WHERE typically prevents index usage on that column — comparing against a raw date range instead preserves index usage. Composite indexes should match the leftmost-prefix pattern of actual queries.',
    example: '-- Slower (blocks index use):\nWHERE YEAR(order_date) = 2026\n-- Faster (index-friendly):\nWHERE order_date >= \'2026-01-01\' AND order_date < \'2027-01-01\'',
    interviewTip: 'This exact YEAR() example is a favorite interview question — memorize the fix, not just the concept.',
  },

  // ---------------- INDUSTRY SCENARIOS ----------------
  {
    id: 's1', category: 'Scenario',
    question: 'A table contains 50 million orders and a specific query takes 10 seconds. How would you investigate and optimize it?',
    shortAnswer: 'Start with EXPLAIN to see the execution plan, check for missing or poorly-designed indexes, review the WHERE/JOIN columns, and consider whether the query can be rewritten to avoid functions on indexed columns.',
    detailedExplanation: 'A structured approach: (1) Run EXPLAIN to identify full table scans (type: ALL) or missing index usage. (2) Check if WHERE/JOIN columns are indexed, and whether composite indexes match the query\'s actual filter pattern. (3) Look for functions wrapped around indexed columns that block index usage. (4) Consider whether the query returns far more columns/rows than actually needed (avoid SELECT *). (5) For very large tables, consider partitioning or archiving old data.',
    example: 'EXPLAIN SELECT * FROM orders WHERE customer_id = 12345 AND order_date > \'2026-01-01\';\n-- then add: CREATE INDEX idx_customer_date ON orders (customer_id, order_date);',
    interviewTip: 'Structure your answer as a clear, step-by-step process rather than jumping straight to "add an index" — interviewers want to see your diagnostic approach.',
  },
  {
    id: 's2', category: 'Scenario',
    question: 'Your team needs to run a large DELETE affecting 10 million rows on a live production table. How do you approach this safely?',
    shortAnswer: 'Preview the affected rows first with a matching SELECT COUNT(*), take a backup, break the DELETE into smaller batches, and run it during low-traffic hours.',
    detailedExplanation: 'A single massive DELETE can hold locks for an extended time, blocking other queries and potentially causing a site-wide slowdown. Batching (DELETE ... LIMIT 10000, repeated until 0 rows affected) keeps lock duration short. Always verify the exact row count expected with a SELECT COUNT(*) using the identical WHERE clause before running the destructive operation.',
    example: 'SELECT COUNT(*) FROM logs WHERE created_at < \'2024-01-01\';\n-- confirm the count looks right, then:\nDELETE FROM logs WHERE created_at < \'2024-01-01\' LIMIT 10000;\n-- repeat until 0 rows affected',
    interviewTip: 'Mention specifically that you would test this exact process in staging first — production safety discipline is what separates junior from senior answers here.',
  },
  {
    id: 's3', category: 'Scenario',
    question: 'How would you design a database schema for an e-commerce platform from scratch?',
    shortAnswer: 'Identify core entities (users, products, orders, order_items, categories), define relationships (one-to-many, many-to-many via junction tables), normalize to at least 3NF, then selectively denormalize for known performance-critical read paths.',
    detailedExplanation: 'Products relate to categories (often many-to-many via a junction table), users relate to orders (one-to-many), and orders relate to products through an order_items junction table (since one order has many products, and one product appears in many orders). Add appropriate primary/foreign keys and constraints (e.g., CHECK (price > 0)). Only after establishing a normalized baseline would you consider denormalizing specific, measured hot paths.',
    example: 'CREATE TABLE order_items (\n  order_id INT, product_id INT, quantity INT,\n  PRIMARY KEY (order_id, product_id),\n  FOREIGN KEY (order_id) REFERENCES orders(order_id),\n  FOREIGN KEY (product_id) REFERENCES products(product_id)\n);',
    interviewTip: 'Walk through your reasoning out loud (entities → relationships → keys → normalization) rather than just presenting a final schema — the process matters as much as the result.',
  },
];

const QC_INTERVIEW_CODING = [
  // ---------------- EASY ----------------
  {
    id: 'code1', difficulty: 'Easy', database: 'store',
    question: 'Find all customers who live in "Bhopal".',
    solutionSql: "SELECT * FROM customers WHERE city = 'Bhopal';",
    explanation: 'A straightforward WHERE filter on the city column returns only customers located in Bhopal.',
  },
  {
    id: 'code2', difficulty: 'Easy', database: 'school',
    question: 'Find duplicate student names that appear more than once in the students table.',
    solutionSql: 'SELECT name, COUNT(*) AS occurrences FROM students GROUP BY name HAVING COUNT(*) > 1;',
    explanation: 'Grouping by name and using HAVING COUNT(*) > 1 isolates names that appear in more than one row — the classic duplicate-finding pattern.',
  },
  {
    id: 'code3', difficulty: 'Easy', database: 'company',
    question: 'Count the total number of employees.',
    solutionSql: 'SELECT COUNT(*) AS total_employees FROM employees;',
    explanation: 'COUNT(*) counts every row in the employees table, regardless of NULLs in any specific column.',
  },
  {
    id: 'code4', difficulty: 'Easy', database: 'company',
    question: 'Find the employee with the highest salary.',
    solutionSql: 'SELECT * FROM employees ORDER BY salary DESC LIMIT 1;',
    explanation: 'Sorting by salary descending and taking the first row (LIMIT 1) gives the single highest-paid employee.',
  },

  // ---------------- MEDIUM ----------------
  {
    id: 'code5', difficulty: 'Medium', database: 'company',
    question: 'Find the employee with the second-highest salary.',
    solutionSql: 'SELECT * FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;',
    explanation: 'Sorting descending puts the highest salary first; OFFSET 1 skips that top row, and LIMIT 1 then returns exactly the next one — the second highest.',
  },
  {
    id: 'code6', difficulty: 'Medium', database: 'company',
    question: 'Find the 3rd highest salary among all employees.',
    solutionSql: 'SELECT * FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2;',
    explanation: 'Generalizing the "Nth highest" pattern: OFFSET (N-1) skips the first N-1 rows in descending order, so LIMIT 1 then returns exactly the Nth highest value.',
  },
  {
    id: 'code7', difficulty: 'Medium', database: 'school',
    question: 'Find any students that share the exact same name (potential duplicate records).',
    solutionSql: 'SELECT name, COUNT(*) AS cnt FROM students GROUP BY name HAVING COUNT(*) > 1;',
    explanation: 'This groups students by name and filters (via HAVING) to only names shared by more than one row, surfacing potential duplicate entries.',
  },
  {
    id: 'code8', difficulty: 'Medium', database: 'company',
    question: 'Find all employees earning above the average salary.',
    solutionSql: 'SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);',
    explanation: 'The subquery first computes the overall average salary; the outer query then returns only employees whose salary exceeds that computed value.',
  },
  {
    id: 'code9', difficulty: 'Medium', database: 'store',
    question: 'Find all customers who have never placed an order.',
    solutionSql: 'SELECT customers.name FROM customers LEFT JOIN orders ON customers.customer_id = orders.customer_id WHERE orders.order_id IS NULL;',
    explanation: 'LEFT JOIN keeps every customer even without a matching order, filling unmatched order columns with NULL; filtering WHERE orders.order_id IS NULL then isolates exactly the customers with zero orders.',
  },

  // ---------------- ADVANCED ----------------
  {
    id: 'code10', difficulty: 'Advanced', database: 'company',
    question: 'Find the top-paid employee within each department.',
    solutionSql: 'SELECT department_id, MAX(salary) AS top_salary FROM employees GROUP BY department_id;',
    explanation: 'GROUP BY department_id splits employees into department groups, and MAX(salary) finds the highest salary within each individual group.',
  },
  {
    id: 'code11', difficulty: 'Advanced', database: 'store',
    question: 'Calculate the total revenue generated, broken down by product category.',
    solutionSql: 'SELECT products.category, SUM(orders.amount) AS category_revenue FROM orders JOIN products ON orders.product_id = products.product_id GROUP BY products.category;',
    explanation: 'The JOIN attaches each order to its product\'s category, and GROUP BY with SUM then totals the order amounts within each category separately.',
  },
  {
    id: 'code12', difficulty: 'Advanced', database: 'school',
    question: 'For each teacher, find how many total students they have taught across all their courses.',
    solutionSql: 'SELECT courses.teacher, COUNT(enrollments.student_id) AS total_students FROM courses JOIN enrollments ON courses.course_id = enrollments.course_id GROUP BY courses.teacher;',
    explanation: 'Joining courses to enrollments connects each enrollment to its teacher (via the course), and GROUP BY teacher with COUNT tallies total students taught across all of that teacher\'s courses combined.',
  },
  {
    id: 'code13', difficulty: 'Advanced', database: 'company',
    question: 'List all departments along with their employee count, including departments that might have zero employees.',
    solutionSql: 'SELECT departments.department_name, COUNT(employees.employee_id) AS emp_count FROM departments LEFT JOIN employees ON departments.department_id = employees.department_id GROUP BY departments.department_name;',
    explanation: 'LEFT JOIN from departments ensures every department appears even without matching employees; COUNT(employees.employee_id) correctly returns 0 for such departments since COUNT ignores NULLs from the unmatched side.',
  },
];

if (typeof window !== 'undefined') {
  window.QC_INTERVIEW_CONCEPTS = QC_INTERVIEW_CONCEPTS;
  window.QC_INTERVIEW_CODING = QC_INTERVIEW_CODING;
}
