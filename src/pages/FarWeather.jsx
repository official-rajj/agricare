import React, { useState } from "react";
import { Container, Typography, Avatar, TextField, Button } from "@mui/material";
import { Dashboard, Settings, History } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { fetchWeather } from "../api/weatherService"; // Import fetchWeather function
import "./FarWeather.css";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import thunderstormIcon from "../assets/thunderstorm.png";
import potatoImage from "../assets/potatoes.png";

const FarWeather = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState(""); // Store user input city
  const [weather, setWeather] = useState(null); // Store weather data

  // Function to fetch weather data
  const getWeatherData = async () => {
    if (!city) return;
    const data = await fetchWeather(city);
    if (data && data.main) {
      setWeather({
        temp: data.main.temp,
        condition: data.weather[0].description,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        rain: data.rain ? data.rain["1h"] : "No rain",
      });
    } else {
      setWeather(null);
    }
  };

  return (
    <div className="farWeatherContainer">
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
          <li className="menu-item">
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
            <Typography variant="body1" className="user-name">Mukesh Kumar</Typography>
          </div>
        </div>

        {/* Weather Forecast Section */}
        <Container className="weatherContainer">
          <Typography variant="h5" className="weatherTitle">Weather Forecast</Typography>

          {/* City Input */}
          <div className="cityInput">
            <TextField
              label="Enter City Name"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="cityTextField"
            />
            <Button variant="contained" color="primary" onClick={getWeatherData}>
              Get Weather
            </Button>
          </div>

          {/* Weather Details */}
          {weather && (
            <div className="weatherDetails">
              <Typography variant="h6" className="locationName">Selected City: {city}</Typography>
              <Typography variant="h3" className="temperature">{weather.temp}°C</Typography>
              <Typography variant="body1" className="weatherStatus">{weather.condition}</Typography>
              <img src={thunderstormIcon} alt="Weather Icon" className="weatherIcon" />
              <div className="weatherStats">
                <div className="weatherStat">🌬 {weather.wind} m/s Wind</div>
                <div className="weatherStat">💧 {weather.humidity}% Humidity</div>
                <div className="weatherStat">☔ {weather.rain}</div>
              </div>
              <div className="weatherAdvice">
                <Typography variant="h6" className="adviceTitle">Perfect Weather for Potatoes!</Typography>
                <Typography variant="body2" className="adviceText">
                  The current temperature and moisture levels support healthy potato growth. Just ensure proper drainage to avoid excess water buildup.
                </Typography>
                <img src={potatoImage} alt="Potatoes" className="potatoImage" />
              </div>
            </div>
          )}
        </Container>

        {/* Back Button */}
        <button className="backButton" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default FarWeather;
