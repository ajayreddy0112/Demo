import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log(`UseEffect: ${counter}`);
  }, [counter]);

  const handleIncrement = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default UseEffect;
