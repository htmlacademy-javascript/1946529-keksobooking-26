import {OBJECTS_TYPES_PRICE} from './data.js';

const adForm = document.querySelector('.ad-form');
const mapFiltres = document.querySelector('.map__filters');
const filtresChildren = [...mapFiltres.children];
const formChildren = [...adForm.children];

// Находим  список
const type = adForm.querySelector('#type');
// Находим поле с ценой
const priceField = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const optionRooms = adForm.querySelector('#room_number');
const optionGuests = adForm.querySelector('#capacity');

// Создаём функцию для обекта со значением цены
const placeholderPrice = (price) => OBJECTS_TYPES_PRICE[price];

const disableForms = () => {
  adForm.setAttribute('disabled', 'disabled');
  filtresChildren.forEach((child) => {
    child.setAttribute('disabled', 'disabled');
  });
  formChildren.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });
};

const enableForms = () => {
  adForm.removeAttribute('disabled');
  filtresChildren.forEach((child) => {
    child.removeAttribute('disabled');
  });
  formChildren.forEach((field) => {
    field.removeAttribute('disabled');
  });
};

// Код валидации pristine
const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element--error-text',
}, false);

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

// По событию change меняем значение placeholder

type.addEventListener('change', () => {
  priceField.placeholder = placeholderPrice(type.value);
});

pristine.addValidator(optionRooms, () => {
  /*eslint-disable */
  if (optionRooms.value >= optionGuests.value
      && optionGuests.value != 0
      && optionRooms.value != 100)
  {
    return true;
  }
  if (optionRooms.value == 100 && optionGuests.value == 0) {
    return true;
  }
  /*eslint-enable */
  return false;

}, 'Количество комнат некорректно по отношению к количеству гостей');

// console.log(roomsArray);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

disableForms();
enableForms();

export {disableForms};
export {enableForms};
export {adForm};

