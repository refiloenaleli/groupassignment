const mongoose = require('mongoose');

// Define the staff schema
const staffSchema = new mongoose.Schema({
  staffNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  identityNumber: {
    type: String,
    required: true,
    trim: true,
  },
  qualifications: {
    type: [String],
    required: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Check if the model already exists before defining it
const Staff = mongoose.models.Staff || mongoose.model('Staff', staffSchema);

// Export the model
module.exports = Staff;
