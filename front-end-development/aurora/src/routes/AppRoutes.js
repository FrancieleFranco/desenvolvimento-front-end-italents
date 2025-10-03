import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
   <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/user/:username" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>



  );
};

export default AppRoutes;
