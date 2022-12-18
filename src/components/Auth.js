import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";
import { useState } from "react";

const Auth = () => {

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const [formIsValid, setFormIsValid] = useState(true)

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setFormIsValid(true);

  };
  const passChangeHandler = (event) => {
    setEnteredPass(event.target.value);
    setFormIsValid(true)
  };

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.includes("@") && enteredPass.length > 2) {
      dispatch(authActions.login());
    } else {
      setFormIsValid(false)
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPass}
              onChange={passChangeHandler}
            />
          </div>
          <button>Login</button>
          {!formIsValid && <p>Enter correct email and password</p>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
