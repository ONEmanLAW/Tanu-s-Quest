let enemy2;
let enemy2Image;
let xEnemy2 = 7 * worldForetTileSize;
let yEnemy2 = 6 * worldForetTileSize;
let wEnemy2 = 64; 
let hEnemy2 = 64; 
let speedEnemy2 = 3;
let chargeRadius = 350; 
let charging = false; 

function moveEnemy2() {
  if (charging) {
    
    let angle = atan2(yHero - yEnemy2, xHero - xEnemy2);
    xEnemy2 += cos(angle) * speedEnemy2;
    yEnemy2 += sin(angle) * speedEnemy2;
  } else {
    
    let distanceToOrigin = dist(xEnemy2, yEnemy2, 7 * worldForetTileSize, 6 * worldForetTileSize);
    if (distanceToOrigin > 1) {
      let angle = atan2(6 * worldForetTileSize - yEnemy2, 7 * worldForetTileSize - xEnemy2);
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

function detectPlayer2() {
  
  if (dist(xHero, yHero, xEnemy2, yEnemy2) < chargeRadius) {
    charging = true;
  } else {
    charging = false;
  }
}

function spawnEnemy2() {
  enemy2 = createVector(10 * worldForetTileSize, 3 * worldForetTileSize);
}

function preloadEnemy2Images() {
  enemy2Image = loadImage('characters/enemy/gobelin2.png');
}