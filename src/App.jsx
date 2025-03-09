import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png"; // Replace with actual logo
import heroImage from "./assets/farmer-banner.png"; // Replace with actual background image
import feature1 from "./assets/feature1.png"; // Replace with actual feature image
import feature2 from "./assets/feature2.png"; // Replace with actual feature image
import callIcon from "./assets/call.png"; // Replace with actual icon
import emailIcon from "./assets/email.png"; // Replace with actual icon
import locationIcon from "./assets/location.png"; // Replace with actual icon
import twitterIcon from "./assets/twitter.png"; // Replace with actual social icon
import facebookIcon from "./assets/facebook.png"; // Replace with actual social icon
import pinterestIcon from "./assets/pinterest.png"; // Replace with actual social icon
import instagramIcon from "./assets/instagram.png"; // Replace with actual social icon
import aboutImage from "./assets/farmer-profile.png"; // Replace with actual About image
import worksIcon from "./assets/works-icon.png"; // Replace with actual icon
import farmerImage from "./assets/farmer.png"; // Replace with actual Why Choose image
import cropMarketplace from "./assets/crop-marketplace.png"; // Replace with actual service image
import weatherForecast from "./assets/weather-forecast.png"; // Replace with actual service image
import expertsAdvice from "./assets/experts-advice.png"; // Replace with actual service image
import Footer from "./pages/Footer"; // Import the Footer component
import Buyer from "./pages/buyer";
import Farmer from "./pages/Farmer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/farmer" element={<Farmer />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Top Bar with Contact Info */}
      <div className="top-bar">
        <div className="logo-container">
          <img src={logo} alt="AgriCare Logo" className="logo" />
        </div>
        <div className="social-icons">
          <img src={twitterIcon} alt="Twitter" />
          <img src={facebookIcon} alt="Facebook" />
          <img src={pinterestIcon} alt="Pinterest" />
          <img src={instagramIcon} alt="Instagram" />
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <img src={callIcon} alt="Call" />
            <span>+91 9065551961</span>
          </div>
          <div className="contact-item">
            <img src={emailIcon} alt="Email" />
            <span>araj899@rku.ac.in</span>
          </div>
          <div className="contact-item">
            <img src={locationIcon} alt="Location" />
            <span>Tramba, Gujarat</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li className="active">Home</li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#about-services">Services</a></li>
          <li><a href="#about-contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img src={heroImage} alt="Hero Background" className="hero-img" />
        <div className="hero-overlay">
          <h4>WELCOME TO AGRICARE</h4>
          <h1>Caring For Farmers,<br />Growing a Better Tomorrow</h1>
          <button className="btn" onClick={() => navigate("/Buyer")}>Join Us</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-box">
          <h3 className="feature-title">Features</h3>
          <p>We help farmers in farming.</p>
          <img src={feature1} alt="Feature 1" />
        </div>
        <div className="feature-box">
          <h3 className="feature-title">Features</h3>
          <p>We provide expert advice.</p>
          <img src={feature2} alt="Feature 2" />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-container">
          <div className="about-image">
            <img src={aboutImage} alt="Farmer Holding Phone" />
          </div>
          <div className="about-content">
            <h4 className="about-intro" id="about-section">Our Introduction</h4>
            <h2 className="about-title">About <span className="highlight">AgriCare</span></h2>
            <h3 className="about-heading">
              Empowering Farmers, Connecting Buyers, and Revolutionizing Agriculture
            </h3>
            <p className="about-text">
              At AgriCare, we aim to bridge the gap between farmers and buyers, 
              creating a direct, seamless connection for the sale of fresh, 
              high-quality produce. Our platform empowers farmers by providing 
              them with an opportunity to sell their fruits, vegetables, pulses, 
              wheat, and rice directly to buyers, eliminating the middleman.
            </p>
            <div className="works-section">
              <div className="works-icon">
                <img src={worksIcon} alt="Works Icon" />
              </div>
              <div className="works-content">
                <h4 className="works-title">Works</h4>
                <p className="works-text">
                  Farmers can list their produce on our platform, giving them 
                  control over pricing and allowing them to reach buyers directly. 
                  This direct transaction model benefits both parties:
                </p>
                <ul className="works-list">
                  <li><strong>Farmers:</strong> Sell directly to buyers, ensuring maximum profits without middlemen taking a cut.</li>
                  <li><strong>Buyers:</strong> Get access to fresh, high-quality produce at lower prices, straight from the farm.</li>
                </ul>
              </div>
            </div>
            <button className="discover-btn" onClick={() => navigate("/Buyer")}>Discover More</button>
          </div>
        </div>
      </section>

      {/* Why Choose AgriCare Section */}
      <section className="why-choose">
        <div className="why-choose-container">
          <div className="why-choose-content">
            <h4 className="why-intro">Our Website Benefits</h4>
            <h2 className="why-title">Why Choose AgriCare Platform</h2>
            <p><strong>Fresh Produce:</strong> Our platform ensures that buyers receive their food in the freshest condition, straight from the farmer’s fields.</p>
            <p><strong>Fair Pricing:</strong> By cutting out intermediaries, we offer a win-win scenario where farmers can earn more and buyers pay less.</p>
            <p><strong>Support for Farmers:</strong> We believe in the power of supporting local agriculture and creating sustainable livelihoods for farmers.</p>
          </div>
          
          <div className="why-choose-image">
            <img src={farmerImage} alt="Farmer using mobile" />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services">
        <h2 className="services-title" id="about-services">Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <img src={cropMarketplace} alt="Crop Marketplace" />
            <p>⭐ Crop Marketplace</p>
          </div>
          <div className="service-card">
            <img src={weatherForecast} alt="Weather Forecast" />
            <p>⭐ Weather Forecast</p>
          </div>
          <div className="service-card">
            <img src={expertsAdvice} alt="Experts Advice" />
            <p>⭐ Experts Advice</p>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <div id="about-contact"></div>
      <Footer />
    </div>
  );
};

export default App;
