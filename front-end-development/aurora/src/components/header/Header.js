import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ children }) => {
   return (
    <header className="header">
      <h1>Aurora</h1>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );}
export default Header;
