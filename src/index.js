import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";


// ✅ Exact Duplicates
function addNumbers(a: number, b: number): number {
    return a + b;
}

function sumValues(x: number, y: number): number {
    return x + y; // 🔴 Same as addNumbers
}

// ✅ Highly Similar Functions (Different Names, Same Logic)
function multiplyNumbers(a: number, b: number): number {
    return a * b;
}

function productOfValues(x: number, y: number): number {
    return x * y; // 🟡 Very similar to multiplyNumbers
}

// ✅ Slightly Modified Logic (Partial Similarity)
function computeTotal(a: number, b: number): number {
    return (a + b) * 2; // Similar to addNumbers but slightly different
}

// ✅ Unique Functions (Completely Different Logic)
function fetchUserData(userId: string): void {
    console.log(`Fetching data for user: ${userId}`);
}

function logMessage(message: string): void {
    console.log(`Log: ${message}`);
}

// ✅ Anonymous Function (Cannot be Named)
const squareNumber = function (num: number): number {
    return num * num;
};

// ✅ Similar Functions with Extra Steps
function getUserInfo(userId: string): void {
    let data = `User-${userId}`;
    console.log(`Data Retrieved: ${data}`);
}

function retrieveUserDetails(userID: string): void {
    let info = `User-${userID}`;
    console.log(`Information: ${info}`); // 🟡 Slight variation
}

// ✅ Loops & Conditions (Complex Similarity)
function processOrders(orders: number[]): number {
    let total = 0;
    for (let order of orders) {
        total += order;
    }
    return total;
}

function handleTransactions(transactions: number[]): number {
    let sum = 0;
    for (let t of transactions) {
        sum += t;
    }
    return sum; // 🔴 Almost identical to processOrders
}

// ✅ Different Code Style but Same Logic
function computeSum(a: number, b: number): number {
    let result = a + b;
    return result;
}

function calculateTotal(a: number, b: number): number {
    let total = a + b;
    return total; // 🔴 Practically the same as computeSum
}

// ✅ More Complex Logic with Variations
function checkEligibility(age: number, income: number): boolean {
    return age >= 18 && income > 50000;
}

function isEligibleForLoan(age: number, salary: number): boolean {
    return age >= 18 && salary > 50000; // 🟡 Very similar to checkEligibility
}

// ✅ Different Functionality
function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100);
}

function formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
}

function sendNotification(user: string, message: string): void {
    console.log(`Notification sent to ${user}: ${message}`);
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
