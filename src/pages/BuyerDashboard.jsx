import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Dashboard, Settings, History } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styles from "./BuyerDashboard.module.css";

import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import AppleImage from "../assets/apple.png";
import BananaImage from "../assets/banana.png";
import OrangeImage from "../assets/orange.png";
import PomeImage from "../assets/Pome.jpg";
import TomatoImage from "../assets/tomato.png";
import PotatoImage from "../assets/potatoes.png";
import CarrotImage from "../assets/carrot.png";
import WheatImage from "../assets/wheat.png";
import RiceImage from "../assets/rice.png";
import PulsesImage from "../assets/pulses.png";

const BuyerDashboard = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(0);
  const [buyerName, setBuyerName] = useState("");

  useEffect(() => {
    // 🧠 Get buyer name from localStorage
    const storedName = localStorage.getItem("buyerName");
    if (storedName) {
      setBuyerName(storedName);
    } else {
      setBuyerName("Guest");
    }
  }, []);

  const handleTabChange = (event, newValue) => {
    setCategory(newValue);
  };

  const allProducts = {
    fruits: [
      { name: "Apple", price: "Rs 40/kg", image: AppleImage },
      { name: "Banana", price: "Rs 50/kg", image: BananaImage },
      { name: "Orange", price: "Rs 55/kg", image: OrangeImage },
      { name: "Pome Granate", price: "Rs 80/kg", image: PomeImage },
    ],
    vegetables: [
      { name: "Tomato", price: "Rs 30/kg", image: TomatoImage },
      { name: "Potato", price: "Rs 20/kg", image: PotatoImage },
      { name: "Carrot", price: "Rs 25/kg", image: CarrotImage },
    ],
    cereal: [
      { name: "Wheat", price: "Rs 22/kg", image: WheatImage },
      { name: "Rice", price: "Rs 40/kg", image: RiceImage },
      { name: "Pulses", price: "Rs 50/kg", image: PulsesImage },
    ],
  };

  const getCurrentProducts = () => {
    switch (category) {
      case 0:
        return allProducts.fruits;
      case 1:
        return allProducts.vegetables;
      case 2:
        return allProducts.cereal;
      default:
        return [];
    }
  };

  const currentProducts = getCurrentProducts();

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <img src={logo} alt="AgriCare Logo" className={styles.logo} />
        <ul className={styles.sidebarMenu}>
          <li className={`${styles.menuItem} ${styles.active}`}>
            <Dashboard className={styles.menuIcon} />
            <span>Dashboard</span>
          </li>
          <li className={styles.menuItem} onClick={() => navigate("/BuySetting")}>
            <Settings className={styles.menuIcon} />
            <span>Setting</span>
          </li>
          <li className={styles.menuItem} onClick={() => navigate("/BuyHistory")}>
            <History className={styles.menuIcon} />
            <span>History</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Header */}
        <div className={styles.header}>
          <Typography variant="h4" className={styles.title}>
            <span className={styles.highlight}>Natural</span> & Organic Market
          </Typography>
          <div className={styles.userInfo}>
            <Avatar src={userIcon} className={styles.userAvatar} />
            <Typography variant="body1" className={styles.userName}>
              {buyerName}
            </Typography>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabsSection}>
          <Tabs value={category} onChange={handleTabChange} centered>
            <Tab label="Fruits" />
            <Tab label="Vegetables" />
            <Tab label="Cereal" />
          </Tabs>
        </div>

        {/* Scrollable Products Section */}
        <div className={styles.cardsScrollContainer}>
          <Container className={styles.cardsContainer}>
            {currentProducts.map((product, index) => (
              <Card className={styles.dashboardCard} key={index}>
                <div className={styles.cardImages}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={product.image}
                    alt={product.name}
                    className={styles.cardImage}
                  />
                </div>
                <CardContent className={styles.cardContent}>
                  <Typography variant="h6" className={styles.cardTitle}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" className={styles.cardPrice}>
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    className={styles.buyButton}
                    onClick={() =>
                      navigate("/tobuy", {
                        state: { image: product.image, price: product.price },
                      })
                    }
                  >
                    Buy
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
