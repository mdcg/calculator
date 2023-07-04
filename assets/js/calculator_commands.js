import { getOperands, getOperators, getLastOperand } from "./helpers.js";
import { operationDisplay, resultDisplay } from "./calculator_displayers.js";

let dotCommand = () => {
  let lastOperand = getLastOperand(getOperands());
  if (lastOperand.length > 0 && !lastOperand.includes(".")) {
    operationDisplay.innerHTML += ".";
  }
};

let signalCommand = () => {
  let operands = getOperands();
  let operators = getOperators();
  let lastOperand = getLastOperand(operands);

  if (operands.length <= operators.length) {
    return;
  }

  let operationWithoutLastOperand = operationDisplay.innerHTML.slice(0, -lastOperand.length);

  if (lastOperand.startsWith("-")) {
    let lastOperandWithoutSignal = lastOperand.slice(1);
    operationDisplay.innerHTML = operationWithoutLastOperand + lastOperandWithoutSignal;
    return;
  }

  let lastOperandWithSignal = `-${lastOperand}`;
  if (operationWithoutLastOperand.endsWith("−")) {
    operationWithoutLastOperand = operationWithoutLastOperand.slice(0, -1) + "+";
    lastOperandWithSignal = lastOperand;
  }
  operationDisplay.innerHTML = operationWithoutLastOperand + lastOperandWithSignal;
};

let backspaceCommand = () => {
  operationDisplay.innerHTML = operationDisplay.innerHTML.slice(0, -1);
  resultDisplay.innerHTML = "";
};

let clearCommand = () => {
  operationDisplay.innerHTML = "";
  resultDisplay.innerHTML = "";
};

let equalCommand = () => {
  if (getOperands().length > 1) {
    operationDisplay.innerHTML = resultDisplay.innerHTML;
    resultDisplay.innerHTML = "";
  }
};

export { dotCommand, signalCommand, backspaceCommand, clearCommand, equalCommand };
