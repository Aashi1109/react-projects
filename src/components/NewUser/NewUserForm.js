import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { v4 as uuidv4 } from "uuid";

import "./NewUserForm.css";

const NewUserForm = (props) => {
  const [enteredData, setEnteredData] = useState({
    enteredName: "",
    enteredAge: "",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(enteredData)

    const { checkForm } = props;
    const { setShowModal, setModalErrorMsg } = props["modalStates"];

    const userData = {
      name: enteredData.enteredName,
      age: +enteredData.enteredAge,
      id: uuidv4(),
    };

    if (
      enteredData.enteredAge.length === 0 &&
      enteredData.enteredName.length === 0
    ) {
      setShowModal(true);
      setModalErrorMsg("Please enter valid inputs");
    } else if (enteredData.enteredName.length === 0) {
      setShowModal(true);
      setModalErrorMsg("Please enter valid username");
    } else if (enteredData.enteredAge.length === 0) {
      setShowModal(true);
      setModalErrorMsg("Please enter valid age (age > 0)");
    } else if (enteredData.enteredAge > 100) {
      setShowModal(true);
      setModalErrorMsg("Please enter valid age (age < 100)");
    } else {
      checkForm(userData);
      setEnteredData((prevData) => {
        return { enteredName: "", enteredAge: "" };
      });
    }
  };

  const nameInputHandler = (event) => {
    setEnteredData((prevData) => {
      return { ...prevData, enteredName: event.target.value };
    });
  };

  const ageInputHandler = (event) => {
    setEnteredData((prevData) => {
      return { ...prevData, enteredAge: event.target.value };
    });
  };

  return (
    <Card>
      <form className="new-user__form" onSubmit={formSubmitHandler}>
        <div className="new-user__controls">
          <div className="new-user__control">
            <label>Username</label>
            <input
              type="text"
              value={enteredData.enteredName}
              onChange={nameInputHandler}
            />
          </div>
          <div className="new-user__control">
            <label>Age</label>
            <input
              type="number"
              value={enteredData.enteredAge}
              onChange={ageInputHandler}
            />
          </div>
        </div>
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default NewUserForm;
