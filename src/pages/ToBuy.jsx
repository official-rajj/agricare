import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ToBuy.module.css';
import logo from '../assets/logo.png';
import { Dashboard, Settings, History } from '@mui/icons-material';

const ToBuy = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { image, price, name } = location.state || {};
  const [quantity, setQuantity] = useState(1);
  const [buyerName, setBuyerName] = useState("Buyer");

  // ✅ Load buyer name from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("buyerName");
    if (storedName) setBuyerName(storedName);
  }, []);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleDone = () => {
    navigate("/BuyHistory", {
      state: {
        image,
        name,
        price,
        quantity,
      },
    });
  };

  return (
    <div className={styles.container}>
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.title}>
            <span className={styles.natural}>Natural</span> & Organic Market
          </span>
          <div className={styles.profile}>
            <div className={styles.avatar}>👤</div>
            <span>{buyerName}</span> {/* ✅ Dynamic buyer name */}
          </div>
        </header>

        <section className={styles.transactionSection}>
          <h2 className={styles.transactionTitle}>Transaction Details</h2>
          <p className={styles.location}>
            <input type="radio" checked readOnly />
            &nbsp;Current Location ( Cash on Delivery )
          </p>

          {image && (
            <img src={image} alt={name} className={styles.image} />
          )}

          <div className={styles.controls}>
            <button className={styles.addMore}>Add more ➕</button>
            <div className={styles.priceBox}>
              <button onClick={handleDecrement}>➖</button>
              <span className={styles.price}>{price}</span>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>➕</button>
            </div>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.backBtn}
              onClick={() => navigate("/buyerdashboard")}
            >
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
