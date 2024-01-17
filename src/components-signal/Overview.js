import React from "react";
import counterStore from "../signals/counterStore";

export default function Overview() {
  console.log("==> Overview (signal)");
  return <p>The counter is : {counterStore.value}</p>;
}
