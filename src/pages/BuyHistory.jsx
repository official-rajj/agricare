import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { Dashboard, Settings, History } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./BuyHistory.module.css";
import logo from "../assets/logo.png";

const BuyHistory = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [buyerName, setBuyerName] = useState("Buyer");

  const selectedImage = location.state?.image;
  const name = location.state?.name;
  const price = location.state?.price;
  const quantity = location.state?.quantity;

  // ✅ Get buyer's name from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("buyerName");
    if (storedName) setBuyerName(storedName);
  }, []);

  return (
    <div className={styles.buyHistoryContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <img src={logo} alt="AgriCare Logo" className={styles.logo} />
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem} onClick={() => navigate("/BuyerDashboard")}>
            <Dashboard />
            <span>Dashboard</span>
          </li>
          <li className={styles.menuItem} onClick={() => navigate("/BuySetting")}>
            <Settings />
            <span>Setting</span>
          </li>
          <li className={`${styles.menuItem} ${styles.active}`}>
            <History />
            <span>History</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.title}>
            <span className={styles.natural}>Natural</span> & Organic Market
          </span>
          <div className={styles.profile}>
            <div className={styles.avatar}>👤</div>
            <span>{buyerName}</span> {/* ✅ Dynamic Buyer Name */}
          </div>
        </header>

        {/* Content Section */}
        <Box className={styles.greyContainer}>
          <Container className={styles.productContainer}>
            <Card className={styles.productCard}>
              <CardContent className={styles.productInfo}>
                <Typography variant="h6" className={styles.productName}>
                  {name || "Product"}
                </Typography>
                <Typography variant="body2" className={styles.productStatus}>To Buy</Typography>
                <Typography variant="body2" className={styles.productStatus}>
                  Status: <span className={styles.statusActive}>
                    {selectedImage ? "Active" : "None"}
                  </span>
                </Typography>
              </CardContent>

              {selectedImage && (
                <CardMedia
                  component="img"
                  image={selectedImage}
                  className={styles.productImage}
                />
              )}

              <CardContent className={styles.descriptionContainer}>
                <Typography variant="body1" className={styles.descriptionText}>
                  <strong>Price:</strong> {price || "-"}
                </Typography>
                <Typography variant="body1" className={styles.descriptionText}>
                  <strong>Quantity:</strong> {quantity || 1}
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default BuyHistory;
