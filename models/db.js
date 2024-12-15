// db.js

const mongoose = require('mongoose');

// Replace 'your_database_name' with the actual name of your MongoDB database
const DB_URL = 'mongodb://localhost:27017/hrms';

// Connect to MongoDB
mongoose.connect(DB_URL, {
    useNewUrlParser: true,    // Optional in modern versions of Mongoose
    useUnifiedTopology: true // Optional in modern versions of Mongoose
})
    .then(() => console.log("Connected to MongoDB!"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

// Export the mongoose instance if needed
module.exports = mongoose;
