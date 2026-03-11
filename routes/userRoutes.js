const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.getUsers);

// Get all bookings for a specific user (with bus details)
const bookingController = require('../controllers/bookingController');
router.get('/:id/bookings', bookingController.getBookingsByUser);

router.post('/', userController.addUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;