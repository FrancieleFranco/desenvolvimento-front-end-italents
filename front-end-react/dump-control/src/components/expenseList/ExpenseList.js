import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = ({ expenses, onRemoveExpense }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          expense={expense}
          onRemoveExpense={onRemoveExpense}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
