import { useState } from "react";
import { Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, TextField, Button } from "@mui/material";
import farmerImage from "../assets/buyerloginimg.jpg"; // Ensure the correct path
import logoImage from "../assets/logo.png"; // Ensure the correct path
import "./Buyerlogin.css"; // Add a CSS file for styling

const BuyerLogin = () => {
  const [role, setRole] = useState("buyer");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", { ...formData, role });
  };

  return (
    <div className="buyer-login-container">
      {/* Left Image Section */}
      <div className="image-section">
        <img src={farmerImage} alt="Farmer holding strawberries" className="farmer-img" />
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
            <RadioGroup row value={role} onChange={(e) => setRole(e.target.value)}>
              <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
              <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
            </RadioGroup>
          </FormControl>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <TextField label="Email ID" name="email" type="email" fullWidth margin="normal" variant="outlined" value={formData.email} onChange={handleChange} required />
            <TextField label="Password" name="password" type="password" fullWidth margin="normal" variant="outlined" value={formData.password} onChange={handleChange} required />

            <Button type="submit" variant="contained" fullWidth className="login-btn">Login</Button>
          </form>

          {/* Signup Link */}
          <Typography variant="body2" className="signup-text">
            Don&apos;t have an account? <a href="/signup">Sign up</a>
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default BuyerLogin;
