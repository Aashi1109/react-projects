import React, { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  const dispatch = useDispatch()

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
