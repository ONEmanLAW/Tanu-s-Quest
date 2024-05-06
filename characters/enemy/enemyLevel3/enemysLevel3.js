let enemies3 = [];
let enemy3Image;
let speedEnemy3 = 3;
let wEnemy3 = 64; 
let hEnemy3 = 64;
let chaseSpeed = 4; 
let chaseRange = 300;

const livesGobelin3 = 3; 


function preloadEnemy3Image() {
  enemy3Image = loadImage('characters/enemy/gobelin3.png');
}


function createEnemiesForet3() {
  enemies3.push({
    position: createVector(15 * worldForetTileSize, 6 * worldForetTileSize), 
    detected: false,
    origin: createVector(15 * worldForetTileSize, 6 * worldForetTileSize),
    distanceToOrigin: 0,
    lives : livesGobelin3 
  });

  enemies3.push({
    position: createVector(20 * worldForetTileSize, 8 * worldForetTileSize), 
    detected: false,
    origin: createVector(20 * worldForetTileSize, 8 * worldForetTileSize),
    distanceToOrigin: 0,
    lives : livesGobelin3  
  });
  // Add More Ennemies.
}

function resetEnemies3Position() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    // Réinitialise la position de l'ennemi à sa position initiale
    enemy3.position.x = enemy3.origin.x;
    enemy3.position.y = enemy3.origin.y;
    // Réinitialise les autres propriétés si nécessaire
    enemy3.detected = false;
    enemy3.distanceToOrigin = 0;
    enemy3.lives = livesGobelin3;
  }
}

function moveEnemies3() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    if (enemy3.detected) {
      let angle = atan2(yHero - enemy3.position.y, xHero - enemy3.position.x);
      enemy3.position.x += cos(angle) * chaseSpeed;
      enemy3.position.y += sin(angle) * chaseSpeed;
    } else {
      // Mettez à jour la distance à l'origine pour chaque ennemi
      enemy3.distanceToOrigin = dist(enemy3.position.x, enemy3.position.y, enemy3.origin.x, enemy3.origin.y);
      if (enemy3.distanceToOrigin > 1) {
        let angle = atan2(enemy3.origin.y - enemy3.position.y, enemy3.origin.x - enemy3.position.x);
        enemy3.position.x += cos(angle) * speedEnemy3;
        enemy3.position.y += sin(angle) * speedEnemy3;
      }
    }
  }
}


function drawEnemies3() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    image(enemy3Image, enemy3.position.x, enemy3.position.y, wEnemy3, hEnemy3);
  }
}


function checkEnemy3Collision() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    let attackCenterX = (lastHorizontalDirection === 'right') ? xHero + wHero / 2 + worldForetTileSize / 4 : xHero - wHero / 2 - worldForetTileSize / 4;

    if (isAttacking && abs(attackCenterX - enemy3.position.x) < wHero / 2 + wEnemy3 / 2) {
      if (!enemy3.isHit) {
        enemy3.isHit = true;
        enemy3.lives--;
        isAttacking = false;
      }
    } else {
      enemy3.isHit = false;
      if (!isAttacking && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < wHero / 2 + wEnemy3 / 2) {
        loseHeart();
      }
    }

    // Si l'ennemi n'a plus de vie, le supprimer
    if (enemy3.lives <= 0) {
      enemies3.splice(i, 1);
    }
  }
}



function detectPlayer3() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    if (!enemy3.detected && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < chaseRange) {
      enemy3.detected = true;
    } else if (gameOver) {
      enemy3.detected = false;
    }
  }
}