// hume logo ko prove to karne hai, lakin hum nahi hamra kaam prove karega...

'use client'

import { useState } from "react";

const MyCounterApp2 = () => {
  const [count, setCount] = useState(0);
  const reduceCount = () => {
    setCount(count - 1);
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <div>
        <h3>Count:{" "+count}</h3>
      </div>
      <button onClick={reduceCount}>-</button>
      <button onClick={increaseCount}>+</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
};
export default MyCounterApp2;