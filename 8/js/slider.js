import {OBJECTS_TYPES_PRICE} from './data.js';
import {priceField} from './form.js';
import {type} from './form.js';
// import {sliderMin} from './form.js';
import {priceValueCallBack} from './form.js';

const slider = document.querySelector('.ad-form__slider');

noUiSlider.create(slider, {
  start: Number(OBJECTS_TYPES_PRICE[type.value].price),
  connect: true,
  range: {
    'min': 0,
    'max': 100000
  },
  step: 100,
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

slider.noUiSlider.on('update', (values) => {
  priceField.value = values;
});

type.addEventListener('change', () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: priceValueCallBack(),
      max: 100000,
    },
    start: priceValueCallBack(),
    step: 1
  });
});

priceField.addEventListener('change', () => {
  slider.noUiSlider.set(priceField.value);
});
