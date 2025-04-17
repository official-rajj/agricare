const db = require("../db");
const jwt = require("jsonwebtoken");

exports.registerFarmer = (req, res) => {
  const { name, phone, password } = req.body;

  if (!name || !phone || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  db.query(
    "INSERT INTO farmers (name, phone, password) VALUES (?, ?, ?)",
    [name, phone, password],
    (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ error: "Phone already registered" });
        }
        return res.status(500).json({ error: "Database error" });
      }
      res.status(201).json({ message: "Farmer registered successfully" });
    }
  );
};

exports.loginFarmer = (req, res) => {
  const { phone, password } = req.body;

  db.query("SELECT * FROM farmers WHERE phone = ?", [phone], (err, results) => {
    if (err) {
      console.error("Login DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Farmer not found" });
    }

    const farmer = results[0];

    if (farmer.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // ✅ Create JWT token
    const token = jwt.sign({ id: farmer.id, role: "farmer" }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // ✅ Return token and farmer info
    res.json({
      message: "Login successful",
      token,
      farmer: {
        id: farmer.id,
        name: farmer.name,
        phone: farmer.phone,
      },
    });
  });
};

