require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const staffRoutes = require('./routes/staffRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const itRoutes = require('./routes/itRoutes');
const architectureRoutes = require('./routes/architectureRoutes');

const app = express();

// Security Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: [process.env.FRONTEND_URL || 'http://localhost:3000'], methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true }));

// JSON Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Set up routes
app.use('/staff', staffRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/it', itRoutes);
app.use('/architecture', architectureRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Handle errors
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
