/* ==========================================================================
   QueryCraft — Practice Question Bank (Phase 4)
   Each question references one of the sample databases from sample-data.js
   (school, company, store) so "Try Yourself" and "Show Solution" both run
   against real, live sample data using the same SQL Learning Simulator
   engine that powers the Playground.
   ========================================================================== */

const QC_PRACTICE = [
  // ---------------- BEGINNER ----------------
  {
    id: 'b1', category: 'Beginner', difficulty: 'Easy', database: 'school',
    question: 'Select every column for every student in the students table.',
    hint: 'Use SELECT * FROM ...',
    solutionSql: 'SELECT * FROM students;',
    explanation: 'SELECT * returns every column, and with no WHERE clause, every row in the table.',
  },
  {
    id: 'b2', category: 'Beginner', difficulty: 'Easy', database: 'school',
    question: 'Select only the name and grade columns from the students table.',
    hint: 'List the two column names, separated by a comma, after SELECT.',
    solutionSql: 'SELECT name, grade FROM students;',
    explanation: 'Naming specific columns returns only those fields, in the order listed.',
  },
  {
    id: 'b3', category: 'Beginner', difficulty: 'Easy', database: 'school',
    question: "Find all students whose grade is exactly 'A'.",
    hint: 'Use WHERE grade = ...',
    solutionSql: "SELECT * FROM students WHERE grade = 'A';",
    explanation: "The WHERE clause filters rows to only those where the grade column equals 'A'.",
  },
  {
    id: 'b4', category: 'Beginner', difficulty: 'Easy', database: 'school',
    question: 'Find all students older than 20.',
    hint: 'Use the > comparison operator on the age column.',
    solutionSql: 'SELECT * FROM students WHERE age > 20;',
    explanation: 'The > operator returns only rows where age is strictly greater than 20.',
  },
  {
    id: 'b5', category: 'Beginner', difficulty: 'Easy', database: 'company',
    question: 'List all employees sorted by salary from highest to lowest.',
    hint: 'Use ORDER BY salary DESC.',
    solutionSql: 'SELECT * FROM employees ORDER BY salary DESC;',
    explanation: 'DESC sorts in descending order, so the highest salary appears first.',
  },
  {
    id: 'b6', category: 'Beginner', difficulty: 'Easy', database: 'company',
    question: 'Find the 3 lowest-paid employees.',
    hint: 'Combine ORDER BY salary ASC with LIMIT 3.',
    solutionSql: 'SELECT * FROM employees ORDER BY salary ASC LIMIT 3;',
    explanation: 'Sorting ascending puts the lowest salary first, and LIMIT 3 keeps only the top 3 rows of that sorted result.',
  },
  {
    id: 'b7', category: 'Beginner', difficulty: 'Easy', database: 'store',
    question: 'List every unique city that appears in the customers table.',
    hint: 'Use SELECT DISTINCT on the city column.',
    solutionSql: 'SELECT DISTINCT city FROM customers;',
    explanation: 'DISTINCT removes duplicate values, showing each city only once even if multiple customers share it.',
  },
  {
    id: 'b8', category: 'Beginner', difficulty: 'Easy', database: 'store',
    question: "Find all products in the 'Electronics' category.",
    hint: "Use WHERE category = 'Electronics'.",
    solutionSql: "SELECT * FROM products WHERE category = 'Electronics';",
    explanation: 'This filters the products table to only rows where the category column matches exactly.',
  },
  {
    id: 'b9', category: 'Beginner', difficulty: 'Easy', database: 'store',
    question: 'Find all orders with a status of "Pending".',
    hint: "Use WHERE status = 'Pending'.",
    solutionSql: "SELECT * FROM orders WHERE status = 'Pending';",
    explanation: 'This returns only the order rows whose status column exactly equals "Pending".',
  },
  {
    id: 'b10', category: 'Beginner', difficulty: 'Easy', database: 'school',
    question: "Find all students whose name starts with 'Aman'.",
    hint: "Use LIKE 'Aman%'.",
    solutionSql: "SELECT * FROM students WHERE name LIKE 'Aman%';",
    explanation: 'The % wildcard after "Aman" matches any characters following it, finding all names that start with "Aman".',
  },

  // ---------------- INTERMEDIATE ----------------
  {
    id: 'i1', category: 'Intermediate', difficulty: 'Medium', database: 'company',
    question: 'Find the average salary of all employees.',
    hint: 'Use the AVG() aggregate function.',
    solutionSql: 'SELECT AVG(salary) AS avg_salary FROM employees;',
    explanation: 'AVG() adds up every salary value and divides by the number of employees, returning one summary row.',
  },
  {
    id: 'i2', category: 'Intermediate', difficulty: 'Medium', database: 'company',
    question: 'Find the total salary cost per department.',
    hint: 'Combine SUM(salary) with GROUP BY department_id.',
    solutionSql: 'SELECT department_id, SUM(salary) AS total_salary FROM employees GROUP BY department_id;',
    explanation: 'GROUP BY groups employees by department_id first, then SUM adds up salaries within each group separately.',
  },
  {
    id: 'i3', category: 'Intermediate', difficulty: 'Medium', database: 'company',
    question: 'Find departments with more than 1 employee.',
    hint: 'Use GROUP BY with COUNT(*) and a HAVING clause.',
    solutionSql: 'SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id HAVING COUNT(*) > 1;',
    explanation: 'HAVING filters groups after aggregation — here it keeps only departments whose employee count exceeds 1.',
  },
  {
    id: 'i4', category: 'Intermediate', difficulty: 'Medium', database: 'store',
    question: 'Find all products priced between 500 and 3000.',
    hint: 'Use the BETWEEN operator.',
    solutionSql: 'SELECT * FROM products WHERE price BETWEEN 500 AND 3000;',
    explanation: 'BETWEEN is inclusive, so it returns rows with a price of exactly 500, exactly 3000, or anything in between.',
  },
  {
    id: 'i5', category: 'Intermediate', difficulty: 'Medium', database: 'store',
    question: "Find all orders that are either 'Pending' or 'Delivered'.",
    hint: 'Use the IN operator with both status values.',
    solutionSql: "SELECT * FROM orders WHERE status IN ('Pending', 'Delivered');",
    explanation: 'IN checks if the status column matches any value in the provided list — a cleaner alternative to multiple OR conditions.',
  },
  {
    id: 'i6', category: 'Intermediate', difficulty: 'Medium', database: 'school',
    question: 'Count how many students are in each grade.',
    hint: 'Use GROUP BY grade with COUNT(*).',
    solutionSql: 'SELECT grade, COUNT(*) AS student_count FROM students GROUP BY grade;',
    explanation: 'This groups students by their grade value, then counts how many rows fall into each group.',
  },
  {
    id: 'i7', category: 'Intermediate', difficulty: 'Medium', database: 'school',
    question: 'List each course along with how many students are enrolled in it.',
    hint: 'JOIN enrollments to courses, then GROUP BY course_name with COUNT(*).',
    solutionSql: 'SELECT courses.course_name, COUNT(*) AS enrolled_count FROM enrollments JOIN courses ON enrollments.course_id = courses.course_id GROUP BY courses.course_name;',
    explanation: 'The JOIN connects each enrollment to its course name, then GROUP BY and COUNT tally how many enrollment rows exist per course.',
  },
  {
    id: 'i8', category: 'Intermediate', difficulty: 'Medium', database: 'store',
    question: 'Find the total amount spent by each customer.',
    hint: 'JOIN orders to customers, then GROUP BY customer name with SUM(amount).',
    solutionSql: 'SELECT customers.name, SUM(orders.amount) AS total_spent FROM orders JOIN customers ON orders.customer_id = customers.customer_id GROUP BY customers.name;',
    explanation: 'Joining orders to customers attaches each order to a customer name, and SUM with GROUP BY totals the amount spent per customer.',
  },
  {
    id: 'i9', category: 'Intermediate', difficulty: 'Medium', database: 'company',
    question: 'List employee names along with their department name.',
    hint: 'Use an INNER JOIN between employees and departments.',
    solutionSql: 'SELECT employees.name, departments.department_name FROM employees JOIN departments ON employees.department_id = departments.department_id;',
    explanation: 'The JOIN matches each employee to their department using department_id, combining data from both tables into one result.',
  },
  {
    id: 'i10', category: 'Intermediate', difficulty: 'Medium', database: 'school',
    question: "Find all students whose name does NOT contain 'Aman'.",
    hint: "Use NOT LIKE '%Aman%'.",
    solutionSql: "SELECT * FROM students WHERE name NOT LIKE '%Aman%';",
    explanation: 'NOT LIKE with % on both sides excludes any name that contains "Aman" anywhere in it.',
  },

  // ---------------- ADVANCED ----------------
  {
    id: 'a1', category: 'Advanced', difficulty: 'Hard', database: 'company',
    question: 'List every employee along with their department name, making sure the query would still include an employee even if their department had no matching record.',
    hint: 'Use LEFT JOIN so unmatched employees still appear, with NULL for department fields.',
    solutionSql: 'SELECT name, department_id FROM employees LEFT JOIN departments ON employees.department_id = departments.department_id;',
    explanation: 'LEFT JOIN keeps every row from the left table (employees here) even if there is no matching row on the right — unmatched rows show NULL for right-table columns.',
  },
  {
    id: 'a2', category: 'Advanced', difficulty: 'Hard', database: 'store',
    question: 'Find every customer who has never placed an order, by comparing orders to the full customer list.',
    hint: 'Use LEFT JOIN from customers to orders, and look for NULL order_id values.',
    solutionSql: 'SELECT customers.name, orders.order_id FROM customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;',
    explanation: 'Every customer appears due to LEFT JOIN; a customer with no matching order shows NULL in the order_id column, which is the pattern used to spot customers with zero orders.',
  },
  {
    id: 'a3', category: 'Advanced', difficulty: 'Hard', database: 'company',
    question: 'Find departments where the average salary is above 60000.',
    hint: 'Use GROUP BY, AVG(), and HAVING together.',
    solutionSql: 'SELECT department_id, AVG(salary) AS avg_salary FROM employees GROUP BY department_id HAVING AVG(salary) > 60000;',
    explanation: 'HAVING filters the grouped, aggregated results — here keeping only departments whose computed average salary exceeds 60000.',
  },
  {
    id: 'a4', category: 'Advanced', difficulty: 'Hard', database: 'store',
    question: 'Find the highest single order amount for each customer.',
    hint: 'JOIN orders to customers, GROUP BY customer name, and use MAX(amount).',
    solutionSql: 'SELECT customers.name, MAX(orders.amount) AS biggest_order FROM orders JOIN customers ON orders.customer_id = customers.customer_id GROUP BY customers.name;',
    explanation: 'MAX combined with GROUP BY finds the single largest order amount within each customer group, rather than one overall maximum.',
  },
  {
    id: 'a5', category: 'Advanced', difficulty: 'Hard', database: 'school',
    question: 'List each student with the number of courses they are enrolled in, including students with zero courses.',
    hint: 'Use LEFT JOIN from students to enrollments, then GROUP BY student name with COUNT.',
    solutionSql: 'SELECT students.name, COUNT(enrollments.course_id) AS course_count FROM students LEFT JOIN enrollments ON students.student_id = enrollments.student_id GROUP BY students.name;',
    explanation: 'LEFT JOIN keeps every student even without enrollments; COUNT(enrollments.course_id) correctly counts 0 for students with no matching enrollment rows, since COUNT ignores NULLs.',
  },
  {
    id: 'a6', category: 'Advanced', difficulty: 'Hard', database: 'company',
    question: 'List employees earning more than 60000, sorted by salary descending, showing only the top 2.',
    hint: 'Combine WHERE, ORDER BY, and LIMIT in one query.',
    solutionSql: 'SELECT name, salary FROM employees WHERE salary > 60000 ORDER BY salary DESC LIMIT 2;',
    explanation: 'WHERE filters first, then ORDER BY sorts the filtered results, and LIMIT trims it down to just the top 2 rows of that sorted, filtered set.',
  },
  {
    id: 'a7', category: 'Advanced', difficulty: 'Hard', database: 'store',
    question: 'Find the average order amount per product category.',
    hint: 'JOIN orders to products, GROUP BY category, and use AVG(amount).',
    solutionSql: 'SELECT products.category, AVG(orders.amount) AS avg_amount FROM orders JOIN products ON orders.product_id = products.product_id GROUP BY products.category;',
    explanation: "The JOIN attaches each order to its product's category, then GROUP BY and AVG calculate the average order amount within each category.",
  },
  {
    id: 'a8', category: 'Advanced', difficulty: 'Hard', database: 'school',
    question: 'Find all courses taught by "Dr. Rao", along with a count of students enrolled in each.',
    hint: "Filter courses WHERE teacher = 'Dr. Rao', then JOIN to enrollments and GROUP BY course.",
    solutionSql: "SELECT courses.course_name, COUNT(enrollments.student_id) AS enrolled FROM courses JOIN enrollments ON courses.course_id = enrollments.course_id WHERE courses.teacher = 'Dr. Rao' GROUP BY courses.course_name;",
    explanation: "This combines a WHERE filter on the teacher with a JOIN and GROUP BY, showing enrollment counts only for Dr. Rao's specific courses.",
  },

  // ---------------- INDUSTRY ----------------
  {
    id: 'ind1', category: 'Industry', difficulty: 'Hard', database: 'store',
    question: '(Scenario) As a data analyst, find total revenue (sum of amount) generated only from "Delivered" orders.',
    hint: "Filter WHERE status = 'Delivered' before summing amount.",
    solutionSql: "SELECT SUM(amount) AS delivered_revenue FROM orders WHERE status = 'Delivered';",
    explanation: 'Filtering to only Delivered orders before summing ensures Pending or Cancelled orders (which have not generated confirmed revenue) are excluded from the total.',
  },
  {
    id: 'ind2', category: 'Industry', difficulty: 'Hard', database: 'company',
    question: '(Scenario) HR wants a headcount and average salary per department in one report.',
    hint: 'Combine COUNT(*) and AVG(salary) in the same GROUP BY query.',
    solutionSql: 'SELECT department_id, COUNT(*) AS headcount, AVG(salary) AS avg_salary FROM employees GROUP BY department_id;',
    explanation: 'A single GROUP BY query can compute multiple aggregate metrics (headcount and average salary) per group at once, which is exactly what a real HR report needs.',
  },
  {
    id: 'ind3', category: 'Industry', difficulty: 'Hard', database: 'store',
    question: '(Scenario) Marketing wants to find cities where customers have placed at least one order, to target repeat-customer campaigns.',
    hint: 'JOIN customers to orders, then use DISTINCT on the city column.',
    solutionSql: 'SELECT DISTINCT customers.city FROM customers JOIN orders ON customers.customer_id = orders.customer_id;',
    explanation: 'The INNER JOIN only keeps customers who have at least one matching order, and DISTINCT ensures each city is listed only once even with multiple qualifying customers.',
  },
  {
    id: 'ind4', category: 'Industry', difficulty: 'Hard', database: 'school',
    question: '(Scenario) The academic office wants a list of students with a grade of C, since they may need additional support.',
    hint: "Filter WHERE grade = 'C', sorted by name for easy review.",
    solutionSql: "SELECT name, age FROM students WHERE grade = 'C' ORDER BY name;",
    explanation: 'This is a straightforward operational query: filter to the at-risk group and sort alphabetically to make the resulting list easy for staff to review.',
  },
  {
    id: 'ind5', category: 'Industry', difficulty: 'Hard', database: 'company',
    question: '(Scenario) Finance needs total payroll cost across the entire company, as one single number.',
    hint: 'Use SUM(salary) with no GROUP BY, to get one overall total.',
    solutionSql: 'SELECT SUM(salary) AS total_payroll FROM employees;',
    explanation: 'Without a GROUP BY clause, SUM collapses every row in the table into a single overall total — exactly the one-number summary Finance needs.',
  },
  {
    id: 'ind6', category: 'Industry', difficulty: 'Hard', database: 'store',
    question: '(Scenario) The product team wants to know the price of the most expensive product in each category.',
    hint: 'Use GROUP BY category with MAX(price).',
    solutionSql: 'SELECT category, MAX(price) AS highest_price FROM products GROUP BY category;',
    explanation: 'GROUP BY category splits products into their categories, and MAX(price) finds the highest price within each individual category group.',
  },
];

if (typeof window !== 'undefined') {
  window.QC_PRACTICE = QC_PRACTICE;
}
