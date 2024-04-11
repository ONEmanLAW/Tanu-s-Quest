let enemy;
let enemyImage;
let pointA;
let pointB;
let speed = 2;
let xEnemy = 14 * worldForetTileSize;
let yEnemy = 10.20 * worldForetTileSize;
let wEnemy = 64; // Largeur de l'ennemi
let hEnemy = 64; // Hauteur de l'ennemi
let directionEnnemy = 1;


function moveEnemy() {
  xEnemy += speed * directionEnnemy;
  
  if ((directionEnnemy === 1 && xEnemy >= pointB.x) || (directionEnnemy === -1 && xEnemy <= pointA.x)) {
    directionEnnemy *= -1;
  }
}

function checkEnemyCollision() {
  // Vérifier la collision entre le héros et l'ennemi
  if (rectIsInRect(xHero, yHero, wHero, hHero, xEnemy, yEnemy, wEnemy, hEnemy)) {
    // Si la collision se produit, perdre une vie
    loseHeart();
  }
}

function spawnEnemyAndPatrol() {
  enemy = createVector(14 * worldForetTileSize, 10.20 * worldForetTileSize); 
  pointA = createVector(9 * worldForetTileSize); 
  pointB = createVector(14 * worldForetTileSize);
}

function preloadEnemyImages() {
  enemyImage = loadImage('characters/enemy/gobelin1.png');
}


