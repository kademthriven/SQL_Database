const Booking = require('../models/bookingModel');
const User = require('../models/userModel');
const Bus = require('../models/busModel');

// Create Booking
const addBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;
    const booking = await Booking.create({ userId, busId, seatNumber });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all bookings for a user (with bus details)
const getBookingsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const bookings = await Booking.findAll({
      where: { userId: id },
      include: [{ model: Bus, attributes: ['busNumber'] }]
    });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all bookings for a bus (with user details)
const getBookingsByBus = async (req, res) => {
  try {
    const { id } = req.params;
    const bookings = await Booking.findAll({
      where: { busId: id },
      include: [{ model: User, attributes: ['name', 'email'] }]
    });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addBooking,
  getBookingsByUser,
  getBookingsByBus
};
