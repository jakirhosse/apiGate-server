const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const productRoutes = require("./routes/productRoutes");

const authMiddleware = require("./middlewares/authMiddleware");
const errorHandler = require("./middlewares/errorHandler");
const requestLogger = require("./middlewares/requestLogger");
const rateLimiter = require("./middlewares/rateLimiter");

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(requestLogger); // requestLogger should be a function
app.use(rateLimiter); // rateLimiter should be a function

// Route setup
app.use("/users", authMiddleware, userRoutes);
app.use("/books", bookRoutes);
app.use("/payments", paymentRoutes);
app.use("/reviews", reviewRoutes);
app.use("/products", productRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;
