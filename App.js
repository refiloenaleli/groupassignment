require('./db'); 
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Importing the CORS package

const app = express();
const port = 4000;  // You can change the port if needed

// Use the CORS middleware
app.use(cors()); // This allows requests from any origin by default

// MongoDB connection URL
const url = 'mongodb://makhala:matsoso@127.0.0.1:27017/admin';  // Replace with your credentials
const client = new MongoClient(url);

// Database Name
const dbName = 'test';  

app.get('/', async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected successfully to MongoDB');

    // Access the database
    const db = client.db(dbName);

    // Fetch collections
    const collections = await db.collections();
    res.send(`<h1>MongoDB Collections:</h1><ul>${collections.map(c => `<li>${c.collectionName}</li>`).join('')}</ul>`);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    res.status(500).send('Error connecting to MongoDB');
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
