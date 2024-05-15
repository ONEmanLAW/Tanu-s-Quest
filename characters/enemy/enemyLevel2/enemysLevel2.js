let enemies2 = [];
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
    position: createVector(27 * worldForetTileSize, 6 * worldForetTileSize), 
    charging: false,
    origin: createVector(27 * worldForetTileSize, 6 * worldForetTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin2,
    direction: 'left' // Définir la direction par défaut
  });

  enemies2.push({
    position: createVector(15 * worldForetTileSize, 6 * worldForetTileSize), 
    charging: false,
    origin: createVector(15 * worldForetTileSize, 6 * worldForetTileSize),
    distanceToOrigin: 0,
    lives: livesGobelin2,
    direction: 'left' // Définir la direction par défaut
  });

  // Ajouter plus d'ennemis avec leurs positions respectives et autres propriétés si nécessaire
}

function resetEnemies2Position() {
  // Réinitialiser la position et d'autres propriétés des ennemis
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    enemy2.position.x = enemy2.origin.x;
    enemy2.position.y = enemy2.origin.y;
    enemy2.charging = false;
    enemy2.distanceToOrigin = 0;
    enemy2.lives = livesGobelin2;
    enemy2.frameIndex = 0;
    enemy2.direction = 'left'; // Réinitialiser la direction
  }
}

function updateAnimationState2() {
  // Mettre à jour l'animation en fonction de l'état et de la direction
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

function moveEnemies2() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
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
