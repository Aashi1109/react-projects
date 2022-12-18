import React, { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const counterShow = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };
  const incrementHander = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterShow && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHander}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   toogleCounterHandler() {}
//   incrementHandler(){
//     this.props.increment()
//   }
//   decrementHandler() {
//     this.props.decrement()
//   }
//   render() {
//     return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>

//       <button onClick={this.toogleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: "increment"}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
