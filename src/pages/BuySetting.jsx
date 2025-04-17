import React from "react";
import { Container, Typography, Avatar, Button, TextField } from "@mui/material";
import { Dashboard, Settings, History } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styles from "./BuySetting.module.css";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";

const BuySetting = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.buySettingContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="AgriCare Logo" className={styles.logoImage} />
        </div>
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem} onClick={() => navigate("/BuyerDashboard")}>
            <Dashboard className={styles.menuIcon} />
            <span>Dashboard</span>
          </li>
          <li className={`${styles.menuItem} ${styles.active}`}>
            <Settings className={styles.menuIcon} />
            <span>Setting</span>
          </li>
          <li className={styles.menuItem} onClick={() => navigate("/BuyHistory")}>
            <History className={styles.menuIcon} />
            <span>History</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Header */}
        <div className={styles.centerTitle}>
  <Typography variant="h4" className={styles.title}>
    <span className={styles.highlight}>Natural</span> & Organic Market
  </Typography>
</div>

        {/* Profile Picture Section */}
        <Container className={styles.profileContainer}>
          <Typography variant="h6" className={styles.sectionTitle}>Profile Picture</Typography>
          <Avatar src={userIcon} className={styles.profileAvatar} />
          <div className={styles.buttonGroup}>
            <Button variant="contained" className={styles.changePicture}>Change picture</Button>
            <Button variant="outlined" className={styles.deletePicture}>Delete picture</Button>
          </div>
        </Container>

        {/* Profile Information */}
        <Container className={styles.infoContainer}>
          <Typography variant="h6" className={styles.sectionTitle}>Profile name</Typography>
          <TextField variant="outlined" fullWidth defaultValue="Rahul Sharma" />

          <Typography variant="h6" className={styles.sectionTitle}>Status</Typography>
          <TextField variant="outlined" fullWidth defaultValue="Buyer" disabled />

          <Typography variant="h6" className={styles.sectionTitle}>About me</Typography>
          <TextField
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            defaultValue="As a buyer on AgriCare, I can purchase fresh crops directly from farmers, ensuring quality produce at fair prices."
          />
        </Container>

        {/* Buttons */}
        <div className={styles.buttonContainer}>
          <Button 
            variant="contained" 
            className={styles.saveButton} 
            onClick={() => navigate("/BuyerDashboard")}
          >
            Save changes
          </Button>
          <Button 
  variant="contained" 
  color="error" 
  className={styles.logoutButton} 
  onClick={() => {
    localStorage.removeItem("buyerToken");
    localStorage.removeItem("buyerName");
    navigate("/buyerlogin");
  }}
>
  Logout
</Button>

        </div>
      </div>
    </div>
  );
};

export default BuySetting;
