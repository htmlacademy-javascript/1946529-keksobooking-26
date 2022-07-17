import {enableForms} from './form.js';
import {createObject} from './cards.js';
import {bookingObjectArray} from './cards.js';
import {disableForms} from './form.js';
disableForms();

const addressField = document.querySelector('#address');
const MAX_FLOAT_COUNT = 5;
const TOKYO_LAT = 35.6895;
const TOKYO_LNG = 139.692;
const MAP_ZOOM = 14;

addressField.setAttribute('readonly', 'readonly');

const mapTokyo = L.map('map-canvas')
  .on('load', () => {
    // console.log('Карта инициализирована');
  }, enableForms())
  .setView({
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  }, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mapTokyo).bindPopup(createObject(bookingObjectArray[1]));

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

marker.addTo(mapTokyo);

marker.on('moveend', (evt) => {
  addressField.value = `${evt.target.getLatLng().lat.toFixed(MAX_FLOAT_COUNT)}, ${evt.target.getLatLng().lng.toFixed(MAX_FLOAT_COUNT)}`;
});

bookingObjectArray.forEach((object) => {
  const markerRegular = L.marker(
    object.location,
    {
      icon: pinIcon,
    },
  );
  // console.log(createObject(object));
  markerRegular.addTo(mapTokyo).bindPopup(createObject(object));
});
