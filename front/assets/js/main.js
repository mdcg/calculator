import { calculatorCommands, calculatorOperators, calculatorOperands, calculate } from "./calculator_functions.js";

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

const keyboardButtons = Array.from(document.getElementsByClassName("keyboard-button"));

keyboardButtons.forEach((element) => {
  element.addEventListener("click", pressKey);
});
