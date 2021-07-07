import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Dashboard.styles.css";

export const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <div className="dashboard-container">
      <h1>Z-kom</h1>
      <div className="menu">
        <Link to="addProduct">Add product</Link>
        <Link to="addOrder">Add order</Link>
        <Link to="showOrders">Show orders</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};
