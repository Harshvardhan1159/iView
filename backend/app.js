const express = require('express');
const cors = require('cors');
const { connectDB } = require('./database/database.js');
const handleErrors = require('./middlewares/error.middleware.js');
const userRoutes = require('./routes/user.routes.js');
const hrRoutes = require('./routes/hr.routes.js');

const app = express();

// Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("./public"))
// Connect to MongoDB
connectDB();

// Routes middleware
app.use('/api/users', userRoutes); // Apply authMiddleware here
app.use('/api/hr', hrRoutes);

// Error handling middleware
app.use(handleErrors);

module.exports = app;
