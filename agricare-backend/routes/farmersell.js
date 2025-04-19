// routes/farmersell.js
const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { farmerName, description } = req.body;

  if (!farmerName || !description) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const sql = "INSERT INTO farmersell (farmerName, description) VALUES (?, ?)";
  db.query(sql, [farmerName, description], (err, result) => {
    if (err) {
      console.error("Error inserting product:", err);
      return res.status(500).json({ error: "Server error while saving product." });
    }

    return res.status(201).json({ message: "Product saved successfully." });
  });
});

module.exports = router;
