let gameStart = false;
let scene = 'menu';

let jouerButton;
let parametreButton;
let exitButton;


function mainMenuButtons() {
  backgroundImage = loadImage('mainMenu/images/menuBackground.jpeg');
  jouerButton = loadImage('mainMenu/images/blocJouer.png');
  parametreButton = loadImage('mainMenu/images/blocParamètres.png');
  exitButton = loadImage('mainMenu/images/blocQuitter.png');

  backgroundSettingsImage = loadImage('mainMenu/images/grosBlocParamètres.png');
  exitButtonParam = loadImage('mainMenu/images/blocQuitterParamètres.png');
};


function drawMainMenu() {
  image(backgroundImage, 0, 0, width, height);
  image(jouerButton, 600, 200, 600, 200);
  image(parametreButton, 600, 400, 600, 200);
  image(exitButton, 600, 600, 600, 200);
}

function drawParametrePage() {
  image(backgroundImage, 0, 0, width, height);
  image(backgroundSettingsImage, 390, 0, 1000, 1000);
  image( exitButtonParam, 600, 600, 600, 200);
}

function mouseClicked() {
  // Gérer les clics en fonction de la scène
  if (scene === 'menu') {
    // Clic sur le bouton "Jouer"
    if (!gameStart && isClicked(600, 200, 600, 200)) {
      gameStart = true;
    } 
    // Clic sur le bouton "Paramètres"
    else if (isClicked(600, 400, 600, 200)) {
      scene = 'parametre'; // Passer à la page des paramètres
    } 
    // Clic sur le bouton "Quitter"
    else if (isClicked(600, 600, 600, 200)) {
      // Fermer le navigateur
      window.close();
    }
  } else if (scene === 'parametre') {

    if (isClicked(600, 600, 600, 200)) {
      scene = 'menu'; 
    }
  }
}


function isClicked(x, y, buttonWidth, buttonHeight) {
  return mouseX > x && mouseX < x + buttonWidth && mouseY > y && mouseY < y + buttonHeight;
}