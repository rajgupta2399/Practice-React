import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  // what is the use of useSatate in React..??
  // useState = useStatate Hook allows you to add state to a functional component. it return an array with two values : the current state and the function to update the current state .
  // whenevr we want to set the new value in current state during render or onClick we update the value only with the help of useState.
  const [count, setCount] = useState(0);

  let counter = 7;
  function IncrementValue() {
    // counter = counter+1;
    // console.log(counter)
    setCount(count + 1);
    console.log("value added", count);
  }

  function DecrementValue() {
    // counter = counter-1;

    // if else condition
    // if(count<1){
    //   console.log("value cannot be negative");
    //   setCount(0);
    // }
    // else{
    //   setCount(count-1)
    // }


    // ternary operator
    {
      count<1 ? (console.log("value cannot be negative"),setCount(0)) : setCount(count-1)
    }
  }

  return (
    <>
      <h1>Practice React</h1>
      <h2>Counter value : {count}</h2>

      <button onClick={IncrementValue}>Incremement</button>
      <br />
      <br />
      <button onClick={DecrementValue}>Decrement</button>
    </>
  );
}

export default App;
