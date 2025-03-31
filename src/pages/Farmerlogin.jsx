import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, TextField, Button } from "@mui/material";
import farmerImage from "../assets/farmerloginimg.jpg"; // Ensure the correct path
import logoImage from "../assets/logo.png"; // Ensure the correct path
import "./Farmerlogin.css"; // Add a CSS file for styling

const FarmerLogin = () => {
  const [role, setRole] = useState("farmer");
  const [formData, setFormData] = useState({ phone: "", password: "" });

  const navigate = useNavigate(); // Initialize navigation
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    if (selectedRole === "buyer") {
      navigate("/buyerlogin"); // Navigate to Farmer login page
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", { ...formData, role });
  };

  return (
    <div className="farmer-login-container">
      {/* Left Image Section */}
      <div className="image-section">
        <img src={farmerImage} alt="Farmer harvesting grapes" className="farmer-img" />
      </div>

      {/* Right Login Form Section */}
      <div className="form-section">
        <Container maxWidth="sm" className="form-container">
          
          {/* Logo */}
          <img src={logoImage} alt="Logo" className="logo" />
          
          {/* Title */}
          <Typography variant="h5" className="title">Login Account</Typography>

          {/* Role Selection */}
          <FormControl component="fieldset" className="role-selection">
            <Typography variant="subtitle1">Choose Your Role</Typography>
            <RadioGroup row value={role} onChange={handleRoleChange}>
              <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
              <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
            </RadioGroup>
          </FormControl>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <TextField label="Phone No" name="phone" type="tel" fullWidth margin="normal" variant="outlined" value={formData.phone} onChange={handleChange} required />
            <TextField label="Password" name="password" type="password" fullWidth margin="normal" variant="outlined" value={formData.password} onChange={handleChange} required />

            <Button type="submit" variant="contained" fullWidth className="login-btn"> <a href="/farmerdashboard">Login</a></Button>
          </form>

          {/* Signup Link */}
          <Typography variant="body2" className="signup-text">
            <br />
            Don&apos;t have an account? <a href="/farmer">Sign up</a>
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default FarmerLogin;
