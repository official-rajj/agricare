import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ToBuy.module.css';
import logo from '../assets/logo.png';
import axios from 'axios';
import { Dashboard, Settings, History } from '@mui/icons-material';

const ToBuy = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { image, price, name: item } = location.state || {}; // ✅ using `item`
  const [quantity, setQuantity] = useState(1);
  const [buyerName, setBuyerName] = useState("Buyer");

  useEffect(() => {
    const storedName = localStorage.getItem("buyerName");
    if (storedName) setBuyerName(storedName);
  }, []);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const numericPrice = parseFloat(price?.match(/\d+(\.\d+)?/));
  const totalPrice = numericPrice * quantity;

  const handleDone = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/buyerbuy", {
        name: buyerName,
        item,
        totalQuantity: quantity,
        totalPrice,
      });
    
      console.log("Response from server:", res.data);
    
      navigate("/BuyHistory", {
        state: {
          image,
          name: item,
          price,
          quantity,
        },
      });
    } catch (error) {
      console.error("Failed to save buyer purchase:", error.response?.data || error.message);
      alert("Error saving purchase. Please try again.");
    }
    
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImg} />
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem} onClick={() => navigate("/buyerdashboard")}>
            <Dashboard className={styles.menuIcon} />
            <span>Dashboard</span>
          </li>
          <li className={styles.navItem} onClick={() => navigate("/BuySetting")}>
            <Settings className={styles.menuIcon} />
            <span>Setting</span>
          </li>
          <li className={styles.navItem} onClick={() => navigate("/BuyHistory")}>
            <History className={styles.menuIcon} />
            <span>History</span>
          </li>
        </ul>
      </div>

      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.title}>
            <span className={styles.natural}>Natural</span> & Organic Market
          </span>
          <div className={styles.profile}>
            <div className={styles.avatar}>👤</div>
            <span>{buyerName}</span>
          </div>
        </header>

        <section className={styles.transactionSection}>
          <h2 className={styles.transactionTitle}>Transaction Details</h2>
          <p className={styles.location}>
            <input type="radio" checked readOnly />
            &nbsp;Current Location (Cash on Delivery)
          </p>

          {image && (
            <>
              <img src={image} alt={item} className={styles.image} />
              <h3 className={styles.itemName}>Item: {item}</h3>
            </>
          )}

          <div className={styles.controls}>
            <div className={styles.priceBox}>
              <button onClick={handleDecrement}>➖</button>
              <span className={styles.price}>₹{price}</span>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>➕</button>
            </div>

            <div className={styles.totalPrice}>
              <strong>Total Price: ₹{totalPrice.toFixed(2)}</strong>
            </div>
          </div>

          <div className={styles.buttons}>
            <button className={styles.backBtn} onClick={() => navigate("/buyerdashboard")}>
              Go Back
            </button>
            <button className={styles.doneBtn} onClick={handleDone}>
              Done
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ToBuy;
