const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Book service is working!" });
});

module.exports = router;
