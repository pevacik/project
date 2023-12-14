/* eslint-disable no-unused-vars */




// функция случайного числа
const GET_RANDOM = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


// функция случайно числа с плавающей запятой

const GET_FLOAT_RANDOM = (min, max, digits) => {
  let x;
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return x = (Math.random() * (max - min + 1) + min).toFixed(digits);
};


// Случайный эллемент массива
const GET_ARRAY_ELEMENT_RANDOM = (array) => {
  return array[GET_RANDOM(0, array.length - 1)];
}

// функция проверки длинны комментария
const PROVE_OF_LENTGH = (text, number) => {
  if (text.length <= number) {
    return true
  } else {
    return false
  }
};
export { GET_RANDOM, GET_FLOAT_RANDOM, GET_ARRAY_ELEMENT_RANDOM, PROVE_OF_LENTGH };
