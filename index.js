const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Bus_booking'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');

  // Users table
  const usersTable = `
    CREATE TABLE IF NOT EXISTS Users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255)
    )
  `;

  // Buses table
  const busesTable = `
    CREATE TABLE IF NOT EXISTS Buses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      busNumber VARCHAR(50),
      totalSeats INT,
      availableSeats INT
    )
  `;

  // Bookings table
  const bookingsTable = `
    CREATE TABLE IF NOT EXISTS Bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      seatNumber INT
    )
  `;

  // Payments table
  const paymentsTable = `
    CREATE TABLE IF NOT EXISTS Payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amountPaid DECIMAL(10,2),
      paymentStatus VARCHAR(50)
    )
  `;

  // Execute queries
  connection.execute(usersTable, (err) => {
    if (err) console.error('Error creating Users table:', err);
    else console.log('Users table created');
  });

  connection.execute(busesTable, (err) => {
    if (err) console.error('Error creating Buses table:', err);
    else console.log('Buses table created');
  });

  connection.execute(bookingsTable, (err) => {
    if (err) console.error('Error creating Bookings table:', err);
    else console.log('Bookings table created');
  });

  connection.execute(paymentsTable, (err) => {
    if (err) console.error('Error creating Payments table:', err);
    else console.log('Payments table created');
  });
});

app.get('/', (req, res) => {
  res.send('Bus Booking System API');
});


app.listen(port, (err) => {
  console.log(`server running at http://localhost:${port}`);
});