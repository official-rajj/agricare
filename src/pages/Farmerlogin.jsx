import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";
import api from "../api/api"; // ✅ Axios instance
import farmerImage from "../assets/farmerloginimg.jpg";
import logoImage from "../assets/logo.png";
import "./Farmerlogin.css";

const FarmerLogin = () => {
  const [role, setRole] = useState("farmer");
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [error, setError] = useState(""); // ✅ Error state

  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    if (selectedRole === "buyer") navigate("/buyerlogin");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await api.post("/farmer/login", formData);
      console.log("Farmer logged in:", response.data);
      navigate("/farmerdashboard");
    } catch (err) {
      const message = err.response?.data?.error || "Invalid credentials. Please try again.";
      console.error("Login failed:", message);
      setError(message); // ✅ Show error in UI
    }
  };

  return (
    <div className="farmer-login-container">
      <div className="image-section">
        <img src={farmerImage} alt="Farmer harvesting grapes" className="farmer-img" />
      </div>

      <div className="form-section">
        <Container maxWidth="sm" className="form-container">
          <img src={logoImage} alt="Logo" className="logo" />
          <Typography variant="h5" className="title">Login Account</Typography>

          <FormControl component="fieldset" className="role-selection">
            <Typography variant="subtitle1">Choose Your Role</Typography>
            <RadioGroup row value={role} onChange={handleRoleChange}>
              <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
              <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
            </RadioGroup>
          </FormControl>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Phone No"
              name="phone"
              type="tel"
              fullWidth
              required
              margin="normal"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={formData.password}
              onChange={handleChange}
            />

            {/* ✅ Error Message Display */}
            {error && (
              <Typography variant="body2" color="error" style={{ marginTop: "10px" }}>
                {error}
              </Typography>
            )}

            <Button type="submit" variant="contained" fullWidth className="login-btn">
              Login
            </Button>
          </form>

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
