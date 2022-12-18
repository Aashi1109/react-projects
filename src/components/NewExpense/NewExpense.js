import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const expenseDataSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.round(Math.random().toString() * 10 + 1),
    };
    props.onAddExpense(expenseData);
  };


  const [isEditing, setIsEditing] = useState(false)
  const getAddBtnState = (event) => {
    setIsEditing(true)
  };


  
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={getAddBtnState}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={expenseDataSaveHandler} onCancelClick={setIsEditing} />}
    </div>
  );
};

export default NewExpense;
