import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import { Dashboard, Settings, History } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./FarSetting.css";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";

const FarSetting = () => {
  const navigate = useNavigate();
  const [farmerName, setFarmerName] = useState("");

  // Load farmer name from localStorage
  useEffect(() => {
    const name = localStorage.getItem("farmerName");
    setFarmerName(name || "Farmer");
  }, []);

  return (
    <div className="farSettingContainer">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logoContainer">
          <img src={logo} alt="AgriCare Logo" className="logoImage" />
        </div>
        <ul className="sidebar-menu">
          <li className="menu-item" onClick={() => navigate("/FarmerDashboard")}>
            <Dashboard className="menu-icon" />
            <span>Dashboard</span>
          </li>
          <li className="menu-item active">
            <Settings className="menu-icon" />
            <span>Setting</span>
          </li>
          <li className="menu-item" onClick={() => navigate("/FarHistory")}>
            <History className="menu-icon" />
            <span>History</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        {/* Header */}
        <Typography variant="h4" className="title">
          <span className="highlight">Agriculture</span> & Farmers Market
        </Typography>

        {/* Profile Picture Section */}
        <Container className="profileContainer">
          <Typography variant="h6" className="sectionTitle">Profile Picture</Typography>
          <Avatar src={userIcon} className="profileAvatar" />
          <div className="buttonGroup">
            <Button variant="contained" className="changePicture">Change picture</Button>
            <Button variant="outlined" className="deletePicture">Delete picture</Button>
          </div>
        </Container>

        {/* Profile Information */}
        <Container className="infoContainer">
          <Typography variant="h6" className="sectionTitle">Profile name</Typography>
          <TextField variant="outlined" fullWidth value={farmerName} disabled />

          <Typography variant="h6" className="sectionTitle">Status</Typography>
          <TextField variant="outlined" fullWidth value="Farmer" disabled />

          <Typography variant="h6" className="sectionTitle">About me</Typography>
          <TextField
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            disabled
            value="At AgriCare, I can sell my crops—be it fruits, vegetables, pulses, wheat, or rice—without the interference of middlemen, ensuring I earn a fair profit."
          />
        </Container>

        {/* Buttons */}
        <div className="buttonContainer">
          <Button 
            variant="contained" 
            className="saveButton" 
            onClick={() => navigate("/FarmerDashboard")}
          >
            Save changes
          </Button>
          <Button
            variant="contained"
            color="error"
            className="logoutButton"
            onClick={() => {
              localStorage.removeItem("farmerToken");
              localStorage.removeItem("farmerName");
              navigate("/farmerlogin");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FarSetting;
