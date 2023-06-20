const operationDisplay = document.getElementById("operation");
const resultDisplay = document.getElementById("result");

let getOperands = () => {
  return operationDisplay.innerHTML.split(/[+\-*/]/g) || [];
};

let getOperators = () => {
  return operationDisplay.innerHTML.match(/[+\-*/]/g) || [];
};

let translateCalculation = (a, b, op) => {
  a = parseInt(a);
  b = parseInt(b);

  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
};

let calculate = () => {
  let operands = getOperands();
  let operators = getOperators();

  operands =
    operands[operands.length - 1] == "" ? operands.slice(0, -1) : operands;

  operators = operands.length < 1 ? operators.slice(1) : operators;

  if (operands.length > 1 && operators.length < operands.length) {
    let calcAux = operands;
    for (let i = 0; i < operators.length; i++) {
      let result = translateCalculation(calcAux[0], calcAux[1], operators[i]);
      calcAux = [result].concat(calcAux.slice(2));
    }
    resultDisplay.innerHTML = calcAux[0];
  }
};

let pressKey = (event) => {
  if (event.target.className.includes("keyboard-operand")) {
    calculatorOperands(event);
  } else if (event.target.className.includes("keyboard-operator")) {
    calculatorOperators(event);
  } else if (event.target.className.includes("keyboard-command")) {
    calculatorCommands(event);
  }
  calculate();
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

let calculatorOperators = (event) => {
  let currentOperands = getOperands();
  if (currentOperands[currentOperands.length - 1] == "") {
    return;
  }

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
    case "equal":
      break;
  }
};

let calculatorOperands = (event) => {
  operationDisplay.innerHTML += event.target.innerHTML.trim();
};
