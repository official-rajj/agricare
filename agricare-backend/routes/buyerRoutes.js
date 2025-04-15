// routes/buyerRoutes.js
const express = require("express");
const router = express.Router();
const { registerBuyer, loginBuyer } = require("../controllers/buyerController");

router.post("/register", registerBuyer);
router.post("/login", loginBuyer);

module.exports = router;
