"use client";

import React, { useState } from "react";

const fruits = [
  { id: "none", name: "selected none" },
  { id: "apple_004", name: "Apple" },
  { id: "mango_001", name: "Mango" },
  { id: "banana_002", name: "Banana" },
  { id: "grapes_003", name: "Grapes" },
];
export default function DropDown() {
  const [optionItem, setOptionItems] = useState("none");

  // const [show, setShow] = useState(false);
  const handleSelect = (event) => {
    setOptionItems(event.target.value);
    console.log(event);
  };

  const findFruit = () => {
    let val = "nothing is selected";
    fruits.forEach((obj) => {
      if (obj.id !== "none" && obj.id === optionItem) {
        val = obj.name;
      }
    });
    return val;
  };

  return (
    <>
      <div> Selected Option :{findFruit()}</div>

      <div>
        <select value={optionItem} onChange={handleSelect}>
          {fruits.map((fruit) => {
            return (
              <option key={fruit.id} value={fruit.id}>
                {fruit.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
