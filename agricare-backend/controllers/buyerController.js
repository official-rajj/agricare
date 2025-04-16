const db = require("../db");
const jwt = require("jsonwebtoken");

// 🔐 Register a new buyer
exports.registerBuyer = (req, res) => {
  const { name, email, password, gender } = req.body;
  const sql = "INSERT INTO buyers (name, email, password, gender) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, password, gender], (err, result) => {
    if (err) {
      console.error("Registration error:", err);
      return res.status(500).json({ error: "Email already exists or DB error" });
    }

    res.status(201).json({ message: "Buyer registered successfully" });
  });
};

// 🔑 Login buyer and return token + basic user info
exports.loginBuyer = (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM buyers WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("Login DB error:", err);
      return res.status(500).json({ error: "Server error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const buyer = results[0];

    // Create JWT token
    const token = jwt.sign({ id: buyer.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      message: "Login successful",
      token,
      buyer: {
        id: buyer.id,
        name: buyer.name,
        email: buyer.email,
      },
    });
  });
};
