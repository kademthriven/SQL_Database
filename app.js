const express = require('express');
const db = require('./utils/db-connections');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');



// Centralized model and association import
const { User, Bus, Booking } = require('./models');

const app = express();
const port = 3000;

app.use(express.json());



const bookingRoutes = require('./routes/bookingRoutes');
app.use('/users', userRoutes);
app.use('/buses', busRoutes);
app.use('/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.send('Bus Booking System API');
});

db.sync({ force: true })
.then(() => {
  console.log("Database synced");

  app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
  });

})
.catch(err => {
  console.log(err);
});