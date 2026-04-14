"use client";
import { useState } from "react";

// Question 1 : state vs variable

// export default function Counter() {
//   let a = 0;
//   const [b, setB] = useState(0);

//   function click() {
//     a++;
//     setB(b + 1);
//     console.log("a", a);
//     console.log("b", b);
//   }

//   return <button onClick={click}>Click</button>;
// }

// question 2:

// export default function Counter() {

//   const [count, setCount] = useState(0);

//   function click() {
//     setCount(count + 1);

//     setCount(count + 1);

//     console.log(count);
//   }

//   return <button onClick={click}>Click</button>;
// }

// on clicking once :  print (output in console) = 0
//  next render    :  print  =1
 
// why? because both calls use same closure value
 //  ie.,  count = 0
 // so, in line  27,29  setCount(1) that in next render count =1


console.log("---------")

// question 3:

export default function Counter() {
  const [count, setCount] = useState(0);

  function click() {
    setCount(prev => prev + 1);

    setCount(prev => prev + 1);

    console.log(count);
  }

  return <button onClick={click}>Click</button>;
}

// on first click :  count = (snapshot/copy of current state) is 0, but previous state that react remember update state internally to 
// latest 1  in line 51,  and  2 in line 52 ; so in second click  count = 2;

// this is called functional setter in react ; previous state value is used and updated immediately before any render
//  prev is function parameter, not state , not normal variable, not stored in component;

 console.log("jsr")
// internally

//  let state = 0;

// function useState(defaultValue){

//    state = state ?? defaultValue;    

//    function setState(newValue){
//      state = newValue;
//     Counter();
//    }
//    return [state, setState];
// }

//  export default function Counter() {
//    const[count,setCount]= useState(0);
//    console.log("count:",count)
//  if(count<3){
//   setCount(count + 1)
//  }
// }

// Counter();