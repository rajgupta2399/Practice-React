import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function myApp() {
  return (
    <div>
      <h1>Hello, This is custom App function</h1>
    </div>
  );
}

// HOW REACT INJECT THE HTML IN THE BROWSER
// this object syntax has not correct
// const reactElement = {
//   type: "a", // which type of element have to create
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   Children: "Click Me to Google",
// };

// this convert into the object
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const userName = "chai or react";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click To Visit Google",
  " ",
  userName
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
