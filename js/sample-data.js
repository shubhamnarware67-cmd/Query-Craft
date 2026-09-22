/* ==========================================================================
   QueryCraft — Sample Databases (Phase 4)
   In-memory sample data used by the Browser SQL Learning Simulator.
   These are plain JS arrays of row objects, grouped into "databases".
   ========================================================================== */

const QC_SAMPLE_DBS = {
  school: {
    label: 'School (students, courses, enrollments)',
    tables: {
      students: [
        { student_id: 1, name: 'Aman Sharma', age: 20, grade: 'A' },
        { student_id: 2, name: 'Riya Verma', age: 21, grade: 'B' },
        { student_id: 3, name: 'Suresh Kumar', age: 19, grade: 'A' },
        { student_id: 4, name: 'Kavya Singh', age: 22, grade: 'C' },
        { student_id: 5, name: 'Aman Gupta', age: 20, grade: 'B' },
      ],
      courses: [
        { course_id: 101, course_name: 'Databases', teacher: 'Dr. Rao' },
        { course_id: 102, course_name: 'Web Development', teacher: 'Ms. Iyer' },
        { course_id: 103, course_name: 'Data Structures', teacher: 'Dr. Rao' },
      ],
      enrollments: [
        { student_id: 1, course_id: 101 },
        { student_id: 1, course_id: 102 },
        { student_id: 2, course_id: 101 },
        { student_id: 3, course_id: 103 },
        { student_id: 5, course_id: 102 },
      ],
    },
  },
  company: {
    label: 'Company (employees, departments)',
    tables: {
      employees: [
        { employee_id: 1, name: 'Aman', department_id: 1, salary: 65000 },
        { employee_id: 2, name: 'Riya', department_id: 1, salary: 72000 },
        { employee_id: 3, name: 'Suresh', department_id: 2, salary: 58000 },
        { employee_id: 4, name: 'Kavya', department_id: 3, salary: 80000 },
        { employee_id: 5, name: 'Priya', department_id: 2, salary: 61000 },
      ],
      departments: [
        { department_id: 1, department_name: 'Sales' },
        { department_id: 2, department_name: 'Engineering' },
        { department_id: 3, department_name: 'Legal' },
      ],
    },
  },
  store: {
    label: 'Store (customers, products, orders)',
    tables: {
      customers: [
        { customer_id: 1, name: 'Aman Sharma', city: 'Bhopal' },
        { customer_id: 2, name: 'Riya Verma', city: 'Indore' },
        { customer_id: 3, name: 'Suresh Kumar', city: 'Bhopal' },
      ],
      products: [
        { product_id: 1, name: 'Headphones', price: 1999, category: 'Electronics' },
        { product_id: 2, name: 'SQL Guide', price: 499, category: 'Books' },
        { product_id: 3, name: 'Smartwatch', price: 4999, category: 'Electronics' },
      ],
      orders: [
        { order_id: 1, customer_id: 1, product_id: 1, amount: 1999, status: 'Delivered' },
        { order_id: 2, customer_id: 1, product_id: 2, amount: 499, status: 'Pending' },
        { order_id: 3, customer_id: 2, product_id: 3, amount: 4999, status: 'Delivered' },
      ],
    },
  },
  banking: {
    label: 'Banking (customers, accounts, transactions)',
    tables: {
      customers: [
        { customer_id: 1, name: 'Aman Sharma', city: 'Bhopal' },
        { customer_id: 2, name: 'Riya Verma', city: 'Indore' },
        { customer_id: 3, name: 'Suresh Kumar', city: 'Bhopal' },
      ],
      accounts: [
        { account_id: 101, customer_id: 1, account_type: 'Savings', balance: 45000 },
        { account_id: 102, customer_id: 1, account_type: 'Current', balance: 120000 },
        { account_id: 103, customer_id: 2, account_type: 'Savings', balance: 8000 },
        { account_id: 104, customer_id: 3, account_type: 'Savings', balance: 67000 },
      ],
      transactions: [
        { transaction_id: 1, account_id: 101, type: 'Deposit', amount: 5000 },
        { transaction_id: 2, account_id: 101, type: 'Withdrawal', amount: 2000 },
        { transaction_id: 3, account_id: 103, type: 'Deposit', amount: 8000 },
        { transaction_id: 4, account_id: 104, type: 'Withdrawal', amount: 1500 },
        { transaction_id: 5, account_id: 102, type: 'Deposit', amount: 50000 },
      ],
    },
  },
  food_delivery: {
    label: 'Food Delivery (restaurants, menu_items, orders)',
    tables: {
      restaurants: [
        { restaurant_id: 1, name: 'Spice Villa', city: 'Bhopal', rating: 4.3 },
        { restaurant_id: 2, name: 'Pasta Point', city: 'Indore', rating: 4.6 },
        { restaurant_id: 3, name: 'Curry House', city: 'Bhopal', rating: 4.1 },
      ],
      menu_items: [
        { item_id: 1, restaurant_id: 1, name: 'Paneer Butter Masala', price: 249 },
        { item_id: 2, restaurant_id: 1, name: 'Butter Naan', price: 49 },
        { item_id: 3, restaurant_id: 2, name: 'Alfredo Pasta', price: 299 },
        { item_id: 4, restaurant_id: 3, name: 'Chicken Curry', price: 279 },
      ],
      orders: [
        { order_id: 1, restaurant_id: 1, item_id: 1, quantity: 2, amount: 498 },
        { order_id: 2, restaurant_id: 1, item_id: 2, quantity: 4, amount: 196 },
        { order_id: 3, restaurant_id: 2, item_id: 3, quantity: 1, amount: 299 },
        { order_id: 4, restaurant_id: 3, item_id: 4, quantity: 2, amount: 558 },
      ],
    },
  },
  placement: {
    label: 'Placement (students, companies, applications)',
    tables: {
      students: [
        { student_id: 1, name: 'Aman Sharma', branch: 'CSE', cgpa: 8.7 },
        { student_id: 2, name: 'Riya Verma', branch: 'IT', cgpa: 9.1 },
        { student_id: 3, name: 'Suresh Kumar', branch: 'CSE', cgpa: 7.8 },
      ],
      companies: [
        { company_id: 1, name: 'TechCorp', package_lpa: 12 },
        { company_id: 2, name: 'DataSystems', package_lpa: 18 },
      ],
      applications: [
        { application_id: 1, student_id: 1, company_id: 1, status: 'Selected' },
        { application_id: 2, student_id: 1, company_id: 2, status: 'Rejected' },
        { application_id: 3, student_id: 2, company_id: 2, status: 'Selected' },
        { application_id: 4, student_id: 3, company_id: 1, status: 'Pending' },
      ],
    },
  },
};

if (typeof window !== 'undefined') {
  window.QC_SAMPLE_DBS = QC_SAMPLE_DBS;
}
