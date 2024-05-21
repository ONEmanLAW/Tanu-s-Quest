let enemies2 = [];
let enemies2Grotte = [];
let enemies2Boss = [];
let enemy2Image;
let speedEnemy2 = 3;
let wEnemy2 = 80; 
let hEnemy2 = 80; 
let chargeRadius = 350; 
let charging = false;

let numFramesIdle = 12;
let numFramesAttack = 12;
let enemy2IdleLeftImages = [];
let enemy2IdleRightImages = [];
let enemy2AttackLeftImages = [];
let enemy2AttackRightImages = [];
let currentAnimation = [];

const livesGobelin2 = 3;

function preloadEnemy2Animations() {
  // Charger les images d'animation pour les gobelins
  for (let i = 1; i <= numFramesIdle; i++) {
    let imagePathLeft = 'characters/enemy/enemyLevel2/assets/myIdleEnemy2Left/gobelin2_idle_gauche' + i + '.png';
    let imagePathRight = 'characters/enemy/enemyLevel2/assets/myIdleEnemy2Right/gobelin2_idle_droite' + i + '.png';
    let imageLeft = loadImage(imagePathLeft);
    let imageRight = loadImage(imagePathRight);
    enemy2IdleLeftImages.push(imageLeft);
    enemy2IdleRightImages.push(imageRight);
  }

  for (let i = 1; i <= numFramesAttack; i++) {
    let imagePathLeft = 'characters/enemy/enemyLevel2/assets/myAnimationEnemy2Left/marche_gauche_gobelin2_' + i + '.png';
    let imagePathRight = 'characters/enemy/enemyLevel2/assets/myAnimationEnemy2Right/marche_droite_gobelin2_' + i + '.png';
    let imageLeft = loadImage(imagePathLeft);
    let imageRight = loadImage(imagePathRight);
    enemy2AttackLeftImages.push(imageLeft);
    enemy2AttackRightImages.push(imageRight);
  }
}

function createEnemiesForet2() {
  enemies2.push({
    position: createVector(186 * worldForetTileSize, 10 * worldForetTileSize), 
    charging: false,
    origin: createVector(186 * worldForetTileSize, 10 * worldForetTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin2,
    direction: 'left'
  });

  enemies2.push({
    position: createVector(68 * worldForetTileSize, 11 * worldForetTileSize), 
    charging: false,
    origin: createVector(68 * worldForetTileSize, 11 * worldForetTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin2,
    direction: 'left'
  });

}

function createEnemiesGrotte2() {
  enemies2Grotte.push({
    position: createVector(80 * worldGrotteTileSize, 9 * worldGrotteTileSize), 
    charging: false,
    origin: createVector(80 * worldGrotteTileSize, 9 * worldGrotteTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin2,
    direction: 'left' 
  });

  enemies2Grotte.push({
    position: createVector(18 * worldGrotteTileSize, 11 * worldGrotteTileSize), 
    charging: false,
    origin: createVector(18 * worldGrotteTileSize, 11 * worldGrotteTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin2,
    direction: 'left' 
  });
}

function resetEnemies2Position() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    enemy2.position.x = enemy2.origin.x;
    enemy2.position.y = enemy2.origin.y;
    enemy2.charging = false;
    enemy2.distanceToOrigin = 0;
    enemy2.lives = livesGobelin2;
    enemy2.frameIndex = 0;
    enemy2.direction = 'left';
  }
}

function resetEnemies2PositionGrotte() {
  for (let i = 0; i < enemies2Grotte.length; i++) {
    let enemy2 = enemies2Grotte[i];
    enemy2.position.x = enemy2.origin.x;
    enemy2.position.y = enemy2.origin.y;
    enemy2.charging = false;
    enemy2.distanceToOrigin = 0;
    enemy2.lives = livesGobelin2;
    enemy2.frameIndex = 0;
    enemy2.direction = 'left';
  }
}

function updateAnimationState2() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    if (enemy2.charging) {
      if (xHero < enemy2.position.x) {
        currentAnimation = enemy2AttackLeftImages;
      } else {
        currentAnimation = enemy2AttackRightImages;
      }
    } else {
      if (enemy2.direction === 'left') {
        currentAnimation = enemy2IdleLeftImages;
      } else {
        currentAnimation = enemy2IdleRightImages;
      }
    }
  }
}

function updateAnimationState2Grotte() {
  for (let i = 0; i < enemies2Grotte.length; i++) {
    let enemy2 = enemies2Grotte[i];
    if (enemy2.charging) {
      if (xHero < enemy2.position.x) {
        currentAnimation = enemy2AttackLeftImages;
      } else {
        currentAnimation = enemy2AttackRightImages;
      }
    } else {
      if (enemy2.direction === 'left') {
        currentAnimation = enemy2IdleLeftImages;
      } else {
        currentAnimation = enemy2IdleRightImages;
      }
    }
  }
}

