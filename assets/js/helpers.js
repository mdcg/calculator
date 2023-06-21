import { operationDisplay } from "./calculator_displayers.js";

let getOperands = () => {
  return operationDisplay.innerHTML.split(/[+\-*/]/g) || [];
};

let getOperators = () => {
  return operationDisplay.innerHTML.match(/[+\-*/]/g) || [];
};

let getLastOperand = (operands) => {
  return operands[operands.length - 1];
};

let parseOperand = (operand) => {
  return String(operand).includes(".")
    ? parseFloat(operand)
    : parseInt(operand);
};

export { getOperands, getOperators, getLastOperand, parseOperand };
