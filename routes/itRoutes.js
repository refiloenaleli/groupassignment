const express = require('express');
const Staff = require('../models/staffModel');
const Vehicle = require('../models/vehicleModel');

const router = express.Router();

// Example: Fetch both staff and vehicle details (cross communication example)
router.get('/overview', async (req, res) => {
  try {
    const staff = await Staff.find();
    const vehicles = await Vehicle.find();
    res.status(200).json({ staff, vehicles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
