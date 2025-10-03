import React, { useState } from "react";
import "./ThemeSelector.css";

const ThemeSelector = () => {
  const [theme, setTheme] = useState("light");

  const bgColor =
    theme === "light"
      ? "#f4f6f9"
      : theme === "dark"
      ? "#333"
      : theme === "blue"
      ? "#e0f7fa"
      : "#f4f6f9";

  const color = theme === "dark" ? "#fff" : "#333";

  const messages = [
    "Que ótimo que você está explorando o app!",
    "Mudar de cor é sempre divertido!",
    "Ótima escolha de tema!"
  ];

  const [message, setMessage] = useState(messages[0]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <div className="theme-selector" style={{ backgroundColor: bgColor, color: color }}>
      <h3>Selecione o Tema:</h3>
      <div className="buttons">
        <button onClick={() => handleThemeChange("light")}>Claro</button>
        <button onClick={() => handleThemeChange("dark")}>Escuro</button>
        <button onClick={() => handleThemeChange("blue")}>Azul</button>
      </div>
      <p>O tema atual é: {theme}</p>
      <p className="theme-message" style={{ color: color }}>{message}</p>
    </div>
  );
};
export default ThemeSelector;
