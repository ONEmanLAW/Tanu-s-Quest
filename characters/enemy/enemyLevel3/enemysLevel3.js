let enemy3;
let enemy3Image;
let xEnemy3 = 15 * worldForetTileSize;
let yEnemy3 = 6 * worldForetTileSize;
let wEnemy3 = 64; 
let hEnemy3 = 64; 
let speedEnemy3 = 3;
let chaseSpeed = 4; // Vitesse à laquelle l'ennemi poursuit le joueur
let chaseRange = 300; // Rayon de poursuite
let detected = false;


function moveEnemy3() {
  if (detected) {
    let angle = atan2(yHero - yEnemy3, xHero - xEnemy3);
    xEnemy3 += cos(angle) * chaseSpeed;
    yEnemy3 += sin(angle) * chaseSpeed;
  } else {
    let distanceToOrigin = dist(xEnemy3, yEnemy3, 15 * worldForetTileSize, 6 * worldForetTileSize);
    if (distanceToOrigin > 1) {
      let angle = atan2(6 * worldForetTileSize - yEnemy3, 15 * worldForetTileSize - xEnemy3);
      xEnemy3 += cos(angle) * speedEnemy3;
      yEnemy3 += sin(angle) * speedEnemy3;
    }
  }
}

function checkEnemy3Collision() {
  if (dist(xHero, yHero, xEnemy3, yEnemy3) < wHero / 2 + wEnemy3 / 2) {
    loseHeart();
  }
}

function detectPlayer3() {
  if (!detected && dist(xHero, yHero, xEnemy3, yEnemy3) < chaseRange) {
    detected = true;
  } else if(gameOver) {
    detected = false;
  }
}

function spawnEnemy3() {
  xEnemy3 = 15 * worldForetTileSize;
  yEnemy3 = 6 * worldForetTileSize;
}

function preloadEnemy3Images() {
  enemy3Image = loadImage('characters/enemy/gobelin3.png');
}
