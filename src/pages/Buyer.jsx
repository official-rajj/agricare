import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, TextField, Button } from "@mui/material";
import farmerImage from "../assets/buyerpageimage.png";
import logo from "../assets/logo.png";
import "./Buyer.css";

const Buyer = () => {
  const [role, setRole] = useState("buyer");
  const [gender, setGender] = useState("male");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate(); // Initialize navigation

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    if (selectedRole === "farmer") {
      navigate("/farmer"); // Navigate to Farmer.jsx
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { ...formData, role, gender });
  };

  return (
    <div className="buyer-container">
      <div className="image-section">
        <img src={farmerImage} alt="Farmer with strawberries" className="farmer-img" />
      </div>

      <div className="form-section">
        <Container maxWidth="sm" className="form-container">
          <img src={logo} alt="AgriCare Logo" className="logo" />
          <Typography variant="h5" className="title">Create an account</Typography>
          
          <FormControl component="fieldset" className="role-selection">
            <Typography variant="subtitle1"> <br /> Choose Your Role</Typography>
            <RadioGroup row value={role} onChange={handleRoleChange}>
              <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
              <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
            </RadioGroup>
          </FormControl>

          <form onSubmit={handleSubmit}>
            <TextField label="Name" name="name" fullWidth margin="normal" variant="outlined" value={formData.name} onChange={handleChange} required />
            <TextField label="Email" name="email" type="email" fullWidth margin="normal" variant="outlined" value={formData.email} onChange={handleChange} required />
            <TextField label="Password" name="password" type="password" fullWidth margin="normal" variant="outlined" value={formData.password} onChange={handleChange} required />
            
            <FormControl component="fieldset" className="gender-selection">
              <Typography variant="subtitle1">Gender</Typography>
              <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>

            <Button type="submit" variant="contained" fullWidth className="submit-btn">Create Account</Button>
          </form>
          <br />

          {/* Use useNavigate for navigation */}
                    <Typography variant="body2" className="login-text">Already have an account? <a href="/buyerlogin">Login</a></Typography>

        </Container>
      </div>
    </div>
  );
};

export default Buyer;
