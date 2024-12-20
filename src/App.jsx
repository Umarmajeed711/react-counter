import { useState } from "react";
import "./App.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    if (counter > 0) {
      setCounter(0);
    }
  };

  return (
    <div className="main">
      <h1 className="heading">Counter: {counter}</h1>
      <br />
      <div style={{ display: "flex", gap: "15px" }}>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
