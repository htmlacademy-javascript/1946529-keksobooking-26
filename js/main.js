// Массив "Удобства для гостей"

const FEATURES_ARRAY = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

// Заголовки обектов

const OBJECTS_HEADERS = [
  'Куба',
  'Доминикана',
  'США',
  'Германия',
  'Сицилия',
  'Иран',
  'Тайланд',
  'Сейшеллы',
  'Мальдивы',
  'Будапешт'
];

// Описание типов объектов

const OBJECTS_DESCRIPTIONS = [
  'Это хорошее помещение"',
  'Это помещение ещё лучше',
  'А это помещение просто замечательное!',
  'Бюджетные аппартаменты',
  'Аппартаменты которые заставят вас захоткть вернуться',
  'Лучшиее жильё для молодожёнов',
  'То что подходит именно вам',
  'Вы даже представить себе не можете насколько тут прекрасно!',
  'Хватит смотреть, приезжайте скорее',
  'Тут вас жду тепло, уют и конечно же приключения!'
];

// Типы объектов

const OBJECTS_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow ',
  'hotel'
];

// Массив фотографий

const OBJECTS_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

// Время заселения и выезда

const CHECK_IN_OUT_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const featuresArrayLength = FEATURES_ARRAY.length;

const randomBeginIndexFrom = 0;
const randomBeginIndexTo = 3;
const randomEndIndexFrom = 4;

const PHOTOS_COUNT = 10;

const OBJECT_COUNT = 10;

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

// Генерируем целочисленные индексы для фото

const imageIndex = (count) => {

  const imageArr = [];

  while (imageArr.length < count) {

    let temp = Math.floor(Math.random() * (count + 1));

    if (temp < PHOTOS_COUNT) {
      temp = `0${  temp}`;
    } else {
      temp = `${PHOTOS_COUNT}`;
    }

    if (!imageArr.includes(temp)) {
      imageArr.push(temp);
    }

    const deleteNull = imageArr.indexOf('00');
    if (deleteNull !== -1) {
      imageArr.splice(deleteNull, 1);
    }

  }
  return imageArr;
};

const imageArrayIndex = imageIndex(PHOTOS_COUNT);

// Генерируем случайные непвоторяющиеся индексы фотографий

const spliceFeaturesArray = function () {
  return FEATURES_ARRAY.slice(randomInteger(randomBeginIndexFrom, randomBeginIndexTo), randomInteger(randomEndIndexFrom, featuresArrayLength));
};

spliceFeaturesArray();

const spliceObjectPhotos = function () {
  return OBJECTS_PHOTOS.slice(randomInteger(randomBeginIndexFrom, OBJECTS_PHOTOS.length - 1));
};

spliceObjectPhotos();

// Генерируем жилые объекты

const bookingObject = () => {

  const location = {
    lat: randomFloat(35.65, 35.7, 5),
    lng: randomFloat(139.7, 139.8, 5)
  };

  const author = {
    avatar: `img/avatars/user${imageArrayIndex.pop()}.png`
  };

  const offer = {
    title: OBJECTS_HEADERS[randomInteger(0, OBJECTS_HEADERS.length - 1)],
    adress: `${location.lat  }, ${  location.lng}`,
    price: randomInteger(1000, 20000),
    type: OBJECTS_TYPES[randomInteger(0, OBJECTS_TYPES.length - 1)],
    rooms: randomInteger(1, 10),
    guests: randomInteger(1, 50),
    checkin: CHECK_IN_OUT_TIME[randomInteger(0, CHECK_IN_OUT_TIME.length - 1)],
    checkout: CHECK_IN_OUT_TIME[randomInteger(0, CHECK_IN_OUT_TIME.length - 1)],
    features: spliceFeaturesArray(),
    description: OBJECTS_DESCRIPTIONS[randomInteger(0, OBJECTS_DESCRIPTIONS.length - 1)],
    photos: spliceObjectPhotos(),
  };

  return {
    author,
    location,
    offer
  };
};

/*eslint-disable */
const listOfBookingObjects = Array.from({length: OBJECT_COUNT}, bookingObject);
/*eslint-enable */
