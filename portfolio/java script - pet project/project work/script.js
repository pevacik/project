const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
// calculator
let num1;
let currentOp;

function handleOperation(op) {
  const display = document.getElementById('WorkAreaCalculator');
  if (!num1) {
    num1 = parseFloat(display.value);
  }
  currentOp = op;
  display.value = '';
};

function EqualsRun() {
  const display = document.getElementById('WorkAreaCalculator');
  const num2 = parseFloat(display.value);
  
  if (!num1 || !currentOp || isNaN(num2)) {
    display.value = 'Ошибка';
    return;
  }
  
  let result;
  switch(currentOp) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        display.value = 'Ошибка деления на ноль';
        reset();
        return;
      }
      result = num1 / num2;
      break;
    default:
      display.value = 'Ошибка';
      reset();
      return;
  }

  display.value = result;
  reset();
};

function reset() {
  num1 = null;
  currentOp = null;
};