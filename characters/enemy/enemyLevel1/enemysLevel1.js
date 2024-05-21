let enemies = [];
let enemiesGrotte = [];
let enemiesBoss = [];
let enemyImage;
let speed = 2;
let wEnemy = 80;
let hEnemy = 80; 

let enemyLeftImages = [];
let enemyRightImages = [];

const livesGobelin1 = 2;

function preloadEnemy1Image() {
  // Left enemy images
  for (let i = 1; i <= 12; i++) {
    enemyLeftImages.push(loadImage(`characters/enemy/enemyLevel1/assets/left/marche_gauche_gobelin1_${i}.png`));
  }

  // Right enemy images
  for (let i = 1; i <= 12; i++) {
    enemyRightImages.push(loadImage(`characters/enemy/enemyLevel1/assets/right/marche_droite_gobelin1_${i}.png`));
  }
}



function createEnemiesForet() {
  enemies = [];

  enemies.push({
    position: createVector(152 * worldForetTileSize, 10 * worldForetTileSize),
    pointA: createVector(152 * worldForetTileSize, 10 * worldForetTileSize),
    pointB: createVector(167 * worldForetTileSize, 10 * worldForetTileSize),
    direction: 1,
    initialPosition: createVector(152 * worldForetTileSize, 10 * worldForetTileSize),
    lives: livesGobelin1 
  });

  enemies.push({
    position: createVector(96 * worldForetTileSize, 10 * worldForetTileSize),
    pointA: createVector(90 * worldForetTileSize, 10 * worldForetTileSize),
    pointB: createVector(97 * worldForetTileSize, 10 * worldForetTileSize),
    direction: 1,
    initialPosition: createVector(97 * worldForetTileSize, 10 * worldForetTileSize), 
    lives: livesGobelin1 
  });

  enemies.push({
    position: createVector(35 * worldForetTileSize, 10 * worldForetTileSize),
    pointA: createVector(35 * worldForetTileSize, 10 * worldForetTileSize),
    pointB: createVector(40 * worldForetTileSize, 10 * worldForetTileSize),
    direction: 1,
    initialPosition: createVector(35 * worldForetTileSize, 10 * worldForetTileSize),
    lives: livesGobelin1 
  });  
}



function createEnemiesGrotte() {
  enemiesGrotte = [];
  enemiesGrotte.push({
    position: createVector(181 * worldGrotteTileSize, 11 * worldGrotteTileSize),
    pointA: createVector(181 * worldGrotteTileSize, 11 * worldGrotteTileSize),
    pointB: createVector(184 * worldGrotteTileSize, 11 * worldGrotteTileSize),
    direction: 1,
    initialPosition: createVector(181 * worldGrotteTileSize, 11 * worldGrotteTileSize),
    lives: livesGobelin1 
  });

  enemiesGrotte.push({
    position: createVector(98 * worldGrotteTileSize, 5 * worldGrotteTileSize),
    pointA: createVector(98 * worldGrotteTileSize, 5 * worldGrotteTileSize),
    pointB: createVector(101 * worldGrotteTileSize, 5 * worldGrotteTileSize),
    direction: 1,
    initialPosition: createVector(98 * worldGrotteTileSize, 5 * worldGrotteTileSize),
    lives: livesGobelin1
  });

  enemiesGrotte.push({
    position: createVector(35 * worldGrotteTileSize, 7 * worldGrotteTileSize),
    pointA: createVector(35 * worldGrotteTileSize, 7 * worldGrotteTileSize),
    pointB: createVector(38 * worldGrotteTileSize, 7 * worldGrotteTileSize),
    direction: 1,
    initialPosition: createVector(35 * worldGrotteTileSize, 7 * worldGrotteTileSize),
    lives: livesGobelin1
  });
}



function resetEnemiesPosition() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    enemy.position.x = enemy.initialPosition.x;
    enemy.position.y = enemy.initialPosition.y;
    enemy.direction = 1; 
    enemy.lives = livesGobelin1;
  }
}

