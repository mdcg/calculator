let operation = [];
let currentDigit = "";
const operationDisplay = document.getElementById("operation");

let pressKey = (event) => {
  if (event.target.className.includes("keyboard-digit")) {
    calculatorDigits(event);
  } else if (event.target.className.includes("keyboard-button-operation")) {
    calculatorOperations(event);
  } else if (event.target.className.includes("keyboard-command")) {
    calculatorCommands(event);
  }
};

const keyboardButtons = Array.from(
  document.getElementsByClassName("keyboard-button")
);

keyboardButtons.forEach((element) => {
  element.addEventListener("click", pressKey);
});

let calculatorCommands = (event) => {
  switch (event.target.id) {
    case "dot":
      break;
    case "signal":
      break;
    case "backspace":
      operationDisplay.innerHTML = operationDisplay.innerHTML.slice(0, -1);
      break;
    case "clear":
      operationDisplay.innerHTML = "";
      break;
  }
};

let calculatorOperations = (event) => {
  switch (event.target.id) {
    case "minus":
      operationDisplay.innerHTML += "-";
      break;
    case "plus":
      operationDisplay.innerHTML += "+";
      break;
    case "division":
      operationDisplay.innerHTML += "/";
      break;
    case "multiplication":
      operationDisplay.innerHTML += "*";
      break;
    case "division":
      operationDisplay.innerHTML += "/";
      break;
    case "equal":
      break;
  }
};

let calculatorDigits = (event) => {
  operationDisplay.innerHTML += event.target.innerHTML.trim();
};
