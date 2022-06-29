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
  if (b === 0) {
    return "not today buddy";
  } else {
    return a / b;
  }
}

function percentage(a) {
  return a / 100;
}

function turnNegative(a) {
  return "-" + a;
}

function turnPositive(a) {
  return "" + a;
}

function operate(a, b, operator) {
  return operator(a, b);
}

const regButtons = document.querySelectorAll(".regButton");
const display = document.getElementById("display");
const equalButton = document.querySelector(".equalButton");
const clearButton = document.querySelector(".clearButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const decimalButton = document.querySelector(".decimalButton");
const percentageButton = document.querySelector(".percentageButton");
const turnNegButton = document.querySelector(".turnNegButton");
let firstNum;
let secondNum;
let operator;
let result;

function calculate(operator) {
  if (operator === "+") {
    result = operate(firstNum, secondNum, add);
  } else if (operator === "-") {
    result = operate(firstNum, secondNum, subtract);
  } else if (operator === "x") {
    result = operate(firstNum, secondNum, multiply);
  } else if (operator === "/") {
    result = operate(firstNum, secondNum, divide);
  }
}

display.value = "0";

regButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (result) {
      secondNum += e.target.innerHTML;
      display.value = secondNum;
    } else {
      display.value += e.target.innerHTML;
    }
    for (let i = 0; i <= 9; i++) {
      if (display.value === `0${i}`) {
        display.value = e.target.innerHTML;
      }
    }
  });
});

decimalButton.addEventListener("click", function () {
  if (!display.value.split("").includes(".")) {
    display.value += ".";
  } else {
    display.value += "";
  }
});

operatorButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (firstNum) {
      secondNum = Number(display.value);
      calculate(operator);
      display.value = Number(parseFloat(result).toFixed(2));
      firstNum = result;
      secondNum = "";
      operator = e.target.innerHTML;
    } else {
      firstNum = Number(display.value);
      display.value = "";
      operator = e.target.innerHTML;
    }
  });
});

equalButton.addEventListener("click", function () {
  if (!operator || !firstNum) {
    display.value = display.value;
  } else {
    secondNum = Number(display.value);
    calculate(operator);
    display.value = Number(parseFloat(result).toFixed(2));
    secondNum = "";
    firstNum = "";
    operator = "";
    result = "";
  }
});

clearButton.addEventListener("click", function () {
  display.value = "0";
  firstNum = "";
  secondNum = "";
  operator = "";
  result = "";
});

document.addEventListener("keydown", function (e) {
  let char = e.which;
  let s = String.fromCharCode(char);
  if (char === 190 && !display.value.split("").includes(".")) {
    display.value += ".";
  }
  if (s.match(/[0-9]/g)) {
    display.value += s;
  }
  for (let i = 0; i <= 9; i++) {
    if (display.value === `0${i}`) {
      display.value = s;
    }
  }
  if (char === 8) {
    display.value = "0";
    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
  }
});

percentageButton.addEventListener("click", function () {
  display.value = percentage(display.value);
});

turnNegButton.addEventListener("click", function () {
  if (!display.value.split("").includes("-")) {
    display.value = turnNegative(display.value);
  } else {
    display.value = display.value.slice(1);
  }
  if (display.value === "-0") {
    display.value = "0";
  }
});