function resetEnemiesPositionGrotte() {
  for (let i = 0; i < enemiesGrotte.length; i++) {
    let enemy = enemiesGrotte[i];
    // Réinitialise la position de l'ennemi à sa position initiale
    enemy.position.x = enemy.initialPosition.x;
    enemy.position.y = enemy.initialPosition.y;
    // Réinitialise la direction de l'ennemi si nécessaire
    enemy.direction = 1; // Remettre la direction à sa valeur par défaut, si nécessaire
    enemy.lives = livesGobelin1;
  }
}

function moveEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    enemy.position.x += speed * enemy.direction;

    // Inverser la direction si l'ennemi atteint l'un des points de patrouille
    if ((enemy.direction === 1 && enemy.position.x >= enemy.pointB.x) || 
        (enemy.direction === -1 && enemy.position.x <= enemy.pointA.x)) {
      enemy.direction *= -1;
    }
  }
}

function moveEnemiesGrotte() {
  for (let i = 0; i < enemiesGrotte.length; i++) {
    let enemy = enemiesGrotte[i];
    enemy.position.x += speed * enemy.direction;

    // Inverser la direction si l'ennemi atteint l'un des points de patrouille
    if ((enemy.direction === 1 && enemy.position.x >= enemy.pointB.x) || 
        (enemy.direction === -1 && enemy.position.x <= enemy.pointA.x)) {
      enemy.direction *= -1;
    }
  }
}

function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    let enemyImages = (enemy.direction === 1) ? enemyRightImages : enemyLeftImages;
    let currentImage = enemyImages[Math.floor(frameCount / 5) % enemyImages.length];
    image(currentImage, enemy.position.x, enemy.position.y, wEnemy, hEnemy);
  }
}

function drawEnemiesGrotte() {
  for (let i = 0; i < enemiesGrotte.length; i++) {
    let enemy = enemiesGrotte[i];
    let enemyImages = (enemy.direction === 1) ? enemyRightImages : enemyLeftImages;
    let currentImage = enemyImages[Math.floor(frameCount / 5) % enemyImages.length];
    image(currentImage, enemy.position.x, enemy.position.y, wEnemy, hEnemy);
  }
}

// Définir une variable pour le décalage de recul des ennemis
let enemyRecoilDistance = 100; // Vous pouvez ajuster cette valeur selon vos besoins
let enemyRecoilDuration = 0.5; // Durée du recul en secondes

function checkEnemyCollision() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    if (isAttacking && rectIsInRect(xHero, yHero, wHero, hHero, enemy.position.x, enemy.position.y, wEnemy, hEnemy)) {
      if (!enemy.isHit) {
        enemy.isHit = true;
        
        // Déterminer les dégâts en fonction de l'arme
        let damage = newSword ? 2 : 1;
        enemy.lives -= damage;

        // Calculer la direction du recul en fonction de la position du héros par rapport à l'ennemi
        let direction = xHero > enemy.position.x ? -1 : 1;

        // Définir la cible finale du recul
        let targetX = enemy.position.x + direction * enemyRecoilDistance;

        // Animer le recul de l'ennemi
        let startTime = Date.now();
        let endTime = startTime + enemyRecoilDuration * 1000; // Conversion en millisecondes

        function animateRecoil() {
          let now = Date.now();
          let progress = (now - startTime) / (endTime - startTime);
          if (progress < 1) {
            enemy.position.x = enemy.position.x + (targetX - enemy.position.x) * progress;
            requestAnimationFrame(animateRecoil);
          } else {
            enemy.position.x = targetX;
          }
        }

        animateRecoil();

        // Ajout de ceci pour s'assurer que l'attaque reste active jusqu'à la fin de l'animation
        setTimeout(() => {
          isAttacking = false;
        }, attackDuration);
      }
    } else {
      enemy.isHit = false;

      if (!isAttacking && rectIsInRect(xHero, yHero, wHero, hHero, enemy.position.x, enemy.position.y, wEnemy, hEnemy)) {
        // Vérifie la direction du personnage et de l'ennemi
        if ((enemy.direction === 1 && xHero > enemy.position.x) || 
            (enemy.direction === -1 && xHero < enemy.position.x)) {
          loseHeart(); // Vous pouvez retirer cette ligne si vous ne voulez pas que le héros perde de cœur lorsqu'il est touché par un ennemi
        }
      }
    }

    // Si l'ennemi n'a plus de vie, le supprimer
    if (enemy.lives <= 0) {
      enemies.splice(i, 1);
      i--; // Ajuster l'index après la suppression
    }
  }
}

