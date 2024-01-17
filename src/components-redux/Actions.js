import React from "react";
import { useDispatch } from "react-redux";
import counter from "../redux/reducers/counter";

export default function Actions() {
  console.log("==> Actions (reduc)");
  const { increment, decrement } = counter.actions;
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
