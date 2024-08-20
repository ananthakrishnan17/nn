const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const errorMiddleware = require('./middlewares/error');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config/config.env') });

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const cookieParser = require('cookie-parser')

// Use routes
app.use('/api/v1/', products);
app.use('/api/v1/', auth);
app.use(cookieParser());
// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
