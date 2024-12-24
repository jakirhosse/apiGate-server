const app = require("./app"); // Import the configured app from app.js

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`); // Ensure this log shows the port
});
