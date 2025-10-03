import React from "react";
import Header from '../../components/header/Header';
import "./Dashboard.css";
import ThemeSelector from "../../components/ThemeSelector/ThemeSelector"; 

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <ThemeSelector />
    </div>
  );
}

export default Dashboard;
