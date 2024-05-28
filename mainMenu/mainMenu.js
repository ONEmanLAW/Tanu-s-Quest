let gameStart = false;
let scene = 'Intro';

let jouerButton;
let parametreButton;
let exitButton;

let introGif;
let introVideo;
let videoPlaying = false;

let musiqueFond;

let backgroundImage;
let backgroundSettingsImage;
let exitButtonParam;


function mainMenuButtons() {
  introGif = createImg('mainMenu/images/PageDebutJeu.gif');
  introGif.hide();
  introVideo = createVideo(['mainMenu/images/Intrologos.mp4']);
  introVideo.hide();

  backgroundImage = loadImage('mainMenu/images/menuBackground.jpg');
  jouerButton = loadImage('mainMenu/images/blocJouer.png');
  parametreButton = loadImage('mainMenu/images/blocParametres.png');
  exitButton = loadImage('mainMenu/images/blocQuitter.png');

  backgroundSettingsImage = loadImage('mainMenu/images/grosBlocParametres.png');
  exitButtonParam = loadImage('mainMenu/images/blocQuitterParametres.png');

  musiqueFond = loadSound('mainMenu/music/mainMenu.mp3');
}

function parametreSliderPreload() {
  musicVolumeSlider = createSlider(0, 1, 0.5, 0.01);
  musicVolumeSlider.position(800, 700,(width - 600) / 2, height * 0.3);
  musicVolumeSlider.style('width', '600px');
  musicVolumeSlider.hide();

  soundVolumeSlider = createSlider(0, 1, 0.5, 0.01);
  soundVolumeSlider.position(800, 450,(width - 600) / 2, height * 0.4);
  soundVolumeSlider.style('width', '600px');
  soundVolumeSlider.hide();

  soundVolumeSliderAntiBug = createSlider(0, 1, 0.5, 0.01);
  soundVolumeSliderAntiBug.position((width - 600) / 2, height * 0.4);
  soundVolumeSliderAntiBug.style('width', '600px');
  soundVolumeSliderAntiBug.hide();
}



function drawIntro() {
  background(0);
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

  let buttonWidth = 600;  // Fixed width for buttons
  let buttonHeight = height * 0.15;  // Increase height proportion to make buttons larger
  let x = (width - buttonWidth) / 2;

  image(jouerButton, x, height * 0.4, buttonWidth, buttonHeight);  // Move higher on Y axis
  image(parametreButton, x, height * 0.55, buttonWidth, buttonHeight);  // Move higher on Y axis
  image(exitButton, x, height * 0.7, buttonWidth, buttonHeight);  // Move higher on Y axis

  // Hide sliders
  musicVolumeSlider.hide();
  soundVolumeSlider.hide();
}

function drawParametrePage() {
  image(backgroundImage, 0, 0, width, height);

  let buttonWidth = 600;  // Fixed width for buttons
  let buttonHeight = height * 0.15;  // Increase height proportion to make buttons larger
  let x = (width - buttonWidth) / 2;

  image(backgroundSettingsImage, width * 0.2, 0, width * 0.6, height);
  image(exitButtonParam, x, height * 0.7, buttonWidth, buttonHeight);  // Move lower on Y axis

  musicVolumeSlider.show();
  soundVolumeSlider.show();
}

function mouseClicked() {
  let buttonWidth = 600;  // Fixed width for buttons
  let buttonHeight = height * 0.15;  // Increase height proportion to make buttons larger
  let x = (width - buttonWidth) / 2;

  if (scene === 'menu') {
    if (!gameStart && isClicked(x, height * 0.4, buttonWidth, buttonHeight)) {  // Move higher on Y axis
      gameStart = true;
      musiqueFond.stop();
    } else if (isClicked(x, height * 0.55, buttonWidth, buttonHeight)) {  // Move higher on Y axis
      scene = 'parametre';
    } else if (isClicked(x, height * 0.7, buttonWidth, buttonHeight)) {  // Move higher on Y axis
      musiqueFond.stop();
      window.close();
    }
  } else if (scene === 'parametre') {
    if (isClicked(x, height * 0.7, buttonWidth, buttonHeight)) {  // Move lower on Y axis
      scene = 'menu';
    }
  }
}

function isClicked(x, y, buttonWidth, buttonHeight) {
  return mouseX > x && mouseX < x + buttonWidth && mouseY > y && mouseY < y + buttonHeight;
}

