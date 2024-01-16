import { createContext, useState } from "react";

export default {
  context: createContext(null),
  actions: (defaultCounter = 0) => {
    const [counter, setCounter] = useState(defaultCounter);

    return {
      counter,
      setCounter,
    };
  },
};
