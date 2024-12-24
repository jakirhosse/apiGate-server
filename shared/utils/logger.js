const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "../../logs/app.log");

const logger = {
  info: (message) => {
    const log = `[INFO] ${new Date().toISOString()} - ${message}\n`;
    console.log(log.trim());
    fs.appendFileSync(logFilePath, log);
  },
  error: (message) => {
    const log = `[ERROR] ${new Date().toISOString()} - ${message}\n`;
    console.error(log.trim());
    fs.appendFileSync(logFilePath, log);
  },
};

module.exports = logger;
