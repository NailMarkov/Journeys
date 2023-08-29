import L from '../vendor/leaflet';

export const initMap = () => {
  const mapElement = document.querySelector('[data-map]');

  const mapOptions = {
    scrollWheelZoom: false,
    center: [55.823325, 37.625415],
    zoom: 13,
  };

  const iconOptions = L.icon({
    iconUrl: 'img/svg/map-pin.svg',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
  });

  const map = L.map(mapElement, mapOptions);

  L.marker([55.816654, 37.636922], iconOptions).addTo(map);

  L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    minZoom: 10,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);

  mapElement.querySelector('.leaflet-control-attribution').style.visibility = 'hidden';

  return map;
};
