const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { name, item, totalQuantity, totalPrice } = req.body;

  if (!name || !item || !totalQuantity || !totalPrice) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const sql = `
    INSERT INTO buyerbuy (name, item, totalQuantity, totalPrice)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, item, totalQuantity, totalPrice], (err, result) => {
    if (err) {
      console.error("Error inserting purchase:", err.message);
      return res.status(500).json({ error: "Server error while saving purchase." });
    }

    res.status(201).json({ message: "Purchase saved successfully.", id: result.insertId });
  });
});




module.exports = router;
