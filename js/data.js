/* QueryCraft Data Layer — ALL 122 chapters complete (Foundation through Industry). */

const QC_LEVELS = [
  {
    "id": 1,
    "name": "Foundation",
    "range": [
      1,
      12
    ]
  },
  {
    "id": 2,
    "name": "Beginner SQL",
    "range": [
      13,
      31
    ]
  },
  {
    "id": 3,
    "name": "Intermediate",
    "range": [
      32,
      50
    ]
  },
  {
    "id": 4,
    "name": "Joins",
    "range": [
      51,
      59
    ]
  },
  {
    "id": 5,
    "name": "Database Design",
    "range": [
      60,
      75
    ]
  },
  {
    "id": 6,
    "name": "Advanced SQL",
    "range": [
      76,
      90
    ]
  },
  {
    "id": 7,
    "name": "Database Objects",
    "range": [
      91,
      98
    ]
  },
  {
    "id": 8,
    "name": "Transactions",
    "range": [
      99,
      105
    ]
  },
  {
    "id": 9,
    "name": "Performance",
    "range": [
      106,
      112
    ]
  },
  {
    "id": 10,
    "name": "Industry",
    "range": [
      113,
      122
    ]
  }
];

const QC_DATA = {
  levels: QC_LEVELS,
  chapters: [
  {
    "id": 1,
    "title": "What is Data?",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 6,
    "concept": "Data is any raw fact or piece of information \u2014 a name, a number, a date, a price. On its own, a single piece of data doesn't tell you much. Once organized and given context, it becomes information you can use.",
    "realLifeExample": "In a college, a student's roll number, name, and marks are all data. Alone, '87' means nothing. Next to 'Riya Sharma \u2014 Maths \u2014 87', it becomes useful information.",
    "syntax": "-- Data has no SQL syntax on its own; it becomes meaningful once stored in a structured table.",
    "examples": [
      {
        "sql": "-- Raw data\nRiya, 21, Computer Science\nAman, 22, Mechanical",
        "output": "Name: Riya | Age: 21 | Branch: Computer Science\nName: Aman | Age: 22 | Branch: Mechanical",
        "explanation": "Each comma-separated value is a piece of data. Grouped in rows, it starts to describe real students."
      }
    ],
    "importantPoints": [
      "Data can be numbers, text, dates, images, or files.",
      "Data alone is not organized \u2014 a database organizes it.",
      "Good decisions in every industry start with reliable data."
    ],
    "commonMistakes": [
      {
        "wrong": "Data = Database",
        "correct": "Data is raw content; a Database is the organized system that stores it",
        "why": "Data is the content; a database is the container that structures it."
      }
    ],
    "practiceQuestions": [
      {
        "text": "List 5 examples of data you generate every day.",
        "difficulty": "Easy",
        "hint": "Think about your phone, apps, and daily routine."
      },
      {
        "text": "Classify '42' and 'Ravi is 42 years old' as data or information.",
        "difficulty": "Easy",
        "hint": "Information has context; data does not."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between data and information?",
        "answer": "Data is raw, unorganized facts. Information is data that has been processed or given context to become meaningful."
      },
      {
        "question": "Give a real-world example of data becoming information.",
        "answer": "Raw sensor readings (data) become a 'fuel efficiency report' (information) once analyzed."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Which of these is raw data?",
        "options": [
          "A sales report",
          "The number 45",
          "A dashboard chart",
          "A business decision"
        ],
        "correctIndex": 1,
        "explanation": "45 alone has no context \u2014 that's raw data."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What turns data into information?",
        "options": [
          "Storing it in a spreadsheet",
          "Giving it context and organization",
          "Deleting rows",
          "Backing it up"
        ],
        "correctIndex": 1,
        "explanation": "Context and organization convert data into information."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which is NOT a type of data?",
        "options": [
          "Text",
          "Numbers",
          "Dates",
          "An unrecorded opinion"
        ],
        "correctIndex": 3,
        "explanation": "Data must be recorded in some form."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "'2024-05-01' stored in order_date is what type of data?",
        "options": [
          "Text",
          "Date",
          "Numeric",
          "Boolean"
        ],
        "correctIndex": 1,
        "explanation": "It represents a date and should use a date type."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why does data matter to a business?",
        "options": [
          "Looks good in reports",
          "Legally required only",
          "Powers decisions and predictions",
          "Has no real use"
        ],
        "correctIndex": 2,
        "explanation": "Businesses use data to make informed decisions."
      }
    ]
  },
  {
    "id": 2,
    "title": "What is a Database?",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 7,
    "concept": "A database is an organized collection of data stored electronically so it can be accessed, managed, and updated efficiently. It keeps related data together in a structured, searchable way.",
    "realLifeExample": "A bank keeps millions of customer records and transactions. Instead of paper files, all of this lives in a database so any branch can pull up your account instantly.",
    "syntax": "CREATE DATABASE database_name;",
    "examples": [
      {
        "sql": "CREATE DATABASE bank_system;",
        "output": "Query OK, 1 row affected",
        "explanation": "Creates a new, empty database named 'bank_system' where tables will later be added."
      }
    ],
    "importantPoints": [
      "A database stores data in an organized, structured way (tables).",
      "Databases allow multiple users to access and update data simultaneously.",
      "Databases replace scattered spreadsheets or paper records at scale."
    ],
    "commonMistakes": [
      {
        "wrong": "Database = Table",
        "correct": "A Database contains many Tables",
        "why": "A database is the overall container; tables are structures inside it holding rows of data."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Name three real-world systems that likely use a database.",
        "difficulty": "Easy",
        "hint": "Think of apps you use daily."
      },
      {
        "text": "Why can't a company just use Excel instead of a database?",
        "difficulty": "Medium",
        "hint": "Consider multiple users, volume, and speed."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a database?",
        "answer": "An organized collection of structured data, stored electronically, that can be efficiently accessed, managed, and updated."
      },
      {
        "question": "Why do we need databases instead of files like Excel?",
        "answer": "Databases handle large data volumes, support concurrent users, enforce integrity via constraints, and allow fast searching via indexing."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is a database?",
        "options": [
          "A single spreadsheet file",
          "An organized collection of structured data",
          "A programming language",
          "A type of computer"
        ],
        "correctIndex": 1,
        "explanation": "A database organizes data electronically."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which is a real-world use of a database?",
        "options": [
          "Storing bank transactions",
          "Printing a document",
          "Playing a video",
          "Formatting text"
        ],
        "correctIndex": 0,
        "explanation": "Banks rely on databases for transaction data."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Advantage of a database over a text file?",
        "options": [
          "Looks nicer",
          "Structured queries and multi-user access",
          "Always smaller",
          "Cannot be backed up"
        ],
        "correctIndex": 1,
        "explanation": "Databases support SQL queries and safe concurrent access."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "'A database and spreadsheet are exactly the same.' What's wrong?",
        "options": [
          "Nothing",
          "Spreadsheets can't handle scale/multi-user relational data reliably",
          "Databases are always slower",
          "Spreadsheets are databases"
        ],
        "correctIndex": 1,
        "explanation": "Spreadsheets don't scale like databases."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "A company has 2M products and thousands of orders/min. What should they use?",
        "options": [
          "Excel file",
          "Paper ledger",
          "A database",
          "Plain text files"
        ],
        "correctIndex": 2,
        "explanation": "Only a database handles this volume and concurrency."
      }
    ]
  },
  {
    "id": 3,
    "title": "DBMS",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 7,
    "concept": "A DBMS (Database Management System) is software that lets you create, read, update, delete, and manage databases. It's the interface between applications and the actual stored data.",
    "realLifeExample": "When a food delivery app checks if a restaurant is open, the app talks to a DBMS (like MySQL), which fetches the answer from the database.",
    "syntax": "-- DBMS is software, not a SQL command. Examples: MySQL, PostgreSQL, Oracle, SQL Server, SQLite.",
    "examples": [
      {
        "sql": "SELECT is_open FROM restaurants WHERE restaurant_id = 101;",
        "output": "is_open\n--------\n1",
        "explanation": "The app sends this query to the DBMS. The DBMS locates the data and returns the result."
      }
    ],
    "importantPoints": [
      "DBMS = software layer managing databases (MySQL, PostgreSQL, Oracle, etc.).",
      "It handles storage, retrieval, security, and concurrent access.",
      "Without a DBMS you'd manually manage raw data files."
    ],
    "commonMistakes": [
      {
        "wrong": "MySQL is a database",
        "correct": "MySQL is a DBMS that manages databases",
        "why": "MySQL is software; the data you create lives inside databases MySQL manages."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Name three popular DBMS products besides MySQL.",
        "difficulty": "Easy",
        "hint": "Think of other vendors and open-source projects."
      },
      {
        "text": "Explain in one sentence what a DBMS does for an application.",
        "difficulty": "Easy",
        "hint": "Focus on the middleman role."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a DBMS?",
        "answer": "Software that enables creating, reading, updating, and deleting data in a database while handling storage, security, and concurrency."
      },
      {
        "question": "Name popular DBMS software.",
        "answer": "MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, SQLite, and MongoDB (NoSQL)."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does DBMS stand for?",
        "options": [
          "Data Base Management Software",
          "Database Management System",
          "Data Backup Management Service",
          "Database Model Storage"
        ],
        "correctIndex": 1,
        "explanation": "DBMS = Database Management System."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which of these is a DBMS?",
        "options": [
          "HTML",
          "MySQL",
          "CSS",
          "Photoshop"
        ],
        "correctIndex": 1,
        "explanation": "MySQL is a relational DBMS."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Main job of a DBMS?",
        "options": [
          "Design layouts",
          "Manage and control access to data",
          "Compile code",
          "Send emails"
        ],
        "correctIndex": 1,
        "explanation": "A DBMS manages storage, retrieval, and security of data."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which is NOT a typical DBMS responsibility?",
        "options": [
          "Data security",
          "Concurrent access control",
          "Video editing",
          "Data storage/retrieval"
        ],
        "correctIndex": 2,
        "explanation": "Video editing is unrelated to database management."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Two users update the same record at once. What DBMS feature solves conflicts?",
        "options": [
          "Concurrency control",
          "Font rendering",
          "Image compression",
          "Password autofill"
        ],
        "correctIndex": 0,
        "explanation": "Concurrency control safely manages simultaneous access."
      }
    ]
  },
  {
    "id": 4,
    "title": "RDBMS",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 7,
    "concept": "An RDBMS (Relational Database Management System) is a DBMS that stores data in tables (relations) made of rows and columns, and lets tables relate to each other through keys. MySQL, PostgreSQL, and Oracle are all RDBMS.",
    "realLifeExample": "In an e-commerce system, a 'customers' table relates to an 'orders' table through a customer_id \u2014 that relationship is the 'relational' part of RDBMS.",
    "syntax": "-- RDBMS is a category of DBMS; tables are its core structure.\nCREATE TABLE customers (\n  customer_id INT PRIMARY KEY,\n  name VARCHAR(100)\n);",
    "examples": [
      {
        "sql": "CREATE TABLE customers (customer_id INT PRIMARY KEY, name VARCHAR(100));",
        "output": "Query OK, 0 rows affected",
        "explanation": "Creates a table with two columns. The customer_id can later be referenced by other tables, forming a relationship."
      }
    ],
    "importantPoints": [
      "RDBMS stores data in related tables, not isolated files.",
      "Relationships are built using primary keys and foreign keys.",
      "Not all DBMS are relational \u2014 MongoDB, for example, is a NoSQL (non-relational) DBMS."
    ],
    "commonMistakes": [
      {
        "wrong": "All DBMS are RDBMS",
        "correct": "RDBMS is a subtype of DBMS that uses relational (table-based) structure",
        "why": "MongoDB and Redis are DBMS but not RDBMS, since they don't store data in relational tables."
      }
    ],
    "practiceQuestions": [
      {
        "text": "List two RDBMS and two non-relational (NoSQL) databases.",
        "difficulty": "Easy",
        "hint": "Think MySQL/PostgreSQL vs MongoDB/Redis."
      },
      {
        "text": "Why is the word 'relational' used to describe RDBMS?",
        "difficulty": "Medium",
        "hint": "Think about how tables connect to each other."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is an RDBMS and how is it different from a DBMS?",
        "answer": "An RDBMS is a DBMS that organizes data into related tables using keys. All RDBMS are DBMS, but not all DBMS are relational (e.g., MongoDB is a DBMS but not an RDBMS)."
      },
      {
        "question": "Name examples of RDBMS.",
        "answer": "MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, and SQLite are all RDBMS."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does the 'R' in RDBMS stand for?",
        "options": [
          "Rapid",
          "Relational",
          "Remote",
          "Recursive"
        ],
        "correctIndex": 1,
        "explanation": "RDBMS = Relational Database Management System."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How does an RDBMS organize data?",
        "options": [
          "In random files",
          "In related tables using keys",
          "In a single flat list",
          "In images"
        ],
        "correctIndex": 1,
        "explanation": "RDBMS uses tables connected by primary/foreign keys."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which of these is NOT an RDBMS?",
        "options": [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Oracle"
        ],
        "correctIndex": 2,
        "explanation": "MongoDB is a NoSQL, document-based database, not relational."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What connects two tables in an RDBMS?",
        "options": [
          "Comments",
          "Primary and foreign keys",
          "File names",
          "Column colors"
        ],
        "correctIndex": 1,
        "explanation": "Keys establish relationships between tables."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "True or False: All DBMS are RDBMS.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1,
        "explanation": "DBMS is the broader category; RDBMS is a relational subtype."
      }
    ]
  },
  {
    "id": 5,
    "title": "SQL",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 7,
    "concept": "SQL (Structured Query Language) is the standard language used to create, read, update, and delete data in a relational database. It's how humans and applications 'talk' to an RDBMS.",
    "realLifeExample": "When you search for a product on an online store, the app runs a SQL SELECT query behind the scenes to fetch matching products from the database.",
    "syntax": "SELECT column_name FROM table_name WHERE condition;",
    "examples": [
      {
        "sql": "SELECT name, price FROM products WHERE category = 'Electronics';",
        "output": "name          | price\n--------------|------\nHeadphones    | 1999\nSmartwatch    | 4999",
        "explanation": "This SQL statement asks the database for the name and price of every product in the Electronics category."
      }
    ],
    "importantPoints": [
      "SQL is a language, not software \u2014 MySQL, PostgreSQL, and SQL Server all use SQL.",
      "SQL has sublanguages: DDL (define), DML (manipulate), DQL (query), DCL (control), TCL (transactions).",
      "SQL is largely standardized, but every RDBMS has small syntax differences (dialects)."
    ],
    "commonMistakes": [
      {
        "wrong": "SQL and MySQL are the same thing",
        "correct": "SQL is a language; MySQL is a specific RDBMS product that implements SQL",
        "why": "Confusing the language with the software is one of the most common beginner mistakes."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a SQL query to select all columns from a table named 'employees'.",
        "difficulty": "Easy",
        "hint": "Use SELECT * FROM ..."
      },
      {
        "text": "Name the five categories of SQL commands.",
        "difficulty": "Medium",
        "hint": "DDL, DML, DQL, DCL, TCL."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is SQL?",
        "answer": "SQL (Structured Query Language) is the standard language for creating, reading, updating, and deleting data in relational databases."
      },
      {
        "question": "What are the main categories of SQL commands?",
        "answer": "DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT), DCL (GRANT, REVOKE), and TCL (COMMIT, ROLLBACK)."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does SQL stand for?",
        "options": [
          "Structured Query Language",
          "Simple Query List",
          "Sequential Query Logic",
          "Standard Query Layer"
        ],
        "correctIndex": 0,
        "explanation": "SQL = Structured Query Language."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which category does SELECT belong to?",
        "options": [
          "DDL",
          "DML",
          "DQL",
          "DCL"
        ],
        "correctIndex": 2,
        "explanation": "SELECT is a Data Query Language (DQL) command."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which category does CREATE TABLE belong to?",
        "options": [
          "DDL",
          "DML",
          "DQL",
          "TCL"
        ],
        "correctIndex": 0,
        "explanation": "CREATE is Data Definition Language (DDL)."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Is SQL a database or a language?",
        "options": [
          "A database",
          "A language",
          "An operating system",
          "A file format"
        ],
        "correctIndex": 1,
        "explanation": "SQL is a query language used to interact with databases."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which of these uses SQL?",
        "options": [
          "MySQL only",
          "PostgreSQL only",
          "MySQL, PostgreSQL, SQL Server, Oracle",
          "None of these"
        ],
        "correctIndex": 2,
        "explanation": "SQL is used across many relational database systems, each with minor dialect differences."
      }
    ]
  },
  {
    "id": 6,
    "title": "MySQL",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 6,
    "concept": "MySQL is one of the world's most popular open-source RDBMS. It implements SQL to let you store, organize, and retrieve data efficiently, and powers everything from small websites to large-scale applications.",
    "realLifeExample": "Many popular platforms \u2014 including WordPress-based websites and large parts of Facebook's early infrastructure \u2014 have relied on MySQL to store their data.",
    "syntax": "-- Checking the MySQL version from the CLI:\nSELECT VERSION();",
    "examples": [
      {
        "sql": "SELECT VERSION();",
        "output": "VERSION()\n-----------\n8.0.36",
        "explanation": "This built-in function returns the version of the MySQL server currently running."
      }
    ],
    "importantPoints": [
      "MySQL is free and open-source (with paid enterprise options).",
      "It's known for speed, reliability, and ease of use for web applications.",
      "MySQL is owned and maintained by Oracle Corporation."
    ],
    "commonMistakes": [
      {
        "wrong": "MySQL is the only RDBMS that uses SQL",
        "correct": "MySQL is one of many RDBMS \u2014 PostgreSQL, Oracle DB, and SQL Server also use SQL",
        "why": "Every RDBMS implements SQL with small dialect differences; MySQL is just one popular choice."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find out and write down the SQL command to check your MySQL server's current database.",
        "difficulty": "Easy",
        "hint": "There's a function similar to VERSION() for this."
      },
      {
        "text": "Name two companies or platforms known to use MySQL.",
        "difficulty": "Easy",
        "hint": "Think of large web platforms."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is MySQL?",
        "answer": "MySQL is a popular open-source relational database management system that uses SQL to manage data."
      },
      {
        "question": "Why is MySQL widely used in web development?",
        "answer": "It's free, fast, reliable, well-documented, and integrates easily with common web stacks (like PHP and Node.js), making it a default choice for many web applications."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is MySQL?",
        "options": [
          "A programming language",
          "An open-source RDBMS",
          "An operating system",
          "A web browser"
        ],
        "correctIndex": 1,
        "explanation": "MySQL is a relational database management system."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Who currently owns/maintains MySQL?",
        "options": [
          "Google",
          "Oracle Corporation",
          "Microsoft",
          "Amazon"
        ],
        "correctIndex": 1,
        "explanation": "Oracle Corporation owns MySQL."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which language does MySQL use to manage data?",
        "options": [
          "Python",
          "SQL",
          "Java",
          "HTML"
        ],
        "correctIndex": 1,
        "explanation": "MySQL uses SQL as its query language."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which of these is a reason for MySQL's popularity?",
        "options": [
          "It's proprietary and expensive",
          "It's free, fast, and reliable",
          "It only works on Windows",
          "It has no documentation"
        ],
        "correctIndex": 1,
        "explanation": "MySQL is popular because it's free, performant, and well-supported."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which function returns the MySQL server version?",
        "options": [
          "VERSION()",
          "GET_VERSION()",
          "MYSQL_VERSION()",
          "SHOW_VER()"
        ],
        "correctIndex": 0,
        "explanation": "SELECT VERSION(); returns the running server version."
      }
    ]
  },
  {
    "id": 7,
    "title": "SQL vs MySQL",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "SQL is a language. MySQL is software that implements that language. This distinction confuses many beginners: you don't 'learn MySQL' as a separate language \u2014 you learn SQL, and MySQL is simply the engine that runs your SQL commands.",
    "realLifeExample": "It's like the difference between English (a language) and a specific book written in English (a product built using that language). SQL is the language; MySQL, PostgreSQL, and Oracle DB are all 'books' written using it.",
    "syntax": "-- Same SQL syntax, run on MySQL:\nSELECT * FROM employees;\n-- The exact same query would run on PostgreSQL, SQL Server, etc. with minor dialect differences.",
    "examples": [
      {
        "sql": "SELECT * FROM employees LIMIT 5;",
        "output": "id | name  | salary\n---|-------|-------\n1  | Aman  | 45000\n2  | Riya  | 52000",
        "explanation": "LIMIT is standard SQL syntax that MySQL supports; some other RDBMS use TOP or FETCH FIRST instead \u2014 a small dialect difference."
      }
    ],
    "importantPoints": [
      "SQL = the language. MySQL = one specific RDBMS that runs SQL.",
      "Learning SQL well transfers to PostgreSQL, SQL Server, Oracle, and more.",
      "Each RDBMS has small 'dialect' quirks (e.g., LIMIT in MySQL vs TOP in SQL Server)."
    ],
    "commonMistakes": [
      {
        "wrong": "Learning MySQL and learning SQL are two separate skills",
        "correct": "Learning SQL is the core skill; MySQL is just the platform you practice it on",
        "why": "Once you know SQL, switching to another RDBMS mostly means learning small syntax differences, not a new language."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find one syntax difference between MySQL and SQL Server for limiting rows.",
        "difficulty": "Medium",
        "hint": "Search 'LIMIT vs TOP'."
      },
      {
        "text": "Explain SQL vs MySQL to someone with zero technical background.",
        "difficulty": "Easy",
        "hint": "Use a simple language vs product analogy."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between SQL and MySQL?",
        "answer": "SQL is a standardized query language for relational databases. MySQL is a specific software product (an RDBMS) that implements and executes SQL."
      },
      {
        "question": "If you know SQL, can you use PostgreSQL or Oracle DB easily?",
        "answer": "Yes \u2014 since SQL is mostly standardized, your core SQL skills (SELECT, JOIN, GROUP BY, etc.) transfer across RDBMS, with only minor dialect adjustments needed."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "SQL is a ____, MySQL is a ____.",
        "options": [
          "Software, language",
          "Language, software (RDBMS)",
          "Database, table",
          "Table, column"
        ],
        "correctIndex": 1,
        "explanation": "SQL is the language; MySQL is software implementing it."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which statement is TRUE?",
        "options": [
          "MySQL and SQL are unrelated",
          "MySQL is one RDBMS that uses SQL",
          "SQL only works with MySQL",
          "MySQL replaced SQL"
        ],
        "correctIndex": 1,
        "explanation": "MySQL is one of many RDBMS that implement SQL."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What command limits rows in MySQL?",
        "options": [
          "TOP",
          "LIMIT",
          "FETCH",
          "ROWCOUNT"
        ],
        "correctIndex": 1,
        "explanation": "MySQL uses LIMIT; SQL Server uses TOP."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "If you switch from MySQL to PostgreSQL, what happens to your SQL knowledge?",
        "options": [
          "It becomes useless",
          "It mostly transfers, with small syntax differences",
          "You must relearn everything",
          "SQL doesn't work on PostgreSQL"
        ],
        "correctIndex": 1,
        "explanation": "Core SQL concepts transfer; only dialect details change."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which of these is NOT true?",
        "options": [
          "SQL is standardized",
          "MySQL is an implementation of SQL",
          "SQL is a database product",
          "Different RDBMS may have small syntax differences"
        ],
        "correctIndex": 2,
        "explanation": "SQL is a language, not a specific product."
      }
    ]
  },
  {
    "id": 8,
    "title": "Database vs Table",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 6,
    "concept": "A database is a container that holds many tables. A table is a structured grid of rows and columns that actually stores your data. Think of a database as a filing cabinet and tables as the individual folders inside it.",
    "realLifeExample": "A 'school_system' database might contain separate tables for 'students', 'teachers', and 'classes' \u2014 each table holding a different type of related data.",
    "syntax": "CREATE DATABASE school_system;\nUSE school_system;\nCREATE TABLE students (\n  student_id INT PRIMARY KEY,\n  name VARCHAR(100)\n);",
    "examples": [
      {
        "sql": "CREATE DATABASE school_system;\nUSE school_system;\nCREATE TABLE students (student_id INT PRIMARY KEY, name VARCHAR(100));",
        "output": "Query OK, 0 rows affected",
        "explanation": "First a database is created, then selected with USE, then a table is created inside it to hold student records."
      }
    ],
    "importantPoints": [
      "One database can contain many tables.",
      "A table has a fixed structure: columns define what kind of data goes in each field.",
      "You must SELECT (USE) a database before creating tables inside it."
    ],
    "commonMistakes": [
      {
        "wrong": "CREATE TABLE students without first selecting a database",
        "correct": "Always run USE database_name; before creating tables",
        "why": "Without USE, MySQL won't know which database the new table belongs to, and will throw an error."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create a database called 'library' and a table called 'books' inside it with a book_id and title column.",
        "difficulty": "Easy",
        "hint": "Use CREATE DATABASE, USE, then CREATE TABLE."
      },
      {
        "text": "Why would you split data into multiple tables instead of one giant table?",
        "difficulty": "Medium",
        "hint": "Think about repeated data and organization."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between a database and a table?",
        "answer": "A database is a container that organizes multiple related tables. A table is the actual structure (rows and columns) that stores specific data, such as students or orders."
      },
      {
        "question": "Can a database have zero tables?",
        "answer": "Yes \u2014 a newly created database is empty until you explicitly create tables inside it using CREATE TABLE."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Which contains the other?",
        "options": [
          "Table contains databases",
          "Database contains tables",
          "They are the same",
          "Neither contains the other"
        ],
        "correctIndex": 1,
        "explanation": "A database holds multiple tables."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What command must you run before creating a table in a specific database?",
        "options": [
          "SELECT DATABASE",
          "USE database_name;",
          "OPEN database_name;",
          "GO database_name;"
        ],
        "correctIndex": 1,
        "explanation": "USE selects which database subsequent commands apply to."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "A table is best described as:",
        "options": [
          "A single value",
          "A structured grid of rows and columns",
          "An entire database",
          "A programming function"
        ],
        "correctIndex": 1,
        "explanation": "Tables store data in row/column format."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can one database have multiple tables?",
        "options": [
          "No, only one table per database",
          "Yes, many tables per database",
          "Only two tables max",
          "Tables and databases are unrelated"
        ],
        "correctIndex": 1,
        "explanation": "Databases typically contain many related tables."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "A 'school_system' database might contain which tables?",
        "options": [
          "students, teachers, classes",
          "Only one big table",
          "No tables, just files",
          "Only images"
        ],
        "correctIndex": 0,
        "explanation": "Related but distinct data types go into separate tables."
      }
    ]
  },
  {
    "id": 9,
    "title": "Rows and Columns",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 6,
    "concept": "A table is made of rows and columns. Columns define the type of data (like name, age, or email) and stay fixed. Rows are individual records \u2014 each row represents one entity, like one student or one order.",
    "realLifeExample": "In a 'students' table, the columns might be student_id, name, and grade. Each row is one specific student, like (1, 'Aman', 'A').",
    "syntax": "-- Columns are defined when creating the table:\nCREATE TABLE students (\n  student_id INT,\n  name VARCHAR(50),\n  grade VARCHAR(2)\n);\n-- Rows are added with INSERT:\nINSERT INTO students VALUES (1, 'Aman', 'A');",
    "examples": [
      {
        "sql": "INSERT INTO students VALUES (1, 'Aman', 'A');\nSELECT * FROM students;",
        "output": "student_id | name | grade\n-----------|------|------\n1          | Aman | A",
        "explanation": "The INSERT statement adds one row (one student record). SELECT * shows all columns and rows currently in the table."
      }
    ],
    "importantPoints": [
      "Columns = fixed structure (defined once when the table is created).",
      "Rows = the actual data records, and can be added/removed anytime.",
      "Each row must have a value (or NULL) for every column in the table."
    ],
    "commonMistakes": [
      {
        "wrong": "Thinking columns can change per row",
        "correct": "Every row shares the exact same set of columns",
        "why": "Unlike a spreadsheet where formatting can vary, every table row strictly follows the table's fixed column definition."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Design column names for a table storing 'movies' \u2014 think of at least 4 relevant columns.",
        "difficulty": "Easy",
        "hint": "Think title, release year, genre, rating."
      },
      {
        "text": "If a students table has 3 columns and 50 rows, how many total data 'cells' does it have?",
        "difficulty": "Easy",
        "hint": "Multiply rows by columns."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between a row and a column in a table?",
        "answer": "A column represents a specific attribute or field (like name or age) and is fixed for the whole table. A row represents a single record \u2014 one complete set of values across all columns."
      },
      {
        "question": "What is another common term for a row and a column?",
        "answer": "A row is often called a 'record' or 'tuple'. A column is often called a 'field' or 'attribute'."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does a column represent?",
        "options": [
          "A single record",
          "An attribute/field shared by all rows",
          "A whole table",
          "A whole database"
        ],
        "correctIndex": 1,
        "explanation": "Columns define fixed attributes like name or age."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does a row represent?",
        "options": [
          "A field definition",
          "One complete record",
          "The table name",
          "A database"
        ],
        "correctIndex": 1,
        "explanation": "A row is a single data record."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Another name for 'row' is:",
        "options": [
          "Field",
          "Attribute",
          "Record / tuple",
          "Schema"
        ],
        "correctIndex": 2,
        "explanation": "Rows are also called records or tuples."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Another name for 'column' is:",
        "options": [
          "Record",
          "Tuple",
          "Field / attribute",
          "Row"
        ],
        "correctIndex": 2,
        "explanation": "Columns are also called fields or attributes."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "A table has 4 columns and 10 rows. How many total cells of data does it have?",
        "options": [
          "14",
          "40",
          "4",
          "10"
        ],
        "correctIndex": 1,
        "explanation": "4 columns \u00d7 10 rows = 40 cells."
      }
    ]
  },
  {
    "id": 10,
    "title": "Installing MySQL",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 10,
    "concept": "Before writing SQL, you need MySQL Server installed on your machine (or access to a remote MySQL server). Installation involves downloading the MySQL installer for your OS, setting up a root password, and confirming the server runs.",
    "realLifeExample": "Just like installing any software (e.g., VS Code), installing MySQL Server sets up the background service that will store and manage your databases locally for practice.",
    "syntax": "-- After installation, verify MySQL is running via the command line:\nmysql -u root -p",
    "examples": [
      {
        "sql": "mysql -u root -p",
        "output": "Enter password: ****\nWelcome to the MySQL monitor...\nmysql>",
        "explanation": "This command logs into the MySQL server as the 'root' user, prompting for the password you set during installation."
      }
    ],
    "importantPoints": [
      "Download MySQL Community Server from the official MySQL website for your OS (Windows/macOS/Linux).",
      "During setup, you'll create a root password \u2014 remember it, as it's required for admin access.",
      "MySQL Workbench (a GUI tool) is often installed alongside the server for easier management."
    ],
    "commonMistakes": [
      {
        "wrong": "Forgetting the root password after setup",
        "correct": "Write down or securely store your root password immediately after installation",
        "why": "Losing the root password means going through a password-reset process, which can be time-consuming for beginners."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Install MySQL Community Server on your machine and confirm you can log in via the command line.",
        "difficulty": "Easy",
        "hint": "Download from the official MySQL site for your OS."
      },
      {
        "text": "Run 'SELECT VERSION();' after logging in and note the version installed.",
        "difficulty": "Easy",
        "hint": "Use the mysql CLI after logging in."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What are the basic steps to install MySQL?",
        "answer": "Download the MySQL Community Server installer for your OS, run it, set a root password during setup, and verify installation by logging in via the command line or MySQL Workbench."
      },
      {
        "question": "What is the 'root' user in MySQL?",
        "answer": "The root user is the default administrative account with full privileges over the MySQL server, created during installation."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What do you set during MySQL installation for admin access?",
        "options": [
          "A username only",
          "A root password",
          "A table name",
          "An index"
        ],
        "correctIndex": 1,
        "explanation": "The root password secures administrative access."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What command lets you log into MySQL via terminal?",
        "options": [
          "mysql -u root -p",
          "login mysql",
          "sql start",
          "mysql --run"
        ],
        "correctIndex": 0,
        "explanation": "This is the standard MySQL CLI login command."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What GUI tool is often installed alongside MySQL Server?",
        "options": [
          "Photoshop",
          "MySQL Workbench",
          "VS Code",
          "Excel"
        ],
        "correctIndex": 1,
        "explanation": "MySQL Workbench is the official GUI client for MySQL."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What happens if you forget your root password?",
        "options": [
          "Nothing, it doesn't matter",
          "You must go through a password reset process",
          "MySQL auto-generates a new one visibly",
          "The database is deleted"
        ],
        "correctIndex": 1,
        "explanation": "A forgotten root password requires a formal reset procedure."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Where should you download MySQL Community Server from?",
        "options": [
          "Any random website",
          "The official MySQL website",
          "A torrent site",
          "It comes pre-installed always"
        ],
        "correctIndex": 1,
        "explanation": "Always use the official source to avoid security risks."
      }
    ]
  },
  {
    "id": 11,
    "title": "MySQL Workbench",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 7,
    "concept": "MySQL Workbench is the official graphical user interface (GUI) tool for MySQL. It lets you write and run SQL queries, design database schemas visually, and manage servers without typing every command into a terminal.",
    "realLifeExample": "Instead of typing raw commands in a black terminal window, a data analyst can use MySQL Workbench's visual query editor and see results in a neat table format \u2014 similar to using Excel but connected live to a database.",
    "syntax": "-- Workbench doesn't have unique syntax; you write standard SQL inside its query editor:\nSELECT * FROM employees;",
    "examples": [
      {
        "sql": "SELECT * FROM employees;",
        "output": "[Result Grid shown inside Workbench]\nid | name | department\n1  | Aman | Sales",
        "explanation": "In Workbench, running this query shows the result in an interactive grid, with options to export, sort, or edit cells directly."
      }
    ],
    "importantPoints": [
      "Workbench provides a visual Entity-Relationship (ER) diagram designer for planning table relationships.",
      "It includes a query editor, result grid, and connection manager for multiple databases/servers.",
      "It's optional \u2014 the same SQL works whether typed in Workbench or the command-line client."
    ],
    "commonMistakes": [
      {
        "wrong": "Thinking Workbench is a different SQL dialect",
        "correct": "Workbench is just a GUI wrapper \u2014 the SQL syntax you write is standard MySQL SQL",
        "why": "Beginners sometimes think Workbench has its own special commands; it simply provides a friendlier interface to run the same SQL."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Open MySQL Workbench, connect to your local server, and run a simple SELECT VERSION(); query.",
        "difficulty": "Easy",
        "hint": "Use the 'New Connection' option first."
      },
      {
        "text": "Explore Workbench's ER Diagram tool and try creating one table visually.",
        "difficulty": "Medium",
        "hint": "Look for 'Database > Reverse Engineer' or 'Create EER Model'."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is MySQL Workbench?",
        "answer": "MySQL Workbench is the official GUI tool for MySQL that provides visual SQL development, database design (ER diagrams), and server administration."
      },
      {
        "question": "Is SQL syntax different when using MySQL Workbench versus the command line?",
        "answer": "No \u2014 the SQL syntax is identical. Workbench is just a visual interface for writing and running the same standard SQL queries."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is MySQL Workbench?",
        "options": [
          "A programming language",
          "The official GUI tool for MySQL",
          "A cloud hosting service",
          "A spreadsheet program"
        ],
        "correctIndex": 1,
        "explanation": "Workbench is MySQL's official visual client tool."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Does SQL syntax change inside Workbench?",
        "options": [
          "Yes, completely different",
          "No, it's the same standard SQL",
          "Only SELECT changes",
          "Only INSERT changes"
        ],
        "correctIndex": 1,
        "explanation": "Workbench runs the same SQL you'd type in the CLI."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What visual feature does Workbench offer for planning databases?",
        "options": [
          "Video editor",
          "ER Diagram designer",
          "Audio mixer",
          "Font manager"
        ],
        "correctIndex": 1,
        "explanation": "Workbench includes a visual ER (Entity-Relationship) diagram tool."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Where do query results appear in Workbench?",
        "options": [
          "In a popup video",
          "In an interactive result grid",
          "Only in the terminal",
          "They don't appear"
        ],
        "correctIndex": 1,
        "explanation": "Results display in a grid you can sort, edit, and export."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Is using Workbench mandatory to use MySQL?",
        "options": [
          "Yes, required",
          "No, it's optional \u2014 CLI works too",
          "Only for beginners",
          "Only for production servers"
        ],
        "correctIndex": 1,
        "explanation": "You can use the CLI, Workbench, or other clients interchangeably."
      }
    ]
  },
  {
    "id": 12,
    "title": "MySQL CLI",
    "level": "Beginner",
    "category": "Foundation",
    "difficulty": "Easy",
    "estMinutes": 8,
    "concept": "The MySQL Command-Line Interface (CLI) lets you interact with a MySQL server by typing SQL commands directly into a terminal, without a graphical tool. It's fast, lightweight, and often used by developers and on servers without a GUI.",
    "realLifeExample": "A backend developer deploying an app to a cloud server (with no graphical interface available) uses the MySQL CLI over SSH to check tables and run emergency queries directly.",
    "syntax": "mysql -u username -p\n-- Once inside:\nSHOW DATABASES;\nUSE database_name;\nSHOW TABLES;",
    "examples": [
      {
        "sql": "SHOW DATABASES;",
        "output": "Database\n------------------\ninformation_schema\nmysql\nschool_system",
        "explanation": "This command lists every database currently on the connected MySQL server."
      }
    ],
    "importantPoints": [
      "Every SQL statement in the CLI must end with a semicolon (;).",
      "Common CLI commands: SHOW DATABASES, USE db_name, SHOW TABLES, DESCRIBE table_name, EXIT.",
      "The CLI is often faster for quick checks than opening a full GUI tool."
    ],
    "commonMistakes": [
      {
        "wrong": "Forgetting the semicolon at the end of a statement",
        "correct": "Always end SQL statements with a semicolon in the CLI",
        "why": "Without a semicolon, the CLI thinks you're still typing the same command and waits for more input instead of running it."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Log into the MySQL CLI and run SHOW DATABASES; followed by SHOW TABLES; on any existing database.",
        "difficulty": "Easy",
        "hint": "Use USE before SHOW TABLES."
      },
      {
        "text": "Find the CLI command to see a table's column structure.",
        "difficulty": "Easy",
        "hint": "It starts with DESC or DESCRIBE."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the MySQL CLI and when would you use it?",
        "answer": "The MySQL CLI is a text-based way to interact with a MySQL server by typing SQL commands into a terminal. It's used when a GUI isn't available (like remote servers) or for fast, lightweight query execution."
      },
      {
        "question": "What command shows all databases on a MySQL server?",
        "answer": "SHOW DATABASES; lists every database currently present on the connected server."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What must every SQL statement end with in the CLI?",
        "options": [
          "A period",
          "A semicolon (;)",
          "A colon",
          "Nothing"
        ],
        "correctIndex": 1,
        "explanation": "The semicolon tells MySQL the statement is complete."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which command lists all databases?",
        "options": [
          "LIST DATABASES;",
          "SHOW DATABASES;",
          "GET DATABASES;",
          "DATABASES ALL;"
        ],
        "correctIndex": 1,
        "explanation": "SHOW DATABASES; is the correct command."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which command selects a database to work with?",
        "options": [
          "SELECT database_name;",
          "USE database_name;",
          "OPEN database_name;",
          "GO database_name;"
        ],
        "correctIndex": 1,
        "explanation": "USE switches the active database context."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What happens if you forget the semicolon?",
        "options": [
          "Command runs immediately",
          "CLI waits for more input",
          "MySQL crashes",
          "Nothing changes"
        ],
        "correctIndex": 1,
        "explanation": "The CLI assumes the statement isn't finished yet."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which command shows a table's column structure?",
        "options": [
          "DESCRIBE table_name;",
          "VIEW table_name;",
          "COLUMNS table_name;",
          "STRUCT table_name;"
        ],
        "correctIndex": 0,
        "explanation": "DESCRIBE (or DESC) shows column names, types, and constraints."
      }
    ]
  },
  {
    "id": 13,
    "title": "CREATE DATABASE",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "The CREATE DATABASE statement makes a new, empty database on the MySQL server. It's the very first step before you can create any tables.",
    "realLifeExample": "Before a food delivery startup can store restaurant and order data, a developer runs CREATE DATABASE to set up the container for everything.",
    "syntax": "CREATE DATABASE database_name;",
    "examples": [
      {
        "sql": "CREATE DATABASE food_delivery;",
        "output": "Query OK, 1 row affected",
        "explanation": "This creates a new, empty database named 'food_delivery' on the server."
      }
    ],
    "importantPoints": [
      "Database names should be lowercase with underscores by convention (e.g., food_delivery).",
      "Use CREATE DATABASE IF NOT EXISTS db_name; to avoid an error if it already exists.",
      "Creating a database doesn't create any tables \u2014 that's a separate step."
    ],
    "commonMistakes": [
      {
        "wrong": "CREATE DATABASE food_delivery; (run twice)",
        "correct": "CREATE DATABASE IF NOT EXISTS food_delivery;",
        "why": "Running CREATE DATABASE on a name that already exists throws an error unless you guard it with IF NOT EXISTS."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create a database named 'bookstore'.",
        "difficulty": "Easy",
        "hint": "CREATE DATABASE bookstore;"
      },
      {
        "text": "Create a database named 'gym_management' safely, without erroring if it exists.",
        "difficulty": "Easy",
        "hint": "Use IF NOT EXISTS."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does CREATE DATABASE do?",
        "answer": "It creates a new, empty database container on the MySQL server where tables can later be added."
      },
      {
        "question": "How do you avoid an error if the database already exists?",
        "answer": "Use CREATE DATABASE IF NOT EXISTS database_name;"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does CREATE DATABASE do?",
        "options": [
          "Deletes a database",
          "Creates a new empty database",
          "Creates a table",
          "Inserts data"
        ],
        "correctIndex": 1,
        "explanation": "It creates a new database container."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How do you avoid an error if a database already exists?",
        "options": [
          "CREATE DATABASE OR REPLACE",
          "CREATE DATABASE IF NOT EXISTS db;",
          "CREATE NEW DATABASE",
          "SKIP DATABASE db;"
        ],
        "correctIndex": 1,
        "explanation": "IF NOT EXISTS prevents the error."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "After creating a database, does it contain any tables?",
        "options": [
          "Yes, one default table",
          "No, it's empty",
          "Only if specified",
          "Always 5 tables"
        ],
        "correctIndex": 1,
        "explanation": "A new database starts empty."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which naming convention is recommended?",
        "options": [
          "CamelCase with spaces",
          "lowercase_with_underscores",
          "ALLCAPS",
          "Random characters"
        ],
        "correctIndex": 1,
        "explanation": "Lowercase with underscores is the common SQL convention."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What must you run before creating tables in a new database?",
        "options": [
          "DROP DATABASE",
          "USE database_name;",
          "SELECT * FROM db;",
          "Nothing"
        ],
        "correctIndex": 1,
        "explanation": "USE selects the database as the active context."
      }
    ]
  },
  {
    "id": 14,
    "title": "USE DATABASE",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 4,
    "concept": "The USE statement tells MySQL which database you want to work with for all subsequent commands in your session. Without it, MySQL won't know where to create tables or run queries.",
    "realLifeExample": "If you have both a 'school_system' and 'hospital_system' database, USE tells MySQL 'work inside school_system now' so your CREATE TABLE or SELECT commands apply there.",
    "syntax": "USE database_name;",
    "examples": [
      {
        "sql": "USE food_delivery;",
        "output": "Database changed",
        "explanation": "This switches the active database context to 'food_delivery' for the rest of the session."
      }
    ],
    "importantPoints": [
      "USE only affects the current session/connection, not permanently.",
      "You can switch between databases anytime with another USE statement.",
      "Forgetting USE often causes 'No database selected' errors."
    ],
    "commonMistakes": [
      {
        "wrong": "CREATE TABLE orders (...); -- without USE first",
        "correct": "USE food_delivery;\nCREATE TABLE orders (...);",
        "why": "Without selecting a database first, MySQL doesn't know which database should contain the new table."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Switch to a database called 'bookstore' and confirm with SELECT DATABASE();.",
        "difficulty": "Easy",
        "hint": "Use USE, then SELECT DATABASE();"
      },
      {
        "text": "What error appears if you run CREATE TABLE without USE?",
        "difficulty": "Easy",
        "hint": "Try it and observe the exact error message."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the USE statement do?",
        "answer": "It sets the specified database as the active one for the current session, so subsequent commands apply to it."
      },
      {
        "question": "What happens if you forget to run USE before creating a table?",
        "answer": "MySQL throws a 'No database selected' error, since it doesn't know where the new table should be created."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does USE database_name; do?",
        "options": [
          "Deletes the database",
          "Sets it as the active database for the session",
          "Creates the database",
          "Backs up the database"
        ],
        "correctIndex": 1,
        "explanation": "USE selects the working database."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What error occurs if you forget USE before CREATE TABLE?",
        "options": [
          "Syntax error",
          "No database selected",
          "Table already exists",
          "No such command"
        ],
        "correctIndex": 1,
        "explanation": "MySQL needs a selected database context."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "How long does a USE selection last?",
        "options": [
          "Forever",
          "For the current session/connection",
          "1 minute only",
          "Only for one query"
        ],
        "correctIndex": 1,
        "explanation": "It applies until you run another USE or end the session."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which command shows the currently active database?",
        "options": [
          "SHOW ACTIVE;",
          "SELECT DATABASE();",
          "CURRENT DB;",
          "GET DB();"
        ],
        "correctIndex": 1,
        "explanation": "SELECT DATABASE(); returns the current database name."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Can you switch databases multiple times in one session?",
        "options": [
          "No, only once",
          "Yes, anytime with USE",
          "Only after restarting MySQL",
          "Only via Workbench"
        ],
        "correctIndex": 1,
        "explanation": "USE can be run as many times as needed."
      }
    ]
  },
  {
    "id": 15,
    "title": "CREATE TABLE",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 8,
    "concept": "CREATE TABLE defines a new table's structure: its name, columns, and each column's data type. This is where you design what kind of data your table will store.",
    "realLifeExample": "An e-commerce site needs a 'products' table with columns for product_id, name, price, and stock \u2014 CREATE TABLE defines exactly this structure before any data is added.",
    "syntax": "CREATE TABLE table_name (\n  column1 datatype constraints,\n  column2 datatype constraints,\n  ...\n);",
    "examples": [
      {
        "sql": "CREATE TABLE products (\n  product_id INT PRIMARY KEY,\n  name VARCHAR(100),\n  price DECIMAL(10,2),\n  stock INT\n);",
        "output": "Query OK, 0 rows affected",
        "explanation": "This creates an empty 'products' table with four columns, each with a specific data type. PRIMARY KEY ensures product_id is unique."
      }
    ],
    "importantPoints": [
      "Every column must have a name and a data type.",
      "PRIMARY KEY marks the column that uniquely identifies each row.",
      "The table is empty right after creation \u2014 CREATE TABLE only defines structure, not data."
    ],
    "commonMistakes": [
      {
        "wrong": "CREATE TABLE products (product_id, name, price);",
        "correct": "CREATE TABLE products (product_id INT, name VARCHAR(100), price DECIMAL(10,2));",
        "why": "Every column needs an explicit data type \u2014 MySQL cannot create a column without knowing what kind of data it will hold."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create a 'students' table with student_id (INT, primary key), name (VARCHAR), and age (INT).",
        "difficulty": "Easy",
        "hint": "Use CREATE TABLE with three columns."
      },
      {
        "text": "Create an 'orders' table with order_id, customer_name, and order_date columns.",
        "difficulty": "Medium",
        "hint": "Think about the right data type for a date."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does CREATE TABLE do?",
        "answer": "It defines a new table's name, columns, and each column's data type and constraints, without inserting any data."
      },
      {
        "question": "What is the role of PRIMARY KEY in CREATE TABLE?",
        "answer": "It designates a column (or combination of columns) that uniquely identifies each row, preventing duplicate or NULL values in that column."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does CREATE TABLE define?",
        "options": [
          "Only data",
          "A table's structure: name, columns, and types",
          "A database name",
          "A user account"
        ],
        "correctIndex": 1,
        "explanation": "CREATE TABLE defines the table's structure."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Is a table populated with data right after CREATE TABLE?",
        "options": [
          "Yes, with sample data",
          "No, it's empty",
          "Only in MySQL 8+",
          "Only if specified"
        ],
        "correctIndex": 1,
        "explanation": "CREATE TABLE only defines structure, not data."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What must every column have?",
        "options": [
          "A default value",
          "A name and a data type",
          "A comment",
          "An index"
        ],
        "correctIndex": 1,
        "explanation": "Name and data type are mandatory for every column."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What does PRIMARY KEY do on a column?",
        "options": [
          "Makes it optional",
          "Uniquely identifies each row",
          "Encrypts the data",
          "Deletes duplicates automatically"
        ],
        "correctIndex": 1,
        "explanation": "PRIMARY KEY enforces uniqueness and non-null values."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which is valid syntax to create a table?",
        "options": [
          "CREATE TABLE t (id INT);",
          "TABLE CREATE t (id);",
          "NEW TABLE t (id INT);",
          "MAKE TABLE t;"
        ],
        "correctIndex": 0,
        "explanation": "CREATE TABLE table_name (column datatype); is the correct syntax."
      }
    ]
  },
  {
    "id": 16,
    "title": "Data Types",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 9,
    "concept": "Data types define what kind of value a column can store \u2014 numbers, text, dates, and more. Choosing the right data type keeps your data accurate and your storage efficient.",
    "realLifeExample": "A 'price' column should use DECIMAL (for exact monetary values), while a 'name' column uses VARCHAR (for variable-length text), and a 'birth_date' uses DATE.",
    "syntax": "-- Common MySQL data types:\nINT            -- whole numbers\nDECIMAL(10,2)  -- exact decimal numbers (e.g., money)\nVARCHAR(n)     -- variable-length text, up to n characters\nTEXT           -- long text\nDATE           -- date only (YYYY-MM-DD)\nDATETIME       -- date and time\nBOOLEAN        -- true/false (stored as TINYINT)",
    "examples": [
      {
        "sql": "CREATE TABLE products (\n  product_id INT,\n  name VARCHAR(100),\n  price DECIMAL(10,2),\n  in_stock BOOLEAN,\n  added_on DATE\n);",
        "output": "Query OK, 0 rows affected",
        "explanation": "Each column is given an appropriate data type: whole number for ID, text for name, exact decimal for price, true/false for stock status, and date for when it was added."
      }
    ],
    "importantPoints": [
      "Never use FLOAT for money \u2014 it can introduce rounding errors. Use DECIMAL instead.",
      "VARCHAR(n) reserves up to n characters; TEXT is for very long content like articles.",
      "Choosing the smallest suitable data type improves performance and storage."
    ],
    "commonMistakes": [
      {
        "wrong": "price FLOAT",
        "correct": "price DECIMAL(10,2)",
        "why": "FLOAT stores approximate values, which can cause tiny rounding errors \u2014 dangerous for financial data. DECIMAL stores exact values."
      }
    ],
    "practiceQuestions": [
      {
        "text": "List the correct data type for: a phone number, a salary, and an account creation timestamp.",
        "difficulty": "Easy",
        "hint": "Think VARCHAR, DECIMAL, and DATETIME."
      },
      {
        "text": "Why shouldn't you store phone numbers as INT?",
        "difficulty": "Medium",
        "hint": "Think about leading zeros and country codes."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between VARCHAR and TEXT?",
        "answer": "VARCHAR(n) is used for shorter, variable-length text with a defined maximum length, while TEXT is used for very large blocks of text without a small length limit, and is stored differently internally."
      },
      {
        "question": "Why is DECIMAL preferred over FLOAT for currency values?",
        "answer": "DECIMAL stores exact numeric values without rounding errors, which is critical for financial calculations, whereas FLOAT stores approximate binary representations that can introduce small inaccuracies."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Which data type is best for storing money?",
        "options": [
          "FLOAT",
          "DECIMAL(10,2)",
          "VARCHAR",
          "BOOLEAN"
        ],
        "correctIndex": 1,
        "explanation": "DECIMAL avoids rounding errors in financial data."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which data type stores only the date, no time?",
        "options": [
          "DATETIME",
          "DATE",
          "TIME",
          "TIMESTAMP"
        ],
        "correctIndex": 1,
        "explanation": "DATE stores just year-month-day."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does VARCHAR(100) mean?",
        "options": [
          "Exactly 100 characters always",
          "Up to 100 characters, variable length",
          "100 rows",
          "100 tables"
        ],
        "correctIndex": 1,
        "explanation": "VARCHAR(n) allows up to n characters, using only the space needed."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why avoid storing phone numbers as INT?",
        "options": [
          "INT is too small",
          "Leading zeros and formatting (+, -) get lost",
          "INT can't be indexed",
          "MySQL doesn't support INT"
        ],
        "correctIndex": 1,
        "explanation": "Phone numbers often have leading zeros or symbols that INT can't preserve."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which type best fits a true/false flag like 'is_active'?",
        "options": [
          "VARCHAR",
          "BOOLEAN",
          "TEXT",
          "DATE"
        ],
        "correctIndex": 1,
        "explanation": "BOOLEAN (stored as TINYINT) is ideal for true/false flags."
      }
    ]
  },
  {
    "id": 17,
    "title": "INSERT",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 7,
    "concept": "INSERT INTO adds new rows (records) into a table. You specify the table, optionally the columns, and the values to insert.",
    "realLifeExample": "When a new customer signs up on an app, the backend runs an INSERT statement to add their details as a new row in the 'customers' table.",
    "syntax": "INSERT INTO table_name (column1, column2) VALUES (value1, value2);",
    "examples": [
      {
        "sql": "INSERT INTO students (student_id, name, age) VALUES (1, 'Aman', 20);",
        "output": "Query OK, 1 row affected",
        "explanation": "This adds one new row to the 'students' table with the specified values matching the given columns in order."
      }
    ],
    "importantPoints": [
      "Always list column names explicitly \u2014 relying on column order without naming them is fragile.",
      "You can insert multiple rows in one statement: VALUES (1,'A'), (2,'B'), (3,'C');",
      "String and date values must be wrapped in quotes; numbers should not be."
    ],
    "commonMistakes": [
      {
        "wrong": "INSERT INTO students VALUES ('Aman', 1, 20);",
        "correct": "INSERT INTO students (student_id, name, age) VALUES (1, 'Aman', 20);",
        "why": "Without naming columns, values must exactly match the table's column order and types \u2014 a common source of subtle bugs."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Insert a new student with student_id=2, name='Riya', age=21.",
        "difficulty": "Easy",
        "hint": "Use INSERT INTO with explicit column names."
      },
      {
        "text": "Insert 3 new products in a single INSERT statement.",
        "difficulty": "Medium",
        "hint": "Use comma-separated VALUES groups."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the INSERT INTO statement do?",
        "answer": "It adds one or more new rows of data into a specified table."
      },
      {
        "question": "Why is it good practice to specify column names in INSERT statements?",
        "answer": "Specifying column names makes the statement resilient to table structure changes (like reordered or added columns) and makes the intent of the query clear and less error-prone."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does INSERT INTO do?",
        "options": [
          "Deletes rows",
          "Adds new rows to a table",
          "Creates a table",
          "Updates existing rows"
        ],
        "correctIndex": 1,
        "explanation": "INSERT adds new records into a table."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which is the correct INSERT syntax?",
        "options": [
          "INSERT table_name VALUES (1,'A');",
          "INSERT INTO table_name (col1) VALUES (1);",
          "ADD INTO table_name VALUES (1);",
          "PUT INTO table_name (1);"
        ],
        "correctIndex": 1,
        "explanation": "INSERT INTO table (columns) VALUES (values); is correct."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Can you insert multiple rows in a single INSERT statement?",
        "options": [
          "No, one row per statement only",
          "Yes, using comma-separated VALUES groups",
          "Only with a loop",
          "Only in stored procedures"
        ],
        "correctIndex": 1,
        "explanation": "Multiple VALUES groups can be inserted at once."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why specify column names in INSERT?",
        "options": [
          "It's required by MySQL always",
          "It avoids errors from column order/type mismatches",
          "It makes queries slower",
          "It's optional and never useful"
        ],
        "correctIndex": 1,
        "explanation": "Naming columns protects against structure changes."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "How should text values be written in an INSERT statement?",
        "options": [
          "Without quotes",
          "In single or double quotes",
          "In brackets",
          "In parentheses only"
        ],
        "correctIndex": 1,
        "explanation": "Text/string values need quotes; numbers do not."
      }
    ]
  },
  {
    "id": 18,
    "title": "SELECT",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 6,
    "concept": "SELECT retrieves data from a table. It's the most frequently used SQL command, letting you read and view stored data.",
    "realLifeExample": "When you open your order history on Amazon, the app runs a SELECT query to fetch and display your past orders from the database.",
    "syntax": "SELECT * FROM table_name;",
    "examples": [
      {
        "sql": "SELECT * FROM students;",
        "output": "student_id | name | age\n-----------|------|----\n1          | Aman | 20\n2          | Riya | 21",
        "explanation": "The asterisk (*) means 'all columns'. This query returns every column and every row from the students table."
      }
    ],
    "importantPoints": [
      "SELECT * retrieves all columns \u2014 convenient, but often wasteful in production for large tables.",
      "SELECT is a read-only operation; it never modifies data.",
      "You can combine SELECT with WHERE, ORDER BY, and other clauses to narrow results."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT * FROM students (missing semicolon in CLI)",
        "correct": "SELECT * FROM students;",
        "why": "Forgetting the semicolon in the CLI leaves MySQL waiting for more input instead of executing the query."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a query to select everything from an 'employees' table.",
        "difficulty": "Easy",
        "hint": "Use SELECT * FROM ..."
      },
      {
        "text": "Why might SELECT * be a bad idea on a table with 50 columns and millions of rows?",
        "difficulty": "Medium",
        "hint": "Think about performance and unnecessary data transfer."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the SELECT statement do?",
        "answer": "SELECT retrieves (reads) data from one or more tables without modifying it."
      },
      {
        "question": "Why is SELECT * generally discouraged in production code?",
        "answer": "It retrieves every column even if only a few are needed, increasing memory use, network transfer, and potentially breaking code if columns are later added or reordered."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does SELECT * FROM students; return?",
        "options": [
          "Only the first row",
          "All columns and rows from students",
          "Only column names",
          "Nothing, it's invalid"
        ],
        "correctIndex": 1,
        "explanation": "The asterisk selects every column, and no WHERE means every row."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Does SELECT modify data?",
        "options": [
          "Yes, always",
          "No, it only reads data",
          "Only with WHERE",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "SELECT is a read-only query."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why avoid SELECT * on very wide, large tables in production?",
        "options": [
          "It's illegal SQL",
          "It wastes resources fetching unneeded columns",
          "It deletes data",
          "It always errors"
        ],
        "correctIndex": 1,
        "explanation": "Fetching unnecessary columns wastes memory and bandwidth."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What symbol means 'all columns' in a SELECT statement?",
        "options": [
          "%",
          "*",
          "#",
          "&"
        ],
        "correctIndex": 1,
        "explanation": "The asterisk (*) represents all columns."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which clause would you add to SELECT to filter rows?",
        "options": [
          "ORDER BY",
          "WHERE",
          "GROUP",
          "LIMIT only"
        ],
        "correctIndex": 1,
        "explanation": "WHERE filters which rows are returned."
      }
    ]
  },
  {
    "id": 19,
    "title": "SELECT Specific Columns",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "Instead of SELECT *, you can name only the columns you need, separated by commas. This is faster and clearer, especially on wide tables.",
    "realLifeExample": "A dashboard showing only 'name' and 'total_spent' for top customers doesn't need to fetch every column (like address, phone, signup date) \u2014 it selects only what it displays.",
    "syntax": "SELECT column1, column2 FROM table_name;",
    "examples": [
      {
        "sql": "SELECT name, age FROM students;",
        "output": "name | age\n-----|----\nAman | 20\nRiya | 21",
        "explanation": "Only the 'name' and 'age' columns are returned, in the order specified, ignoring any other columns in the table."
      }
    ],
    "importantPoints": [
      "Column order in SELECT determines the order in the output, not the table's original order.",
      "Selecting fewer columns reduces the amount of data transferred and processed.",
      "You can rename output columns using aliases (covered in a later chapter)."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT name age FROM students;",
        "correct": "SELECT name, age FROM students;",
        "why": "Forgetting the comma between column names causes a syntax error or MySQL interpreting it incorrectly."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Select only 'product_name' and 'price' from a 'products' table.",
        "difficulty": "Easy",
        "hint": "List two column names separated by a comma."
      },
      {
        "text": "Select id, name, and email from a 'users' table in that specific order.",
        "difficulty": "Easy",
        "hint": "Match the order in your SELECT clause."
      }
    ],
    "interviewQuestions": [
      {
        "question": "Why would you select specific columns instead of using SELECT *?",
        "answer": "Selecting only needed columns reduces data transfer, improves query performance on wide tables, and makes the query's intent clearer to other developers."
      },
      {
        "question": "Does the order of columns in SELECT affect the output order?",
        "answer": "Yes \u2014 the output columns appear in exactly the order you list them in the SELECT clause, regardless of their order in the table definition."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "How do you select only 'name' and 'email' columns?",
        "options": [
          "SELECT name email FROM users;",
          "SELECT name, email FROM users;",
          "SELECT name; email FROM users;",
          "GET name, email FROM users;"
        ],
        "correctIndex": 1,
        "explanation": "Column names are separated by commas."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What determines the output column order?",
        "options": [
          "Table's original column order always",
          "The order listed in SELECT",
          "Alphabetical order",
          "Random order"
        ],
        "correctIndex": 1,
        "explanation": "Output follows the order specified in the SELECT clause."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What's a benefit of selecting specific columns over SELECT *?",
        "options": [
          "It's always required",
          "Reduced data transfer and clearer intent",
          "It deletes unused columns",
          "It creates an index"
        ],
        "correctIndex": 1,
        "explanation": "Selecting fewer columns is more efficient and explicit."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What happens if you forget a comma between column names?",
        "options": [
          "MySQL ignores it",
          "A syntax error typically occurs",
          "It selects all columns instead",
          "Nothing changes"
        ],
        "correctIndex": 1,
        "explanation": "Missing commas usually cause syntax errors."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "SELECT age, name FROM students; \u2014 what appears first in the output?",
        "options": [
          "name",
          "age",
          "student_id",
          "Random column"
        ],
        "correctIndex": 1,
        "explanation": "Columns appear in the order specified: age first, then name."
      }
    ]
  },
  {
    "id": 20,
    "title": "WHERE",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 8,
    "concept": "The WHERE clause filters rows, returning only those that meet a specified condition. Without WHERE, SELECT, UPDATE, and DELETE affect every row.",
    "realLifeExample": "A food delivery app uses WHERE to show only restaurants where city = 'Bhopal', instead of listing every restaurant in the country.",
    "syntax": "SELECT * FROM table_name WHERE condition;",
    "examples": [
      {
        "sql": "SELECT * FROM students WHERE age > 20;",
        "output": "student_id | name | age\n-----------|------|----\n2          | Riya | 21",
        "explanation": "Only rows where the age column value is greater than 20 are returned \u2014 Aman (age 20) is excluded."
      }
    ],
    "importantPoints": [
      "WHERE supports comparison operators (=, >, <, >=, <=, <>) and logical operators (AND, OR, NOT).",
      "WHERE works with SELECT, UPDATE, and DELETE to target specific rows.",
      "Forgetting WHERE in an UPDATE or DELETE affects every row in the table \u2014 a dangerous and common mistake."
    ],
    "commonMistakes": [
      {
        "wrong": "DELETE FROM students;",
        "correct": "DELETE FROM students WHERE student_id = 5;",
        "why": "Without WHERE, DELETE removes every single row in the table \u2014 always double-check your WHERE clause before running UPDATE or DELETE."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Select all students older than 18.",
        "difficulty": "Easy",
        "hint": "Use WHERE age > 18."
      },
      {
        "text": "Select all orders where status equals 'Delivered'.",
        "difficulty": "Easy",
        "hint": "Use WHERE status = 'Delivered'."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the WHERE clause do?",
        "answer": "WHERE filters rows based on a specified condition, so only rows matching that condition are selected, updated, or deleted."
      },
      {
        "question": "What is the danger of running UPDATE or DELETE without a WHERE clause?",
        "answer": "Without WHERE, the statement applies to every row in the table \u2014 potentially updating or deleting all data unintentionally, which can be catastrophic in production."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does WHERE do in a SQL statement?",
        "options": [
          "Sorts rows",
          "Filters rows based on a condition",
          "Groups rows",
          "Renames columns"
        ],
        "correctIndex": 1,
        "explanation": "WHERE filters which rows are affected or returned."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What happens if you run DELETE FROM table_name; without WHERE?",
        "options": [
          "Nothing happens",
          "All rows are deleted",
          "Only the first row is deleted",
          "It throws an error"
        ],
        "correctIndex": 1,
        "explanation": "Without WHERE, DELETE removes every row in the table."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which operator checks 'not equal to' in MySQL?",
        "options": [
          "!=  or <>",
          "==",
          "=/=",
          "NOT="
        ],
        "correctIndex": 0,
        "explanation": "MySQL supports both != and <> for 'not equal'."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "SELECT * FROM products WHERE price > 500; returns:",
        "options": [
          "All products",
          "Only products priced above 500",
          "Only products priced below 500",
          "No products"
        ],
        "correctIndex": 1,
        "explanation": "Only rows satisfying price > 500 are returned."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which clauses commonly use WHERE?",
        "options": [
          "Only SELECT",
          "SELECT, UPDATE, and DELETE",
          "Only CREATE TABLE",
          "Only INSERT"
        ],
        "correctIndex": 1,
        "explanation": "WHERE is used to target specific rows in SELECT, UPDATE, and DELETE."
      }
    ]
  },
  {
    "id": 21,
    "title": "Comparison Operators",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 6,
    "concept": "Comparison operators let you compare column values against a value or another column: equal to, greater than, less than, and so on. They're the building blocks of WHERE conditions.",
    "realLifeExample": "An online store uses price >= 1000 to find premium products, or rating < 3 to flag poorly-rated ones \u2014 both powered by comparison operators.",
    "syntax": "=   -- equal to\n!=  or <>  -- not equal to\n>   -- greater than\n<   -- less than\n>=  -- greater than or equal to\n<=  -- less than or equal to",
    "examples": [
      {
        "sql": "SELECT * FROM products WHERE price >= 1000;",
        "output": "product_id | name        | price\n-----------|-------------|------\n3          | Smartwatch  | 4999\n5          | Headphones  | 1999",
        "explanation": "Only products with a price of 1000 or more are returned, since >= includes values equal to 1000 as well as greater."
      }
    ],
    "importantPoints": [
      "'=' is for equality, not assignment (unlike some programming languages).",
      "Both != and <> mean 'not equal to' in MySQL \u2014 they're interchangeable.",
      "Comparison operators work on numbers, dates, and even text (alphabetical comparison)."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE price = >1000",
        "correct": "WHERE price > 1000",
        "why": "Combining '=' with another operator like this is invalid syntax \u2014 use only one comparison operator at a time."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all orders with a total_amount greater than 500.",
        "difficulty": "Easy",
        "hint": "Use the > operator."
      },
      {
        "text": "Find all students with age less than or equal to 18.",
        "difficulty": "Easy",
        "hint": "Use the <= operator."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What comparison operators are available in SQL?",
        "answer": "=, != (or <>), >, <, >=, and <= are the standard comparison operators used to compare column values in conditions."
      },
      {
        "question": "Can comparison operators be used on text data, not just numbers?",
        "answer": "Yes \u2014 text comparisons in SQL typically follow alphabetical (lexicographic) order, so 'apple' < 'banana' evaluates to true."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Which operator checks 'greater than or equal to'?",
        "options": [
          ">",
          ">=",
          "=>",
          "=="
        ],
        "correctIndex": 1,
        "explanation": ">= means greater than or equal to."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which two operators both mean 'not equal to' in MySQL?",
        "options": [
          "= and ==",
          "!= and <>",
          "<> and =>",
          "> and <"
        ],
        "correctIndex": 1,
        "explanation": "MySQL supports both != and <> for 'not equal'."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Can comparison operators work on text values?",
        "options": [
          "No, only numbers",
          "Yes, using alphabetical order",
          "Only with special functions",
          "Only on dates"
        ],
        "correctIndex": 1,
        "explanation": "Text is compared lexicographically (alphabetically)."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "WHERE age < 18 returns which rows?",
        "options": [
          "Ages 18 and above",
          "Ages strictly below 18",
          "All ages",
          "No rows ever"
        ],
        "correctIndex": 1,
        "explanation": "The < operator excludes 18 itself, returning only values below it."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What's wrong with 'WHERE price = >1000'?",
        "options": [
          "Nothing, it's valid",
          "Invalid syntax \u2014 can't combine = with >",
          "It means the same as >=",
          "It's slower than >="
        ],
        "correctIndex": 1,
        "explanation": "You cannot chain = directly before another operator like that."
      }
    ]
  },
  {
    "id": 22,
    "title": "AND",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 6,
    "concept": "The AND operator combines multiple conditions in a WHERE clause \u2014 a row is only returned if ALL the conditions are true.",
    "realLifeExample": "A job portal filters candidates where experience > 2 AND location = 'Bhopal' \u2014 both conditions must be satisfied for a candidate to appear in results.",
    "syntax": "SELECT * FROM table_name WHERE condition1 AND condition2;",
    "examples": [
      {
        "sql": "SELECT * FROM products WHERE category = 'Electronics' AND price < 5000;",
        "output": "product_id | name        | category    | price\n-----------|-------------|-------------|------\n5          | Headphones  | Electronics | 1999",
        "explanation": "Only rows satisfying BOTH conditions are returned \u2014 must be Electronics AND priced under 5000."
      }
    ],
    "importantPoints": [
      "AND requires every condition to be true \u2014 even one false condition excludes the row.",
      "You can chain more than two conditions with multiple ANDs.",
      "Combine AND with OR carefully, using parentheses to control logic precedence."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE category = 'Electronics' AND 'Furniture'",
        "correct": "WHERE category = 'Electronics' AND category = 'Books'  -- (though for multiple values, IN is better)",
        "why": "Each condition around AND needs its own complete comparison \u2014 you can't shorthand multiple values after a single column check like this."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all orders where status = 'Delivered' AND total_amount > 1000.",
        "difficulty": "Easy",
        "hint": "Combine two conditions with AND."
      },
      {
        "text": "Find all employees where department = 'Sales' AND salary >= 50000.",
        "difficulty": "Medium",
        "hint": "Use AND to combine department and salary filters."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the AND operator do in a WHERE clause?",
        "answer": "AND combines two or more conditions, returning a row only if every one of the combined conditions evaluates to true."
      },
      {
        "question": "What happens if one condition in an AND chain is false?",
        "answer": "The entire condition evaluates to false, and that row is excluded from the result \u2014 all conditions must be true for the row to be included."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does AND require for a row to be included?",
        "options": [
          "At least one condition true",
          "All conditions true",
          "No conditions true",
          "Exactly one condition true"
        ],
        "correctIndex": 1,
        "explanation": "AND requires every combined condition to be true."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "SELECT * FROM t WHERE a=1 AND b=2; returns rows where:",
        "options": [
          "a=1 or b=2",
          "a=1 and b=2 both true",
          "Neither a nor b matches",
          "Only a=1 matters"
        ],
        "correctIndex": 1,
        "explanation": "Both conditions must hold simultaneously."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Can you chain more than two conditions with AND?",
        "options": [
          "No, max 2",
          "Yes, any number of conditions",
          "Only in MySQL 8+",
          "Only with OR mixed in"
        ],
        "correctIndex": 1,
        "explanation": "You can chain as many AND conditions as needed."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "If one condition in an AND chain is false, what happens to the row?",
        "options": [
          "It's still included",
          "It's excluded",
          "It causes an error",
          "It's included with warnings"
        ],
        "correctIndex": 1,
        "explanation": "A single false condition excludes the row when using AND."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which combines conditions where ALL must be true?",
        "options": [
          "OR",
          "AND",
          "NOT",
          "IN"
        ],
        "correctIndex": 1,
        "explanation": "AND requires all specified conditions to be true."
      }
    ]
  },
  {
    "id": 23,
    "title": "OR",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 6,
    "concept": "The OR operator combines multiple conditions in a WHERE clause \u2014 a row is returned if AT LEAST ONE of the conditions is true.",
    "realLifeExample": "A travel app shows flights where source = 'Delhi' OR source = 'Mumbai' \u2014 the traveler could be starting from either city.",
    "syntax": "SELECT * FROM table_name WHERE condition1 OR condition2;",
    "examples": [
      {
        "sql": "SELECT * FROM products WHERE category = 'Electronics' OR category = 'Books';",
        "output": "product_id | name        | category\n-----------|-------------|------------\n5          | Headphones  | Electronics\n7          | SQL Guide   | Books",
        "explanation": "Rows matching EITHER condition are included \u2014 the product just needs to belong to one of the two categories."
      }
    ],
    "importantPoints": [
      "OR requires only one condition to be true, unlike AND which requires all.",
      "Mixing AND and OR without parentheses can cause unexpected logic \u2014 always clarify with parentheses.",
      "For many OR conditions on the same column, IN() is cleaner (covered later)."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE category = 'Electronics' OR 'Books'",
        "correct": "WHERE category = 'Electronics' OR category = 'Books'",
        "why": "Each side of OR must be a complete condition \u2014 you can't drop the column name on the second side."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all orders where status = 'Pending' OR status = 'Processing'.",
        "difficulty": "Easy",
        "hint": "Combine two conditions with OR."
      },
      {
        "text": "Find all products where price < 100 OR price > 10000 (very cheap or very expensive).",
        "difficulty": "Medium",
        "hint": "Use OR to combine two price ranges."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the OR operator do in a WHERE clause?",
        "answer": "OR combines two or more conditions, returning a row if at least one of the conditions evaluates to true."
      },
      {
        "question": "Why is it important to use parentheses when mixing AND and OR?",
        "answer": "Without parentheses, SQL's default operator precedence (AND before OR) can group conditions unexpectedly, leading to logic errors. Parentheses make the intended grouping explicit and unambiguous."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does OR require for a row to be included?",
        "options": [
          "All conditions true",
          "At least one condition true",
          "No conditions true",
          "Exactly two conditions true"
        ],
        "correctIndex": 1,
        "explanation": "OR only needs one condition to be true."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "WHERE a=1 OR b=2; includes rows where:",
        "options": [
          "Only a=1 and b=2 both true",
          "a=1, or b=2, or both",
          "Neither matches",
          "Always all rows"
        ],
        "correctIndex": 1,
        "explanation": "Either condition being true is sufficient."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why use parentheses when mixing AND and OR?",
        "options": [
          "For style only",
          "To make logic grouping explicit and avoid ambiguity",
          "It's required syntax with no other purpose",
          "It has no effect"
        ],
        "correctIndex": 1,
        "explanation": "Parentheses control which conditions are grouped together, avoiding unexpected results."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which combines conditions where at least one must be true?",
        "options": [
          "AND",
          "OR",
          "NOT",
          "WHERE"
        ],
        "correctIndex": 1,
        "explanation": "OR includes rows matching any of the given conditions."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "For many possible values on the same column, which is often cleaner than repeated OR?",
        "options": [
          "AND",
          "IN()",
          "NOT",
          "LIKE"
        ],
        "correctIndex": 1,
        "explanation": "IN() is a cleaner shorthand for multiple OR conditions on one column."
      }
    ]
  },
  {
    "id": 24,
    "title": "NOT",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "The NOT operator reverses a condition's result \u2014 it returns rows where the condition is false, effectively excluding matches.",
    "realLifeExample": "A subscription service uses WHERE NOT status = 'Cancelled' to show only active or pending subscriptions, excluding cancelled ones.",
    "syntax": "SELECT * FROM table_name WHERE NOT condition;",
    "examples": [
      {
        "sql": "SELECT * FROM orders WHERE NOT status = 'Cancelled';",
        "output": "order_id | status\n---------|----------\n1        | Delivered\n2        | Pending",
        "explanation": "This returns every order except those with status 'Cancelled' \u2014 NOT flips the condition's result."
      }
    ],
    "importantPoints": [
      "NOT can be combined with other operators: NOT IN, NOT LIKE, NOT BETWEEN.",
      "WHERE NOT column = value is functionally the same as WHERE column != value.",
      "NOT can make complex conditions harder to read \u2014 use it sparingly and clearly."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE NOT status = Cancelled",
        "correct": "WHERE NOT status = 'Cancelled'",
        "why": "Text values must be quoted; without quotes, MySQL tries to interpret Cancelled as a column or keyword, causing an error."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all products where the category is NOT 'Clothing'.",
        "difficulty": "Easy",
        "hint": "Use WHERE NOT category = 'Clothing'."
      },
      {
        "text": "Find all students where the grade is NOT 'F'.",
        "difficulty": "Easy",
        "hint": "Use NOT to exclude one specific grade."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the NOT operator do?",
        "answer": "NOT reverses the result of a condition, so rows that would normally match are excluded, and non-matching rows are included instead."
      },
      {
        "question": "Is 'WHERE NOT column = value' the same as 'WHERE column != value'?",
        "answer": "Yes, functionally they produce the same result \u2014 both exclude rows where the column equals the given value."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does NOT do to a condition?",
        "options": [
          "Makes it always true",
          "Reverses its result",
          "Deletes the condition",
          "Duplicates the condition"
        ],
        "correctIndex": 1,
        "explanation": "NOT flips true to false and vice versa."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "WHERE NOT status = 'Active'; returns:",
        "options": [
          "Only active rows",
          "All rows except active ones",
          "No rows",
          "All rows including active"
        ],
        "correctIndex": 1,
        "explanation": "NOT excludes the matching rows, returning everything else."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which is equivalent to WHERE NOT price = 100?",
        "options": [
          "WHERE price = 100",
          "WHERE price != 100",
          "WHERE price > 100",
          "WHERE price < 100"
        ],
        "correctIndex": 1,
        "explanation": "Both express 'price is not equal to 100'."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which combinations use NOT?",
        "options": [
          "NOT IN, NOT LIKE, NOT BETWEEN",
          "NOT SELECT, NOT TABLE",
          "NOT CREATE, NOT DROP",
          "None of these"
        ],
        "correctIndex": 0,
        "explanation": "NOT commonly pairs with IN, LIKE, and BETWEEN."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What happens if you forget quotes around a text value after NOT column =?",
        "options": [
          "It works fine",
          "MySQL throws an error or misinterprets it",
          "It ignores the condition",
          "It becomes a wildcard"
        ],
        "correctIndex": 1,
        "explanation": "Unquoted text values are typically interpreted incorrectly."
      }
    ]
  },
  {
    "id": 25,
    "title": "ORDER BY",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 6,
    "concept": "ORDER BY sorts the result set by one or more columns, either ascending (ASC, the default) or descending (DESC).",
    "realLifeExample": "A shopping site sorts products by price (low to high) or by rating (high to low) using ORDER BY, letting users browse in the order that matters to them.",
    "syntax": "SELECT * FROM table_name ORDER BY column_name ASC|DESC;",
    "examples": [
      {
        "sql": "SELECT name, price FROM products ORDER BY price DESC;",
        "output": "name        | price\n------------|------\nSmartwatch  | 4999\nHeadphones  | 1999",
        "explanation": "Products are sorted from highest to lowest price because DESC (descending) was specified."
      }
    ],
    "importantPoints": [
      "ASC (ascending, smallest/earliest first) is the default if you don't specify.",
      "You can sort by multiple columns: ORDER BY column1, column2 DESC.",
      "ORDER BY should generally be the last clause in a query (before LIMIT)."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT * FROM products ORDER price DESC;",
        "correct": "SELECT * FROM products ORDER BY price DESC;",
        "why": "The keyword is 'ORDER BY', not just 'ORDER' \u2014 omitting 'BY' causes a syntax error."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Sort a 'students' table by age from youngest to oldest.",
        "difficulty": "Easy",
        "hint": "ASC is default, but you can specify it explicitly."
      },
      {
        "text": "Sort an 'orders' table first by customer_name, then by order_date descending within each customer.",
        "difficulty": "Medium",
        "hint": "Use ORDER BY with two columns."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does ORDER BY do?",
        "answer": "ORDER BY sorts the query's result set based on one or more specified columns, in ascending or descending order."
      },
      {
        "question": "What is the default sort direction if ASC/DESC is not specified?",
        "answer": "ASC (ascending) is the default \u2014 results are sorted from smallest to largest, or earliest to latest, unless DESC is explicitly stated."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does ORDER BY do?",
        "options": [
          "Filters rows",
          "Sorts the result set",
          "Groups rows",
          "Deletes rows"
        ],
        "correctIndex": 1,
        "explanation": "ORDER BY arranges results in a specified order."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is the default sort order if not specified?",
        "options": [
          "DESC",
          "ASC",
          "Random",
          "No default, it errors"
        ],
        "correctIndex": 1,
        "explanation": "ASC (ascending) is the default."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which keyword sorts from highest to lowest?",
        "options": [
          "ASC",
          "DESC",
          "TOP",
          "MAX"
        ],
        "correctIndex": 1,
        "explanation": "DESC sorts in descending order."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can you sort by multiple columns?",
        "options": [
          "No, only one column",
          "Yes, comma-separated columns",
          "Only with GROUP BY",
          "Only in stored procedures"
        ],
        "correctIndex": 1,
        "explanation": "ORDER BY supports multiple columns, each with its own direction."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Where does ORDER BY typically go in a query?",
        "options": [
          "Before SELECT",
          "Near the end, after WHERE",
          "Right after FROM",
          "It can go anywhere"
        ],
        "correctIndex": 1,
        "explanation": "ORDER BY typically comes after WHERE and before LIMIT."
      }
    ]
  },
  {
    "id": 26,
    "title": "LIMIT",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "LIMIT restricts the number of rows returned by a query. It's commonly used for pagination or to preview just a few rows from a large table.",
    "realLifeExample": "A social media feed loads only the first 20 posts at a time using LIMIT 20, instead of pulling every post ever made \u2014 improving speed and user experience.",
    "syntax": "SELECT * FROM table_name LIMIT number;",
    "examples": [
      {
        "sql": "SELECT * FROM products LIMIT 3;",
        "output": "product_id | name\n-----------|------------\n1          | Laptop\n2          | Mouse\n3          | Keyboard",
        "explanation": "Only the first 3 rows from the result set are returned, even if the table has thousands of rows."
      }
    ],
    "importantPoints": [
      "LIMIT is often combined with ORDER BY to get 'top N' results (e.g., top 5 highest-priced products).",
      "LIMIT offset, count skips 'offset' rows before returning 'count' rows \u2014 useful for pagination.",
      "Without ORDER BY, LIMIT's row selection order isn't guaranteed to be meaningful."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT * FROM products LIMIT 5 WHERE price > 100;",
        "correct": "SELECT * FROM products WHERE price > 100 LIMIT 5;",
        "why": "LIMIT must come after WHERE (and ORDER BY, if used) \u2014 it's applied last, after filtering and sorting."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Get the top 5 highest-paid employees using ORDER BY and LIMIT.",
        "difficulty": "Easy",
        "hint": "Sort by salary DESC, then LIMIT 5."
      },
      {
        "text": "Get rows 11\u201320 from a 'products' table (for pagination).",
        "difficulty": "Medium",
        "hint": "Use LIMIT with an offset: LIMIT 10 OFFSET 10."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does LIMIT do?",
        "answer": "LIMIT restricts the number of rows a query returns, which is useful for previewing data or implementing pagination."
      },
      {
        "question": "How would you implement pagination using LIMIT?",
        "answer": "Use LIMIT count OFFSET offset \u2014 for example, LIMIT 10 OFFSET 20 returns 10 rows starting after skipping the first 20, giving you 'page 3' if each page has 10 items."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does LIMIT 5 do?",
        "options": [
          "Returns exactly 5 columns",
          "Returns at most 5 rows",
          "Deletes 5 rows",
          "Sorts by 5 columns"
        ],
        "correctIndex": 1,
        "explanation": "LIMIT restricts the number of rows returned."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which clause is commonly paired with LIMIT for 'top N' queries?",
        "options": [
          "GROUP BY",
          "ORDER BY",
          "HAVING",
          "DISTINCT"
        ],
        "correctIndex": 1,
        "explanation": "ORDER BY plus LIMIT gives you the top or bottom N rows."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "How do you implement pagination with LIMIT?",
        "options": [
          "LIMIT alone can't paginate",
          "LIMIT count OFFSET offset",
          "PAGE(count)",
          "ORDER BY PAGE"
        ],
        "correctIndex": 1,
        "explanation": "OFFSET skips rows before applying the LIMIT count."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Where does LIMIT typically appear in a query?",
        "options": [
          "First",
          "Right after SELECT",
          "Near the end, after ORDER BY",
          "It replaces WHERE"
        ],
        "correctIndex": 2,
        "explanation": "LIMIT is applied last, after filtering and sorting."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Without ORDER BY, is the set of rows LIMIT returns guaranteed to be meaningful?",
        "options": [
          "Yes, always sorted by ID",
          "Not necessarily \u2014 order isn't guaranteed without ORDER BY",
          "It always returns random rows",
          "It returns no rows"
        ],
        "correctIndex": 1,
        "explanation": "Row order is undefined unless you explicitly sort with ORDER BY."
      }
    ]
  },
  {
    "id": 27,
    "title": "DISTINCT",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "DISTINCT removes duplicate values from the result set, returning only unique rows or unique values for the selected column(s).",
    "realLifeExample": "An HR system uses SELECT DISTINCT department FROM employees to get a list of unique departments, without repeating 'Sales' for every one of the 50 sales employees.",
    "syntax": "SELECT DISTINCT column_name FROM table_name;",
    "examples": [
      {
        "sql": "SELECT DISTINCT department FROM employees;",
        "output": "department\n----------\nSales\nEngineering\nHR",
        "explanation": "Even if hundreds of employees belong to these departments, each department name appears only once in the result."
      }
    ],
    "importantPoints": [
      "DISTINCT applies to the entire selected row, not just one column, when multiple columns are selected.",
      "DISTINCT can be slower on very large tables since MySQL must compare rows to find duplicates.",
      "DISTINCT works well combined with COUNT to count unique values: COUNT(DISTINCT column)."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT DISTINCT name, DISTINCT department FROM employees;",
        "correct": "SELECT DISTINCT name, department FROM employees;",
        "why": "DISTINCT is written once, right after SELECT \u2014 it applies to the whole combination of selected columns, not each column individually."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Get a list of unique cities from a 'customers' table.",
        "difficulty": "Easy",
        "hint": "Use SELECT DISTINCT city FROM customers."
      },
      {
        "text": "Count how many unique categories exist in a 'products' table.",
        "difficulty": "Medium",
        "hint": "Combine COUNT(DISTINCT column)."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does DISTINCT do?",
        "answer": "DISTINCT removes duplicate rows from a query's result, returning only unique combinations of the selected column(s)."
      },
      {
        "question": "How would you count unique values in a column?",
        "answer": "Use SELECT COUNT(DISTINCT column_name) FROM table_name; \u2014 this counts how many unique values exist in that column."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does SELECT DISTINCT do?",
        "options": [
          "Sorts results",
          "Removes duplicate rows from the result",
          "Deletes duplicate rows from the table",
          "Filters by a condition"
        ],
        "correctIndex": 1,
        "explanation": "DISTINCT returns only unique values/rows in the result set \u2014 it does not modify the underlying table."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Does DISTINCT delete duplicates from the actual table?",
        "options": [
          "Yes, permanently",
          "No, it only affects the query result",
          "Only with DELETE DISTINCT",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "DISTINCT is a read-only filtering of the result, not a table modification."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "SELECT DISTINCT city, state FROM customers; considers duplicates based on:",
        "options": [
          "Only city",
          "Only state",
          "The combination of city AND state together",
          "Neither column"
        ],
        "correctIndex": 2,
        "explanation": "With multiple columns, DISTINCT looks at the full row combination."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "How do you count unique values in a column?",
        "options": [
          "COUNT(column)",
          "COUNT(DISTINCT column)",
          "DISTINCT(COUNT(column))",
          "UNIQUE(column)"
        ],
        "correctIndex": 1,
        "explanation": "COUNT(DISTINCT column) counts only unique values."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Can DISTINCT impact query performance on large tables?",
        "options": [
          "No effect ever",
          "Yes, since MySQL must compare rows for duplicates",
          "It always speeds up queries",
          "Only affects INSERT statements"
        ],
        "correctIndex": 1,
        "explanation": "Removing duplicates requires comparison work, which can slow large queries."
      }
    ]
  },
  {
    "id": 28,
    "title": "UPDATE",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 8,
    "concept": "UPDATE modifies existing rows in a table. You specify the table, the new value(s) with SET, and (critically) a WHERE clause to target specific rows.",
    "realLifeExample": "When a customer changes their delivery address on a shopping app, the backend runs an UPDATE statement to change that one row in the 'customers' table.",
    "syntax": "UPDATE table_name SET column1 = value1 WHERE condition;",
    "examples": [
      {
        "sql": "UPDATE students SET age = 21 WHERE student_id = 1;",
        "output": "Query OK, 1 row affected",
        "explanation": "This changes the age value to 21, but only for the row where student_id equals 1 \u2014 every other row is untouched."
      }
    ],
    "importantPoints": [
      "Always include a WHERE clause \u2014 omitting it updates every row in the table.",
      "You can update multiple columns at once: SET col1 = val1, col2 = val2.",
      "It's good practice to run a SELECT with the same WHERE clause first, to preview which rows will be affected."
    ],
    "commonMistakes": [
      {
        "wrong": "UPDATE students SET age = 21;",
        "correct": "UPDATE students SET age = 21 WHERE student_id = 1;",
        "why": "Without WHERE, every single row in the students table gets age set to 21 \u2014 a dangerous and often accidental mistake."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Update a product's price to 999 where product_id = 5.",
        "difficulty": "Easy",
        "hint": "Use UPDATE ... SET ... WHERE."
      },
      {
        "text": "Update both the status and updated_at columns for order_id = 10 in one statement.",
        "difficulty": "Medium",
        "hint": "Use SET with two comma-separated assignments."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the UPDATE statement do?",
        "answer": "UPDATE modifies existing values in one or more columns for rows matching a specified WHERE condition."
      },
      {
        "question": "Why must you always use a WHERE clause with UPDATE?",
        "answer": "Without WHERE, the UPDATE statement applies to every row in the table, which can unintentionally overwrite large amounts of data \u2014 often requiring a backup restore to fix."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does UPDATE do?",
        "options": [
          "Adds new rows",
          "Modifies existing rows",
          "Deletes rows",
          "Creates a table"
        ],
        "correctIndex": 1,
        "explanation": "UPDATE changes existing data in a table."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What happens if UPDATE is run without a WHERE clause?",
        "options": [
          "Nothing happens",
          "Every row in the table gets updated",
          "It throws an error automatically",
          "Only the first row updates"
        ],
        "correctIndex": 1,
        "explanation": "Without WHERE, the SET change applies to all rows."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which clause specifies what new value a column should have?",
        "options": [
          "WHERE",
          "SET",
          "FROM",
          "VALUES"
        ],
        "correctIndex": 1,
        "explanation": "SET defines the new value(s) to assign."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can you update multiple columns in one UPDATE statement?",
        "options": [
          "No, only one column per statement",
          "Yes, using comma-separated SET assignments",
          "Only using two separate statements",
          "Only with a stored procedure"
        ],
        "correctIndex": 1,
        "explanation": "Multiple columns can be set in one statement, separated by commas."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is a good safety practice before running an UPDATE?",
        "options": [
          "Run it directly without checking",
          "Preview affected rows first with a matching SELECT",
          "Always update the whole table",
          "Disable WHERE clauses"
        ],
        "correctIndex": 1,
        "explanation": "Previewing with SELECT first confirms exactly which rows will be affected."
      }
    ]
  },
  {
    "id": 29,
    "title": "DELETE",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Easy",
    "estMinutes": 7,
    "concept": "DELETE removes rows from a table based on a condition. Like UPDATE, it's a powerful and potentially dangerous command if used without WHERE.",
    "realLifeExample": "When a user closes their account, the system runs DELETE FROM users WHERE user_id = 42; to remove that specific user's row from the database.",
    "syntax": "DELETE FROM table_name WHERE condition;",
    "examples": [
      {
        "sql": "DELETE FROM orders WHERE order_id = 10;",
        "output": "Query OK, 1 row affected",
        "explanation": "This removes only the row where order_id equals 10 \u2014 all other orders remain untouched in the table."
      }
    ],
    "importantPoints": [
      "Always use WHERE \u2014 DELETE FROM table_name; (without WHERE) removes every row.",
      "DELETE removes rows but keeps the table structure intact, unlike DROP or TRUNCATE.",
      "DELETE operations can be rolled back if inside a transaction that hasn't been committed yet."
    ],
    "commonMistakes": [
      {
        "wrong": "DELETE FROM orders;",
        "correct": "DELETE FROM orders WHERE order_id = 10;",
        "why": "Without WHERE, every row in the orders table is permanently deleted \u2014 always verify the WHERE clause before executing DELETE."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Delete a single order with order_id = 25.",
        "difficulty": "Easy",
        "hint": "Use DELETE FROM ... WHERE order_id = 25."
      },
      {
        "text": "Delete all students with a grade of 'F'.",
        "difficulty": "Medium",
        "hint": "Use WHERE grade = 'F' to target only failing students."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the DELETE statement do?",
        "answer": "DELETE removes rows from a table that match a specified WHERE condition, without affecting the table's structure."
      },
      {
        "question": "What is the difference between DELETE and TRUNCATE?",
        "answer": "DELETE removes rows one at a time (optionally filtered by WHERE) and can be rolled back within a transaction. TRUNCATE removes all rows at once, resets auto-increment counters, is faster, and typically cannot be rolled back."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does DELETE FROM table_name WHERE id = 5; do?",
        "options": [
          "Deletes the whole table",
          "Deletes only the row where id = 5",
          "Deletes column id",
          "Renames the table"
        ],
        "correctIndex": 1,
        "explanation": "Only the matching row is removed."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What happens if DELETE is run without WHERE?",
        "options": [
          "Nothing happens",
          "Every row in the table is deleted",
          "Only the last row is deleted",
          "It automatically asks for confirmation"
        ],
        "correctIndex": 1,
        "explanation": "All rows are deleted when WHERE is omitted."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Does DELETE remove the table structure?",
        "options": [
          "Yes, always",
          "No, only the matching rows are removed",
          "Only in older MySQL versions",
          "Only if TRUNCATE is also used"
        ],
        "correctIndex": 1,
        "explanation": "DELETE only removes rows; the table itself remains."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which is generally faster for removing ALL rows: DELETE or TRUNCATE?",
        "options": [
          "DELETE",
          "TRUNCATE",
          "They are identical in speed",
          "Neither can remove all rows"
        ],
        "correctIndex": 1,
        "explanation": "TRUNCATE is optimized for removing all rows at once."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Can a DELETE be undone?",
        "options": [
          "Never, under any circumstances",
          "Yes, if rolled back within an active transaction before COMMIT",
          "Only with TRUNCATE",
          "Only with DROP"
        ],
        "correctIndex": 1,
        "explanation": "Within a transaction, DELETE can be undone with ROLLBACK before committing."
      }
    ]
  },
  {
    "id": 30,
    "title": "DROP",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Medium",
    "estMinutes": 6,
    "concept": "DROP permanently removes an entire table or database \u2014 including its structure and all its data. It's one of the most destructive SQL commands.",
    "realLifeExample": "When a company retires an old 'legacy_orders' table that's no longer used, an admin might run DROP TABLE legacy_orders; to permanently remove it and free up storage.",
    "syntax": "DROP TABLE table_name;\nDROP DATABASE database_name;",
    "examples": [
      {
        "sql": "DROP TABLE old_logs;",
        "output": "Query OK, 0 rows affected",
        "explanation": "This permanently deletes the 'old_logs' table itself, including its structure, all its data, and any indexes \u2014 this cannot be undone."
      }
    ],
    "importantPoints": [
      "DROP removes the table/database structure entirely \u2014 unlike DELETE, which only removes rows.",
      "There is no built-in 'undo' for DROP \u2014 always back up before running it in production.",
      "Use DROP TABLE IF EXISTS table_name; to avoid an error if the table doesn't exist."
    ],
    "commonMistakes": [
      {
        "wrong": "DROP TABLE customers; -- without checking dependencies",
        "correct": "Always verify no other tables/foreign keys depend on this table before dropping it",
        "why": "Dropping a table that other tables reference via foreign keys can break relationships or fail if constraints exist."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a command to safely drop a table called 'temp_data' only if it exists.",
        "difficulty": "Easy",
        "hint": "Use DROP TABLE IF EXISTS."
      },
      {
        "text": "Explain the risk of running DROP DATABASE production_db; by mistake.",
        "difficulty": "Medium",
        "hint": "Think about what's permanently lost."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between DROP and DELETE?",
        "answer": "DROP permanently removes the entire table (or database) structure along with all its data. DELETE only removes rows from within a table, while the table structure itself remains intact."
      },
      {
        "question": "How can you safely avoid errors when dropping a table that may not exist?",
        "answer": "Use DROP TABLE IF EXISTS table_name; \u2014 this prevents an error if the table has already been dropped or was never created."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does DROP TABLE do?",
        "options": [
          "Removes rows only",
          "Permanently deletes the entire table structure and data",
          "Temporarily disables a table",
          "Renames a table"
        ],
        "correctIndex": 1,
        "explanation": "DROP removes the table entirely, structure and data."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is the key difference between DROP and DELETE?",
        "options": [
          "No difference",
          "DROP removes structure + data; DELETE removes only rows",
          "DELETE is more destructive",
          "DROP only works on databases"
        ],
        "correctIndex": 1,
        "explanation": "DROP is far more destructive, removing the table itself."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Can a DROP TABLE command typically be undone?",
        "options": [
          "Yes, always with UNDO",
          "No, it's generally permanent without a backup",
          "Only within 24 hours",
          "Yes, using ROLLBACK after commit"
        ],
        "correctIndex": 1,
        "explanation": "Without a prior backup, DROP is irreversible."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "How do you avoid an error when dropping a table that might not exist?",
        "options": [
          "DROP TABLE IF EXISTS table_name;",
          "DROP SAFE table_name;",
          "TABLE DROP table_name;",
          "There is no way"
        ],
        "correctIndex": 0,
        "explanation": "IF EXISTS prevents an error if the table is already gone."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What should you do before running DROP DATABASE in production?",
        "options": [
          "Nothing, it's safe",
          "Take a backup first",
          "Just run it during business hours",
          "Disable WHERE clauses"
        ],
        "correctIndex": 1,
        "explanation": "Always back up critical data before irreversible operations like DROP."
      }
    ]
  },
  {
    "id": 31,
    "title": "TRUNCATE",
    "level": "Beginner",
    "category": "Beginner SQL",
    "difficulty": "Medium",
    "estMinutes": 6,
    "concept": "TRUNCATE quickly removes all rows from a table while keeping its structure intact. It's faster than DELETE for clearing an entire table, and resets auto-increment counters.",
    "realLifeExample": "Before reloading a 'daily_logs' table with a fresh batch of data every night, a system might run TRUNCATE TABLE daily_logs; to instantly clear yesterday's data.",
    "syntax": "TRUNCATE TABLE table_name;",
    "examples": [
      {
        "sql": "TRUNCATE TABLE daily_logs;",
        "output": "Query OK, 0 rows affected",
        "explanation": "Every row in 'daily_logs' is removed instantly, and the table's auto-increment counter resets to its starting value \u2014 but the table structure itself remains."
      }
    ],
    "importantPoints": [
      "TRUNCATE removes ALL rows \u2014 it cannot be filtered with WHERE.",
      "TRUNCATE resets AUTO_INCREMENT counters, unlike DELETE.",
      "TRUNCATE is typically faster than DELETE for clearing large tables, since it doesn't log individual row deletions."
    ],
    "commonMistakes": [
      {
        "wrong": "TRUNCATE TABLE orders WHERE status = 'Old';",
        "correct": "DELETE FROM orders WHERE status = 'Old';",
        "why": "TRUNCATE cannot use a WHERE clause \u2014 it always removes every row. Use DELETE if you need to target specific rows."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a command to instantly clear all data from a 'temp_uploads' table.",
        "difficulty": "Easy",
        "hint": "Use TRUNCATE TABLE."
      },
      {
        "text": "Explain why TRUNCATE resets auto-increment but DELETE (usually) does not.",
        "difficulty": "Medium",
        "hint": "Think about how each command is implemented internally."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between TRUNCATE and DELETE?",
        "answer": "TRUNCATE removes all rows at once, resets auto-increment values, is faster, and generally cannot be filtered with WHERE or rolled back. DELETE removes rows one at a time, can use WHERE to target specific rows, and can be rolled back within a transaction."
      },
      {
        "question": "Can you use TRUNCATE to remove only some rows from a table?",
        "answer": "No \u2014 TRUNCATE always removes every row in the table. To remove only specific rows, you must use DELETE with a WHERE clause instead."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Can TRUNCATE use a WHERE clause to filter rows?",
        "options": [
          "Yes, just like DELETE",
          "No, it always removes every row",
          "Only with a subquery",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "TRUNCATE has no filtering \u2014 it clears the entire table."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What happens to AUTO_INCREMENT after TRUNCATE?",
        "options": [
          "It stays the same",
          "It resets to its starting value",
          "It doubles",
          "It becomes NULL"
        ],
        "correctIndex": 1,
        "explanation": "TRUNCATE resets auto-increment counters, unlike DELETE."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which is generally faster for clearing an entire large table?",
        "options": [
          "DELETE",
          "TRUNCATE",
          "They are identical",
          "Neither can clear a table"
        ],
        "correctIndex": 1,
        "explanation": "TRUNCATE is optimized for full-table clears and is typically faster."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Does TRUNCATE remove the table structure?",
        "options": [
          "Yes, like DROP",
          "No, only the data rows",
          "Only column definitions",
          "Only indexes"
        ],
        "correctIndex": 1,
        "explanation": "TRUNCATE keeps the table structure; only the data is cleared."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which command would you use to remove only orders with status = 'Cancelled'?",
        "options": [
          "TRUNCATE TABLE orders;",
          "DELETE FROM orders WHERE status = 'Cancelled';",
          "DROP TABLE orders;",
          "TRUNCATE orders WHERE status='Cancelled';"
        ],
        "correctIndex": 1,
        "explanation": "DELETE with WHERE targets specific rows; TRUNCATE cannot filter."
      }
    ]
  },
  {
    "id": 32,
    "title": "Aggregate Functions",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "Aggregate functions perform a calculation across multiple rows and return a single summary value. They're the foundation for reports, dashboards, and analytics.",
    "realLifeExample": "An e-commerce dashboard shows 'Total Revenue', 'Average Order Value', and 'Total Orders' \u2014 every one of these is powered by an aggregate function summarizing thousands of rows.",
    "syntax": "SELECT AGG_FUNCTION(column_name) FROM table_name;",
    "examples": [
      {
        "sql": "SELECT COUNT(*) AS total_orders, SUM(amount) AS total_revenue FROM orders;",
        "output": "total_orders | total_revenue\n-------------|---------------\n1200         | 458000.00",
        "explanation": "COUNT(*) counts all rows; SUM(amount) adds up every value in the amount column \u2014 both collapse many rows into one summary row."
      }
    ],
    "importantPoints": [
      "Common aggregates: COUNT, SUM, AVG, MIN, MAX.",
      "Aggregate functions ignore NULL values (except COUNT(*)).",
      "Aggregates are often combined with GROUP BY to summarize per category, not just the whole table."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT name, SUM(amount) FROM orders;",
        "correct": "SELECT SUM(amount) FROM orders;  -- or add GROUP BY name",
        "why": "Mixing a non-aggregated column with an aggregate function without GROUP BY causes an error or unpredictable results in strict SQL mode."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find the total number of orders in an 'orders' table.",
        "difficulty": "Easy",
        "hint": "Use COUNT(*)."
      },
      {
        "text": "Find the total, average, and maximum salary in an 'employees' table in one query.",
        "difficulty": "Medium",
        "hint": "Combine SUM, AVG, and MAX in one SELECT."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What are aggregate functions in SQL?",
        "answer": "Aggregate functions perform calculations on a set of rows and return a single summarized value, such as a total, average, or count."
      },
      {
        "question": "Do aggregate functions include NULL values in their calculations?",
        "answer": "Most aggregate functions (SUM, AVG, MIN, MAX) ignore NULL values. COUNT(column) also ignores NULLs, but COUNT(*) counts all rows regardless of NULLs."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What do aggregate functions return?",
        "options": [
          "Multiple rows",
          "A single summarized value",
          "Only text",
          "Column names"
        ],
        "correctIndex": 1,
        "explanation": "Aggregates collapse many rows into one summary value."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which of these is an aggregate function?",
        "options": [
          "WHERE",
          "SUM()",
          "ORDER BY",
          "SELECT"
        ],
        "correctIndex": 1,
        "explanation": "SUM() is a classic aggregate function."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Do aggregate functions typically ignore NULL values?",
        "options": [
          "No, they always error on NULL",
          "Yes, most ignore NULLs (except COUNT(*))",
          "Only SUM ignores NULLs",
          "NULLs are treated as zero"
        ],
        "correctIndex": 1,
        "explanation": "SUM, AVG, MIN, MAX, and COUNT(column) skip NULLs."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What happens if you mix a plain column with an aggregate without GROUP BY?",
        "options": [
          "It always works fine",
          "It typically causes an error in strict mode",
          "MySQL ignores the aggregate",
          "It duplicates rows"
        ],
        "correctIndex": 1,
        "explanation": "Non-aggregated columns need to be in GROUP BY when mixed with aggregates."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which clause is often used alongside aggregate functions to summarize per category?",
        "options": [
          "ORDER BY",
          "GROUP BY",
          "LIMIT",
          "DISTINCT"
        ],
        "correctIndex": 1,
        "explanation": "GROUP BY groups rows so aggregates can summarize each group separately."
      }
    ]
  },
  {
    "id": 33,
    "title": "COUNT",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "COUNT() returns the number of rows that match a condition. COUNT(*) counts all rows, while COUNT(column) counts only rows where that column is not NULL.",
    "realLifeExample": "A support dashboard shows 'Open Tickets: 47' using COUNT(*) on tickets WHERE status = 'Open', instantly summarizing thousands of rows into one number.",
    "syntax": "SELECT COUNT(*) FROM table_name WHERE condition;\nSELECT COUNT(column_name) FROM table_name;",
    "examples": [
      {
        "sql": "SELECT COUNT(*) AS open_tickets FROM tickets WHERE status = 'Open';",
        "output": "open_tickets\n-------------\n47",
        "explanation": "COUNT(*) counts every row matching the WHERE condition, regardless of NULLs in any specific column."
      }
    ],
    "importantPoints": [
      "COUNT(*) counts all rows, including those with NULLs anywhere.",
      "COUNT(column_name) counts only non-NULL values in that specific column.",
      "COUNT(DISTINCT column_name) counts unique non-NULL values."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT COUNT(email) FROM users;  -- expecting total user count",
        "correct": "SELECT COUNT(*) FROM users;  -- if you want the total row count regardless of NULL emails",
        "why": "COUNT(email) skips rows where email is NULL, which can undercount if you actually wanted the total number of users."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Count how many students are in a 'students' table.",
        "difficulty": "Easy",
        "hint": "Use COUNT(*)."
      },
      {
        "text": "Count how many employees have a non-NULL phone number.",
        "difficulty": "Easy",
        "hint": "Use COUNT(phone_number)."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between COUNT(*) and COUNT(column_name)?",
        "answer": "COUNT(*) counts all rows regardless of NULL values in any column. COUNT(column_name) counts only the rows where that specific column has a non-NULL value."
      },
      {
        "question": "How would you count unique values in a column using COUNT?",
        "answer": "Use COUNT(DISTINCT column_name) \u2014 this counts only the distinct, non-NULL values present in that column."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does COUNT(*) count?",
        "options": [
          "Only non-NULL rows",
          "All rows matching the query",
          "Only distinct rows",
          "Only the first row"
        ],
        "correctIndex": 1,
        "explanation": "COUNT(*) counts every row, regardless of NULLs."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does COUNT(email) count?",
        "options": [
          "All rows",
          "Only rows where email is not NULL",
          "Only unique emails",
          "Rows where email is NULL"
        ],
        "correctIndex": 1,
        "explanation": "COUNT(column) skips NULL values in that column."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "How do you count unique values in a column?",
        "options": [
          "COUNT(column)",
          "COUNT(DISTINCT column)",
          "COUNT(UNIQUE column)",
          "COUNT(*) DISTINCT"
        ],
        "correctIndex": 1,
        "explanation": "COUNT(DISTINCT column) counts unique non-NULL values."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "If a table has 100 rows and 10 have a NULL phone number, what does COUNT(phone_number) return?",
        "options": [
          "100",
          "90",
          "10",
          "0"
        ],
        "correctIndex": 1,
        "explanation": "COUNT(column) excludes the 10 NULL rows, counting only 90."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which counts total rows regardless of any NULLs?",
        "options": [
          "COUNT(column)",
          "COUNT(*)",
          "COUNT(DISTINCT column)",
          "None of these"
        ],
        "correctIndex": 1,
        "explanation": "COUNT(*) is unaffected by NULLs in individual columns."
      }
    ]
  },
  {
    "id": 34,
    "title": "SUM",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "SUM() adds up all the numeric values in a column, returning a single total. It's commonly used for totals like revenue, quantities, or expenses.",
    "realLifeExample": "A finance report calculates 'Total Monthly Expenses' by running SUM(amount) across every expense row logged that month.",
    "syntax": "SELECT SUM(column_name) FROM table_name;",
    "examples": [
      {
        "sql": "SELECT SUM(amount) AS total_revenue FROM orders WHERE YEAR(order_date) = 2026;",
        "output": "total_revenue\n--------------\n1250000.00",
        "explanation": "SUM adds every 'amount' value from orders placed in 2026, returning one total figure."
      }
    ],
    "importantPoints": [
      "SUM only works on numeric columns \u2014 using it on text columns causes an error or returns 0/NULL.",
      "SUM ignores NULL values automatically.",
      "Combine SUM with GROUP BY to get subtotals per category (e.g., revenue per region)."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT SUM(customer_name) FROM orders;",
        "correct": "SELECT SUM(amount) FROM orders;",
        "why": "SUM only makes sense on numeric data \u2014 applying it to a text column like customer_name is a logical error, even if MySQL doesn't always throw a hard error."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find the total quantity sold across all rows in an 'order_items' table.",
        "difficulty": "Easy",
        "hint": "Use SUM(quantity)."
      },
      {
        "text": "Find total revenue per product category using SUM and GROUP BY.",
        "difficulty": "Medium",
        "hint": "Combine SUM(amount) with GROUP BY category."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the SUM function do?",
        "answer": "SUM adds together all the numeric values in a specified column across the selected rows, returning one total."
      },
      {
        "question": "What happens if a column used in SUM contains NULL values?",
        "answer": "SUM automatically ignores NULL values \u2014 they are simply excluded from the total, rather than treated as zero or causing an error."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does SUM(amount) return?",
        "options": [
          "The count of rows",
          "The total of all amount values",
          "The largest amount",
          "The average amount"
        ],
        "correctIndex": 1,
        "explanation": "SUM adds all values in the column together."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Does SUM work correctly on text columns?",
        "options": [
          "Yes, always",
          "No, it's meant for numeric columns",
          "Only with VARCHAR",
          "Only with dates"
        ],
        "correctIndex": 1,
        "explanation": "SUM is designed for numeric data types."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "How does SUM handle NULL values?",
        "options": [
          "Treats them as zero",
          "Ignores them completely",
          "Causes an error",
          "Converts them to 1"
        ],
        "correctIndex": 1,
        "explanation": "NULLs are excluded from the summation, not counted as zero."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "How would you get total sales per region?",
        "options": [
          "SUM(sales) alone",
          "SUM(sales) with GROUP BY region",
          "COUNT(sales) GROUP BY region",
          "AVG(sales)"
        ],
        "correctIndex": 1,
        "explanation": "GROUP BY region breaks the SUM into per-region subtotals."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "SELECT SUM(price) FROM products; returns how many rows?",
        "options": [
          "One row with the total",
          "One row per product",
          "Zero rows",
          "All rows unchanged"
        ],
        "correctIndex": 0,
        "explanation": "Aggregate functions without GROUP BY collapse to a single summary row."
      }
    ]
  },
  {
    "id": 35,
    "title": "AVG",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "AVG() calculates the average (mean) of numeric values in a column, by dividing the sum by the count of non-NULL values.",
    "realLifeExample": "A food delivery app shows a restaurant's 'Average Rating: 4.3' by running AVG(rating) across all customer reviews for that restaurant.",
    "syntax": "SELECT AVG(column_name) FROM table_name;",
    "examples": [
      {
        "sql": "SELECT AVG(rating) AS avg_rating FROM reviews WHERE restaurant_id = 101;",
        "output": "avg_rating\n-----------\n4.3",
        "explanation": "AVG adds all ratings for restaurant 101 and divides by the number of ratings, giving the mean score."
      }
    ],
    "importantPoints": [
      "AVG ignores NULL values both in the sum and in the count used for division.",
      "AVG only works meaningfully on numeric columns.",
      "Round AVG results for display using ROUND(AVG(column), 2)."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT AVG(rating) FROM reviews;  -- expecting a clean number",
        "correct": "SELECT ROUND(AVG(rating), 2) AS avg_rating FROM reviews;",
        "why": "Without ROUND, AVG can return long decimal values like 4.28571428... which look messy in a report or UI."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find the average order amount in an 'orders' table.",
        "difficulty": "Easy",
        "hint": "Use AVG(amount)."
      },
      {
        "text": "Find the average salary per department, rounded to 2 decimal places.",
        "difficulty": "Medium",
        "hint": "Combine AVG, ROUND, and GROUP BY."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the AVG function calculate?",
        "answer": "AVG calculates the mean (average) of the numeric values in a column, by summing them and dividing by the count of non-NULL values."
      },
      {
        "question": "Why might you use ROUND() together with AVG()?",
        "answer": "AVG can produce results with many decimal places. Wrapping it with ROUND(AVG(column), n) presents a cleaner, more readable number with a fixed number of decimal places."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does AVG(salary) calculate?",
        "options": [
          "The total salary",
          "The mean salary",
          "The highest salary",
          "The number of salaries"
        ],
        "correctIndex": 1,
        "explanation": "AVG computes the mean of the values."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Does AVG include NULL values in its calculation?",
        "options": [
          "Yes, treated as 0",
          "No, NULLs are excluded",
          "Only sometimes",
          "It errors on NULL"
        ],
        "correctIndex": 1,
        "explanation": "NULLs are excluded from both the sum and the count in AVG."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why combine AVG with ROUND?",
        "options": [
          "It's required syntax",
          "To produce a cleaner, fixed-decimal result",
          "To make the query faster",
          "ROUND is not compatible with AVG"
        ],
        "correctIndex": 1,
        "explanation": "ROUND cleans up AVG's often-long decimal output."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "How would you find the average price per category?",
        "options": [
          "AVG(price) alone",
          "AVG(price) with GROUP BY category",
          "SUM(price) GROUP BY category",
          "COUNT(price) GROUP BY category"
        ],
        "correctIndex": 1,
        "explanation": "GROUP BY breaks the average into per-category results."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "If a column has values 10, 20, and NULL, what does AVG return?",
        "options": [
          "10",
          "15",
          "30",
          "NULL always"
        ],
        "correctIndex": 1,
        "explanation": "NULL is excluded, so AVG = (10+20)/2 = 15."
      }
    ]
  },
  {
    "id": 36,
    "title": "MIN",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Easy",
    "estMinutes": 4,
    "concept": "MIN() returns the smallest value in a column \u2014 the lowest number, earliest date, or first alphabetically for text.",
    "realLifeExample": "A pricing page shows 'Starting from \u20b9499' using MIN(price) across a product category's variants.",
    "syntax": "SELECT MIN(column_name) FROM table_name;",
    "examples": [
      {
        "sql": "SELECT MIN(price) AS lowest_price FROM products WHERE category = 'Shoes';",
        "output": "lowest_price\n-------------\n499.00",
        "explanation": "MIN scans all shoe prices and returns the smallest one found."
      }
    ],
    "importantPoints": [
      "MIN works on numbers, dates, and text (alphabetically smallest).",
      "MIN ignores NULL values when finding the smallest value.",
      "MIN(order_date) is a common way to find the earliest/oldest record."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT MIN(name) FROM products;  -- expecting cheapest product's name",
        "correct": "SELECT name FROM products ORDER BY price ASC LIMIT 1;",
        "why": "MIN(name) returns the alphabetically first name, not the name of the cheapest product \u2014 for that, sort by price and take the first row."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find the earliest order_date in an 'orders' table.",
        "difficulty": "Easy",
        "hint": "Use MIN(order_date)."
      },
      {
        "text": "Find the lowest salary in each department.",
        "difficulty": "Medium",
        "hint": "Combine MIN(salary) with GROUP BY department."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the MIN function return?",
        "answer": "MIN returns the smallest value in a specified column \u2014 the lowest number, earliest date, or alphabetically first text value."
      },
      {
        "question": "How would you find the product with the lowest price, including its name?",
        "answer": "MIN(price) alone only returns the price value. To get the full row (including the name), you'd typically use ORDER BY price ASC LIMIT 1, or a subquery comparing price to MIN(price)."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does MIN(price) return?",
        "options": [
          "The highest price",
          "The lowest price",
          "The average price",
          "The count of prices"
        ],
        "correctIndex": 1,
        "explanation": "MIN finds the smallest value in the column."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Can MIN be used on date columns?",
        "options": [
          "No, only numbers",
          "Yes, it finds the earliest date",
          "Only with DATEDIFF",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "MIN works on dates, returning the earliest one."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Does MIN(name) return the cheapest product's name?",
        "options": [
          "Yes, always",
          "No, it returns the alphabetically first name",
          "Only if sorted first",
          "It causes an error"
        ],
        "correctIndex": 1,
        "explanation": "MIN on a text column returns alphabetical minimum, unrelated to other columns."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "How do you find the lowest salary per department?",
        "options": [
          "MIN(salary) alone",
          "MIN(salary) with GROUP BY department",
          "MAX(salary) GROUP BY department",
          "AVG(salary)"
        ],
        "correctIndex": 1,
        "explanation": "GROUP BY breaks MIN into per-department results."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Does MIN ignore NULL values?",
        "options": [
          "No, NULL is treated as the minimum",
          "Yes, NULLs are ignored",
          "It always returns NULL if any NULL exists",
          "MIN can't handle NULLs at all"
        ],
        "correctIndex": 1,
        "explanation": "MIN skips NULLs and finds the smallest actual value."
      }
    ]
  },
  {
    "id": 37,
    "title": "MAX",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Easy",
    "estMinutes": 4,
    "concept": "MAX() returns the largest value in a column \u2014 the highest number, latest date, or last alphabetically for text.",
    "realLifeExample": "An HR dashboard shows 'Highest Salary: \u20b91,20,000' using MAX(salary) to instantly highlight the top earner's pay without listing every employee.",
    "syntax": "SELECT MAX(column_name) FROM table_name;",
    "examples": [
      {
        "sql": "SELECT MAX(salary) AS highest_salary FROM employees;",
        "output": "highest_salary\n----------------\n120000.00",
        "explanation": "MAX scans every salary value in the employees table and returns the largest one."
      }
    ],
    "importantPoints": [
      "MAX works on numbers, dates, and text (alphabetically largest).",
      "MAX(order_date) is commonly used to find the most recent record.",
      "MAX ignores NULL values automatically, like MIN."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT MAX(name) FROM employees;  -- expecting the highest earner's name",
        "correct": "SELECT name FROM employees ORDER BY salary DESC LIMIT 1;",
        "why": "MAX(name) returns the alphabetically last name, which has nothing to do with the highest salary \u2014 sort by salary instead to get the right row."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find the most recent order_date in an 'orders' table.",
        "difficulty": "Easy",
        "hint": "Use MAX(order_date)."
      },
      {
        "text": "Find the highest-priced product in each category.",
        "difficulty": "Medium",
        "hint": "Combine MAX(price) with GROUP BY category."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the MAX function return?",
        "answer": "MAX returns the largest value in a specified column \u2014 the highest number, most recent date, or alphabetically last text value."
      },
      {
        "question": "How would you find the most recent order date per customer?",
        "answer": "Use SELECT customer_id, MAX(order_date) FROM orders GROUP BY customer_id; \u2014 this returns the latest order date for each individual customer."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does MAX(price) return?",
        "options": [
          "The lowest price",
          "The highest price",
          "The total of all prices",
          "The count of prices"
        ],
        "correctIndex": 1,
        "explanation": "MAX finds the largest value in the column."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Can MAX be used to find the most recent date?",
        "options": [
          "No",
          "Yes, MAX(date_column) returns the latest date",
          "Only with NOW()",
          "Only with DATEDIFF"
        ],
        "correctIndex": 1,
        "explanation": "MAX works on dates, returning the latest one."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What would MAX(name) return on a text column?",
        "options": [
          "The shortest name",
          "The alphabetically last name",
          "The most common name",
          "An error"
        ],
        "correctIndex": 1,
        "explanation": "MAX on text returns the alphabetically greatest value."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "How do you find the highest salary per department?",
        "options": [
          "MAX(salary) alone",
          "MAX(salary) with GROUP BY department",
          "MIN(salary) GROUP BY department",
          "COUNT(salary)"
        ],
        "correctIndex": 1,
        "explanation": "GROUP BY breaks MAX into per-department results."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Does MAX ignore NULL values?",
        "options": [
          "No, NULL always wins as max",
          "Yes, NULLs are ignored",
          "It errors on NULL",
          "Only in older MySQL versions"
        ],
        "correctIndex": 1,
        "explanation": "MAX skips NULLs and finds the actual largest value."
      }
    ]
  },
  {
    "id": 38,
    "title": "GROUP BY",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 9,
    "concept": "GROUP BY groups rows that share the same value in specified column(s) so aggregate functions can be applied to each group separately, rather than the whole table.",
    "realLifeExample": "A sales report shows 'Total Revenue by Region' \u2014 GROUP BY region groups every order by its region first, then SUM(amount) totals each region's sales independently.",
    "syntax": "SELECT column_name, AGG_FUNCTION(other_column)\nFROM table_name\nGROUP BY column_name;",
    "examples": [
      {
        "sql": "SELECT category, SUM(price) AS total_value FROM products GROUP BY category;",
        "output": "category    | total_value\n------------|-------------\nElectronics | 45000.00\nBooks       | 8000.00",
        "explanation": "Products are grouped by category first, then SUM adds up the price within each group separately, producing one row per category."
      }
    ],
    "importantPoints": [
      "Every non-aggregated column in SELECT must appear in the GROUP BY clause.",
      "GROUP BY is usually placed after WHERE and before ORDER BY.",
      "You can group by multiple columns for finer-grained summaries, e.g., GROUP BY region, category."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT category, name, SUM(price) FROM products GROUP BY category;",
        "correct": "SELECT category, SUM(price) FROM products GROUP BY category;",
        "why": "The 'name' column isn't aggregated and isn't in GROUP BY, so MySQL doesn't know which specific name to show per group \u2014 this causes an error in strict SQL mode."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find the total number of orders per customer using GROUP BY.",
        "difficulty": "Medium",
        "hint": "Group by customer_id, then COUNT(*)."
      },
      {
        "text": "Find the average salary per department, sorted from highest to lowest.",
        "difficulty": "Medium",
        "hint": "Combine GROUP BY, AVG, and ORDER BY."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does GROUP BY do?",
        "answer": "GROUP BY groups rows that share the same value(s) in specified columns, allowing aggregate functions to calculate a result for each group independently rather than the entire table."
      },
      {
        "question": "Why must non-aggregated columns in SELECT also appear in GROUP BY?",
        "answer": "Since GROUP BY collapses many rows into one row per group, SQL needs to know which value to display for any non-aggregated column \u2014 if that column isn't part of the grouping, there could be multiple different values within the group, creating ambiguity."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does GROUP BY do?",
        "options": [
          "Filters rows",
          "Groups rows with the same values for aggregation",
          "Sorts rows",
          "Deletes duplicate rows"
        ],
        "correctIndex": 1,
        "explanation": "GROUP BY organizes rows into groups for aggregate calculations."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "SELECT category, SUM(price) FROM products GROUP BY category; produces:",
        "options": [
          "One row total",
          "One row per unique category",
          "One row per product",
          "No rows"
        ],
        "correctIndex": 1,
        "explanation": "Each unique category becomes one summarized row."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What rule applies to non-aggregated columns in SELECT with GROUP BY?",
        "options": [
          "No rules apply",
          "They must appear in the GROUP BY clause",
          "They must be renamed",
          "They're automatically removed"
        ],
        "correctIndex": 1,
        "explanation": "Non-aggregated columns need to be part of the grouping."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Where does GROUP BY typically appear in a query?",
        "options": [
          "Before SELECT",
          "After WHERE, before ORDER BY",
          "After ORDER BY",
          "It replaces WHERE"
        ],
        "correctIndex": 1,
        "explanation": "Standard clause order: SELECT, FROM, WHERE, GROUP BY, ORDER BY."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Can you GROUP BY multiple columns?",
        "options": [
          "No, only one column",
          "Yes, for finer-grained groups",
          "Only with subqueries",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "Grouping by multiple columns creates more specific groups."
      }
    ]
  },
  {
    "id": 39,
    "title": "HAVING",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "HAVING filters groups after GROUP BY has been applied \u2014 unlike WHERE, which filters individual rows before grouping. HAVING is essential when you need to filter based on an aggregate result.",
    "realLifeExample": "A sales manager wants to see only regions where total revenue exceeds \u20b91,00,000. Since 'total revenue' is a SUM (an aggregate), this filter must use HAVING, not WHERE.",
    "syntax": "SELECT column_name, AGG_FUNCTION(other_column)\nFROM table_name\nGROUP BY column_name\nHAVING condition;",
    "examples": [
      {
        "sql": "SELECT category, SUM(price) AS total_value\nFROM products\nGROUP BY category\nHAVING SUM(price) > 10000;",
        "output": "category    | total_value\n------------|-------------\nElectronics | 45000.00",
        "explanation": "GROUP BY first creates one row per category, then HAVING filters out any category whose total_value is 10000 or less."
      }
    ],
    "importantPoints": [
      "WHERE filters rows BEFORE grouping; HAVING filters groups AFTER aggregation.",
      "You cannot use an aggregate function directly inside WHERE \u2014 that's exactly what HAVING is for.",
      "HAVING can reference aggregate aliases in some databases, but in MySQL it's safest to repeat the full aggregate expression."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT category, SUM(price) FROM products GROUP BY category WHERE SUM(price) > 10000;",
        "correct": "SELECT category, SUM(price) FROM products GROUP BY category HAVING SUM(price) > 10000;",
        "why": "WHERE cannot filter on aggregate functions because it runs before grouping happens \u2014 HAVING must be used instead, and it comes after GROUP BY."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find departments where the average salary is above 60000.",
        "difficulty": "Medium",
        "hint": "Use GROUP BY department HAVING AVG(salary) > 60000."
      },
      {
        "text": "Find customers who have placed more than 5 orders.",
        "difficulty": "Medium",
        "hint": "Use GROUP BY customer_id HAVING COUNT(*) > 5."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between WHERE and HAVING?",
        "answer": "WHERE filters individual rows before any grouping or aggregation occurs, and cannot reference aggregate functions. HAVING filters groups after GROUP BY has aggregated the data, and is specifically designed to filter based on aggregate results like SUM, COUNT, or AVG."
      },
      {
        "question": "Can you use HAVING without GROUP BY?",
        "answer": "Yes, technically \u2014 HAVING can be used without GROUP BY to filter an aggregate calculated over the entire table (treated as one group), though this is a less common use case than filtering multiple groups."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does HAVING filter?",
        "options": [
          "Individual rows before grouping",
          "Groups after aggregation",
          "Column names",
          "Table names"
        ],
        "correctIndex": 1,
        "explanation": "HAVING filters the aggregated groups, not raw rows."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Can WHERE be used to filter on SUM() or COUNT() results?",
        "options": [
          "Yes, always",
          "No, use HAVING for that",
          "Only in MySQL 8+",
          "Only with subqueries"
        ],
        "correctIndex": 1,
        "explanation": "WHERE runs before aggregation, so it can't reference aggregate results."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Where does HAVING appear relative to GROUP BY?",
        "options": [
          "Before GROUP BY",
          "After GROUP BY",
          "Replaces GROUP BY",
          "Before WHERE"
        ],
        "correctIndex": 1,
        "explanation": "HAVING always comes after the GROUP BY clause."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which finds departments with more than 10 employees?",
        "options": [
          "WHERE COUNT(*) > 10",
          "GROUP BY department HAVING COUNT(*) > 10",
          "ORDER BY COUNT(*) > 10",
          "LIMIT COUNT(*) > 10"
        ],
        "correctIndex": 1,
        "explanation": "HAVING correctly filters the grouped COUNT result."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Is HAVING required for every GROUP BY query?",
        "options": [
          "Yes, always",
          "No, it's optional and only needed when filtering groups",
          "Only for SUM queries",
          "Only for COUNT queries"
        ],
        "correctIndex": 1,
        "explanation": "HAVING is optional \u2014 only needed when you want to filter the grouped results."
      }
    ]
  },
  {
    "id": 40,
    "title": "Aliases",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "Aliases give a table or column a temporary alternative name for the duration of a query, using AS. This makes output more readable and shortens references in complex queries.",
    "realLifeExample": "A report shows a column labeled 'Total Revenue' instead of the raw SQL expression SUM(amount) \u2014 that friendly name comes from a column alias.",
    "syntax": "SELECT column_name AS alias_name FROM table_name;\nSELECT column_name FROM table_name AS alias_name;",
    "examples": [
      {
        "sql": "SELECT SUM(amount) AS total_revenue FROM orders;",
        "output": "total_revenue\n--------------\n458000.00",
        "explanation": "Without an alias, the column header would just show 'SUM(amount)' \u2014 the alias makes it 'total_revenue' instead, which is far more readable."
      }
    ],
    "importantPoints": [
      "The keyword AS is optional in MySQL (SELECT amount total instead of AS total also works), but including it improves clarity.",
      "Table aliases are especially useful in JOINs to shorten long table names.",
      "Aliases exist only for the duration of that query \u2014 they don't rename anything permanently."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT SUM(amount) AS 'total revenue' FROM orders;  -- space in alias without backticks",
        "correct": "SELECT SUM(amount) AS total_revenue FROM orders;  -- or SELECT SUM(amount) AS `total revenue` FROM orders;",
        "why": "Aliases with spaces need backticks (or quotes, depending on SQL mode) \u2014 using underscores avoids the issue entirely and is the common convention."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Alias the result of COUNT(*) as 'total_students' in a students query.",
        "difficulty": "Easy",
        "hint": "Use AS after COUNT(*)."
      },
      {
        "text": "Give a table alias to 'employees' as 'e' and use it in a SELECT.",
        "difficulty": "Medium",
        "hint": "Use FROM employees AS e, then reference e.column_name."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is an alias in SQL?",
        "answer": "An alias is a temporary alternative name given to a column or table for the duration of a single query, using the AS keyword, to improve readability or shorten references."
      },
      {
        "question": "Why are table aliases especially useful in JOIN queries?",
        "answer": "In JOINs, you often reference the same or similarly-named columns across multiple tables. Short aliases (like 'e' for employees) make the query much shorter and easier to read than repeating full table names for every column reference."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What keyword is used to create an alias?",
        "options": [
          "ALIAS",
          "AS",
          "NAME",
          "RENAME"
        ],
        "correctIndex": 1,
        "explanation": "AS is the standard keyword for aliasing in SQL."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Does an alias permanently rename a column in the table?",
        "options": [
          "Yes, permanently",
          "No, only for that query's output",
          "Only if saved",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "Aliases are temporary and only affect the query's result display."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why use table aliases in JOIN queries?",
        "options": [
          "They're required by MySQL",
          "They shorten and clarify long table references",
          "They speed up the query",
          "They rename the actual tables"
        ],
        "correctIndex": 1,
        "explanation": "Aliases make multi-table queries far more readable."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Is the AS keyword mandatory in MySQL?",
        "options": [
          "Yes, always required",
          "No, it's optional but recommended for clarity",
          "Only for table aliases",
          "Only for column aliases"
        ],
        "correctIndex": 1,
        "explanation": "MySQL allows omitting AS, but including it is clearer."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "How do you alias a column with a space in the name?",
        "options": [
          "No special handling needed",
          "Wrap it in backticks or quotes",
          "Use an underscore automatically",
          "It's not possible"
        ],
        "correctIndex": 1,
        "explanation": "Aliases with spaces need to be quoted or backticked."
      }
    ]
  },
  {
    "id": 41,
    "title": "LIKE",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "LIKE performs pattern matching on text columns, letting you search for values that partially match a pattern instead of requiring an exact match.",
    "realLifeExample": "A search bar on an e-commerce site lets users type 'lap' and still find 'Laptop' and 'Laptop Bag' \u2014 this fuzzy matching is powered by LIKE with wildcards.",
    "syntax": "SELECT * FROM table_name WHERE column_name LIKE 'pattern';",
    "examples": [
      {
        "sql": "SELECT name FROM products WHERE name LIKE '%phone%';",
        "output": "name\n---------------\nSmartphone\nHeadphones",
        "explanation": "The % wildcards mean 'any characters before and after' \u2014 so any product name containing 'phone' anywhere is matched."
      }
    ],
    "importantPoints": [
      "% matches zero or more characters; _ matches exactly one character.",
      "LIKE is case-insensitive by default in MySQL (depends on the column's collation).",
      "Combine with NOT LIKE to exclude matching patterns."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE name LIKE 'phone'",
        "correct": "WHERE name LIKE '%phone%'",
        "why": "Without wildcards, LIKE 'phone' behaves like an exact match (=) \u2014 it won't find 'Smartphone' or 'Headphones', only an exact value 'phone'."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all customers whose name starts with 'A'.",
        "difficulty": "Easy",
        "hint": "Use LIKE 'A%'."
      },
      {
        "text": "Find all products whose name ends with 'Pro'.",
        "difficulty": "Medium",
        "hint": "Use LIKE '%Pro'."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the LIKE operator do?",
        "answer": "LIKE performs pattern matching on string values, allowing partial matches using wildcard characters, rather than requiring an exact match."
      },
      {
        "question": "What is the difference between % and _ wildcards in LIKE?",
        "answer": "% matches zero or more characters of any kind, while _ matches exactly one single character. For example, 'A%' matches any string starting with A, while 'A_' matches a two-character string starting with A."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does the % wildcard represent in LIKE?",
        "options": [
          "Exactly one character",
          "Zero or more characters",
          "A number only",
          "A special character"
        ],
        "correctIndex": 1,
        "explanation": "% matches any number of characters, including none."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does the _ wildcard represent in LIKE?",
        "options": [
          "Zero or more characters",
          "Exactly one character",
          "A whole word",
          "A NULL value"
        ],
        "correctIndex": 1,
        "explanation": "_ matches exactly one character."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "WHERE name LIKE 'A%' finds names that:",
        "options": [
          "Contain 'A' anywhere",
          "Start with 'A'",
          "End with 'A'",
          "Equal exactly 'A'"
        ],
        "correctIndex": 1,
        "explanation": "The % after A means 'A followed by anything', i.e., starts with A."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "WHERE name LIKE '%son' finds names that:",
        "options": [
          "Start with 'son'",
          "End with 'son'",
          "Contain 'son' exactly in the middle",
          "Equal 'son'"
        ],
        "correctIndex": 1,
        "explanation": "The % before 'son' means anything can precede it, so it matches names ending in 'son'."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Is LIKE typically case-sensitive in MySQL by default?",
        "options": [
          "Yes, always case-sensitive",
          "No, typically case-insensitive depending on collation",
          "Only for numbers",
          "Only for dates"
        ],
        "correctIndex": 1,
        "explanation": "MySQL's default collations are usually case-insensitive for LIKE comparisons."
      }
    ]
  },
  {
    "id": 42,
    "title": "Wildcards",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 5,
    "concept": "Wildcards are special characters used with LIKE to represent unknown or variable parts of a string during pattern matching. MySQL primarily uses % and _.",
    "realLifeExample": "A phone directory search lets you type '98___45678' to find numbers matching a partial pattern, using _ to represent unknown digits you don't remember.",
    "syntax": "% -- matches zero or more characters\n_ -- matches exactly one character",
    "examples": [
      {
        "sql": "SELECT * FROM employees WHERE phone LIKE '98_45678';",
        "output": "id | name | phone\n---|------|----------\n3  | Amit | 9834567 8 (example match)",
        "explanation": "The single underscore matches exactly one unknown digit between '98' and '45678' in the phone number."
      }
    ],
    "importantPoints": [
      "% is the most commonly used wildcard, matching any number of characters (including zero).",
      "_ is used when you know the exact number of unknown characters.",
      "To search for a literal % or _ character, escape it using ESCAPE or a backslash depending on context."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE code LIKE '10%20'  -- expecting exactly one character between 10 and 20",
        "correct": "WHERE code LIKE '10_20'",
        "why": "% matches any number of characters (including many), while _ matches exactly one \u2014 using the wrong wildcard changes the matching behavior significantly."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all product codes that are exactly 5 characters and start with 'A'.",
        "difficulty": "Medium",
        "hint": "Use LIKE 'A____' (four underscores after A)."
      },
      {
        "text": "Find all emails that contain 'gmail' anywhere in the address.",
        "difficulty": "Easy",
        "hint": "Use LIKE '%gmail%'."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What are the two main wildcard characters in MySQL's LIKE?",
        "answer": "% represents zero or more characters of any kind, while _ represents exactly one character. Together they allow flexible pattern matching in text searches."
      },
      {
        "question": "How would you search for a literal percentage sign in a LIKE pattern?",
        "answer": "You would escape it, typically using the ESCAPE clause (e.g., LIKE '50\\\\%' ESCAPE '\\\\') so MySQL treats % as a literal character rather than a wildcard."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Which wildcard matches exactly one character?",
        "options": [
          "%",
          "_",
          "*",
          "?"
        ],
        "correctIndex": 1,
        "explanation": "The underscore (_) matches exactly one character."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which wildcard matches zero or more characters?",
        "options": [
          "%",
          "_",
          "#",
          "!"
        ],
        "correctIndex": 0,
        "explanation": "The percent sign (%) matches any number of characters, including zero."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "'A___' (A followed by 3 underscores) matches strings that are:",
        "options": [
          "Any length starting with A",
          "Exactly 4 characters, starting with A",
          "Exactly 3 characters",
          "Ending with A"
        ],
        "correctIndex": 1,
        "explanation": "Each underscore represents exactly one character, so this pattern is exactly 4 characters total."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "How do you match a literal % character instead of using it as a wildcard?",
        "options": [
          "It's not possible",
          "Escape it, e.g., using ESCAPE clause",
          "Use ## instead",
          "Use double percent %%"
        ],
        "correctIndex": 1,
        "explanation": "Escaping tells MySQL to treat % as a literal character."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "'%data%' matches values that:",
        "options": [
          "Start with 'data'",
          "End with 'data'",
          "Contain 'data' anywhere",
          "Equal exactly 'data'"
        ],
        "correctIndex": 2,
        "explanation": "Wildcards on both sides mean 'data' can appear anywhere in the string."
      }
    ]
  },
  {
    "id": 43,
    "title": "BETWEEN",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "BETWEEN checks if a value falls within a specified range (inclusive of both endpoints). It's a cleaner shorthand for combining >= and <= with AND.",
    "realLifeExample": "An e-commerce filter for 'Price: \u20b9500 - \u20b92000' uses WHERE price BETWEEN 500 AND 2000 to show only products in that range.",
    "syntax": "SELECT * FROM table_name WHERE column_name BETWEEN value1 AND value2;",
    "examples": [
      {
        "sql": "SELECT name, price FROM products WHERE price BETWEEN 500 AND 2000;",
        "output": "name        | price\n------------|------\nHeadphones  | 1999",
        "explanation": "Only products priced between 500 and 2000, inclusive, are returned \u2014 2000 itself would be included if it existed."
      }
    ],
    "importantPoints": [
      "BETWEEN is inclusive \u2014 both the lower and upper bound values are included in the results.",
      "BETWEEN works on numbers, dates, and even text (alphabetical range).",
      "WHERE x BETWEEN a AND b is equivalent to WHERE x >= a AND x <= b."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE price BETWEEN 2000 AND 500",
        "correct": "WHERE price BETWEEN 500 AND 2000",
        "why": "The lower value must come first in BETWEEN \u2014 writing the range backwards typically returns zero rows."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all orders placed between '2026-01-01' and '2026-01-31'.",
        "difficulty": "Easy",
        "hint": "Use BETWEEN on the order_date column."
      },
      {
        "text": "Find all students with age BETWEEN 18 AND 25.",
        "difficulty": "Easy",
        "hint": "Apply BETWEEN directly on the age column."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the BETWEEN operator do?",
        "answer": "BETWEEN checks whether a value falls within a specified range, inclusive of both the lower and upper bound values."
      },
      {
        "question": "Is BETWEEN inclusive or exclusive of its boundary values?",
        "answer": "BETWEEN is inclusive \u2014 if you write BETWEEN 10 AND 20, both 10 and 20 themselves are included in the matching results."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Is BETWEEN inclusive of its boundary values?",
        "options": [
          "No, exclusive",
          "Yes, inclusive of both ends",
          "Only inclusive of the lower bound",
          "Only inclusive of the upper bound"
        ],
        "correctIndex": 1,
        "explanation": "BETWEEN includes both the start and end values."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "WHERE price BETWEEN 100 AND 500 is equivalent to:",
        "options": [
          "price > 100 AND price < 500",
          "price >= 100 AND price <= 500",
          "price = 100 OR price = 500",
          "price != 100 AND price != 500"
        ],
        "correctIndex": 1,
        "explanation": "BETWEEN is shorthand for an inclusive range using >= and <=."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What happens if you write BETWEEN 500 AND 100 (reversed)?",
        "options": [
          "It works the same as 100 AND 500",
          "It typically returns zero rows",
          "It causes a syntax error",
          "It returns all rows"
        ],
        "correctIndex": 1,
        "explanation": "The lower bound must come first for BETWEEN to match correctly."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can BETWEEN be used with dates?",
        "options": [
          "No, only numbers",
          "Yes, for date ranges",
          "Only with DATEDIFF",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "BETWEEN works well for filtering date ranges."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Can BETWEEN be used with text values?",
        "options": [
          "No, never",
          "Yes, for alphabetical ranges",
          "Only with LIKE",
          "Only for single characters"
        ],
        "correctIndex": 1,
        "explanation": "BETWEEN can compare text alphabetically too."
      }
    ]
  },
  {
    "id": 44,
    "title": "IN",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "IN checks if a value matches any value in a specified list, providing a cleaner alternative to writing multiple OR conditions on the same column.",
    "realLifeExample": "A filter for 'Category: Electronics, Books, or Toys' uses WHERE category IN ('Electronics', 'Books', 'Toys') instead of three separate OR conditions.",
    "syntax": "SELECT * FROM table_name WHERE column_name IN (value1, value2, value3);",
    "examples": [
      {
        "sql": "SELECT name FROM products WHERE category IN ('Electronics', 'Books');",
        "output": "name\n------------\nHeadphones\nSQL Guide",
        "explanation": "Any product whose category matches ANY value in the list ('Electronics' OR 'Books') is included in the results."
      }
    ],
    "importantPoints": [
      "IN is shorthand for multiple OR conditions on the same column.",
      "NOT IN excludes rows matching any value in the list.",
      "IN can also work with the results of a subquery, not just a fixed list."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE category = 'Electronics' OR 'Books' OR 'Toys'",
        "correct": "WHERE category IN ('Electronics', 'Books', 'Toys')",
        "why": "The OR version is not just less clean \u2014 'Books' and 'Toys' alone (without repeating 'category =') don't even form valid conditions."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all orders with status IN ('Pending', 'Processing', 'Shipped').",
        "difficulty": "Easy",
        "hint": "List the three statuses inside IN()."
      },
      {
        "text": "Find all employees whose department is IN a subquery selecting departments with more than 10 people.",
        "difficulty": "Advanced",
        "hint": "Use IN with a subquery instead of a fixed list."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the IN operator do?",
        "answer": "IN checks if a column's value matches any value within a specified list, acting as a cleaner shorthand for multiple OR conditions on the same column."
      },
      {
        "question": "Can IN be used with a subquery instead of a static list?",
        "answer": "Yes \u2014 IN can take the result of a subquery as its list of values, for example: WHERE department_id IN (SELECT department_id FROM departments WHERE budget > 100000)."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does IN check for?",
        "options": [
          "If a value is NULL",
          "If a value matches any in a given list",
          "If a value is unique",
          "If a value is greater than a range"
        ],
        "correctIndex": 1,
        "explanation": "IN matches a value against a list of possibilities."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "WHERE status IN ('A', 'B') is equivalent to:",
        "options": [
          "status = 'A' AND status = 'B'",
          "status = 'A' OR status = 'B'",
          "status != 'A' AND status != 'B'",
          "status LIKE 'A' OR 'B'"
        ],
        "correctIndex": 1,
        "explanation": "IN is shorthand for multiple OR conditions."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does NOT IN do?",
        "options": [
          "Matches values in the list",
          "Excludes values matching any in the list",
          "Matches NULL values only",
          "Matches unique values only"
        ],
        "correctIndex": 1,
        "explanation": "NOT IN filters out rows whose value appears in the given list."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can IN be used with a subquery?",
        "options": [
          "No, only static lists",
          "Yes, IN can use subquery results",
          "Only with JOIN",
          "Only with UNION"
        ],
        "correctIndex": 1,
        "explanation": "IN is commonly combined with subqueries for dynamic value lists."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which is a valid IN usage?",
        "options": [
          "WHERE id IN 1, 2, 3",
          "WHERE id IN (1, 2, 3)",
          "WHERE id = IN(1,2,3)",
          "WHERE IN id (1,2,3)"
        ],
        "correctIndex": 1,
        "explanation": "IN requires parentheses around the list of values."
      }
    ]
  },
  {
    "id": 45,
    "title": "IS NULL",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 6,
    "concept": "IS NULL checks whether a column's value is NULL (missing or unknown). Because NULL isn't a regular value, you cannot use = NULL \u2014 you must use IS NULL or IS NOT NULL.",
    "realLifeExample": "A CRM system finds customers with no phone number on file using WHERE phone_number IS NULL, to flag incomplete profiles for follow-up.",
    "syntax": "SELECT * FROM table_name WHERE column_name IS NULL;\nSELECT * FROM table_name WHERE column_name IS NOT NULL;",
    "examples": [
      {
        "sql": "SELECT name FROM customers WHERE phone_number IS NULL;",
        "output": "name\n-----------\nRavi Kumar",
        "explanation": "Only customers whose phone_number column has no value at all (NULL) are returned \u2014 this specifically finds missing data."
      }
    ],
    "importantPoints": [
      "NULL means 'unknown' or 'missing' \u2014 it is NOT the same as an empty string '' or zero 0.",
      "You cannot use = or != to compare with NULL; always use IS NULL or IS NOT NULL.",
      "Aggregate functions and most comparisons automatically ignore NULL values."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE phone_number = NULL",
        "correct": "WHERE phone_number IS NULL",
        "why": "Using = NULL always evaluates to unknown (neither true nor false) in SQL, so it never matches any rows \u2014 IS NULL is the only correct way to check for NULL."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all orders where the delivery_date is still NULL (not yet delivered).",
        "difficulty": "Easy",
        "hint": "Use WHERE delivery_date IS NULL."
      },
      {
        "text": "Find all employees who DO have a manager assigned (manager_id is not NULL).",
        "difficulty": "Easy",
        "hint": "Use IS NOT NULL."
      }
    ],
    "interviewQuestions": [
      {
        "question": "Why can't you use = NULL to check for NULL values?",
        "answer": "NULL represents an unknown value, and in SQL's three-valued logic, comparing anything to an unknown value (including NULL = NULL) results in UNKNOWN, not TRUE \u2014 so such a comparison never matches any rows. IS NULL is a special operator specifically designed to correctly test for NULL."
      },
      {
        "question": "Is NULL the same as an empty string or zero?",
        "answer": "No \u2014 NULL represents the complete absence of a value (unknown/missing), while an empty string '' is a defined, actual value (just empty), and 0 is a defined numeric value. They are conceptually and behaviorally different in SQL."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Why doesn't WHERE column = NULL work?",
        "options": [
          "It's valid and works fine",
          "NULL comparisons always evaluate to unknown, not true",
          "MySQL doesn't support NULL",
          "It only works with numbers"
        ],
        "correctIndex": 1,
        "explanation": "SQL's three-valued logic means = NULL never returns true."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which is the correct way to check for NULL?",
        "options": [
          "= NULL",
          "IS NULL",
          "== NULL",
          "LIKE NULL"
        ],
        "correctIndex": 1,
        "explanation": "IS NULL is the correct operator for checking NULL values."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Is NULL the same as an empty string ''?",
        "options": [
          "Yes, identical",
          "No, NULL means missing/unknown, '' is an actual empty value",
          "Only in MySQL",
          "Only for VARCHAR columns"
        ],
        "correctIndex": 1,
        "explanation": "NULL and empty string are fundamentally different concepts."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "How do you find rows where a column HAS a value (not NULL)?",
        "options": [
          "WHERE column = NOT NULL",
          "WHERE column IS NOT NULL",
          "WHERE column != NULL",
          "WHERE column HAS VALUE"
        ],
        "correctIndex": 1,
        "explanation": "IS NOT NULL correctly finds non-missing values."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Do aggregate functions like SUM typically include NULL values?",
        "options": [
          "Yes, treated as 0",
          "No, NULLs are excluded",
          "Only in strict mode",
          "It depends on the table engine"
        ],
        "correctIndex": 1,
        "explanation": "Aggregate functions generally skip over NULL values."
      }
    ]
  },
  {
    "id": 46,
    "title": "CASE",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 9,
    "concept": "The CASE expression adds conditional (if-then-else) logic directly inside a SQL query, letting you transform or categorize values based on conditions.",
    "realLifeExample": "An e-commerce report labels orders as 'High Value', 'Medium Value', or 'Low Value' based on their amount, using a CASE expression instead of separate queries for each tier.",
    "syntax": "SELECT column_name,\n  CASE\n    WHEN condition1 THEN result1\n    WHEN condition2 THEN result2\n    ELSE default_result\n  END AS alias_name\nFROM table_name;",
    "examples": [
      {
        "sql": "SELECT name, amount,\n  CASE\n    WHEN amount >= 5000 THEN 'High Value'\n    WHEN amount >= 1000 THEN 'Medium Value'\n    ELSE 'Low Value'\n  END AS order_tier\nFROM orders;",
        "output": "name  | amount | order_tier\n------|--------|------------\nAman  | 6000   | High Value\nRiya  | 1500   | Medium Value",
        "explanation": "Each row is evaluated against the WHEN conditions in order; the first matching condition's result is used, with ELSE as the fallback for anything else."
      }
    ],
    "importantPoints": [
      "WHEN conditions are checked in order, top to bottom \u2014 the first true match wins.",
      "ELSE is optional; if omitted and no condition matches, the result is NULL.",
      "CASE can be used in SELECT, WHERE, ORDER BY, and even GROUP BY clauses."
    ],
    "commonMistakes": [
      {
        "wrong": "CASE WHEN amount >= 1000 THEN 'Medium' WHEN amount >= 5000 THEN 'High' END",
        "correct": "CASE WHEN amount >= 5000 THEN 'High' WHEN amount >= 1000 THEN 'Medium' END",
        "why": "Since conditions are checked top-down and the first match wins, an amount of 6000 would incorrectly match 'Medium' first if the broader condition (>= 1000) is listed before the more specific one (>= 5000)."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Label students as 'Pass' if marks >= 40, otherwise 'Fail', using CASE.",
        "difficulty": "Medium",
        "hint": "Use a simple two-branch CASE with ELSE."
      },
      {
        "text": "Categorize products into 'Cheap', 'Moderate', and 'Expensive' based on price using CASE.",
        "difficulty": "Medium",
        "hint": "Order your WHEN conditions from most specific/highest to lowest."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the CASE expression do in SQL?",
        "answer": "CASE adds conditional if-then-else logic within a query, evaluating a series of WHEN conditions in order and returning the result of the first one that's true, or the ELSE value if none match."
      },
      {
        "question": "Why does the order of WHEN conditions matter in a CASE expression?",
        "answer": "SQL evaluates WHEN conditions sequentially from top to bottom and stops at the first one that's true. If conditions overlap (e.g., ranges), placing a broader condition before a more specific one can cause incorrect results, since the broader one would match first."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does CASE provide in SQL?",
        "options": [
          "Looping logic",
          "Conditional if-then-else logic",
          "Data type conversion only",
          "A way to create tables"
        ],
        "correctIndex": 1,
        "explanation": "CASE lets you apply conditional logic within queries."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What happens if no WHEN condition matches and there's no ELSE?",
        "options": [
          "An error occurs",
          "The result is NULL",
          "The first WHEN result is used by default",
          "All results are returned"
        ],
        "correctIndex": 1,
        "explanation": "Without ELSE, unmatched rows return NULL."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "In what order are WHEN conditions evaluated?",
        "options": [
          "Random order",
          "Top to bottom, stopping at the first match",
          "Bottom to top",
          "All at once"
        ],
        "correctIndex": 1,
        "explanation": "CASE checks conditions sequentially and uses the first true match."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Where can CASE be used in a query?",
        "options": [
          "Only in SELECT",
          "SELECT, WHERE, ORDER BY, and more",
          "Only in WHERE",
          "Only in JOIN"
        ],
        "correctIndex": 1,
        "explanation": "CASE is versatile and can appear in many clauses."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why might condition order cause a bug in CASE?",
        "options": [
          "It never matters",
          "A broader condition listed first can incorrectly match before a more specific one",
          "CASE always checks all conditions",
          "SQL sorts conditions automatically"
        ],
        "correctIndex": 1,
        "explanation": "Since only the first true match is used, ordering from specific to general (or vice versa depending on logic) matters."
      }
    ]
  },
  {
    "id": 47,
    "title": "String Functions",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 9,
    "concept": "String functions manipulate and transform text data \u2014 combining strings, changing case, extracting substrings, trimming whitespace, and more.",
    "realLifeExample": "A user profile page displays a full name by combining first_name and last_name using CONCAT(), or shows initials using SUBSTRING() and UPPER().",
    "syntax": "CONCAT(str1, str2, ...)   -- combine strings\nUPPER(str)  / LOWER(str)  -- change case\nLENGTH(str)               -- string length\nTRIM(str)                 -- remove leading/trailing spaces\nSUBSTRING(str, start, len) -- extract part of a string",
    "examples": [
      {
        "sql": "SELECT CONCAT(first_name, ' ', last_name) AS full_name, UPPER(city) AS city_upper FROM customers;",
        "output": "full_name    | city_upper\n-------------|------------\nAman Sharma  | BHOPAL",
        "explanation": "CONCAT joins first_name, a space, and last_name into one value; UPPER converts the city name to all uppercase letters."
      }
    ],
    "importantPoints": [
      "CONCAT() safely handles multiple strings; use CONCAT_WS() to add a consistent separator between many values.",
      "LENGTH() returns the number of bytes (characters for typical text) in a string.",
      "TRIM() is commonly used to clean up user-entered data that might have accidental leading/trailing spaces."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT first_name + last_name FROM customers;",
        "correct": "SELECT CONCAT(first_name, ' ', last_name) FROM customers;",
        "why": "MySQL doesn't use + for string concatenation like some other languages \u2014 CONCAT() is the correct function to join strings."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Combine city and state into one column called 'location', separated by a comma.",
        "difficulty": "Easy",
        "hint": "Use CONCAT(city, ', ', state)."
      },
      {
        "text": "Convert all product names to lowercase in a SELECT query.",
        "difficulty": "Easy",
        "hint": "Use LOWER(name)."
      }
    ],
    "interviewQuestions": [
      {
        "question": "How do you combine two columns into one string in MySQL?",
        "answer": "Use the CONCAT() function, for example CONCAT(first_name, ' ', last_name), which joins multiple string values (and literal text like a space) into a single combined string."
      },
      {
        "question": "What does the TRIM() function do, and why is it useful?",
        "answer": "TRIM() removes leading and trailing whitespace from a string. It's especially useful for cleaning up user-submitted data, where accidental extra spaces (e.g., ' John ' instead of 'John') could otherwise cause mismatches in comparisons or messy display output."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Which function combines multiple strings into one?",
        "options": [
          "JOIN()",
          "CONCAT()",
          "MERGE()",
          "ADD()"
        ],
        "correctIndex": 1,
        "explanation": "CONCAT() is MySQL's string concatenation function."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does UPPER('hello') return?",
        "options": [
          "hello",
          "HELLO",
          "Hello",
          "An error"
        ],
        "correctIndex": 1,
        "explanation": "UPPER converts all characters to uppercase."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does TRIM() remove from a string?",
        "options": [
          "All spaces everywhere",
          "Leading and trailing whitespace only",
          "Numbers only",
          "Vowels only"
        ],
        "correctIndex": 1,
        "explanation": "TRIM removes whitespace from the start and end, not the middle."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Does MySQL use + to concatenate strings like some other languages?",
        "options": [
          "Yes, + works the same way",
          "No, MySQL uses CONCAT()",
          "Only in MySQL 8+",
          "Only for numeric strings"
        ],
        "correctIndex": 1,
        "explanation": "MySQL requires CONCAT() rather than the + operator for string joining."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What does LENGTH('SQL') return?",
        "options": [
          "1",
          "3",
          "0",
          "An error"
        ],
        "correctIndex": 1,
        "explanation": "LENGTH returns the number of characters (bytes) in the string \u2014 'SQL' has 3 characters."
      }
    ]
  },
  {
    "id": 48,
    "title": "Date Functions",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 9,
    "concept": "Date functions extract, calculate, and format date and time values, letting you filter by specific periods, calculate durations, and generate readable date reports.",
    "realLifeExample": "A subscription service checks if a user's trial has expired using DATEDIFF(NOW(), signup_date) > 30, or shows 'Member since 2024' using YEAR(signup_date).",
    "syntax": "NOW()                     -- current date and time\nCURDATE()                 -- current date only\nYEAR(date), MONTH(date), DAY(date)  -- extract parts\nDATEDIFF(date1, date2)     -- difference in days\nDATE_ADD(date, INTERVAL n unit)     -- add time to a date",
    "examples": [
      {
        "sql": "SELECT name, order_date, DATEDIFF(NOW(), order_date) AS days_ago FROM orders;",
        "output": "name  | order_date  | days_ago\n------|-------------|----------\nAman  | 2026-08-01  | 35",
        "explanation": "DATEDIFF calculates how many days have passed between the current date/time (NOW()) and each order's date."
      }
    ],
    "importantPoints": [
      "NOW() returns both date and time; CURDATE() returns only the date portion.",
      "DATE_ADD and DATE_SUB let you calculate future or past dates (e.g., 30 days from now).",
      "YEAR(), MONTH(), and DAY() are useful for grouping data by time period, like monthly sales reports."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE order_date = '2026-08-01 14:30:00'  -- expecting all orders that day",
        "correct": "WHERE DATE(order_date) = '2026-08-01'",
        "why": "If order_date includes a time component, an exact match will miss most rows from that day \u2014 wrapping it in DATE() strips the time for a proper day-level comparison."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all orders placed in the year 2026 using YEAR().",
        "difficulty": "Easy",
        "hint": "Use WHERE YEAR(order_date) = 2026."
      },
      {
        "text": "Calculate how many days are left until a subscription's expiry_date from today.",
        "difficulty": "Medium",
        "hint": "Use DATEDIFF(expiry_date, CURDATE())."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between NOW() and CURDATE() in MySQL?",
        "answer": "NOW() returns the current date AND time (e.g., '2026-09-05 14:30:00'), while CURDATE() returns only the current date (e.g., '2026-09-05'), without any time component."
      },
      {
        "question": "How would you calculate the number of days between two dates?",
        "answer": "Use DATEDIFF(date1, date2), which returns the number of days between the two dates. For example, DATEDIFF('2026-09-10', '2026-09-01') returns 9."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does NOW() return?",
        "options": [
          "Only the current date",
          "The current date and time",
          "Only the current time",
          "Yesterday's date"
        ],
        "correctIndex": 1,
        "explanation": "NOW() includes both date and time."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does CURDATE() return?",
        "options": [
          "Date and time",
          "Only the current date",
          "Only the current time",
          "The next day's date"
        ],
        "correctIndex": 1,
        "explanation": "CURDATE() returns just the date, without time."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does DATEDIFF(date1, date2) calculate?",
        "options": [
          "The sum of two dates",
          "The number of days between two dates",
          "The current date",
          "A formatted date string"
        ],
        "correctIndex": 1,
        "explanation": "DATEDIFF returns the difference in days between two dates."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which function extracts just the year from a date column?",
        "options": [
          "DATE()",
          "YEAR()",
          "EXTRACT_YEAR()",
          "GETYEAR()"
        ],
        "correctIndex": 1,
        "explanation": "YEAR(date) extracts the year portion."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why might an exact match on a datetime column miss expected rows?",
        "options": [
          "Datetime columns can't be filtered",
          "If time is included, exact string matches miss rows with different times on the same day",
          "MySQL doesn't support datetime filtering",
          "DATE() always errors on datetime columns"
        ],
        "correctIndex": 1,
        "explanation": "Wrapping with DATE() strips the time component for day-level comparisons."
      }
    ]
  },
  {
    "id": 49,
    "title": "Mathematical Functions",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "Mathematical functions perform calculations on numeric data \u2014 rounding, absolute values, powers, square roots, and more \u2014 directly within SQL queries.",
    "realLifeExample": "An invoice system uses ROUND(total, 2) to always display prices with exactly two decimal places, and ABS() to show a refund amount as a positive number regardless of sign.",
    "syntax": "ROUND(number, decimals)\nABS(number)\nCEIL(number)   -- round up\nFLOOR(number)  -- round down\nPOWER(number, exponent)\nSQRT(number)",
    "examples": [
      {
        "sql": "SELECT price, ROUND(price * 1.18, 2) AS price_with_tax FROM products;",
        "output": "price   | price_with_tax\n--------|----------------\n1000.00 | 1180.00",
        "explanation": "The price is multiplied by 1.18 (adding 18% tax) and ROUND ensures the result is shown with exactly 2 decimal places."
      }
    ],
    "importantPoints": [
      "ROUND(number, 0) or just ROUND(number) rounds to the nearest whole number.",
      "CEIL() always rounds up, FLOOR() always rounds down \u2014 regardless of the decimal value.",
      "ABS() is useful for showing differences or refunds as positive numbers regardless of the original sign."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT price * 1.18 FROM products;  -- expecting a clean 2-decimal price",
        "correct": "SELECT ROUND(price * 1.18, 2) FROM products;",
        "why": "Without ROUND, floating-point multiplication can produce long, messy decimal results like 1180.0000000002 in some cases."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Round all product prices to the nearest whole number.",
        "difficulty": "Easy",
        "hint": "Use ROUND(price, 0) or ROUND(price)."
      },
      {
        "text": "Find the absolute difference between two account balances.",
        "difficulty": "Medium",
        "hint": "Use ABS(balance1 - balance2)."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between CEIL() and FLOOR()?",
        "answer": "CEIL() always rounds a number UP to the nearest whole number (e.g., CEIL(4.1) = 5), while FLOOR() always rounds DOWN to the nearest whole number (e.g., FLOOR(4.9) = 4), regardless of how close the decimal is to either side."
      },
      {
        "question": "Why would you use ROUND() on a calculated monetary value?",
        "answer": "Calculations involving multiplication or division (like adding tax or a discount) can produce long or imprecise decimal results. ROUND() ensures the displayed value has a clean, consistent number of decimal places appropriate for currency, typically 2."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does ROUND(4.567, 2) return?",
        "options": [
          "4.5",
          "4.57",
          "4.6",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "Rounding to 2 decimal places gives 4.57."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does CEIL(3.2) return?",
        "options": [
          "3",
          "4",
          "3.2",
          "3.5"
        ],
        "correctIndex": 1,
        "explanation": "CEIL always rounds up to the next whole number."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does FLOOR(3.8) return?",
        "options": [
          "4",
          "3",
          "3.8",
          "3.5"
        ],
        "correctIndex": 1,
        "explanation": "FLOOR always rounds down to the previous whole number."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What does ABS(-15) return?",
        "options": [
          "-15",
          "15",
          "0",
          "An error"
        ],
        "correctIndex": 1,
        "explanation": "ABS returns the absolute (non-negative) value."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why use ROUND() on a tax calculation like price * 1.18?",
        "options": [
          "It's required syntax",
          "To avoid messy floating-point decimal results",
          "It makes the query run faster",
          "It changes the tax rate"
        ],
        "correctIndex": 1,
        "explanation": "ROUND cleans up potential floating-point precision issues in the output."
      }
    ]
  },
  {
    "id": 50,
    "title": "Conditional Logic",
    "level": "Intermediate",
    "category": "Intermediate",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "Beyond CASE, SQL offers shorthand conditional functions like IF() and IFNULL() (or COALESCE()) for simpler conditional logic and handling missing values gracefully.",
    "realLifeExample": "A dashboard shows 'N/A' instead of a blank cell when a customer has no phone number, using IFNULL(phone_number, 'N/A') to substitute a default value for NULLs.",
    "syntax": "IF(condition, value_if_true, value_if_false)\nIFNULL(expression, value_if_null)\nCOALESCE(value1, value2, ..., default)",
    "examples": [
      {
        "sql": "SELECT name, IFNULL(phone_number, 'N/A') AS phone FROM customers;",
        "output": "name        | phone\n------------|-------\nRavi Kumar  | N/A\nAman Sharma | 9876543210",
        "explanation": "IFNULL replaces any NULL phone_number value with the text 'N/A', while leaving actual phone numbers untouched."
      }
    ],
    "importantPoints": [
      "IF() is MySQL-specific shorthand for simple two-branch conditions, similar to a mini CASE.",
      "IFNULL() only checks for NULL, while COALESCE() can check a whole list of values and return the first non-NULL one.",
      "COALESCE() is more portable across different RDBMS than IFNULL(), which is MySQL-specific."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT phone_number FROM customers;  -- showing blank cells for missing data",
        "correct": "SELECT IFNULL(phone_number, 'N/A') FROM customers;",
        "why": "Leaving NULL values unhandled often results in confusing blank cells in reports \u2014 wrapping with IFNULL or COALESCE gives users a clear, intentional default."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Show 'Unknown' instead of NULL for any employee missing a department using IFNULL.",
        "difficulty": "Easy",
        "hint": "Use IFNULL(department, 'Unknown')."
      },
      {
        "text": "Use IF() to label orders as 'Big Order' if amount > 5000, otherwise 'Regular Order'.",
        "difficulty": "Medium",
        "hint": "Use IF(amount > 5000, 'Big Order', 'Regular Order')."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between IFNULL() and COALESCE()?",
        "answer": "IFNULL() takes exactly two arguments and returns the second if the first is NULL \u2014 it's MySQL-specific. COALESCE() can take multiple arguments and returns the first non-NULL value among them, making it more flexible and more portable across different SQL databases."
      },
      {
        "question": "How does the IF() function differ from a CASE expression?",
        "answer": "IF() is a simpler, more compact way to express a single two-branch condition (true/false), similar to a ternary operator. CASE is more powerful and readable for multiple conditions or complex branching logic, but requires more syntax for simple cases."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does IFNULL(column, 'default') do?",
        "options": [
          "Deletes NULL rows",
          "Replaces NULL values with 'default'",
          "Converts all values to 'default'",
          "Checks if a column exists"
        ],
        "correctIndex": 1,
        "explanation": "IFNULL substitutes a fallback value only when the original is NULL."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How many arguments does IFNULL() take?",
        "options": [
          "1",
          "2",
          "3",
          "Any number"
        ],
        "correctIndex": 1,
        "explanation": "IFNULL takes exactly two arguments: the expression and the fallback."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "How many arguments can COALESCE() take?",
        "options": [
          "Exactly 2",
          "Exactly 3",
          "Two or more",
          "Only 1"
        ],
        "correctIndex": 2,
        "explanation": "COALESCE can accept multiple values and returns the first non-NULL one."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which function is more portable across different SQL databases?",
        "options": [
          "IFNULL()",
          "COALESCE()",
          "Both are equally portable",
          "Neither is portable"
        ],
        "correctIndex": 1,
        "explanation": "COALESCE is part of the SQL standard and works across most RDBMS."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What does IF(price > 1000, 'Expensive', 'Affordable') do?",
        "options": [
          "Always returns 'Expensive'",
          "Returns 'Expensive' if price > 1000, else 'Affordable'",
          "Deletes rows where price > 1000",
          "Causes a syntax error"
        ],
        "correctIndex": 1,
        "explanation": "IF() evaluates the condition and returns one of the two branch values."
      }
    ]
  },
  {
    "id": 51,
    "title": "Database Relationships",
    "level": "Intermediate",
    "category": "Joins",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "A relationship describes how two tables are logically connected, usually through a shared key. Relationships let you split data into clean, non-repetitive tables while still being able to combine them meaningfully when needed.",
    "realLifeExample": "In an e-commerce system, 'customers' and 'orders' are related \u2014 each order belongs to one customer, and that link (customer_id) is the relationship connecting them.",
    "syntax": "-- Relationships are enforced via keys, not a single SQL keyword:\nCREATE TABLE orders (\n  order_id INT PRIMARY KEY,\n  customer_id INT,\n  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)\n);",
    "examples": [
      {
        "sql": "SELECT o.order_id, c.name FROM orders o, customers c WHERE o.customer_id = c.customer_id;",
        "output": "order_id | name\n---------|------\n1        | Aman",
        "explanation": "This shows how two related tables can be combined by matching their shared key, even before formally learning JOIN syntax."
      }
    ],
    "importantPoints": [
      "The three common relationship types are one-to-one, one-to-many, and many-to-many.",
      "Relationships are enforced using primary and foreign keys.",
      "Well-designed relationships prevent data duplication and keep data consistent."
    ],
    "commonMistakes": [
      {
        "wrong": "Storing customer name in every order row",
        "correct": "Storing only customer_id in orders, and looking up the name via a relationship to customers",
        "why": "Duplicating data like customer name in every order risks inconsistency if the name ever changes \u2014 relationships let you store it once."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Describe the relationship between a 'students' table and a 'courses' table.",
        "difficulty": "Easy",
        "hint": "Think about whether one student can take many courses."
      },
      {
        "text": "Design two related tables for a 'library' system: books and authors.",
        "difficulty": "Medium",
        "hint": "Decide where the foreign key should live."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a database relationship?",
        "answer": "A database relationship is a logical connection between two tables, typically established through a shared key (primary key in one table referenced as a foreign key in another), allowing related data to be split across tables while still being combinable."
      },
      {
        "question": "Why do relationships matter in database design?",
        "answer": "Relationships prevent data duplication, maintain consistency, and allow complex real-world associations (like customers and their orders) to be modeled accurately without repeating information."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What typically establishes a relationship between two tables?",
        "options": [
          "Matching column names only",
          "A shared key (primary/foreign key)",
          "Having the same number of rows",
          "Being in the same database"
        ],
        "correctIndex": 1,
        "explanation": "Keys are what formally link related tables."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Why avoid storing a customer's name in every order row?",
        "options": [
          "It's required by SQL",
          "It risks data duplication and inconsistency",
          "It improves performance always",
          "It's not possible to avoid"
        ],
        "correctIndex": 1,
        "explanation": "Repeating data risks becoming inconsistent if it changes."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which of these is NOT a common relationship type?",
        "options": [
          "One-to-one",
          "One-to-many",
          "Many-to-many",
          "Zero-to-infinite"
        ],
        "correctIndex": 3,
        "explanation": "The three standard types are one-to-one, one-to-many, and many-to-many."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "In an orders/customers relationship, which table usually holds the foreign key?",
        "options": [
          "customers",
          "orders",
          "Neither",
          "Both equally"
        ],
        "correctIndex": 1,
        "explanation": "The 'many' side (orders) typically stores the foreign key referencing customers."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is a key benefit of relationships in database design?",
        "options": [
          "Faster typing",
          "Reduced duplication and consistent data",
          "Removes the need for tables",
          "Makes queries impossible"
        ],
        "correctIndex": 1,
        "explanation": "Relationships let related data stay normalized and consistent."
      }
    ]
  },
  {
    "id": 52,
    "title": "Primary Key",
    "level": "Intermediate",
    "category": "Joins",
    "difficulty": "Easy",
    "estMinutes": 6,
    "concept": "A primary key is a column (or set of columns) that uniquely identifies each row in a table. No two rows can have the same primary key value, and it cannot be NULL.",
    "realLifeExample": "In a 'students' table, student_id is the primary key \u2014 even if two students share the same name, their unique student_id always identifies exactly one student.",
    "syntax": "CREATE TABLE students (\n  student_id INT PRIMARY KEY,\n  name VARCHAR(100)\n);",
    "examples": [
      {
        "sql": "CREATE TABLE students (student_id INT PRIMARY KEY, name VARCHAR(100));\nINSERT INTO students VALUES (1, 'Aman');\nINSERT INTO students VALUES (1, 'Riya');",
        "output": "Query OK, 1 row affected (first insert)\nERROR 1062: Duplicate entry '1' for key 'PRIMARY'",
        "explanation": "The second insert fails because student_id = 1 already exists \u2014 the primary key constraint enforces uniqueness automatically."
      }
    ],
    "importantPoints": [
      "A table can have only ONE primary key, though it can span multiple columns (composite key).",
      "Primary key values must be unique and cannot be NULL.",
      "MySQL automatically creates an index on the primary key, speeding up lookups by that column."
    ],
    "commonMistakes": [
      {
        "wrong": "CREATE TABLE students (student_id INT, name VARCHAR(100));  -- no primary key",
        "correct": "CREATE TABLE students (student_id INT PRIMARY KEY, name VARCHAR(100));",
        "why": "Without a primary key, MySQL allows duplicate or NULL student_id values, making it impossible to reliably reference a single, specific row."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create an 'employees' table with employee_id as the primary key.",
        "difficulty": "Easy",
        "hint": "Add PRIMARY KEY right after the column's data type."
      },
      {
        "text": "Explain why a phone number would be a poor choice for a primary key.",
        "difficulty": "Medium",
        "hint": "Think about uniqueness, changeability, and format."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a primary key?",
        "answer": "A primary key is a column or combination of columns that uniquely identifies every row in a table. It must contain unique values and cannot be NULL."
      },
      {
        "question": "Can a table have more than one primary key?",
        "answer": "No \u2014 a table can have only one primary key, though that primary key can be composite (made up of multiple columns combined) if a single column isn't sufficient to guarantee uniqueness."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What must be true of every primary key value?",
        "options": [
          "It can repeat",
          "It must be unique and not NULL",
          "It must be a string",
          "It must be auto-incremented"
        ],
        "correctIndex": 1,
        "explanation": "Primary keys enforce uniqueness and disallow NULL."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How many primary keys can a single table have?",
        "options": [
          "As many as needed",
          "Exactly one (possibly composite)",
          "Exactly two",
          "Zero, they're optional"
        ],
        "correctIndex": 1,
        "explanation": "Only one primary key is allowed per table, though it can span multiple columns."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What happens if you try to insert a duplicate primary key value?",
        "options": [
          "It's allowed silently",
          "MySQL throws a duplicate key error",
          "The old row is overwritten silently",
          "MySQL ignores the new row without error"
        ],
        "correctIndex": 1,
        "explanation": "Primary key constraints reject duplicate values with an error."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Does MySQL automatically index the primary key column?",
        "options": [
          "No, you must add it manually",
          "Yes, automatically",
          "Only for INT columns",
          "Only in InnoDB tables specifically configured"
        ],
        "correctIndex": 1,
        "explanation": "Primary keys are automatically indexed for fast lookups."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why is a phone number a poor primary key choice?",
        "options": [
          "Phone numbers are always unique",
          "Phone numbers can change and format varies",
          "SQL doesn't support storing phone numbers",
          "It's actually a great choice"
        ],
        "correctIndex": 1,
        "explanation": "Phone numbers can change over time and have formatting inconsistencies, unlike a stable internal ID."
      }
    ]
  },
  {
    "id": 53,
    "title": "Foreign Key",
    "level": "Intermediate",
    "category": "Joins",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "A foreign key is a column in one table that references the primary key of another table, creating a formal link between them and enforcing referential integrity.",
    "realLifeExample": "In an 'orders' table, customer_id is a foreign key referencing customers(customer_id) \u2014 this ensures every order is linked to a customer that actually exists.",
    "syntax": "CREATE TABLE orders (\n  order_id INT PRIMARY KEY,\n  customer_id INT,\n  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)\n);",
    "examples": [
      {
        "sql": "INSERT INTO orders (order_id, customer_id) VALUES (1, 999);",
        "output": "ERROR 1452: Cannot add or update a child row: a foreign key constraint fails",
        "explanation": "This insert fails because customer_id 999 doesn't exist in the customers table \u2014 the foreign key constraint prevents orphaned references."
      }
    ],
    "importantPoints": [
      "A foreign key must reference a column that is a primary key (or has a unique constraint) in another table.",
      "Foreign keys prevent 'orphan' rows \u2014 records that reference something that doesn't exist.",
      "Deleting a referenced row can be restricted, cascaded, or set to NULL depending on the foreign key's ON DELETE behavior."
    ],
    "commonMistakes": [
      {
        "wrong": "Storing customer_id in orders without a FOREIGN KEY constraint",
        "correct": "Adding FOREIGN KEY (customer_id) REFERENCES customers(customer_id)",
        "why": "Without the constraint, MySQL won't stop you from inserting an order with a customer_id that doesn't actually exist, silently corrupting your data's integrity."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Add a foreign key from an 'enrollments' table's student_id to a 'students' table.",
        "difficulty": "Medium",
        "hint": "Use FOREIGN KEY (student_id) REFERENCES students(student_id)."
      },
      {
        "text": "Explain what happens if you try to delete a customer who still has orders referencing them.",
        "difficulty": "Medium",
        "hint": "Think about referential integrity and ON DELETE behavior."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a foreign key and what is its purpose?",
        "answer": "A foreign key is a column in one table that references the primary key of another table. Its purpose is to enforce referential integrity \u2014 ensuring that relationships between tables remain valid and that you cannot reference a row that doesn't exist."
      },
      {
        "question": "What happens when you try to insert a foreign key value that doesn't exist in the referenced table?",
        "answer": "MySQL rejects the insert with a foreign key constraint error, preventing you from creating an 'orphaned' reference to a non-existent row in the parent table."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does a foreign key reference?",
        "options": [
          "Any column in another table",
          "The primary key (or unique column) of another table",
          "A column in the same table only",
          "Nothing specific"
        ],
        "correctIndex": 1,
        "explanation": "Foreign keys must reference a primary key or unique column."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is the main purpose of a foreign key?",
        "options": [
          "Speed up queries only",
          "Enforce referential integrity between tables",
          "Replace primary keys",
          "Store duplicate data"
        ],
        "correctIndex": 1,
        "explanation": "Foreign keys ensure relationships between tables stay valid."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What happens if you insert a foreign key value with no matching parent row?",
        "options": [
          "It's inserted successfully",
          "MySQL rejects it with a constraint error",
          "MySQL creates the parent row automatically",
          "It's converted to NULL"
        ],
        "correctIndex": 1,
        "explanation": "The foreign key constraint blocks invalid, orphaned references."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can deleting a parent row affect child rows with foreign keys pointing to it?",
        "options": [
          "No, they're unrelated",
          "Yes, depending on ON DELETE behavior (restrict, cascade, set null)",
          "Only if manually configured elsewhere",
          "Foreign keys prevent all deletions always"
        ],
        "correctIndex": 1,
        "explanation": "ON DELETE rules define what happens to dependent child rows."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which table typically holds the foreign key in a one-to-many relationship?",
        "options": [
          "The 'one' side",
          "The 'many' side",
          "Both sides",
          "Neither side"
        ],
        "correctIndex": 1,
        "explanation": "The many side references back to the one side's primary key."
      }
    ]
  },
  {
    "id": 54,
    "title": "INNER JOIN",
    "level": "Intermediate",
    "category": "Joins",
    "difficulty": "Medium",
    "estMinutes": 9,
    "concept": "INNER JOIN combines rows from two tables where there is a match in both, based on a specified condition. Rows without a match in either table are excluded from the result.",
    "realLifeExample": "To see 'which customers placed which orders', an e-commerce system uses INNER JOIN between customers and orders \u2014 only customers who have actually placed at least one order appear in the result.",
    "syntax": "SELECT columns\nFROM table1\nINNER JOIN table2 ON table1.column = table2.column;",
    "examples": [
      {
        "sql": "SELECT c.name, o.order_id, o.amount\nFROM customers c\nINNER JOIN orders o ON c.customer_id = o.customer_id;",
        "output": "name  | order_id | amount\n------|----------|-------\nAman  | 1        | 1500\nRiya  | 2        | 2200",
        "explanation": "Only customers who have at least one matching order (via customer_id) appear \u2014 customers with zero orders are excluded entirely."
      }
    ],
    "importantPoints": [
      "INNER JOIN is the default JOIN type \u2014 writing just JOIN in MySQL means INNER JOIN.",
      "Rows without a match on either side are excluded from the result.",
      "The ON clause specifies exactly how the two tables are related for this query."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT * FROM customers, orders;  -- no join condition",
        "correct": "SELECT * FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id;",
        "why": "Without a proper JOIN condition, MySQL performs a cross join, creating every possible combination of rows \u2014 usually producing incorrect and massively bloated results."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write an INNER JOIN to list all orders along with the customer's name who placed them.",
        "difficulty": "Medium",
        "hint": "Join orders and customers on customer_id."
      },
      {
        "text": "Find all employees along with their department name using INNER JOIN.",
        "difficulty": "Medium",
        "hint": "Join employees and departments on department_id."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does INNER JOIN return?",
        "answer": "INNER JOIN returns only the rows where there is a matching value in both joined tables, based on the specified ON condition. Rows without a match in either table are excluded."
      },
      {
        "question": "What happens to a customer with zero orders in an INNER JOIN between customers and orders?",
        "answer": "That customer would not appear at all in the result, since INNER JOIN only includes rows where a match exists in both tables \u2014 a customer with no matching orders has nothing to join with."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does INNER JOIN return?",
        "options": [
          "All rows from both tables regardless of match",
          "Only rows with matches in both tables",
          "Only rows from the left table",
          "Only unmatched rows"
        ],
        "correctIndex": 1,
        "explanation": "INNER JOIN requires a match in both tables."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Is INNER JOIN the default JOIN type in MySQL?",
        "options": [
          "No, LEFT JOIN is default",
          "Yes, plain JOIN means INNER JOIN",
          "No, there is no default",
          "Only in older MySQL versions"
        ],
        "correctIndex": 1,
        "explanation": "Writing JOIN alone defaults to INNER JOIN behavior."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What happens to unmatched rows in an INNER JOIN?",
        "options": [
          "They appear with NULLs",
          "They are excluded from the result",
          "They cause an error",
          "They appear duplicated"
        ],
        "correctIndex": 1,
        "explanation": "Only matching rows survive an INNER JOIN."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What clause specifies how two tables relate in a JOIN?",
        "options": [
          "WHERE",
          "ON",
          "GROUP BY",
          "HAVING"
        ],
        "correctIndex": 1,
        "explanation": "The ON clause defines the join condition."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What happens if you join two tables without any condition?",
        "options": [
          "MySQL throws an error always",
          "It creates a cross join (every combination of rows)",
          "It automatically guesses the right columns",
          "Nothing is returned"
        ],
        "correctIndex": 1,
        "explanation": "Missing join conditions result in a cartesian/cross join."
      }
    ]
  },
  {
    "id": 55,
    "title": "LEFT JOIN",
    "level": "Intermediate",
    "category": "Joins",
    "difficulty": "Medium",
    "estMinutes": 9,
    "concept": "LEFT JOIN returns all rows from the left (first) table, along with matching rows from the right table. If there's no match, the result shows NULLs for the right table's columns.",
    "realLifeExample": "To see 'every customer, and their orders if any', a report uses LEFT JOIN from customers to orders \u2014 this way, customers with zero orders still appear, just with NULL order details.",
    "syntax": "SELECT columns\nFROM table1\nLEFT JOIN table2 ON table1.column = table2.column;",
    "examples": [
      {
        "sql": "SELECT c.name, o.order_id\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id;",
        "output": "name  | order_id\n------|----------\nAman  | 1\nRiya  | 2\nSuresh| NULL",
        "explanation": "Suresh has no matching orders, but still appears in the result because LEFT JOIN always includes every row from the left table (customers)."
      }
    ],
    "importantPoints": [
      "LEFT JOIN always keeps every row from the left table, regardless of a match.",
      "Non-matching rows show NULL for every column coming from the right table.",
      "LEFT JOIN is commonly used to find 'missing' relationships, like customers with no orders (WHERE o.order_id IS NULL)."
    ],
    "commonMistakes": [
      {
        "wrong": "Using INNER JOIN when you need to include unmatched rows too",
        "correct": "Using LEFT JOIN to keep all rows from the primary table, even without a match",
        "why": "INNER JOIN silently drops rows without a match \u2014 if the goal is to see everything from one table regardless, LEFT JOIN is required instead."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all customers, including those who have never placed an order.",
        "difficulty": "Medium",
        "hint": "Use LEFT JOIN from customers to orders."
      },
      {
        "text": "Find all customers who have NOT placed any orders using LEFT JOIN.",
        "difficulty": "Medium",
        "hint": "Add WHERE o.order_id IS NULL after the LEFT JOIN."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between INNER JOIN and LEFT JOIN?",
        "answer": "INNER JOIN only returns rows with matches in both tables, excluding unmatched rows entirely. LEFT JOIN returns ALL rows from the left table regardless of a match, filling in NULLs for right-table columns when no match exists."
      },
      {
        "question": "How would you find customers who have never placed an order using LEFT JOIN?",
        "answer": "Use a LEFT JOIN from customers to orders, then add WHERE orders.order_id IS NULL \u2014 this filters the result down to only customers whose LEFT JOIN produced no matching order, meaning they have none."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does LEFT JOIN guarantee?",
        "options": [
          "Only matched rows appear",
          "All rows from the left table appear, matched or not",
          "All rows from the right table appear",
          "No rows appear without a match"
        ],
        "correctIndex": 1,
        "explanation": "LEFT JOIN always includes every row from the left (first) table."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What appears in right-table columns when there's no match in LEFT JOIN?",
        "options": [
          "Zero",
          "NULL",
          "An error",
          "The left table's value instead"
        ],
        "correctIndex": 1,
        "explanation": "Unmatched right-table columns are filled with NULL."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "How do you find rows in the left table with NO match in the right table?",
        "options": [
          "INNER JOIN with WHERE right.col IS NOT NULL",
          "LEFT JOIN with WHERE right.col IS NULL",
          "RIGHT JOIN with WHERE left.col IS NULL",
          "CROSS JOIN"
        ],
        "correctIndex": 1,
        "explanation": "LEFT JOIN plus a NULL check on the right table's key finds unmatched left rows."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "In 'FROM customers LEFT JOIN orders', which table's rows are all guaranteed to appear?",
        "options": [
          "orders",
          "customers",
          "Both equally",
          "Neither"
        ],
        "correctIndex": 1,
        "explanation": "The left table (customers here) always appears in full."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "When would you prefer LEFT JOIN over INNER JOIN?",
        "options": [
          "Never, they're identical",
          "When you need unmatched left-table rows included too",
          "When you want fewer rows",
          "Only for performance reasons"
        ],
        "correctIndex": 1,
        "explanation": "LEFT JOIN is for including all primary-table rows, matched or not."
      }
    ]
  },
  {
    "id": 56,
    "title": "RIGHT JOIN",
    "level": "Intermediate",
    "category": "Joins",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "RIGHT JOIN returns all rows from the right (second) table, along with matching rows from the left table. If there's no match, the left table's columns show NULL. It's the mirror image of LEFT JOIN.",
    "realLifeExample": "A staffing report lists every department, even ones with zero employees currently assigned, using RIGHT JOIN from employees to departments \u2014 every department shows up regardless of staffing.",
    "syntax": "SELECT columns\nFROM table1\nRIGHT JOIN table2 ON table1.column = table2.column;",
    "examples": [
      {
        "sql": "SELECT e.name, d.department_name\nFROM employees e\nRIGHT JOIN departments d ON e.department_id = d.department_id;",
        "output": "name  | department_name\n------|------------------\nAman  | Sales\nRiya  | Engineering\nNULL  | Legal",
        "explanation": "The 'Legal' department has no employees yet, but still appears because RIGHT JOIN guarantees every row from departments (the right table) is included."
      }
    ],
    "importantPoints": [
      "RIGHT JOIN always keeps every row from the right table, regardless of a match.",
      "Any table_a RIGHT JOIN table_b can be rewritten as table_b LEFT JOIN table_a \u2014 many developers prefer sticking to LEFT JOIN for consistency.",
      "RIGHT JOIN is less commonly used in practice than LEFT JOIN, purely by convention."
    ],
    "commonMistakes": [
      {
        "wrong": "Assuming RIGHT JOIN behaves like LEFT JOIN with tables in the same order",
        "correct": "Remembering that RIGHT JOIN preserves the SECOND (right) table's rows, not the first",
        "why": "Confusing which side is preserved is a common beginner mistake \u2014 always double check which table is 'left' and which is 'right' in the FROM/JOIN order."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Rewrite 'A LEFT JOIN B' as an equivalent RIGHT JOIN.",
        "difficulty": "Medium",
        "hint": "Swap the table order: B RIGHT JOIN A."
      },
      {
        "text": "List every department along with any employees assigned, including empty departments.",
        "difficulty": "Medium",
        "hint": "Use RIGHT JOIN from employees to departments."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does RIGHT JOIN do differently from LEFT JOIN?",
        "answer": "RIGHT JOIN preserves all rows from the right (second) table in the query, filling in NULLs for left-table columns when there's no match \u2014 it's the mirror image of LEFT JOIN, which preserves the left table instead."
      },
      {
        "question": "Why do many developers avoid using RIGHT JOIN in practice?",
        "answer": "Since any RIGHT JOIN can be rewritten as an equivalent LEFT JOIN by simply swapping the table order, many developers standardize on always using LEFT JOIN for consistency and readability, rather than mixing both join types."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does RIGHT JOIN guarantee?",
        "options": [
          "All rows from the left table appear",
          "All rows from the right table appear",
          "Only matched rows appear",
          "No NULLs are ever produced"
        ],
        "correctIndex": 1,
        "explanation": "RIGHT JOIN preserves every row from the right (second) table."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Can any RIGHT JOIN be rewritten as an equivalent LEFT JOIN?",
        "options": [
          "No, they're fundamentally different",
          "Yes, by swapping table order",
          "Only sometimes",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "Swapping the FROM/JOIN table order converts one into the other."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "In 'A RIGHT JOIN B', which table's unmatched rows show NULL?",
        "options": [
          "Table B",
          "Table A",
          "Both",
          "Neither"
        ],
        "correctIndex": 1,
        "explanation": "Table A (the left/first table) shows NULL for unmatched rows."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why is RIGHT JOIN used less often than LEFT JOIN in practice?",
        "options": [
          "It's not supported in MySQL",
          "Developers often standardize on LEFT JOIN for consistency",
          "RIGHT JOIN is always slower",
          "RIGHT JOIN cannot use WHERE clauses"
        ],
        "correctIndex": 1,
        "explanation": "It's a stylistic convention, not a technical limitation."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "A departments RIGHT JOIN employees ensures which table's rows all appear?",
        "options": [
          "departments",
          "employees",
          "Both fully",
          "Neither fully"
        ],
        "correctIndex": 1,
        "explanation": "The right-side table in the JOIN (employees, here written second) is fully preserved."
      }
    ]
  },
  {
    "id": 57,
    "title": "CROSS JOIN",
    "level": "Intermediate",
    "category": "Joins",
    "difficulty": "Medium",
    "estMinutes": 6,
    "concept": "CROSS JOIN produces the Cartesian product of two tables \u2014 every row from the first table combined with every row from the second table. No matching condition is used.",
    "realLifeExample": "A clothing store generating every possible size/color combination for a product (e.g., 3 sizes \u00d7 4 colors = 12 combinations) uses CROSS JOIN between a 'sizes' table and a 'colors' table.",
    "syntax": "SELECT columns\nFROM table1\nCROSS JOIN table2;",
    "examples": [
      {
        "sql": "SELECT s.size_name, c.color_name\nFROM sizes s\nCROSS JOIN colors c;",
        "output": "size_name | color_name\n----------|------------\nSmall     | Red\nSmall     | Blue\nMedium    | Red\nMedium    | Blue",
        "explanation": "Every size is paired with every color \u2014 2 sizes \u00d7 2 colors here produces 4 total rows, since there's no filtering condition."
      }
    ],
    "importantPoints": [
      "CROSS JOIN has no ON condition \u2014 it combines every row with every other row.",
      "The result size is the product of both table's row counts (e.g., 10 rows \u00d7 20 rows = 200 rows).",
      "Accidentally forgetting a JOIN condition on a regular JOIN effectively produces a CROSS JOIN \u2014 often a costly mistake on large tables."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT * FROM products, categories;  -- accidental cross join",
        "correct": "SELECT * FROM products p INNER JOIN categories c ON p.category_id = c.category_id;",
        "why": "Listing two tables with a comma and no WHERE/ON condition silently produces a cross join, potentially generating millions of unintended rows on large tables."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Generate all possible pairings of 3 sizes and 4 colors using CROSS JOIN.",
        "difficulty": "Easy",
        "hint": "Use CROSS JOIN with no ON clause."
      },
      {
        "text": "Explain why running CROSS JOIN on two 10,000-row tables is dangerous.",
        "difficulty": "Medium",
        "hint": "Calculate the resulting row count."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does CROSS JOIN produce?",
        "answer": "CROSS JOIN produces the Cartesian product of two tables \u2014 every row from the first table combined with every row from the second table, with no matching condition involved."
      },
      {
        "question": "When is CROSS JOIN intentionally useful?",
        "answer": "CROSS JOIN is useful when you genuinely need every possible combination of two sets, such as generating all size/color variant combinations for a product, or creating a full calendar of dates crossed with categories for reporting."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does CROSS JOIN produce?",
        "options": [
          "Only matching rows",
          "Every combination of rows from both tables",
          "No rows unless a match exists",
          "A single summary row"
        ],
        "correctIndex": 1,
        "explanation": "CROSS JOIN is a Cartesian product of both tables' rows."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Does CROSS JOIN use an ON condition?",
        "options": [
          "Yes, it's required",
          "No, there's no matching condition",
          "Only optionally",
          "Only for numeric columns"
        ],
        "correctIndex": 1,
        "explanation": "CROSS JOIN pairs every row with every other row, unconditionally."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "If table A has 5 rows and table B has 4 rows, how many rows does CROSS JOIN produce?",
        "options": [
          "9",
          "20",
          "1",
          "4"
        ],
        "correctIndex": 1,
        "explanation": "5 \u00d7 4 = 20, the Cartesian product size."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What common mistake accidentally creates a cross join?",
        "options": [
          "Using INNER JOIN correctly",
          "Listing tables with a comma and no WHERE/ON condition",
          "Using LEFT JOIN",
          "Using GROUP BY"
        ],
        "correctIndex": 1,
        "explanation": "Old-style comma joins without a filtering condition become unintentional cross joins."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "When is CROSS JOIN intentionally useful?",
        "options": [
          "Never, it should always be avoided",
          "Generating all combinations, like size/color variants",
          "Filtering out duplicate rows",
          "Speeding up simple SELECT queries"
        ],
        "correctIndex": 1,
        "explanation": "CROSS JOIN is the right tool when you deliberately need every possible pairing."
      }
    ]
  },
  {
    "id": 58,
    "title": "SELF JOIN",
    "level": "Intermediate",
    "category": "Joins",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "A SELF JOIN joins a table to itself, treating it as if it were two separate tables using aliases. It's used when rows in a table relate to other rows in the SAME table.",
    "realLifeExample": "An 'employees' table with a manager_id column (referencing another employee's employee_id) uses a SELF JOIN to show each employee alongside their manager's name.",
    "syntax": "SELECT a.column, b.column\nFROM table_name a\nJOIN table_name b ON a.some_column = b.other_column;",
    "examples": [
      {
        "sql": "SELECT e.name AS employee, m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.employee_id;",
        "output": "employee | manager\n---------|--------\nAman     | Riya\nRiya     | NULL",
        "explanation": "The employees table is joined to itself using two aliases (e and m) \u2014 each employee's manager_id is matched against another row's employee_id in the same table."
      }
    ],
    "importantPoints": [
      "A SELF JOIN requires table aliases, since you can't reference the same table name twice without them.",
      "SELF JOINs are commonly used for hierarchical data, like employee-manager or category-subcategory relationships.",
      "LEFT JOIN is often used for self joins so rows without a match (e.g., the top-level manager with no manager) still appear."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT * FROM employees JOIN employees ON employees.manager_id = employees.employee_id;",
        "correct": "SELECT * FROM employees e JOIN employees m ON e.manager_id = m.employee_id;",
        "why": "Without aliases, MySQL can't distinguish between the two 'copies' of the same table, causing an ambiguous or invalid reference error."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find each employee's manager's name using a SELF JOIN on the employees table.",
        "difficulty": "Medium",
        "hint": "Alias the table twice, e.g., 'e' and 'm'."
      },
      {
        "text": "Find pairs of products from the same category using a SELF JOIN.",
        "difficulty": "Advanced",
        "hint": "Join the products table to itself on category_id, excluding matching the same row to itself."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a SELF JOIN and when would you use one?",
        "answer": "A SELF JOIN joins a table to itself using table aliases, treating one physical table as if it were two logically separate tables. It's used for hierarchical or self-referencing relationships, such as an employees table where each row references another row (a manager) within the same table."
      },
      {
        "question": "Why are table aliases required in a SELF JOIN?",
        "answer": "Since a SELF JOIN references the same table twice within one query, MySQL needs a way to distinguish between the two 'instances' of that table. Aliases give each reference a distinct name, resolving the ambiguity."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is a SELF JOIN?",
        "options": [
          "Joining two different tables",
          "Joining a table to itself using aliases",
          "A join with no condition",
          "A join that always fails"
        ],
        "correctIndex": 1,
        "explanation": "SELF JOIN treats one table as two, using aliases."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Why are aliases required in a SELF JOIN?",
        "options": [
          "They're optional style choice only",
          "To distinguish between the two references to the same table",
          "To make queries run faster",
          "MySQL requires them for all joins"
        ],
        "correctIndex": 1,
        "explanation": "Without aliases, references to the single table would be ambiguous."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which scenario is a classic use case for SELF JOIN?",
        "options": [
          "Joining orders to customers",
          "Employee-manager hierarchical relationships",
          "Joining products to categories",
          "Joining two completely unrelated tables"
        ],
        "correctIndex": 1,
        "explanation": "Self-referencing hierarchies (like manager relationships) are the textbook SELF JOIN use case."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why might LEFT JOIN be preferred over INNER JOIN for a self join on employees/managers?",
        "options": [
          "It's always faster",
          "It includes employees with no manager (top of hierarchy)",
          "It prevents duplicate employees",
          "INNER JOIN doesn't work on self joins"
        ],
        "correctIndex": 1,
        "explanation": "LEFT JOIN ensures top-level employees without a manager still appear."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "In 'employees e JOIN employees m ON e.manager_id = m.employee_id', what does 'm' represent?",
        "options": [
          "The employee itself",
          "The employee's manager (same table, different alias)",
          "A completely different table",
          "An error"
        ],
        "correctIndex": 1,
        "explanation": "The alias 'm' represents the manager's row within the same employees table."
      }
    ]
  },
  {
    "id": 59,
    "title": "Multiple Table JOINs",
    "level": "Intermediate",
    "category": "Joins",
    "difficulty": "Hard",
    "estMinutes": 10,
    "concept": "Real-world queries often need data from three or more related tables at once. You can chain multiple JOIN clauses together, joining each new table based on its relationship to tables already in the query.",
    "realLifeExample": "An order summary combining customer name, product name, and order date requires joining 'orders', 'customers', AND 'products' together \u2014 three tables chained via their relationships.",
    "syntax": "SELECT columns\nFROM table1\nJOIN table2 ON table1.col = table2.col\nJOIN table3 ON table2.col = table3.col;",
    "examples": [
      {
        "sql": "SELECT c.name AS customer, p.name AS product, o.order_date\nFROM orders o\nJOIN customers c ON o.customer_id = c.customer_id\nJOIN order_items oi ON o.order_id = oi.order_id\nJOIN products p ON oi.product_id = p.product_id;",
        "output": "customer | product     | order_date\n---------|-------------|------------\nAman     | Headphones  | 2026-08-01",
        "explanation": "Four tables are chained together: orders links to customers and order_items, and order_items links further to products \u2014 each JOIN adds one more piece of the full picture."
      }
    ],
    "importantPoints": [
      "Each additional JOIN needs its own ON clause defining how it connects to the tables already joined.",
      "Table aliases become essential with 3+ tables, to keep column references short and unambiguous.",
      "Query performance can degrade with many joins on large tables \u2014 proper indexing on join columns matters a lot here."
    ],
    "commonMistakes": [
      {
        "wrong": "Joining table3 back to table1 when it's only related through table2",
        "correct": "Joining table3 to table2 (the table it's actually related to), which is already joined to table1",
        "why": "Attempting to join directly to a table you're not actually related to (skipping the connecting table) either fails or produces incorrect, unintended results."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a query joining students, enrollments, and courses to show each student's enrolled course names.",
        "difficulty": "Hard",
        "hint": "Chain two JOINs: students \u2192 enrollments \u2192 courses."
      },
      {
        "text": "Combine four tables (orders, customers, order_items, products) to show a full order report.",
        "difficulty": "Hard",
        "hint": "Add each JOIN one at a time, checking results after each addition."
      }
    ],
    "interviewQuestions": [
      {
        "question": "How do you join more than two tables together in one query?",
        "answer": "You chain multiple JOIN clauses in sequence, each with its own ON condition connecting it to a table already present in the query \u2014 for example, JOIN table2 ON ... JOIN table3 ON ..., building up the full relationship path step by step."
      },
      {
        "question": "What's a good strategy for building and debugging a multi-table JOIN query?",
        "answer": "Build it incrementally: start with two tables and confirm the join works correctly, then add one additional JOIN at a time, checking the result after each addition. This makes it much easier to isolate exactly which join introduced an error or unexpected row count."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "How do you connect a third table in a multi-table JOIN?",
        "options": [
          "It joins automatically",
          "Add another JOIN clause with its own ON condition",
          "List it after a comma with no condition",
          "It's not possible in MySQL"
        ],
        "correctIndex": 1,
        "explanation": "Each additional table needs its own explicit JOIN and ON clause."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Why are table aliases especially important with 3+ table joins?",
        "options": [
          "They're purely cosmetic",
          "They keep column references short and unambiguous",
          "They're required by MySQL syntax",
          "They automatically optimize the query"
        ],
        "correctIndex": 1,
        "explanation": "Aliases prevent long, repetitive, and ambiguous column references."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What's a good debugging strategy for complex multi-table joins?",
        "options": [
          "Write the whole query at once and hope it works",
          "Build incrementally, testing after each added JOIN",
          "Avoid joins entirely",
          "Only test with production data"
        ],
        "correctIndex": 1,
        "explanation": "Incremental building isolates errors far more easily."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What happens if you join a table to one it's not actually related to (skipping a connector table)?",
        "options": [
          "It works fine automatically",
          "It fails or produces incorrect results",
          "MySQL fixes the relationship for you",
          "It always returns zero rows safely"
        ],
        "correctIndex": 1,
        "explanation": "You must join through the actual relationship path, not skip connecting tables."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What matters for performance when joining several large tables?",
        "options": [
          "Nothing, joins are always instant",
          "Proper indexing on the join columns",
          "Using SELECT * always",
          "Avoiding aliases"
        ],
        "correctIndex": 1,
        "explanation": "Indexes on join columns are critical for performance at scale."
      }
    ]
  },
  {
    "id": 60,
    "title": "Constraints",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "Constraints are rules enforced on table columns to maintain data accuracy and integrity. They restrict what values can be stored, preventing invalid or inconsistent data.",
    "realLifeExample": "A signup form's database table uses constraints so a user cannot be saved with a NULL email or a duplicate username \u2014 the database itself blocks bad data before it's ever stored.",
    "syntax": "CREATE TABLE users (\n  user_id INT PRIMARY KEY,\n  email VARCHAR(100) NOT NULL UNIQUE\n);",
    "examples": [
      {
        "sql": "INSERT INTO users (user_id, email) VALUES (1, NULL);",
        "output": "ERROR 1048: Column 'email' cannot be null",
        "explanation": "The NOT NULL constraint blocks this insert automatically, without any extra application code needed."
      }
    ],
    "importantPoints": [
      "Constraints are enforced by the database itself, not just application code.",
      "Common constraints: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT.",
      "Constraints can be added at table creation or later using ALTER TABLE."
    ],
    "commonMistakes": [
      {
        "wrong": "Relying only on application code to prevent duplicate emails",
        "correct": "Adding a UNIQUE constraint directly on the email column",
        "why": "Application-only validation can be bypassed by other apps or direct database access \u2014 database constraints guarantee integrity no matter how data is inserted."
      }
    ],
    "practiceQuestions": [
      {
        "text": "List four common constraint types in MySQL.",
        "difficulty": "Easy",
        "hint": "Think NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY."
      },
      {
        "text": "Add a NOT NULL constraint to an existing 'phone' column using ALTER TABLE.",
        "difficulty": "Medium",
        "hint": "Use ALTER TABLE ... MODIFY COLUMN."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What are constraints in SQL?",
        "answer": "Constraints are rules enforced on table columns that restrict the type of data that can be stored, ensuring accuracy and integrity \u2014 for example, preventing NULLs, duplicates, or values outside a valid range."
      },
      {
        "question": "Why is it better to enforce rules with database constraints rather than only in application code?",
        "answer": "Database constraints apply universally, regardless of which application or method is used to insert data, so they can't be bypassed by a bug in one app or a direct database connection \u2014 this guarantees data integrity at the source."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is the purpose of a constraint?",
        "options": [
          "To speed up queries",
          "To restrict what values can be stored, ensuring integrity",
          "To rename columns",
          "To create indexes only"
        ],
        "correctIndex": 1,
        "explanation": "Constraints enforce valid, accurate data."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which of these is a common constraint type?",
        "options": [
          "SELECT",
          "UNIQUE",
          "ORDER BY",
          "GROUP BY"
        ],
        "correctIndex": 1,
        "explanation": "UNIQUE is a standard column constraint."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Where are constraints enforced?",
        "options": [
          "Only in application code",
          "At the database level",
          "Only in MySQL Workbench",
          "Only during backups"
        ],
        "correctIndex": 1,
        "explanation": "Constraints are enforced by the database itself."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why prefer database constraints over app-only validation?",
        "options": [
          "They're always faster",
          "They can't be bypassed by other apps or direct access",
          "They're easier to write",
          "App validation is illegal"
        ],
        "correctIndex": 1,
        "explanation": "Database-level rules apply no matter how data is inserted."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Can constraints be added after a table already exists?",
        "options": [
          "No, only at creation",
          "Yes, using ALTER TABLE",
          "Only by dropping and recreating the table",
          "Only for PRIMARY KEY"
        ],
        "correctIndex": 1,
        "explanation": "ALTER TABLE can add constraints to existing tables."
      }
    ]
  },
  {
    "id": 61,
    "title": "NOT NULL",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "The NOT NULL constraint ensures a column cannot store a NULL (missing) value \u2014 every row must have some actual value in that column.",
    "realLifeExample": "A 'users' table requires every user to have an email on file, so the email column is defined as NOT NULL \u2014 signups without an email are rejected immediately.",
    "syntax": "CREATE TABLE users (\n  user_id INT PRIMARY KEY,\n  email VARCHAR(100) NOT NULL\n);",
    "examples": [
      {
        "sql": "INSERT INTO users (user_id, email) VALUES (2, NULL);",
        "output": "ERROR 1048: Column 'email' cannot be null",
        "explanation": "The database rejects this insert outright because the email column was defined as NOT NULL."
      }
    ],
    "importantPoints": [
      "By default, MySQL columns allow NULL unless NOT NULL is specified.",
      "Primary key columns are automatically NOT NULL.",
      "NOT NULL doesn't prevent empty strings ('') \u2014 that's a different, separate concern."
    ],
    "commonMistakes": [
      {
        "wrong": "CREATE TABLE users (email VARCHAR(100));  -- allows missing emails",
        "correct": "CREATE TABLE users (email VARCHAR(100) NOT NULL);",
        "why": "Without NOT NULL, MySQL happily allows NULL emails, which can cause bugs later when code assumes every user has an email."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Add a NOT NULL constraint to a 'name' column when creating a 'students' table.",
        "difficulty": "Easy",
        "hint": "Add NOT NULL right after the data type."
      },
      {
        "text": "Explain the difference between NULL and an empty string in the context of NOT NULL.",
        "difficulty": "Medium",
        "hint": "NOT NULL blocks NULL, not empty strings."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the NOT NULL constraint do?",
        "answer": "NOT NULL ensures that a column must always contain an actual value \u2014 it prevents that column from ever storing NULL (a missing or unknown value) in any row."
      },
      {
        "question": "Does NOT NULL prevent an empty string from being stored?",
        "answer": "No \u2014 NOT NULL only blocks NULL values specifically. An empty string ('') is still considered an actual (if empty) value, so it can still be stored unless a separate CHECK constraint is added to prevent it."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does NOT NULL enforce?",
        "options": [
          "Uniqueness",
          "That a column must always have a value",
          "A default value",
          "A maximum length"
        ],
        "correctIndex": 1,
        "explanation": "NOT NULL disallows missing (NULL) values."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Are MySQL columns NULL-able by default?",
        "options": [
          "No, NOT NULL by default",
          "Yes, unless NOT NULL is specified",
          "Only VARCHAR columns are",
          "Only INT columns are"
        ],
        "correctIndex": 1,
        "explanation": "Columns allow NULL unless explicitly restricted."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Is a primary key column automatically NOT NULL?",
        "options": [
          "No",
          "Yes",
          "Only in InnoDB",
          "Only if specified twice"
        ],
        "correctIndex": 1,
        "explanation": "Primary keys inherently disallow NULL values."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Does NOT NULL block empty strings ('')?",
        "options": [
          "Yes",
          "No, only NULL is blocked",
          "Only for VARCHAR",
          "Only for numeric columns"
        ],
        "correctIndex": 1,
        "explanation": "Empty string is a real (if empty) value, distinct from NULL."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What happens if you try to insert NULL into a NOT NULL column?",
        "options": [
          "It's converted to a default value silently",
          "The insert is rejected with an error",
          "It's stored as an empty string",
          "Nothing, it's ignored"
        ],
        "correctIndex": 1,
        "explanation": "MySQL raises an error rejecting the NULL insert."
      }
    ]
  },
  {
    "id": 62,
    "title": "UNIQUE",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "The UNIQUE constraint ensures all values in a column are different from each other \u2014 no duplicates allowed, though unlike a primary key, NULL values are typically permitted (and don't count as duplicates of each other).",
    "realLifeExample": "A 'users' table uses UNIQUE on the username column so no two users can ever sign up with the exact same username.",
    "syntax": "CREATE TABLE users (\n  user_id INT PRIMARY KEY,\n  username VARCHAR(50) UNIQUE\n);",
    "examples": [
      {
        "sql": "INSERT INTO users (user_id, username) VALUES (1, 'aman123');\nINSERT INTO users (user_id, username) VALUES (2, 'aman123');",
        "output": "Query OK, 1 row affected (first insert)\nERROR 1062: Duplicate entry 'aman123' for key 'username'",
        "explanation": "The second insert fails because 'aman123' already exists in the username column, which is protected by the UNIQUE constraint."
      }
    ],
    "importantPoints": [
      "A table can have multiple UNIQUE columns, unlike PRIMARY KEY (only one per table).",
      "UNIQUE columns typically allow multiple NULL values, since NULL isn't considered equal to another NULL.",
      "UNIQUE automatically creates an index on that column to enforce and speed up the uniqueness check."
    ],
    "commonMistakes": [
      {
        "wrong": "Relying on application code alone to prevent duplicate usernames",
        "correct": "Adding a UNIQUE constraint on the username column",
        "why": "Without the database-level constraint, a race condition (two simultaneous signups) could still create duplicate usernames, even with careful application code."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Add a UNIQUE constraint to an 'email' column in a 'customers' table.",
        "difficulty": "Easy",
        "hint": "Add UNIQUE after the column's data type."
      },
      {
        "text": "Explain the difference between PRIMARY KEY and UNIQUE constraints.",
        "difficulty": "Medium",
        "hint": "Think about NULL handling and how many per table."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the UNIQUE constraint guarantee?",
        "answer": "UNIQUE guarantees that every value in that column is distinct from every other value in the same column \u2014 no two rows can share the same value, preventing duplicates."
      },
      {
        "question": "What is the key difference between PRIMARY KEY and UNIQUE?",
        "answer": "A table can have only ONE primary key, and it cannot contain NULL values. A table can have MULTIPLE UNIQUE constraints on different columns, and those columns typically CAN contain NULL values (with multiple NULLs generally allowed, since NULL isn't equal to another NULL)."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does UNIQUE prevent?",
        "options": [
          "NULL values",
          "Duplicate values in a column",
          "Negative numbers",
          "Long text values"
        ],
        "correctIndex": 1,
        "explanation": "UNIQUE ensures no two rows share the same value in that column."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How many UNIQUE constraints can a table have?",
        "options": [
          "Only one",
          "Multiple, on different columns",
          "Exactly two",
          "Zero, they're not allowed"
        ],
        "correctIndex": 1,
        "explanation": "Unlike PRIMARY KEY, a table can have several UNIQUE columns."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Do UNIQUE columns typically allow NULL values?",
        "options": [
          "No, never",
          "Yes, typically multiple NULLs are allowed",
          "Only one NULL is allowed",
          "Only if also NOT NULL"
        ],
        "correctIndex": 1,
        "explanation": "NULL isn't considered equal to another NULL, so multiple NULLs are usually permitted."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What does MySQL automatically create for a UNIQUE column?",
        "options": [
          "A foreign key",
          "An index",
          "A view",
          "A trigger"
        ],
        "correctIndex": 1,
        "explanation": "An index is created to enforce and speed up uniqueness checks."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why might application-only duplicate checking fail even with careful code?",
        "options": [
          "It's always reliable",
          "Race conditions between simultaneous requests can slip through",
          "MySQL ignores UNIQUE checks anyway",
          "Application code is always faster"
        ],
        "correctIndex": 1,
        "explanation": "Database-level constraints protect against race conditions that app code alone might miss."
      }
    ]
  },
  {
    "id": 63,
    "title": "DEFAULT",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "The DEFAULT constraint specifies a fallback value for a column, automatically used when no value is provided during an INSERT.",
    "realLifeExample": "A 'users' table sets DEFAULT CURRENT_TIMESTAMP on a created_at column, so every new user automatically gets a signup timestamp without the application needing to calculate and send it.",
    "syntax": "CREATE TABLE users (\n  user_id INT PRIMARY KEY,\n  status VARCHAR(20) DEFAULT 'active'\n);",
    "examples": [
      {
        "sql": "INSERT INTO users (user_id) VALUES (1);\nSELECT * FROM users;",
        "output": "user_id | status\n--------|--------\n1       | active",
        "explanation": "Since no status was provided in the INSERT, MySQL automatically filled it in with the DEFAULT value, 'active'."
      }
    ],
    "importantPoints": [
      "DEFAULT only applies when a column is omitted entirely from the INSERT \u2014 explicitly inserting NULL still stores NULL (unless the column is also NOT NULL).",
      "DEFAULT values can be literals (like 'active' or 0) or certain functions (like CURRENT_TIMESTAMP).",
      "Combining DEFAULT with NOT NULL is a common, safe pattern to guarantee a sensible value always exists."
    ],
    "commonMistakes": [
      {
        "wrong": "Expecting DEFAULT to apply when explicitly inserting NULL",
        "correct": "Omitting the column entirely from the INSERT statement to trigger the DEFAULT value",
        "why": "DEFAULT only kicks in when a column is left out of the INSERT \u2014 if you explicitly pass NULL, that's what gets stored (unless blocked by NOT NULL)."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Set a DEFAULT value of 0 for a 'discount' column in a 'products' table.",
        "difficulty": "Easy",
        "hint": "Add DEFAULT 0 after the column's data type."
      },
      {
        "text": "Set a column to default to the current timestamp whenever a row is created.",
        "difficulty": "Medium",
        "hint": "Use DEFAULT CURRENT_TIMESTAMP."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the DEFAULT constraint do?",
        "answer": "DEFAULT specifies a fallback value that MySQL automatically inserts into a column when no explicit value is provided for it during an INSERT statement."
      },
      {
        "question": "Does DEFAULT apply if you explicitly insert NULL into a column?",
        "answer": "No \u2014 DEFAULT only activates when the column is completely omitted from the INSERT statement. If you explicitly specify NULL, that NULL value is stored as-is (assuming the column allows NULL)."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "When does a DEFAULT value get used?",
        "options": [
          "Every time, regardless of input",
          "Only when the column is omitted from the INSERT",
          "Only during UPDATE",
          "Never automatically"
        ],
        "correctIndex": 1,
        "explanation": "DEFAULT fills in only when no value is given for that column."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "If you explicitly insert NULL into a column with a DEFAULT, what happens?",
        "options": [
          "The DEFAULT value is used instead",
          "NULL is stored as given",
          "An error occurs always",
          "The row is rejected"
        ],
        "correctIndex": 1,
        "explanation": "Explicit NULL overrides the DEFAULT unless NOT NULL blocks it."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which is a common DEFAULT value for a timestamp column?",
        "options": [
          "0",
          "CURRENT_TIMESTAMP",
          "NULL",
          "'N/A'"
        ],
        "correctIndex": 1,
        "explanation": "CURRENT_TIMESTAMP automatically records the current date/time."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can DEFAULT and NOT NULL be combined on the same column?",
        "options": [
          "No, they conflict",
          "Yes, a common and safe pattern",
          "Only for numeric columns",
          "Only for TEXT columns"
        ],
        "correctIndex": 1,
        "explanation": "This combination guarantees a value always exists, using the default when none is given."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is the main purpose of a DEFAULT constraint?",
        "options": [
          "Enforce uniqueness",
          "Provide a fallback value automatically",
          "Speed up queries",
          "Prevent duplicate rows"
        ],
        "correctIndex": 1,
        "explanation": "DEFAULT simplifies inserts by auto-filling sensible values."
      }
    ]
  },
  {
    "id": 64,
    "title": "CHECK",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Medium",
    "estMinutes": 6,
    "concept": "The CHECK constraint ensures that values in a column satisfy a specific condition before being allowed into the table \u2014 for example, requiring a price to always be positive.",
    "realLifeExample": "A 'products' table uses CHECK (price > 0) so that no one can accidentally insert a negative price, preventing a whole class of pricing bugs at the database level.",
    "syntax": "CREATE TABLE products (\n  product_id INT PRIMARY KEY,\n  price DECIMAL(10,2) CHECK (price > 0)\n);",
    "examples": [
      {
        "sql": "INSERT INTO products (product_id, price) VALUES (1, -50);",
        "output": "ERROR 3819: Check constraint 'products_chk_1' is violated",
        "explanation": "The CHECK constraint rejects this insert because -50 fails the condition price > 0."
      }
    ],
    "importantPoints": [
      "CHECK constraints can reference one or multiple columns in a logical condition.",
      "MySQL only started fully enforcing CHECK constraints from version 8.0.16 onward \u2014 earlier versions silently ignored them.",
      "CHECK is great for enforcing business rules directly in the database, like age >= 18 or quantity >= 0."
    ],
    "commonMistakes": [
      {
        "wrong": "Validating price > 0 only in application code",
        "correct": "Adding CHECK (price > 0) directly on the column",
        "why": "Relying solely on application-level validation means any other tool or script writing directly to the database could still insert invalid data."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Add a CHECK constraint ensuring 'age' is always 18 or older in a 'users' table.",
        "difficulty": "Medium",
        "hint": "Use CHECK (age >= 18)."
      },
      {
        "text": "Add a CHECK constraint ensuring 'quantity' in an 'order_items' table is never negative.",
        "difficulty": "Medium",
        "hint": "Use CHECK (quantity >= 0)."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does a CHECK constraint do?",
        "answer": "A CHECK constraint enforces that every value in a column (or combination of columns) satisfies a specified logical condition before being allowed into the table, rejecting any row that violates the rule."
      },
      {
        "question": "From which MySQL version has CHECK been fully enforced?",
        "answer": "MySQL began fully enforcing CHECK constraints starting from version 8.0.16 \u2014 in earlier versions, CHECK clauses were parsed but silently ignored, meaning they had no actual effect on inserted data."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does a CHECK constraint enforce?",
        "options": [
          "Uniqueness",
          "That values satisfy a specific condition",
          "A default value",
          "Referential integrity between tables"
        ],
        "correctIndex": 1,
        "explanation": "CHECK validates values against a defined logical condition."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which is a valid use of CHECK?",
        "options": [
          "CHECK (price > 0)",
          "CHECK price",
          "PRICE CHECK > 0",
          "CHECK VALUE price"
        ],
        "correctIndex": 0,
        "explanation": "CHECK takes a boolean condition in parentheses."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "From which MySQL version is CHECK fully enforced?",
        "options": [
          "5.7",
          "8.0.16",
          "4.0",
          "It was never enforced"
        ],
        "correctIndex": 1,
        "explanation": "Earlier MySQL versions accepted but ignored CHECK constraints."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What happens if an insert violates a CHECK constraint?",
        "options": [
          "The row is inserted with a warning",
          "The insert is rejected with an error",
          "The value is automatically corrected",
          "Nothing happens"
        ],
        "correctIndex": 1,
        "explanation": "MySQL rejects any insert/update that fails the CHECK condition."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which is a good real-world use case for CHECK?",
        "options": [
          "Ensuring age >= 18",
          "Formatting text",
          "Speeding up SELECT queries",
          "Creating an index"
        ],
        "correctIndex": 0,
        "explanation": "CHECK is ideal for enforcing business rules like minimum age."
      }
    ]
  },
  {
    "id": 65,
    "title": "Primary Key Design",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "Choosing the right primary key strategy matters for performance and maintainability. Common approaches include auto-incrementing integers, UUIDs, and natural keys (using real-world unique data).",
    "realLifeExample": "A large-scale app might use an auto-incrementing BIGINT for internal primary keys instead of email addresses, since emails can change but a numeric ID never needs to.",
    "syntax": "CREATE TABLE users (\n  user_id INT AUTO_INCREMENT PRIMARY KEY,\n  email VARCHAR(100) UNIQUE\n);",
    "examples": [
      {
        "sql": "CREATE TABLE users (user_id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(100));\nINSERT INTO users (email) VALUES ('aman@example.com');\nSELECT * FROM users;",
        "output": "user_id | email\n--------|-------------------\n1       | aman@example.com",
        "explanation": "AUTO_INCREMENT automatically generates the next available integer for user_id, so you never have to manually track or supply it."
      }
    ],
    "importantPoints": [
      "Surrogate keys (auto-increment IDs) are generally preferred over natural keys (like email or SSN) since natural keys can change or contain sensitive data.",
      "AUTO_INCREMENT is the standard MySQL way to auto-generate sequential primary key values.",
      "For distributed systems, UUIDs are sometimes used instead of auto-increment, to avoid collisions across multiple servers."
    ],
    "commonMistakes": [
      {
        "wrong": "Using email as the primary key for a users table",
        "correct": "Using an auto-incrementing user_id as the primary key, with email as a separate UNIQUE column",
        "why": "If a user's email needs to change, an email-based primary key would require updating every table that references it \u2014 a surrogate key avoids this cascading problem entirely."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Design a primary key strategy for an 'orders' table expected to scale to millions of rows.",
        "difficulty": "Medium",
        "hint": "Consider AUTO_INCREMENT INT/BIGINT."
      },
      {
        "text": "Explain a scenario where a UUID primary key might be preferred over AUTO_INCREMENT.",
        "difficulty": "Advanced",
        "hint": "Think about multiple independent database servers generating IDs simultaneously."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between a surrogate key and a natural key?",
        "answer": "A surrogate key is an artificially generated identifier (like an auto-incrementing integer) with no real-world meaning, used purely to uniquely identify a row. A natural key is a real-world attribute (like an email address or national ID number) that already exists in the data and happens to be unique."
      },
      {
        "question": "Why are surrogate keys generally preferred over natural keys for primary keys?",
        "answer": "Natural keys can change over time (an email can be updated) or contain sensitive information, which complicates using them as a stable, permanent identifier referenced by other tables. Surrogate keys remain constant for the life of the row, simplifying relationships and avoiding costly cascading updates."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is a surrogate key?",
        "options": [
          "A real-world unique value like email",
          "An artificially generated ID with no business meaning",
          "A foreign key",
          "A column with duplicate values"
        ],
        "correctIndex": 1,
        "explanation": "Surrogate keys (like auto-increment IDs) are generated purely for identification."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is a natural key?",
        "options": [
          "An auto-incrementing integer",
          "A real-world attribute that is naturally unique, like an email",
          "A randomly generated UUID",
          "A column with NULL values"
        ],
        "correctIndex": 1,
        "explanation": "Natural keys come from real, meaningful data already in the table."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why avoid using email as a primary key?",
        "options": [
          "Emails are never unique",
          "Emails can change, complicating a stable identifier",
          "SQL doesn't support VARCHAR primary keys",
          "It's actually the best choice"
        ],
        "correctIndex": 1,
        "explanation": "A changeable value makes a poor permanent identifier for relationships."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What does AUTO_INCREMENT do in MySQL?",
        "options": [
          "Deletes old rows automatically",
          "Automatically generates sequential values for a column",
          "Encrypts a column",
          "Creates a backup"
        ],
        "correctIndex": 1,
        "explanation": "AUTO_INCREMENT generates the next sequential integer automatically."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "When might UUIDs be preferred over AUTO_INCREMENT?",
        "options": [
          "Never, AUTO_INCREMENT is always best",
          "In distributed systems generating IDs across multiple servers",
          "Only for small single-server apps",
          "Only for text columns"
        ],
        "correctIndex": 1,
        "explanation": "UUIDs avoid ID collisions when multiple systems generate keys independently."
      }
    ]
  },
  {
    "id": 66,
    "title": "Foreign Key Design",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "Good foreign key design involves choosing appropriate ON DELETE and ON UPDATE behaviors, deciding when relationships should be optional (nullable) or mandatory, and ensuring referenced columns are properly indexed.",
    "realLifeExample": "An e-commerce system might use ON DELETE CASCADE for order_items (deleting an order removes its items automatically) but ON DELETE RESTRICT for customers (preventing deletion of a customer who still has orders).",
    "syntax": "CREATE TABLE order_items (\n  item_id INT PRIMARY KEY,\n  order_id INT,\n  FOREIGN KEY (order_id) REFERENCES orders(order_id)\n    ON DELETE CASCADE\n);",
    "examples": [
      {
        "sql": "DELETE FROM orders WHERE order_id = 5;\n-- With ON DELETE CASCADE on order_items.order_id:",
        "output": "Query OK, 1 row affected (orders)\n-- All matching rows in order_items are automatically deleted too",
        "explanation": "Because of ON DELETE CASCADE, removing the order automatically removes its associated order_items rows too, keeping the data consistent without extra manual cleanup."
      }
    ],
    "importantPoints": [
      "ON DELETE CASCADE automatically deletes child rows when the parent is deleted.",
      "ON DELETE RESTRICT (the default in many cases) prevents deleting a parent row if child rows still reference it.",
      "ON DELETE SET NULL sets the foreign key column to NULL instead of deleting the child row, useful for optional relationships."
    ],
    "commonMistakes": [
      {
        "wrong": "Using ON DELETE CASCADE everywhere without thinking it through",
        "correct": "Choosing CASCADE, RESTRICT, or SET NULL deliberately based on what SHOULD happen to related data",
        "why": "Blindly cascading deletes can cause unintended data loss \u2014 for example, deleting a customer shouldn't necessarily delete their entire order history if you need it for records."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Design the ON DELETE behavior for a 'comments' table referencing a 'posts' table.",
        "difficulty": "Medium",
        "hint": "Consider whether comments should be deleted when their post is deleted."
      },
      {
        "text": "Explain when you'd choose ON DELETE SET NULL over ON DELETE CASCADE.",
        "difficulty": "Advanced",
        "hint": "Think about optional vs. mandatory relationships."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What are the main ON DELETE options for a foreign key, and what do they do?",
        "answer": "CASCADE automatically deletes child rows when the referenced parent row is deleted. RESTRICT (or the default behavior) prevents deletion of a parent row if child rows still reference it. SET NULL sets the foreign key column in child rows to NULL instead of deleting them, which requires the column to be nullable."
      },
      {
        "question": "Why is it important to think carefully about ON DELETE behavior during design?",
        "answer": "Choosing the wrong ON DELETE behavior can lead to either unintended data loss (overly aggressive CASCADE) or blocked operations that frustrate users (overly strict RESTRICT) \u2014 the right choice depends entirely on the real-world business meaning of the relationship."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does ON DELETE CASCADE do?",
        "options": [
          "Prevents deletion of the parent",
          "Automatically deletes related child rows",
          "Sets child rows to NULL",
          "Does nothing extra"
        ],
        "correctIndex": 1,
        "explanation": "CASCADE removes dependent child rows when the parent is deleted."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does ON DELETE RESTRICT do?",
        "options": [
          "Automatically deletes children",
          "Prevents deleting a parent that still has child rows",
          "Sets values to NULL",
          "Ignores foreign keys entirely"
        ],
        "correctIndex": 1,
        "explanation": "RESTRICT blocks deletion if dependent rows exist."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does ON DELETE SET NULL require?",
        "options": [
          "The foreign key column must be nullable",
          "The parent table must be empty",
          "CASCADE must also be set",
          "Nothing special"
        ],
        "correctIndex": 0,
        "explanation": "SET NULL needs the child column to allow NULL values."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why shouldn't you use CASCADE everywhere by default?",
        "options": [
          "It's technically impossible",
          "It can cause unintended data loss in some relationships",
          "It's always slower",
          "MySQL doesn't support it broadly"
        ],
        "correctIndex": 1,
        "explanation": "Cascading deletes should match the actual real-world relationship logic."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which ON DELETE option fits an optional relationship, like an employee's optional manager?",
        "options": [
          "CASCADE",
          "SET NULL",
          "RESTRICT always",
          "None, it's not possible"
        ],
        "correctIndex": 1,
        "explanation": "SET NULL cleanly handles optional relationships without deleting the employee."
      }
    ]
  },
  {
    "id": 67,
    "title": "One-to-One",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "A one-to-one relationship means each row in Table A relates to exactly one row in Table B, and vice versa. It's often used to split a table for security, performance, or organizational reasons.",
    "realLifeExample": "A 'users' table might have a separate 'user_profiles' table in a one-to-one relationship \u2014 sensitive login data stays in 'users', while optional profile details (bio, avatar) live separately.",
    "syntax": "CREATE TABLE user_profiles (\n  user_id INT PRIMARY KEY,\n  bio TEXT,\n  FOREIGN KEY (user_id) REFERENCES users(user_id)\n);",
    "examples": [
      {
        "sql": "SELECT u.username, p.bio\nFROM users u\nJOIN user_profiles p ON u.user_id = p.user_id;",
        "output": "username | bio\n---------|------------------\naman123  | SQL enthusiast",
        "explanation": "Since user_profiles.user_id is both the primary key AND a foreign key, each user can have at most one matching profile row."
      }
    ],
    "importantPoints": [
      "A one-to-one relationship is enforced by making the foreign key column also a primary key (or UNIQUE).",
      "One-to-one relationships are less common than one-to-many, typically used for optional or sensitive data separation.",
      "Sometimes it's simpler to just add the extra columns directly to the original table instead of creating a separate one-to-one table."
    ],
    "commonMistakes": [
      {
        "wrong": "Making the foreign key column in user_profiles a regular (non-unique) INT",
        "correct": "Making user_id in user_profiles both the PRIMARY KEY and FOREIGN KEY",
        "why": "Without a uniqueness constraint on the foreign key, nothing stops a user from having multiple profile rows, turning it into an unintended one-to-many relationship."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Design a one-to-one relationship between 'employees' and 'employee_bank_details'.",
        "difficulty": "Medium",
        "hint": "Make the foreign key column also the primary key."
      },
      {
        "text": "Explain a real-world reason to split a one-to-one relationship into two tables instead of one wide table.",
        "difficulty": "Medium",
        "hint": "Think about optional data or access control."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What defines a one-to-one relationship between two tables?",
        "answer": "In a one-to-one relationship, each row in the first table corresponds to exactly one row in the second table, and vice versa \u2014 this is typically enforced by making the foreign key column also a primary key or UNIQUE constraint."
      },
      {
        "question": "Why might you split data into a one-to-one relationship instead of one large table?",
        "answer": "Common reasons include: separating sensitive data (like payment info) for tighter access control, keeping frequently-accessed columns separate from rarely-accessed ones for performance, or cleanly representing genuinely optional data that not every row will have."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What defines a one-to-one relationship?",
        "options": [
          "One row relates to many rows",
          "Each row relates to exactly one row in the other table",
          "Many rows relate to many rows",
          "No relationship exists"
        ],
        "correctIndex": 1,
        "explanation": "One-to-one means a strict 1:1 pairing between rows."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How is a one-to-one relationship typically enforced?",
        "options": [
          "Using a regular INT foreign key",
          "Making the foreign key also a primary key or UNIQUE",
          "Using CASCADE only",
          "It can't be enforced"
        ],
        "correctIndex": 1,
        "explanation": "Uniqueness on the foreign key column enforces the 1:1 pairing."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why might sensitive data be split into a separate one-to-one table?",
        "options": [
          "To make queries slower",
          "For tighter access control or organization",
          "It's required by MySQL",
          "To duplicate the data"
        ],
        "correctIndex": 1,
        "explanation": "Separation can support security and organizational goals."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What happens if the foreign key in a 'one-to-one' table isn't unique?",
        "options": [
          "Nothing changes",
          "It could allow multiple matching rows, breaking the 1:1 design",
          "It automatically becomes one-to-one anyway",
          "MySQL prevents this by default"
        ],
        "correctIndex": 1,
        "explanation": "Without uniqueness, multiple rows could reference the same parent, becoming one-to-many."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Is one-to-one more or less common than one-to-many in typical designs?",
        "options": [
          "More common",
          "Less common",
          "Equally common always",
          "One-to-one doesn't exist in SQL"
        ],
        "correctIndex": 1,
        "explanation": "One-to-many relationships are far more common in typical schemas."
      }
    ]
  },
  {
    "id": 68,
    "title": "One-to-Many",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "A one-to-many relationship means one row in Table A can relate to multiple rows in Table B, but each row in Table B relates back to only one row in Table A. This is the most common relationship type in relational databases.",
    "realLifeExample": "One customer can place many orders, but each order belongs to exactly one customer \u2014 this is a classic one-to-many relationship between customers and orders.",
    "syntax": "CREATE TABLE orders (\n  order_id INT PRIMARY KEY,\n  customer_id INT,\n  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)\n);",
    "examples": [
      {
        "sql": "SELECT c.name, COUNT(o.order_id) AS total_orders\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id\nGROUP BY c.name;",
        "output": "name  | total_orders\n------|-------------\nAman  | 5\nRiya  | 2",
        "explanation": "Each customer can appear alongside many order rows \u2014 this query counts how many orders (the 'many' side) belong to each customer (the 'one' side)."
      }
    ],
    "importantPoints": [
      "The foreign key lives on the 'many' side of the relationship (orders references customers, not the other way around).",
      "One-to-many is the most common and natural relationship type in relational database design.",
      "There's no special constraint needed to make it 'one-to-many' beyond a normal (non-unique) foreign key."
    ],
    "commonMistakes": [
      {
        "wrong": "Putting a foreign key to orders inside the customers table",
        "correct": "Putting the foreign key to customers inside the orders table",
        "why": "Since one customer can have many orders, storing a single order_id in customers wouldn't work \u2014 the foreign key must live on the 'many' side, in orders."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Design a one-to-many relationship between 'authors' and 'books'.",
        "difficulty": "Easy",
        "hint": "One author can write many books."
      },
      {
        "text": "Write a query showing each author along with their total number of books.",
        "difficulty": "Medium",
        "hint": "Use LEFT JOIN, GROUP BY, and COUNT."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What defines a one-to-many relationship?",
        "answer": "In a one-to-many relationship, a single row in the 'one' table can be associated with multiple rows in the 'many' table, but each row in the 'many' table relates back to only one row in the 'one' table."
      },
      {
        "question": "Where does the foreign key live in a one-to-many relationship?",
        "answer": "The foreign key always lives on the 'many' side of the relationship. For example, in a customers-to-orders relationship, the orders table holds the customer_id foreign key, since many orders can belong to one customer."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What defines a one-to-many relationship?",
        "options": [
          "Each row relates to exactly one other row",
          "One row can relate to multiple rows in another table",
          "No rows are ever related",
          "Every row relates to every other row"
        ],
        "correctIndex": 1,
        "explanation": "One side has many related rows on the other side."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "In a customers/orders one-to-many relationship, where does the foreign key go?",
        "options": [
          "In customers",
          "In orders",
          "In both tables",
          "In neither table"
        ],
        "correctIndex": 1,
        "explanation": "The 'many' side (orders) holds the foreign key referencing customers."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Is one-to-many the most common relationship type in relational databases?",
        "options": [
          "No, one-to-one is most common",
          "Yes, it's the most common and natural type",
          "Many-to-many is most common",
          "None are more common than others"
        ],
        "correctIndex": 1,
        "explanation": "One-to-many relationships appear constantly in real-world schemas."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What kind of key constraint does the 'many' side foreign key typically have?",
        "options": [
          "It must be UNIQUE",
          "It's typically a normal, non-unique foreign key",
          "It must also be a primary key",
          "It cannot have any constraint"
        ],
        "correctIndex": 1,
        "explanation": "A regular (non-unique) foreign key allows many rows to reference the same parent."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "One author writing many books is an example of:",
        "options": [
          "Many-to-many",
          "One-to-one",
          "One-to-many",
          "No relationship"
        ],
        "correctIndex": 2,
        "explanation": "One author (one) relates to multiple books (many)."
      }
    ]
  },
  {
    "id": 69,
    "title": "Many-to-Many",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "A many-to-many relationship means multiple rows in Table A can relate to multiple rows in Table B, and vice versa. Since a plain foreign key can't represent this directly, a separate junction (or 'bridge') table is used.",
    "realLifeExample": "A student can enroll in many courses, and a course can have many students \u2014 this many-to-many relationship is modeled using a junction table called 'enrollments', linking students and courses.",
    "syntax": "CREATE TABLE enrollments (\n  student_id INT,\n  course_id INT,\n  PRIMARY KEY (student_id, course_id),\n  FOREIGN KEY (student_id) REFERENCES students(student_id),\n  FOREIGN KEY (course_id) REFERENCES courses(course_id)\n);",
    "examples": [
      {
        "sql": "SELECT s.name, c.course_name\nFROM enrollments e\nJOIN students s ON e.student_id = s.student_id\nJOIN courses c ON e.course_id = c.course_id;",
        "output": "name  | course_name\n------|-------------\nAman  | Databases\nAman  | Web Dev\nRiya  | Databases",
        "explanation": "The junction table 'enrollments' allows each student to appear alongside multiple courses, and each course to appear alongside multiple students."
      }
    ],
    "importantPoints": [
      "A junction table typically has a composite primary key made from both foreign keys together.",
      "The junction table can also store extra data about the relationship itself, like enrollment_date or grade.",
      "Without a junction table, there's no clean way to represent many-to-many relationships in a relational database."
    ],
    "commonMistakes": [
      {
        "wrong": "Trying to store multiple course_ids in a single column in the students table",
        "correct": "Creating a separate junction table (enrollments) linking students and courses",
        "why": "Storing comma-separated IDs in one column breaks relational design principles, making it very difficult to query, join, or maintain data integrity properly."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Design a junction table for a many-to-many relationship between 'products' and 'tags'.",
        "difficulty": "Medium",
        "hint": "Create a 'product_tags' table with both foreign keys."
      },
      {
        "text": "Add an 'enrolled_date' column to the enrollments junction table, and explain why that data belongs there rather than in students or courses.",
        "difficulty": "Advanced",
        "hint": "Think about which table the data actually describes."
      }
    ],
    "interviewQuestions": [
      {
        "question": "Why can't a many-to-many relationship be represented with a simple foreign key?",
        "answer": "A foreign key column can only reference one specific parent row, so it works for one-to-many relationships. For many-to-many, each row on both sides needs to relate to multiple rows on the other side, which a single foreign key column cannot express \u2014 this requires a separate junction table with two foreign keys."
      },
      {
        "question": "What is a junction (or bridge) table, and what does it typically contain?",
        "answer": "A junction table sits between two tables in a many-to-many relationship, containing foreign keys to both related tables (often combined as a composite primary key). It may also store additional data specific to that particular relationship instance, such as an enrollment date or an order quantity."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is needed to represent a many-to-many relationship?",
        "options": [
          "A single foreign key column",
          "A junction (bridge) table with two foreign keys",
          "Nothing special, it works automatically",
          "A CHECK constraint"
        ],
        "correctIndex": 1,
        "explanation": "Junction tables are the standard way to model many-to-many relationships."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does a junction table's primary key typically consist of?",
        "options": [
          "A single auto-increment column only",
          "A composite key made of both foreign keys",
          "No primary key is needed",
          "Only the first foreign key"
        ],
        "correctIndex": 1,
        "explanation": "Combining both foreign keys as a composite key is the common pattern."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Can a junction table store additional data about the relationship itself?",
        "options": [
          "No, only the two foreign keys",
          "Yes, like an enrollment date or grade",
          "Only in MySQL 8+",
          "Only if it has no primary key"
        ],
        "correctIndex": 1,
        "explanation": "Junction tables often hold relationship-specific attributes."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Students enrolling in multiple courses, with courses having multiple students, is an example of:",
        "options": [
          "One-to-one",
          "One-to-many",
          "Many-to-many",
          "No relationship"
        ],
        "correctIndex": 2,
        "explanation": "Both sides can relate to multiple rows on the other side."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why is storing comma-separated IDs in one column a bad practice?",
        "options": [
          "It's actually a good practice",
          "It breaks relational design and complicates querying/joining",
          "MySQL doesn't allow commas in text",
          "It's faster than a junction table"
        ],
        "correctIndex": 1,
        "explanation": "Comma-separated values violate normalization and are hard to query reliably."
      }
    ]
  },
  {
    "id": 70,
    "title": "ER Diagrams",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "An Entity-Relationship (ER) Diagram is a visual representation of a database's tables (entities), their columns (attributes), and how they relate to each other. It's used to plan a database's structure before writing any SQL.",
    "realLifeExample": "Before building an e-commerce database, a developer sketches an ER diagram showing boxes for 'Customers', 'Orders', and 'Products', with lines showing how they connect \u2014 catching design issues before writing a single CREATE TABLE statement.",
    "syntax": "-- ER diagrams are visual, not SQL \u2014 but they map directly to SQL structures:\n-- [Customers] --1---\u221e-- [Orders] --\u221e---1-- [Products] (via order_items)",
    "examples": [
      {
        "sql": "-- Conceptual mapping from ER diagram to SQL:\nCREATE TABLE customers (customer_id INT PRIMARY KEY, name VARCHAR(100));\nCREATE TABLE orders (order_id INT PRIMARY KEY, customer_id INT, FOREIGN KEY (customer_id) REFERENCES customers(customer_id));",
        "output": "Query OK (both tables created)",
        "explanation": "Each entity box in the ER diagram becomes a table, and each relationship line becomes a foreign key connecting those tables."
      }
    ],
    "importantPoints": [
      "Entities become tables; attributes become columns; relationships become foreign keys (or junction tables for many-to-many).",
      "ER diagrams use notations like crow's foot notation to show cardinality (one-to-one, one-to-many, many-to-many).",
      "Planning with an ER diagram before writing SQL helps catch design flaws early, when they're cheap to fix."
    ],
    "commonMistakes": [
      {
        "wrong": "Jumping straight into CREATE TABLE statements for a complex system without planning",
        "correct": "Sketching an ER diagram first to map out entities and relationships",
        "why": "Skipping the planning stage often leads to costly redesigns later, once relationships turn out to be more complex than initially assumed."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Sketch (on paper or a tool) an ER diagram for a simple blog: users, posts, and comments.",
        "difficulty": "Medium",
        "hint": "Think about which relationships are one-to-many."
      },
      {
        "text": "Convert a basic ER diagram for 'library: books and authors' into actual CREATE TABLE SQL statements.",
        "difficulty": "Medium",
        "hint": "Decide whether it's one-to-many or many-to-many first."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is an ER (Entity-Relationship) diagram used for?",
        "answer": "An ER diagram visually represents a database's entities (which become tables), their attributes (which become columns), and the relationships between them (which become foreign keys or junction tables) \u2014 it's a planning tool used before implementing the actual SQL schema."
      },
      {
        "question": "How does an entity in an ER diagram map to an actual SQL structure?",
        "answer": "Each entity typically becomes a table, with the entity's attributes becoming that table's columns. Relationships between entities become either a foreign key (for one-to-many) or a separate junction table (for many-to-many)."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does an ER diagram visually represent?",
        "options": [
          "Server hardware",
          "Entities, attributes, and relationships in a database",
          "Application code",
          "User interface designs"
        ],
        "correctIndex": 1,
        "explanation": "ER diagrams model the logical structure of a database."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does an 'entity' in an ER diagram typically become in SQL?",
        "options": [
          "A column",
          "A table",
          "A database",
          "A constraint"
        ],
        "correctIndex": 1,
        "explanation": "Entities map directly to tables."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does a relationship line in an ER diagram often become in SQL?",
        "options": [
          "A comment",
          "A foreign key or junction table",
          "A view",
          "An index only"
        ],
        "correctIndex": 1,
        "explanation": "Relationships translate to foreign keys or junction tables depending on cardinality."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What is a benefit of creating an ER diagram before writing SQL?",
        "options": [
          "It's required by MySQL",
          "It helps catch design flaws early, when cheap to fix",
          "It replaces the need for constraints",
          "It automatically writes your SQL"
        ],
        "correctIndex": 1,
        "explanation": "Planning visually surfaces relationship issues before implementation."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What notation is commonly used in ER diagrams to show relationship types?",
        "options": [
          "Binary code",
          "Crow's foot notation",
          "Regular expressions",
          "JSON schema"
        ],
        "correctIndex": 1,
        "explanation": "Crow's foot notation is a standard way to show cardinality (1:1, 1:N, M:N)."
      }
    ]
  },
  {
    "id": 71,
    "title": "Normalization",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Hard",
    "estMinutes": 10,
    "concept": "Normalization is the process of organizing a database's tables and columns to reduce data redundancy and improve data integrity, typically by following a series of rules called 'normal forms' (1NF, 2NF, 3NF, and beyond).",
    "realLifeExample": "An unnormalized 'orders' table that repeats customer name, address, and phone in every single order row wastes storage and risks inconsistency \u2014 normalization splits this into separate, cleanly related tables.",
    "syntax": "-- Normalization is a design process, not a single command.\n-- Before: orders (order_id, customer_name, customer_address, product_name, product_price)\n-- After: customers, products, and orders (linked via foreign keys)",
    "examples": [
      {
        "sql": "-- Before normalization: repeated customer info in every order row\n-- After normalization:\nCREATE TABLE customers (customer_id INT PRIMARY KEY, name VARCHAR(100), address VARCHAR(200));\nCREATE TABLE orders (order_id INT PRIMARY KEY, customer_id INT, FOREIGN KEY (customer_id) REFERENCES customers(customer_id));",
        "output": "Query OK (both tables created)",
        "explanation": "Customer details are now stored once in 'customers' and referenced by ID in 'orders', eliminating repeated, potentially inconsistent copies of the same data."
      }
    ],
    "importantPoints": [
      "Normalization reduces data duplication and prevents update anomalies (where updating one copy of data leaves other copies outdated).",
      "Each 'normal form' (1NF, 2NF, 3NF) builds on the rules of the previous one, progressively removing more types of redundancy.",
      "Over-normalization can sometimes hurt performance by requiring many joins \u2014 real-world designs often balance normalization with practical query needs."
    ],
    "commonMistakes": [
      {
        "wrong": "Storing product_name and product_price directly in every order_items row",
        "correct": "Storing only product_id in order_items, referencing a separate products table",
        "why": "If a product's price changes, an unnormalized design would need to update every historical order row (or worse, leave them inconsistent) \u2014 normalization avoids this by referencing shared data through a single source of truth."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Identify the redundancy in a table that stores 'student_name, course_name, teacher_name' repeated for every enrollment.",
        "difficulty": "Medium",
        "hint": "Think about which values repeat unnecessarily."
      },
      {
        "text": "Explain in your own words why normalization improves data integrity.",
        "difficulty": "Medium",
        "hint": "Consider what happens when duplicated data is updated inconsistently."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is normalization and why is it important?",
        "answer": "Normalization is the process of structuring database tables to minimize data redundancy and prevent inconsistencies, typically achieved by following a series of rules (normal forms). It's important because it reduces wasted storage, prevents update anomalies (where the same fact exists in multiple places and can become inconsistent), and generally improves data integrity."
      },
      {
        "question": "Can a database be 'too normalized'? What's the tradeoff?",
        "answer": "Yes \u2014 over-normalization can lead to a large number of small, highly-related tables, which requires many JOINs to reconstruct commonly-needed views of the data. This can hurt query performance and increase complexity, so real-world design often balances strict normalization with practical, denormalized shortcuts where justified."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is the main goal of normalization?",
        "options": [
          "Increase data redundancy",
          "Reduce redundancy and improve data integrity",
          "Make queries slower",
          "Remove all relationships between tables"
        ],
        "correctIndex": 1,
        "explanation": "Normalization organizes data to minimize duplication and inconsistency."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What problem does normalization primarily prevent?",
        "options": [
          "Slow internet speeds",
          "Update anomalies from duplicated data",
          "Too many tables",
          "SQL syntax errors"
        ],
        "correctIndex": 1,
        "explanation": "Duplicated data can become inconsistent when updated in only some places \u2014 normalization prevents this."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What are 'normal forms' in the context of normalization?",
        "options": [
          "Types of SQL syntax",
          "A series of progressive rules for organizing data (1NF, 2NF, 3NF, etc.)",
          "A type of index",
          "A backup strategy"
        ],
        "correctIndex": 1,
        "explanation": "Normal forms are sequential design guidelines for reducing redundancy."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can normalization ever hurt performance?",
        "options": [
          "No, never",
          "Yes, over-normalization can require many joins",
          "Only in old MySQL versions",
          "Only for small tables"
        ],
        "correctIndex": 1,
        "explanation": "Excessive normalization can increase the number of joins needed for common queries."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What's an example of data that normalization would separate out?",
        "options": [
          "A single unique product_id",
          "Repeated customer details copied into every order row",
          "A well-designed foreign key",
          "An index on a primary key"
        ],
        "correctIndex": 1,
        "explanation": "Repeated data across rows is exactly what normalization aims to eliminate."
      }
    ]
  },
  {
    "id": 72,
    "title": "1NF",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "First Normal Form (1NF) requires that each column holds only atomic (indivisible) values, and each row is unique. No column should store multiple values, like a comma-separated list, in a single cell.",
    "realLifeExample": "A 'students' table with a column storing phone_numbers = '9876543210, 9123456789' violates 1NF \u2014 that single cell holds two separate values that should be split into their own rows or a separate table.",
    "syntax": "-- Violates 1NF:\n-- student_id | phones\n-- 1          | 9876543210, 9123456789\n\n-- 1NF-compliant:\nCREATE TABLE student_phones (\n  student_id INT,\n  phone VARCHAR(15)\n);",
    "examples": [
      {
        "sql": "-- 1NF-compliant structure allows clean querying:\nSELECT * FROM student_phones WHERE student_id = 1;",
        "output": "student_id | phone\n-----------|------------\n1          | 9876543210\n1          | 9123456789",
        "explanation": "Each phone number now occupies its own row, making the data atomic and much easier to search, filter, or count accurately."
      }
    ],
    "importantPoints": [
      "1NF requires atomic values \u2014 no lists, arrays, or multiple values crammed into a single column.",
      "1NF also requires that each row be uniquely identifiable, typically via a primary key.",
      "Violating 1NF makes searching, filtering, and aggregating data unreliable and error-prone."
    ],
    "commonMistakes": [
      {
        "wrong": "Storing tags = 'sql, database, mysql' in a single column",
        "correct": "Creating a separate 'product_tags' table with one tag per row",
        "why": "A comma-separated list inside one column violates atomicity, making it very difficult to search for a single tag reliably using standard SQL WHERE conditions."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Identify why a column storing 'red, blue, green' for product colors violates 1NF.",
        "difficulty": "Easy",
        "hint": "Think about atomicity \u2014 one value per cell."
      },
      {
        "text": "Redesign a students table where 'subjects' stores a comma-separated list, to comply with 1NF.",
        "difficulty": "Medium",
        "hint": "Create a separate related table for subjects."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does First Normal Form (1NF) require?",
        "answer": "1NF requires that every column contains only atomic (indivisible) values \u2014 no lists, arrays, or multiple values in a single cell \u2014 and that each row in the table is uniquely identifiable."
      },
      {
        "question": "Why does storing a comma-separated list in one column violate 1NF, and why is it a problem?",
        "answer": "It violates 1NF's atomicity rule because that single cell actually contains multiple distinct values combined together. This is a problem because standard SQL operations like WHERE, JOIN, and aggregate functions are designed to work with one discrete value per cell, making comma-separated data unreliable to search, filter, count, or join correctly."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is the key requirement of 1NF?",
        "options": [
          "Every column must be a number",
          "Every column must hold atomic (single) values",
          "Tables must have foreign keys",
          "Every table must have exactly 3 columns"
        ],
        "correctIndex": 1,
        "explanation": "1NF requires atomic, indivisible column values."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which of these violates 1NF?",
        "options": [
          "A phone column with one number per row",
          "A tags column storing 'sql, mysql, database' in one cell",
          "A price column with decimal values",
          "A name column with text values"
        ],
        "correctIndex": 1,
        "explanation": "Multiple values combined in one cell breaks atomicity."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What else does 1NF require besides atomic values?",
        "options": [
          "Multiple primary keys",
          "Each row must be uniquely identifiable",
          "No foreign keys allowed",
          "All columns must be numeric"
        ],
        "correctIndex": 1,
        "explanation": "1NF also requires unique, identifiable rows."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why is a comma-separated list problematic in SQL?",
        "options": [
          "It's actually fine and commonly recommended",
          "WHERE, JOIN, and aggregates can't reliably work with combined values",
          "SQL doesn't allow commas at all",
          "It makes queries faster"
        ],
        "correctIndex": 1,
        "explanation": "SQL operations expect one discrete value per cell to function correctly."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "How do you fix a 1NF violation with multiple phone numbers per student?",
        "options": [
          "Add more columns like phone1, phone2, phone3",
          "Create a separate related table with one phone per row",
          "Ignore the issue, it's not important",
          "Store them as a single JSON string always"
        ],
        "correctIndex": 1,
        "explanation": "A separate table with one value per row is the standard 1NF fix."
      }
    ]
  },
  {
    "id": 73,
    "title": "2NF",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "Second Normal Form (2NF) builds on 1NF by requiring that every non-key column depends on the ENTIRE primary key, not just part of it. This mainly matters for tables with composite (multi-column) primary keys.",
    "realLifeExample": "An 'order_items' table with a composite key (order_id, product_id) storing product_name would violate 2NF, since product_name depends only on product_id, not on the full composite key.",
    "syntax": "-- Violates 2NF (composite key: order_id, product_id):\n-- order_id | product_id | product_name | quantity\n\n-- 2NF-compliant: move product_name to a separate products table\nCREATE TABLE order_items (\n  order_id INT,\n  product_id INT,\n  quantity INT,\n  PRIMARY KEY (order_id, product_id)\n);",
    "examples": [
      {
        "sql": "SELECT oi.quantity, p.product_name\nFROM order_items oi\nJOIN products p ON oi.product_id = p.product_id;",
        "output": "quantity | product_name\n---------|-------------\n2        | Headphones",
        "explanation": "product_name now lives in its own products table, referenced by product_id \u2014 order_items only stores data that truly depends on the full composite key (order_id + product_id)."
      }
    ],
    "importantPoints": [
      "2NF only applies meaningfully to tables with composite (multi-column) primary keys.",
      "A 'partial dependency' \u2014 where a column depends on only part of the composite key \u2014 violates 2NF.",
      "Fixing a 2NF violation typically means moving the partially-dependent column to its own table."
    ],
    "commonMistakes": [
      {
        "wrong": "Storing product_name in order_items when it only depends on product_id",
        "correct": "Moving product_name to a separate products table, referenced by product_id",
        "why": "Since product_name doesn't depend on the full composite key (order_id + product_id), keeping it in order_items creates redundant, duplicated data across every order containing that product."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Identify a 2NF violation in a table with composite key (student_id, course_id) that also stores teacher_name (which depends only on course_id).",
        "difficulty": "Hard",
        "hint": "Check if teacher_name depends on the full key or just part of it."
      },
      {
        "text": "Fix the identified 2NF violation by redesigning the tables.",
        "difficulty": "Hard",
        "hint": "Move teacher_name to a separate courses or teachers table."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does Second Normal Form (2NF) require, beyond 1NF?",
        "answer": "2NF requires that the table already be in 1NF, and additionally that every non-key column depends on the ENTIRE primary key \u2014 not just part of it. This rule specifically applies to tables with composite (multi-column) primary keys."
      },
      {
        "question": "What is a 'partial dependency' and why does it violate 2NF?",
        "answer": "A partial dependency occurs when a non-key column depends on only PART of a composite primary key, rather than the whole key together. This violates 2NF because it means that column's value could be duplicated unnecessarily across multiple rows that share that partial key value, creating redundancy."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "When does 2NF become relevant?",
        "options": [
          "Only for single-column primary keys",
          "For tables with composite (multi-column) primary keys",
          "Only for tables with no primary key",
          "For every table, always"
        ],
        "correctIndex": 1,
        "explanation": "2NF specifically addresses composite key scenarios."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is a 'partial dependency'?",
        "options": [
          "A column depending on the full composite key",
          "A column depending on only part of a composite key",
          "A foreign key with no matching parent",
          "A column with NULL values"
        ],
        "correctIndex": 1,
        "explanation": "Partial dependency means reliance on just one part of a multi-column key."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "How do you fix a 2NF violation?",
        "options": [
          "Delete the composite key",
          "Move the partially-dependent column to its own table",
          "Add more columns to the same table",
          "Ignore it, it's not important"
        ],
        "correctIndex": 1,
        "explanation": "Separating out partially-dependent data resolves the 2NF violation."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Must a table satisfy 1NF before it can satisfy 2NF?",
        "options": [
          "No, they're independent",
          "Yes, 2NF builds on top of 1NF",
          "Only sometimes",
          "2NF replaces 1NF entirely"
        ],
        "correctIndex": 1,
        "explanation": "Each normal form builds upon the requirements of the previous one."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "In order_items (order_id, product_id, product_name, quantity), which column likely violates 2NF?",
        "options": [
          "quantity",
          "product_name",
          "order_id",
          "product_id"
        ],
        "correctIndex": 1,
        "explanation": "product_name depends only on product_id, not the full composite key."
      }
    ]
  },
  {
    "id": 74,
    "title": "3NF",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "Third Normal Form (3NF) builds on 2NF by requiring that non-key columns depend ONLY on the primary key, and not on other non-key columns (eliminating what's called a 'transitive dependency').",
    "realLifeExample": "An 'employees' table storing both department_id and department_name violates 3NF, since department_name actually depends on department_id (a non-key column), not directly on employee_id (the primary key).",
    "syntax": "-- Violates 3NF:\n-- employee_id | name | department_id | department_name\n\n-- 3NF-compliant: separate departments table\nCREATE TABLE departments (department_id INT PRIMARY KEY, department_name VARCHAR(100));\nCREATE TABLE employees (employee_id INT PRIMARY KEY, name VARCHAR(100), department_id INT, FOREIGN KEY (department_id) REFERENCES departments(department_id));",
    "examples": [
      {
        "sql": "SELECT e.name, d.department_name\nFROM employees e\nJOIN departments d ON e.department_id = d.department_id;",
        "output": "name  | department_name\n------|------------------\nAman  | Engineering",
        "explanation": "department_name is now stored once in 'departments' and looked up via department_id, removing the transitive dependency from the employees table."
      }
    ],
    "importantPoints": [
      "A 'transitive dependency' means a non-key column depends on another non-key column, rather than directly on the primary key.",
      "3NF is often considered the practical 'gold standard' for most everyday database designs \u2014 many production databases stop normalizing here.",
      "Fixing a 3NF violation involves moving the transitively-dependent column to its own table, referenced by a foreign key."
    ],
    "commonMistakes": [
      {
        "wrong": "Storing department_name directly in employees alongside department_id",
        "correct": "Moving department_name to a separate departments table, referenced by department_id",
        "why": "Since department_name depends on department_id (not directly on employee_id), keeping it in employees duplicates the department name across every employee in that department."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Identify a 3NF violation in a table storing student_id, student_name, city, and zip_code (where city depends on zip_code).",
        "difficulty": "Hard",
        "hint": "Check if city depends on the primary key or on zip_code instead."
      },
      {
        "text": "Fix the identified 3NF violation by creating an appropriate additional table.",
        "difficulty": "Hard",
        "hint": "Move zip_code and city to a separate location-related table."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does Third Normal Form (3NF) require, beyond 2NF?",
        "answer": "3NF requires that the table already satisfy 2NF, and additionally that every non-key column depends ONLY on the primary key directly \u2014 not on any other non-key column. This eliminates 'transitive dependencies', where one non-key column's value determines another non-key column's value."
      },
      {
        "question": "What is a transitive dependency, and how do you resolve it?",
        "answer": "A transitive dependency exists when a non-key column depends on another non-key column rather than depending directly on the primary key \u2014 for example, department_name depending on department_id, which itself is just a regular column in the employees table. You resolve it by moving the transitively-dependent column (department_name) into its own table (departments), linked back via a foreign key."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does 3NF eliminate?",
        "options": [
          "Foreign keys",
          "Transitive dependencies between non-key columns",
          "Primary keys",
          "All relationships"
        ],
        "correctIndex": 1,
        "explanation": "3NF removes dependencies where one non-key column determines another."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is a transitive dependency?",
        "options": [
          "A column depending directly on the primary key",
          "A non-key column depending on another non-key column",
          "A foreign key referencing itself",
          "A composite primary key"
        ],
        "correctIndex": 1,
        "explanation": "Transitive dependency means indirect reliance through another non-key column."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "In employees (employee_id, name, department_id, department_name), what's the 3NF violation?",
        "options": [
          "name depends on employee_id",
          "department_name depends on department_id, not employee_id directly",
          "employee_id isn't unique",
          "There is no violation"
        ],
        "correctIndex": 1,
        "explanation": "department_name should depend on the primary key, not on department_id."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Is 3NF often considered sufficient for many practical database designs?",
        "options": [
          "No, you must always go further",
          "Yes, it's a common practical stopping point",
          "3NF is rarely used in practice",
          "3NF is the same as 1NF"
        ],
        "correctIndex": 1,
        "explanation": "Many production systems normalize up to 3NF and stop there."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "How do you fix a 3NF violation?",
        "options": [
          "Delete the transitively dependent column entirely",
          "Move it to its own table, linked by foreign key",
          "Add it to the primary key",
          "Ignore it if the table is small"
        ],
        "correctIndex": 1,
        "explanation": "Relocating the dependent data to its own table resolves the transitive dependency."
      }
    ]
  },
  {
    "id": 75,
    "title": "Denormalization",
    "level": "Intermediate",
    "category": "Database Design",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "Denormalization is the deliberate process of introducing some redundancy back into a normalized database, typically to improve read performance by reducing the number of joins needed for common queries.",
    "realLifeExample": "A news website might denormalize by storing an author_name directly in the articles table (alongside author_id) so displaying article listings doesn't require joining to the authors table for every single page view.",
    "syntax": "-- Normalized (requires a JOIN every time):\nSELECT a.title, u.name FROM articles a JOIN authors u ON a.author_id = u.author_id;\n\n-- Denormalized (author_name duplicated directly in articles):\nSELECT title, author_name FROM articles;",
    "examples": [
      {
        "sql": "SELECT title, author_name FROM articles WHERE article_id = 10;",
        "output": "title          | author_name\n---------------|-------------\nSQL Basics     | Shubham Narware",
        "explanation": "Because author_name is duplicated directly in the articles table, this simple query avoids needing a JOIN entirely, which can be significantly faster for very high-traffic read operations."
      }
    ],
    "importantPoints": [
      "Denormalization trades some data redundancy and update complexity for improved read performance.",
      "It should be a deliberate, informed decision made after normalizing first \u2014 not a shortcut to skip proper design.",
      "Denormalized data requires extra care to keep in sync (e.g., updating author_name in both authors AND every denormalized articles row if it changes)."
    ],
    "commonMistakes": [
      {
        "wrong": "Denormalizing a database from the very start, before understanding real query patterns",
        "correct": "Normalizing properly first, then selectively denormalizing specific columns based on measured, real performance needs",
        "why": "Premature denormalization without evidence of a real performance problem often introduces unnecessary redundancy and sync complexity without any actual benefit."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Identify a column you might denormalize in a heavily-read 'products' listing page that normally requires a join to 'categories'.",
        "difficulty": "Medium",
        "hint": "Think about category_name being duplicated directly in products."
      },
      {
        "text": "Explain the tradeoff of denormalizing author_name into an articles table.",
        "difficulty": "Medium",
        "hint": "Consider what happens if an author changes their name."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is denormalization and why would you use it?",
        "answer": "Denormalization is the intentional process of adding some redundant data back into an otherwise normalized database, typically done to improve read performance by reducing the number of JOINs required for frequently-run queries \u2014 especially valuable in high-traffic, read-heavy systems."
      },
      {
        "question": "What is the main tradeoff involved in denormalization?",
        "answer": "The main tradeoff is between read performance and write complexity/data consistency. Denormalized data is faster to read (fewer joins), but requires extra care to keep all duplicated copies in sync whenever the source data changes, increasing the risk of inconsistency if updates are missed."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is the main goal of denormalization?",
        "options": [
          "Eliminate all redundancy",
          "Improve read performance by reducing joins",
          "Make writes faster at all costs",
          "Remove primary keys"
        ],
        "correctIndex": 1,
        "explanation": "Denormalization trades some redundancy for faster reads."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is the main tradeoff of denormalization?",
        "options": [
          "No tradeoff exists",
          "Increased redundancy and risk of inconsistency",
          "Slower read queries",
          "Loss of primary keys"
        ],
        "correctIndex": 1,
        "explanation": "Denormalization risks data getting out of sync across duplicated copies."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "When should denormalization typically be considered?",
        "options": [
          "Before any normalization is done",
          "After normalizing, based on real measured performance needs",
          "Never, it's always a bad idea",
          "Only for tiny databases"
        ],
        "correctIndex": 1,
        "explanation": "Denormalization should be a deliberate, evidence-based decision made after normalizing."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What kind of systems commonly benefit from denormalization?",
        "options": [
          "Systems with almost no read traffic",
          "High-traffic, read-heavy systems",
          "Systems that never update data",
          "Systems with only one table"
        ],
        "correctIndex": 1,
        "explanation": "Read-heavy systems benefit most from reduced join overhead."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "If you denormalize author_name into articles, what extra care is needed?",
        "options": [
          "None, it's automatic",
          "Keeping it in sync if the author's name changes in the authors table",
          "Nothing, denormalized data never changes",
          "Deleting the authors table entirely"
        ],
        "correctIndex": 1,
        "explanation": "Duplicated data must be manually kept consistent across all copies."
      }
    ]
  },
  {
    "id": 76,
    "title": "Subqueries",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Medium",
    "estMinutes": 9,
    "concept": "A subquery is a query nested inside another query, used to compute an intermediate result that the outer query then uses. Subqueries can appear in SELECT, WHERE, or FROM clauses.",
    "realLifeExample": "An HR system finds employees earning more than the company average using a subquery to first calculate that average, then comparing each employee's salary against it.",
    "syntax": "SELECT columns FROM table_name\nWHERE column_name (=|IN|>|<) (SELECT column_name FROM other_table WHERE condition);",
    "examples": [
      {
        "sql": "SELECT name, salary FROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);",
        "output": "name  | salary\n------|-------\nRiya  | 75000",
        "explanation": "The inner query calculates the average salary first; the outer query then returns only employees earning more than that value."
      }
    ],
    "importantPoints": [
      "A subquery in parentheses always runs before the outer query that references it.",
      "Subqueries can return a single value, a single column of values, or a full result set depending on context.",
      "Subqueries can appear in SELECT, FROM, and WHERE clauses, not just WHERE."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE salary > SELECT AVG(salary) FROM employees",
        "correct": "WHERE salary > (SELECT AVG(salary) FROM employees)",
        "why": "A subquery must always be wrapped in parentheses \u2014 omitting them causes a syntax error."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find products priced above the average price using a subquery.",
        "difficulty": "Medium",
        "hint": "Use WHERE price > (SELECT AVG(price) ...)."
      },
      {
        "text": "Find the department with the highest average salary using a subquery.",
        "difficulty": "Advanced",
        "hint": "Combine GROUP BY and a subquery for comparison."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a subquery?",
        "answer": "A subquery is a query nested inside another SQL query, used to produce an intermediate result (a value, list, or table) that the outer query then uses for comparison or further processing."
      },
      {
        "question": "Where can subqueries be used in a SQL statement?",
        "answer": "Subqueries can appear in the SELECT clause (to compute a derived column), the FROM clause (as a derived table), and the WHERE clause (to filter based on a computed value or list)."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is a subquery?",
        "options": [
          "A query with no WHERE clause",
          "A query nested inside another query",
          "A type of JOIN",
          "A stored procedure"
        ],
        "correctIndex": 1,
        "explanation": "Subqueries are nested inside an outer query."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Must a subquery be wrapped in parentheses?",
        "options": [
          "No, it's optional",
          "Yes, always",
          "Only in SELECT clauses",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "Parentheses are required syntax for subqueries."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "In what order do subqueries and outer queries execute?",
        "options": [
          "Outer first, then inner",
          "Inner (subquery) first, then outer",
          "Both simultaneously always",
          "Order doesn't matter"
        ],
        "correctIndex": 1,
        "explanation": "The subquery's result is computed first, then used by the outer query."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Where can subqueries appear?",
        "options": [
          "Only in WHERE",
          "SELECT, FROM, and WHERE clauses",
          "Only in ORDER BY",
          "Only in GROUP BY"
        ],
        "correctIndex": 1,
        "explanation": "Subqueries are flexible and can appear in multiple clause types."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What does 'WHERE salary > (SELECT AVG(salary) FROM employees)' find?",
        "options": [
          "All employees",
          "Employees earning above the average salary",
          "The average salary itself",
          "Employees earning exactly the average"
        ],
        "correctIndex": 1,
        "explanation": "It compares each row's salary to the computed average from the subquery."
      }
    ]
  },
  {
    "id": 77,
    "title": "Correlated Subqueries",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Hard",
    "estMinutes": 10,
    "concept": "A correlated subquery references a column from the outer query, meaning it must be re-evaluated once for every row processed by the outer query, rather than running just once independently.",
    "realLifeExample": "Finding 'employees who earn more than the average salary in their OWN department' requires a correlated subquery, since the average must be recalculated separately for each employee's specific department.",
    "syntax": "SELECT e1.name, e1.salary FROM employees e1\nWHERE e1.salary > (\n  SELECT AVG(e2.salary) FROM employees e2 WHERE e2.department_id = e1.department_id\n);",
    "examples": [
      {
        "sql": "SELECT e1.name, e1.department_id, e1.salary FROM employees e1\nWHERE e1.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e2.department_id = e1.department_id);",
        "output": "name  | department_id | salary\n------|---------------|-------\nAman  | 2             | 65000",
        "explanation": "For each employee row (e1), the subquery recalculates the average salary for that employee's specific department (matching e2.department_id = e1.department_id) before comparing."
      }
    ],
    "importantPoints": [
      "A correlated subquery references a column from the outer query inside its own WHERE clause.",
      "Because it re-runs per outer row, correlated subqueries can be slower than regular (non-correlated) subqueries on large tables.",
      "EXISTS and NOT EXISTS are very commonly used with correlated subqueries."
    ],
    "commonMistakes": [
      {
        "wrong": "Using a regular subquery when the comparison needs to vary per row (like per department)",
        "correct": "Using a correlated subquery that references the outer table's column inside the inner query",
        "why": "A regular (non-correlated) subquery calculates one single value overall, but many real problems need a different comparison value for each outer row \u2014 that's exactly what correlation solves."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find employees earning more than the average salary of their own department using a correlated subquery.",
        "difficulty": "Hard",
        "hint": "Reference the outer table's department_id inside the subquery's WHERE."
      },
      {
        "text": "Explain why a correlated subquery can be slower than a JOIN for the same task on a large table.",
        "difficulty": "Advanced",
        "hint": "Think about how many times the subquery must run."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What makes a subquery 'correlated'?",
        "answer": "A subquery is correlated when it references a column from the outer query within its own WHERE clause (or elsewhere), meaning its result depends on the specific row currently being processed by the outer query, forcing it to be re-evaluated once per outer row."
      },
      {
        "question": "Why can correlated subqueries be slower than regular subqueries or JOINs?",
        "answer": "Because a correlated subquery must re-execute once for every row the outer query processes (rather than running just once), it can be significantly less efficient than an equivalent JOIN on large tables, where the database can often use more optimized join algorithms and indexing strategies."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What defines a correlated subquery?",
        "options": [
          "It runs completely independently of the outer query",
          "It references a column from the outer query",
          "It never uses WHERE",
          "It always returns multiple rows"
        ],
        "correctIndex": 1,
        "explanation": "Correlation means referencing the outer query's row-specific data."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How many times does a correlated subquery typically execute?",
        "options": [
          "Once, like a regular subquery",
          "Once per row processed by the outer query",
          "Exactly twice",
          "Zero times"
        ],
        "correctIndex": 1,
        "explanation": "It re-evaluates for each outer row due to the row-specific reference."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which problem requires a correlated subquery rather than a simple one?",
        "options": [
          "Finding the single overall average salary",
          "Finding employees above their OWN department's average salary",
          "Counting all employees",
          "Listing all department names"
        ],
        "correctIndex": 1,
        "explanation": "Per-department comparison needs row-specific recalculation."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why might correlated subqueries be slower than JOINs for large tables?",
        "options": [
          "They're always faster, not slower",
          "They re-execute per row instead of running once",
          "JOINs can't be used with subqueries",
          "SQL doesn't optimize subqueries at all"
        ],
        "correctIndex": 1,
        "explanation": "Repeated execution per row is inherently less efficient at scale."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which operators are commonly paired with correlated subqueries?",
        "options": [
          "ORDER BY, GROUP BY",
          "EXISTS, NOT EXISTS",
          "UNION, UNION ALL",
          "LIMIT, OFFSET"
        ],
        "correctIndex": 1,
        "explanation": "EXISTS/NOT EXISTS frequently rely on correlated subqueries."
      }
    ]
  },
  {
    "id": 78,
    "title": "EXISTS",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "EXISTS checks whether a subquery returns ANY rows at all, returning true or false \u2014 it doesn't care about the actual row values, only whether at least one match exists.",
    "realLifeExample": "An e-commerce system finds customers who have placed at least one order using WHERE EXISTS (subquery checking orders), without needing to know how many orders or any specific order details.",
    "syntax": "SELECT columns FROM table_name t1\nWHERE EXISTS (SELECT 1 FROM other_table t2 WHERE t2.column = t1.column);",
    "examples": [
      {
        "sql": "SELECT name FROM customers c\nWHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);",
        "output": "name\n------\nAman\nRiya",
        "explanation": "For each customer, the subquery checks if any matching order exists; only customers with at least one match are included in the result."
      }
    ],
    "importantPoints": [
      "EXISTS stops checking as soon as it finds one matching row, making it often efficient.",
      "The subquery inside EXISTS conventionally uses SELECT 1 (or SELECT *) since the actual selected value doesn't matter.",
      "EXISTS is typically used with a correlated subquery, referencing the outer table's column."
    ],
    "commonMistakes": [
      {
        "wrong": "SELECT * FROM (SELECT 1 FROM orders WHERE customer_id = 5);  -- misunderstanding what EXISTS returns",
        "correct": "SELECT name FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);",
        "why": "EXISTS itself returns only true/false for filtering \u2014 it should be used inside a WHERE clause of an outer query, not treated as returning actual row data to select."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all customers who have placed at least one order using EXISTS.",
        "difficulty": "Medium",
        "hint": "Use a correlated subquery inside EXISTS."
      },
      {
        "text": "Find all products that have never been ordered using NOT EXISTS.",
        "difficulty": "Medium",
        "hint": "Flip the logic with NOT EXISTS instead."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the EXISTS operator check?",
        "answer": "EXISTS checks whether a subquery returns at least one row, evaluating to true if any match is found and false otherwise \u2014 it doesn't care about the specific values returned, only whether any row exists at all."
      },
      {
        "question": "Why is SELECT 1 commonly used inside an EXISTS subquery instead of SELECT *?",
        "answer": "Since EXISTS only cares whether any row is returned (not the actual column values), using SELECT 1 is a common convention that signals this intent clearly and can be marginally more efficient, since the database doesn't need to fetch full column data."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does EXISTS return?",
        "options": [
          "The matching rows themselves",
          "True or false, based on whether any row matches",
          "The count of matching rows",
          "NULL if no match is found"
        ],
        "correctIndex": 1,
        "explanation": "EXISTS is a boolean check for row existence."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is conventionally selected inside an EXISTS subquery?",
        "options": [
          "All columns with SELECT *",
          "SELECT 1 (or similar placeholder)",
          "Only the primary key",
          "Nothing, it must be empty"
        ],
        "correctIndex": 1,
        "explanation": "SELECT 1 signals that only existence matters, not actual values."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Does EXISTS typically use a correlated subquery?",
        "options": [
          "No, never",
          "Yes, typically referencing the outer table",
          "Only in older MySQL versions",
          "Only with JOIN"
        ],
        "correctIndex": 1,
        "explanation": "EXISTS commonly pairs with correlated subqueries referencing the outer row."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What is an advantage of EXISTS in terms of performance?",
        "options": [
          "It always scans the entire table",
          "It can stop as soon as one match is found",
          "It's always slower than JOIN",
          "It requires no subquery"
        ],
        "correctIndex": 1,
        "explanation": "EXISTS can short-circuit once any matching row is found."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "How would you find products that have NEVER been ordered?",
        "options": [
          "WHERE EXISTS (...)",
          "WHERE NOT EXISTS (...)",
          "WHERE IN (...)",
          "WHERE ALL (...)"
        ],
        "correctIndex": 1,
        "explanation": "NOT EXISTS finds rows with zero matches in the subquery."
      }
    ]
  },
  {
    "id": 79,
    "title": "NOT EXISTS",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "NOT EXISTS is the logical opposite of EXISTS \u2014 it returns true when a subquery returns NO rows at all, commonly used to find records with no matching relationship.",
    "realLifeExample": "A marketing team finds customers who have NEVER placed an order (to target with a 'come back' promotion) using WHERE NOT EXISTS on a correlated orders subquery.",
    "syntax": "SELECT columns FROM table_name t1\nWHERE NOT EXISTS (SELECT 1 FROM other_table t2 WHERE t2.column = t1.column);",
    "examples": [
      {
        "sql": "SELECT name FROM customers c\nWHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);",
        "output": "name\n-------\nSuresh",
        "explanation": "Suresh has zero matching rows in the orders subquery, so NOT EXISTS evaluates to true and includes him in the result."
      }
    ],
    "importantPoints": [
      "NOT EXISTS is often preferred over NOT IN when NULLs might be present, since NOT IN can behave unexpectedly with NULL values.",
      "Like EXISTS, NOT EXISTS is typically used with a correlated subquery.",
      "NOT EXISTS is a common, reliable way to find 'orphan' records or missing relationships."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE customer_id NOT IN (SELECT customer_id FROM orders)  -- when orders.customer_id can be NULL",
        "correct": "WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)",
        "why": "If the subquery's column contains any NULL values, NOT IN can unexpectedly return zero rows for the entire query \u2014 NOT EXISTS avoids this pitfall entirely."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find all students who are NOT enrolled in any course using NOT EXISTS.",
        "difficulty": "Medium",
        "hint": "Use a correlated subquery against the enrollments table."
      },
      {
        "text": "Explain why NOT EXISTS is generally safer than NOT IN when NULLs could be present.",
        "difficulty": "Advanced",
        "hint": "Think about how NULL comparisons behave in SQL."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does NOT EXISTS check for?",
        "answer": "NOT EXISTS checks whether a subquery returns zero rows \u2014 it evaluates to true when no matching row is found in the subquery, making it ideal for finding records with no corresponding relationship in another table."
      },
      {
        "question": "Why is NOT EXISTS often preferred over NOT IN?",
        "answer": "NOT IN can behave unexpectedly (often returning no rows at all) if the subquery's result set contains any NULL values, due to how SQL's three-valued logic handles NULL comparisons. NOT EXISTS avoids this issue entirely, since it only checks for the presence or absence of matching rows, not value equality."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does NOT EXISTS return true for?",
        "options": [
          "When the subquery returns any row",
          "When the subquery returns zero rows",
          "When the outer query is empty",
          "When a NULL value is found"
        ],
        "correctIndex": 1,
        "explanation": "NOT EXISTS is true only when no matching rows exist."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is NOT EXISTS commonly used to find?",
        "options": [
          "Duplicate rows",
          "Records with no matching relationship (orphans)",
          "The most recent row",
          "The average value"
        ],
        "correctIndex": 1,
        "explanation": "It's ideal for finding missing relationships, like customers without orders."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why might NOT IN behave unexpectedly compared to NOT EXISTS?",
        "options": [
          "NOT IN is always faster",
          "NOT IN can fail silently if the subquery contains NULLs",
          "NOT IN doesn't exist in MySQL",
          "They always behave identically"
        ],
        "correctIndex": 1,
        "explanation": "NULL values in the subquery's result can cause NOT IN to return no rows unexpectedly."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Is NOT EXISTS typically used with a correlated subquery?",
        "options": [
          "No, never",
          "Yes, typically",
          "Only with UNION",
          "Only with GROUP BY"
        ],
        "correctIndex": 1,
        "explanation": "Like EXISTS, NOT EXISTS usually references the outer row for comparison."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Finding customers who have never ordered anything is best done with:",
        "options": [
          "EXISTS",
          "NOT EXISTS",
          "IN",
          "HAVING"
        ],
        "correctIndex": 1,
        "explanation": "NOT EXISTS correctly identifies customers with zero matching order rows."
      }
    ]
  },
  {
    "id": 80,
    "title": "ANY",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Hard",
    "estMinutes": 7,
    "concept": "ANY compares a value to a list of values returned by a subquery, returning true if the comparison holds for AT LEAST ONE value in that list. It's used with comparison operators like >, <, or =.",
    "realLifeExample": "A pricing tool finds products cheaper than ANY item in a competitor's premium line \u2014 meaning cheaper than at least one of those premium prices, not necessarily all of them.",
    "syntax": "SELECT columns FROM table_name\nWHERE column_name > ANY (SELECT column_name FROM other_table WHERE condition);",
    "examples": [
      {
        "sql": "SELECT name, price FROM products\nWHERE price < ANY (SELECT price FROM premium_products);",
        "output": "name        | price\n------------|------\nHeadphones  | 1999",
        "explanation": "This product's price is less than at least one price in the premium_products subquery result \u2014 it doesn't need to be less than all of them."
      }
    ],
    "importantPoints": [
      "'> ANY' means greater than at least the smallest value in the subquery's results.",
      "'= ANY' behaves the same as using IN with a subquery.",
      "ANY is easy to confuse with ALL \u2014 ANY only needs one match, ALL needs every comparison to hold true."
    ],
    "commonMistakes": [
      {
        "wrong": "Assuming '> ANY (subquery)' means greater than every value returned",
        "correct": "Understanding '> ANY (subquery)' means greater than at least one value (effectively, greater than the minimum)",
        "why": "Confusing ANY with ALL is one of the most common mistakes with this operator \u2014 ANY only requires satisfying the condition against at least one row from the subquery."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find employees earning more than ANY employee in the 'Intern' role.",
        "difficulty": "Hard",
        "hint": "Use > ANY with a subquery filtering role = 'Intern'."
      },
      {
        "text": "Explain the difference in results between '> ANY' and '> ALL' using the same subquery.",
        "difficulty": "Advanced",
        "hint": "Think about minimum vs maximum comparisons."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the ANY operator do in a subquery comparison?",
        "answer": "ANY compares a value against a list of values returned by a subquery, returning true if the comparison is satisfied for AT LEAST ONE value in that list \u2014 for example, '> ANY' effectively means greater than the minimum value in the subquery's results."
      },
      {
        "question": "What is the key difference between ANY and ALL?",
        "answer": "ANY requires the comparison to be true for at least one value returned by the subquery (a less strict condition), while ALL requires the comparison to be true for every single value returned by the subquery (a much stricter condition)."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does '> ANY (subquery)' effectively mean?",
        "options": [
          "Greater than every value in the subquery",
          "Greater than at least one value (the minimum) in the subquery",
          "Equal to any value",
          "Less than all values"
        ],
        "correctIndex": 1,
        "explanation": "ANY only requires satisfying the condition against one value."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is the key difference between ANY and ALL?",
        "options": [
          "They are identical",
          "ANY needs one match; ALL needs every comparison to hold",
          "ALL is less strict than ANY",
          "ANY only works with equals"
        ],
        "correctIndex": 1,
        "explanation": "ANY is a looser condition; ALL is stricter, requiring universal truth."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does '= ANY (subquery)' behave like?",
        "options": [
          "NOT IN",
          "IN",
          "EXISTS",
          "BETWEEN"
        ],
        "correctIndex": 1,
        "explanation": "'= ANY' is functionally equivalent to using IN with the same subquery."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "If a subquery returns [10, 20, 30], what does 'price > ANY (...)' require?",
        "options": [
          "price > 30",
          "price > 10 (greater than at least the minimum)",
          "price > 20 (the average)",
          "price equals one of these values"
        ],
        "correctIndex": 1,
        "explanation": "ANY is satisfied if the value exceeds at least the smallest result."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which operators can ANY be combined with?",
        "options": [
          "Only equals (=)",
          "Comparison operators like >, <, =",
          "Only LIKE",
          "Only BETWEEN"
        ],
        "correctIndex": 1,
        "explanation": "ANY works alongside standard comparison operators."
      }
    ]
  },
  {
    "id": 81,
    "title": "ALL",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Hard",
    "estMinutes": 7,
    "concept": "ALL compares a value to a list of values returned by a subquery, returning true only if the comparison holds for EVERY value in that list \u2014 a stricter condition than ANY.",
    "realLifeExample": "A quality control system finds products priced higher than ALL items in a discount clearance subquery \u2014 meaning higher than every single discounted price, not just some.",
    "syntax": "SELECT columns FROM table_name\nWHERE column_name > ALL (SELECT column_name FROM other_table WHERE condition);",
    "examples": [
      {
        "sql": "SELECT name, price FROM products\nWHERE price > ALL (SELECT price FROM clearance_items);",
        "output": "name       | price\n-----------|------\nSmartwatch | 4999",
        "explanation": "This product's price is higher than every single price in the clearance_items subquery \u2014 it must beat the maximum, not just some values."
      }
    ],
    "importantPoints": [
      "'> ALL' effectively means greater than the maximum value returned by the subquery.",
      "'< ALL' effectively means less than the minimum value returned by the subquery.",
      "If the subquery returns zero rows, comparisons using ALL are considered true by default (a subtle edge case worth remembering)."
    ],
    "commonMistakes": [
      {
        "wrong": "Assuming '> ALL (subquery)' means greater than at least one value",
        "correct": "Understanding '> ALL (subquery)' means greater than every single value (effectively, greater than the maximum)",
        "why": "This is the exact reverse mistake of confusing ANY \u2014 ALL is the strict version, requiring the condition to hold against every returned value, not just one."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Find the product priced higher than ALL products in the 'Budget' category.",
        "difficulty": "Hard",
        "hint": "Use > ALL with a subquery filtering category = 'Budget'."
      },
      {
        "text": "Explain what happens with 'value > ALL (subquery)' if the subquery returns zero rows.",
        "difficulty": "Advanced",
        "hint": "Research this specific edge case behavior."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the ALL operator do in a subquery comparison?",
        "answer": "ALL compares a value against a list of values returned by a subquery, returning true only if the comparison holds true for EVERY value in that list \u2014 for example, '> ALL' effectively means greater than the maximum value in the subquery's results."
      },
      {
        "question": "What is a tricky edge case with ALL when the subquery returns no rows?",
        "answer": "If the subquery inside an ALL comparison returns zero rows, the ALL condition is considered vacuously true by default \u2014 this is a subtle SQL logic edge case that can produce unexpected results if the subquery unexpectedly returns an empty set."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does '> ALL (subquery)' effectively mean?",
        "options": [
          "Greater than at least one value",
          "Greater than every value (the maximum)",
          "Equal to all values",
          "Less than the minimum"
        ],
        "correctIndex": 1,
        "explanation": "ALL requires the condition to hold against every value returned."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which is stricter: ANY or ALL?",
        "options": [
          "ANY is stricter",
          "ALL is stricter",
          "They are equally strict",
          "Neither is stricter"
        ],
        "correctIndex": 1,
        "explanation": "ALL demands universal satisfaction across every subquery result."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does '< ALL (subquery)' effectively mean?",
        "options": [
          "Less than the maximum value",
          "Less than the minimum value",
          "Equal to the minimum",
          "Greater than the maximum"
        ],
        "correctIndex": 1,
        "explanation": "It must be less than every value, meaning less than even the smallest one."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What happens if the ALL subquery returns zero rows?",
        "options": [
          "The condition is always false",
          "The condition is considered true by default",
          "It causes an error",
          "MySQL returns NULL for the whole query"
        ],
        "correctIndex": 1,
        "explanation": "An empty subquery result makes ALL comparisons vacuously true \u2014 a known edge case."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Finding a product priced above every single item in a category requires:",
        "options": [
          "> ANY",
          "> ALL",
          "= ANY",
          "IN"
        ],
        "correctIndex": 1,
        "explanation": "ALL ensures the comparison holds against every value in the subquery."
      }
    ]
  },
  {
    "id": 82,
    "title": "CTE",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Medium",
    "estMinutes": 9,
    "concept": "A Common Table Expression (CTE) is a named, temporary result set defined using WITH, that you can reference within a single query \u2014 making complex queries more readable and modular than deeply nested subqueries.",
    "realLifeExample": "A financial report calculating 'monthly totals' and then 'month-over-month growth' from those totals can use a CTE to name and reuse the monthly totals calculation cleanly, instead of repeating the same subquery twice.",
    "syntax": "WITH cte_name AS (\n  SELECT columns FROM table_name WHERE condition\n)\nSELECT * FROM cte_name;",
    "examples": [
      {
        "sql": "WITH high_earners AS (\n  SELECT name, salary FROM employees WHERE salary > 60000\n)\nSELECT * FROM high_earners WHERE name LIKE 'A%';",
        "output": "name  | salary\n------|-------\nAman  | 65000",
        "explanation": "The CTE 'high_earners' is defined first and can then be queried just like a regular table for the rest of that single SQL statement."
      }
    ],
    "importantPoints": [
      "A CTE only exists for the duration of the single query it's attached to \u2014 it isn't saved permanently like a view.",
      "CTEs make deeply nested subqueries far more readable by giving intermediate results a clear, named structure.",
      "You can define multiple CTEs in one WITH clause, separated by commas, and even have later CTEs reference earlier ones."
    ],
    "commonMistakes": [
      {
        "wrong": "Nesting three or four subqueries directly inside each other for a complex report",
        "correct": "Breaking the logic into named, sequential CTEs using WITH",
        "why": "Deeply nested subqueries become very hard to read and debug \u2014 CTEs let you name each logical step, dramatically improving clarity for complex queries."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Rewrite a query with a nested subquery calculating average salary as a CTE instead.",
        "difficulty": "Medium",
        "hint": "Move the subquery into a WITH clause."
      },
      {
        "text": "Create two CTEs in one query: one for total sales per region, another that finds the top region.",
        "difficulty": "Advanced",
        "hint": "Chain multiple CTEs together, separated by commas."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a CTE (Common Table Expression)?",
        "answer": "A CTE is a named, temporary result set defined using the WITH keyword, which can be referenced like a table within the same SQL statement. It exists only for the duration of that single query and helps make complex, multi-step logic more readable."
      },
      {
        "question": "How do CTEs improve readability compared to nested subqueries?",
        "answer": "CTEs let you break a complex query into clearly named, sequential logical steps (e.g., WITH monthly_totals AS (...), WITH growth AS (...)), rather than nesting subqueries several levels deep inside each other, which becomes very difficult to read, debug, and maintain."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What keyword defines a CTE?",
        "options": [
          "CREATE",
          "WITH",
          "TEMP",
          "AS TABLE"
        ],
        "correctIndex": 1,
        "explanation": "CTEs are defined using the WITH keyword."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How long does a CTE persist?",
        "options": [
          "Permanently, like a table",
          "Only for the duration of the single query it's attached to",
          "Until the database restarts",
          "Forever, like a view"
        ],
        "correctIndex": 1,
        "explanation": "CTEs are temporary and scoped to one query execution."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What is a key benefit of using CTEs?",
        "options": [
          "They make queries run in parallel",
          "They improve readability over deeply nested subqueries",
          "They automatically create indexes",
          "They replace the need for JOINs"
        ],
        "correctIndex": 1,
        "explanation": "CTEs organize complex logic into clear, named steps."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can you define multiple CTEs in one WITH clause?",
        "options": [
          "No, only one per query",
          "Yes, separated by commas",
          "Only up to two",
          "Only with UNION"
        ],
        "correctIndex": 1,
        "explanation": "Multiple CTEs can be chained together, separated by commas."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Can a later CTE reference an earlier CTE in the same WITH clause?",
        "options": [
          "No, never",
          "Yes, that's a common pattern",
          "Only in stored procedures",
          "Only if using a subquery instead"
        ],
        "correctIndex": 1,
        "explanation": "Sequential CTEs can build on each other within the same query."
      }
    ]
  },
  {
    "id": 83,
    "title": "Recursive CTE",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Hard",
    "estMinutes": 10,
    "concept": "A recursive CTE is a CTE that references itself, allowing you to work with hierarchical or sequential data \u2014 like organizational charts, category trees, or generating a sequence of numbers.",
    "realLifeExample": "A company's org chart, where every employee has a manager who is also an employee, can be fully unrolled (showing each employee's entire management chain) using a recursive CTE.",
    "syntax": "WITH RECURSIVE cte_name AS (\n  SELECT ... -- base case (anchor)\n  UNION ALL\n  SELECT ... FROM cte_name -- recursive case, references itself\n)\nSELECT * FROM cte_name;",
    "examples": [
      {
        "sql": "WITH RECURSIVE org_chain AS (\n  SELECT employee_id, name, manager_id, 1 AS level FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.employee_id, e.name, e.manager_id, oc.level + 1\n  FROM employees e JOIN org_chain oc ON e.manager_id = oc.employee_id\n)\nSELECT * FROM org_chain;",
        "output": "employee_id | name  | manager_id | level\n------------|-------|------------|------\n1           | Priya | NULL       | 1\n2           | Aman  | 1          | 2",
        "explanation": "The base case starts with top-level employees (no manager), then the recursive case repeatedly joins back to org_chain itself to find each next level down the hierarchy."
      }
    ],
    "importantPoints": [
      "A recursive CTE has two parts: the base case (anchor query) and the recursive case, joined by UNION ALL.",
      "The recursive case must reference the CTE's own name, which is what makes it 'recursive'.",
      "MySQL requires the RECURSIVE keyword explicitly: WITH RECURSIVE cte_name AS (...)."
    ],
    "commonMistakes": [
      {
        "wrong": "WITH org_chain AS (... UNION ALL SELECT ... FROM org_chain ...)  -- missing RECURSIVE keyword",
        "correct": "WITH RECURSIVE org_chain AS (... UNION ALL SELECT ... FROM org_chain ...)",
        "why": "MySQL requires the explicit RECURSIVE keyword for a CTE to be allowed to reference itself \u2014 omitting it causes an error."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a recursive CTE to generate a sequence of numbers from 1 to 10.",
        "difficulty": "Hard",
        "hint": "Base case: SELECT 1; Recursive case: add 1 while less than 10."
      },
      {
        "text": "Write a recursive CTE to find all subcategories under a top-level category in a self-referencing 'categories' table.",
        "difficulty": "Advanced",
        "hint": "Follow the same base case + recursive case pattern as an org chart."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a recursive CTE and when would you use one?",
        "answer": "A recursive CTE is a Common Table Expression that references itself, allowing you to repeatedly process hierarchical or sequential data until a stopping condition is reached. It's used for problems like organizational charts, category trees, bill-of-materials structures, or generating sequences of numbers/dates."
      },
      {
        "question": "What are the two essential parts of a recursive CTE?",
        "answer": "The base case (or anchor query), which provides the starting point(s) for the recursion, and the recursive case, which references the CTE's own name and is combined with the base case using UNION ALL, repeatedly building on the previous iteration's results until no more rows are produced."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What makes a CTE 'recursive'?",
        "options": [
          "It uses UNION instead of UNION ALL",
          "The recursive case references the CTE's own name",
          "It has more than one column",
          "It's defined without WITH"
        ],
        "correctIndex": 1,
        "explanation": "Self-reference in the recursive case defines recursion."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What are the two parts of a recursive CTE?",
        "options": [
          "SELECT and WHERE",
          "Base case (anchor) and recursive case",
          "INSERT and UPDATE",
          "JOIN and GROUP BY"
        ],
        "correctIndex": 1,
        "explanation": "A base case starts it; the recursive case builds on prior results."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What keyword must MySQL use for a recursive CTE?",
        "options": [
          "WITH",
          "WITH RECURSIVE",
          "RECURSIVE ONLY",
          "LOOP"
        ],
        "correctIndex": 1,
        "explanation": "MySQL requires the explicit RECURSIVE keyword."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What combines the base case and recursive case?",
        "options": [
          "JOIN",
          "UNION ALL",
          "GROUP BY",
          "HAVING"
        ],
        "correctIndex": 1,
        "explanation": "UNION ALL combines the anchor and recursive query results."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which problem is a classic use case for recursive CTEs?",
        "options": [
          "Calculating a simple SUM",
          "Traversing an organizational hierarchy",
          "Filtering rows with WHERE",
          "Sorting a result set"
        ],
        "correctIndex": 1,
        "explanation": "Hierarchical data like org charts is the textbook recursive CTE use case."
      }
    ]
  },
  {
    "id": 84,
    "title": "Window Functions",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Hard",
    "estMinutes": 10,
    "concept": "Window functions perform calculations across a set of rows related to the current row \u2014 without collapsing those rows into a single output row, unlike GROUP BY aggregates. They use the OVER() clause.",
    "realLifeExample": "A sales dashboard showing 'each salesperson's total alongside their rank compared to everyone else' uses window functions, since it needs both individual row details AND an aggregate comparison at the same time.",
    "syntax": "SELECT columns,\n  AGG_FUNCTION() OVER (PARTITION BY column ORDER BY column) AS result\nFROM table_name;",
    "examples": [
      {
        "sql": "SELECT name, department, salary,\n  AVG(salary) OVER (PARTITION BY department) AS dept_avg\nFROM employees;",
        "output": "name  | department  | salary | dept_avg\n------|-------------|--------|----------\nAman  | Sales       | 50000  | 55000\nRiya  | Sales       | 60000  | 55000",
        "explanation": "Unlike GROUP BY, every individual employee row is still shown, but each also displays their department's average salary alongside it."
      }
    ],
    "importantPoints": [
      "Window functions use OVER() and don't collapse rows the way GROUP BY does.",
      "PARTITION BY divides rows into groups for the window calculation, similar to GROUP BY but without merging rows.",
      "Common window functions include ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, and the same aggregates (SUM, AVG) used with OVER()."
    ],
    "commonMistakes": [
      {
        "wrong": "Using GROUP BY when you need both individual rows AND an aggregate value together",
        "correct": "Using a window function with OVER() to keep individual rows while adding aggregate context",
        "why": "GROUP BY collapses multiple rows into one summary row per group, losing individual row detail \u2014 window functions solve exactly this limitation."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Show each employee's salary alongside their department's total salary using a window function.",
        "difficulty": "Hard",
        "hint": "Use SUM(salary) OVER (PARTITION BY department)."
      },
      {
        "text": "Explain the difference between GROUP BY and a window function with PARTITION BY.",
        "difficulty": "Advanced",
        "hint": "Focus on whether individual rows are preserved or collapsed."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the key difference between window functions and GROUP BY?",
        "answer": "GROUP BY collapses multiple rows into a single summary row per group, losing individual row-level detail. Window functions, using OVER(), calculate aggregate or ranking values across a set of related rows WITHOUT collapsing them \u2014 every individual row remains visible in the output, now enriched with the calculated window value."
      },
      {
        "question": "What does PARTITION BY do inside a window function?",
        "answer": "PARTITION BY divides the result set into groups (partitions) for the purpose of the window calculation, similar to how GROUP BY groups rows \u2014 but unlike GROUP BY, PARTITION BY doesn't merge or collapse the underlying rows; each row still appears individually, just with the partition-level calculation attached."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is the key difference between window functions and GROUP BY?",
        "options": [
          "They are identical",
          "Window functions keep individual rows; GROUP BY collapses them",
          "GROUP BY is always faster",
          "Window functions can't use aggregates"
        ],
        "correctIndex": 1,
        "explanation": "Window functions preserve row-level detail while adding aggregate context."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What clause is required for a window function?",
        "options": [
          "GROUP BY",
          "OVER()",
          "HAVING",
          "WHERE"
        ],
        "correctIndex": 1,
        "explanation": "OVER() defines the window function's behavior and scope."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does PARTITION BY do in a window function?",
        "options": [
          "Deletes rows outside the partition",
          "Divides rows into groups for the calculation, without collapsing them",
          "Sorts the entire table permanently",
          "Creates a new table"
        ],
        "correctIndex": 1,
        "explanation": "PARTITION BY groups rows for the window calculation while keeping them all visible."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which of these is a common window function?",
        "options": [
          "WHERE",
          "ROW_NUMBER()",
          "GROUP BY",
          "HAVING"
        ],
        "correctIndex": 1,
        "explanation": "ROW_NUMBER is a classic window function."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Can regular aggregate functions like SUM or AVG be used as window functions?",
        "options": [
          "No, never",
          "Yes, when combined with OVER()",
          "Only COUNT can be used this way",
          "Only in subqueries"
        ],
        "correctIndex": 1,
        "explanation": "Standard aggregates become window functions when paired with OVER()."
      }
    ]
  },
  {
    "id": 85,
    "title": "ROW_NUMBER",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "ROW_NUMBER() assigns a unique, sequential integer to each row within a result set (or within each partition), starting at 1, based on a specified ORDER BY.",
    "realLifeExample": "An e-commerce site showing 'page 2 of search results' uses ROW_NUMBER() to number every product sequentially, then filters for rows 11-20 to display exactly that page.",
    "syntax": "SELECT columns,\n  ROW_NUMBER() OVER (PARTITION BY column ORDER BY column) AS row_num\nFROM table_name;",
    "examples": [
      {
        "sql": "SELECT name, department, salary,\n  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rank_in_dept\nFROM employees;",
        "output": "name  | department | salary | rank_in_dept\n------|------------|--------|-------------\nRiya  | Sales      | 70000  | 1\nAman  | Sales      | 60000  | 2",
        "explanation": "Within the Sales department, employees are numbered 1, 2, 3... in order of decreasing salary \u2014 the highest earner in each department gets rank_in_dept = 1."
      }
    ],
    "importantPoints": [
      "ROW_NUMBER() always produces unique, sequential integers \u2014 even for tied values, it won't repeat a number.",
      "Without PARTITION BY, ROW_NUMBER() numbers the entire result set as one single sequence.",
      "ROW_NUMBER() combined with a WHERE-like filter (via a CTE or subquery) is a common technique for 'top N per group' queries."
    ],
    "commonMistakes": [
      {
        "wrong": "Expecting ROW_NUMBER() to give ties the same number",
        "correct": "Using RANK() or DENSE_RANK() instead, if ties should share the same number",
        "why": "ROW_NUMBER() always assigns strictly increasing unique numbers, even to rows with identical values \u2014 if tied values should share a rank, RANK() or DENSE_RANK() is the correct choice instead."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Number every employee overall by salary, highest first, using ROW_NUMBER().",
        "difficulty": "Medium",
        "hint": "Use ROW_NUMBER() OVER (ORDER BY salary DESC)."
      },
      {
        "text": "Find the top 1 highest-paid employee in each department using ROW_NUMBER() and a CTE.",
        "difficulty": "Hard",
        "hint": "Wrap the ROW_NUMBER() query in a CTE, then filter WHERE rank_in_dept = 1."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does ROW_NUMBER() do?",
        "answer": "ROW_NUMBER() assigns a unique, sequential integer (starting from 1) to each row in a result set, based on the specified ORDER BY \u2014 and if PARTITION BY is used, the numbering restarts at 1 for each partition."
      },
      {
        "question": "How does ROW_NUMBER() handle tied values, and how does that differ from RANK()?",
        "answer": "ROW_NUMBER() always assigns strictly sequential, unique numbers even to rows with identical values in the ORDER BY column \u2014 it never produces duplicate numbers. RANK(), by contrast, gives tied rows the same rank number, then skips the next rank number(s) accordingly."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does ROW_NUMBER() assign to each row?",
        "options": [
          "A random number",
          "A unique, sequential integer starting from 1",
          "The row's primary key",
          "A percentage"
        ],
        "correctIndex": 1,
        "explanation": "ROW_NUMBER produces strictly sequential unique numbers."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What happens with ROW_NUMBER() when PARTITION BY is used?",
        "options": [
          "Numbering continues across all partitions",
          "Numbering restarts at 1 for each partition",
          "It causes an error",
          "PARTITION BY is ignored"
        ],
        "correctIndex": 1,
        "explanation": "Each partition gets its own independent 1-based sequence."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Does ROW_NUMBER() ever assign the same number to tied rows?",
        "options": [
          "Yes, always",
          "No, it's always unique per row",
          "Only in MySQL 8+",
          "Only within a partition"
        ],
        "correctIndex": 1,
        "explanation": "ROW_NUMBER never repeats a number, unlike RANK."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What is a common use case for ROW_NUMBER() combined with a CTE?",
        "options": [
          "Calculating a simple total",
          "Finding the 'top N per group'",
          "Renaming columns",
          "Creating an index"
        ],
        "correctIndex": 1,
        "explanation": "This is the classic top-N-per-group pattern using ROW_NUMBER."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What ORDER BY does inside ROW_NUMBER() OVER (ORDER BY salary DESC)?",
        "options": [
          "Sorts the whole table permanently",
          "Determines the sequence in which numbers are assigned",
          "Filters out low salaries",
          "Groups employees by salary"
        ],
        "correctIndex": 1,
        "explanation": "ORDER BY inside OVER() controls the numbering sequence, not permanent sorting."
      }
    ]
  },
  {
    "id": 86,
    "title": "RANK",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "RANK() assigns a rank to each row within a result set (or partition), giving tied rows the SAME rank, but then skipping subsequent rank numbers accordingly (leaving a gap).",
    "realLifeExample": "A leaderboard for a coding competition uses RANK() so that two students tied for 2nd place both correctly show 'Rank 2', with the next student correctly shown as 'Rank 4' (not 3).",
    "syntax": "SELECT columns,\n  RANK() OVER (PARTITION BY column ORDER BY column) AS rank_value\nFROM table_name;",
    "examples": [
      {
        "sql": "SELECT name, score,\n  RANK() OVER (ORDER BY score DESC) AS rank_value\nFROM competition_results;",
        "output": "name   | score | rank_value\n-------|-------|------------\nAman   | 95    | 1\nRiya   | 90    | 2\nSuresh | 90    | 2\nKavya  | 85    | 4",
        "explanation": "Riya and Suresh are tied at 90 points and both correctly receive rank 2 \u2014 Kavya then receives rank 4, since rank 3 is skipped due to the tie above."
      }
    ],
    "importantPoints": [
      "RANK() leaves gaps in the ranking sequence after ties \u2014 unlike DENSE_RANK(), which does not.",
      "Ties are determined by the ORDER BY clause values being identical.",
      "RANK() is ideal for competition-style leaderboards where skipped ranks after a tie are the expected, standard behavior."
    ],
    "commonMistakes": [
      {
        "wrong": "Using RANK() when you actually need consecutive numbers with no gaps after ties",
        "correct": "Using DENSE_RANK() instead, which doesn't skip numbers after ties",
        "why": "If your use case requires ranks like 1, 2, 2, 3 (no gaps) rather than 1, 2, 2, 4 (with a gap), RANK() is the wrong function \u2014 DENSE_RANK() is designed for that instead."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Rank employees by salary within each department using RANK(), highest salary first.",
        "difficulty": "Medium",
        "hint": "Use RANK() OVER (PARTITION BY department ORDER BY salary DESC)."
      },
      {
        "text": "Explain, with an example, why RANK() can produce a 'gap' like 1, 2, 2, 4.",
        "difficulty": "Medium",
        "hint": "Think about how many rows tied for rank 2."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the RANK() window function do?",
        "answer": "RANK() assigns a ranking position to each row based on a specified ORDER BY, giving identical (tied) values the same rank \u2014 but then skips the next rank number(s) to account for how many rows shared that tied rank, creating a gap in the sequence."
      },
      {
        "question": "Give an example of how RANK() creates a gap after a tie.",
        "answer": "If two rows are tied for rank 2, both receive rank 2, but the next distinct row receives rank 4 (not rank 3) \u2014 because two rows already occupied positions 2 and 3 in the underlying order, RANK() accounts for that by skipping ahead to 4."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What happens to tied rows with RANK()?",
        "options": [
          "They get different consecutive numbers",
          "They receive the same rank number",
          "One is randomly chosen to rank higher",
          "RANK() cannot handle ties"
        ],
        "correctIndex": 1,
        "explanation": "RANK() assigns identical ranks to tied values."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What happens to the rank number immediately after a tie in RANK()?",
        "options": [
          "It continues normally with no gap",
          "It skips ahead based on how many rows were tied",
          "It resets back to 1",
          "It causes an error"
        ],
        "correctIndex": 1,
        "explanation": "RANK() leaves a gap proportional to the number of tied rows."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "If two rows tie for rank 2, what rank does the next distinct row get with RANK()?",
        "options": [
          "3",
          "4",
          "2",
          "1"
        ],
        "correctIndex": 1,
        "explanation": "The next rank skips ahead to 4, accounting for both rows tied at 2."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which function would you use instead of RANK() to avoid gaps after ties?",
        "options": [
          "ROW_NUMBER()",
          "DENSE_RANK()",
          "SUM()",
          "COUNT()"
        ],
        "correctIndex": 1,
        "explanation": "DENSE_RANK() assigns consecutive ranks without skipping numbers."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Is RANK() well-suited for competition leaderboards?",
        "options": [
          "No, never used for that",
          "Yes, it's a classic, expected use case",
          "Only for financial reports",
          "Only when there are no ties"
        ],
        "correctIndex": 1,
        "explanation": "Standard sports/competition ranking commonly expects this exact skip-after-tie behavior."
      }
    ]
  },
  {
    "id": 87,
    "title": "DENSE_RANK",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Medium",
    "estMinutes": 6,
    "concept": "DENSE_RANK() assigns a rank to each row, giving tied rows the same rank \u2014 but unlike RANK(), it does NOT skip any subsequent rank numbers, keeping the ranking sequence consecutive.",
    "realLifeExample": "A results table showing distinct 'performance tiers' (1st tier, 2nd tier, 3rd tier) without any gaps, even when multiple students share the same tier, uses DENSE_RANK() instead of RANK().",
    "syntax": "SELECT columns,\n  DENSE_RANK() OVER (PARTITION BY column ORDER BY column) AS dense_rank_value\nFROM table_name;",
    "examples": [
      {
        "sql": "SELECT name, score,\n  DENSE_RANK() OVER (ORDER BY score DESC) AS dense_rank_value\nFROM competition_results;",
        "output": "name   | score | dense_rank_value\n-------|-------|------------------\nAman   | 95    | 1\nRiya   | 90    | 2\nSuresh | 90    | 2\nKavya  | 85    | 3",
        "explanation": "Riya and Suresh tie at rank 2, but unlike RANK(), Kavya correctly receives rank 3 next \u2014 no rank numbers are skipped despite the tie."
      }
    ],
    "importantPoints": [
      "DENSE_RANK() never leaves gaps in the ranking sequence, regardless of how many ties occur.",
      "The only difference between RANK() and DENSE_RANK() is how they handle the numbers immediately following a tie.",
      "DENSE_RANK() is often preferred when you want to count 'how many distinct rank levels' exist, since the max value directly reflects that count."
    ],
    "commonMistakes": [
      {
        "wrong": "Using RANK() when you need the maximum rank value to represent the count of distinct groups",
        "correct": "Using DENSE_RANK() so the highest rank number directly equals the number of distinct rank levels",
        "why": "With RANK(), gaps after ties mean the highest rank number doesn't correspond to the actual count of distinct groups \u2014 DENSE_RANK() keeps this relationship accurate and intuitive."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Assign a dense rank to products by price within each category, highest price first.",
        "difficulty": "Medium",
        "hint": "Use DENSE_RANK() OVER (PARTITION BY category ORDER BY price DESC)."
      },
      {
        "text": "Explain a scenario where DENSE_RANK() is clearly the better choice over RANK().",
        "difficulty": "Medium",
        "hint": "Think about needing consecutive tier numbers."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the key difference between RANK() and DENSE_RANK()?",
        "answer": "Both assign the same rank to tied rows, but RANK() then skips the next rank number(s) proportional to how many rows were tied, creating gaps (e.g., 1, 2, 2, 4). DENSE_RANK() does not skip any numbers after a tie, keeping the ranking sequence fully consecutive (e.g., 1, 2, 2, 3)."
      },
      {
        "question": "When would you specifically choose DENSE_RANK() over RANK()?",
        "answer": "DENSE_RANK() is the better choice when you need the ranking sequence to remain consecutive with no gaps \u2014 for example, when grouping results into 'tiers' or 'levels' where the actual rank number should reflect how many distinct groups exist, unaffected by how many rows are tied within each group."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What happens to tied rows with DENSE_RANK()?",
        "options": [
          "They get different numbers",
          "They receive the same rank, like RANK()",
          "One tied row is dropped",
          "DENSE_RANK() can't handle ties"
        ],
        "correctIndex": 1,
        "explanation": "Like RANK(), DENSE_RANK() gives tied rows identical rank values."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is the key difference between RANK() and DENSE_RANK()?",
        "options": [
          "They are functionally identical",
          "DENSE_RANK() doesn't skip numbers after ties",
          "RANK() doesn't skip numbers after ties",
          "DENSE_RANK() ignores ORDER BY"
        ],
        "correctIndex": 1,
        "explanation": "DENSE_RANK keeps the sequence consecutive; RANK leaves gaps."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "If two rows tie for rank 2 using DENSE_RANK(), what does the next distinct row get?",
        "options": [
          "4",
          "3",
          "2",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "DENSE_RANK continues consecutively to 3, with no gap."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why might the maximum DENSE_RANK() value be useful?",
        "options": [
          "It has no particular meaning",
          "It equals the count of distinct rank levels/groups",
          "It always equals the row count",
          "It represents the average value"
        ],
        "correctIndex": 1,
        "explanation": "Since there are no gaps, the max value directly reflects distinct group count."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which function would you choose for consecutive 'tier' numbering with no gaps?",
        "options": [
          "RANK()",
          "DENSE_RANK()",
          "ROW_NUMBER()",
          "COUNT()"
        ],
        "correctIndex": 1,
        "explanation": "DENSE_RANK is specifically designed to avoid gaps after ties."
      }
    ]
  },
  {
    "id": 88,
    "title": "LEAD",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "LEAD() lets you access a value from a LATER (following) row within the same result set, without needing a self-join \u2014 useful for comparing a row to the one that comes after it.",
    "realLifeExample": "A stock price analysis tool compares today's closing price to TOMORROW's closing price using LEAD(), to calculate day-over-day change without a complex self-join.",
    "syntax": "SELECT columns,\n  LEAD(column_name, offset) OVER (PARTITION BY column ORDER BY column) AS next_value\nFROM table_name;",
    "examples": [
      {
        "sql": "SELECT date, closing_price,\n  LEAD(closing_price, 1) OVER (ORDER BY date) AS next_day_price\nFROM stock_prices;",
        "output": "date       | closing_price | next_day_price\n-----------|---------------|----------------\n2026-09-01 | 150.00        | 152.50\n2026-09-02 | 152.50        | 149.00",
        "explanation": "For each row, LEAD looks ahead exactly 1 row (based on the ORDER BY date) and pulls that following row's closing_price into the current row as next_day_price."
      }
    ],
    "importantPoints": [
      "LEAD(column, n) looks n rows ahead; if n is omitted, it defaults to 1.",
      "The very last row(s) in each partition will have NULL for LEAD(), since there's no 'next' row to look ahead to.",
      "LEAD() requires an ORDER BY inside OVER() to define what 'next' actually means."
    ],
    "commonMistakes": [
      {
        "wrong": "Trying to use a self-join to compare each row to the next chronological row",
        "correct": "Using LEAD() to directly access the next row's value without any join at all",
        "why": "A self-join for this kind of 'next row' comparison is significantly more complex and error-prone than simply using LEAD(), which is purpose-built for exactly this scenario."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Use LEAD() to show each order's amount alongside the next order's amount, ordered by order_date.",
        "difficulty": "Hard",
        "hint": "Use LEAD(amount, 1) OVER (ORDER BY order_date)."
      },
      {
        "text": "Explain what value LEAD() returns for the very last row in a partition.",
        "difficulty": "Medium",
        "hint": "Think about what 'next row' means when there isn't one."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the LEAD() window function do?",
        "answer": "LEAD() retrieves a value from a subsequent (later) row in the result set, relative to the current row, based on the specified ORDER BY \u2014 without requiring a self-join. You can specify how many rows ahead to look (the offset), which defaults to 1 if omitted."
      },
      {
        "question": "What value does LEAD() return for the last row(s) in a partition, and why?",
        "answer": "LEAD() returns NULL for the last row(s) in a partition, because there is no subsequent row to retrieve a value from \u2014 the window simply has nothing left 'ahead' of that row to look at."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does LEAD() retrieve?",
        "options": [
          "A value from a previous row",
          "A value from a following (later) row",
          "The current row's value",
          "An aggregate total"
        ],
        "correctIndex": 1,
        "explanation": "LEAD looks forward to a subsequent row's value."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is the default offset for LEAD() if not specified?",
        "options": [
          "0",
          "1",
          "2",
          "It's required, no default exists"
        ],
        "correctIndex": 1,
        "explanation": "LEAD defaults to looking exactly 1 row ahead."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does LEAD() return for the last row in a partition?",
        "options": [
          "0",
          "NULL",
          "The first row's value",
          "An error"
        ],
        "correctIndex": 1,
        "explanation": "There's no 'next' row, so NULL is returned."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Does LEAD() require a self-join to work?",
        "options": [
          "Yes, always",
          "No, it works without any join",
          "Only for large tables",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "LEAD is specifically designed to avoid needing a self-join."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What clause inside OVER() defines what 'next row' means for LEAD()?",
        "options": [
          "PARTITION BY only",
          "ORDER BY",
          "GROUP BY",
          "WHERE"
        ],
        "correctIndex": 1,
        "explanation": "ORDER BY establishes the sequence LEAD uses to determine the next row."
      }
    ]
  },
  {
    "id": 89,
    "title": "LAG",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "LAG() lets you access a value from an EARLIER (preceding) row within the same result set, the mirror opposite of LEAD() \u2014 useful for comparing a row to the one that came before it.",
    "realLifeExample": "A sales report calculating 'growth compared to the previous month' uses LAG() to pull the prior month's revenue into the same row as the current month's revenue, for an easy side-by-side comparison.",
    "syntax": "SELECT columns,\n  LAG(column_name, offset) OVER (PARTITION BY column ORDER BY column) AS previous_value\nFROM table_name;",
    "examples": [
      {
        "sql": "SELECT month, revenue,\n  LAG(revenue, 1) OVER (ORDER BY month) AS previous_month_revenue\nFROM monthly_sales;",
        "output": "month | revenue | previous_month_revenue\n------|---------|------------------------\nJan   | 50000   | NULL\nFeb   | 62000   | 50000",
        "explanation": "For February, LAG looks back exactly 1 row (based on ORDER BY month) and pulls January's revenue into the current row for direct comparison."
      }
    ],
    "importantPoints": [
      "LAG(column, n) looks n rows behind; if n is omitted, it defaults to 1.",
      "The very first row(s) in each partition will have NULL for LAG(), since there's no 'previous' row to look back to.",
      "LAG() and LEAD() are often used together to calculate differences, like month-over-month or day-over-day change."
    ],
    "commonMistakes": [
      {
        "wrong": "Manually joining a table to itself with a date offset to compare consecutive rows",
        "correct": "Using LAG() to directly access the previous row's value without any join",
        "why": "LAG() is purpose-built for exactly this 'previous row' comparison, making self-joins for this specific use case unnecessary and needlessly complex."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Use LAG() to calculate month-over-month revenue change (current minus previous).",
        "difficulty": "Hard",
        "hint": "Combine LAG(revenue, 1) with a simple subtraction in the SELECT."
      },
      {
        "text": "Explain what value LAG() returns for the very first row in a partition.",
        "difficulty": "Medium",
        "hint": "Think about what 'previous row' means when there isn't one."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the LAG() window function do?",
        "answer": "LAG() retrieves a value from a preceding (earlier) row in the result set, relative to the current row, based on the specified ORDER BY \u2014 it's the mirror opposite of LEAD(). You can specify how many rows back to look (the offset), which defaults to 1 if omitted."
      },
      {
        "question": "How are LAG() and LEAD() commonly used together?",
        "answer": "They're frequently combined to calculate period-over-period changes \u2014 for example, using LAG() to get the previous month's value and LEAD() to get the next month's value, both alongside the current row, making it easy to calculate growth, decline, or trends directly within a single query."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does LAG() retrieve?",
        "options": [
          "A value from a following row",
          "A value from a preceding (earlier) row",
          "The maximum value overall",
          "A random row's value"
        ],
        "correctIndex": 1,
        "explanation": "LAG looks backward to a prior row's value."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is the default offset for LAG() if not specified?",
        "options": [
          "0",
          "1",
          "2",
          "There is no default"
        ],
        "correctIndex": 1,
        "explanation": "LAG defaults to looking exactly 1 row behind."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does LAG() return for the first row in a partition?",
        "options": [
          "0",
          "NULL",
          "The last row's value",
          "An error"
        ],
        "correctIndex": 1,
        "explanation": "There's no 'previous' row, so NULL is returned."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What is LAG() the mirror opposite of?",
        "options": [
          "RANK()",
          "LEAD()",
          "ROW_NUMBER()",
          "SUM()"
        ],
        "correctIndex": 1,
        "explanation": "LAG looks backward while LEAD looks forward."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What common calculation uses LAG()?",
        "options": [
          "Total row count",
          "Month-over-month or period-over-period change",
          "Primary key generation",
          "Table creation"
        ],
        "correctIndex": 1,
        "explanation": "Comparing a row to its predecessor is a classic LAG use case."
      }
    ]
  },
  {
    "id": 90,
    "title": "PARTITION BY",
    "level": "Advanced",
    "category": "Advanced SQL",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "PARTITION BY divides the rows of a result set into groups (partitions) for the purpose of a window function's calculation \u2014 similar to GROUP BY, but without collapsing rows into a single summary row per group.",
    "realLifeExample": "A sales report showing 'each salesperson's rank within their OWN region' (not globally) uses PARTITION BY region inside a RANK() window function, so ranking restarts fresh for each region.",
    "syntax": "SELECT columns,\n  WINDOW_FUNCTION() OVER (PARTITION BY column ORDER BY column) AS result\nFROM table_name;",
    "examples": [
      {
        "sql": "SELECT name, region, sales,\n  RANK() OVER (PARTITION BY region ORDER BY sales DESC) AS rank_in_region\nFROM salespeople;",
        "output": "name   | region | sales | rank_in_region\n-------|--------|-------|---------------\nAman   | North  | 50000 | 1\nRiya   | North  | 40000 | 2\nSuresh | South  | 45000 | 1",
        "explanation": "Ranking restarts at 1 for each region \u2014 Suresh (South) correctly gets rank 1 in his own region, even though his sales are lower than Aman's in North."
      }
    ],
    "importantPoints": [
      "PARTITION BY resets the window function's calculation independently for each group.",
      "Without PARTITION BY, a window function treats the entire result set as one single partition.",
      "You can partition by multiple columns, just like GROUP BY: PARTITION BY column1, column2."
    ],
    "commonMistakes": [
      {
        "wrong": "Using RANK() OVER (ORDER BY sales DESC) when you need separate rankings per region",
        "correct": "Using RANK() OVER (PARTITION BY region ORDER BY sales DESC)",
        "why": "Without PARTITION BY, the ranking would be calculated globally across all regions combined, rather than restarting fresh for each individual region as intended."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Calculate each employee's salary rank within their own department using PARTITION BY.",
        "difficulty": "Hard",
        "hint": "Use RANK() OVER (PARTITION BY department ORDER BY salary DESC)."
      },
      {
        "text": "Explain the difference between using GROUP BY department and PARTITION BY department for the same salary comparison.",
        "difficulty": "Advanced",
        "hint": "Focus on whether individual rows survive in the output."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does PARTITION BY do within a window function?",
        "answer": "PARTITION BY divides the result set into independent groups (partitions), so the window function's calculation (like RANK, SUM, or AVG) is performed separately within each group, restarting fresh for each partition \u2014 while still preserving every individual row in the final output."
      },
      {
        "question": "What happens to a window function's calculation if PARTITION BY is omitted?",
        "answer": "Without PARTITION BY, the entire result set is treated as one single partition, meaning the window function's calculation (like a running total or ranking) is applied globally across all rows, rather than being calculated separately per group."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does PARTITION BY do?",
        "options": [
          "Deletes rows outside a group",
          "Divides rows into groups for the window calculation",
          "Sorts the final output permanently",
          "Creates a new table"
        ],
        "correctIndex": 1,
        "explanation": "PARTITION BY groups rows for independent window calculations."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What happens to individual rows when using PARTITION BY?",
        "options": [
          "They are collapsed into one row per group",
          "They remain visible individually in the output",
          "They are deleted",
          "They are duplicated randomly"
        ],
        "correctIndex": 1,
        "explanation": "Unlike GROUP BY, PARTITION BY keeps every row visible."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What happens if PARTITION BY is omitted from a window function?",
        "options": [
          "The query fails",
          "The entire result set is treated as one single partition",
          "Nothing happens differently",
          "It defaults to partitioning by the primary key"
        ],
        "correctIndex": 1,
        "explanation": "Without PARTITION BY, the window function applies globally across all rows."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can you partition by more than one column?",
        "options": [
          "No, only one column allowed",
          "Yes, similar to GROUP BY with multiple columns",
          "Only with ROW_NUMBER()",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "Multiple columns can define more granular partitions."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "How does PARTITION BY differ fundamentally from GROUP BY?",
        "options": [
          "They are identical in every way",
          "PARTITION BY preserves individual rows; GROUP BY collapses them",
          "GROUP BY is used only with window functions",
          "PARTITION BY requires an aggregate function"
        ],
        "correctIndex": 1,
        "explanation": "This row-preservation is the defining distinction between the two."
      }
    ]
  },
  {
    "id": 91,
    "title": "Views",
    "level": "Advanced",
    "category": "Database Objects",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "A view is a virtual table based on the result of a stored SQL query. It doesn't store data itself \u2014 it dynamically runs its underlying query every time it's accessed, presenting a simplified or restricted look at real tables.",
    "realLifeExample": "An HR system creates a view called 'active_employees' that hides sensitive salary columns and only shows currently employed staff, so managers can query it safely without seeing confidential data or terminated employees.",
    "syntax": "CREATE VIEW view_name AS\nSELECT columns FROM table_name WHERE condition;",
    "examples": [
      {
        "sql": "CREATE VIEW active_employees AS\nSELECT employee_id, name, department FROM employees WHERE status = 'Active';\n\nSELECT * FROM active_employees;",
        "output": "employee_id | name | department\n------------|------|------------\n1           | Aman | Sales",
        "explanation": "Querying the view runs the underlying SELECT automatically, returning only active employees with just the specified columns \u2014 as if it were a real table."
      }
    ],
    "importantPoints": [
      "A view doesn't store its own data \u2014 it always reflects the current, live data in the underlying tables.",
      "Views are great for simplifying complex queries, enforcing security (hiding sensitive columns), and providing a consistent interface.",
      "Some views are updatable (INSERT/UPDATE possible through them), but views based on joins or aggregates typically are not."
    ],
    "commonMistakes": [
      {
        "wrong": "Repeating the same complex JOIN query across a dozen different reports",
        "correct": "Creating a view once for that complex JOIN, then querying the view in each report instead",
        "why": "Duplicating complex logic across many queries is hard to maintain \u2014 a view centralizes it in one place, so any future changes only need to happen once."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create a view showing only products with stock greater than 0.",
        "difficulty": "Easy",
        "hint": "Use CREATE VIEW ... AS SELECT ... WHERE stock > 0."
      },
      {
        "text": "Explain why a view built from a JOIN across three tables might not be directly updatable via INSERT.",
        "difficulty": "Advanced",
        "hint": "Think about which table a new row would actually belong to."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a view in SQL?",
        "answer": "A view is a virtual table defined by a stored SQL query. It doesn't physically store data itself \u2014 instead, it dynamically executes its underlying query each time it's accessed, always reflecting the current state of the underlying tables."
      },
      {
        "question": "What are two common reasons to use a view?",
        "answer": "Views are commonly used to simplify complex or frequently-repeated queries into a single reusable object, and to enforce security by exposing only specific columns or rows (hiding sensitive data) without granting direct access to the full underlying tables."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Does a view store its own copy of data?",
        "options": [
          "Yes, permanently",
          "No, it runs its underlying query dynamically",
          "Only if specified",
          "Only for small tables"
        ],
        "correctIndex": 1,
        "explanation": "Views are virtual and always reflect live underlying data."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is a common use of views for security?",
        "options": [
          "Encrypting all data",
          "Hiding sensitive columns from certain users",
          "Deleting sensitive rows permanently",
          "Backing up data"
        ],
        "correctIndex": 1,
        "explanation": "Views can expose only safe, permitted columns/rows."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which command creates a view?",
        "options": [
          "MAKE VIEW",
          "CREATE VIEW",
          "NEW VIEW",
          "DEFINE VIEW"
        ],
        "correctIndex": 1,
        "explanation": "CREATE VIEW is the standard SQL syntax."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Are all views automatically updatable via INSERT/UPDATE?",
        "options": [
          "Yes, always",
          "No, views based on joins/aggregates often aren't",
          "Only SELECT * views are updatable",
          "Views can never be updated"
        ],
        "correctIndex": 1,
        "explanation": "Complexity in the underlying query can prevent direct updates through the view."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is a key benefit of using a view for a complex, frequently-used query?",
        "options": [
          "It makes the query run instantly with zero cost",
          "It centralizes the logic in one reusable place",
          "It automatically indexes all columns",
          "It permanently duplicates the data"
        ],
        "correctIndex": 1,
        "explanation": "Views simplify maintenance by centralizing repeated query logic."
      }
    ]
  },
  {
    "id": 92,
    "title": "Indexes",
    "level": "Advanced",
    "category": "Database Objects",
    "difficulty": "Medium",
    "estMinutes": 9,
    "concept": "An index is a special lookup structure that dramatically speeds up how quickly MySQL can find rows matching a condition, similar to an index at the back of a book that helps you find a topic without reading every page.",
    "realLifeExample": "A 'users' table with millions of rows would take a long time to search by email without an index \u2014 adding an index on the email column lets MySQL jump almost directly to matching rows instead of scanning the whole table.",
    "syntax": "CREATE INDEX index_name ON table_name (column_name);",
    "examples": [
      {
        "sql": "CREATE INDEX idx_email ON users (email);\nSELECT * FROM users WHERE email = 'aman@example.com';",
        "output": "Query OK, 0 rows affected (index created)\n(SELECT now runs much faster, using the index)",
        "explanation": "Once the index exists, MySQL can use it to quickly locate matching rows by email, instead of scanning the entire table row by row."
      }
    ],
    "importantPoints": [
      "Indexes speed up SELECT and WHERE-based lookups, but slightly slow down INSERT/UPDATE/DELETE, since the index must also be updated.",
      "Primary keys and UNIQUE columns are automatically indexed by MySQL.",
      "Indexing every column isn't a good strategy \u2014 indexes use extra storage and add write overhead, so they should be added thoughtfully."
    ],
    "commonMistakes": [
      {
        "wrong": "Adding an index to every single column 'just in case'",
        "correct": "Adding indexes only to columns frequently used in WHERE, JOIN, or ORDER BY clauses",
        "why": "Over-indexing wastes storage and slows down every INSERT/UPDATE/DELETE, since MySQL must maintain every index \u2014 indexes should be added based on actual query patterns."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create an index on the 'order_date' column of an 'orders' table.",
        "difficulty": "Easy",
        "hint": "Use CREATE INDEX idx_name ON orders (order_date)."
      },
      {
        "text": "Explain why indexing improves SELECT speed but can slow down INSERT.",
        "difficulty": "Medium",
        "hint": "Think about what MySQL has to update with every new row."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is an index and why is it used?",
        "answer": "An index is a special data structure that MySQL maintains to speed up data retrieval on a table, functioning similarly to a book's index \u2014 allowing MySQL to quickly locate matching rows instead of scanning the entire table sequentially. It's used to significantly improve the performance of SELECT queries with WHERE, JOIN, or ORDER BY clauses."
      },
      {
        "question": "What is the tradeoff of adding an index?",
        "answer": "While indexes speed up read operations (SELECT queries), they add overhead to write operations (INSERT, UPDATE, DELETE), since MySQL must also update the index structure whenever the underlying data changes. Indexes also consume additional disk storage."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is the main purpose of an index?",
        "options": [
          "To store backup data",
          "To speed up data retrieval/lookups",
          "To encrypt column values",
          "To enforce NOT NULL"
        ],
        "correctIndex": 1,
        "explanation": "Indexes accelerate the process of finding matching rows."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is a tradeoff of adding indexes?",
        "options": [
          "No downsides at all",
          "Slower INSERT/UPDATE/DELETE and extra storage use",
          "Indexes make SELECT slower",
          "Indexes remove the need for primary keys"
        ],
        "correctIndex": 1,
        "explanation": "Write operations slow slightly since indexes must be maintained too."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Are primary key columns automatically indexed?",
        "options": [
          "No, you must add it manually",
          "Yes, automatically",
          "Only in older MySQL versions",
          "Only for INT columns"
        ],
        "correctIndex": 1,
        "explanation": "MySQL automatically indexes primary key columns."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Should every column in a table be indexed?",
        "options": [
          "Yes, always index everything",
          "No, only columns frequently used in WHERE/JOIN/ORDER BY",
          "Only text columns need indexes",
          "Indexes are never necessary"
        ],
        "correctIndex": 1,
        "explanation": "Thoughtful indexing based on actual query patterns is the right approach."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which command creates an index?",
        "options": [
          "MAKE INDEX",
          "CREATE INDEX",
          "ADD INDEX ONLY",
          "NEW INDEX"
        ],
        "correctIndex": 1,
        "explanation": "CREATE INDEX is the standard syntax for adding an index."
      }
    ]
  },
  {
    "id": 93,
    "title": "Clustered vs Non-Clustered Concepts",
    "level": "Advanced",
    "category": "Database Objects",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "A clustered index determines the actual physical order in which table data is stored on disk \u2014 a table can have only one. A non-clustered index is a separate structure that points back to the actual data, and a table can have many.",
    "realLifeExample": "In MySQL's InnoDB engine, the primary key IS the clustered index \u2014 rows are physically stored in primary key order. Any other index you create (like on email) is non-clustered, storing pointers back to the primary key.",
    "syntax": "-- The primary key automatically becomes the clustered index in InnoDB:\nCREATE TABLE users (\n  user_id INT PRIMARY KEY,   -- clustered index\n  email VARCHAR(100)\n);\nCREATE INDEX idx_email ON users (email);  -- non-clustered index",
    "examples": [
      {
        "sql": "-- Conceptually: querying by user_id (clustered) is often fastest\nSELECT * FROM users WHERE user_id = 5;\n-- Querying by email (non-clustered) requires an extra lookup step\nSELECT * FROM users WHERE email = 'aman@example.com';",
        "output": "(Both return results, but the clustered lookup by primary key is typically the most direct path to the actual row data)",
        "explanation": "Since InnoDB physically stores rows in primary key order, looking up by user_id goes straight to the data. Looking up by email uses the non-clustered index to find the primary key first, then fetches the row."
      }
    ],
    "importantPoints": [
      "In InnoDB (MySQL's default engine), the primary key is always the clustered index \u2014 you can't choose a different column to be clustered.",
      "A table can have only ONE clustered index (since data can only be physically sorted one way), but many non-clustered indexes.",
      "Non-clustered indexes require an extra lookup step ('bookmark lookup') to find the actual row data after locating a match in the index."
    ],
    "commonMistakes": [
      {
        "wrong": "Assuming you can create multiple clustered indexes on one table",
        "correct": "Understanding that a table can have only one clustered index (the primary key in InnoDB), but many non-clustered indexes",
        "why": "Since a clustered index determines physical row storage order, it's physically only possible to sort data one way at a time \u2014 hence, only one clustered index per table."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Explain why choosing a good primary key matters extra for performance in InnoDB, given it's the clustered index.",
        "difficulty": "Advanced",
        "hint": "Think about how insert order relates to physical storage order."
      },
      {
        "text": "Describe the 'extra lookup step' that happens when querying via a non-clustered index.",
        "difficulty": "Advanced",
        "hint": "Think about how a non-clustered index eventually finds the actual row data."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between a clustered and a non-clustered index?",
        "answer": "A clustered index determines the actual physical storage order of the table's rows on disk \u2014 a table can have only one, since data can only be physically arranged in one order. A non-clustered index is a separate structure that stores pointers back to the actual row data, and a table can have multiple non-clustered indexes."
      },
      {
        "question": "In MySQL's InnoDB engine, what serves as the clustered index?",
        "answer": "In InnoDB, the primary key automatically serves as the clustered index \u2014 rows are physically stored on disk in primary key order. You cannot choose a different column to be the clustered index in InnoDB; if no primary key is defined, InnoDB uses an internal hidden row identifier instead."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "How many clustered indexes can a table have?",
        "options": [
          "As many as needed",
          "Only one",
          "Exactly two",
          "Zero, they're optional"
        ],
        "correctIndex": 1,
        "explanation": "Physical storage can only be ordered one way, limiting a table to one clustered index."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "In InnoDB, what serves as the clustered index?",
        "options": [
          "Any column you choose",
          "The primary key",
          "The first column defined",
          "No column is clustered"
        ],
        "correctIndex": 1,
        "explanation": "InnoDB automatically uses the primary key as the clustered index."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "How many non-clustered indexes can a table have?",
        "options": [
          "Only one",
          "Multiple",
          "Zero, they're not allowed",
          "Exactly three"
        ],
        "correctIndex": 1,
        "explanation": "A table can have many non-clustered indexes, unlike the single clustered index."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What extra step does a non-clustered index lookup require?",
        "options": [
          "Nothing extra",
          "A bookmark lookup back to the actual row data",
          "Re-sorting the whole table",
          "Rebuilding the index every time"
        ],
        "correctIndex": 1,
        "explanation": "Non-clustered indexes point to data, requiring an additional lookup to retrieve it."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why can a table only have one clustered index?",
        "options": [
          "It's an arbitrary MySQL limitation with no reason",
          "Physical row storage can only be ordered in one sequence",
          "Clustered indexes are deprecated",
          "Non-clustered indexes replace the need for it"
        ],
        "correctIndex": 1,
        "explanation": "Since it dictates physical order, only one arrangement is possible at a time."
      }
    ]
  },
  {
    "id": 94,
    "title": "Composite Indexes",
    "level": "Advanced",
    "category": "Database Objects",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "A composite index (also called a multi-column index) is an index built on two or more columns together, useful when queries frequently filter or sort by that same combination of columns.",
    "realLifeExample": "An orders table frequently queried with 'WHERE customer_id = X AND order_date > Y' benefits from a composite index on (customer_id, order_date), which is far more effective than two separate single-column indexes for this specific query pattern.",
    "syntax": "CREATE INDEX index_name ON table_name (column1, column2);",
    "examples": [
      {
        "sql": "CREATE INDEX idx_customer_date ON orders (customer_id, order_date);\nSELECT * FROM orders WHERE customer_id = 5 AND order_date > '2026-01-01';",
        "output": "Query OK, 0 rows affected (index created)\n(Query now efficiently uses the composite index for both conditions)",
        "explanation": "The composite index lets MySQL efficiently filter by customer_id first, then by order_date within that customer's rows, in a single index lookup."
      }
    ],
    "importantPoints": [
      "Column ORDER matters greatly in a composite index \u2014 (customer_id, order_date) is not the same as (order_date, customer_id) for query optimization purposes.",
      "A composite index on (A, B) can still efficiently help queries filtering on just A alone, but generally NOT queries filtering on just B alone.",
      "This 'leftmost prefix' rule is key to understanding when MySQL can actually use a composite index."
    ],
    "commonMistakes": [
      {
        "wrong": "Creating a composite index (order_date, customer_id) when most queries filter by customer_id alone first",
        "correct": "Creating the composite index in the order actually used by queries: (customer_id, order_date)",
        "why": "Since MySQL uses the leftmost column(s) of a composite index for lookups, putting the less commonly filtered column first makes the index far less useful for typical queries."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create a composite index on (department_id, salary) for an employees table.",
        "difficulty": "Medium",
        "hint": "Use CREATE INDEX ... ON employees (department_id, salary)."
      },
      {
        "text": "Explain the 'leftmost prefix' rule using a composite index on (a, b, c).",
        "difficulty": "Advanced",
        "hint": "Think about which single or combined column filters can use this index."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a composite index?",
        "answer": "A composite index (or multi-column index) is an index built across two or more columns together, rather than just one. It's especially useful for optimizing queries that filter or sort using that same specific combination of columns."
      },
      {
        "question": "What is the 'leftmost prefix' rule for composite indexes?",
        "answer": "MySQL can use a composite index efficiently only when a query's filtering conditions start with the leftmost column(s) of that index, in order. For example, an index on (a, b, c) can help queries filtering on 'a', on 'a and b', or on 'a and b and c' \u2014 but generally cannot efficiently help a query that filters only on 'b' or only on 'c' alone."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is a composite index?",
        "options": [
          "An index on exactly one column",
          "An index built across two or more columns",
          "A duplicate of the primary key",
          "An index with no columns"
        ],
        "correctIndex": 1,
        "explanation": "Composite indexes span multiple columns together."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Does column order matter in a composite index?",
        "options": [
          "No, order is irrelevant",
          "Yes, order significantly affects which queries benefit",
          "Only for numeric columns",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "The leftmost prefix rule makes column order critical."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What is the 'leftmost prefix' rule?",
        "options": [
          "Any column combination works equally well",
          "The index helps queries filtering from the leftmost column(s) onward",
          "Only the rightmost column matters",
          "Composite indexes ignore column order entirely"
        ],
        "correctIndex": 1,
        "explanation": "Effective use requires filtering starting from the index's first column(s)."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "An index on (customer_id, order_date) best helps queries filtering by:",
        "options": [
          "order_date alone",
          "customer_id alone, or customer_id AND order_date together",
          "Neither column",
          "Only order_date alone"
        ],
        "correctIndex": 1,
        "explanation": "The leftmost column (customer_id) alone, or combined with order_date, benefits from this index."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why is composite index column order important to plan carefully?",
        "options": [
          "It has no real impact",
          "Poor ordering can make the index far less useful for actual query patterns",
          "MySQL automatically reorders columns for you",
          "Composite indexes always work regardless of order"
        ],
        "correctIndex": 1,
        "explanation": "Matching the index order to real query patterns is essential for it to be effective."
      }
    ]
  },
  {
    "id": 95,
    "title": "Stored Procedures",
    "level": "Advanced",
    "category": "Database Objects",
    "difficulty": "Hard",
    "estMinutes": 10,
    "concept": "A stored procedure is a saved, reusable block of SQL code (including logic like variables, loops, and conditionals) that can be executed by calling its name, instead of rewriting the same SQL every time.",
    "realLifeExample": "A bank might use a stored procedure called 'process_monthly_interest' that calculates and applies interest to every account, callable with a single command instead of manually running a complex multi-step SQL script every month.",
    "syntax": "DELIMITER //\nCREATE PROCEDURE procedure_name(parameters)\nBEGIN\n  -- SQL statements\nEND //\nDELIMITER ;\n\nCALL procedure_name(arguments);",
    "examples": [
      {
        "sql": "DELIMITER //\nCREATE PROCEDURE get_employees_by_dept(IN dept_name VARCHAR(50))\nBEGIN\n  SELECT * FROM employees WHERE department = dept_name;\nEND //\nDELIMITER ;\n\nCALL get_employees_by_dept('Sales');",
        "output": "employee_id | name | department\n------------|------|------------\n1           | Aman | Sales",
        "explanation": "The procedure is defined once with a parameter (dept_name), then can be called repeatedly with different department names without rewriting the underlying SELECT statement each time."
      }
    ],
    "importantPoints": [
      "Stored procedures can accept IN, OUT, and INOUT parameters for passing values in and out.",
      "The DELIMITER command temporarily changes the statement terminator, since the procedure body itself contains semicolons.",
      "Stored procedures can encapsulate complex, multi-step business logic directly in the database, reducing repeated application code."
    ],
    "commonMistakes": [
      {
        "wrong": "Writing the same complex multi-step SQL logic in application code across five different services",
        "correct": "Encapsulating that logic once in a stored procedure, called from each service",
        "why": "Duplicating complex business logic across multiple applications makes updates error-prone and inconsistent \u2014 a stored procedure centralizes it in one place, in the database itself."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create a stored procedure that returns all orders for a given customer_id parameter.",
        "difficulty": "Hard",
        "hint": "Use CREATE PROCEDURE with an IN parameter and a SELECT inside BEGIN...END."
      },
      {
        "text": "Explain why the DELIMITER command is needed when defining a stored procedure.",
        "difficulty": "Advanced",
        "hint": "Think about how MySQL normally interprets semicolons."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a stored procedure?",
        "answer": "A stored procedure is a saved, named block of SQL code \u2014 potentially including variables, conditional logic, and loops \u2014 that is stored in the database and can be executed repeatedly by calling its name with CALL, rather than rewriting the same SQL logic every time it's needed."
      },
      {
        "question": "Why is the DELIMITER command typically used when creating a stored procedure?",
        "answer": "Since a stored procedure's body often contains multiple SQL statements separated by semicolons, and semicolon normally tells MySQL 'execute this statement now', DELIMITER temporarily changes the statement terminator (e.g., to //) so the entire procedure definition, semicolons and all, is treated as one single block until DELIMITER is changed back."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is a stored procedure?",
        "options": [
          "A single SQL query only",
          "A saved, reusable block of SQL code callable by name",
          "A type of index",
          "A backup file"
        ],
        "correctIndex": 1,
        "explanation": "Stored procedures encapsulate reusable SQL logic under a name."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How do you execute a stored procedure?",
        "options": [
          "SELECT procedure_name;",
          "CALL procedure_name();",
          "RUN procedure_name;",
          "EXECUTE procedure_name;"
        ],
        "correctIndex": 1,
        "explanation": "CALL is the standard command to invoke a stored procedure in MySQL."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why is DELIMITER used when defining a stored procedure?",
        "options": [
          "It's purely cosmetic",
          "To let the procedure body contain semicolons without ending the definition early",
          "It encrypts the procedure",
          "It's required for all SQL statements"
        ],
        "correctIndex": 1,
        "explanation": "DELIMITER changes the terminator so internal semicolons don't end the CREATE PROCEDURE statement prematurely."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What types of parameters can stored procedures accept?",
        "options": [
          "Only IN parameters",
          "IN, OUT, and INOUT parameters",
          "No parameters are allowed",
          "Only numeric parameters"
        ],
        "correctIndex": 1,
        "explanation": "Stored procedures support passing values in, out, or both ways."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is a key benefit of stored procedures for complex business logic?",
        "options": [
          "They make the database less secure",
          "They centralize logic in the database, reducing duplicated application code",
          "They eliminate the need for tables",
          "They replace the need for indexes"
        ],
        "correctIndex": 1,
        "explanation": "Centralizing logic avoids inconsistent duplication across multiple applications."
      }
    ]
  },
  {
    "id": 96,
    "title": "Stored Functions",
    "level": "Advanced",
    "category": "Database Objects",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "A stored function is similar to a stored procedure, but it MUST return a single value and can be used directly inside SQL expressions, like SELECT statements \u2014 unlike procedures, which are called standalone with CALL.",
    "realLifeExample": "An e-commerce database might define a stored function 'calculate_discount(price, percent)' that can be used directly inside a SELECT statement to compute discounted prices for every product in one query.",
    "syntax": "DELIMITER //\nCREATE FUNCTION function_name(parameters) RETURNS datatype\nDETERMINISTIC\nBEGIN\n  -- logic\n  RETURN value;\nEND //\nDELIMITER ;",
    "examples": [
      {
        "sql": "DELIMITER //\nCREATE FUNCTION calculate_discount(price DECIMAL(10,2), percent INT) RETURNS DECIMAL(10,2)\nDETERMINISTIC\nBEGIN\n  RETURN price - (price * percent / 100);\nEND //\nDELIMITER ;\n\nSELECT name, calculate_discount(price, 10) AS discounted_price FROM products;",
        "output": "name        | discounted_price\n------------|------------------\nHeadphones  | 1799.10",
        "explanation": "The function is called directly inside the SELECT statement, calculating a discounted price for every row in one clean query."
      }
    ],
    "importantPoints": [
      "A stored function must specify a RETURN data type and must return exactly one value using RETURN.",
      "Functions can be used inline within SELECT, WHERE, and other SQL expressions, unlike stored procedures.",
      "The DETERMINISTIC keyword tells MySQL the function always returns the same result for the same input, which can help with optimization and is often required depending on binary logging settings."
    ],
    "commonMistakes": [
      {
        "wrong": "Trying to CALL a stored function like a procedure",
        "correct": "Using the function directly inside a SELECT statement, like SELECT function_name(args)",
        "why": "Stored functions are used as expressions within SQL statements (like any built-in function), not invoked standalone with CALL like a procedure."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create a stored function that converts a temperature from Celsius to Fahrenheit.",
        "difficulty": "Hard",
        "hint": "Use CREATE FUNCTION with RETURNS DECIMAL and a formula in the RETURN statement."
      },
      {
        "text": "Explain the key difference between when you'd use a stored function versus a stored procedure.",
        "difficulty": "Advanced",
        "hint": "Think about whether you need a single return value usable inline in SQL."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the key difference between a stored function and a stored procedure?",
        "answer": "A stored function MUST return exactly one value and can be used directly inside SQL expressions (like inside a SELECT statement), similar to a built-in function. A stored procedure does not have to return a value in the same way, is invoked standalone using CALL, and cannot be used inline within another SQL expression."
      },
      {
        "question": "What does the DETERMINISTIC keyword indicate for a stored function?",
        "answer": "DETERMINISTIC tells MySQL that the function will always return the exact same result given the same input parameters, with no dependency on external state \u2014 this can help MySQL with query optimization, and is often required by MySQL's settings depending on binary logging configuration."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What must a stored function always do?",
        "options": [
          "Accept no parameters",
          "Return exactly one value",
          "Modify data with INSERT/UPDATE",
          "Run without any logic"
        ],
        "correctIndex": 1,
        "explanation": "A RETURN statement providing one value is mandatory for stored functions."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Where can a stored function be used, unlike a stored procedure?",
        "options": [
          "Only with CALL",
          "Directly inside SQL expressions like SELECT",
          "Only in stored procedures",
          "Nowhere, they work the same way"
        ],
        "correctIndex": 1,
        "explanation": "Functions can be embedded inline within queries, unlike procedures."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "How do you invoke a stored function?",
        "options": [
          "CALL function_name();",
          "Directly within a SQL statement, like SELECT function_name(args)",
          "RUN function_name;",
          "EXECUTE function_name;"
        ],
        "correctIndex": 1,
        "explanation": "Functions are used as expressions, not called standalone like procedures."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What does DETERMINISTIC indicate about a function?",
        "options": [
          "It runs faster automatically",
          "It always returns the same result for the same input",
          "It can modify any table",
          "It has no return value"
        ],
        "correctIndex": 1,
        "explanation": "DETERMINISTIC signals consistent, input-based output with no side effects."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which is a good use case for a stored function?",
        "options": [
          "Sending an email",
          "Calculating a discounted price inline in a SELECT",
          "Deleting an entire table",
          "Creating a new database"
        ],
        "correctIndex": 1,
        "explanation": "Inline calculations usable within SELECT are a classic stored function use case."
      }
    ]
  },
  {
    "id": 97,
    "title": "Triggers",
    "level": "Advanced",
    "category": "Database Objects",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "A trigger is a block of SQL code that automatically executes in response to a specific event (INSERT, UPDATE, or DELETE) on a table \u2014 without needing to be explicitly called.",
    "realLifeExample": "An inventory system uses a trigger that automatically decreases a product's stock count whenever a new row is inserted into the order_items table \u2014 no application code needs to remember to do this manually.",
    "syntax": "CREATE TRIGGER trigger_name\nBEFORE|AFTER INSERT|UPDATE|DELETE ON table_name\nFOR EACH ROW\nBEGIN\n  -- SQL statements\nEND;",
    "examples": [
      {
        "sql": "CREATE TRIGGER reduce_stock\nAFTER INSERT ON order_items\nFOR EACH ROW\nBEGIN\n  UPDATE products SET stock = stock - NEW.quantity WHERE product_id = NEW.product_id;\nEND;",
        "output": "(No direct output \u2014 the trigger runs silently and automatically)\n-- When a new order_items row is inserted, stock is reduced automatically",
        "explanation": "NEW.quantity and NEW.product_id refer to the values from the row that was just inserted, letting the trigger automatically update the related products table."
      }
    ],
    "importantPoints": [
      "Triggers can fire BEFORE or AFTER an INSERT, UPDATE, or DELETE event.",
      "Inside a trigger, NEW refers to the new row's values (for INSERT/UPDATE), and OLD refers to the previous row's values (for UPDATE/DELETE).",
      "Overusing triggers can make application behavior hard to trace, since logic runs 'invisibly' without being called directly \u2014 use them thoughtfully."
    ],
    "commonMistakes": [
      {
        "wrong": "Manually updating stock in every piece of application code that inserts an order_items row",
        "correct": "Using an AFTER INSERT trigger on order_items to automatically update stock",
        "why": "Relying on every application or script to remember this manual step is fragile \u2014 a trigger guarantees the stock update always happens, no matter what inserted the row."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create a trigger that logs every DELETE on an 'employees' table into an 'employee_audit' table.",
        "difficulty": "Hard",
        "hint": "Use AFTER DELETE and reference OLD.column_name for the deleted row's values."
      },
      {
        "text": "Explain the difference between NEW and OLD inside a trigger.",
        "difficulty": "Medium",
        "hint": "Think about which events each keyword applies to."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a trigger and when does it execute?",
        "answer": "A trigger is a block of SQL code automatically executed by the database in response to a specific event \u2014 an INSERT, UPDATE, or DELETE \u2014 on a specified table, firing either BEFORE or AFTER that event occurs, without needing to be explicitly called."
      },
      {
        "question": "What do NEW and OLD refer to inside a trigger?",
        "answer": "NEW refers to the new row's values being inserted or updated (available in INSERT and UPDATE triggers). OLD refers to the previous row's values before a change or deletion (available in UPDATE and DELETE triggers) \u2014 INSERT triggers have no OLD, and DELETE triggers have no NEW."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is a trigger?",
        "options": [
          "A manually called stored procedure",
          "Code that automatically runs in response to INSERT/UPDATE/DELETE",
          "A type of index",
          "A backup mechanism"
        ],
        "correctIndex": 1,
        "explanation": "Triggers fire automatically based on table events, without being explicitly called."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What events can a trigger respond to?",
        "options": [
          "Only SELECT",
          "INSERT, UPDATE, or DELETE",
          "Only CREATE TABLE",
          "Only database creation"
        ],
        "correctIndex": 1,
        "explanation": "Triggers are tied specifically to data modification events."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does NEW refer to inside a trigger?",
        "options": [
          "The row's values before a change",
          "The new row's values being inserted or updated",
          "The table's name",
          "The database name"
        ],
        "correctIndex": 1,
        "explanation": "NEW represents the incoming/updated row data."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What does OLD refer to inside a trigger?",
        "options": [
          "The new row's values",
          "The row's values before an update or delete",
          "The table's structure",
          "Nothing, OLD isn't valid"
        ],
        "correctIndex": 1,
        "explanation": "OLD represents the row data prior to the change."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why should triggers be used thoughtfully, not excessively?",
        "options": [
          "They're always extremely fast",
          "Overuse can make application behavior hard to trace, since logic runs invisibly",
          "Triggers can only run once total",
          "MySQL limits you to one trigger ever"
        ],
        "correctIndex": 1,
        "explanation": "Hidden, automatic logic can complicate debugging if overused."
      }
    ]
  },
  {
    "id": 98,
    "title": "Events",
    "level": "Advanced",
    "category": "Database Objects",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "A MySQL Event is a scheduled task \u2014 a block of SQL code that runs automatically at a specified time or on a recurring interval, similar to a cron job, but managed entirely within the database itself.",
    "realLifeExample": "A subscription service uses an event that runs every night at midnight to automatically mark expired subscriptions as 'Inactive', without needing an external script or scheduler.",
    "syntax": "CREATE EVENT event_name\nON SCHEDULE EVERY interval\nDO\n  -- SQL statements",
    "examples": [
      {
        "sql": "CREATE EVENT deactivate_expired_subscriptions\nON SCHEDULE EVERY 1 DAY\nDO\n  UPDATE subscriptions SET status = 'Inactive' WHERE expiry_date < CURDATE();",
        "output": "Query OK, 0 rows affected (event created)\n-- Runs automatically every day, updating expired subscriptions",
        "explanation": "Once created, MySQL's event scheduler runs this UPDATE statement automatically every single day, with no manual intervention or external tool required."
      }
    ],
    "importantPoints": [
      "MySQL's event scheduler must be enabled (SET GLOBAL event_scheduler = ON;) for events to actually run.",
      "Events can run once at a specific time, or repeatedly on an interval (EVERY 1 DAY, EVERY 1 HOUR, etc.).",
      "Events are useful for routine maintenance tasks like archiving old data, cleaning up logs, or recalculating summary statistics on a schedule."
    ],
    "commonMistakes": [
      {
        "wrong": "Relying on an external cron job to run routine database cleanup, when the event scheduler could handle it natively",
        "correct": "Using a MySQL EVENT to schedule the same task directly within the database",
        "why": "While external schedulers work too, MySQL events keep the scheduling logic close to the data itself, reducing the need for a separate, additional piece of infrastructure for simple recurring database tasks."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create an event that deletes rows from a 'session_logs' table older than 30 days, running once every day.",
        "difficulty": "Hard",
        "hint": "Use ON SCHEDULE EVERY 1 DAY with a DELETE using DATEDIFF or a date comparison."
      },
      {
        "text": "Explain what setting must be enabled for MySQL events to actually execute.",
        "difficulty": "Medium",
        "hint": "Look into the event_scheduler global variable."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a MySQL Event?",
        "answer": "A MySQL Event is a scheduled block of SQL code that the database automatically executes at a specified time or on a recurring interval, functioning similarly to a cron job but managed entirely within MySQL itself, without needing external scheduling tools."
      },
      {
        "question": "What must be enabled for MySQL events to run?",
        "answer": "The MySQL event scheduler must be turned on using SET GLOBAL event_scheduler = ON; \u2014 by default in many MySQL installations, the event scheduler is OFF, so even correctly created events will not execute until this setting is enabled."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is a MySQL Event similar to?",
        "options": [
          "A foreign key",
          "A cron job / scheduled task",
          "A stored function",
          "A primary key"
        ],
        "correctIndex": 1,
        "explanation": "Events automate SQL execution on a schedule, like a cron job."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What must be enabled for events to actually run?",
        "options": [
          "Nothing, they run automatically by default",
          "The MySQL event scheduler (event_scheduler = ON)",
          "A special license",
          "InnoDB engine specifically"
        ],
        "correctIndex": 1,
        "explanation": "The event scheduler global setting must be explicitly turned on."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Can an event run on a recurring schedule, not just once?",
        "options": [
          "No, only once ever",
          "Yes, using EVERY with an interval",
          "Only with a stored procedure",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "EVERY interval syntax allows recurring execution."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What is a good real-world use case for a MySQL Event?",
        "options": [
          "Real-time user input validation",
          "Nightly cleanup of expired or old data",
          "Rendering a webpage",
          "Compiling application code"
        ],
        "correctIndex": 1,
        "explanation": "Routine, scheduled maintenance tasks are a classic use case for events."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What keyword introduces the scheduling rule for an event?",
        "options": [
          "ON SCHEDULE",
          "ON TIME",
          "SCHEDULE AT",
          "RUN EVERY"
        ],
        "correctIndex": 0,
        "explanation": "ON SCHEDULE defines when and how often the event executes."
      }
    ]
  },
  {
    "id": 99,
    "title": "Transactions",
    "level": "Advanced",
    "category": "Transactions",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "A transaction is a group of one or more SQL statements executed as a single unit of work \u2014 either all statements succeed together, or none of them take effect at all.",
    "realLifeExample": "A bank transfer moving money from Account A to Account B must debit one account and credit the other together \u2014 a transaction ensures both happen, or neither does, preventing money from vanishing if something fails midway.",
    "syntax": "START TRANSACTION;\n-- SQL statements\nCOMMIT;",
    "examples": [
      {
        "sql": "START TRANSACTION;\nUPDATE accounts SET balance = balance - 500 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 500 WHERE account_id = 2;\nCOMMIT;",
        "output": "Query OK (both updates succeed together)",
        "explanation": "Both UPDATE statements are grouped in one transaction \u2014 COMMIT makes both changes permanent together, ensuring the transfer is fully completed as one unit."
      }
    ],
    "importantPoints": [
      "A transaction only takes effect once COMMIT is executed.",
      "If something goes wrong mid-transaction, ROLLBACK can undo every change made since START TRANSACTION.",
      "Transactions are essential for operations that must succeed or fail as a whole, like financial transfers or multi-table updates."
    ],
    "commonMistakes": [
      {
        "wrong": "Running two related UPDATE statements separately, with no transaction wrapping them",
        "correct": "Wrapping both UPDATEs inside START TRANSACTION and COMMIT",
        "why": "Without a transaction, if the first UPDATE succeeds but the second fails, the database is left in an inconsistent state \u2014 the transaction guarantees both happen together or not at all."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a transaction that transfers 1000 from one account to another.",
        "difficulty": "Medium",
        "hint": "Use START TRANSACTION, two UPDATEs, then COMMIT."
      },
      {
        "text": "Explain what happens if a transaction is never committed or rolled back.",
        "difficulty": "Medium",
        "hint": "Think about pending, uncommitted changes."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a transaction in SQL?",
        "answer": "A transaction is a group of one or more SQL statements executed together as a single unit of work \u2014 either all the statements succeed and are made permanent (COMMIT), or none of them take effect at all (ROLLBACK), ensuring the database never ends up in a partially-updated, inconsistent state."
      },
      {
        "question": "Why are transactions important for operations like bank transfers?",
        "answer": "A bank transfer involves two related changes (debiting one account, crediting another) that must both succeed or both fail together \u2014 a transaction guarantees this atomicity, preventing scenarios where money is deducted from one account but never successfully added to the other due to a mid-process failure."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is a transaction?",
        "options": [
          "A single SQL statement only",
          "A group of SQL statements executed as one unit",
          "A type of index",
          "A stored procedure"
        ],
        "correctIndex": 1,
        "explanation": "Transactions group multiple statements into one all-or-nothing unit."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What command starts a transaction?",
        "options": [
          "BEGIN TRANSACTION;",
          "START TRANSACTION;",
          "OPEN TRANSACTION;",
          "NEW TRANSACTION;"
        ],
        "correctIndex": 1,
        "explanation": "START TRANSACTION is the standard MySQL command."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What makes a transaction's changes permanent?",
        "options": [
          "ROLLBACK",
          "COMMIT",
          "SAVEPOINT",
          "END"
        ],
        "correctIndex": 1,
        "explanation": "COMMIT finalizes and saves all changes made in the transaction."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What can undo changes made within an uncommitted transaction?",
        "options": [
          "COMMIT",
          "ROLLBACK",
          "SAVE",
          "DELETE"
        ],
        "correctIndex": 1,
        "explanation": "ROLLBACK reverts all changes made since the transaction started."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why are transactions essential for a bank transfer between two accounts?",
        "options": [
          "They make the transfer faster",
          "They ensure both the debit and credit happen together or not at all",
          "They encrypt the transaction data",
          "They're not actually necessary"
        ],
        "correctIndex": 1,
        "explanation": "Atomicity prevents a partial, inconsistent transfer."
      }
    ]
  },
  {
    "id": 100,
    "title": "COMMIT",
    "level": "Advanced",
    "category": "Transactions",
    "difficulty": "Easy",
    "estMinutes": 5,
    "concept": "COMMIT permanently saves all changes made during the current transaction, making them visible to other users and impossible to roll back afterward.",
    "realLifeExample": "After successfully processing a customer's order \u2014 inserting the order, updating inventory, and charging payment \u2014 a system runs COMMIT to lock in all three changes together as final.",
    "syntax": "START TRANSACTION;\n-- SQL statements\nCOMMIT;",
    "examples": [
      {
        "sql": "START TRANSACTION;\nINSERT INTO orders (order_id, customer_id) VALUES (1, 5);\nUPDATE products SET stock = stock - 1 WHERE product_id = 10;\nCOMMIT;",
        "output": "Query OK (changes are now permanent)",
        "explanation": "Both the INSERT and UPDATE become permanently saved to the database only once COMMIT executes \u2014 before that, they were still pending."
      }
    ],
    "importantPoints": [
      "Before COMMIT, changes within a transaction are visible only to the current session (depending on isolation level).",
      "Once committed, changes cannot be undone with ROLLBACK \u2014 they are permanent.",
      "Many database clients have 'autocommit' mode enabled by default, meaning every statement is automatically committed unless you explicitly start a transaction."
    ],
    "commonMistakes": [
      {
        "wrong": "Assuming changes are saved immediately after every SQL statement, even mid-transaction",
        "correct": "Understanding that changes only become permanent after COMMIT is explicitly run",
        "why": "Within an explicit transaction, changes remain pending and reversible until COMMIT \u2014 assuming otherwise can lead to confusion about whether data is truly saved."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a transaction that inserts a new customer, then commits the change.",
        "difficulty": "Easy",
        "hint": "Use START TRANSACTION, INSERT, then COMMIT."
      },
      {
        "text": "Explain what 'autocommit' mode means in MySQL.",
        "difficulty": "Medium",
        "hint": "Think about what happens without an explicit START TRANSACTION."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does COMMIT do?",
        "answer": "COMMIT permanently saves all changes made during the current transaction to the database, making them visible to other sessions/users and finalizing them so they can no longer be undone with ROLLBACK."
      },
      {
        "question": "What is 'autocommit' mode in MySQL?",
        "answer": "Autocommit is MySQL's default behavior where each individual SQL statement is automatically treated as its own complete transaction and committed immediately after execution, unless you explicitly start a transaction with START TRANSACTION, which temporarily disables this automatic behavior."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does COMMIT do?",
        "options": [
          "Undoes recent changes",
          "Permanently saves all changes in the current transaction",
          "Deletes the current transaction",
          "Pauses the transaction"
        ],
        "correctIndex": 1,
        "explanation": "COMMIT finalizes and saves the transaction's changes."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Can a committed transaction be rolled back afterward?",
        "options": [
          "Yes, always",
          "No, committed changes are permanent",
          "Only within 5 minutes",
          "Only by an admin"
        ],
        "correctIndex": 1,
        "explanation": "Once committed, ROLLBACK no longer has any effect on those changes."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What is MySQL's default 'autocommit' behavior?",
        "options": [
          "Nothing is ever committed automatically",
          "Each statement is automatically committed as its own transaction",
          "Only SELECT statements are autocommitted",
          "Autocommit doesn't exist in MySQL"
        ],
        "correctIndex": 1,
        "explanation": "By default, individual statements commit immediately unless a transaction is explicitly started."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Before COMMIT, are a transaction's changes typically final?",
        "options": [
          "Yes, immediately final",
          "No, they remain pending and can still be rolled back",
          "Only SELECT changes are final",
          "It depends on the table engine only"
        ],
        "correctIndex": 1,
        "explanation": "Uncommitted changes remain reversible until COMMIT executes."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why might a system COMMIT only after multiple related statements succeed?",
        "options": [
          "To make the process slower",
          "To ensure all related changes are saved together as one consistent unit",
          "COMMIT is required after every single statement always",
          "It has no real purpose"
        ],
        "correctIndex": 1,
        "explanation": "Grouping related changes under one COMMIT preserves consistency."
      }
    ]
  },
  {
    "id": 101,
    "title": "ROLLBACK",
    "level": "Advanced",
    "category": "Transactions",
    "difficulty": "Medium",
    "estMinutes": 6,
    "concept": "ROLLBACK undoes all changes made during the current transaction since it began (or since the last SAVEPOINT), restoring the database to its previous state \u2014 essential for recovering from errors mid-transaction.",
    "realLifeExample": "If a bank transfer's debit succeeds but the corresponding credit fails due to an error, ROLLBACK can undo the debit too, ensuring the transfer doesn't leave money missing from the sender's account.",
    "syntax": "START TRANSACTION;\n-- SQL statements\nROLLBACK;",
    "examples": [
      {
        "sql": "START TRANSACTION;\nUPDATE accounts SET balance = balance - 500 WHERE account_id = 1;\n-- An error occurs before crediting account 2\nROLLBACK;",
        "output": "Query OK (the balance deduction is undone)",
        "explanation": "Since COMMIT was never reached, ROLLBACK reverses the UPDATE entirely, restoring account 1's balance as if the transaction never happened."
      }
    ],
    "importantPoints": [
      "ROLLBACK only affects changes made since the transaction started (or since the last SAVEPOINT).",
      "Once a transaction has been committed, ROLLBACK can no longer undo those changes.",
      "ROLLBACK is commonly triggered automatically by application code when an error or exception is caught mid-transaction."
    ],
    "commonMistakes": [
      {
        "wrong": "Leaving a failed multi-step operation partially applied, with no ROLLBACK",
        "correct": "Calling ROLLBACK as soon as an error is detected mid-transaction",
        "why": "Without ROLLBACK, a failed operation partway through can leave the database in an inconsistent, partially-updated state that's difficult to recover from later."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a transaction that attempts an UPDATE, then rolls it back instead of committing.",
        "difficulty": "Easy",
        "hint": "Use START TRANSACTION, UPDATE, then ROLLBACK."
      },
      {
        "text": "Explain a real-world scenario where an application should automatically trigger a ROLLBACK.",
        "difficulty": "Medium",
        "hint": "Think about error handling during a multi-step process."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does ROLLBACK do?",
        "answer": "ROLLBACK undoes all changes made during the current transaction since it started (or since the last SAVEPOINT), restoring the database to the state it was in before those changes \u2014 it's essential for recovering cleanly from errors that occur mid-transaction."
      },
      {
        "question": "Can ROLLBACK undo changes after COMMIT has already been executed?",
        "answer": "No \u2014 once a transaction has been committed, those changes are permanent, and ROLLBACK has no effect on them. ROLLBACK can only undo changes that are still pending within an active, uncommitted transaction."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does ROLLBACK do?",
        "options": [
          "Saves changes permanently",
          "Undoes changes made in the current transaction",
          "Creates a new transaction",
          "Deletes the entire table"
        ],
        "correctIndex": 1,
        "explanation": "ROLLBACK reverses uncommitted transaction changes."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Can ROLLBACK undo a committed transaction?",
        "options": [
          "Yes, always",
          "No, committed changes are permanent",
          "Only within the same session",
          "Only for SELECT statements"
        ],
        "correctIndex": 1,
        "explanation": "ROLLBACK has no effect once COMMIT has already finalized the changes."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "When is ROLLBACK typically used?",
        "options": [
          "After every successful operation",
          "When an error occurs mid-transaction",
          "Instead of SELECT",
          "To speed up queries"
        ],
        "correctIndex": 1,
        "explanation": "Errors mid-transaction are the classic trigger for a ROLLBACK."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What does ROLLBACK restore the database to?",
        "options": [
          "A random previous state",
          "The state before the current transaction's changes",
          "The very first ever state of the table",
          "It doesn't restore anything"
        ],
        "correctIndex": 1,
        "explanation": "ROLLBACK reverts to the state prior to the transaction's uncommitted changes."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why is ROLLBACK important for multi-step operations like transfers?",
        "options": [
          "It's not actually important",
          "It prevents leaving the database in a partially-updated, inconsistent state",
          "It makes the transfer complete faster",
          "It automatically fixes application bugs"
        ],
        "correctIndex": 1,
        "explanation": "ROLLBACK ensures failed multi-step operations don't leave inconsistent partial data."
      }
    ]
  },
  {
    "id": 102,
    "title": "SAVEPOINT",
    "level": "Advanced",
    "category": "Transactions",
    "difficulty": "Hard",
    "estMinutes": 7,
    "concept": "A SAVEPOINT marks a specific point within a transaction that you can later roll back to, without undoing the entire transaction \u2014 useful for partially undoing complex, multi-step operations.",
    "realLifeExample": "An order-processing transaction that inserts an order, then attempts to apply an optional discount code, might use a SAVEPOINT before the discount step \u2014 if the discount code is invalid, only that step rolls back, while the order itself remains intact.",
    "syntax": "START TRANSACTION;\n-- statements\nSAVEPOINT savepoint_name;\n-- more statements\nROLLBACK TO savepoint_name;\n-- optionally continue, then COMMIT;",
    "examples": [
      {
        "sql": "START TRANSACTION;\nINSERT INTO orders (order_id, customer_id) VALUES (1, 5);\nSAVEPOINT before_discount;\nUPDATE orders SET discount = 'INVALID10' WHERE order_id = 1;\nROLLBACK TO before_discount;\nCOMMIT;",
        "output": "Query OK (the order INSERT remains, but the invalid discount UPDATE is undone)",
        "explanation": "ROLLBACK TO before_discount undoes only the UPDATE that happened after the savepoint, while the earlier INSERT remains intact and is still committed at the end."
      }
    ],
    "importantPoints": [
      "Multiple savepoints can exist within one transaction, each with a unique name.",
      "ROLLBACK TO savepoint_name only undoes changes made after that specific savepoint, not the entire transaction.",
      "After rolling back to a savepoint, you can still continue the transaction and eventually COMMIT the remaining changes."
    ],
    "commonMistakes": [
      {
        "wrong": "Using a full ROLLBACK when only the last part of a transaction needs to be undone",
        "correct": "Using SAVEPOINT before the risky step, then ROLLBACK TO that savepoint if needed",
        "why": "A full ROLLBACK discards the ENTIRE transaction, including valid earlier steps \u2014 SAVEPOINT allows more precise, partial undo within a larger transaction."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a transaction with a SAVEPOINT before a risky UPDATE, then roll back only to that savepoint.",
        "difficulty": "Hard",
        "hint": "Use SAVEPOINT, then ROLLBACK TO savepoint_name."
      },
      {
        "text": "Explain a scenario where using SAVEPOINT is clearly better than a full ROLLBACK.",
        "difficulty": "Advanced",
        "hint": "Think about a multi-step process where only one step might fail."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does a SAVEPOINT allow you to do within a transaction?",
        "answer": "A SAVEPOINT marks a specific point within an ongoing transaction, allowing you to later roll back to that exact point using ROLLBACK TO savepoint_name \u2014 undoing only the changes made after the savepoint, while preserving earlier changes made within the same transaction, rather than discarding the entire transaction."
      },
      {
        "question": "Can you continue a transaction and eventually COMMIT after rolling back to a savepoint?",
        "answer": "Yes \u2014 rolling back to a savepoint only undoes the changes made after that point; the transaction itself remains active. You can continue executing new statements from that point forward, and eventually COMMIT the transaction, which will include the changes made before the savepoint plus any new changes made afterward."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does SAVEPOINT allow you to do?",
        "options": [
          "Undo the entire transaction only",
          "Mark a point to partially roll back to within a transaction",
          "Permanently save changes early",
          "Create a backup of the whole database"
        ],
        "correctIndex": 1,
        "explanation": "SAVEPOINT enables precise, partial rollback within a larger transaction."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What command rolls back to a specific savepoint?",
        "options": [
          "ROLLBACK;",
          "ROLLBACK TO savepoint_name;",
          "UNDO savepoint_name;",
          "REVERT TO savepoint_name;"
        ],
        "correctIndex": 1,
        "explanation": "ROLLBACK TO targets a specific named savepoint."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Does rolling back to a savepoint undo the entire transaction?",
        "options": [
          "Yes, always",
          "No, only changes made after that savepoint",
          "Only if COMMIT was already run",
          "It depends on the isolation level"
        ],
        "correctIndex": 1,
        "explanation": "Only changes after the savepoint are reversed; earlier changes remain."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can you continue a transaction after rolling back to a savepoint?",
        "options": [
          "No, the transaction ends immediately",
          "Yes, you can continue and later COMMIT",
          "Only if you restart MySQL",
          "Only with a new transaction"
        ],
        "correctIndex": 1,
        "explanation": "The transaction stays active, allowing further statements and an eventual COMMIT."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "When is SAVEPOINT particularly useful?",
        "options": [
          "For simple, single-statement transactions",
          "For complex, multi-step transactions where only part might need undoing",
          "Only for SELECT statements",
          "It has no practical use case"
        ],
        "correctIndex": 1,
        "explanation": "Multi-step transactions with an optional or risky step benefit most from savepoints."
      }
    ]
  },
  {
    "id": 103,
    "title": "ACID",
    "level": "Advanced",
    "category": "Transactions",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "ACID stands for Atomicity, Consistency, Isolation, and Durability \u2014 four properties that guarantee database transactions are processed reliably, even in the face of errors, power failures, or concurrent access.",
    "realLifeExample": "A banking system relies on ACID properties so that a money transfer is guaranteed to either fully complete or not happen at all (Atomicity), never leaves the books unbalanced (Consistency), isn't corrupted by simultaneous transfers (Isolation), and survives a server crash immediately after confirming success (Durability).",
    "syntax": "-- ACID is a set of guaranteed properties, not a single SQL command:\nSTART TRANSACTION;\n-- statements demonstrating atomicity and consistency\nCOMMIT; -- durability guaranteed after this point",
    "examples": [
      {
        "sql": "START TRANSACTION;\nUPDATE accounts SET balance = balance - 500 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 500 WHERE account_id = 2;\nCOMMIT;",
        "output": "Query OK (both changes are atomic, consistent, isolated, and durable)",
        "explanation": "This simple transfer demonstrates all four ACID properties together: both updates happen as one atomic unit, the total balance remains consistent, other transactions can't see a half-completed state, and once committed, it survives even a crash."
      }
    ],
    "importantPoints": [
      "Atomicity: all statements in a transaction succeed together, or none do.",
      "Consistency: a transaction always takes the database from one valid state to another valid state, respecting all constraints.",
      "Isolation: concurrent transactions don't interfere with each other's intermediate, uncommitted states.",
      "Durability: once committed, changes survive permanently, even through crashes or power failures."
    ],
    "commonMistakes": [
      {
        "wrong": "Assuming ACID guarantees are automatic for every single query regardless of engine",
        "correct": "Understanding that ACID compliance depends on using a transactional storage engine like InnoDB (not MyISAM)",
        "why": "Not every MySQL storage engine fully supports ACID properties \u2014 MyISAM, for example, doesn't support transactions at all, while InnoDB does."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Explain, in your own words, what would happen if the 'Atomicity' property were violated during a bank transfer.",
        "difficulty": "Medium",
        "hint": "Think about a scenario where only half of a transfer completes."
      },
      {
        "text": "Explain, in your own words, what would happen if the 'Durability' property were violated after a COMMIT.",
        "difficulty": "Medium",
        "hint": "Think about a server crash right after a successful commit."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does ACID stand for, and why does it matter?",
        "answer": "ACID stands for Atomicity (all-or-nothing execution), Consistency (valid state to valid state), Isolation (concurrent transactions don't interfere with each other), and Durability (committed changes survive permanently). Together, these four properties guarantee that database transactions remain reliable and trustworthy, even under errors, crashes, or heavy concurrent use \u2014 which is critical for systems like banking, e-commerce, and any application where data integrity truly matters."
      },
      {
        "question": "Which MySQL storage engine is known for full ACID compliance, and which is not?",
        "answer": "InnoDB (MySQL's default storage engine since version 5.5) is fully ACID-compliant and supports transactions. MyISAM, an older storage engine, does NOT support transactions and therefore does not provide ACID guarantees \u2014 this is an important consideration when choosing a storage engine for transactional workloads."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does the 'A' in ACID stand for?",
        "options": [
          "Availability",
          "Atomicity",
          "Access",
          "Assurance"
        ],
        "correctIndex": 1,
        "explanation": "Atomicity means all-or-nothing execution of a transaction."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does 'Isolation' guarantee in ACID?",
        "options": [
          "Data is encrypted",
          "Concurrent transactions don't interfere with each other",
          "Transactions run faster",
          "Data is automatically backed up"
        ],
        "correctIndex": 1,
        "explanation": "Isolation prevents transactions from seeing each other's incomplete changes."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does 'Durability' guarantee?",
        "options": [
          "Changes are reversible forever",
          "Committed changes survive crashes/failures permanently",
          "Data is always encrypted",
          "Queries always run quickly"
        ],
        "correctIndex": 1,
        "explanation": "Once committed, data persists even through system failures."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which MySQL storage engine is fully ACID-compliant?",
        "options": [
          "MyISAM",
          "InnoDB",
          "CSV",
          "MEMORY"
        ],
        "correctIndex": 1,
        "explanation": "InnoDB supports transactions and full ACID compliance; MyISAM does not."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What does 'Consistency' ensure in ACID?",
        "options": [
          "Queries run in a fixed amount of time",
          "A transaction takes the database from one valid state to another, respecting constraints",
          "Data is duplicated across servers",
          "All users see the same UI"
        ],
        "correctIndex": 1,
        "explanation": "Consistency ensures transactions never violate the database's defined rules and constraints."
      }
    ]
  },
  {
    "id": 104,
    "title": "Isolation Levels",
    "level": "Advanced",
    "category": "Transactions",
    "difficulty": "Hard",
    "estMinutes": 10,
    "concept": "Isolation levels control how much one transaction can 'see' of another concurrent, uncommitted transaction's changes \u2014 balancing data consistency against performance. MySQL supports four standard levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, and SERIALIZABLE.",
    "realLifeExample": "An online banking app checking your balance while another transaction is mid-transfer needs an isolation level that prevents seeing that transfer's uncommitted, possibly-about-to-fail changes \u2014 choosing the right isolation level prevents showing incorrect, temporary balances.",
    "syntax": "SET TRANSACTION ISOLATION LEVEL READ COMMITTED;\nSTART TRANSACTION;\n-- statements\nCOMMIT;",
    "examples": [
      {
        "sql": "SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSTART TRANSACTION;\nSELECT balance FROM accounts WHERE account_id = 1;\n-- (Another transaction updates this row, but commits after)\nSELECT balance FROM accounts WHERE account_id = 1;\nCOMMIT;",
        "output": "balance\n--------\n1000\n(second SELECT still shows 1000, unaffected by the other transaction's change)",
        "explanation": "Under REPEATABLE READ (MySQL's default), both SELECTs within this same transaction return the identical value, even if another transaction changed and committed that row in between."
      }
    ],
    "importantPoints": [
      "READ UNCOMMITTED: transactions can see other transactions' uncommitted changes ('dirty reads') \u2014 least safe, most performant.",
      "READ COMMITTED: transactions only see committed changes from other transactions, but repeated reads within the same transaction may still see different values.",
      "REPEATABLE READ (MySQL's default): the same query within one transaction returns consistent results throughout that transaction.",
      "SERIALIZABLE: the strictest level, effectively running transactions as if one at a time \u2014 safest, but can significantly reduce concurrency/performance."
    ],
    "commonMistakes": [
      {
        "wrong": "Using SERIALIZABLE isolation for every single query 'to be extra safe'",
        "correct": "Choosing the appropriate isolation level based on actual consistency needs versus performance tradeoffs",
        "why": "SERIALIZABLE is the strictest and safest but also the slowest and most restrictive for concurrent access \u2014 using it everywhere unnecessarily can severely hurt application performance under load."
      }
    ],
    "practiceQuestions": [
      {
        "text": "List MySQL's four isolation levels in order from least to most strict.",
        "difficulty": "Medium",
        "hint": "Think READ UNCOMMITTED \u2192 READ COMMITTED \u2192 REPEATABLE READ \u2192 SERIALIZABLE."
      },
      {
        "text": "Explain what a 'dirty read' is and which isolation level allows it.",
        "difficulty": "Advanced",
        "hint": "Consider READ UNCOMMITTED specifically."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What do isolation levels control?",
        "answer": "Isolation levels control how much visibility one transaction has into another concurrent, uncommitted transaction's changes \u2014 they represent a tradeoff between stricter data consistency (seeing only fully finalized data) and better performance/concurrency (allowing more simultaneous access, with some visibility tradeoffs)."
      },
      {
        "question": "What is MySQL's default isolation level, and what does it guarantee?",
        "answer": "MySQL's default isolation level is REPEATABLE READ. It guarantees that if you run the same SELECT query multiple times within the same transaction, you'll get consistent results throughout that transaction, even if other transactions commit changes to that same data in the meantime \u2014 preventing 'non-repeatable reads' within your transaction."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What do isolation levels control?",
        "options": [
          "How data is backed up",
          "How much visibility one transaction has into another's uncommitted changes",
          "How indexes are built",
          "How tables are named"
        ],
        "correctIndex": 1,
        "explanation": "Isolation levels balance consistency and concurrency for concurrent transactions."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which isolation level is MySQL's default?",
        "options": [
          "READ UNCOMMITTED",
          "READ COMMITTED",
          "REPEATABLE READ",
          "SERIALIZABLE"
        ],
        "correctIndex": 2,
        "explanation": "REPEATABLE READ is InnoDB's default isolation level."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which isolation level is the strictest?",
        "options": [
          "READ UNCOMMITTED",
          "READ COMMITTED",
          "REPEATABLE READ",
          "SERIALIZABLE"
        ],
        "correctIndex": 3,
        "explanation": "SERIALIZABLE offers the strongest consistency guarantees, at the cost of concurrency."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What is a 'dirty read'?",
        "options": [
          "Reading corrupted data from disk",
          "Seeing another transaction's uncommitted changes",
          "Reading data twice by mistake",
          "A read that fails with an error"
        ],
        "correctIndex": 1,
        "explanation": "Dirty reads occur when uncommitted changes from another transaction are visible, allowed under READ UNCOMMITTED."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is the tradeoff of using SERIALIZABLE everywhere?",
        "options": [
          "No tradeoff, it's always best",
          "Reduced concurrency and potential performance impact",
          "It disables transactions entirely",
          "It only works with MyISAM"
        ],
        "correctIndex": 1,
        "explanation": "Stricter isolation reduces how much concurrent access can safely occur simultaneously."
      }
    ]
  },
  {
    "id": 105,
    "title": "Deadlocks",
    "level": "Advanced",
    "category": "Transactions",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "A deadlock occurs when two or more transactions are each waiting for the other to release a lock, creating a cycle where none of them can proceed. MySQL automatically detects deadlocks and forcibly rolls back one of the transactions to break the cycle.",
    "realLifeExample": "Transaction A locks Row 1 and then tries to lock Row 2, while at the same time Transaction B has already locked Row 2 and is trying to lock Row 1 \u2014 neither can proceed, and MySQL must intervene by rolling one of them back.",
    "syntax": "-- Deadlocks aren't caused by one command, but by conflicting lock order across transactions:\n-- Transaction A: UPDATE table SET ... WHERE id = 1; then WHERE id = 2;\n-- Transaction B: UPDATE table SET ... WHERE id = 2; then WHERE id = 1;",
    "examples": [
      {
        "sql": "-- Transaction A\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE account_id = 2;\nCOMMIT;",
        "output": "ERROR 1213: Deadlock found when trying to get lock; try restarting transaction",
        "explanation": "If another concurrent transaction were updating account_id 2 first, then trying to update account_id 1, both transactions could end up waiting on each other \u2014 MySQL detects this and automatically kills one with this error."
      }
    ],
    "importantPoints": [
      "MySQL automatically detects deadlocks and rolls back one of the involved transactions to resolve them.",
      "The 'losing' transaction receives an error and should be retried by the application.",
      "A common way to prevent deadlocks is to always access/lock tables and rows in a consistent order across all transactions."
    ],
    "commonMistakes": [
      {
        "wrong": "Different parts of an application updating related rows in inconsistent orders (sometimes A-then-B, sometimes B-then-A)",
        "correct": "Ensuring all transactions consistently lock/update rows in the same order (e.g., always by ascending account_id)",
        "why": "Inconsistent lock ordering across different transactions is the most common root cause of deadlocks \u2014 enforcing a consistent order largely eliminates the possibility."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Explain, step by step, how two transactions could deadlock when updating the same two rows in opposite order.",
        "difficulty": "Hard",
        "hint": "Walk through what each transaction locks and waits for."
      },
      {
        "text": "Describe a coding practice that helps prevent deadlocks in an application handling many concurrent transfers.",
        "difficulty": "Advanced",
        "hint": "Think about consistent ordering of lock acquisition."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a deadlock, and how does MySQL handle it?",
        "answer": "A deadlock occurs when two or more transactions are each waiting for a lock currently held by the other, forming a cycle where none can proceed. MySQL's InnoDB engine automatically detects this cycle and resolves it by choosing one transaction as the 'victim', forcibly rolling it back with an error, allowing the other transaction(s) to proceed."
      },
      {
        "question": "What is a common strategy to help prevent deadlocks in application code?",
        "answer": "Ensuring that all transactions across the application access and lock shared resources (like rows in a table) in a consistent, predictable order \u2014 for example, always updating accounts in ascending order of account_id \u2014 significantly reduces the chance of two transactions forming a circular waiting dependency."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What causes a deadlock?",
        "options": [
          "A single transaction running too long",
          "Two or more transactions waiting on each other's locks in a cycle",
          "A missing index",
          "A syntax error in SQL"
        ],
        "correctIndex": 1,
        "explanation": "Circular lock-waiting between transactions creates a deadlock."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How does MySQL typically resolve a deadlock?",
        "options": [
          "It waits indefinitely until manually resolved",
          "It automatically detects and rolls back one of the transactions",
          "It crashes the entire server",
          "It ignores the deadlock silently"
        ],
        "correctIndex": 1,
        "explanation": "MySQL's deadlock detection automatically picks a 'victim' transaction to roll back."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What should an application do when it receives a deadlock error?",
        "options": [
          "Give up permanently",
          "Typically retry the transaction",
          "Restart the entire database",
          "Ignore the error"
        ],
        "correctIndex": 1,
        "explanation": "Deadlock errors are usually meant to be caught and the transaction retried."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What is a common way to help prevent deadlocks?",
        "options": [
          "Using more indexes",
          "Accessing/locking resources in a consistent order across transactions",
          "Avoiding transactions entirely",
          "Using SERIALIZABLE isolation always"
        ],
        "correctIndex": 1,
        "explanation": "Consistent lock ordering is a standard, effective deadlock prevention technique."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which storage engine feature enables MySQL to detect deadlocks?",
        "options": [
          "MyISAM's table locking",
          "InnoDB's row-level locking and deadlock detection",
          "The event scheduler",
          "The query cache"
        ],
        "correctIndex": 1,
        "explanation": "InnoDB's transactional locking system includes automatic deadlock detection."
      }
    ]
  },
  {
    "id": 106,
    "title": "Query Optimization",
    "level": "Advanced",
    "category": "Performance",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "Query optimization is the process of rewriting or restructuring SQL queries so they run faster and use fewer resources, typically by reducing the amount of data scanned or improving how the database accesses it.",
    "realLifeExample": "An analytics dashboard that took 30 seconds to load because of a poorly written query can often be optimized down to under 1 second by adding the right index or restructuring a subquery.",
    "syntax": "-- Optimization often means comparing alternatives:\nSELECT * FROM orders WHERE YEAR(order_date) = 2026;\n-- vs a more optimizable version:\nSELECT * FROM orders WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01';",
    "examples": [
      {
        "sql": "SELECT * FROM orders WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01';",
        "output": "(Runs faster than the YEAR() version if order_date is indexed)",
        "explanation": "Wrapping a column in a function like YEAR() prevents MySQL from using an index on it; comparing the raw column directly allows the index to be used."
      }
    ],
    "importantPoints": [
      "Avoid wrapping indexed columns in functions within WHERE clauses, since it often prevents index usage.",
      "SELECT only the columns you need instead of SELECT *, reducing data transfer.",
      "Use EXPLAIN to see how MySQL plans to execute a query before assuming where the slowness is."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE YEAR(order_date) = 2026",
        "correct": "WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01'",
        "why": "Functions applied to a column in WHERE typically block MySQL from using an index on that column, forcing a full table scan instead."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Rewrite a query filtering WHERE MONTH(signup_date) = 5 to be more index-friendly.",
        "difficulty": "Hard",
        "hint": "Use a date range comparison instead of MONTH()."
      },
      {
        "text": "Explain why SELECT * can hurt performance on a wide table even if you only need 2 columns.",
        "difficulty": "Medium",
        "hint": "Think about unnecessary data transfer."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is query optimization?",
        "answer": "Query optimization is the practice of rewriting or restructuring SQL queries to run more efficiently, typically by reducing the amount of data scanned, avoiding unnecessary computation, and enabling the database to use indexes effectively."
      },
      {
        "question": "Why does wrapping a column in a function inside WHERE often hurt performance?",
        "answer": "Functions like YEAR() or UPPER() applied directly to a column in a WHERE clause generally prevent MySQL from using any existing index on that column, since the index stores the raw column values, not the function's transformed output \u2014 forcing a full table scan instead."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is the goal of query optimization?",
        "options": [
          "Make queries longer",
          "Make queries run faster using fewer resources",
          "Remove all WHERE clauses",
          "Increase table size"
        ],
        "correctIndex": 1,
        "explanation": "Optimization improves speed and resource efficiency."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Why does WHERE YEAR(order_date) = 2026 often perform poorly?",
        "options": [
          "YEAR() is invalid syntax",
          "It prevents MySQL from using an index on order_date",
          "It only works with MyISAM",
          "It's actually the fastest approach"
        ],
        "correctIndex": 1,
        "explanation": "Wrapping a column in a function typically blocks index usage."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What tool shows how MySQL plans to execute a query?",
        "options": [
          "DESCRIBE",
          "EXPLAIN",
          "SHOW PLAN",
          "ANALYZE ONLY"
        ],
        "correctIndex": 1,
        "explanation": "EXPLAIN reveals the query execution plan."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why avoid SELECT * for performance-sensitive queries?",
        "options": [
          "It's required syntax",
          "It transfers unnecessary data for unused columns",
          "It always causes errors",
          "It disables all indexes"
        ],
        "correctIndex": 1,
        "explanation": "Selecting only needed columns reduces data transfer overhead."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Which is a better-optimized filter on an indexed date column?",
        "options": [
          "WHERE YEAR(date_col) = 2026",
          "WHERE date_col >= '2026-01-01' AND date_col < '2027-01-01'",
          "WHERE date_col = '2026'",
          "WHERE date_col LIKE '2026%'"
        ],
        "correctIndex": 1,
        "explanation": "A direct range comparison preserves the ability to use an index."
      }
    ]
  },
  {
    "id": 107,
    "title": "EXPLAIN",
    "level": "Advanced",
    "category": "Performance",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "EXPLAIN shows MySQL's execution plan for a query \u2014 how it intends to access tables, which indexes (if any) it will use, and roughly how many rows it expects to examine, without actually running the query.",
    "realLifeExample": "A developer debugging a slow report runs EXPLAIN SELECT ... before the actual query, discovering the query is doing a full table scan (type: ALL) instead of using an available index, immediately pointing to the fix needed.",
    "syntax": "EXPLAIN SELECT columns FROM table_name WHERE condition;",
    "examples": [
      {
        "sql": "EXPLAIN SELECT * FROM orders WHERE customer_id = 5;",
        "output": "id | table  | type | possible_keys | key      | rows\n---|--------|------|---------------|----------|------\n1  | orders | ref  | idx_customer  | idx_cust | 12",
        "explanation": "The 'type: ref' and 'key: idx_customer' show MySQL is using an index to find matching rows efficiently, rather than scanning the whole table."
      }
    ],
    "importantPoints": [
      "A 'type' of ALL in EXPLAIN's output usually means a full table scan \u2014 often a red flag for large tables.",
      "The 'key' column shows which index (if any) MySQL actually decided to use.",
      "The 'rows' column is an estimate of how many rows MySQL expects to examine \u2014 lower is generally better."
    ],
    "commonMistakes": [
      {
        "wrong": "Guessing why a query is slow without checking its execution plan",
        "correct": "Running EXPLAIN before the query to see exactly how MySQL plans to execute it",
        "why": "Without EXPLAIN, optimization efforts are just guesswork \u2014 it reveals concretely whether indexes are being used and where the bottleneck likely is."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Run EXPLAIN on a SELECT query filtering by an indexed column and note the 'type' and 'key' values.",
        "difficulty": "Medium",
        "hint": "Compare against the same query on a non-indexed column."
      },
      {
        "text": "Explain what a 'type: ALL' result in EXPLAIN typically indicates.",
        "difficulty": "Medium",
        "hint": "Think about what happens when no index can be used."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the EXPLAIN command show?",
        "answer": "EXPLAIN shows MySQL's execution plan for a query without actually running it \u2014 including which tables are accessed, in what order, whether and which indexes are used, and an estimate of how many rows will be examined, helping you diagnose performance issues."
      },
      {
        "question": "What does a 'type: ALL' in EXPLAIN's output typically indicate?",
        "answer": "A 'type: ALL' means MySQL is performing a full table scan \u2014 checking every single row in the table because no suitable index could be used for that query. On large tables, this is usually a strong signal that an index is missing or not being utilized effectively."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does EXPLAIN do?",
        "options": [
          "Runs the query and shows results",
          "Shows the query's execution plan without running it",
          "Deletes unused indexes",
          "Creates a new index automatically"
        ],
        "correctIndex": 1,
        "explanation": "EXPLAIN reveals how MySQL intends to execute a query."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does 'type: ALL' typically indicate in EXPLAIN output?",
        "options": [
          "An optimal index is being used",
          "A full table scan is happening",
          "The query has a syntax error",
          "The table is empty"
        ],
        "correctIndex": 1,
        "explanation": "ALL usually signals no useful index was available."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does the 'key' column in EXPLAIN show?",
        "options": [
          "The primary key definition",
          "Which index MySQL actually chose to use, if any",
          "The table's row count",
          "The query's execution time"
        ],
        "correctIndex": 1,
        "explanation": "The 'key' field names the specific index used, or is empty if none was used."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why is EXPLAIN useful before optimizing a slow query?",
        "options": [
          "It's not useful, guessing is faster",
          "It provides concrete evidence about index usage and row estimates",
          "It automatically fixes the query",
          "It only works on SELECT COUNT queries"
        ],
        "correctIndex": 1,
        "explanation": "EXPLAIN replaces guesswork with actual execution plan data."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Does EXPLAIN actually execute the query and return its data?",
        "options": [
          "Yes, always",
          "No, it only shows the execution plan",
          "Only for INSERT statements",
          "Only in MySQL 8+"
        ],
        "correctIndex": 1,
        "explanation": "EXPLAIN describes the plan without running the underlying query."
      }
    ]
  },
  {
    "id": 108,
    "title": "Index Optimization",
    "level": "Advanced",
    "category": "Performance",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "Index optimization involves choosing, creating, and maintaining the right indexes for your actual query patterns \u2014 since too few indexes slow reads, but too many slow writes and waste storage.",
    "realLifeExample": "An e-commerce platform notices product searches are slow, uses EXPLAIN to confirm no index is being used, and adds a targeted composite index matching the exact WHERE and ORDER BY pattern of that search query \u2014 dramatically improving speed without over-indexing the whole table.",
    "syntax": "-- Index optimization is a process, informed by EXPLAIN and real query patterns:\nEXPLAIN SELECT * FROM products WHERE category = 'Electronics' ORDER BY price;\nCREATE INDEX idx_category_price ON products (category, price);",
    "examples": [
      {
        "sql": "CREATE INDEX idx_category_price ON products (category, price);\nEXPLAIN SELECT * FROM products WHERE category = 'Electronics' ORDER BY price;",
        "output": "type: ref | key: idx_category_price | rows: 40 (much lower than before)",
        "explanation": "The new composite index matches both the WHERE filter (category) and the ORDER BY (price), letting MySQL satisfy both parts of the query efficiently using one index."
      }
    ],
    "importantPoints": [
      "Index optimization should be driven by actual, observed query patterns \u2014 not guesswork or 'just in case' indexing.",
      "Removing unused indexes is just as important as adding needed ones, since every index adds write overhead.",
      "Composite index column order should generally match how queries filter and sort, following the leftmost-prefix principle."
    ],
    "commonMistakes": [
      {
        "wrong": "Adding a new index every time a query feels slow, without checking if an existing index already covers it",
        "correct": "Using EXPLAIN first to check current index usage, then adding indexes deliberately based on evidence",
        "why": "Blindly adding indexes can create redundant, overlapping indexes that waste storage and slow down writes without meaningfully improving reads."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Given a query filtering by department_id and sorting by hire_date, design an appropriate composite index.",
        "difficulty": "Hard",
        "hint": "Match the index column order to the WHERE and ORDER BY pattern."
      },
      {
        "text": "Explain how you would identify and remove an unused index in a production database.",
        "difficulty": "Advanced",
        "hint": "Think about MySQL's performance_schema or slow query logs."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does index optimization involve?",
        "answer": "Index optimization involves analyzing actual query patterns (often using EXPLAIN) to decide which indexes will genuinely improve performance, creating well-designed indexes (including composite indexes when appropriate) that match those patterns, and removing indexes that are unused or redundant, since every index has a storage and write-performance cost."
      },
      {
        "question": "Why is it important to remove unused indexes, not just add helpful ones?",
        "answer": "Every index MySQL maintains adds overhead to INSERT, UPDATE, and DELETE operations, since the index structure must be updated alongside the actual data, and also consumes additional disk storage. An unused index provides no read benefit while still incurring this ongoing cost, making it a pure performance liability."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What should drive index optimization decisions?",
        "options": [
          "Random guessing",
          "Actual, observed query patterns",
          "Adding indexes to every column",
          "Company size"
        ],
        "correctIndex": 1,
        "explanation": "Real query patterns (often revealed via EXPLAIN) should guide indexing decisions."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Why remove unused indexes?",
        "options": [
          "They provide no benefit but still add write overhead",
          "Unused indexes speed up all queries",
          "MySQL requires a maximum of 3 indexes",
          "It's purely cosmetic"
        ],
        "correctIndex": 0,
        "explanation": "Unused indexes cost storage and write performance with no read benefit."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What principle should guide composite index column order?",
        "options": [
          "Alphabetical order always",
          "Matching the leftmost-prefix pattern of actual queries",
          "Random order",
          "Reverse creation order"
        ],
        "correctIndex": 1,
        "explanation": "Column order should reflect how queries actually filter and sort."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What tool helps verify whether an index is actually being used?",
        "options": [
          "DROP INDEX",
          "EXPLAIN",
          "BACKUP",
          "COMMIT"
        ],
        "correctIndex": 1,
        "explanation": "EXPLAIN reveals which index (if any) a query actually uses."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is a risk of blindly adding indexes without evidence?",
        "options": [
          "No risk at all",
          "Redundant indexes that waste storage and slow writes",
          "Queries become faster automatically with no downside",
          "It's impossible to over-index a table"
        ],
        "correctIndex": 1,
        "explanation": "Unjustified indexing adds cost without guaranteed benefit."
      }
    ]
  },
  {
    "id": 109,
    "title": "Query Execution",
    "level": "Advanced",
    "category": "Performance",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "Understanding query execution means knowing the logical order MySQL processes a SQL statement's clauses \u2014 which is different from the order you actually type them in a query.",
    "realLifeExample": "A developer confused about why an alias defined in SELECT can't be used in the same query's WHERE clause needs to understand execution order: WHERE is logically processed before SELECT, so that alias doesn't exist yet at that point.",
    "syntax": "-- Written order: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT\n-- Logical execution order: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT",
    "examples": [
      {
        "sql": "SELECT name, salary * 12 AS annual_salary FROM employees WHERE annual_salary > 600000;",
        "output": "ERROR 1054: Unknown column 'annual_salary' in 'where clause'",
        "explanation": "Since WHERE is logically processed before SELECT, the alias 'annual_salary' doesn't exist yet when WHERE runs \u2014 this is why the alias can't be referenced there."
      }
    ],
    "importantPoints": [
      "FROM (and JOINs) is processed first, establishing the base data set to work with.",
      "WHERE filters rows before any grouping or aggregation happens.",
      "SELECT (including column aliases) is processed relatively late \u2014 after WHERE, GROUP BY, and HAVING, which is why aliases can't be used in WHERE.",
      "ORDER BY runs last (before LIMIT), which is why it CAN reference SELECT aliases."
    ],
    "commonMistakes": [
      {
        "wrong": "WHERE annual_salary > 600000 -- referencing a SELECT alias in WHERE",
        "correct": "WHERE salary * 12 > 600000 -- or move the filter to HAVING if using an aggregate alias",
        "why": "Since WHERE executes before SELECT logically, any alias defined in SELECT isn't available yet \u2014 you must repeat the underlying expression or use HAVING for aggregate aliases."
      }
    ],
    "practiceQuestions": [
      {
        "text": "List the logical execution order of a query with SELECT, FROM, WHERE, GROUP BY, HAVING, and ORDER BY.",
        "difficulty": "Medium",
        "hint": "Recall: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY."
      },
      {
        "text": "Explain why ORDER BY can use a SELECT alias, but WHERE cannot.",
        "difficulty": "Advanced",
        "hint": "Think about which clause executes before or after SELECT logically."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the logical order of execution for a typical SQL query?",
        "answer": "Logically, MySQL processes clauses in this order: FROM (and JOINs) first to establish the data source, then WHERE to filter rows, then GROUP BY to group them, then HAVING to filter groups, then SELECT to choose and compute output columns, then ORDER BY to sort the final result, and finally LIMIT to restrict the row count \u2014 this differs from the order you actually write the clauses in."
      },
      {
        "question": "Why can't you reference a SELECT alias inside the WHERE clause of the same query?",
        "answer": "Because WHERE is logically processed before SELECT in MySQL's execution order, the alias defined in SELECT doesn't exist yet at the point WHERE is evaluated \u2014 you must repeat the full underlying expression in WHERE instead, or use HAVING (which runs after SELECT-level grouping) if filtering on an aggregate."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What clause is logically processed first in a SQL query?",
        "options": [
          "SELECT",
          "FROM",
          "ORDER BY",
          "HAVING"
        ],
        "correctIndex": 1,
        "explanation": "FROM establishes the base dataset before anything else happens."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Why can't a WHERE clause reference a column alias defined in SELECT?",
        "options": [
          "It's just a MySQL bug",
          "WHERE executes before SELECT logically, so the alias doesn't exist yet",
          "Aliases are never allowed anywhere",
          "WHERE always runs last"
        ],
        "correctIndex": 1,
        "explanation": "SELECT (and its aliases) is processed after WHERE in the logical execution order."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which clause CAN reference a SELECT alias?",
        "options": [
          "WHERE",
          "ORDER BY",
          "FROM",
          "JOIN ON"
        ],
        "correctIndex": 1,
        "explanation": "ORDER BY executes after SELECT, so it can use aliases defined there."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Where does HAVING fit in the logical execution order relative to GROUP BY?",
        "options": [
          "Before GROUP BY",
          "After GROUP BY",
          "It replaces GROUP BY",
          "They run simultaneously always"
        ],
        "correctIndex": 1,
        "explanation": "HAVING filters the already-grouped results, so it comes after GROUP BY."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Does the written order of SQL clauses match their logical execution order?",
        "options": [
          "Yes, always identical",
          "No, they can differ significantly",
          "Only for SELECT * queries",
          "Only in older MySQL versions"
        ],
        "correctIndex": 1,
        "explanation": "Written syntax order and logical processing order are notably different in SQL."
      }
    ]
  },
  {
    "id": 110,
    "title": "Slow Queries",
    "level": "Advanced",
    "category": "Performance",
    "difficulty": "Hard",
    "estMinutes": 8,
    "concept": "A slow query is any SQL statement that takes longer than expected or acceptable to execute, typically caused by missing indexes, inefficient query design, excessive data scanning, or poor database design.",
    "realLifeExample": "An online store's product search taking 8 seconds during a big sale, when it normally takes 200ms, likely indicates a slow query problem \u2014 possibly from a missing index, table growth, or a poorly-written filter.",
    "syntax": "-- MySQL can log slow queries automatically:\nSET GLOBAL slow_query_log = 'ON';\nSET GLOBAL long_query_time = 1; -- log queries taking longer than 1 second",
    "examples": [
      {
        "sql": "SET GLOBAL slow_query_log = 'ON';\nSET GLOBAL long_query_time = 1;\n-- Slow queries are now automatically logged for later analysis",
        "output": "Query OK (slow query logging enabled)",
        "explanation": "Any query taking longer than 1 second will now be automatically recorded in MySQL's slow query log, making it easy to identify problem queries over time."
      }
    ],
    "importantPoints": [
      "MySQL's slow query log automatically records queries exceeding a configurable time threshold.",
      "Common causes of slow queries: missing indexes, SELECT *, functions on indexed columns in WHERE, and large unfiltered JOINs.",
      "EXPLAIN is the standard first step for diagnosing exactly why a specific slow query is slow."
    ],
    "commonMistakes": [
      {
        "wrong": "Only noticing slow queries when users complain, with no proactive monitoring",
        "correct": "Enabling the slow query log and reviewing it regularly to catch issues early",
        "why": "Waiting for user complaints means poor performance already impacted real users \u2014 proactive slow query logging catches problems before they become widespread."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Enable MySQL's slow query log with a threshold of 2 seconds.",
        "difficulty": "Medium",
        "hint": "Use SET GLOBAL slow_query_log and long_query_time."
      },
      {
        "text": "List three common causes of slow queries and how each might be fixed.",
        "difficulty": "Medium",
        "hint": "Think missing indexes, SELECT *, and functions in WHERE."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a slow query, and what typically causes one?",
        "answer": "A slow query is any SQL statement that takes an unacceptably long time to execute relative to expectations. Common causes include missing or poorly-designed indexes, scanning far more rows than necessary (often due to full table scans), functions applied to indexed columns in WHERE clauses preventing index use, inefficient JOINs, and simply querying very large datasets without appropriate filtering."
      },
      {
        "question": "How can MySQL help you automatically identify slow queries?",
        "answer": "MySQL provides a built-in slow query log feature, enabled via slow_query_log = ON, combined with a configurable long_query_time threshold (in seconds) \u2014 any query exceeding that threshold is automatically recorded, giving you a concrete list of problem queries to investigate and optimize."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is a slow query?",
        "options": [
          "Any SELECT statement",
          "A query that takes unacceptably long to execute",
          "A query with a syntax error",
          "A query that returns zero rows"
        ],
        "correctIndex": 1,
        "explanation": "Slow queries are defined by excessive execution time relative to expectations."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What MySQL feature automatically logs slow-running queries?",
        "options": [
          "EXPLAIN",
          "The slow query log",
          "SHOW TABLES",
          "The event scheduler"
        ],
        "correctIndex": 1,
        "explanation": "The slow query log records queries exceeding a set time threshold."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which setting controls the time threshold for the slow query log?",
        "options": [
          "slow_query_log",
          "long_query_time",
          "max_query_time",
          "query_threshold"
        ],
        "correctIndex": 1,
        "explanation": "long_query_time defines how many seconds qualifies as 'slow'."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which of these commonly causes slow queries?",
        "options": [
          "Using appropriate indexes",
          "Applying functions to indexed columns in WHERE",
          "Selecting only needed columns",
          "Using EXPLAIN"
        ],
        "correctIndex": 1,
        "explanation": "Wrapping indexed columns in functions often prevents index usage, slowing queries."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is a proactive approach to catching slow queries?",
        "options": [
          "Waiting for user complaints",
          "Regularly reviewing the slow query log",
          "Disabling all indexes",
          "Avoiding EXPLAIN entirely"
        ],
        "correctIndex": 1,
        "explanation": "Proactive log monitoring catches issues before they significantly impact users."
      }
    ]
  },
  {
    "id": 111,
    "title": "Pagination",
    "level": "Advanced",
    "category": "Performance",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "Pagination breaks a large result set into smaller, manageable 'pages' of data, typically using LIMIT and OFFSET, so an application doesn't have to load and display thousands of rows at once.",
    "realLifeExample": "A product listing page showing '20 products per page' with 'Next' and 'Previous' buttons uses pagination behind the scenes \u2014 each page click runs a query with a different OFFSET to fetch just that page's slice of products.",
    "syntax": "SELECT columns FROM table_name\nORDER BY column_name\nLIMIT page_size OFFSET (page_number - 1) * page_size;",
    "examples": [
      {
        "sql": "SELECT * FROM products ORDER BY product_id LIMIT 20 OFFSET 40;",
        "output": "(Returns products 41-60, i.e., 'page 3' if each page shows 20 products)",
        "explanation": "OFFSET 40 skips the first 40 rows (pages 1 and 2), and LIMIT 20 then returns exactly the next 20 rows for page 3."
      }
    ],
    "importantPoints": [
      "Pagination should always be combined with ORDER BY \u2014 without it, row order (and thus page contents) isn't guaranteed to be consistent between requests.",
      "Large OFFSET values can become slow on very large tables, since MySQL still has to scan through and discard all the skipped rows internally.",
      "'Keyset pagination' (using WHERE id > last_seen_id LIMIT n instead of OFFSET) is a more scalable alternative for very large datasets."
    ],
    "commonMistakes": [
      {
        "wrong": "Using LIMIT without ORDER BY for paginated results",
        "correct": "Always pairing LIMIT/OFFSET with a consistent ORDER BY",
        "why": "Without ORDER BY, MySQL doesn't guarantee a consistent row order between queries, which can cause duplicate or missing rows across different pages as users navigate."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write a query to fetch 'page 2' of a products table, with 10 products per page, ordered by price.",
        "difficulty": "Medium",
        "hint": "Use LIMIT 10 OFFSET 10."
      },
      {
        "text": "Explain why a large OFFSET value (like OFFSET 1000000) can be slow, and describe an alternative approach.",
        "difficulty": "Advanced",
        "hint": "Consider keyset/cursor-based pagination."
      }
    ],
    "interviewQuestions": [
      {
        "question": "How does LIMIT/OFFSET pagination work?",
        "answer": "LIMIT specifies the maximum number of rows to return (the 'page size'), while OFFSET specifies how many rows to skip before starting to return results \u2014 together, they let you calculate and fetch any specific 'page' of a larger, ordered result set."
      },
      {
        "question": "Why can large OFFSET values cause performance problems, and what's an alternative?",
        "answer": "Even though OFFSET skips rows in the output, MySQL often still has to internally scan through and discard all those skipped rows before it can start returning results \u2014 making very large OFFSET values (like page 10,000) increasingly slow. 'Keyset pagination' (also called cursor-based pagination), which uses a WHERE condition like id > last_seen_id combined with LIMIT, avoids this by jumping directly to the right starting point using an index, without scanning and discarding prior rows."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does LIMIT control in pagination?",
        "options": [
          "How many rows to skip",
          "The maximum number of rows returned (page size)",
          "The sort order",
          "The table name"
        ],
        "correctIndex": 1,
        "explanation": "LIMIT defines how many rows make up one page."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does OFFSET control in pagination?",
        "options": [
          "The page size",
          "How many rows to skip before returning results",
          "The column to sort by",
          "The database name"
        ],
        "correctIndex": 1,
        "explanation": "OFFSET determines the starting point by skipping earlier rows."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why is ORDER BY important when using pagination?",
        "options": [
          "It's not important",
          "It ensures consistent row ordering across page requests",
          "It replaces the need for LIMIT",
          "It only matters for the first page"
        ],
        "correctIndex": 1,
        "explanation": "Without a defined order, page contents aren't guaranteed to be consistent."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why can very large OFFSET values be slow?",
        "options": [
          "OFFSET is always instant regardless of size",
          "MySQL must still scan and discard all skipped rows internally",
          "Large OFFSET values cause syntax errors",
          "OFFSET automatically creates an index"
        ],
        "correctIndex": 1,
        "explanation": "Skipped rows still require internal processing, which scales poorly with\u5927 offsets."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is an alternative to OFFSET-based pagination for very large datasets?",
        "options": [
          "Removing pagination entirely",
          "Keyset (cursor-based) pagination using WHERE id > last_seen_id",
          "Always fetching all rows at once",
          "Using SELECT DISTINCT instead"
        ],
        "correctIndex": 1,
        "explanation": "Keyset pagination avoids the scan-and-discard cost of large offsets."
      }
    ]
  },
  {
    "id": 112,
    "title": "Large Dataset Handling",
    "level": "Advanced",
    "category": "Performance",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "Handling large datasets efficiently requires specific strategies beyond typical small-table techniques \u2014 including batch processing, careful indexing, partitioning, and avoiding operations that don't scale well.",
    "realLifeExample": "A company migrating 50 million historical records into a new table would crash if it tried a single massive INSERT ... SELECT \u2014 instead, it processes the migration in smaller batches (e.g., 10,000 rows at a time) to avoid locking issues and memory overload.",
    "syntax": "-- Batch processing pattern for large-scale updates:\nUPDATE large_table SET status = 'archived'\nWHERE status = 'old' LIMIT 10000;\n-- Repeat until 0 rows are affected",
    "examples": [
      {
        "sql": "UPDATE large_table SET status = 'archived' WHERE status = 'old' LIMIT 10000;",
        "output": "Query OK, 10000 rows affected\n(Repeat this statement until 0 rows are affected)",
        "explanation": "Instead of updating potentially millions of rows in one massive statement (which could lock the table for a long time), this processes them in manageable batches of 10,000 at a time."
      }
    ],
    "importantPoints": [
      "Batch processing large updates/deletes avoids long-held locks that can block other users' queries.",
      "Table partitioning can split a huge table into smaller, more manageable physical pieces based on a column like date.",
      "Avoid loading entire large result sets into application memory at once \u2014 process data in streams or pages instead."
    ],
    "commonMistakes": [
      {
        "wrong": "Running a single UPDATE or DELETE affecting 10 million rows all at once during business hours",
        "correct": "Breaking the operation into smaller batches, run during low-traffic periods, with monitoring in between",
        "why": "A massive single-statement operation can lock affected rows/tables for an extended time, potentially blocking other critical application queries and causing a site-wide slowdown."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Design a batch processing strategy to delete 5 million old log rows without locking the table for too long.",
        "difficulty": "Hard",
        "hint": "Use repeated DELETE ... LIMIT n statements."
      },
      {
        "text": "Explain what table partitioning is and how it could help a table with 100 million rows spanning 10 years of data.",
        "difficulty": "Advanced",
        "hint": "Think about partitioning by year or date range."
      }
    ],
    "interviewQuestions": [
      {
        "question": "Why can't typical small-table techniques be directly applied to very large datasets?",
        "answer": "Operations that are instant on a small table \u2014 like a single UPDATE or DELETE affecting all matching rows, or loading an entire result set into memory \u2014 can become prohibitively slow, lock resources for extended periods, or exhaust available memory when applied to millions or billions of rows, requiring different strategies like batching and partitioning."
      },
      {
        "question": "What is table partitioning, and how does it help with large datasets?",
        "answer": "Table partitioning splits a single large table into multiple smaller physical pieces (partitions) based on a defined rule, such as a date range or a specific column's value \u2014 while still being queryable as one logical table. This can significantly improve performance for queries that only need to touch a subset of partitions (e.g., only last month's data), and can simplify maintenance tasks like archiving old data."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Why is batch processing recommended for very large UPDATE/DELETE operations?",
        "options": [
          "It's not actually recommended",
          "It avoids long-held locks that could block other queries",
          "It makes the operation permanent immediately",
          "Batching is only needed for SELECT statements"
        ],
        "correctIndex": 1,
        "explanation": "Smaller batches reduce lock duration and contention with other queries."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is table partitioning?",
        "options": [
          "Deleting old data permanently",
          "Splitting a large table into smaller physical pieces while remaining one logical table",
          "Creating a backup copy of a table",
          "Adding more columns to a table"
        ],
        "correctIndex": 1,
        "explanation": "Partitioning organizes data into manageable physical segments."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What risk does a single massive UPDATE affecting millions of rows pose?",
        "options": [
          "No risk at all",
          "Long lock duration that can block other application queries",
          "It automatically fails safely",
          "It always runs instantly regardless of size"
        ],
        "correctIndex": 1,
        "explanation": "Large single-statement operations can hold locks for extended periods."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What is a good strategy for processing extremely large query results in an application?",
        "options": [
          "Load everything into memory at once",
          "Process data in streams or smaller pages",
          "Avoid ever querying large tables",
          "Always use SELECT *"
        ],
        "correctIndex": 1,
        "explanation": "Streaming or paging prevents memory exhaustion on large result sets."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is a common basis for partitioning a large historical table?",
        "options": [
          "Random selection",
          "A date range or similar logical column",
          "Alphabetical order of table names",
          "The number of columns"
        ],
        "correctIndex": 1,
        "explanation": "Date-based partitioning is a very common, practical strategy for historical data."
      }
    ]
  },
  {
    "id": 113,
    "title": "Database Security",
    "level": "Advanced",
    "category": "Industry",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "Database security covers the practices and controls that protect data from unauthorized access, corruption, or theft \u2014 including authentication, authorization, encryption, and safe coding practices.",
    "realLifeExample": "A healthcare system storing patient records must restrict access so only authorized doctors see specific patients' data, encrypt sensitive fields, and log every access attempt \u2014 all core database security practices.",
    "syntax": "-- Security spans many practices, not one command:\nGRANT SELECT ON hospital_db.patients TO 'doctor_user'@'%';\n-- Encryption, access control, and safe query practices all contribute to security.",
    "examples": [
      {
        "sql": "GRANT SELECT ON hospital_db.patients TO 'doctor_user'@'%';",
        "output": "Query OK, 0 rows affected",
        "explanation": "This grants a specific user read-only access to just the patients table, rather than giving broad, unrestricted access to the entire database."
      }
    ],
    "importantPoints": [
      "The principle of least privilege means giving users only the minimum access they actually need.",
      "Never store passwords in plain text \u2014 always use strong hashing (like bcrypt) for credentials.",
      "Parameterized queries (prepared statements) prevent SQL injection, a major and common security vulnerability."
    ],
    "commonMistakes": [
      {
        "wrong": "Giving every application user full root-level database access for convenience",
        "correct": "Creating specific users with GRANT statements limited to only the tables/actions they need",
        "why": "Overly broad access massively increases the damage a compromised account or buggy application could cause \u2014 least privilege limits the blast radius of any single security failure."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Explain the principle of least privilege in the context of database user permissions.",
        "difficulty": "Medium",
        "hint": "Think about giving only the minimum necessary access."
      },
      {
        "text": "List three general database security practices beyond just setting a strong root password.",
        "difficulty": "Medium",
        "hint": "Think encryption, access control, and injection prevention."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the principle of least privilege, and why does it matter for database security?",
        "answer": "The principle of least privilege means granting users and applications only the minimum permissions necessary to perform their required tasks, nothing more. It matters because it limits the potential damage from a compromised account, a bug, or an insider threat \u2014 if an account only has SELECT access to one table, it can't accidentally or maliciously modify or delete unrelated data."
      },
      {
        "question": "Why should passwords never be stored in plain text in a database?",
        "answer": "If stored in plain text, a single data breach immediately exposes every user's actual password, which many people reuse across other services. Storing passwords using a strong, slow hashing algorithm (like bcrypt) means that even if the database is breached, attackers cannot easily recover the original passwords."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does the principle of least privilege mean?",
        "options": [
          "Giving all users full access for convenience",
          "Granting only the minimum access necessary for a task",
          "Removing all permissions from every user",
          "Only applies to the root user"
        ],
        "correctIndex": 1,
        "explanation": "Least privilege minimizes the potential damage from any single compromised account."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Why should passwords never be stored in plain text?",
        "options": [
          "It's slower to store them that way",
          "A breach would immediately expose all real passwords",
          "Plain text passwords take up more storage",
          "MySQL doesn't allow plain text storage"
        ],
        "correctIndex": 1,
        "explanation": "Hashing protects user credentials even if the database is compromised."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What SQL feature helps prevent SQL injection attacks?",
        "options": [
          "SELECT *",
          "Parameterized queries (prepared statements)",
          "GROUP BY",
          "TRUNCATE"
        ],
        "correctIndex": 1,
        "explanation": "Parameterized queries separate code from data, blocking injection attempts."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which command grants specific limited access to a database user?",
        "options": [
          "REVOKE",
          "GRANT",
          "DELETE",
          "DROP USER"
        ],
        "correctIndex": 1,
        "explanation": "GRANT assigns specific privileges to a user."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why is broad, unrestricted database access risky?",
        "options": [
          "It's not risky at all",
          "It increases the potential damage from a compromised account or bug",
          "It makes queries run faster",
          "It's required for all applications"
        ],
        "correctIndex": 1,
        "explanation": "Excessive access widens the impact of any single security failure."
      }
    ]
  },
  {
    "id": 114,
    "title": "SQL Injection",
    "level": "Advanced",
    "category": "Industry",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "SQL injection is a security vulnerability where an attacker inserts malicious SQL code into an application's input fields, tricking the database into executing unintended commands \u2014 often to steal, modify, or delete data.",
    "realLifeExample": "A login form that builds its query by directly concatenating user input (like \"SELECT * FROM users WHERE username = '\" + input + \"'\") could let an attacker type a specially crafted username that alters the query's logic entirely, potentially bypassing login without a valid password.",
    "syntax": "-- Vulnerable (string concatenation):\nquery = \"SELECT * FROM users WHERE username = '\" + userInput + \"'\";\n\n-- Safe (parameterized query):\nquery = \"SELECT * FROM users WHERE username = ?\";\n-- userInput passed separately as a parameter, never mixed into the SQL string",
    "examples": [
      {
        "sql": "-- If userInput is: admin' OR '1'='1\n-- The vulnerable concatenated query becomes:\nSELECT * FROM users WHERE username = 'admin' OR '1'='1';",
        "output": "(Returns ALL users, since '1'='1' is always true \u2014 potentially bypassing authentication)",
        "explanation": "The attacker's crafted input closes the intended string early and adds an always-true condition, completely changing the query's logic and behavior."
      }
    ],
    "importantPoints": [
      "SQL injection happens when user input is directly inserted into a SQL string instead of being properly separated as data.",
      "Parameterized queries (prepared statements) are the standard, reliable defense against SQL injection.",
      "Never trust or directly concatenate any user-supplied input into a raw SQL string, regardless of the input source."
    ],
    "commonMistakes": [
      {
        "wrong": "Building SQL queries by directly concatenating raw user input into the query string",
        "correct": "Using parameterized queries/prepared statements that keep user input completely separate from SQL code",
        "why": "String concatenation lets malicious input change the query's actual structure and logic \u2014 parameterized queries treat input strictly as data, never as executable SQL code."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Rewrite a vulnerable, concatenated SQL query as a safe, parameterized query (in pseudocode).",
        "difficulty": "Medium",
        "hint": "Replace the concatenated value with a ? placeholder."
      },
      {
        "text": "Explain, step by step, how the classic \"' OR '1'='1\" SQL injection attack works.",
        "difficulty": "Advanced",
        "hint": "Trace exactly how the malicious input changes the query's logic."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is SQL injection?",
        "answer": "SQL injection is a security vulnerability that occurs when an application builds SQL queries by directly inserting untrusted user input into the query string, allowing an attacker to craft input that changes the query's intended logic \u2014 potentially bypassing authentication, extracting unauthorized data, or modifying/deleting data they shouldn't have access to."
      },
      {
        "question": "How do parameterized queries prevent SQL injection?",
        "answer": "Parameterized queries (prepared statements) send the SQL query structure and the user-supplied values as separate components to the database. The database treats the values strictly as data, never as executable SQL code, meaning even maliciously crafted input can't alter the query's actual logic or structure."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is SQL injection?",
        "options": [
          "A performance optimization technique",
          "A vulnerability where malicious input changes a query's intended logic",
          "A type of database index",
          "A backup strategy"
        ],
        "correctIndex": 1,
        "explanation": "SQL injection exploits unsafe handling of user input within SQL queries."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What typically causes SQL injection vulnerabilities?",
        "options": [
          "Using parameterized queries",
          "Directly concatenating user input into SQL strings",
          "Using EXPLAIN",
          "Enabling the slow query log"
        ],
        "correctIndex": 1,
        "explanation": "String concatenation of untrusted input is the root cause."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What is the standard defense against SQL injection?",
        "options": [
          "Stronger passwords",
          "Parameterized queries (prepared statements)",
          "More indexes",
          "Bigger servers"
        ],
        "correctIndex": 1,
        "explanation": "Parameterized queries separate code from data, neutralizing injection attempts."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "In the classic \"' OR '1'='1\" attack, why does it work?",
        "options": [
          "It's actually invalid SQL and does nothing",
          "It adds an always-true condition, altering the query's logic",
          "It deletes the users table directly",
          "It only works on MySQL 5.0"
        ],
        "correctIndex": 1,
        "explanation": "The injected condition makes the WHERE clause always evaluate to true."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Should you ever trust and directly use raw user input in a SQL string?",
        "options": [
          "Yes, if the input looks safe",
          "No, always treat user input as untrusted and use parameterized queries",
          "Only for admin users",
          "Only for numeric input"
        ],
        "correctIndex": 1,
        "explanation": "All user input should be treated as potentially malicious, regardless of source."
      }
    ]
  },
  {
    "id": 115,
    "title": "User Permissions",
    "level": "Advanced",
    "category": "Industry",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "User permissions define exactly what actions a specific database user is allowed to perform \u2014 such as SELECT, INSERT, UPDATE, DELETE, or administrative actions \u2014 on specific databases, tables, or columns.",
    "realLifeExample": "A company's reporting analyst is given a database user with only SELECT permission on specific tables, so they can view data for reports but cannot accidentally (or maliciously) modify or delete anything.",
    "syntax": "CREATE USER 'username'@'host' IDENTIFIED BY 'password';\nGRANT permission_type ON database.table TO 'username'@'host';",
    "examples": [
      {
        "sql": "CREATE USER 'analyst'@'%' IDENTIFIED BY 'secure_password';\nGRANT SELECT ON company_db.sales_report TO 'analyst'@'%';",
        "output": "Query OK, 0 rows affected (user created and granted access)",
        "explanation": "The 'analyst' user can now only run SELECT queries against the sales_report table specifically \u2014 no INSERT, UPDATE, DELETE, or access to any other table."
      }
    ],
    "importantPoints": [
      "Permissions can be granted at the global, database, table, or even column level for fine-grained control.",
      "FLUSH PRIVILEGES; is sometimes needed after manually modifying permission tables directly, to apply changes immediately.",
      "Regularly auditing which users have which permissions helps catch overly broad access that's accumulated over time."
    ],
    "commonMistakes": [
      {
        "wrong": "Granting ALL PRIVILEGES to every new application user by default",
        "correct": "Granting only the specific permissions (SELECT, INSERT, etc.) actually required for that user's role",
        "why": "Defaulting to ALL PRIVILEGES violates the principle of least privilege, unnecessarily expanding what a compromised or buggy account could do to the database."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Create a user that can only INSERT and SELECT on a specific 'logs' table.",
        "difficulty": "Medium",
        "hint": "Use CREATE USER, then GRANT INSERT, SELECT ON db.logs."
      },
      {
        "text": "Explain the difference between granting permissions at the database level versus the table level.",
        "difficulty": "Medium",
        "hint": "Think about the scope each level covers."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What are user permissions in a database context?",
        "answer": "User permissions define precisely which actions (like SELECT, INSERT, UPDATE, DELETE, or administrative operations) a specific database user account is authorized to perform, and on which specific databases, tables, or even columns \u2014 providing fine-grained control over data access and modification."
      },
      {
        "question": "Why should you avoid granting ALL PRIVILEGES to application users by default?",
        "answer": "Granting ALL PRIVILEGES gives a user unrestricted control over the database, far beyond what most application roles actually require. This violates the principle of least privilege and significantly increases the potential damage if that user's credentials are ever compromised or if application code contains a bug."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What do user permissions control?",
        "options": [
          "Server hardware allocation",
          "What actions a specific user can perform on specific data",
          "Internet bandwidth usage",
          "The database's storage engine"
        ],
        "correctIndex": 1,
        "explanation": "Permissions define exactly what a user is authorized to do."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Which command creates a new database user?",
        "options": [
          "NEW USER",
          "CREATE USER",
          "ADD USER",
          "MAKE USER"
        ],
        "correctIndex": 1,
        "explanation": "CREATE USER is the standard MySQL syntax."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which command assigns specific permissions to a user?",
        "options": [
          "GRANT",
          "ALLOW",
          "PERMIT",
          "ENABLE"
        ],
        "correctIndex": 0,
        "explanation": "GRANT is used to assign privileges to a user."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why avoid granting ALL PRIVILEGES by default?",
        "options": [
          "It's required for every user",
          "It violates least privilege and increases risk if compromised",
          "It makes queries run faster",
          "MySQL doesn't support partial privileges"
        ],
        "correctIndex": 1,
        "explanation": "Excessive default permissions widen the impact of any security issue."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "At what levels can permissions be granted?",
        "options": [
          "Only globally",
          "Global, database, table, and even column level",
          "Only at the table level",
          "Only for the root user"
        ],
        "correctIndex": 1,
        "explanation": "MySQL supports fine-grained permission scoping at multiple levels."
      }
    ]
  },
  {
    "id": 116,
    "title": "GRANT",
    "level": "Advanced",
    "category": "Industry",
    "difficulty": "Medium",
    "estMinutes": 6,
    "concept": "The GRANT statement assigns specific privileges (like SELECT, INSERT, UPDATE) to a database user, on a specified database, table, or globally, controlling what that user is allowed to do.",
    "realLifeExample": "A backend service that only needs to read product data (never modify it) is given exactly GRANT SELECT ON store_db.products TO 'app_service'@'%';, matching its actual, limited needs.",
    "syntax": "GRANT privilege_type ON database.table TO 'username'@'host';",
    "examples": [
      {
        "sql": "GRANT SELECT, INSERT ON store_db.orders TO 'app_service'@'%';",
        "output": "Query OK, 0 rows affected",
        "explanation": "The 'app_service' user can now read from and insert into the orders table specifically, but cannot UPDATE, DELETE, or access any other table."
      }
    ],
    "importantPoints": [
      "You can grant multiple privileges at once, separated by commas: GRANT SELECT, INSERT, UPDATE ON ...",
      "Using * for the table name grants access to ALL tables in that database: db_name.*.",
      "GRANT ALL PRIVILEGES gives complete control \u2014 reserve this only for genuinely trusted administrative accounts."
    ],
    "commonMistakes": [
      {
        "wrong": "GRANT ALL PRIVILEGES ON *.* TO 'app_user'@'%';  -- for a simple reporting application",
        "correct": "GRANT SELECT ON company_db.reports TO 'app_user'@'%';  -- matching only what's actually needed",
        "why": "A reporting application that only ever reads data should never be granted full, unrestricted control over every database on the server."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Grant SELECT and UPDATE permissions on a 'products' table to a user called 'inventory_manager'.",
        "difficulty": "Easy",
        "hint": "Use GRANT SELECT, UPDATE ON db.products TO 'inventory_manager'@'%'."
      },
      {
        "text": "Explain what GRANT ALL PRIVILEGES ON *.* actually grants, in plain language.",
        "difficulty": "Medium",
        "hint": "Think about the scope of both the database and privilege wildcards."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the GRANT statement do?",
        "answer": "GRANT assigns specific database privileges \u2014 such as SELECT, INSERT, UPDATE, DELETE, or administrative rights \u2014 to a specified user, scoped to a particular database, table, or globally across the entire server, depending on how it's written."
      },
      {
        "question": "What does GRANT ALL PRIVILEGES ON *.* TO 'user' mean, and why is it risky?",
        "answer": "This grants a user complete, unrestricted control over every database and table on the entire MySQL server \u2014 every possible privilege, everywhere. It's risky because it violates the principle of least privilege; if that account is ever compromised, an attacker gains total control over all data on the server, not just what that user actually needed access to."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does GRANT do?",
        "options": [
          "Removes a user's access",
          "Assigns specific privileges to a user",
          "Deletes a database",
          "Creates a backup"
        ],
        "correctIndex": 1,
        "explanation": "GRANT is used to assign permissions to a database user."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "How do you grant multiple privileges in one GRANT statement?",
        "options": [
          "You cannot, one privilege per statement only",
          "Separate them with commas",
          "Use separate semicolons within one line",
          "Use the ALL keyword only"
        ],
        "correctIndex": 1,
        "explanation": "Multiple privileges can be listed together, comma-separated."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What does db_name.* refer to in a GRANT statement?",
        "options": [
          "A single specific table",
          "All tables within that specific database",
          "The entire MySQL server",
          "Only the primary key columns"
        ],
        "correctIndex": 1,
        "explanation": "The asterisk after the database name means all tables within it."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What does GRANT ALL PRIVILEGES ON *.* give a user?",
        "options": [
          "Access to one table only",
          "Complete, unrestricted control over the entire server",
          "Read-only access to everything",
          "No access at all"
        ],
        "correctIndex": 1,
        "explanation": "This is the broadest possible grant, covering every database and every privilege."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why should GRANT ALL PRIVILEGES be reserved for trusted admin accounts only?",
        "options": [
          "It's required for every user",
          "It gives complete control, risking major damage if compromised",
          "It doesn't actually grant much access",
          "MySQL disables it by default"
        ],
        "correctIndex": 1,
        "explanation": "Such broad access should be limited to accounts that genuinely need it."
      }
    ]
  },
  {
    "id": 117,
    "title": "REVOKE",
    "level": "Advanced",
    "category": "Industry",
    "difficulty": "Medium",
    "estMinutes": 5,
    "concept": "The REVOKE statement removes previously granted privileges from a database user, taking away permissions they no longer need or should have.",
    "realLifeExample": "When an employee moves from the finance team to marketing, an admin runs REVOKE on their old finance database permissions, ensuring their access matches their new, current role.",
    "syntax": "REVOKE privilege_type ON database.table FROM 'username'@'host';",
    "examples": [
      {
        "sql": "REVOKE INSERT, UPDATE ON company_db.finance_records FROM 'former_finance_user'@'%';",
        "output": "Query OK, 0 rows affected",
        "explanation": "This removes the ability to INSERT or UPDATE finance_records for that specific user, while potentially leaving other permissions (like SELECT elsewhere) untouched, depending on what else was granted."
      }
    ],
    "importantPoints": [
      "REVOKE only removes the specific privileges listed \u2014 it doesn't delete the user account itself.",
      "You can REVOKE ALL PRIVILEGES to strip a user down to no access, without deleting the account entirely.",
      "Regularly reviewing and revoking unnecessary permissions is an important ongoing security practice, not a one-time task."
    ],
    "commonMistakes": [
      {
        "wrong": "Leaving an employee's old, no-longer-needed database permissions in place indefinitely after a role change",
        "correct": "Proactively running REVOKE on permissions that are no longer appropriate for the user's current role",
        "why": "Accumulated, unused permissions over time create unnecessary security risk \u2014 regularly revoking outdated access keeps permissions aligned with actual current needs."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Revoke DELETE permission on an 'orders' table from a user called 'support_agent'.",
        "difficulty": "Easy",
        "hint": "Use REVOKE DELETE ON db.orders FROM 'support_agent'@'%'."
      },
      {
        "text": "Explain the difference between REVOKE and DROP USER.",
        "difficulty": "Medium",
        "hint": "Think about whether the account itself still exists afterward."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does the REVOKE statement do?",
        "answer": "REVOKE removes specific, previously-granted privileges from a database user, restricting what that user is subsequently allowed to do \u2014 without deleting the user account itself."
      },
      {
        "question": "What is the difference between REVOKE and DROP USER?",
        "answer": "REVOKE removes specific privileges from a user account, but the account itself still exists and can still log in (just with reduced permissions). DROP USER completely deletes the user account from the database entirely, removing their ability to log in at all."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does REVOKE do?",
        "options": [
          "Deletes a user account",
          "Removes specific privileges from a user",
          "Grants new privileges",
          "Creates a backup"
        ],
        "correctIndex": 1,
        "explanation": "REVOKE takes away previously granted permissions."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "Does REVOKE delete the user account itself?",
        "options": [
          "Yes, always",
          "No, only DROP USER deletes the account",
          "Only if ALL privileges are revoked",
          "REVOKE and DROP USER are identical"
        ],
        "correctIndex": 1,
        "explanation": "REVOKE only affects permissions, leaving the account intact."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "When is REVOKE commonly used?",
        "options": [
          "When creating a new user",
          "When a user's role changes and old permissions are no longer needed",
          "Every time a query runs",
          "Only during database backups"
        ],
        "correctIndex": 1,
        "explanation": "Role changes are a common trigger for revoking outdated access."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Can you revoke ALL PRIVILEGES from a user without deleting their account?",
        "options": [
          "No, that's not possible",
          "Yes, REVOKE ALL PRIVILEGES strips access while the account remains",
          "Only DROP USER can do this",
          "Only for root accounts"
        ],
        "correctIndex": 1,
        "explanation": "REVOKE ALL PRIVILEGES removes access while preserving the account."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why is regularly reviewing and revoking unnecessary permissions important?",
        "options": [
          "It's not important",
          "It prevents accumulated, unnecessary security risk over time",
          "It speeds up query performance",
          "It's required before every backup"
        ],
        "correctIndex": 1,
        "explanation": "Ongoing permission audits help maintain the principle of least privilege."
      }
    ]
  },
  {
    "id": 118,
    "title": "Backup",
    "level": "Advanced",
    "category": "Industry",
    "difficulty": "Medium",
    "estMinutes": 8,
    "concept": "A database backup is a saved copy of your database's data and structure, created so it can be restored later in case of data loss, corruption, accidental deletion, or hardware failure.",
    "realLifeExample": "An e-commerce company runs an automated nightly backup of its entire orders database, so if a server crashes or someone accidentally runs a destructive DELETE without WHERE, they can restore yesterday's data instead of losing it permanently.",
    "syntax": "-- Common command-line backup tool for MySQL:\nmysqldump -u username -p database_name > backup_file.sql",
    "examples": [
      {
        "sql": "mysqldump -u root -p company_db > company_db_backup.sql",
        "output": "Enter password: ****\n(Backup file created successfully)",
        "explanation": "This creates a complete SQL file containing the CREATE TABLE and INSERT statements needed to fully recreate company_db's structure and data later."
      }
    ],
    "importantPoints": [
      "mysqldump is a standard, widely-used command-line tool for creating logical (SQL-based) MySQL backups.",
      "Backups should be tested periodically by actually attempting a restore \u2014 an untested backup might not work when you need it most.",
      "A good backup strategy often includes both full backups (everything) and incremental backups (just recent changes), plus storing copies off-site."
    ],
    "commonMistakes": [
      {
        "wrong": "Assuming backups exist and work without ever actually testing a restore",
        "correct": "Periodically performing a full test restore from a backup to verify it actually works",
        "why": "A backup that's silently corrupted or incomplete is discovered too late if you only find out during an actual emergency \u2014 regular test restores catch this in advance."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write the mysqldump command to back up a database called 'inventory_db' to a file named 'inventory_backup.sql'.",
        "difficulty": "Easy",
        "hint": "Use mysqldump -u user -p inventory_db > inventory_backup.sql."
      },
      {
        "text": "Explain why testing a backup's restore process is just as important as creating the backup itself.",
        "difficulty": "Medium",
        "hint": "Think about discovering problems before a real emergency."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is a database backup, and why is it important?",
        "answer": "A database backup is a saved copy of a database's structure and data, created so it can be restored if the original data is lost, corrupted, or accidentally deleted. It's critically important because hardware failures, human errors, and software bugs can all cause data loss, and a reliable, recent backup is often the only way to recover from such incidents."
      },
      {
        "question": "What is mysqldump, and what does it produce?",
        "answer": "mysqldump is a standard MySQL command-line utility that creates a logical backup by generating a SQL file containing all the CREATE TABLE and INSERT statements needed to fully recreate a database's structure and data \u2014 this file can later be used to restore the database by running it back through the MySQL client."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is the purpose of a database backup?",
        "options": [
          "To speed up queries",
          "To allow recovery from data loss or corruption",
          "To create new indexes",
          "To enforce user permissions"
        ],
        "correctIndex": 1,
        "explanation": "Backups provide a safety net for recovering lost or corrupted data."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is mysqldump used for?",
        "options": [
          "Deleting a database",
          "Creating a SQL-based backup of a database",
          "Optimizing queries",
          "Managing user permissions"
        ],
        "correctIndex": 1,
        "explanation": "mysqldump is a standard tool for generating logical MySQL backups."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why is testing a backup's restore process important?",
        "options": [
          "It's not important",
          "An untested backup might fail when actually needed",
          "Testing backups is illegal",
          "Backups never need testing once created"
        ],
        "correctIndex": 1,
        "explanation": "Verifying restores catches hidden problems before a real emergency occurs."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What might a comprehensive backup strategy include?",
        "options": [
          "Only one backup ever created",
          "Full backups, incremental backups, and off-site storage",
          "No backups, just careful coding",
          "Backups only during business hours"
        ],
        "correctIndex": 1,
        "explanation": "A robust strategy layers multiple backup types and storage locations."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What could happen without any backup strategy at all?",
        "options": [
          "Nothing, data is always safe by default",
          "A hardware failure or mistake could cause permanent, unrecoverable data loss",
          "MySQL automatically prevents all data loss",
          "Backups are optional and never actually needed"
        ],
        "correctIndex": 1,
        "explanation": "Without backups, certain failures or mistakes can result in truly permanent data loss."
      }
    ]
  },
  {
    "id": 119,
    "title": "Restore",
    "level": "Advanced",
    "category": "Industry",
    "difficulty": "Medium",
    "estMinutes": 7,
    "concept": "Restoring a database means loading a previously created backup back into MySQL, recovering the database's structure and data to the state captured at backup time.",
    "realLifeExample": "After accidentally dropping a critical table, a developer restores last night's backup file to bring that table (and its data, as of last night) back into the live database, minimizing data loss.",
    "syntax": "-- Restoring from a mysqldump-created SQL backup file:\nmysql -u username -p database_name < backup_file.sql",
    "examples": [
      {
        "sql": "mysql -u root -p company_db < company_db_backup.sql",
        "output": "Enter password: ****\n(Database restored successfully from backup file)",
        "explanation": "This runs every SQL statement contained in the backup file against company_db, recreating its tables and reinserting its data exactly as they were when the backup was taken."
      }
    ],
    "importantPoints": [
      "Restoring typically requires the target database to already exist (or you create it first) before loading the backup file into it.",
      "A restore will only bring data back to the exact point when that specific backup was created \u2014 any changes made after that point are lost unless captured by other means (like binary logs).",
      "Restoring into a fresh, temporary database first (rather than directly overwriting production) is a safer way to verify a backup before committing to a full production restore."
    ],
    "commonMistakes": [
      {
        "wrong": "Restoring a backup directly onto a live production database without any verification first",
        "correct": "Restoring into a temporary/staging database first to verify the backup is valid and complete",
        "why": "Directly restoring onto production risks compounding a problem if the backup itself turns out to be corrupted or incomplete \u2014 verifying first in a safe environment avoids this risk."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Write the command to restore a database called 'inventory_db' from a backup file named 'inventory_backup.sql'.",
        "difficulty": "Easy",
        "hint": "Use mysql -u user -p inventory_db < inventory_backup.sql."
      },
      {
        "text": "Explain what data would be lost if you restore a backup that's 24 hours old.",
        "difficulty": "Medium",
        "hint": "Think about changes made during that 24-hour gap."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What does restoring a database involve?",
        "answer": "Restoring a database involves loading a previously created backup file back into MySQL, executing its contained SQL statements to recreate the database's tables and repopulate its data, bringing the database back to the exact state it was in when that backup was originally created."
      },
      {
        "question": "What data is lost when restoring from an older backup, and how can this gap be minimized?",
        "answer": "Any changes made to the database AFTER the backup was created (and before the restore) are lost, since the backup only captures a single point-in-time snapshot. This gap can be minimized by taking backups more frequently, or by combining full backups with binary logs (which record every change since the last backup), allowing a more precise, up-to-the-minute recovery."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does restoring a database do?",
        "options": [
          "Deletes all data permanently",
          "Loads a backup back into MySQL, recovering its structure and data",
          "Creates a new empty database",
          "Grants new user permissions"
        ],
        "correctIndex": 1,
        "explanation": "Restore recreates the database from a previously saved backup."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What command typically restores a mysqldump SQL backup file?",
        "options": [
          "mysqldump -u user -p db < backup.sql",
          "mysql -u user -p db < backup.sql",
          "RESTORE DATABASE db;",
          "mysql RESTORE backup.sql;"
        ],
        "correctIndex": 1,
        "explanation": "The mysql client command loads and executes the backup file's SQL statements."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What data is lost if you restore a backup taken 24 hours ago?",
        "options": [
          "No data is ever lost",
          "Any changes made during those 24 hours since the backup",
          "All historical data before the backup",
          "Only user permission changes"
        ],
        "correctIndex": 1,
        "explanation": "A backup only captures a single point-in-time snapshot."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Why might you restore a backup into a temporary/staging database first?",
        "options": [
          "It's not recommended, always restore directly to production",
          "To verify the backup is valid before committing to a full production restore",
          "Staging databases are required by MySQL",
          "It makes the restore process illegal otherwise"
        ],
        "correctIndex": 1,
        "explanation": "Verifying first reduces the risk of compounding problems on production."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What can help minimize data loss between backups during a restore?",
        "options": [
          "Nothing can help with this",
          "Combining full backups with binary logs for more precise recovery",
          "Restoring more slowly",
          "Using a bigger backup file"
        ],
        "correctIndex": 1,
        "explanation": "Binary logs can capture changes since the last backup, enabling finer-grained recovery."
      }
    ]
  },
  {
    "id": 120,
    "title": "Production Database Practices",
    "level": "Advanced",
    "category": "Industry",
    "difficulty": "Hard",
    "estMinutes": 10,
    "concept": "Production database practices are the disciplined habits and safeguards professional teams follow when working with live, business-critical databases \u2014 since mistakes here can affect real users and real data immediately.",
    "realLifeExample": "Before running a schema change on a live e-commerce database during Black Friday, an experienced team would test it thoroughly in staging first, schedule it for low-traffic hours, and have a tested rollback plan ready \u2014 rather than experimenting directly on production.",
    "syntax": "-- Production discipline isn't one command, but a set of practices:\n-- 1. Test in staging first\n-- 2. Take a backup before risky changes\n-- 3. Use transactions where appropriate\n-- 4. Review WHERE clauses before UPDATE/DELETE\n-- 5. Monitor after deploying changes",
    "examples": [
      {
        "sql": "-- Safe production practice: verify affected rows BEFORE modifying\nSELECT COUNT(*) FROM orders WHERE status = 'pending' AND created_at < '2025-01-01';\n-- Then, only after confirming the count looks correct:\nDELETE FROM orders WHERE status = 'pending' AND created_at < '2025-01-01';",
        "output": "COUNT(*)\n---------\n342\n(Only after confirming this number is expected, the actual DELETE is run)",
        "explanation": "Running a SELECT COUNT with the exact same WHERE clause first confirms exactly how many rows will be affected, catching mistakes before they become irreversible."
      }
    ],
    "importantPoints": [
      "Always test risky schema changes or bulk operations in a staging environment before touching production.",
      "Take a backup immediately before any significant, potentially destructive production change.",
      "Preview UPDATE/DELETE operations with a matching SELECT first, to confirm exactly which (and how many) rows will be affected.",
      "Schedule risky changes during low-traffic periods, and have a clear, tested rollback plan ready beforehand."
    ],
    "commonMistakes": [
      {
        "wrong": "Running an untested schema migration directly on the live production database",
        "correct": "Testing the exact same migration on a staging environment first, then scheduling it carefully for production",
        "why": "Untested changes on production risk unexpected downtime, data corruption, or application-breaking errors affecting real users immediately, with no safety net."
      }
    ],
    "practiceQuestions": [
      {
        "text": "List four production safety practices you would follow before running a large DELETE on a live orders table.",
        "difficulty": "Hard",
        "hint": "Think about staging, backups, previewing, and timing."
      },
      {
        "text": "Explain why previewing an UPDATE/DELETE with a matching SELECT COUNT(*) first is good practice.",
        "difficulty": "Medium",
        "hint": "Think about catching mistakes before they're irreversible."
      }
    ],
    "interviewQuestions": [
      {
        "question": "Why is testing changes in a staging environment before production considered essential practice?",
        "answer": "A staging environment closely mirrors production but isn't used by real customers, allowing risky changes (schema migrations, bulk updates, new features) to be thoroughly tested and validated without any risk to live business data or real user experience \u2014 catching bugs, performance issues, or unexpected side effects before they can cause real harm."
      },
      {
        "question": "What is a good practice before running a large-scale UPDATE or DELETE on a production table?",
        "answer": "Best practice is to first run a SELECT with the exact same WHERE clause (often wrapped in COUNT(*)) to precisely confirm how many and which rows will be affected, take a fresh backup as a safety net, and ideally test the exact operation in staging first \u2014 only proceeding with the actual production UPDATE/DELETE once you're confident the scope and impact are correct."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "Why test changes in staging before production?",
        "options": [
          "It's unnecessary extra work",
          "It catches problems before they affect real users and data",
          "Staging environments are faster than production",
          "MySQL requires it by law"
        ],
        "correctIndex": 1,
        "explanation": "Staging provides a safe environment to validate changes without real-world risk."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What should you do before a risky production change?",
        "options": [
          "Nothing special, just run it",
          "Take a backup and have a rollback plan ready",
          "Disable all user access permanently",
          "Delete the staging environment"
        ],
        "correctIndex": 1,
        "explanation": "Backups and rollback plans provide a safety net for risky changes."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Why preview a DELETE with a matching SELECT COUNT(*) first?",
        "options": [
          "It's required syntax",
          "It confirms exactly how many rows will be affected before the irreversible action",
          "It makes the DELETE run faster",
          "It automatically creates a backup"
        ],
        "correctIndex": 1,
        "explanation": "Previewing catches WHERE clause mistakes before they cause real damage."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "When is it best to schedule risky production changes?",
        "options": [
          "During peak traffic for visibility",
          "During low-traffic periods",
          "It doesn't matter when",
          "Only on weekends regardless of traffic"
        ],
        "correctIndex": 1,
        "explanation": "Low-traffic periods minimize the impact if something goes wrong."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "What is a key theme across professional production database practices?",
        "options": [
          "Moving as fast as possible with no checks",
          "Careful verification, testing, and safety nets before risky actions",
          "Avoiding all changes to production forever",
          "Using only the root user for everything"
        ],
        "correctIndex": 1,
        "explanation": "Discipline and verification are central to safe production database management."
      }
    ]
  },
  {
    "id": 121,
    "title": "OLTP vs OLAP",
    "level": "Advanced",
    "category": "Industry",
    "difficulty": "Hard",
    "estMinutes": 9,
    "concept": "OLTP (Online Transaction Processing) systems handle many small, fast, real-time transactions (like placing an order). OLAP (Online Analytical Processing) systems handle complex, large-scale queries for analysis and reporting, often over historical data.",
    "realLifeExample": "An e-commerce company's live checkout system (processing individual orders instantly) is a classic OLTP workload, while its separate 'quarterly sales trends across all regions' report, analyzing millions of historical orders at once, is a classic OLAP workload.",
    "syntax": "-- OLTP-style query: fast, small, specific\nSELECT * FROM orders WHERE order_id = 12345;\n\n-- OLAP-style query: complex, broad, analytical\nSELECT region, YEAR(order_date), SUM(amount)\nFROM orders GROUP BY region, YEAR(order_date);",
    "examples": [
      {
        "sql": "-- OLTP: instant, single-row operation\nINSERT INTO orders (customer_id, amount) VALUES (501, 1200);\n\n-- OLAP: complex aggregation across potentially millions of rows\nSELECT region, SUM(amount) AS total_sales FROM orders GROUP BY region;",
        "output": "(OLTP insert completes in milliseconds)\nregion | total_sales\n-------|------------\nNorth  | 4500000",
        "explanation": "The OLTP insert is a tiny, immediate operation typical of live application usage, while the OLAP query scans and aggregates large volumes of historical data for business insight."
      }
    ],
    "importantPoints": [
      "OLTP systems prioritize fast, simple, frequent read/write operations on individual records.",
      "OLAP systems prioritize complex aggregations and analysis across large volumes of data, often run less frequently.",
      "Large organizations often use a separate OLAP system (a 'data warehouse') to run heavy analytical queries without slowing down the live OLTP production database."
    ],
    "commonMistakes": [
      {
        "wrong": "Running heavy, complex analytical (OLAP-style) reports directly against the live OLTP production database during business hours",
        "correct": "Running such analytical queries against a separate reporting database or data warehouse, or during off-peak hours",
        "why": "Heavy analytical queries can consume significant resources and slow down or lock tables needed by the live, real-time OLTP system that actual customers depend on."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Classify these as OLTP or OLAP: 'processing a single ATM withdrawal' and 'analyzing five years of withdrawal patterns for fraud detection'.",
        "difficulty": "Medium",
        "hint": "Think about scale, complexity, and real-time need."
      },
      {
        "text": "Explain why a company might maintain a separate data warehouse instead of running all analytics on their main production database.",
        "difficulty": "Advanced",
        "hint": "Think about resource contention and workload isolation."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is the difference between OLTP and OLAP systems?",
        "answer": "OLTP (Online Transaction Processing) systems are optimized for handling many small, fast, frequent read/write operations on individual records in real time \u2014 like processing a single order or updating a user's profile. OLAP (Online Analytical Processing) systems are optimized for complex, large-scale queries that aggregate and analyze large volumes of data, often historical, for business intelligence and reporting purposes."
      },
      {
        "question": "Why might a company use a separate data warehouse for OLAP workloads instead of querying their main production database?",
        "answer": "Complex OLAP-style analytical queries often scan and aggregate massive amounts of data, which can consume significant server resources and potentially slow down or lock tables needed by the live OLTP system. Separating analytical workloads into a dedicated data warehouse protects the performance and reliability of the real-time production system that customers actively depend on."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What does OLTP stand for?",
        "options": [
          "Online Transaction Processing",
          "Offline Table Planning",
          "Online Table Protocol",
          "Optimized Load Transfer Process"
        ],
        "correctIndex": 0,
        "explanation": "OLTP = Online Transaction Processing."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What does OLAP stand for?",
        "options": [
          "Online Application Processing",
          "Online Analytical Processing",
          "Offline Analysis Protocol",
          "Optimized Load Analysis Process"
        ],
        "correctIndex": 1,
        "explanation": "OLAP = Online Analytical Processing."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "Which best describes a typical OLTP workload?",
        "options": [
          "Complex historical analysis across millions of rows",
          "Fast, small, frequent transactions on individual records",
          "Monthly batch reporting only",
          "Rare, one-time data migrations"
        ],
        "correctIndex": 1,
        "explanation": "OLTP handles real-time, granular transaction processing."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "Which best describes a typical OLAP workload?",
        "options": [
          "Processing a single customer order",
          "Complex aggregations and analysis over large datasets",
          "Updating one user's password",
          "Inserting a single new row"
        ],
        "correctIndex": 1,
        "explanation": "OLAP focuses on broad, analytical queries over large data volumes."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why might heavy OLAP queries be run on a separate data warehouse instead of the live production database?",
        "options": [
          "It's not possible to separate them",
          "To avoid consuming resources needed by the real-time OLTP system",
          "Data warehouses are always required by law",
          "OLAP queries can't run on the same database engine"
        ],
        "correctIndex": 1,
        "explanation": "Isolating workloads protects the live system's performance and reliability."
      }
    ]
  },
  {
    "id": 122,
    "title": "Database Architecture",
    "level": "Advanced",
    "category": "Industry",
    "difficulty": "Hard",
    "estMinutes": 10,
    "concept": "Database architecture refers to the overall design and structure of how a database system is built and deployed \u2014 including considerations like replication, sharding, high availability, and how databases fit into a broader application system.",
    "realLifeExample": "A large streaming service's database architecture might include a primary database handling writes, multiple read replicas spreading out read traffic, and data sharded by user region \u2014 all working together to handle millions of users reliably.",
    "syntax": "-- Architecture is a design discipline, not a single SQL command, but often involves configuration like:\n-- Primary (write) server + Replica (read-only) servers\n-- CHANGE MASTER TO ... (setting up replication, conceptually)",
    "examples": [
      {
        "sql": "-- Conceptual: application code routes queries based on architecture\n-- Writes go to the primary server:\nINSERT INTO orders (...) VALUES (...);  -- sent to primary\n-- Reads can be spread across replicas:\nSELECT * FROM products;  -- sent to a read replica",
        "output": "(Writes and reads are intelligently routed to different servers based on the architecture)",
        "explanation": "By directing write operations to a single primary server and spreading read operations across multiple replica servers, the overall system can handle far more total traffic than any single server could alone."
      }
    ],
    "importantPoints": [
      "Replication creates copies of a database (replicas) that stay synchronized with a primary server, often used to scale reads or provide failover.",
      "Sharding splits a database horizontally across multiple servers (e.g., by user region or ID range), allowing a system to scale beyond what one server can handle.",
      "High availability architecture aims to keep a database accessible even if individual servers fail, often through redundancy and automatic failover."
    ],
    "commonMistakes": [
      {
        "wrong": "Assuming a single MySQL server can indefinitely scale to handle any amount of traffic with no architectural changes",
        "correct": "Planning ahead for replication, sharding, or other scaling strategies as traffic and data volume grow significantly",
        "why": "Every single database server has physical limits \u2014 proactive architectural planning (replicas, sharding, caching layers) is necessary well before those limits become a critical, user-facing problem."
      }
    ],
    "practiceQuestions": [
      {
        "text": "Explain, in your own words, the difference between replication and sharding.",
        "difficulty": "Hard",
        "hint": "Think about full copies of data versus splitting data across servers."
      },
      {
        "text": "Describe a scenario where a company would need to introduce read replicas to their database architecture.",
        "difficulty": "Advanced",
        "hint": "Think about a system with far more reads than writes."
      }
    ],
    "interviewQuestions": [
      {
        "question": "What is database replication, and why is it used?",
        "answer": "Database replication creates one or more synchronized copies (replicas) of a primary database, continuously kept up to date with changes made to the primary. It's commonly used to distribute read traffic across multiple servers (improving performance and scalability) and to provide redundancy for high availability \u2014 if the primary server fails, a replica can potentially take over."
      },
      {
        "question": "What is database sharding, and how does it differ from replication?",
        "answer": "Sharding splits a single logical database horizontally across multiple separate servers, with each shard holding a distinct subset of the overall data (for example, users A-M on one shard, N-Z on another). This differs fundamentally from replication, where each replica holds a complete, identical copy of all the data \u2014 sharding is about dividing data to scale storage and write capacity, while replication is about duplicating data to scale reads and improve availability."
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "type": "mcq",
        "prompt": "What is database replication?",
        "options": [
          "Splitting data across multiple servers",
          "Creating synchronized copies of a database on multiple servers",
          "Deleting old data automatically",
          "Encrypting database backups"
        ],
        "correctIndex": 1,
        "explanation": "Replication maintains synchronized full copies of data across servers."
      },
      {
        "id": "q2",
        "type": "mcq",
        "prompt": "What is database sharding?",
        "options": [
          "Creating full copies of the entire database",
          "Splitting data horizontally across multiple servers",
          "Backing up a database",
          "Granting user permissions"
        ],
        "correctIndex": 1,
        "explanation": "Sharding divides data into subsets distributed across different servers."
      },
      {
        "id": "q3",
        "type": "mcq",
        "prompt": "What is a common reason to introduce read replicas?",
        "options": [
          "To reduce data accuracy",
          "To distribute heavy read traffic across multiple servers",
          "To make writes faster",
          "To eliminate the need for backups"
        ],
        "correctIndex": 1,
        "explanation": "Read replicas help scale systems with much higher read volume than write volume."
      },
      {
        "id": "q4",
        "type": "mcq",
        "prompt": "What does high availability architecture aim to achieve?",
        "options": [
          "Faster query syntax",
          "Keeping the database accessible even if individual servers fail",
          "Reducing the number of tables",
          "Eliminating the need for indexes"
        ],
        "correctIndex": 1,
        "explanation": "High availability focuses on resilience against individual component failures."
      },
      {
        "id": "q5",
        "type": "mcq",
        "prompt": "Why is proactive architectural planning important as a system grows?",
        "options": [
          "It's not important, servers can scale infinitely alone",
          "Every server has physical limits that require strategies like replication or sharding",
          "Only small companies need to think about architecture",
          "MySQL automatically handles all scaling with no configuration"
        ],
        "correctIndex": 1,
        "explanation": "Planning ahead avoids critical, user-facing problems as traffic and data grow."
      }
    ]
  }
]
};
