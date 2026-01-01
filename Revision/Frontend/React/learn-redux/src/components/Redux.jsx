import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  multiply,
  reset,
} from "../redux/counter/counterSlice";

export const Redux = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h2>" USE REDUX TOOLKIT "</h2>

      <div>
        <h2>Currently count is {count}</h2>
        <button onClick={() => dispatch(decrement())}>For Decrement (-)</button>
        <button onClick={() => dispatch(increment())}>For Increment (+)</button>
        <button onClick={() => dispatch(multiply())}> For Multiply (*) </button>
        <br />
        <button onClick={() => dispatch(reset())}> RESET </button>
      </div>
    </>
  );
};
