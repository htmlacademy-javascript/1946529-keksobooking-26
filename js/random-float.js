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

export {randomFloat};
