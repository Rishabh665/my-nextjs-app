"use client"

import React, { useState } from "react";


const fruitsObj= {
    "1": "(a) apple",
    "2": "(b) mango",
    "3": "(c) banana",
    "4": "(d) grapes",
} as const ;

type FruitKeys = keyof typeof fruitsObj;
const MyAccordion1 = () => {
  const [isVisible,setIsVisible] = useState(false);

  function handleOption() {
    if (isVisible) {
      setIsVisible(false);
      
    } else {
      setIsVisible(true);
    }
  }

  const handleResult = (myAns:string) => {
    console.log(typeof myAns);
    if (myAns === "2") {
      window.alert("Correct! Mango is the right option");
    } else {
      //   window.alert("Incorrect choice", fruitsObj[myAns]);
      window.alert("Incorrect choice");
    }
  };

  return (
    <>
      <h2>(3) Accordion</h2>

      <p>Which of the following is also known as king of fruits? </p>

      <div>
        <button onClick={handleOption}>Options {!isVisible ? "v" : "^"}</button>
      </div>
      <br />
      <div>
        {Object.keys(fruitsObj).map((k) => {
            const key = k as FruitKeys;
         if(isVisible){ return (
            <div key={key}>
              <button
                onClick={() => {
                  handleResult(k);
                }}
              >
                {fruitsObj[key]}
              </button>
              <p />
            </div>
           )}
        })}
      </div>
    </>
  );
};

export default MyAccordion1;
