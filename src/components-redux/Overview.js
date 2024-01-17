import React from "react";
import { useSelector } from "react-redux";

export default function Overview() {
  console.log("==> Overview (redix)");
  const { count } = useSelector((state) => state.counter);
  return <p>The counter is : {count}</p>;
}
