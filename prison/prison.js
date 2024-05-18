function displayTotalTanukisSaved() {
  translate(cameraX, cameraY);
  fill(255);
  textSize(27);
  textAlign(CENTER, CENTER);
  text("0/25", 1525, 80);
}

function displayTotalTanukisSaved2() {
  translate(cameraX, cameraY);
  fill(255);
  textSize(27);
  textAlign(CENTER, CENTER);
  text("9/25", 1525, 80);
}

function displayTotalTanukisSaved3() {
  translate(cameraX, cameraY);
  fill(255);
  textSize(27);
  textAlign(CENTER, CENTER);
  text("18/25", 1525, 80);
}


/////////////////////////////////////////////
/////////////////CAGE FORET//////////////////
/////////////////////////////////////////////

let cageImage;
let tImage;
let cagePositions = [
  {x: 28.40 * worldForetTileSize, y: 8.30 * worldForetTileSize}, 
  {x: 132.40 * worldForetTileSize, y: 3.30 * worldForetTileSize},
  {x: 197.40 * worldForetTileSize, y: 5.30 * worldForetTileSize},
];

let cageWidth = worldForetTileSize * 1.60;
let cageHeight = worldForetTileSize * 1.70;

let counterForet = 0;
let isForestNpcSaved = false;
let cageVisible = [];


function preloadCageImage() {
  cageImage = loadImage('prison/prisonFôret.gif');
  tImage = loadImage('prison/Tcage.png'); // Charger l'image contenant un "T"
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
      image(cageImage, cagePositions[i].x, cagePositions[i].y, cageWidth, cageHeight);
      
      
      let tImageWidth = 34; 
      let tImageHeight = 34; 
      
      let tImageX = cagePositions[i].x + cageWidth / 2 - tImageWidth / 2;
      let tImageY = cagePositions[i].y + cageHeight - 10; 
      image(tImage, tImageX, tImageY, tImageWidth, tImageHeight);
      
      return i; 
    }
  }
  return -1;
}

function checkForestNpcSaved() {
  translate(cameraX, cameraY);
  fill(255);
  textSize(27);
  textAlign(CENTER, CENTER);
  text(counterForet + "/9", 1525, 80);
}


/////////////////////////////////////////////
////////////////CAGE GROTTE//////////////////
/////////////////////////////////////////////


let cageImageGrotte;
let cagePositionsGrotte = [
  {x: 38 * worldGrotteTileSize, y: 6.30 * worldGrotteTileSize}, 
  {x: 87 * worldGrotteTileSize, y: 6.30 * worldGrotteTileSize},
  {x: 182 * worldGrotteTileSize, y: 10.30 * worldGrotteTileSize},
];

let cageWidthGrotte = worldGrotteTileSize * 1.60;
let cageHeightGrotte = worldGrotteTileSize * 1.70;

let counterGrotte = 0;
let isGrottetNpcSaved = false;
let cageVisibleGrotte = [];


function preloadCageImageGrotte() {
  cageImageGrotte = loadImage('prison/prisonGrotte.gif');

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
  textSize(27);
  textAlign(CENTER, CENTER);
  text(counterGrotte + "/9", 1525, 80);
}