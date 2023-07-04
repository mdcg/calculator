import { getOperands, getOperators, getLastOperand, parseOperand } from "./helpers.js";
import { operationDisplay, resultDisplay } from "./calculator_displayers.js";
import { dotCommand, signalCommand, backspaceCommand, clearCommand, equalCommand } from "./calculator_commands.js";

let translateCalculation = (a, b, op) => {
  a = parseOperand(a);
  b = parseOperand(b);

  switch (op) {
    case "+":
      return a + b;
    case "−":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
};

let calculatorCommands = (event) => {
  switch (event.target.id) {
    case "dot":
      dotCommand();
      break;
    case "signal":
      signalCommand();
      break;
    case "backspace":
      backspaceCommand();
      break;
    case "clear":
      clearCommand();
      break;
    case "equal":
      equalCommand();
      break;
  }
};

let calculatorOperators = (event) => {
  let operands = getOperands();
  let operators = getOperators();

  if (operators.length < operands.length) {
    switch (event.target.id) {
      case "minus":
        operationDisplay.innerHTML += "−";
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
    }
  }
};

let calculatorOperands = (event) => {
  operationDisplay.innerHTML += event.target.innerHTML.trim();
  getOperands();
};

let calculate = () => {
  let operands = getOperands();
  let operators = getOperators();

  operands = getLastOperand(operands) == "" ? operands.slice(0, -1) : operands;

  if (operands.length > 1 && operators.length < operands.length) {
    let calcAux = operands;
    for (let i = 0; i < operators.length; i++) {
      let result = translateCalculation(calcAux[0], calcAux[1], operators[i]);
      calcAux = [result].concat(calcAux.slice(2));
    }
    resultDisplay.innerHTML = calcAux.pop();
  }
};

export { calculatorCommands, calculatorOperators, calculatorOperands, calculate };
