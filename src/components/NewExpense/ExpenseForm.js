import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //One approach
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  // Second Approach
  const [userInput, setUserInput] = useState({
    enteredAmount: "",
    enteredTitle: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // safe approach to set state which depends on previous state
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    setUserInput((prevState) => {
      return { ...userInput, enteredDate: event.target.value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newExpenseData = {
      title: userInput["enteredTitle"],
      amount: userInput["enteredAmount"],
      date: new Date(userInput["enteredDate"]),
    };
    console.log(newExpenseData.length);
    if (newExpenseData.length) {
      props.onSaveExpenseData(newExpenseData);
      setUserInput({
        enteredAmount: "",
        enteredTitle: "",
        enteredDate: "",
      });
    }
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput["enteredTitle"]}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step=".01"
            onChange={amountChangeHandler}
            value={userInput["enteredAmount"]}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={userInput["enteredDate"]}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={() => props.onCancelClick(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
