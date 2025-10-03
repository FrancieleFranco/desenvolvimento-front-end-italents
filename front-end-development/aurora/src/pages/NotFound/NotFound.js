import React from "react";
import Header from "../../components/header/Header";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <Header />
      <h2>Página não encontrada</h2>
      <p>Ops! A rota que você tentou acessar não existe.</p>
    </div>
  );
}

export default NotFound;
