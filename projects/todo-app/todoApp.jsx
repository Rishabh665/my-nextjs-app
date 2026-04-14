"use client";
import React, { useState } from "react";

function MyTodoApp() {
  const [inputFieldValue, setInputFieldValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const getTodoTaskFromInput = (e) => {
    // e = event object; not string, so we use event.target.value;
    setInputFieldValue(e.target.value);
  };

  const addTask = () => {
    //  let arr = [];
    //   arr.push(inputField) ; because push return array length that's why todoList.map() = number(may be 1 or 2) 1.map == error
    //   if(arr.length<=1){setTodoList(arr);}

    //previous always gives latest value before any render, no value is lost internally when react may batch multiple state updates
    setTodoList((prevList) => [...prevList, inputFieldValue]);
    setInputFieldValue("");
  };
  const deleteTaskFromList = (key) => {
    setTodoList(todoList.filter((_, index) => index !== key));
    console.log("todoList:", todoList);
  };

  return (
    <div>
      <h1> My ToDo list:</h1>
      <div>
        <h3> {"Enter you task to add in the field..."}</h3>
        <input value={inputFieldValue} onChange={getTodoTaskFromInput} />
        <span>
          <button onClick={addTask}>+</button>
          {console.log("todoList:", todoList)}
        </span>
        <h1></h1>
      </div>
      {todoList.map((item, index) => {
        return (
          <div key={index}>
            <p>
              <input type="checkbox" />
              <span
                style={{
                  textDecoration: index % 2 == 0 ? "line-through" : "none",
                }}
              >
                {`(${index + 1})` + " " + item + " "}
              </span>
              <span>
                <button onClick={() => deleteTaskFromList(index)}>
                  delete
                </button>
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default MyTodoApp;
