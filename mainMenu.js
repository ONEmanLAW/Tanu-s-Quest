let gameStart = false;
let volume = 0.5; // Volume par défaut
let scene = 'menu'; // Scène par défaut

let jouerButton;
let parametreButton;
let exitButton;


function mainMenuButtons() {
  backgroundImage = loadImage('test.jpeg');
  jouerButton = loadImage('blocJouer.png');
  parametreButton = loadImage('blocParamètres.png');
  exitButton = loadImage('blocQuitter.png');
};

function drawMainMenu() {
  // Dessiner les boutons du menu principal
  image(backgroundImage, 0, 0, width, height);
  image(jouerButton, 600, 200, 600, 200);
  image(parametreButton, 600, 400, 600, 200);
  image(exitButton, 600, 600, 600, 200);
}


let musicEnabled = true;
// Déclaration des variables pour le curseur de volume
let sliderWidth = 300; // Largeur du curseur
let sliderHeight = 40; // Hauteur du curseur
let sliderHandleSize = 20; // Taille du bouton de manipulation du curseur
let sliderX; // Position horizontale du curseur
let sliderY; // Position verticale du curseur
let sliderHandleX; // Position horizontale du bouton de manipulation du curseur

function drawParametrePage() {
  // Dessiner la page des paramètres
  // Fond
  image(backgroundImage, 0, 0, width, height);
  
  fill(0);
  textSize(24);
  text('Volume:', width / 2 - 50, height / 2 - 50);

  // Calcul de la position du curseur et du bouton de manipulation du curseur
  sliderX = (width - sliderWidth) / 2;
  sliderY = (height - sliderHeight) / 2;
  sliderHandleX = sliderX + volume * (sliderWidth - sliderHandleSize);

  // Dessin du curseur
  fill(100);
  rect(sliderX, sliderY, sliderWidth, sliderHeight, 5); // Corps du curseur
  fill(150);
  rect(sliderHandleX, sliderY, sliderHandleSize, sliderHeight, 5); 

  fill(0);
  textSize(20);
  text('Musique:', 100, 200);
  rect(250, 185, 20, 20);
  fill(musicEnabled ? 0 : 255); // Si la musique est désactivée, la croix est blanche
  textSize(16);
  if (!musicEnabled) {
    text('X', 257, 199); // Afficher une croix à l'intérieur du carré si la musique est désactivée
  }

  // Afficher le bouton "Retour"
  fill(0);
  textSize(20);
  text('Retour', 100, 300);
  triangle(50, height / 2, 150, height / 2 - 50, 150, height / 2 + 50); 
}

function mouseClicked() {
  // Gérer les clics en fonction de la scène
  if (scene === 'menu') {
    // Clic sur le bouton "Jouer"
    if (!gameStart && isClicked(800, 100, 600, 200)) {
      gameStart = true;
    } 
    // Clic sur le bouton "Paramètres"
    else if (isClicked(800, 400, 600, 200)) {
      scene = 'parametre'; // Passer à la page des paramètres
    } 
    // Clic sur le bouton "Quitter"
    else if (isClicked(800, 700, 600, 200)) {
      // Fermer le navigateur
      window.close();
    }
  } 
  // Gérer les clics sur la page des paramètres
  else if (scene === 'parametre') {
    // Clic sur le curseur de volume pour ajuster le volume
    if (mouseX > width / 2 - 150 && mouseX < width / 2 + 150 && mouseY > height / 2 - 20 && mouseY < height / 2 + 20) {
      volume = constrain((mouseX - (width / 2 - 150)) / 300, 0, 1);
      if (currentMusic) {
        currentMusic.setVolume(volume);
      }
    }

    // Clic sur le carré pour activer ou désactiver la musique
    if (mouseX > 250 && mouseX < 270 && mouseY > 185 && mouseY < 205) {
      musicEnabled = !musicEnabled; // Inverser l'état de la musique
      if (currentMusic) {
        if (musicEnabled) {
          currentMusic.play(); // Activer la musique
        } else {
          currentMusic.stop(); // Désactiver la musique
        }
      }
    }

    // Clic sur le bouton "Retour"
    if (mouseX > 50 && mouseX < 150 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
      scene = 'menu'; // Revenir au menu principal
    }
  }
}


// Fonction pour vérifier si un bouton est cliqué
function isClicked(x, y, buttonWidth, buttonHeight) {
  return mouseX > x && mouseX < x + buttonWidth && mouseY > y && mouseY < y + buttonHeight;
}