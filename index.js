const express = require('express');
const db = require('./utils/db-connections');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);

app.get('/', (req, res) => {
  res.send('Bus Booking System API');
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});