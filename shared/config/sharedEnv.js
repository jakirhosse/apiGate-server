require("dotenv").config();

const sharedEnv = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = sharedEnv;
