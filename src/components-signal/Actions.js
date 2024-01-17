import React from "react";
import counterStore from "../signals/counterStore";

export default function Actions() {
  console.log("==> Actions (signal)");
  return (
    <div>
      <button onClick={() => counterStore.value++}>Increment</button>
      <button onClick={() => counterStore.value--}>decrement</button>
    </div>
  );
}
