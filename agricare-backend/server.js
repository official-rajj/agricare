// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const buyerRoutes = require("./routes/buyerRoutes");
const farmerRoutes = require("./routes/farmerRoutes");
const farmerSellRoute = require("./routes/farmersell");
const buyerbuyRoute = require("./routes/buyerbuy");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/buyer", buyerRoutes);
app.use("/api/farmer", farmerRoutes);
app.use("/api/farmersell", farmerSellRoute);
app.use("/api/buyerbuy", buyerbuyRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
