// creating a map
var map = L.map("mapid").setView([-23.0019223, -44.3011119], 15.25);

// creating a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// creating an icon
const icon = L.icon({
  iconUrl: "../images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function setMarker({ id, name, lat, lng }) {
  // creating popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}" class="choose-orphanage"> <img src="../images/arrow-white.svg" /> </a>`
  );

  // creating and adding marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll("#orphanages-container span");

orphanagesSpan.forEach(span => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }

  setMarker(orphanage);
})