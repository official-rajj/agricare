// src/pages/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("buyerToken");
  return token ? children : <Navigate to="/buyerlogin" replace />;
};

export default PrivateRoute;
