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
  Alert
} from "@mui/material";
import api from "../api/api"; // ✅ Axios instance
import farmerImage from "../assets/farmercreatepage.jpg";
import logo from "../assets/logo.png";
import "./Farmer.css";

const Farmer = () => {
  const [role, setRole] = useState("farmer");
  const [formData, setFormData] = useState({ name: "", phone: "", password: "" });
  const [success, setSuccess] = useState(""); // ✅ Success message

  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    if (selectedRole === "buyer") navigate("/buyer");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/farmer/register", formData);
      setSuccess("Registered Successfully ✅");

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/farmerlogin");
      }, 2000);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="farmer-container">
      <div className="image-section">
        <img src={farmerImage} alt="Farmer on tractor" className="farmer-img" />
      </div>

      <div className="form-section">
        <Container maxWidth="sm" className="form-container">
          <img src={logo} alt="AgriCare Logo" className="logo" />
          <Typography variant="h5" className="title">Create an account</Typography>

          <FormControl component="fieldset" className="role-selection">
            <Typography variant="subtitle1">Choose Your Role</Typography>
            <RadioGroup row value={role} onChange={handleRoleChange}>
              <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
              <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
            </RadioGroup>
          </FormControl>

          {/* ✅ Success message */}
          {success && (
            <Alert severity="success" style={{ marginBottom: "20px" }}>
              {success}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />
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
            <Button type="submit" variant="contained" fullWidth className="submit-btn">
              Create Account
            </Button>
          </form>

          <Typography variant="body2" className="login-text">
            Already have an account? <a href="/farmerlogin">Login</a>
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default Farmer;