function checkEnemyCollisionGrotte () {
  for (let i = 0; i < enemiesGrotte.length; i++) {
    let enemy = enemiesGrotte[i];
    if (isAttacking && rectIsInRect(xHero, yHero, wHero, hHero, enemy.position.x, enemy.position.y, wEnemy, hEnemy)) {
      if (!enemy.isHit) {
        enemy.isHit = true;
        
        // Déterminer les dégâts en fonction de l'arme
        let damage = newSword ? 2 : 1;
        enemy.lives -= damage;

        // Calculer la direction du recul en fonction de la position du héros par rapport à l'ennemi
        let direction = xHero > enemy.position.x ? -1 : 1;

        // Définir la cible finale du recul
        let targetX = enemy.position.x + direction * enemyRecoilDistance;

        // Animer le recul de l'ennemi
        let startTime = Date.now();
        let endTime = startTime + enemyRecoilDuration * 1000; // Conversion en millisecondes

        function animateRecoil() {
          let now = Date.now();
          let progress = (now - startTime) / (endTime - startTime);
          if (progress < 1) {
            enemy.position.x = enemy.position.x + (targetX - enemy.position.x) * progress;
            requestAnimationFrame(animateRecoil);
          } else {
            enemy.position.x = targetX;
          }
        }

        animateRecoil();

        // Ajout de ceci pour s'assurer que l'attaque reste active jusqu'à la fin de l'animation
        setTimeout(() => {
          isAttacking = false;
        }, attackDuration);
      }
    } else {
      enemy.isHit = false;

      if (!isAttacking && rectIsInRect(xHero, yHero, wHero, hHero, enemy.position.x, enemy.position.y, wEnemy, hEnemy)) {
        // Vérifie la direction du personnage et de l'ennemi
        if ((enemy.direction === 1 && xHero > enemy.position.x) || 
            (enemy.direction === -1 && xHero < enemy.position.x)) {
          loseHeart(); // Vous pouvez retirer cette ligne si vous ne voulez pas que le héros perde de cœur lorsqu'il est touché par un ennemi
        }
      }
    }

    // Si l'ennemi n'a plus de vie, le supprimer
    if (enemy.lives <= 0) {
      enemiesGrotte.splice(i, 1);
      i--; // Ajuster l'index après la suppression
    }
  }
}

















function spawnEnemyAtSpecificTime(numEnemies, phase) {
  let enemiesBoss = [];
  for (let i = 0; i < numEnemies; i++) {
    let enemy = {
      position: createVector(0, 0),
      pointA: createVector(0, 0),
      pointB: createVector(0, 0),
      direction: 1,
      initialPosition: createVector(0, 0),
      lives: livesGobelin1,
      phase: phase
    };
    
    switch (phase) {
      case 1:
        enemy.position.x = (3 + i * 2) * worldBossTileSize;
        enemy.position.y = (8 + i * 2) * worldBossTileSize; 
        enemy.initialPosition.x = enemy.position.x;
        enemy.initialPosition.y = enemy.position.y;
        enemy.pointA.x = enemy.position.x - 1 * worldBossTileSize; 
        enemy.pointA.y = enemy.position.y;
        enemy.pointB.x = enemy.position.x + 7 * worldBossTileSize;
        enemy.pointB.y = enemy.position.y;
        break;
      case 2:
        enemy.position.x = (11 + i * 2) * worldBossTileSize;
        enemy.position.y = (8) * worldBossTileSize;
        enemy.initialPosition.x = enemy.position.x;
        enemy.initialPosition.y = enemy.position.y;
        enemy.pointA.x = enemy.position.x - 2 * worldBossTileSize; 
        enemy.pointA.y = enemy.position.y;
        enemy.pointB.x = enemy.position.x + 1 * worldBossTileSize;
        enemy.pointB.y = enemy.position.y;
        break;
      case 3:
        enemy.position.x = (6 + i * 2) * worldBossTileSize;
        enemy.position.y = (8) * worldBossTileSize;
        enemy.initialPosition.x = enemy.position.x;
        enemy.initialPosition.y = enemy.position.y;
        enemy.pointA.x = enemy.position.x - 4 * worldBossTileSize;
        enemy.pointA.y = enemy.position.y;
        enemy.pointB.x = enemy.position.x + 4 * worldBossTileSize;
        enemy.pointB.y = enemy.position.y;
        break;
    }
    
    enemiesBoss.push(enemy);
  }
  return enemiesBoss;
}


