import L from 'leaflet';
// import sea from './sea.png';

const icon = L.Icon.extend({
    iconUrl: require('./sea.png'),
    iconRetinaUrl: require('./sea.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { icon }; 