function moveEnemies2() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    if (enemy2.charging) {
      let angle = atan2(yHero - enemy2.position.y, xHero - enemy2.position.x);
      enemy2.position.x += cos(angle) * speedEnemy2;
      enemy2.position.y += sin(angle) * speedEnemy2;
      
      if (xHero < enemy2.position.x) {
        enemy2.direction = 'left';
      } else {
        enemy2.direction = 'right';
      }
    } else {
      let distanceToOrigin = dist(enemy2.position.x, enemy2.position.y, enemy2.origin.x, enemy2.origin.y);
      enemy2.distanceToOrigin = distanceToOrigin;
      if (distanceToOrigin > 1) {
        let angle = atan2(enemy2.origin.y - enemy2.position.y, enemy2.origin.x - enemy2.position.x);
        enemy2.position.x += cos(angle) * speedEnemy2;
        enemy2.position.y += sin(angle) * speedEnemy2;
      }
    }
    // Mettre à jour l'index de l'image pour l'animation
    enemy2.frameIndex++;
    if (enemy2.frameIndex >= currentAnimation.length) {
      enemy2.frameIndex = 0;
    }
  }
}

function moveEnemies2Grotte() {
  for (let i = 0; i < enemies2Grotte.length; i++) {
    let enemy2 = enemies2Grotte[i];
    if (enemy2.charging) {
      let angle = atan2(yHero - enemy2.position.y, xHero - enemy2.position.x);
      // Mettre à jour le mouvement de l'ennemi en fonction de l'angle
      enemy2.position.x += cos(angle) * speedEnemy2;
      enemy2.position.y += sin(angle) * speedEnemy2;
      
      if (xHero < enemy2.position.x) {
        enemy2.direction = 'left';
      } else {
        enemy2.direction = 'right';
      }
    } else {
      // Mettre à jour le mouvement de l'ennemi dans une autre direction (par exemple, vers son origine)
      let distanceToOrigin = dist(enemy2.position.x, enemy2.position.y, enemy2.origin.x, enemy2.origin.y);
      enemy2.distanceToOrigin = distanceToOrigin;
      if (distanceToOrigin > 1) {
        let angle = atan2(enemy2.origin.y - enemy2.position.y, enemy2.origin.x - enemy2.position.x);
        // Mettre à jour le mouvement de l'ennemi en fonction de l'angle
        enemy2.position.x += cos(angle) * speedEnemy2;
        enemy2.position.y += sin(angle) * speedEnemy2;
      }
    }
    // Mettre à jour l'index de l'image pour l'animation
    enemy2.frameIndex++;
    if (enemy2.frameIndex >= currentAnimation.length) {
      enemy2.frameIndex = 0;
    }
  }
}

let animationSpeed = 0.5; // Augmentez cette valeur pour ralentir l'animation
let frameIndex = 0;

function drawEnemies2() {
  // Calculer l'index de l'image en fonction du temps
  frameIndex = floor(frameCount * animationSpeed) % currentAnimation.length;

  // Dessiner les ennemis avec l'image actuelle
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    image(currentAnimation[frameIndex], enemy2.position.x, enemy2.position.y, wEnemy2, hEnemy2);
  }
}

function drawEnemies2Grotte() {
  // Calculer l'index de l'image en fonction du temps
  frameIndex = floor(frameCount * animationSpeed) % currentAnimation.length;

  // Dessiner les ennemis avec l'image actuelle
  for (let i = 0; i < enemies2Grotte.length; i++) {
    let enemy2 = enemies2Grotte[i];
    image(currentAnimation[frameIndex], enemy2.position.x, enemy2.position.y, wEnemy2, hEnemy2);
  }
}

// Définir une variable pour le décalage de recul des ennemis 2
let enemy2RecoilDistance = 100; // Vous pouvez ajuster cette valeur selon vos besoins
let enemy2RecoilDuration = 0.5; // Durée du recul en secondes

