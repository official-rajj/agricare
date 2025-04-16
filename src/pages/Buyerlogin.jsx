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
import farmerImage from "../assets/buyerloginimg.jpg";
import logoImage from "../assets/logo.png";
import "./Buyerlogin.css";

const BuyerLogin = () => {
  const [role, setRole] = useState("buyer");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    if (selectedRole === "farmer") {
      navigate("/farmerlogin");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/buyer/login", formData);

      // ✅ Save token and buyer name
      localStorage.setItem("buyerToken", response.data.token);
      localStorage.setItem("buyerName", response.data.buyer.name);

      // ✅ Navigate to dashboard
      navigate("/buyerdashboard");
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Login failed. Try again.");
    }
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
              label="Email ID"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Button type="submit" variant="contained" fullWidth className="login-btn">
              Login
            </Button>
          </form>

          {/* Error message */}
          {error && (
            <Typography color="error" style={{ marginTop: "10px" }}>
              {error}
            </Typography>
          )}

          <Typography variant="body2" className="signup-text">
            <br />
            Don&apos;t have an account? <a href="/buyer">Sign up</a>
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default BuyerLogin;
