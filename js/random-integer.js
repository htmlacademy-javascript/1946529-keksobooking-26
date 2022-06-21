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

export {randomInteger};
