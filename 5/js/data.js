import {imageArrayIndex} from './array-generating.js';
import {spliceFeaturesArray} from './array-generating.js';
import {spliceObjectPhotos} from './array-generating.js';
import {randomInteger} from './random-integer.js';
import {randomFloat} from './random-float.js';

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
  'Аппартаменты которые заставят вас захотеть вернуться',
  'Лучшиее жильё для молодожёнов',
  'То что подходит именно вам',
  'Вы даже представить себе не можете насколько тут прекрасно!',
  'Хватит смотреть, приезжайте скорее',
  'Тут вас жду тепло, уют и конечно же приключения!'
];

// Типы объектов

const OBJECTS_TYPES = [
  'Дворец',
  'Квартира',
  'Дом целиком',
  'Бунгало ',
  'Отель'
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

const FEATURES_ARRAY_LENGTH = FEATURES_ARRAY.length;

const RANDOM_BEGIN_INDEX_FROM = 0;
const RANDOM_BEGIN_INDEX_TO = 3;
const RANDOM_END_INDEX_FROM = 4;

const PHOTOS_COUNT = 10;

const OBJECT_COUNT = 10;

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
const listOfBookingObjects = () => Array.from({length: OBJECT_COUNT}, bookingObject);
/*eslint-enable */

export {listOfBookingObjects};
export {FEATURES_ARRAY};
export {OBJECTS_PHOTOS};
export {FEATURES_ARRAY_LENGTH};
export {RANDOM_BEGIN_INDEX_FROM};
export {RANDOM_BEGIN_INDEX_TO};
export {RANDOM_END_INDEX_FROM};
export {PHOTOS_COUNT};
