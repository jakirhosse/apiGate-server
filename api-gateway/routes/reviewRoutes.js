const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Review service is working!" });
});

module.exports = router;