function checkEnemy2Collision() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    if (isAttacking && dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < wHero / 2 + wEnemy2 / 2) {
      if (!enemy2.isHit) {
        enemy2.isHit = true;

        // Déterminer les dégâts en fonction de l'arme
        let damage = newSword ? 2 : 1;
        enemy2.lives -= damage;

        // Calculer la direction du recul en fonction de la position du héros par rapport à l'ennemi 2
        let direction = xHero > enemy2.position.x ? -1 : 1;

        // Définir la cible finale du recul
        let targetX = enemy2.position.x + direction * enemy2RecoilDistance;

        // Animer le recul de l'ennemi 2
        let startTime = Date.now();
        let endTime = startTime + enemy2RecoilDuration * 1000; // Conversion en millisecondes

        function animateRecoil() {
          let now = Date.now();
          let progress = (now - startTime) / (endTime - startTime);
          if (progress < 1) {
            enemy2.position.x = enemy2.position.x + (targetX - enemy2.position.x) * progress;
            requestAnimationFrame(animateRecoil);
          } else {
            enemy2.position.x = targetX;
          }
        }

        animateRecoil();

        // Ajouter un délai avant de réinitialiser l'état d'attaque
        setTimeout(() => {
          isAttacking = false;
        }, attackDuration);
      }
    } else {
      enemy2.isHit = false;
      if (!isAttacking && dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < wHero / 2 + wEnemy2 / 2) {
        loseHeart();
      }
    }
    if (enemy2.lives <= 0) {
      enemies2.splice(i, 1);
      i--; // Ajuster l'index après la suppression
    }
  }
}

function checkEnemy2CollisionGrotte() {
  for (let i = 0; i < enemies2Grotte.length; i++) {
    let enemy2 = enemies2Grotte[i];
    if (isAttacking && dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < wHero / 2 + wEnemy2 / 2) {
      if (!enemy2.isHit) {
        enemy2.isHit = true;

        // Déterminer les dégâts en fonction de l'arme
        let damage = newSword ? 2 : 1;
        enemy2.lives -= damage;

        // Calculer la direction du recul en fonction de la position du héros par rapport à l'ennemi 2
        let direction = xHero > enemy2.position.x ? -1 : 1;

        // Définir la cible finale du recul
        let targetX = enemy2.position.x + direction * enemy2RecoilDistance;

        // Animer le recul de l'ennemi 2
        let startTime = Date.now();
        let endTime = startTime + enemy2RecoilDuration * 1000; // Conversion en millisecondes

        function animateRecoil() {
          let now = Date.now();
          let progress = (now - startTime) / (endTime - startTime);
          if (progress < 1) {
            enemy2.position.x = enemy2.position.x + (targetX - enemy2.position.x) * progress;
            requestAnimationFrame(animateRecoil);
          } else {
            enemy2.position.x = targetX;
          }
        }

        animateRecoil();

        // Ajouter un délai avant de réinitialiser l'état d'attaque
        setTimeout(() => {
          isAttacking = false;
        }, attackDuration);
      }
    } else {
      enemy2.isHit = false;
      if (!isAttacking && dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < wHero / 2 + wEnemy2 / 2) {
        loseHeart();
      }
    }
    if (enemy2.lives <= 0) {
      enemies2Grotte.splice(i, 1);
      i--; // Ajuster l'index après la suppression
    }
  }
}


function detectPlayer2() {
  // Détecter le joueur et définir l'état de charge des ennemis
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    if (dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < chargeRadius) {
      enemy2.charging = true;
    } else {
      enemy2.charging = false;
    }
  }
}

function detectPlayer2Grotte() {
  // Détecter le joueur et définir l'état de charge des ennemis
  for (let i = 0; i < enemies2Grotte.length; i++) {
    let enemy2 = enemies2Grotte[i];
    if (dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < chargeRadius) {
      enemy2.charging = true;
    } else {
      enemy2.charging = false;
    }
  }
}




















function spawnEnemyAtSpecificTime2(numEnemies, phase) {
  let enemies2Boss = [];

  for (let i = 0; i < numEnemies; i++) {
    let enemy2 = {
      position: createVector(0, 0), 
      charging: false,
      origin: createVector(0, 0),
      distanceToOrigin: 0,
      lives: livesGobelin2,
      direction: 'left'
    };

    switch (phase) {
      case 1:
        enemy2.position.x = (6 + i * 2) * worldBossTileSize;
        enemy2.position.y = (8 + i * 2) * worldBossTileSize;
        enemy2.origin.x = (6 + i * 2) * worldBossTileSize; 
        enemy2.origin.y = (8 + i * 2) * worldBossTileSize;
        enemy2.direction = 'right';
        break;
      case 2:
        enemy2.position.x = (11 + i * 2) * worldBossTileSize; 
        enemy2.position.y = (8) * worldBossTileSize; 
        enemy2.origin.x = (11+ i * 2) * worldBossTileSize; 
        enemy2.origin.y = (8) * worldBossTileSize;
        enemy2.direction = 'right';
        break;
      case 3:
        enemy2.position.x = (6 + i * 2) * worldBossTileSize; 
        enemy2.position.y = (8) * worldBossTileSize; 
        enemy2.origin.x = (6 + i * 2) * worldBossTileSize;
        enemy2.origin.y = (8) * worldBossTileSize; 
        enemy2.direction = 'right';
        break;
    }

    enemies2Boss.push(enemy2);
  }

  return enemies2Boss;
}


