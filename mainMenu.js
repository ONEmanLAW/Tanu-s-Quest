// Variable pour suivre si le jeu a commencé ou non
let gameStart = false;

// Définir les images du menu principal
let jouerButton;
let parametreButton;
let exitButton;

function mainMenuButtons() {
  backgroundImage = loadImage('background.jpg');
  jouerButton = loadImage('jouer.png');
  parametreButton = loadImage('parametre.png');
  exitButton = loadImage('exit.png');
};

function drawMainMenu() {
  // Dessiner les boutons du menu principal
  image(backgroundImage, 0, 0, width, height);
  image(jouerButton, 100, 100);
  image(parametreButton, 100, 200);
  image(exitButton, 100, 300);
}



function mouseClicked() {
  if (!gameStart && mouseX > 100 && mouseX < 100 + jouerButton.width &&
      mouseY > 100 && mouseY < 100 + jouerButton.height) {
    gameStart = true;
  }
}