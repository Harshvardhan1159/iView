const express = require('express');
const cors = require('cors');
const { connectDB } = require('./database/database.js');
const handleErrors = require('./middlewares/error.middleware.js');
const userRoutes = require('./routes/user.routes.js');
const hrRoutes = require('./routes/hr.routes.js');
const interviewRoutes = require('./routes/interview.routes.js');
const cookieParser = require('cookie-parser')

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration to allow all origins
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // Allows all origins
}));

app.use(express.static("./public"));

app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Routes middleware
app.use('/api/users', userRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/interview', interviewRoutes);

// Error handling middleware
app.use(handleErrors);

module.exports = app;
