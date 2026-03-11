const express = require('express');
const router = express.Router();

const busController = require('../controllers/busController');


router.post('/', busController.addBus);
router.get('/available/:seats', busController.getAvailableBuses);

// Get all bookings for a specific bus (with user details)
const bookingController = require('../controllers/bookingController');
router.get('/:id/bookings', bookingController.getBookingsByBus);

module.exports = router;