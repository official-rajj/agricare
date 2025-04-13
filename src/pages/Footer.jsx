import "./Footer.css";
import logo from "../assets/logo.png"; // Add your actual logo path
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="AgriCare Logo" className="footer-logo-img" />
          <p>CARE FOR FARMERS</p>
        </div>

        {/* Explore Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Explore</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p>📞 9063335612</p>
          <p>✉️ agricare@farms.com</p>
          <p>📍 360020 - Gujarat, Tramba Gaon</p>

          {/* Subscription Box */}
          <div className="subscribe-box">
            <input type="email" placeholder="Your Email Address" />
            <button className="subscribe-btn" onClick={() => navigate("/Buyer")}>📩</button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© All Copyright 2025 by AgriCare Themes</p>
        <div>
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
