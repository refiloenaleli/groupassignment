const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  VIN: { type: String, required: true },
  model: { type: String, required: true },
  mileage: { type: Number, required: true },
  status: { type: String, required: true },
  driver: { type: String, required: true },
});

const Vehicle = mongoose.models.Vehicle || mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
