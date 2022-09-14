import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => setCounter(counter + 1)}
        data-testid="incrementBtn"
      >
        +
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        data-testid="decrementBtn"
      >
        -
      </button>
      <div title={`counter value is ${counter}`} data-testid="counterWrapper">
        counter value : <h3 data-testid="counterValue">{counter}</h3>{" "}
      </div>
    </div>
  );
};
