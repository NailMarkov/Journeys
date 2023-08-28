import '../vendor/leaflet';

export const initMap = () => {
  const mapElement = document.querySelector('[data-map]');
  const mapOptions = {
    center: [55.816176, 37.636437],
    zoom: 15,
  };
  const layer = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png');

  const createMap = new L.map(mapElement, mapOptions);

  createMap.addLayer(layer);

  return createMap;
};
