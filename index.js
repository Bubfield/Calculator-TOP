function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  return operator(a, b);
}

const regButtons = document.querySelectorAll(".regButton");
const display = document.getElementById("display");
const equalButton = document.querySelector(".equalButton");
const clearButton = document.querySelector(".clearButton");
const addButton = document.querySelector(".addButton");
const subtractButton = document.querySelector(".subtractButton");
const multiplyButton = document.querySelector(".multiplyButton");
const divideButton = document.querySelector(".divideButton");

regButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let buttonInput = e.target.innerHTML;
    let textInput = (display.value += buttonInput);
    //console.log(textInput);
    addButton.addEventListener("click", function () {
      let num = display.value;
      display.value = "";
      let operator = "+";
    });
  });
});

equalButton.addEventListener("click", function (num1, operator) {
  let num = display.value;
  if (operator === "+") {
    operate();
  }
});

clearButton.addEventListener("click", function () {});

subtractButton.addEventListener("click", function () {});

multiplyButton.addEventListener("click", function () {});

divideButton.addEventListener("click", function () {});
