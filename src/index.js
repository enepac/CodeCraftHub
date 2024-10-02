const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes'); // Correctly import the routes

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data
app.use(express.json());

// Use userRoutes for handling '/users' routes
app.use('/users', userRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;