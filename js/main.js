// Функция генерации ЦЕЛОГО случайного числа

const randomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return 'Числа должны быть БОЛЬШЕ нуля!';
  }

  if (min === max) {
    return 'Максимальное значение должно быть больше минмиального!';
  }

  if (max < min) {
    const reverseMin = min;
    min = max;
    max = reverseMin;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

randomInteger(1, 3);

// console.log(randomInteger(1, 3));

// Функция генерации случайного числа с плавающей точкой

const randomFloat = (min, max, numberQuantity) => {
  if (min < 0 || max < 0) {
    return 'Числа должны быть БОЛЬШЕ нуля!';
  }

  if (min === max) {
    return 'Максимальное значение должно быть больше минмиального!';
  }

  if (max < min) {
    const reverseMin = min;
    min = max;
    max = reverseMin;
  }

  return (Math.random() * (max - min) + min).toFixed(numberQuantity);
};

randomFloat(1, 1.99, 4);

// console.log(randomNumber(1, 1.99, 4));
