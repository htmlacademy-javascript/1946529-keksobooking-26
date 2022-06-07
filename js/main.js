// Функция генерации случайного числа с плавающей точкой

const randomNumber = (min, max) => {
  if (min >=0 && max >= 0 && max > min) {
    return (Math.random() * (max - min) + min).toFixed(4);
  }

  if (min < 0 || max < 0) {
    return 'Числа должны быть БОЛЬШЕ нуля!';
  }

  if (min === max) {
    return 'Максимальное значение должно быть больше минмиального!';
  }

  if (max < min) {
    const reversSum = min + max;
    const reversMax = reversSum - max;
    const reversMin = reversSum - min;
    max = reversMax;
    min = reversMin;

    return (Math.random() * (max - min) + min).toFixed(4);
  }
};

randomNumber(100, 1.99);

// console.log(randomResult);

// const temp = min;
// min = max;
// max = temp;
