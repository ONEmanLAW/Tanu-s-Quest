let enemies2 = [];
let enemy2Image;
let speedEnemy2 = 3;
let wEnemy2 = 64; 
let hEnemy2 = 64; 
let chargeRadius = 350; 
let charging = false; 

const livesGobelin2 = 3;

function preloadEnemy2Image() {
  enemy2Image = loadImage('characters/enemy/gobelin2.png');
}

function createEnemiesForet2() {
  enemies2.push({
    position: createVector(7 * worldForetTileSize, 6 * worldForetTileSize), 
    charging: false,
    origin: createVector(7 * worldForetTileSize, 6 * worldForetTileSize),
    distanceToOrigin: 0,
    lives : livesGobelin2 
  });

  enemies2.push({
    position: createVector(27 * worldForetTileSize, 6 * worldForetTileSize), 
    charging: false,
    origin: createVector(27 * worldForetTileSize, 6 * worldForetTileSize),
    distanceToOrigin: 0,
    lives : livesGobelin2
  });

  // Ajoutez plus d'ennemis avec leurs positions respectives et d'autres propriétés si nécessaire
}



function resetEnemies2Position() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    // Réinitialise la position de l'ennemi à sa position initiale
    enemy2.position.x = enemy2.origin.x;
    enemy2.position.y = enemy2.origin.y;
    // Réinitialise les autres propriétés si nécessaire
    enemy2.charging = false;
    enemy2.distanceToOrigin = 0;
    enemy2.lives = livesGobelin2;
  }
}

function moveEnemies2() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    if (enemy2.charging) {
      let angle = atan2(yHero - enemy2.position.y, xHero - enemy2.position.x);
      enemy2.position.x += cos(angle) * speedEnemy2;
      enemy2.position.y += sin(angle) * speedEnemy2;
    } else {
      let distanceToOrigin = dist(enemy2.position.x, enemy2.position.y, enemy2.origin.x, enemy2.origin.y);
      enemy2.distanceToOrigin = distanceToOrigin;
      if (distanceToOrigin > 1) {
        let angle = atan2(enemy2.origin.y - enemy2.position.y, enemy2.origin.x - enemy2.position.x);
        enemy2.position.x += cos(angle) * speedEnemy2;
        enemy2.position.y += sin(angle) * speedEnemy2;
      }
    }
  }
}

function drawEnemies2() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    image(enemy2Image, enemy2.position.x, enemy2.position.y, wEnemy2, hEnemy2);
  }
}

function checkEnemy2Collision() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    if (isAttacking && dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < wHero / 2 + wEnemy2 / 2) {
      if (!enemy2.isHit) {
        enemy2.isHit = true;
        enemy2.lives--;
        isAttacking = false;

       
      }
    } else {
      enemy2.isHit = false;

      if (!isAttacking && dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < wHero / 2 + wEnemy2 / 2) {
        loseHeart();
      }
    }

    // Si l'ennemi n'a plus de vie, le supprimer
    if (enemy2.lives <= 0) {
      enemies2.splice(i, 1);
    }
  }
}



function detectPlayer2() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    if (dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < chargeRadius) {
      enemy2.charging = true;
    } else {
      enemy2.charging = false;
    }
  }
}
