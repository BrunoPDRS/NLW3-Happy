// creating a map
var map = L.map('mapid').setView([-23.0019223,-44.3011119], 15.25);

// creating a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// creating an icon
const icon = L.icon({
  iconUrl: "../images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

// creating popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="../images/arrow-white.svg" /> </a>')

// creating and adding marker
L.marker([-23.004553,-44.3130286], { icon }).addTo(map)
    .bindPopup(popup);