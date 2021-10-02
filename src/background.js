const images = [
  "솜사탕_FHD.jpg","연파랑_UHD.jpg","한강.jpeg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);