const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Маппинг римских и арабских чисел
const romanToArabic = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
  IX: 9,
  X: 10,
};

const arabicToRoman = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
};

// Функция для проверки, римское ли это число
function isRoman(value) {
  return Object.keys(romanToArabic).includes(value);
}

// Преобразование римских чисел в арабские
function romanToNumber(roman) {
  return romanToArabic[roman];
}

// Преобразование арабских чисел в римские
function numberToRoman(number) {
  return arabicToRoman[number];
}

// Основная функция калькулятора
function calculator(input) {
  // Убираем пробелы и проверяем формат строки
  const regex = /^(\w+)([+\-*/])(\w+)$/;
  const match = input.replace(/\s+/g, "").match(regex);

  if (!match) {
    console.log("Ошибка: введите выражение в формате 'число оператор число', например: 2+2 или II+II.");
    rl.close();
    return;
  }

  const [_, operand1, operator, operand2] = match;

  let a, b, isRomanMode = false;

  // Определяем тип чисел (арабские или римские)
  if (isRoman(operand1) && isRoman(operand2)) {
    a = romanToNumber(operand1);
    b = romanToNumber(operand2);
    isRomanMode = true;
  } else if (!isNaN(operand1) && !isNaN(operand2)) {
    a = parseInt(operand1, 10);
    b = parseInt(operand2, 10);
  } else {
    console.log("Ошибка: используйте только арабские или только римские числа одновременно.");
    rl.close();
    return;
  }

  // Проверяем диапазон чисел
  if (a < 1 || a > 10 || b < 1 || b > 10) {
    console.log("Ошибка: числа должны быть в диапазоне от 1 до 10 включительно.");
    rl.close();
    return;
  }

  // Выполняем вычисление
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = Math.floor(a / b); // Целочисленное деление
      break;
    default:
      console.log("Ошибка: недопустимая операция.");
      rl.close();
      return;
  }

  // Если включен римский режим, преобразуем результат в римскую систему
  if (isRomanMode) {
    if (result <= 0) {
      console.log(""); // В римской системе нет нуля и отрицательных чисел
    } else {
      console.log(`Результат: ${numberToRoman(result)}`);
    }
  } else {
    console.log(`Результат: ${result}`);
  }

  rl.close();
}

// Чтение строки из консоли
rl.question("Введите выражение (например, 2+2 или II+II): ", (input) => {
  calculator(input);
});
