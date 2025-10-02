import React, { useState } from "react";
import Header from "../src/components/header/header";
import ExpenseForm from "../src/components/expenseForm/ExpenseForm";
import ExpenseList from "../src/components/expenseList/ExpenseList";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    const expenseWithNumber = {
      ...expense,
      amount: parseFloat(expense.amount) || 0,
    };
    setExpenses([...expenses, expenseWithNumber]);
  };

  const removeExpense = (expenseToRemove) => {
    setExpenses(expenses.filter((expense) => expense !== expenseToRemove));
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <Header title="Controle de Despesas" />
      <div className="formControl">
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList onRemoveExpense={removeExpense} expenses={expenses} />
        <h2 className="total-expenses">
          Total de Despesas: R$ {totalExpenses.toFixed(2)}
        </h2>{" "}
        {/* Exibindo o total */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
