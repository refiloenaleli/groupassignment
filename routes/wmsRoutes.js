const express = require('express');
const mongoose = require('../models/db');

const router = express.Router();

// Define WMS Schema
const WMSModel = mongoose.model('WMS', new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true }
}));

// GET all warehouse data
router.get('/warehouse-data', async (req, res) => {
  try {
    const data = await WMSModel.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch warehouse data' });
  }
});

module.exports = router;
