const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'testdb'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
  const createQuery = `CREATE TABLE Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(20) NOT NULL
  )`;

  connection.query(createQuery, (err, results) => {
    if (err) {
      console.error('Error creating table:', err);
      connection.end();
      return;
    }
    console.log('Table created successfully');
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, (err) => {
  console.log(`server running at http://localhost:${port}`);
});