import React from "react";

export default function Button({ children,type, onClick, className  }) {
  return (
    <button
      type={type}
      onClick={onClick}
       className={`bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
}