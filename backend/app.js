const express = require("express");
const cors = require("cors");
const { connectDB } = require("./database/database.js");
const handleErrors = require("./middlewares/error.middleware.js");
const userRoutes = require("./routes/user.routes.js");
const hrRoutes = require("./routes/hr.routes.js");
const interviewRoutes = require("./routes/interview.routes.js");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://i-view.vercel.app",       // Your main Vercel URL (update this!)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      // Allow if origin is in the list OR is a Vercel preview deployment
      if (allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.static("./public"));

app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Routes middleware
app.use("/api/users", userRoutes);
app.use("/api/hr", hrRoutes);
app.use("/api/interview", interviewRoutes);

// Error handling middleware
app.use(handleErrors);

module.exports = app;
