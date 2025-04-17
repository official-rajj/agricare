import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Avatar, Box } from "@mui/material";
import { Dashboard, Settings, History } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./FarHistory.module.css";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";

const FarHistory = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedImage = location.state?.image;
  const description = location.state?.description;

  const [farmerName, setFarmerName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("farmerName");
    setFarmerName(name || "Farmer");
  }, []);

  return (
    <div className={styles.farhistoryContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <img src={logo} alt="AgriCare Logo" className={styles.logo} />
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem} onClick={() => navigate("/farmerdashboard")}>
            <Dashboard />
            <span>Dashboard</span>
          </li>
          <li className={styles.menuItem} onClick={() => navigate("/farsetting")}>
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
        <div className={styles.header}>
          <Typography variant="h4" className={styles.title}>
            <span className={styles.highlight}>Agriculture</span> & Farmers Market
          </Typography>
          <div className={styles.userInfo}>
            <Avatar src={userIcon} className={styles.userAvatar} />
            <Typography variant="body1" className={styles.userName}>{farmerName}</Typography>
          </div>
        </div>

        {/* Grey Container */}
        <Box className={styles.greyContainer}>
          {/* Product Card */}
          <Container className={styles.productContainer}>
            <Card className={styles.productCard}>
              <CardContent className={styles.productInfo}>
                <Typography variant="h6" className={styles.productName}>Product</Typography>
                <Typography variant="body2" className={styles.productStatus}>To Sell</Typography>
                <Typography variant="body2" className={styles.productStatus}>
                  Status: <span className={styles.statusActive}>{selectedImage ? "Active" : "None"}</span>
                </Typography>
              </CardContent>

              {/* Display Image Only If Selected */}
              {selectedImage && (
                <CardMedia
                  component="img"
                  image={selectedImage}
                  className={styles.productImage}
                />
              )}

              {/* ✅ Display Description If Available */}
              {description && (
                <CardContent className={styles.descriptionContainer}>
                  <Typography variant="body1" className={styles.descriptionText}>
                    <strong>Description:</strong> {description}
                  </Typography>
                </CardContent>
              )}
            </Card>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default FarHistory;
