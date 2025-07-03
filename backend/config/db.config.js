const mongoose = require('mongoose');

// This line ensures that the variables from your .env file are loaded
require('dotenv').config();

// Get the connection string directly from the environment variables
const mongoURI = process.env.MONGO_URI;

module.exports = async function connectDB() {
    // Check if the MONGO_URI is provided
    if (!mongoURI) {
        console.error('MongoDB connection failed: MONGO_URI not found in environment variables.');
        // Exit the process with an error code
        process.exit(1); 
    }

    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed');
        console.error(error);
        process.exit(1);
    }
};