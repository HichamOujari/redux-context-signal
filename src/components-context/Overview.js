import React, { useContext } from "react";
import counterStore from "../context/counterStore";

export default function Overview() {
  const useCounter = useContext(counterStore.context);
  return <p>The counter is : {useCounter.counter}</p>;
}
