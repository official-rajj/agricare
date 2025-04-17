// src/pages/FarmerPrivateRoute.jsx
import { Navigate } from "react-router-dom";

const FarmerPrivateRoute = ({ children }) => {
  const token = localStorage.getItem("farmerToken");
  return token ? children : <Navigate to="/farmerlogin" replace />;
};

export default FarmerPrivateRoute;
