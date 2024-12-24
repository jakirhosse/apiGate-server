const cors = require("cors");

const corsSetup = () => {
  const options = {
    origin: "*", // Update this to specific domains in production
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };
  return cors(options);
};

module.exports = corsSetup;
