const bilder = [
  "bilder/bild1.jpg",
  "bilder/bild2.jpg",
  "bilder/bild3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

function zeigeBild() {
  if (bilder.length === 0) return;
  slide.src = bilder[index];
  index = (index + 1) % bilder.length;
}

zeigeBild();
setInterval(zeigeBild, 8000);