function resetEnemies2PositionBoss() {
  for (let i = 0; i < enemies2Boss.length; i++) {
    let enemy2 = enemies2Boss[i];
    enemy2.position.x = enemy2.origin.x;
    enemy2.position.y = enemy2.origin.y;
    enemy2.charging = false;
    enemy2.distanceToOrigin = 0;
    enemy2.lives = livesGobelin2;
    enemy2.frameIndex = 0;
    enemy2.direction = 'left';
  }
}

function updateAnimationState2Boss() {
  for (let i = 0; i < enemies2Boss.length; i++) {
    let enemy2 = enemies2Boss[i];
    if (enemy2.charging) {
      if (xHero < enemy2.position.x) {
        currentAnimation = enemy2AttackLeftImages;
      } else {
        currentAnimation = enemy2AttackRightImages;
      }
    } else {
      if (enemy2.direction === 'left') {
        currentAnimation = enemy2IdleLeftImages;
      } else {
        currentAnimation = enemy2IdleRightImages;
      }
    }
  }
}


function moveEnemies2Boss() {
  for (let i = 0; i < enemies2Boss.length; i++) {
    let enemy2 = enemies2Boss[i];
    if (enemy2.charging) {
      let angle = atan2(yHero - enemy2.position.y, xHero - enemy2.position.x);
      enemy2.position.x += cos(angle) * speedEnemy2;
      enemy2.position.y += sin(angle) * speedEnemy2;
      
      if (xHero < enemy2.position.x) {
        enemy2.direction = 'left';
      } else {
        enemy2.direction = 'right';
      }
    } else {
      let distanceToOrigin = dist(enemy2.position.x, enemy2.position.y, enemy2.origin.x, enemy2.origin.y);
      enemy2.distanceToOrigin = distanceToOrigin;
      if (distanceToOrigin > 1) {
        let angle = atan2(enemy2.origin.y - enemy2.position.y, enemy2.origin.x - enemy2.position.x);
        enemy2.position.x += cos(angle) * speedEnemy2;
        enemy2.position.y += sin(angle) * speedEnemy2;
      }
    }
    enemy2.frameIndex++;
    if (enemy2.frameIndex >= currentAnimation.length) {
      enemy2.frameIndex = 0;
    }
  }
}

function drawEnemies2Boss() {
  frameIndex = floor(frameCount * animationSpeed) % currentAnimation.length;

  for (let i = 0; i < enemies2Boss.length; i++) {
    let enemy2 = enemies2Boss[i];
    image(currentAnimation[frameIndex], enemy2.position.x, enemy2.position.y, 96, 96);
  }
}

function checkEnemy2CollisionBoss() {
  for (let i = 0; i < enemies2Boss.length; i++) {
    let enemy2 = enemies2Boss[i];
    if (isAttacking && dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < 96) { // Utiliser 96 pour la collision
      if (!enemy2.isHit) {
        enemy2.isHit = true;

        let damage = newSword ? 2 : 1;
        enemy2.lives -= damage;

        let direction = xHero > enemy2.position.x ? -1 : 1;
        let targetX = enemy2.position.x + direction * enemy2RecoilDistance;

        let startTime = Date.now();
        let endTime = startTime + enemy2RecoilDuration * 1000;

        function animateRecoil() {
          let now = Date.now();
          let progress = (now - startTime) / (endTime - startTime);
          if (progress < 1) {
            enemy2.position.x = enemy2.position.x + (targetX - enemy2.position.x) * progress;
            requestAnimationFrame(animateRecoil);
          } else {
            enemy2.position.x = targetX;
          }
        }

        animateRecoil();

        setTimeout(() => {
          isAttacking = false;
        }, attackDuration);
      }
    } else {
      enemy2.isHit = false;
      if (!isAttacking && dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < 96) { // Utiliser 96 pour la collision
        loseHeart();
      }
    }
    if (enemy2.lives <= 0) {
      enemies2Boss.splice(i, 1);
      i--;
    }
  }
}

function detectPlayer2Boss() {
  for (let i = 0; i < enemies2Boss.length; i++) {
    let enemy2 = enemies2Boss[i];
    if (dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < chargeRadius) {
      enemy2.charging = true;
    } else {
      enemy2.charging = false;
    }
  }
}

function goblinsAreDefeated2(phase) {
  for (let i = 0; i < enemies2Boss.length; i++) {
    let enemy2 = enemies2Boss[i];
    if (enemy2.phase === phase && enemy2.lives > 0) {
      return false;
    }
  }
  return true;
}
