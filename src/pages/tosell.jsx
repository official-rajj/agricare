import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Container, Typography, Button, Card, CardMedia, CardContent, Avatar, IconButton, TextField } from "@mui/material";
import { ArrowBack, Add, CameraAlt, Close } from "@mui/icons-material";
import "./ToSell.css";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";

const ToSell = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [image, setImage] = useState(null);
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const [description, setDescription] = useState("");

  // Handle Image Selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Remove Selected Image
  const handleRemoveImage = () => {
    setImage(null);
  };

  // Toggle Description Input
  const toggleDescriptionInput = () => {
    setShowDescriptionInput(true);
  };

  // Remove Description Input
  const removeDescriptionInput = () => {
    setShowDescriptionInput(false);
    setDescription("");
  };

  return (
    <div className="tosell-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo} alt="AgriCare Logo" className="logo" />
        <ul className="sidebar-menu">
          <li className="menu-item active">
            <span>Dashboard</span>
          </li>
          <li className="menu-item">
            <span>Setting</span>
          </li>
          <li className="menu-item">
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
            <Typography variant="body1" className="user-name">Mukesh Kumar</Typography>
          </div>
        </div>

        {/* Sell Your Product Section */}
        <Container className="sell-product-container">
          <Typography variant="h5" className="section-title">Sell Your Product</Typography>
          <Card className="product-card">
            {/* Image Upload Section */}
            <div className="image-upload-container">
              {image ? (
                <>
                  <CardMedia component="img" height="150" image={image} alt="Product" className="product-image" />
                  <IconButton className="remove-image-button" onClick={handleRemoveImage}>
                    <Close />
                  </IconButton>
                </>
              ) : (
                <>
                  <input type="file" id="upload-image" hidden onChange={handleImageChange} />
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
                  <IconButton className="remove-description-button" onClick={removeDescriptionInput}>
                    <Close />
                  </IconButton>
                </div>
              ) : (
                <Button variant="text" startIcon={<Add />} onClick={toggleDescriptionInput}>
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
              onClick={() => navigate("/farmerdashboard")} // Navigate to farmerdashboard
            >
              Go Back
            </Button>
            <Button
  variant="contained"
  color="success"
  className="done-button"
  onClick={() => navigate("/farhistory", { state: { image } })} // Pass image state
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
