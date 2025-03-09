import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, TextField, Button } from "@mui/material";
import farmerImage from "../assets/farmercreatepage.jpg"; // Ensure correct path
import logo from "../assets/logo.png"; // Ensure correct path
import "./Farmer.css";

const Farmer = () => {
  const [role, setRole] = useState("farmer"); // Default role: Farmer
  const [formData, setFormData] = useState({ name: "", phone: "", password: "" });

  const navigate = useNavigate(); // Initialize navigation

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    if (selectedRole === "buyer") {
      navigate("/buyer"); // Navigate to Buyer.jsx when Buyer is selected
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { ...formData, role });
  };

  return (
    <div className="farmer-container">
      {/* Left side image */}
      <div className="image-section">
        <img src={farmerImage} alt="Farmer on tractor" className="farmer-img" />
      </div>

      {/* Right side form */}
      <div className="form-section">
        <Container maxWidth="sm" className="form-container">
          <img src={logo} alt="AgriCare Logo" className="logo" />
          <Typography variant="h5" className="title">Create an account</Typography>

          {/* Role Selection */}
          <FormControl component="fieldset" className="role-selection">
            <Typography variant="subtitle1">Choose Your Role</Typography>
            <RadioGroup row value={role} onChange={handleRoleChange}>
              <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
              <FormControlLabel value="farmer" control={<Radio color="primary" />} label="Farmer" />
            </RadioGroup>
          </FormControl>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <TextField label="Name" name="name" fullWidth margin="normal" variant="outlined" value={formData.name} onChange={handleChange} required />
            <TextField label="Phone No" name="phone" type="tel" fullWidth margin="normal" variant="outlined" value={formData.phone} onChange={handleChange} required />
            <TextField label="Password" name="password" type="password" fullWidth margin="normal" variant="outlined" value={formData.password} onChange={handleChange} required />
            <br />

            {/* Submit Button */}
            <Button type="submit" variant="contained" fullWidth className="submit-btn">Create Account</Button>
          </form>
<br />
          {/* Login Link */}
          <Typography variant="body2" className="login-text">Already have an account? <a href="/login">Login</a></Typography>
        </Container>
      </div>
    </div>
  );
};

export default Farmer;
