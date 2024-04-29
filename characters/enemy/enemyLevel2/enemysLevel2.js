let enemies2 = []; // Tableau pour stocker les données de chaque ennemi de type 2
let enemy2Image;
let speedEnemy2 = 3;
let wEnemy2 = 64; // Largeur de l'ennemi de type 2
let hEnemy2 = 64; // Hauteur de l'ennemi de type 2
let chargeRadius = 350; 
let charging = false; 

function preloadEnemy2Image() {
  enemy2Image = loadImage('characters/enemy/gobelin2.png');
}

function createEnemies2() {
  // Ajouter les données de chaque ennemi de type 2 dans le tableau 'enemies2'
  enemies2.push({
    position: createVector(7 * worldForetTileSize, 6 * worldForetTileSize), // Position initiale de l'ennemi
    charging: false // Indique si l'ennemi charge vers le joueur
  });

  // Ajouter d'autres ennemis de type 2 si nécessaire
}

function moveEnemies2() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    if (enemy2.charging) {
      let angle = atan2(yHero - enemy2.position.y, xHero - enemy2.position.x);
      enemy2.position.x += cos(angle) * speedEnemy2;
      enemy2.position.y += sin(angle) * speedEnemy2;
    } else {
      let distanceToOrigin = dist(enemy2.position.x, enemy2.position.y, 7 * worldForetTileSize, 6 * worldForetTileSize);
      if (distanceToOrigin > 1) {
        let angle = atan2(6 * worldForetTileSize - enemy2.position.y, 7 * worldForetTileSize - enemy2.position.x);
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
    // Vérifier la collision entre le héros et l'ennemi de type 2
    if (dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < wHero / 2 + wEnemy2 / 2) {
      loseHeart();
    }
  }
}

function detectPlayer2() {
  for (let i = 0; i < enemies2.length; i++) {
    let enemy2 = enemies2[i];
    // Vérifier si le joueur est à portée de charge pour l'ennemi de type 2
    if (dist(xHero, yHero, enemy2.position.x, enemy2.position.y) < chargeRadius) {
      enemy2.charging = true;
    } else {
      enemy2.charging = false;
    }
  }
}