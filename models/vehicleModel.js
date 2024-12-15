const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  registrationNumber: { type: String, required: true },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
