let enemies3 = [];
let enemy3Image;
let speedEnemy3 = 3;
let wEnemy3 = 80; 
let hEnemy3 = 80;
let chaseSpeed = 4; 
let chaseRange = 300;

const livesGobelin3 = 3; 

let numFramesIdle3 = 12;
let numFramesAttack3 = 12;
let enemy3IdleLeftImages = [];
let enemy3IdleRightImages = [];
let enemy3AttackLeftImages = [];
let enemy3AttackRightImages = [];
let currentAnimation3 = [];

function preloadEnemy3Animations() {
  for (let i = 1; i <= numFramesIdle3; i++) {
    let imagePathLeft = 'characters/enemy/enemyLevel3/assets/myIdleEnemy3Left/gobelin3_idle_gauche' + i + '.png';
    let imagePathRight = 'characters/enemy/enemyLevel3/assets/myIdleEnemy3Right/gobelin3_idle_droite' + i + '.png';
    let imageLeft = loadImage(imagePathLeft);
    let imageRight = loadImage(imagePathRight);
    enemy3IdleLeftImages.push(imageLeft);
    enemy3IdleRightImages.push(imageRight);
  }

  for (let i = 1; i <= numFramesAttack3; i++) {
    let imagePathLeft = 'characters/enemy/enemyLevel3/assets/myAnimationEnemy3Left/marche_gauche_gobelin3_' + i + '.png';
    let imagePathRight = 'characters/enemy/enemyLevel3/assets/myAnimationEnemy3Right/marche_droite_gobelin3_' + i + '.png';
    let imageLeft = loadImage(imagePathLeft);
    let imageRight = loadImage(imagePathRight);
    enemy3AttackLeftImages.push(imageLeft);
    enemy3AttackRightImages.push(imageRight);
  }
}

function createEnemiesForet3() {
  enemies3.push({
    position: createVector(15 * worldForetTileSize, 6 * worldForetTileSize), 
    detected: false,
    origin: createVector(15 * worldForetTileSize, 6 * worldForetTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin3,
    direction: 'left'
  });

  enemies3.push({
    position: createVector(20 * worldForetTileSize, 8 * worldForetTileSize), 
    detected: false,
    origin: createVector(20 * worldForetTileSize, 8 * worldForetTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin3,
    direction: 'left'
  });

  // Ajouter plus d'ennemis avec leurs positions respectives et autres propriétés si nécessaire
}

function resetEnemies3Position() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    enemy3.position.x = enemy3.origin.x;
    enemy3.position.y = enemy3.origin.y;
    enemy3.detected = false;
    enemy3.distanceToOrigin = 0;
    enemy3.lives = livesGobelin3;
    enemy3.frameIndex = 0;
    enemy3.direction = 'left';
  }
}

function updateAnimationState3() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    if (enemy3.detected) {
      if (xHero < enemy3.position.x) {
        currentAnimation3 = enemy3AttackLeftImages;
      } else {
        currentAnimation3 = enemy3AttackRightImages;
      }
    } else {
      if (enemy3.direction === 'left') {
        currentAnimation3 = enemy3IdleLeftImages;
      } else {
        currentAnimation3 = enemy3IdleRightImages;
      }
    }
  }
}

function moveEnemies3() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    if (enemy3.detected) {
      let angle = atan2(yHero - enemy3.position.y, xHero - enemy3.position.x);
      enemy3.position.x += cos(angle) * chaseSpeed;
      enemy3.position.y += sin(angle) * chaseSpeed;
      
      if (xHero < enemy3.position.x) {
        enemy3.direction = 'left';
      } else {
        enemy3.direction = 'right';
      }
    } else {
      let distanceToOrigin = dist(enemy3.position.x, enemy3.position.y, enemy3.origin.x, enemy3.origin.y);
      enemy3.distanceToOrigin = distanceToOrigin;
      if (distanceToOrigin > 1) {
        let angle = atan2(enemy3.origin.y - enemy3.position.y, enemy3.origin.x - enemy3.position.x);
        enemy3.position.x += cos(angle) * speedEnemy3;
        enemy3.position.y += sin(angle) * speedEnemy3;
      }
    }
    enemy3.frameIndex++;
    if (enemy3.frameIndex >= currentAnimation3.length) {
      enemy3.frameIndex = 0;
    }
  }
}

let animationSpeed3 = 0.5;
let frameIndex3 = 0;

function drawEnemies3() {
  frameIndex3 = floor(frameCount * animationSpeed3) % currentAnimation3.length;

  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    image(currentAnimation3[frameIndex3], enemy3.position.x, enemy3.position.y, wEnemy3, hEnemy3);
  }
}

function checkEnemy3Collision() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    if (isAttacking && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < wHero / 2 + wEnemy3 / 2) {
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
