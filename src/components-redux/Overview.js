import React from "react";
import { useSelector } from "react-redux";

export default function Overview() {
  const { count } = useSelector((state) => state.counter);
  return <p>The counter is : {count}</p>;
}
