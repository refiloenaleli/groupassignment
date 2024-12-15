const express = require('express');
const Staff = require('../models/staffModel');

const router = express.Router();

// Get all staff members
router.get('/', async (req, res) => {
  try {
    const staffMembers = await Staff.find();
    res.json(staffMembers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new staff member
router.post('/', async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
