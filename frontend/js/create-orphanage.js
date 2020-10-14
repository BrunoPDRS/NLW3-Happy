// creating a map
var map = L.map("mapid").setView([-23.0019223, -44.3011119], 15.25);

// creating a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// creating an icon
const icon = L.icon({
  iconUrl: "../images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// create and add marker
let marker;

map.on("click", (event) => {
  const { lat, lng } = event.latlng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // removing all existing markings
  marker && map.removeLayer(marker);
  // adding marker to map
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Add more photos
function addPhotoField() {
  // getting #images container
  const container = document.getElementById("images");
  // getting to dupe container (.new-image)
  const toDupe = document.querySelectorAll(".new-upload");
  // duping .new-image container
  const newToDupe = toDupe[toDupe.length - 1].cloneNode(true);
  // checking empty field
  if (!newToDupe.children[0].value) {
    return;
  }
  // emptying field
  newToDupe.children[0].value = "";
  // adding duped container to #images
  container.appendChild(newToDupe);
}

function deletePhotoField(event) {
  // getting origin of click
  const span = event.currentTarget;

  const containers = document.querySelectorAll(".new-upload");

  if (containers.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }
  // deleting the field
  span.parentNode.remove();
}

// selecting yes or no
function toggleSelect(event) {
  // removing .active from buttons
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  // getting clicked button
  const button = event.currentTarget;
  // adding .active to clicked
  button.classList.add("active");
  // updating hidden input of selected value
  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}
