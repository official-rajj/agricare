// controllers/buyerController.js
const db = require("../db");
const jwt = require("jsonwebtoken");

exports.registerBuyer = (req, res) => {
  const { name, email, password, gender } = req.body;
  const sql = "INSERT INTO buyers (name, email, password, gender) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, password, gender], (err, result) => {
    if (err) return res.status(500).json({ error: "Email already exists or DB error" });
    res.json({ message: "Buyer registered successfully" });
  });
};

exports.loginBuyer = (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM buyers WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: "Server error" });

    if (results.length === 0) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET);
    res.json({ message: "Login successful", token });
  });
};
