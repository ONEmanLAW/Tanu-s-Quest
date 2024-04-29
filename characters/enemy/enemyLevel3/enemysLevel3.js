let enemies3 = [];
let enemy3Image;
let speedEnemy3 = 3;
let wEnemy3 = 64; 
let hEnemy3 = 64;
let chaseSpeed = 4; 
let chaseRange = 300; 


function preloadEnemy3Image() {
  enemy3Image = loadImage('characters/enemy/gobelin3.png');
}


function createEnemies3() {
  enemies3.push({
    position: createVector(15 * worldForetTileSize, 6 * worldForetTileSize), 
    detected: false 
  });

  enemies3.push({
    position: createVector(20 * worldForetTileSize, 8 * worldForetTileSize), 
    detected: false 
  });

  // Add More Ennemies.
}

function moveEnemies3() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    if (enemy3.detected) {
      let angle = atan2(yHero - enemy3.position.y, xHero - enemy3.position.x);
      enemy3.position.x += cos(angle) * chaseSpeed;
      enemy3.position.y += sin(angle) * chaseSpeed;
    } else {
      let distanceToOrigin = dist(enemy3.position.x, enemy3.position.y, 15 * worldForetTileSize, 6 * worldForetTileSize);
      if (distanceToOrigin > 1) {
        let angle = atan2(6 * worldForetTileSize - enemy3.position.y, 15 * worldForetTileSize - enemy3.position.x);
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
    if (dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < wHero / 2 + wEnemy3 / 2) {
      loseHeart();
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