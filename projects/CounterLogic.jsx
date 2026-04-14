// "There is nothing wrong, to be wrong... because i am open for improvement."
"use client";

import React, { useState } from "react";

const MyCounterApp = () => {
  let [displayCount, setDisplayCount] = useState(0);

  const reduceCount = () => {
    setDisplayCount(displayCount-1);
  };

  const increaseCount = () => {
    setDisplayCount(displayCount+1);
  };
  const resetCount =()=>{
    setDisplayCount(0)
  }
  return (
    <>
      <div>
        <hr />
        <h2>MyCounterApp</h2>
        <h3>Count:{" " + displayCount}</h3>
        <div>
          <button onClick={reduceCount}>-</button>
          <button onClick={increaseCount}>+</button>
          <button onClick={resetCount}>reset</button>
        </div>
      </div>
    </>
  );
};

export default MyCounterApp;
