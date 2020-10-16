const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// creating a map
var map = L.map("mapid", options).setView([-23.0019223, -44.3011119], 15.25);

// creating a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// creating an icon
const icon = L.icon({
  iconUrl: "../images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// creating and adding marker
L.marker([-23.0019223, -44.3011119], { icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  // removendo classes active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => button.classList.remove("active"));

  // selecionando a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizando imagem maior
  imageContainer.src = image.src;

  // setando o novo botão active
  button.classList.add("active");
}
