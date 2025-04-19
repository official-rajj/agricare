import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  TextField,
} from "@mui/material";
import { ArrowBack, Add, CameraAlt, Close } from "@mui/icons-material";
import "./ToSell.css";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";

const ToSell = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const [description, setDescription] = useState("");
  const [farmerName, setFarmerName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("farmerName");
    setFarmerName(name || "Farmer");
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const toggleDescriptionInput = () => {
    setShowDescriptionInput(true);
  };

  const removeDescriptionInput = () => {
    setShowDescriptionInput(false);
    setDescription("");
  };

  // ✅ Submit data to backend using fetch and correct endpoint
  const handleDone = async () => {
    try {
      if (!description.trim()) {
        alert("Please enter a description.");
        return;
      }

      const data = { farmerName, description };

      const response = await fetch("http://localhost:5000/api/farmer/sell", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Product description submitted successfully!");
        navigate("/farhistory", { state: { image, description } });
      } else {
        alert(result.error || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error saving sell details:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="tosell-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo} alt="AgriCare Logo" className="logo" />
        <ul className="sidebar-menu">
          <li className="menu-item active"><span>Dashboard</span></li>
          <li className="menu-item"><span>Setting</span></li>
          <li className="menu-item"><span>History</span></li>
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
            <Typography variant="body1" className="user-name">
              {farmerName}
            </Typography>
          </div>
        </div>

        {/* Sell Product Section */}
        <Container className="sell-product-container">
          <Typography variant="h5" className="section-title">
            Sell Your Product
          </Typography>
          <Card className="product-card">
            {/* Image Upload Section */}
            <div className="image-upload-container">
              {image ? (
                <>
                  <CardMedia
                    component="img"
                    height="150"
                    image={image}
                    alt="Product"
                    className="product-image"
                  />
                  <IconButton
                    className="remove-image-button"
                    onClick={handleRemoveImage}
                  >
                    <Close />
                  </IconButton>
                </>
              ) : (
                <>
                  <input
                    type="file"
                    id="upload-image"
                    hidden
                    onChange={handleImageChange}
                  />
                  <label htmlFor="upload-image" className="upload-label">
                    <CameraAlt className="upload-icon" />
                  </label>
                </>
              )}
            </div>

            {/* Description Section */}
            <CardContent>
              {showDescriptionInput ? (
                <div className="description-container">
                  <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    variant="outlined"
                    placeholder="Enter product description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <IconButton
                    className="remove-description-button"
                    onClick={removeDescriptionInput}
                  >
                    <Close />
                  </IconButton>
                </div>
              ) : (
                <Button
                  variant="text"
                  startIcon={<Add />}
                  onClick={toggleDescriptionInput}
                >
                  About
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="buttons">
            <Button
              variant="contained"
              color="secondary"
              className="back-button"
              startIcon={<ArrowBack />}
              onClick={() => navigate("/farmerdashboard")}
            >
              Go Back
            </Button>
            <Button
              variant="contained"
              color="success"
              className="done-button"
              onClick={handleDone}
            >
              Done
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ToSell;
