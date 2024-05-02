let cageImage;
let cagePositions = [
  {x: 28.40 * worldForetTileSize, y: 8.30 * worldForetTileSize}, 
  {x: 132.40 * worldForetTileSize, y: 3.30 * worldForetTileSize},
  {x: 197.40 * worldForetTileSize, y: 1.30 * worldForetTileSize},
];



let cageWidth = worldForetTileSize * 1.60;
let cageHeight = worldForetTileSize * 1.70;

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
      
      // Afficher le texte à côté de la cage en question
      text("Appuyez sur 't' pour libérer", cagePositions[i].x + cageWidth / 2, cagePositions[i].y + cageHeight + 20);
      
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










let cageImageGrotte;
let cagePositionsGrotte = [
  {x: 5 * worldGrotteTileSize, y: 8 * worldGrotteTileSize}, 
  {x: 8 * worldGrotteTileSize, y: 8 * worldGrotteTileSize},
  {x: 10 * worldGrotteTileSize, y: 8 * worldGrotteTileSize},
];

let cageWidthGrotte = worldGrotteTileSize * 1.60;
let cageHeightGrotte = worldGrotteTileSize * 1.70;
let counterGrotte = 0;
let isGrottetNpcSaved = false;
let cageVisibleGrotte = [];

function preloadCageImageGrotte() {
  cageImageGrotte = loadImage('prisonGrotte.png');

  for (let i = 0; i < cagePositionsGrotte.length; i++) {
    cageVisibleGrotte.push(true);
  }
}

function checkCageInteractionGrotte() {
  for (let i = 0; i < cagePositionsGrotte.length; i++) {
    let cageXCenter = cagePositionsGrotte[i].x + cageWidthGrotte / 2;
    let cageYCenter = cagePositionsGrotte[i].y + cageHeightGrotte / 2;
    
    let playerXCenter = xHero + wHero / 2;
    let playerYCenter = yHero + hHero / 2;
    
    let distance = dist(playerXCenter, playerYCenter, cageXCenter, cageYCenter); 
    
    let maxDistance = cageWidthGrotte / 2 + wHero;
    
    if (distance < maxDistance && cageVisibleGrotte[i]) {
      fill(255);
      textSize(20);
      textAlign(CENTER, CENTER);
      
      // Afficher le texte à côté de la cage en question
      text("Appuyez sur 't' pour libérer", cagePositionsGrotte[i].x + cageWidthGrotte / 2, cagePositionsGrotte[i].y + cageHeightGrotte + 20);
      
      return i; // Retourne l'indice de la cage actuelle
    }
  }
  return -1; // Aucune cage n'est proche
}

function checkGrotteNpcSaved() {
  translate(cameraX, cameraY);
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(counterGrotte + "/9", 1525, 80);
}