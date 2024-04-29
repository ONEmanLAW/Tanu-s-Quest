let cageImage;
let cagePositions = [
  {x: 5 * worldForetTileSize, y: 8 * worldForetTileSize}, 
  {x: 10 * worldForetTileSize, y: 8 * worldForetTileSize},
];

let cageWidth = worldForetTileSize * 2;
let cageHeight = worldForetTileSize * 2;

let counterForet = 0;
let isForestNpcSaved = false;
let cageVisible = []; // Tableau pour indiquer si chaque cage est visible ou non


function preloadCageImage() {
  cageImage = loadImage('prisonFôret.png');
  
  for (let i = 0; i < cagePositions.length; i++) {
    cageVisible.push(true);
  }
}


function checkCageInteraction() {
  for (let i = 0; i < cagePositions.length; i++) {
    let cageXCenter = cagePositions[i].x + cageWidth / 2;
    let cageYCenter = cagePositions[i].y + cageHeight / 2;
    
    let playerXCenter = xHero + wHero / 2;
    let playerYCenter = yHero + hHero / 2;
    
    let distance = dist(playerXCenter, playerYCenter, cageXCenter, cageYCenter); 
    
    let maxDistance = cageWidth / 2 + wHero;
    
    if (distance < maxDistance && cageVisible[i]) {
      fill(255);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("Appuyez sur 't' pour libérer", width / 2, height - 50);
      
      return i; // Retourne l'indice de la cage actuelle
    }
  }
  return -1; // Aucune cage n'est proche
}


function checkForestNpcSaved() {
  translate(cameraX, cameraY);
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(counterForet + "/12", 1525, 80);
}