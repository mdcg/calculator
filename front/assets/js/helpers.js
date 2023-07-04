import { operationDisplay } from "./calculator_displayers.js";

let getOperands = () => {
  let operands = operationDisplay.innerHTML.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g) || [];
  return operands.filter((operand) => operand.length > 0);
};

let getOperators = () => {
  return operationDisplay.innerHTML.match(/[+\−*/]/g) || [];
};

let getLastOperand = (operands) => {
  return operands[operands.length - 1];
};

let parseOperand = (operand) => {
  return String(operand).includes(".") ? parseFloat(operand) : parseInt(operand);
};

export { getOperands, getOperators, getLastOperand, parseOperand };
