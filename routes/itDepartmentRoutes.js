const express = require('express');
const mongoose = require('../models/db');

const router = express.Router();

// Define IT Department Schema
const ITDepartmentModel = mongoose.model('ITDepartment', new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  department: { type: String, required: true }
}));

// GET all IT department members
router.get('/it-data', async (req, res) => {
  try {
    const data = await ITDepartmentModel.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch IT department data' });
  }
});

module.exports = router;
