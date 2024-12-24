require("dotenv").config();

const environment = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",
};

module.exports = environment;
