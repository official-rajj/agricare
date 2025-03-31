import React from "react";
import { Container, Typography, Card, CardContent, CardMedia, Avatar } from "@mui/material";
import { Dashboard, Settings, History } from "@mui/icons-material";
import styles from "./FarHistory.module.css"; // ✅ Correct Import
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import onionImage from "../assets/onions.png"; // Replace with actual image

const FarHistory = () => {
  return (
    <div className={styles.farhistoryContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <img src={logo} alt="AgriCare Logo" className={styles.logo} />
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem}>
            <Dashboard />
            <span>Dashboard</span>
          </li>
          <li className={styles.menuItem}>
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
            <Typography variant="body1" className={styles.userName}>Mukesh Kumar</Typography>
          </div>
        </div>

        {/* Product Card */}
        <Container className={styles.productContainer}>
          <Card className={styles.productCard}>
            <CardContent>
              <Typography variant="h6" className={styles.productName}>Onion</Typography>
              <Typography variant="body2" className={styles.productStatus}>To Sell</Typography>
              <Typography variant="body2" className={styles.productStatus}>
                Status: <span className={styles.statusActive}>Active</span>
              </Typography>
            </CardContent>
            <CardMedia component="img" image={onionImage} className={styles.productImage} />
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default FarHistory;
