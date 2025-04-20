const db = require("../db");
const jwt = require("jsonwebtoken");

// ✅ Farmer Registration
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

// ✅ Farmer Login
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

    const token = jwt.sign({ id: farmer.id, role: "farmer" }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

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

// ✅ Save Farmer Sell Details (used in ToSell.jsx)
exports.saveSellDetails = (req, res) => {
  const { farmerName, description } = req.body;

  if (!farmerName || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO farmersell (farmerName, description) VALUES (?, ?)";
  db.query(sql, [farmerName, description], (err, result) => {
    if (err) {
      console.error("Error inserting sell details:", err);
      return res.status(500).json({ error: "Failed to save sell details" });
    }

    res.status(201).json({ message: "Sell details saved successfully" });
  });
};

// ✅ Save Farmer Chat (used in ExpertAdvice.jsx)
exports.saveFarmerChat = (req, res) => {
  const { farmerName, expertName } = req.body;

  if (!farmerName || !expertName) {
    return res.status(400).json({ error: "Both farmerName and expertName are required" });
  }

  const sql = "INSERT INTO farmerstalk (farmer_name, expert_name) VALUES (?, ?)";
  db.query(sql, [farmerName, expertName], (err, result) => {
    if (err) {
      console.error("Error saving chat:", err);
      return res.status(500).json({ error: "Failed to save chat record" });
    }

    res.status(201).json({ message: "Chat record saved successfully" });
  });
};
