import {listOfBookingObjects} from './main.js';

const CARD = document.querySelector('#card');
const PARENT_BLOCK = document.querySelector('.map__canvas');
const CARD_CONTAINER = document.createElement('div');
const PRICE_SPAN = document.createElement('span');
const CARD_CONTENT = CARD.content;
const BOOKING_OBJECT_ARRAY = listOfBookingObjects();


// console.log(BOOKING_OBJECT_ARRAY[1].author.avatar);

const createObject = () => {
  PARENT_BLOCK.appendChild(CARD_CONTENT);
  CARD_CONTAINER.setAttribute('id', 'card');
  const ARTICLE = document.querySelector('.popup');
  const PHOTOS = document.querySelector('.popup__photos');
  const FEATURES_ITEMS = document.querySelectorAll('.popup__feature');
  const PHOTO_ITEM = document.querySelector('.popup__photo');

  ARTICLE.children[0].src = BOOKING_OBJECT_ARRAY[1].author.avatar;
  ARTICLE.children[1].textContent = BOOKING_OBJECT_ARRAY[1].offer.title;
  ARTICLE.children[2].textContent = BOOKING_OBJECT_ARRAY[1].offer.adress;
  ARTICLE.children[3].textContent = '';
  ARTICLE.children[3].insertAdjacentText('afterbegin', BOOKING_OBJECT_ARRAY[1].offer.price);
  ARTICLE.children[3].insertAdjacentElement('beforeend', PRICE_SPAN);
  PRICE_SPAN.textContent = ' ₽/ночь';
  ARTICLE.children[4].textContent = BOOKING_OBJECT_ARRAY[1].offer.type;
  ARTICLE.children[5].textContent = `${BOOKING_OBJECT_ARRAY[1].offer.rooms} комнаты для ${BOOKING_OBJECT_ARRAY[1].offer.guests} гостей`;
  ARTICLE.children[6].textContent = `Заезд после ${BOOKING_OBJECT_ARRAY[1].offer.checkin}, выезд до ${BOOKING_OBJECT_ARRAY[1].offer.checkout}`;

  if (FEATURES_ITEMS.length > BOOKING_OBJECT_ARRAY[1].offer.features.length && BOOKING_OBJECT_ARRAY[1].offer.features.length > 0) {
    FEATURES_ITEMS.forEach((item) => {
      const isExist = BOOKING_OBJECT_ARRAY[1].offer.features.some(
        (feature) => item.classList.contains(`popup__feature--${  feature}`),
      );

      if (!isExist) {
        item.remove();
      }
    });
  } else {
    return;
  }

  ARTICLE.children[8].textContent = BOOKING_OBJECT_ARRAY[1].offer.description;
  ARTICLE.children[9].textContent = '';

  for (let i = 0; i < BOOKING_OBJECT_ARRAY[1].offer.photos.length; i ++) {
    if (BOOKING_OBJECT_ARRAY[1].offer.photos.length < 1) {
      ARTICLE.children[9].textContent = '';
    }
    PHOTOS.append(PHOTO_ITEM.cloneNode(true));
    const PHOTO_ITEMS = document.querySelectorAll('.popup__photo');
    PHOTO_ITEMS[i].src = BOOKING_OBJECT_ARRAY[1].offer.photos[i];

    // console.log(BOOKING_OBJECT_ARRAY[1].offer.photos[i])

  }
};

createObject();
// console.log(createObject())
