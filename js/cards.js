import {listOfBookingObjects} from './main.js';

const cardTemplate = document.querySelector('#card');
const parentBlock = document.querySelector('.map__canvas');
const cardContainer = document.createElement('div');
const priceSpan = document.createElement('span');
const cardContent = cardTemplate.content;
const clonedContent = cardContent.cloneNode(true);
const bookingObjectArray = listOfBookingObjects();

// console.log(objectItem.author.avatar);

const createObject = (objectItem) => {
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

  cardAvatar.src = objectItem.author.avatar;
  title.textContent = objectItem.offer.title;
  address.textContent = objectItem.offer.adress;
  price.textContent = '';
  price.insertAdjacentText('afterbegin', objectItem.offer.price);
  price.insertAdjacentElement('beforeend', priceSpan);
  priceSpan.textContent = ' ₽/ночь';
  houseType.textContent = objectItem.offer.type;
  roomsCount.textContent = `${objectItem.offer.rooms} комнаты для ${objectItem.offer.guests} гостей`;
  checkInOutTime.textContent = `Заезд после ${objectItem.offer.checkin}, выезд до ${objectItem.offer.checkout}`;

  if (featuresItems.length > objectItem.offer.features.length && objectItem.offer.features.length > 0) {
    // featuresItems.forEach((item) => {
    //   const isExist = objectItem.offer.features.some(
    //     (feature) => item.classList.contains(`popup__feature--${  feature}`),
    //   );

    //   if (!isExist) {
    //     item.remove();
    //   }
    // });
    featuresList.textContent = '';
    objectItem.offer.features.forEach((index) => {
      const newItem = document.createElement('li');
      newItem.classList.add('popup__feature');
      newItem.classList.add(`popup__feature--${  index}`);
      featuresList.append(newItem);
    });
  }

  if (objectItem.offer.features.length < 1) {
    featuresList.textContent = '';
  }

  description.textContent = objectItem.offer.description;
  cardPhotos.textContent = '';

  for (let i = 0; i < objectItem.offer.photos.length; i ++) {
    if (objectItem.offer.photos.length < 1) {
      cardPhotos.textContent = '';
    }
    cardPhotos.append(photoItem.cloneNode(true));
    const photoItems = document.querySelectorAll('.popup__photo');
    photoItems[i].src = objectItem.offer.photos[i];
  }
};

export {createObject};
export {bookingObjectArray};
