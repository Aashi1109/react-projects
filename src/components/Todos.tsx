import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todo-context";

import styles from "./Todos.module.css";
const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={styles.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          onDelete={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
