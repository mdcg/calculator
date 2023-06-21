import {
  getOperands,
  getOperators,
  getLastOperand,
  parseOperand,
} from "./helpers.js";
import { operationDisplay, resultDisplay } from "./calculator_displayers.js";

let translateCalculation = (a, b, op) => {
  a = parseOperand(a);
  b = parseOperand(b);

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

let calculatorCommands = (event) => {
  let lastOperand = getLastOperand(getOperands());
  
  switch (event.target.id) {
    case "dot":
      if (!lastOperand.includes(".")) {
        operationDisplay.innerHTML += ".";
      }
      break;
    case "signal":
      if (lastOperand.startsWith("-")) {
        operationDisplay.innerHTML += ".";
      } else {
        
      }
      break;
    case "backspace":
      operationDisplay.innerHTML = operationDisplay.innerHTML.slice(0, -1);
      break;
    case "clear":
      operationDisplay.innerHTML = "";
      resultDisplay.innerHTML = "";
      break;
  }
};

let calculatorOperators = (event) => {
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
      if (getOperands().length > 1) {
        operationDisplay.innerHTML = resultDisplay.innerHTML;
        resultDisplay.innerHTML = "";
      }
      break;
  }
};

let calculatorOperands = (event) => {
  operationDisplay.innerHTML += event.target.innerHTML.trim();
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

export {
  calculatorCommands,
  calculatorOperators,
  calculatorOperands,
  calculate,
};
