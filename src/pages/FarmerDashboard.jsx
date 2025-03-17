import React from "react";
import { Container, Typography, Card, CardMedia, CardContent, Avatar } from "@mui/material";
import { Dashboard, Settings, History } from "@mui/icons-material";
import "./FarmerDashboard.css";
import logo from "../assets/logo.png"; // Ensure correct path
import userIcon from "../assets/user.png"; // Ensure correct path
import toSellImg from "../assets/to-sell.png"; // Image for "To Sell"
import expertAdviceImg from "../assets/expert-advice.png"; // Image for "Expert Advice"
import weatherForecastImg from "../assets/weather-forecast1.png"; // Image for "Weather Forecast"

const FarmerDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo} alt="AgriCare Logo" className="logo" />
        <ul className="sidebar-menu">
          <li className="menu-item active">
            <Dashboard className="menu-icon" />
            Dashboard
          </li>
          <li className="menu-item">
            <Settings className="menu-icon" />
            Setting
          </li>
          <li className="menu-item">
            <History className="menu-icon" />
            History
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <Typography variant="h4" className="title">
            <span className="highlight">Agriculture</span> & Farmers Market
          </Typography>
          <div className="user-info">
            <Avatar src={userIcon} className="user-avatar" />
            <Typography variant="body1" className="user-name">Mukesh Kumar</Typography>
          </div>
        </div>

        {/* Cards Section */}
        <Container className="cards-container">
          {/* To Sell */}
          <Card className="dashboard-card">
            <CardMedia component="img" height="140" image={toSellImg} alt="To Sell" />
            <CardContent>
              <Typography variant="h6" className="card-title">To Sell</Typography>
            </CardContent>
          </Card>

          {/* Expert Advice */}
          <Card className="dashboard-card">
            <CardMedia component="img" height="140" image={expertAdviceImg} alt="Expert Advice" />
            <CardContent>
              <Typography variant="h6" className="card-title">Expert Advice</Typography>
            </CardContent>
          </Card>

          {/* Weather Forecast */}
          <Card className="dashboard-card">
            <CardMedia component="img" height="140" image={weatherForecastImg} alt="Weather Forecast" />
            <CardContent>
              <Typography variant="h6" className="card-title">Weather Forecast</Typography>
            </CardContent>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default FarmerDashboard;
