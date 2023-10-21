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

let displayValue;
let numberToPass = "";

numbers.forEach(number => {
  number.addEventListener('click', () => {
    numberToPass += number.textContent;
    console.log(numberToPass);
  });
});

operators.forEach(op => {
  op.addEventListener('click', (e) => {
    console.log(numberToPass);
    display.textContent = numberToPass;
    displayValue = display.textContent;
    numberToPass = "";
    
    operator = e.target.textContent;

    if (!localStorage.getItem("firstNumber")) {
      localStorage.setItem("firstNumber", displayValue); 
      firstNumber = localStorage.getItem("firstNumber");
      console.log("first: " + firstNumber);
    }
  });
});

equals.addEventListener("click", () => {
  display.textContent = numberToPass;
  displayValue = display.textContent;
  numberToPass = "";

  if (localStorage.getItem("firstNumber")) {
    localStorage.setItem("secondNumber", displayValue);
    secondNumber = localStorage.getItem("secondNumber");
    console.log("second: " + secondNumber);
  }

  firstNumber = + firstNumber;
  secondNumber = + secondNumber;
  display.textContent = operate(firstNumber, operator, secondNumber);
});

ac.addEventListener('click', () => {
  localStorage.clear();
  display.textContent = "DISPLAY";
});
