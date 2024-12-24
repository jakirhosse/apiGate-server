const logger = require("../utils/logger");

const requestLogger = (req, res, next) => {
  logger.info(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

module.exports = requestLogger;
