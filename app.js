"use strict";
console.log("JS Started");

document.addEventListener('DOMContentLoaded', () => {
  localStorage.clear();
});

let firstNumber;
let operator;
let secondNumber;

function add (a,b) {
  return a + b;
}

function subtract (a,b) {
  return a - b;
}

function multiply (a,b) {
  return a * b;
}

function divide (a,b) {
  return a / b;
}

function operate (firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber)
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber)
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber)
  }
}

const display = document.querySelector('#display');
const ac = document.querySelector('#ac');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const float = document.querySelector('#float');

let displayValue;
let numberToPass = "";

numbers.forEach(number => {
  number.addEventListener('click', () => {
    numberToPass += number.textContent;
    
    if (display.textContent = "0") {
      display.textContent = numberToPass;
    } else {
      display.textContent += numberToPass;
    }
  });
});

float.addEventListener('click', () => {
  numberToPass += ".";
});

operators.forEach(op => {
  op.addEventListener('click', (e) => {
    display.textContent = numberToPass;
    displayValue = display.textContent;
    numberToPass = "";
    
    if (!localStorage.getItem("firstNumber")) {
      localStorage.setItem("firstNumber", displayValue); 
      firstNumber = parseFloat(localStorage.getItem("firstNumber"));
    } else {
      localStorage.setItem("secondNumber", displayValue);
      secondNumber = parseFloat(localStorage.getItem("secondNumber"));
      firstNumber = parseFloat(localStorage.getItem("firstNumber"));

      display.textContent = operate(firstNumber, operator, secondNumber);
      localStorage.setItem("firstNumber", display.textContent);
      localStorage.clear;
    }

    if (e.target.textContent === "−") {
      operator = "-";
    } else if (e.target.textContent === "✕") {
      operator = "*";
    } else if (e.target.textContent === "÷") {
      operator = "/";
    } else if (e.target.textContent === "+") {
      operator = "+";
    }
  });
});

equals.addEventListener("click", () => {
  displayValue = display.textContent;
  numberToPass = "";

  localStorage.setItem("secondNumber", displayValue);
  secondNumber = localStorage.getItem("secondNumber");

  firstNumber = parseFloat(localStorage.getItem("firstNumber"));
  secondNumber = parseFloat(secondNumber);
  display.textContent = operate(firstNumber, operator, secondNumber);
  localStorage.clear();
});

ac.addEventListener('click', () => {
  localStorage.clear();
  display.textContent = "0";
});
