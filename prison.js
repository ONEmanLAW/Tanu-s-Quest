let cageImage;

let cageX = 5 * worldForetTileSize; 
let cageY = 8 * worldForetTileSize; 
let cageWidth = worldForetTileSize * 2; 
let cageHeight= worldForetTileSize * 2; 

let counterForet = 0;
let isForestNpcSaved = false;
let cageVisible = true;

function checkCageInteraction() {
  let cageXCenter = cageX + cageWidth / 2;
  let cageYCenter = cageY + cageHeight / 2;
  
  let playerXCenter = xHero + wHero / 2; // Centre du personnage
  let playerYCenter = yHero + hHero / 2;
  
  let distance = dist(playerXCenter, playerYCenter, cageXCenter, cageYCenter); 
  
  let maxDistance = cageWidth / 2 + wHero; // La distance maximale que vous voulez
  
  if (distance < maxDistance && cageVisible) {
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Appuyez sur 't' pour libérer", width / 2, height - 50);

    // Vérifier si le compteur est à 12
    if (counterForet === 12) {
      isForestNpcSaved = true; // Passer à true si le compteur est à 12
    } 
    return true;
  }
  return false;
}



function preloadCageImage() {
  cageImage = loadImage('prisonFôret.png');
}


function checkForestNpcSaved() {
  translate(cameraX, cameraY);
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(counterForet + "/12", 1525, 80);
}