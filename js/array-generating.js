import {randomInteger} from './random-integer.js';
import {FEATURES_ARRAY} from './data.js';
import {OBJECTS_PHOTOS} from './data.js';
import {FEATURES_ARRAY_LENGTH} from './data.js';
import {RANDOM_BEGIN_INDEX_FROM} from './data.js';
import {RANDOM_BEGIN_INDEX_TO} from './data.js';
import {RANDOM_END_INDEX_FROM} from './data.js';
import {PHOTOS_COUNT} from './data.js';

// Генерируем целочисленные индексы для фото

const imageIndex = (count) => {

  const imageArr = [];

  while (imageArr.length < count) {

    let temp = Math.floor(Math.random() * (count + 1));

    if (temp < PHOTOS_COUNT) {
      temp = `0${temp}`;
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
  return FEATURES_ARRAY.slice(randomInteger(RANDOM_BEGIN_INDEX_FROM, RANDOM_BEGIN_INDEX_TO), randomInteger(RANDOM_END_INDEX_FROM, FEATURES_ARRAY_LENGTH - 1));
};

spliceFeaturesArray();

const spliceObjectPhotos = function () {
  return OBJECTS_PHOTOS.slice(randomInteger(RANDOM_BEGIN_INDEX_FROM, OBJECTS_PHOTOS.length - 1));
};

spliceObjectPhotos();

export {imageArrayIndex};
export {spliceFeaturesArray};
export {spliceObjectPhotos};
