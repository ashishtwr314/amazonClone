import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";

function shortFunction() {
    console.log("This is a short function.");
    return 42;
}

function longFunction() {
    console.log("This function is too long.");
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += i;
        console.log(sum);
    }
    console.log("Still running...");
    console.log("This function should be refactored.");
    console.log("Consider breaking it into smaller functions.");
    console.log("It exceeds the recommended 10 lines.");
    console.log("Refactor this!");
    console.log("End of long function.");
    return sum;
}

function deeplyNestedFunction() {
    if (true) {
        if (true) {
            if (true) {
                if (true) { // Nesting Level 4
                    console.log("This function is deeply nested.");
                }
            }
        }
    }
}

const arrowFunction = () => {
    console.log("This is an arrow function.");
};

const longAndNested = function () {
    console.log("Starting function...");
    let count = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i === j) {
                console.log("Nested too much!"); // Nesting Level 3
            }
        }
    }
    console.log("Function complete.");
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
