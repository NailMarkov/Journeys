const {L} = window;

export const initMap = () => {
  const mapElement = document.querySelector('[data-map]');

  if (!mapElement) {
    return;
  }

  const mapOptions = {
    scrollWheelZoom: false,
    center: [55.823420, 37.623996],
    zoom: 13,
  };

  const iconOptions = L.icon({
    iconUrl: 'img/svg/map-pin.svg',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
  });

  const map = new L.Map(mapElement, mapOptions);

  L.marker([55.816654, 37.636922], {
    icon: iconOptions,
  }).addTo(map);

  L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    minZoom: 10,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);

  mapElement.querySelector('.leaflet-control-attribution').style.visibility = 'hidden';
  mapElement.querySelector('.leaflet-control-zoom').style.visibility = 'hidden';
};
