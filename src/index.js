import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";

function processUserOrders(orders) {
    let total = 0;
    let discount = 0;

    if (orders.length > 0) {
        for (let order of orders) {
            total += order.amount;
            
            if (order.amount > 100) {
                discount += order.amount * 0.1;
            }

            function applyTax(amount) {
                return amount * 1.15;
            }

            total = applyTax(total);
        }
    }

    console.log(`Total after discount: ${total - discount}`);
    return total - discount;
}

function analyzeTransactions(transactions) {
    let summary = {};

    for (let txn of transactions) {
        if (!summary[txn.type]) {
            summary[txn.type] = 0;
        }
        summary[txn.type] += txn.amount;

        function logTransaction() {
            console.log(`Transaction Type: ${txn.type}, Amount: ${txn.amount}`);
        }

        logTransaction();
    }

    return summary;
}

function addNumbers(a, b) {
    return a + b;
}

function sumValues(x, y) {
    return x + y;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function productOfValues(x, y) {
    return x * y;
}

function computeTotal(a, b) {
    return (a + b) * 2;
}

function fetchUserData(userId) {
    console.log(`Fetching data for user: ${userId}`);
}

const squareNumber = function (num) {
    return num * num;
};

function handlePayments(payments) {
    let total = 0;
    for (let p of payments) {
        total += p.amount;
    }
    return total;
}

function processInvoices(invoices) {
    let sum = 0;
    for (let i of invoices) {
        sum += i.amount;
    }
    return sum;
}

function computeSum(a, b) {
    let result = a + b;
    return result;
}

function calculateTotal(a, b) {
    let total = a + b;
    return total;
}

function checkEligibility(age, income) {
    return age >= 18 && income > 50000;
}

function isEligibleForLoan(age, salary) {
    return age >= 18 && salary > 50000;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function formatDate(date) {
    return date.toISOString().split("T")[0];
}

function sendNotification(user, message) {
    console.log(`Notification sent to ${user}: ${message}`);
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
