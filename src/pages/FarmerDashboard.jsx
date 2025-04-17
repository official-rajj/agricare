import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
} from "@mui/material";
import { Dashboard, Settings, History } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import "./FarmerDashboard.css";

import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import toSellImg1 from "../assets/to-sell1.jpg";
import toSellImg2 from "../assets/to-sell2.png";
import expertAdviceImg1 from "../assets/expert-advice1.jpg";
import expertAdviceImg2 from "../assets/expert-advice2.png";
import weatherForecastImg1 from "../assets/weather-forecast1.png";
import weatherForecastImg2 from "../assets/weather-forecast2.png";

const FarmerDashboard = () => {
  const navigate = useNavigate();
  const [farmerName, setFarmerName] = useState("");

  // ✅ Get farmer name from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("farmerName");
    if (storedName) {
      setFarmerName(storedName);
    } else {
      setFarmerName("Guest");
    }
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo} alt="AgriCare Logo" className="logo" />
        <ul className="sidebar-menu">
          <li className="menu-item active">
            <Dashboard className="menu-icon" />
            <span>Dashboard</span>
          </li>
          <li className="menu-item" onClick={() => navigate("/FarSetting")}>
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
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <Typography variant="h4" className="title">
            <span className="highlight">Agriculture</span> & Farmers Market
          </Typography>
          <div className="user-info">
            <Avatar src={userIcon} className="user-avatar" />
            <Typography variant="body1" className="user-name">{farmerName}</Typography>
          </div>
        </div>

        {/* Cards Section */}
        <Container className="cards-container">
          {/* To Sell */}
          <Card className="dashboard-card">
            <Link to="/tosell" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card-images">
                <CardMedia component="img" height="100" image={toSellImg1} alt="To Sell" className="card-image" />
                <CardMedia component="img" height="100" image={toSellImg2} alt="To Sell" className="card-image" />
              </div>
              <CardContent className="card-content">
                <Typography variant="h6" className="card-title">To Sell</Typography>
              </CardContent>
            </Link>
          </Card>

          {/* Expert Advice */}
          <Card className="dashboard-card">
            <Link to="/expertadvice" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card-images">
                <CardMedia component="img" height="100" image={expertAdviceImg1} alt="Expert Advice" className="card-image" />
                <CardMedia component="img" height="100" image={expertAdviceImg2} alt="Expert Advice" className="card-image" />
              </div>
              <CardContent className="card-content">
                <Typography variant="h6" className="card-title">Expert Advice</Typography>
              </CardContent>
            </Link>
          </Card>

          {/* Weather Forecast */}
          <Card className="dashboard-card">
            <Link to="/farweather" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card-images">
                <CardMedia component="img" height="100" image={weatherForecastImg1} alt="Weather Forecast" className="card-image" />
                <CardMedia component="img" height="100" image={weatherForecastImg2} alt="Weather Forecast" className="card-image" />
              </div>
              <CardContent className="card-content">
                <Typography variant="h6" className="card-title">Weather Forecast</Typography>
              </CardContent>
            </Link>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default FarmerDashboard;
