let enemy;
let enemyImage;
let pointA;
let pointB;
let speed = 2;
let xEnemy = 7 * worldTempleTileSize;
let yEnemy = 6 * worldTempleTileSize;
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
  enemy = createVector(7 * worldTempleTileSize, 6 * worldTempleTileSize); 
  pointA = createVector(7 * worldTempleTileSize); 
  pointB = createVector(10 * worldTempleTileSize);
}

function preloadEnemyImages() {
  enemyImage = loadImage('assets/hero_plateforme.png');
}



let enemy2;
let enemy2Image;
let xEnemy2 = 7 * worldTempleTileSize;
let yEnemy2 = 6 * worldTempleTileSize;
let wEnemy2 = 64; 
let hEnemy2 = 64; 
let speedEnemy2 = 3;
let chargeRadius = 150; 
let charging = false; 

function moveEnemy2() {
  if (charging) {
    
    let angle = atan2(yHero - yEnemy2, xHero - xEnemy2);
    xEnemy2 += cos(angle) * speedEnemy2;
    yEnemy2 += sin(angle) * speedEnemy2;
  } else {
    
    let distanceToOrigin = dist(xEnemy2, yEnemy2, 7 * worldTempleTileSize, 6 * worldTempleTileSize);
    if (distanceToOrigin > 1) {
      let angle = atan2(6 * worldTempleTileSize - yEnemy2, 7 * worldTempleTileSize - xEnemy2);
      xEnemy2 += cos(angle) * speedEnemy2;
      yEnemy2 += sin(angle) * speedEnemy2;
    }
  }
}

function checkEnemy2Collision() {
 
  if (dist(xHero, yHero, xEnemy2, yEnemy2) < wHero / 2 + wEnemy2 / 2) {
    loseHeart();
  }
}

function detectPlayer() {
  
  if (dist(xHero, yHero, xEnemy2, yEnemy2) < chargeRadius) {
    charging = true;
  } else {
    charging = false;
  }
}

function spawnEnemy2() {
  enemy2 = createVector(10 * worldTempleTileSize, 3 * worldTempleTileSize);
}

function preloadEnemy2Images() {
  enemy2Image = loadImage('assets/hero_plateforme.png');
}