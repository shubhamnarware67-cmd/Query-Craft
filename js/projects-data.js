/* ==========================================================================
   QueryCraft — Project-Based Learning (Phase 6)
   Five real-world project schemas, each with a full CREATE TABLE DDL and a
   set of analytical queries. Query solutions are validated against the
   matching sample database in sample-data.js using the same SQL Learning
   Simulator engine that powers the Playground, Practice, and Interview pages.
   ========================================================================== */

const QC_PROJECTS = [
  {
    id: 'student-management',
    title: 'Student Management System',
    tagline: 'Model students, courses, and enrollments with a many-to-many relationship.',
    database: 'school',
    tables: ['students', 'courses', 'enrollments'],
    schema: `CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT,
  grade VARCHAR(2)
);

CREATE TABLE courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(100) NOT NULL,
  teacher VARCHAR(100)
);

CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);`,
    designNotes: [
      'enrollments is a junction table resolving the many-to-many relationship between students and courses.',
      'The composite primary key (student_id, course_id) prevents a student from being enrolled in the same course twice.',
      'Both foreign keys enforce that enrollments only ever reference real students and real courses.',
    ],
    queries: [
      {
        question: 'List each course along with the number of students enrolled.',
        solutionSql: 'SELECT courses.course_name, COUNT(*) AS enrolled FROM enrollments JOIN courses ON enrollments.course_id = courses.course_id GROUP BY courses.course_name;',
        explanation: 'Joining enrollments to courses attaches each enrollment row to its course name; GROUP BY and COUNT then tally enrollment counts per course.',
      },
      {
        question: 'Find students who are not enrolled in any course.',
        solutionSql: 'SELECT students.name FROM students LEFT JOIN enrollments ON students.student_id = enrollments.student_id WHERE enrollments.course_id IS NULL;',
        explanation: 'LEFT JOIN keeps every student even without enrollments; filtering for NULL enrollments.course_id isolates students with zero matching rows.',
      },
      {
        question: "List all courses taught by 'Dr. Rao'.",
        solutionSql: "SELECT * FROM courses WHERE teacher = 'Dr. Rao';",
        explanation: 'A simple WHERE filter on the teacher column returns only that teacher\'s courses.',
      },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Database',
    tagline: 'Customers, products, and orders — the classic online store schema.',
    database: 'store',
    tables: ['customers', 'products', 'orders'],
    schema: `CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  city VARCHAR(50)
);

CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) CHECK (price > 0),
  category VARCHAR(50)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  product_id INT,
  amount DECIMAL(10,2),
  status VARCHAR(20) DEFAULT 'Pending',
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);`,
    designNotes: [
      'In a full production schema, orders and order_items would typically be split so one order can contain multiple products — this simplified version keeps one product per order row for teaching clarity.',
      'CHECK (price > 0) prevents accidentally inserting a negative or zero-priced product at the database level.',
      'DEFAULT \'Pending\' means new orders don\'t need to explicitly specify a status when first created.',
    ],
    queries: [
      {
        question: 'Find total revenue from Delivered orders only.',
        solutionSql: "SELECT SUM(amount) AS delivered_revenue FROM orders WHERE status = 'Delivered';",
        explanation: 'Filtering to only Delivered orders before summing ensures Pending orders (not yet confirmed revenue) are excluded.',
      },
      {
        question: 'Find the top-selling product by total order amount.',
        solutionSql: 'SELECT products.name, SUM(orders.amount) AS total_sales FROM orders JOIN products ON orders.product_id = products.product_id GROUP BY products.name ORDER BY total_sales DESC LIMIT 1;',
        explanation: 'Joining orders to products, grouping by product name, and summing amount finds total sales per product; sorting descending and taking the top row finds the single best seller.',
      },
      {
        question: 'Find products that have never been ordered.',
        solutionSql: 'SELECT products.name FROM products LEFT JOIN orders ON products.product_id = orders.product_id WHERE orders.order_id IS NULL;',
        explanation: 'LEFT JOIN keeps every product even without matching orders; filtering for NULL order_id isolates products with zero orders.',
      },
      {
        question: 'Calculate the average order value across all orders.',
        solutionSql: 'SELECT AVG(amount) AS avg_order_value FROM orders;',
        explanation: 'AVG() computes the mean order amount across every row in the orders table.',
      },
    ],
  },
  {
    id: 'banking',
    title: 'Banking Database',
    tagline: 'Customers, accounts, and transactions with account-level relationships.',
    database: 'banking',
    tables: ['customers', 'accounts', 'transactions'],
    schema: `CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  city VARCHAR(50)
);

CREATE TABLE accounts (
  account_id INT PRIMARY KEY,
  customer_id INT,
  account_type VARCHAR(20),
  balance DECIMAL(12,2) DEFAULT 0,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE transactions (
  transaction_id INT PRIMARY KEY,
  account_id INT,
  type VARCHAR(20),
  amount DECIMAL(12,2) CHECK (amount > 0),
  FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);`,
    designNotes: [
      'One customer can have multiple accounts (Savings, Current) — a one-to-many relationship, exactly like students and enrollments.',
      'Every transaction references a single account, keeping a clean audit trail of deposits and withdrawals.',
      'In a real banking system, transferring money between two accounts would be wrapped in a database TRANSACTION (START TRANSACTION / COMMIT) to guarantee both sides succeed or fail together.',
    ],
    queries: [
      {
        question: 'Find the total balance held by each customer, across all their accounts.',
        solutionSql: 'SELECT customers.name, SUM(accounts.balance) AS total_balance FROM accounts JOIN customers ON accounts.customer_id = customers.customer_id GROUP BY customers.name;',
        explanation: 'Joining accounts to customers attaches each account to its owner, and GROUP BY with SUM totals balances across every account belonging to that customer.',
      },
      {
        question: 'Find all accounts with a balance above 50000.',
        solutionSql: 'SELECT * FROM accounts WHERE balance > 50000;',
        explanation: 'A direct WHERE filter on the balance column returns only higher-balance accounts.',
      },
      {
        question: 'Calculate the total amount withdrawn across all accounts.',
        solutionSql: "SELECT SUM(amount) AS total_withdrawn FROM transactions WHERE type = 'Withdrawal';",
        explanation: "Filtering transactions to only type = 'Withdrawal' before summing amount gives the total withdrawn across every account.",
      },
    ],
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Database',
    tagline: 'Restaurants, menu items, and orders for a delivery platform.',
    database: 'food_delivery',
    tables: ['restaurants', 'menu_items', 'orders'],
    schema: `CREATE TABLE restaurants (
  restaurant_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  city VARCHAR(50),
  rating DECIMAL(2,1)
);

CREATE TABLE menu_items (
  item_id INT PRIMARY KEY,
  restaurant_id INT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  restaurant_id INT,
  item_id INT,
  quantity INT,
  amount DECIMAL(10,2),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id),
  FOREIGN KEY (item_id) REFERENCES menu_items(item_id)
);`,
    designNotes: [
      'menu_items references restaurants, since each menu item belongs to exactly one restaurant.',
      'A production schema would typically add customers and delivery_partners tables, with orders referencing both — simplified here to focus on the restaurant/menu/order core.',
      'rating uses DECIMAL(2,1) to store values like 4.3 with exactly one decimal place, which is more predictable than FLOAT for a bounded rating scale.',
    ],
    queries: [
      {
        question: 'Find total revenue generated by each restaurant.',
        solutionSql: 'SELECT restaurants.name, SUM(orders.amount) AS revenue FROM orders JOIN restaurants ON orders.restaurant_id = restaurants.restaurant_id GROUP BY restaurants.name;',
        explanation: 'Joining orders to restaurants and grouping by restaurant name totals order revenue for each individual restaurant.',
      },
      {
        question: 'Find the highest-rated restaurant in Bhopal.',
        solutionSql: "SELECT * FROM restaurants WHERE city = 'Bhopal' ORDER BY rating DESC LIMIT 1;",
        explanation: "Filtering to Bhopal first, then sorting by rating descending and taking the top row finds the single highest-rated restaurant in that city.",
      },
      {
        question: 'Find the best-selling menu item by total quantity ordered.',
        solutionSql: 'SELECT menu_items.name, SUM(orders.quantity) AS total_qty FROM orders JOIN menu_items ON orders.item_id = menu_items.item_id GROUP BY menu_items.name ORDER BY total_qty DESC LIMIT 1;',
        explanation: 'Grouping by menu item name and summing quantity across all its orders, then sorting descending, surfaces the single most-ordered item.',
      },
    ],
  },
  {
    id: 'placement',
    title: 'Placement Management System',
    tagline: 'Students, companies, and applications for a college placement cell.',
    database: 'placement',
    tables: ['students', 'companies', 'applications'],
    schema: `CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  branch VARCHAR(50),
  cgpa DECIMAL(3,2)
);

CREATE TABLE companies (
  company_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  package_lpa DECIMAL(5,2)
);

CREATE TABLE applications (
  application_id INT PRIMARY KEY,
  student_id INT,
  company_id INT,
  status VARCHAR(20) DEFAULT 'Pending',
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (company_id) REFERENCES companies(company_id)
);`,
    designNotes: [
      'applications is a junction-style table between students and companies, similar in shape to enrollments — but here it also carries meaningful data of its own (status), which is common when the relationship itself has attributes.',
      'A real placement system would likely add an interviews table too, tracking multiple interview rounds per application.',
      'package_lpa uses DECIMAL for precision, since salary packages are exact figures that shouldn\'t suffer floating-point rounding issues.',
    ],
    queries: [
      {
        question: 'Find all students who have been Selected by at least one company.',
        solutionSql: "SELECT DISTINCT students.name FROM students JOIN applications ON students.student_id = applications.student_id WHERE applications.status = 'Selected';",
        explanation: "Joining students to applications and filtering WHERE status = 'Selected' finds students with at least one successful application; DISTINCT avoids listing a student twice if selected by multiple companies.",
      },
      {
        question: 'Find the average CGPA of students who applied to "DataSystems".',
        solutionSql: "SELECT AVG(students.cgpa) AS avg_cgpa FROM students JOIN applications ON students.student_id = applications.student_id JOIN companies ON applications.company_id = companies.company_id WHERE companies.name = 'DataSystems';",
        explanation: 'Chaining two JOINs connects students through applications to companies, and filtering by company name isolates only students who applied there before averaging their CGPA.',
      },
      {
        question: 'Count how many applications are still Pending.',
        solutionSql: "SELECT COUNT(*) AS pending_count FROM applications WHERE status = 'Pending';",
        explanation: "COUNT(*) with a WHERE filter on status = 'Pending' gives a quick operational count for the placement cell to follow up on.",
      },
    ],
  },
];

const QC_CAPSTONE = {
  title: 'Final Capstone: Industry E-Commerce Database',
  intro: 'The capstone brings together everything from the course — design, normalization, keys, constraints, joins, aggregates, CTEs, window functions, and transactions — into one realistic system. Work through each requirement below, then check your approach against the reference solution.',
  requirements: [
    'Design tables for: users, products, categories, orders, order_items, and payments.',
    'Establish correct relationships: one-to-many (users → orders), many-to-many (products ↔ categories via a junction table), and one order containing many order_items.',
    'Add appropriate PRIMARY KEY and FOREIGN KEY constraints on every relationship.',
    'Add sensible CHECK and DEFAULT constraints (e.g., price > 0, order status defaulting to \'Pending\').',
    'Normalize the design to at least 3NF — no repeated or redundant data across tables.',
    'Write a query using a CTE to calculate monthly revenue.',
    'Write a query using a window function (RANK or ROW_NUMBER) to find each customer\'s most recent order.',
    'Wrap a multi-step operation (like placing an order and reducing stock) in a transaction using START TRANSACTION / COMMIT.',
  ],
  referenceSchema: `CREATE TABLE users (
  user_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE categories (
  category_id INT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);

CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) CHECK (price > 0),
  stock INT DEFAULT 0
);

CREATE TABLE product_categories (
  product_id INT,
  category_id INT,
  PRIMARY KEY (product_id, category_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  user_id INT,
  order_date DATE,
  status VARCHAR(20) DEFAULT 'Pending',
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE order_items (
  order_id INT,
  product_id INT,
  quantity INT CHECK (quantity > 0),
  price_at_purchase DECIMAL(10,2),
  PRIMARY KEY (order_id, product_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE payments (
  payment_id INT PRIMARY KEY,
  order_id INT,
  amount DECIMAL(10,2),
  paid_at DATETIME,
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
);`,
  referenceQueries: [
    {
      label: 'Monthly revenue using a CTE',
      sql: `WITH monthly_revenue AS (
  SELECT
    YEAR(orders.order_date) AS yr,
    MONTH(orders.order_date) AS mo,
    SUM(order_items.quantity * order_items.price_at_purchase) AS revenue
  FROM orders
  JOIN order_items ON orders.order_id = order_items.order_id
  GROUP BY YEAR(orders.order_date), MONTH(orders.order_date)
)
SELECT * FROM monthly_revenue ORDER BY yr, mo;`,
      explanation: 'The CTE computes revenue per calendar month once, giving the final SELECT a clean, named result to sort — much more readable than nesting the same aggregation inside a subquery.',
    },
    {
      label: "Each customer's most recent order using a window function",
      sql: `SELECT user_id, order_id, order_date,
  ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY order_date DESC) AS rn
FROM orders
QUALIFY rn = 1;
-- (MySQL has no QUALIFY; wrap in a subquery/CTE and filter WHERE rn = 1 instead)`,
      explanation: 'ROW_NUMBER() with PARTITION BY user_id restarts numbering for each customer, ordered by order_date descending — row 1 within each partition is that customer\'s most recent order. Since MySQL lacks QUALIFY, wrap this in a CTE and filter the outer query with WHERE rn = 1.',
    },
    {
      label: 'Placing an order safely inside a transaction',
      sql: `START TRANSACTION;
INSERT INTO orders (order_id, user_id, order_date, status) VALUES (501, 12, CURDATE(), 'Pending');
INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES (501, 7, 2, 1999.00);
UPDATE products SET stock = stock - 2 WHERE product_id = 7;
COMMIT;`,
      explanation: 'All three statements succeed together or not at all — if the stock update failed (e.g., insufficient stock via a CHECK constraint), a ROLLBACK would undo the order and order_items inserts too, preventing an inconsistent state.',
    },
  ],
};

if (typeof window !== 'undefined') {
  window.QC_PROJECTS = QC_PROJECTS;
  window.QC_CAPSTONE = QC_CAPSTONE;
}
