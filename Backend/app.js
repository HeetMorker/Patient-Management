const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
dotenv.config();

// Routes


app.get('/', (req, res) => {
  res.send('Recipe Management API is running...');
});

module.exports = app;
