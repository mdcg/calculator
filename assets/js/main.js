const operation = document.getElementById("operation");
let pressKey = (event) => {
  switch (event.target.id) {
    case "zero":
      operation.innerHTML += "0";
      break;
    case "one":
      operation.innerHTML += "1";
      break;
    case "two":
      operation.innerHTML += "2";
      break;
    case "three":
      operation.innerHTML += "3";
      break;
    case "four":
      operation.innerHTML += "4";
      break;
    case "five":
      operation.innerHTML += "5";
      break;
    case "six":
      operation.innerHTML += "6";
      break;
    case "seven":
      operation.innerHTML += "7";
      break;
    case "eight":
      operation.innerHTML += "8";
      break;
    case "nine":
      operation.innerHTML += "9";
      break;
    case "minus":
      operation.innerHTML += "-";
      break;
    case "plus":
      operation.innerHTML += "+";
      break;
    case "division":
      operation.innerHTML += "/";
      break;
    case "multiplication":
      operation.innerHTML += "*";
      break;
    case "division":
      operation.innerHTML += "/";
      break;
    case "equal":
      break;
    case "dot":
      operation.innerHTML += ".";
      break;
    case "signal":
      break;
    case "backspace":
      break;
    case "clear":
      break;
  }
};

const keyboardButtons = Array.from(
  document.getElementsByClassName("keyboard-button")
);

keyboardButtons.forEach((element) => {
  element.addEventListener("click", pressKey);
});
