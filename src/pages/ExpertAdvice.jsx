import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import { Dashboard, Settings, History } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./ExpertAdvice.css";

import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import expert1 from "../assets/expert1.png";
import expert2 from "../assets/expert2.png";
import expert3 from "../assets/expert3.png";
import expert4 from "../assets/expert4.png";

const ExpertAdvice = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [farmerName, setFarmerName] = useState(""); // 👈 state to hold farmer name

  const experts = [
    {
      name: "Dr. Gurucharan Singh",
      location: "Odisha, India",
      experience: "⭐ 5.0 Years",
      image: expert1,
    },
    {
      name: "Dr. K.L Chadha",
      location: "Delhi, India",
      experience: "⭐ 4+ Years",
      image: expert2,
    },
    {
      name: "Dr. Tavva Srinivas",
      location: "Kolkata, India",
      experience: "⭐ 7.0 Years",
      image: expert3,
    },
    {
      name: "Dr. Tarsem Singh Dhillon",
      location: "Chandigarh, India",
      experience: "⭐ 6+ Years",
      image: expert4,
    },
  ];

  // ✅ Fetch farmer name from localStorage
  useEffect(() => {
    const name = localStorage.getItem("farmerName");
    setFarmerName(name || "Farmer");
  }, []);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div className="expertAdviceContainer">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logoContainer">
          <img src={logo} alt="AgriCare Logo" className="logoImage" />
        </div>
        <ul className="sidebar-menu">
          <li className="menu-item active">
            <Dashboard className="menu-icon" />
            <span>Dashboard</span>
          </li>
          <li className="menu-item">
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
        <div className="header">
          <Typography variant="h4" className="title">
            <span className="highlight">Agriculture</span> & Farmers Market
          </Typography>
          <div className="user-info">
            <Avatar src={userIcon} className="user-avatar" />
            <Typography variant="body1" className="user-name">{farmerName}</Typography>
          </div>
        </div>

        {/* Expert Advice Section */}
        <Container className="expertContainer">
          <Typography variant="h5" className="expertTitle">Expert Advice</Typography>

          {/* Scrollable Expert List */}
          <div className="expertList">
            {experts.map((expert, index) => (
              <div key={index} className="expertCard">
                <img src={expert.image} alt={expert.name} className="expertImage" />
                <div className="expertInfo">
                  <Typography variant="h6" className="expertName">{expert.name}</Typography>
                  <Typography variant="body2" className="expertLocation">From {expert.location}</Typography>
                  <Typography variant="body2" className="expertExperience">Experience: {expert.experience}</Typography>
                </div>
                <button className="chatButton" onClick={handleOpenDialog}>Chat</button>
              </div>
            ))}
          </div>
        </Container>

        {/* Back Button */}
        <button className="backButton" onClick={() => navigate(-1)}>Go Back</button>
      </div>

      {/* Dialog Box */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Message</DialogTitle>
        <DialogContent>
          <Typography variant="body1">He will contact you soon!</Typography>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            OK
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExpertAdvice;
