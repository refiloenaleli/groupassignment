const express = require('express');
const router = express.Router();

// Example route for architecture department
router.get('/dashboard', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Architecture Department Dashboard' });
});

// Additional routes can be added here as needed
router.get('/courses', (req, res) => {
  res.status(200).json({
    courses: [
      { id: 1, name: 'Structural Engineering' },
      { id: 2, name: 'Urban Planning' },
      { id: 3, name: 'Landscape Architecture' }
    ]
  });
});

module.exports = router;
