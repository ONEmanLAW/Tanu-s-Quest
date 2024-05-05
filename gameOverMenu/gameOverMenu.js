let gameOverImage;
let retryImage;
let mainMenuImage;
let quitImage;

function preloadGameOverImages() {
  gameOverImage = loadImage('gameOverMenu/assets/bloc game over.png');
  retryImage = loadImage('gameOverMenu/assets/bouton rejouer.png');
  mainMenuImage = loadImage('gameOverMenu/assets/bouton menu principal.png');
  quitImage = loadImage('gameOverMenu/assets/bouton quitter.png');
}



function gameOverMenu() {
  let centerY = height / 2;

  let imageScale = 0.2; 
  let gameOverWidth = gameOverImage.width * imageScale;
  let retryWidth = retryImage.width * imageScale;
  let mainMenuWidth = mainMenuImage.width * imageScale;
  let quitWidth = quitImage.width * imageScale;

  // Espacement vertical entre les images
  let verticalSpacing = 10;

  // Calculer la hauteur totale occupée par les images
  let totalHeight = gameOverImage.height * imageScale + retryImage.height * imageScale + mainMenuImage.height * imageScale + quitImage.height * imageScale + 3 * verticalSpacing;

  // Position de départ en Y pour le premier élément
  let startY = centerY - totalHeight / 2;

  // Position des images
  let gameOverX = width / 2 - gameOverWidth / 2;
  let gameOverY = startY;
  let retryX = width / 2 - retryWidth / 2;
  let retryY = gameOverY + gameOverImage.height * imageScale + verticalSpacing;
  let mainMenuX = width / 2 - mainMenuWidth / 2;
  let mainMenuY = retryY + retryImage.height * imageScale + verticalSpacing;
  let quitX = width / 2 - quitWidth / 2;
  let quitY = mainMenuY + mainMenuImage.height * imageScale + verticalSpacing;


  noStroke();
  fill(0, 10);
  rect(0, 0, width, height);

  // Afficher les images
  image(gameOverImage, gameOverX, gameOverY, gameOverWidth, gameOverImage.height * imageScale);
  image(retryImage, retryX, retryY, retryWidth, retryImage.height * imageScale);
  image(mainMenuImage, mainMenuX, mainMenuY, mainMenuWidth, mainMenuImage.height * imageScale);
  image(quitImage, quitX, quitY, quitWidth, quitImage.height * imageScale);

  // Gérer les clics sur les images
  if (mouseIsPressed) {
    if (mouseX > retryX && mouseX < retryX + retryWidth && 
        mouseY > retryY && mouseY < retryY + retryImage.height * imageScale) {
      // Retry
      if (gameOver) {
        hearts = 3;
        gameOver = false;
        xHero = 2 * worldTempleTileSize;
        yHero = 6 * worldTempleTileSize;
        resetEnemiesPosition();
        resetEnemies2Position();
        resetEnemies3Position();
        if (currentWorld === 2) {
          createEnemiesForet();
          createEnemiesForet2();
          createEnemiesForet3();
        } else if (currentWorld === 3) {
          
        }
      }
    } else if (mouseX > mainMenuX && mouseX < mainMenuX + mainMenuWidth && mouseY > mainMenuY && mouseY < mainMenuY + mainMenuImage.height * imageScale) {
      // Main Menu
      location.reload(); // Rafraîchir la page
    } else if (mouseX > quitX && mouseX < quitX + quitWidth && mouseY > quitY && mouseY < quitY + quitImage.height * imageScale) {
      // Quitter
      window.close(); // Fermer le navigateur
    }
  }
}
