import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ClientsPage from "../pages/clientsPage/ClientsPage";
import ServicesPage from "../pages/servicesPage/ServicesPage";
import Appointments from "../pages/appointments/Appointments";
import NotFound from "../pages/notFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/login" element={<Login />} />

      {/* Rotas privadas */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/clients"
        element={
          <PrivateRoute>
            <ClientsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/services"
        element={
          <PrivateRoute>
            <ServicesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/appointments"
        element={
          <PrivateRoute>
            <Appointments />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
