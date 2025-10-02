import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Message from "./components/message/message";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";

function App() {
  return (
     <div className="app">
      <Header>
        <h1>Aurora Dashboard</h1>
      </Header>

      <Message text="Bem-vindo ao painel interativo do Aurora!" />

      <ThemeSelector />
    </div>
  );
}

export default App;
