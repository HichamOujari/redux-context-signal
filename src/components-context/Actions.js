import React, { useContext } from "react";
import counterStore from "../context/counterStore";

export default function Actions() {
  const useCounter = useContext(counterStore.context);
  return (
    <div>
      <button onClick={() => useCounter.setCounter(useCounter.counter + 1)}>
        Increment
      </button>
      <button onClick={() => useCounter.setCounter(useCounter.counter - 1)}>
        decrement
      </button>
    </div>
  );
}
