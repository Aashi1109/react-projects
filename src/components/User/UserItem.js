import React from "react";

import "./UserItem.css";

const UserItem = (props) => {
  const { name, age, id, deleteHandler } = props;
  return (
    <li className="user-item" onClick={() => deleteHandler(id)}>
      {name} ({age} years old)
    </li>
  );
};

export default UserItem;
