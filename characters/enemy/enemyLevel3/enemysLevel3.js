let enemies3 = [];
let enemies3Grotte = [];
let enemies3Boss = [];
let enemy3Image;
let speedEnemy3 = 3;
let wEnemy3 = 80; 
let hEnemy3 = 80;
let chaseSpeed = 3; 
let chaseRange = 250;

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
    position: createVector(130 * worldForetTileSize, 10 * worldForetTileSize), 
    detected: false,
    origin: createVector(130 * worldForetTileSize, 10 * worldForetTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin3,
    direction: 'left'
  });

}

function createEnemiesGrotte3() {
  enemies3Grotte.push({
    position: createVector(157 * worldGrotteTileSize, 11 * worldGrotteTileSize), 
    detected: false,
    origin: createVector(157 * worldGrotteTileSize, 11 * worldGrotteTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin3,
    direction: 'left'
  });

  enemies3Grotte.push({
    position: createVector(120 * worldGrotteTileSize, 11 * worldGrotteTileSize), 
    detected: false,
    origin: createVector(120 * worldGrotteTileSize, 11 * worldGrotteTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin3,
    direction: 'left'
  });

  enemies3Grotte.push({
    position: createVector(59 * worldGrotteTileSize, 10 * worldGrotteTileSize), 
    detected: false,
    origin: createVector(59 * worldGrotteTileSize, 10 * worldGrotteTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin3,
    direction: 'left'
  });
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

function resetEnemies3PositionGrotte() {
  for (let i = 0; i < enemies3Grotte.length; i++) {
    let enemy3 = enemies3Grotte[i];
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

function updateAnimationState3Grotte() {
  for (let i = 0; i < enemies3Grotte.length; i++) {
    let enemy3 = enemies3Grotte[i];
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

function moveEnemies3Grotte() {
  for (let i = 0; i < enemies3Grotte.length; i++) {
    let enemy3 = enemies3Grotte[i];
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

function drawEnemies3Grotte() {
  frameIndex3 = floor(frameCount * animationSpeed3) % currentAnimation3.length;

  for (let i = 0; i < enemies3Grotte.length; i++) {
    let enemy3 = enemies3Grotte[i];
    image(currentAnimation3[frameIndex3], enemy3.position.x, enemy3.position.y, wEnemy3, hEnemy3);
  }
}


let enemy3RecoilDistance = 100;
let enemy3RecoilDuration = 0.5;

function checkEnemy3Collision() {
  for (let i = 0; i < enemies3.length; i++) {
    let enemy3 = enemies3[i];
    if (isAttacking && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < wHero / 2 + wEnemy3 / 2) {
      if (!enemy3.isHit) {
        enemy3.isHit = true;

        let damage = newSword ? 2 : 1;
        enemy3.lives -= damage;

        let direction = xHero > enemy3.position.x ? -1 : 1;

        let targetX = enemy3.position.x + direction * enemy3RecoilDistance;

        let startTime = Date.now();
        let endTime = startTime + enemy3RecoilDuration * 1000;

        function animateRecoil() {
          let now = Date.now();
          let progress = (now - startTime) / (endTime - startTime);
          if (progress < 1) {
            enemy3.position.x = enemy3.position.x + (targetX - enemy3.position.x) * progress;
            requestAnimationFrame(animateRecoil);
          } else {
            enemy3.position.x = targetX;
          }
        }

        animateRecoil();

        setTimeout(() => {
          isAttacking = false;
        }, attackDuration);
      }
    } else {
      enemy3.isHit = false;
      if (!isAttacking && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < wHero / 2 + wEnemy3 / 2) {
        loseHeart();
      }
    }
    if (enemy3.lives <= 0) {
      enemies3.splice(i, 1);
      i--; 
    }
  }
}

function checkEnemy3CollisionGrotte() {
  for (let i = 0; i < enemies3Grotte.length; i++) {
    let enemy3 = enemies3Grotte[i];
    if (isAttacking && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < wHero / 2 + wEnemy3 / 2) {
      if (!enemy3.isHit) {
        enemy3.isHit = true;

        let damage = newSword ? 2 : 1;
        enemy3.lives -= damage;

        let direction = xHero > enemy3.position.x ? -1 : 1;

        let targetX = enemy3.position.x + direction * enemy3RecoilDistance;

        let startTime = Date.now();
        let endTime = startTime + enemy3RecoilDuration * 1000; 

        function animateRecoil() {
          let now = Date.now();
          let progress = (now - startTime) / (endTime - startTime);
          if (progress < 1) {
            enemy3.position.x = enemy3.position.x + (targetX - enemy3.position.x) * progress;
            requestAnimationFrame(animateRecoil);
          } else {
            enemy3.position.x = targetX;
          }
        }

        animateRecoil();

        
        setTimeout(() => {
          isAttacking = false;
        }, attackDuration);
      }
    } else {
      enemy3.isHit = false;
      if (!isAttacking && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < wHero / 2 + wEnemy3 / 2) {
        loseHeart();
      }
    }
    if (enemy3.lives <= 0) {
      enemies3Grotte.splice(i, 1);
      i--; 
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

function detectPlayer3Grotte() {
  for (let i = 0; i < enemies3Grotte.length; i++) {
    let enemy3 = enemies3Grotte[i];
    if (!enemy3.detected && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < chaseRange) {
      enemy3.detected = true;
    } else if (gameOver) {
      enemy3.detected = false;
    }
  }
}






















function spawnEnemyAtSpecificTime3(numEnemies, phase) {
  let enemies3Boss = [];

  for (let i = 0; i < numEnemies; i++) {
    let enemy3 = {
    position: createVector(0, 0), 
    detected: false,
    origin: createVector(0, 0),
    distanceToOrigin: 0,
    lives: livesGobelin3,
    direction: 'right'
    };

    switch (phase) {
      case 1:
        enemy3.position.x = (5 + i * 2) * worldBossTileSize;
        enemy3.position.y = (8 + i * 2) * worldBossTileSize;
        enemy3.origin.x = (5 + i * 2) * worldBossTileSize; 
        enemy3.origin.y = (8 + i * 2) * worldBossTileSize;
        enemy3.direction = 'right';
        break;
      case 2:
        enemy3.position.x = (5 + i * 2) * worldBossTileSize;
        enemy3.position.y = (8) * worldBossTileSize;
        enemy3.origin.x = (5 + i * 2) * worldBossTileSize; 
        enemy3.origin.y = (8) * worldBossTileSize;
        enemy3.direction = 'right';

        break;
      case 3:
        enemy3.position.x = (8 + i * 2) * worldBossTileSize; 
        enemy3.position.y = (4 + i * 2) * worldBossTileSize; 
        enemy3.origin.x = (8 + i * 2) * worldBossTileSize;
        enemy3.origin.y = (4 + i * 2) * worldBossTileSize; 
        break;
    }

    enemies3Boss.push(enemy3);
  }

  return enemies3Boss;
}


function resetEnemies3PositionBoss() {
  for (let i = 0; i < enemies3Boss.length; i++) {
    let enemy3 = enemies3Boss[i];
    enemy3.position.x = enemy3.origin.x;
    enemy3.position.y = enemy3.origin.y;
    enemy3.detected = false;
    enemy3.distanceToOrigin = 0;
    enemy3.lives = livesGobelin3;
    enemy3.frameIndex = 0;
    enemy3.direction = 'left';
  }
}


function updateAnimationState3Boss() {
  for (let i = 0; i < enemies3Boss.length; i++) {
    let enemy3 = enemies3Boss[i];
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

function moveEnemies3Boss() {
  for (let i = 0; i < enemies3Boss.length; i++) {
    let enemy3 = enemies3Boss[i];
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


function drawEnemies3Boss() {
  frameIndex3 = floor(frameCount * animationSpeed3) % currentAnimation3.length;

  for (let i = 0; i < enemies3Boss.length; i++) {
    let enemy3 = enemies3Boss[i];
    image(currentAnimation3[frameIndex3], enemy3.position.x, enemy3.position.y, 96, 96); 
  }
}


function checkEnemy3CollisionBoss() {
  for (let i = 0; i < enemies3Boss.length; i++) {
    let enemy3 = enemies3Boss[i];
    if (isAttacking && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < wHero / 2 + wEnemy3 / 2) {
      if (!enemy3.isHit) {
        enemy3.isHit = true;

        let damage = newSword ? 2 : 1;
        enemy3.lives -= damage;

        let direction = xHero > enemy3.position.x ? -1 : 1;

        let targetX = enemy3.position.x + direction * enemy3RecoilDistance;

        let startTime = Date.now();
        let endTime = startTime + enemy3RecoilDuration * 1000;

        function animateRecoil() {
          let now = Date.now();
          let progress = (now - startTime) / (endTime - startTime);
          if (progress < 1) {
            enemy3.position.x = enemy3.position.x + (targetX - enemy3.position.x) * progress;
            requestAnimationFrame(animateRecoil);
          } else {
            enemy3.position.x = targetX;
          }
        }

        animateRecoil();

        setTimeout(() => {
          isAttacking = false;
        }, attackDuration);
      }
    } else {
      enemy3.isHit = false;
      if (!isAttacking && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < wHero / 2 + wEnemy3 / 2) {
        loseHeart();
      }
    }
    if (enemy3.lives <= 0) {
      enemies3Boss.splice(i, 1);
      i--;
    }
  }
}


function detectPlayer3Boss() {
  for (let i = 0; i < enemies3Boss.length; i++) {
    let enemy3 = enemies3Boss[i];
    if (!enemy3.detected && dist(xHero, yHero, enemy3.position.x, enemy3.position.y) < chaseRange) {
      enemy3.detected = true;
    } else if (gameOver) {
      enemy3.detected = false;
    }
  }
}

function goblinsAreDefeated3(phase) {
  for (let i = 0; i < enemies3Boss.length; i++) {
    let enemy3 = enemies3Boss[i];
    if (enemy3.phase === phase && enemy3.lives > 0) {
      return false;
    }
  }
  return true;
}