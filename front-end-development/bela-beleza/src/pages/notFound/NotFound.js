import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center">
      <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
      <p className="text-xl mb-4">Página não encontrada</p>
      <Button onClick={() => navigate("/")}>Voltar para Dashboard</Button>
    </div>
  );
}
