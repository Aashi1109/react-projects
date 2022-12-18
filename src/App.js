import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewUserForm from "./components/NewUser/NewUserForm";
import Modal from "./components/UI/Modal";
import UserList from "./components/User/UserList";

import "./index.css";

function App() {
  const INITIAL_USERS = [
    { name: "Park", age: 21, id: uuidv4() },
    { name: "Anish", age: 18, id: uuidv4() },
    { name: "Manish", age: 19, id: uuidv4() },
    { name: "Shreyash", age: 23, id: uuidv4() },
  ];

  const [users, setUsers] = useState(INITIAL_USERS);
  const [showModal, setShowModal] = useState(false);
  const [modalErrorMsg, setModalErrorMsg] = useState("");

  const deleteUserHandler = (event) => {
    console.log(event);
    setUsers((prevState) => {
      const filteredArray = prevState.filter((user) => user.id !== event);
      return [...filteredArray];
    });
  };

  const checkFormHandler = (event) => {
    setUsers(prevState => [...prevState, event])
  };
  return (
    <div className="container">
      <NewUserForm
        checkForm={checkFormHandler}
        modalStates={{ setShowModal, setModalErrorMsg }}
      />
      <UserList users={users} deleteUser={deleteUserHandler} />
      {showModal && <Modal onModalClick={setShowModal}>{modalErrorMsg}</Modal>}
    </div>
  );
}

export default App;
