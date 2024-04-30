let enemies = [];
let enemyImage;
let speed = 2;
let wEnemy = 64;
let hEnemy = 64; 


function preloadEnemy1Image() {
  enemyImage = loadImage('characters/enemy/gobelin1.png');
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
    image(enemyImage, enemy.position.x, enemy.position.y, wEnemy, hEnemy);
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