function resetEnemiesPositionBoss() {
  for (let i = 0; i < enemiesBoss.length; i++) {
    let enemy = enemiesBoss[i];
    enemy.position.x = enemy.initialPosition.x;
    enemy.position.y = enemy.initialPosition.y;
    enemy.direction = 1;
    enemy.lives = livesGobelin1;
  }
}

function moveEnemiesBoss() {
  for (let i = 0; i < enemiesBoss.length; i++) {
    let enemy = enemiesBoss[i];
    enemy.position.x += speed * enemy.direction;

    if ((enemy.direction === 1 && enemy.position.x >= enemy.pointB.x) || 
        (enemy.direction === -1 && enemy.position.x <= enemy.pointA.x)) {
      enemy.direction *= -1;
    }
  }
}

function drawEnemiesBoss() {
  for (let i = 0; i < enemiesBoss.length; i++) {
    let enemy = enemiesBoss[i];
    let enemyImages = (enemy.direction === 1) ? enemyRightImages : enemyLeftImages;
    let currentImage = enemyImages[Math.floor(frameCount / 5) % enemyImages.length];
    image(currentImage, enemy.position.x, enemy.position.y, 96, 96);
  }
}


function checkEnemyCollisionBoss() {
  for (let i = 0; i < enemiesBoss.length; i++) {
    let enemy = enemiesBoss[i];
    if (isAttacking && dist(xHero, yHero, enemy.position.x, enemy.position.y) < wHero / 2 + wEnemy / 2) {
      if (!enemy.isHit) {
        enemy.isHit = true;
        
        let damage = newSword ? 2 : 1;
        enemy.lives -= damage;

        let direction = xHero > enemy.position.x ? -1 : 1;

        let targetX = enemy.position.x + direction * enemyRecoilDistance;

        let startTime = Date.now();
        let endTime = startTime + enemyRecoilDuration * 1000; 

        function animateRecoil() {
          let now = Date.now();
          let progress = (now - startTime) / (endTime - startTime);
          if (progress < 1) {
            enemy.position.x = enemy.position.x + (targetX - enemy.position.x) * progress;
            requestAnimationFrame(animateRecoil);
          } else {
            enemy.position.x = targetX;
          }
        }

        animateRecoil();

        setTimeout(() => {
          isAttacking = false;
        }, attackDuration);
      }
    } else {
      enemy.isHit = false;

      if (!isAttacking && rectIsInRect(xHero, yHero, enemy.position.x, enemy.position.y) < wHero / 2 + wEnemy / 2) {
        if ((enemy.direction === 1 && xHero > enemy.position.x) || 
            (enemy.direction === -1 && xHero < enemy.position.x)) {
          loseHeart();
        }
      }
    }

    if (enemy.lives <= 0) {
      enemiesBoss.splice(i, 1);
      i--;
    }
  }
}


function goblinsAreDefeated(phase) {
  for (let i = 0; i < enemiesBoss.length; i++) {
    let enemy = enemiesBoss[i];
    if (enemy.phase === phase && enemy.lives > 0) {
      return false;
    }
  }
  return true;
}
