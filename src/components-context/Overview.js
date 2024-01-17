import React, { useContext } from "react";
import counterStore from "../context/counterStore";

export default function Overview() {
  console.log("==> Overview (context)");
  const useCounter = useContext(counterStore.context);
  return <p>The counter is : {useCounter.counter}</p>;
}
