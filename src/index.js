import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";


function calculateSum(a, b) {
    return a + b;
}

function computeTotal(x, y) {
    return x + y;
}

function fetchData() {
    let data = [];
    for (let i = 0; i < 10; i++) {
        data.push(i);
    }
    return data;
}

function getAPIData() {
    let result = [];
    for (let j = 0; j < 10; j++) {
        result.push(j);
    }
    return result;
}


function processUsers(users) {
    let processed = [];
    for (let user of users) {
        processed.push(user.name.toUpperCase());
    }
    return processed;
}

function processProducts(products) {
    let result = [];
    for (let product of products) {
        result.push(product.price * 2);
    }
    return result;
}

function logMessage(message) {
    console.log("Message:", message);
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
