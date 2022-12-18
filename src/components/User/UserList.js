import React from "react";
import Card from "../UI/Card";
import UserItem from "./UserItem";

import "./UserList.css";

const UserList = (props) => {
  const { users, deleteUser } = props;

  return (
    <Card className="user-list">
        {users.length ? users.map((user) => (
          <UserItem
            name={user.name}
            age={user.age}
            key={user.id}
            deleteHandler={deleteUser}
            id={user.id}
          />
        )): !users.length && <p>No users found</p>}
    </Card>
  );
};

export default UserList;
