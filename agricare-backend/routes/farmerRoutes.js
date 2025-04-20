const express = require("express");
const router = express.Router();

// Import controller functions
const {
  registerFarmer,
  loginFarmer,
  saveSellDetails,
  saveFarmerChat, // ✅ Import the new controller
} = require("../controllers/farmerController");

// ✅ Route to register a new farmer
router.post("/register", registerFarmer);

// ✅ Route to login a farmer
router.post("/login", loginFarmer);

// ✅ Route to save sell details (e.g., from ToSell.jsx)
router.post("/sell", saveSellDetails);

// ✅ Route to save farmer chat (used in ExpertAdvice.jsx)
router.post("/chat", saveFarmerChat);

module.exports = router;
