const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "product service is working!" });
});

module.exports = router;
