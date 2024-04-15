let cadreVide;
let imageEpee1;
let imageEpee2;

function preloadHudImages() {
  cadreVide = loadImage('hud/cadreVide.png');
  imageEpee1 = loadImage('hud/imageEpee.png');
  imageEpee2 = loadImage('hud/imageEpee2.png');
}

function drawHud() {
  push(); 
  translate(cameraX, cameraY);

  image(cadreVide, 1100, 50, 600, 150);
  image(imageEpee2, 1114, 60, 100, 100);
  
  pop();
}