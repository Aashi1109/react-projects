import { useRef, useContext } from "react";

import styles from "./NewTodo.module.css";
import { TodoContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodoContext);

  const textInputRef = useRef<HTMLInputElement>(null);
  const formSubmitHandler = (event: React.FormEvent) => {
    event?.preventDefault();
    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) return;
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
