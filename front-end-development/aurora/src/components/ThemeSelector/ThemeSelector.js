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
    ? "#e0f7fa"  // azul claro suave
    : "#f4f6f9";

const color = theme === "dark" ? "#fff" : "#333";

  return (
    <div className="theme-selector" style={{ backgroundColor: bgColor, color: color }}>
      <h3>Selecione o Tema:</h3>
      <div className="buttons">
        <button onClick={() => setTheme("light")}>Claro</button>
        <button onClick={() => setTheme("dark")}>Escuro</button>
         <button onClick={() => setTheme("blue")}>Azul</button>
      </div>
      <p>O tema atual é: {theme}</p>
    </div>
  );
};
export default ThemeSelector;
