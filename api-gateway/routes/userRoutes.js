const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "User service is working!" });
});

module.exports = router;
