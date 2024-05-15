let gameStart = false;
let scene = 'Intro';

let jouerButton;
let parametreButton;
let exitButton;

let introGif;
let introVideo;
let videoPlaying = false;

function mainMenuButtons() {

  // Charger les images et les sons ici
  introGif = createImg('mainMenu/images/PageDebutJeu.gif');
  introGif.hide(); // Masquer le GIF jusqu'à ce qu'il soit nécessaire
  introVideo = createVideo(['mainMenu/images/Intrologos.mp4']);
  introVideo.hide(); // Masquer la vidéo jusqu'à ce qu'elle soit nécessaire


  backgroundImage = loadImage('mainMenu/images/menuBackground.jpeg');
  jouerButton = loadImage('mainMenu/images/blocJouer.png');
  parametreButton = loadImage('mainMenu/images/blocParamètres.png');
  exitButton = loadImage('mainMenu/images/blocQuitter.png');

  backgroundSettingsImage = loadImage('mainMenu/images/grosBlocParamètres.png');
  exitButtonParam = loadImage('mainMenu/images/blocQuitterParamètres.png');

  //Music de fond pour le Mainmenu

  musiqueFond = loadSound('mainMenu/music/Juhani Junkala [Retro Game Music Pack] Title Screen.wav');
};


function drawIntro() {
  background(0); // Fond noir pour l'intro
  // Le GIF est déjà affiché par introGif.show() dans setup()
  if (videoPlaying) {
    introVideo.show();
    introVideo.play();
    introVideo.onended(() => {
      introVideo.hide();
      scene = 'menu';
      musiqueFond.loop();
    });
  }
}


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
      musiqueFond.stop();
    } 
    // Clic sur le bouton "Paramètres"
    else if (isClicked(600, 400, 600, 200)) {
      scene = 'parametre';
    } 
    // Clic sur le bouton "Quitter"
    else if (isClicked(600, 600, 600, 200)) {
      musiqueFond.stop();
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