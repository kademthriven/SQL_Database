const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create a new booking
router.post('/', bookingController.addBooking);

// Get all bookings for a user (with bus details)
router.get('/user/:id', bookingController.getBookingsByUser);

// Get all bookings for a bus (with user details)
router.get('/bus/:id', bookingController.getBookingsByBus);

module.exports = router;
