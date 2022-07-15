import {listOfBookingObjects} from './main.js';
import {OBJECTS_TYPES_PRICE} from './data.js';

const cardTemplate = document.querySelector('#card');
const parentBlock = document.querySelector('.map__canvas');
// const leafletPopup = document.querySelector('.leaflet-popup');

const cardContainer = document.createElement('div');
const priceSpan = document.createElement('span');
const cardContent = cardTemplate.content;
const clonedContent = cardContent.cloneNode(true);
const bookingObjectArray = listOfBookingObjects();

// const objectType = (type) => OBJECTS_TYPES_PRICE[type].rus;

const createObject = (object) => {
  parentBlock.appendChild(clonedContent);
  cardContainer.setAttribute('id', 'card');
  const cardPhotos = document.querySelector('.popup__photos');
  const featuresItems = document.querySelectorAll('.popup__feature');
  const featuresList = document.querySelector('.popup__features');
  const photoItem = document.querySelector('.popup__photo');
  const cardAvatar = document.querySelector('.popup__avatar');
  const title = document.querySelector('.popup__title');
  const address = document.querySelector('.popup__text--address');
  const price = document.querySelector('.popup__text--price');
  const houseType = document.querySelector('.popup__type');
  const roomsCount = document.querySelector('.popup__text--capacity');
  const checkInOutTime = document.querySelector('.popup__text--time');
  const description = document.querySelector('.popup__description');

  cardAvatar.src = object.author.avatar;
  title.textContent = object.offer.title;
  address.textContent = object.offer.adress;
  price.textContent = '';
  price.insertAdjacentText('afterbegin', object.offer.price);
  price.insertAdjacentElement('beforeend', priceSpan);
  priceSpan.textContent = ' ₽/ночь';
  houseType.textContent = OBJECTS_TYPES_PRICE[object.offer.type].rus;
  roomsCount.textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
  checkInOutTime.textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}`;

  if (featuresItems.length > object.offer.features.length && object.offer.features.length > 0) {
    featuresList.textContent = '';
    object.offer.features.forEach((index) => {
      const newItem = document.createElement('li');
      newItem.classList.add('popup__feature');
      newItem.classList.add(`popup__feature--${  index}`);
      featuresList.append(newItem);
    });
  }

  if (object.offer.features.length < 1) {
    featuresList.textContent = '';
  }

  description.textContent = object.offer.description;
  cardPhotos.textContent = '';

  for (let i = 0; i < object.offer.photos.length; i ++) {
    if (object.offer.photos.length < 1) {
      cardPhotos.textContent = '';
    }
    cardPhotos.append(photoItem.cloneNode(true));
    const photoItems = document.querySelectorAll('.popup__photo');
    photoItems[i].src = object.offer.photos[i];
  }

  const newArticle = document.querySelector('.popup').cloneNode(true);
  return newArticle;
};

export {createObject};
export {bookingObjectArray};
// console.log(objectType(bookingObjectArray[1].offer.type));
