import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ title, amount, category });
    setTitle("");
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value.toUpperCase())}
        placeholder="Título"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value.toUpperCase())}
        placeholder="Valor"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value.toUpperCase())}
        placeholder="Categoria"
        required
      />
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
};

export default ExpenseForm;
