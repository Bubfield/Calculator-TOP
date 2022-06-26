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

regButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let buttonInput = e.target.innerHTML;
    let textInput = (display.value += buttonInput);
  });
});

equalButton.addEventListener("click", function () {});

clearButton.addEventListener("click", function () {});
