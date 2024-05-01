let enemies = [];
let enemyImage;
let speed = 2;
let wEnemy = 80;
let hEnemy = 80; 

let enemyLeftImages = [];
let enemyRightImages = [];


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
  enemies.push({
    position: createVector(14 * worldForetTileSize, 10.20 * worldForetTileSize),
    pointA: createVector(9 * worldForetTileSize, 10.20 * worldForetTileSize),
    pointB: createVector(14 * worldForetTileSize, 10.20 * worldForetTileSize),
    direction: 1
  });


  enemies.push({
    position: createVector(10 * worldForetTileSize, 8.50 * worldForetTileSize),
    pointA: createVector(10 * worldForetTileSize, 8.50 * worldForetTileSize),
    pointB: createVector(12 * worldForetTileSize, 8.50 * worldForetTileSize),
    direction: 1
  });

  // Add More Ennemies.
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


function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    let enemyImages = (enemy.direction === 1) ? enemyRightImages : enemyLeftImages;
    let currentImage = enemyImages[Math.floor(frameCount / 10) % enemyImages.length];
    image(currentImage, enemy.position.x, enemy.position.y, wEnemy, hEnemy);
  }
}


function checkEnemyCollision() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    if (rectIsInRect(xHero, yHero, wHero, hHero, enemy.position.x, enemy.position.y, wEnemy, hEnemy)) {
      loseHeart();
    }
  }
}
