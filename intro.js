/////////////////////////////////////////////
////////VARIABLES FOR STARTING IMAGES////////
/////////////////////////////////////////////

let images = [];
let currentImageIndex = 0;
let scrollCanvas;
let gameStarted = false;

let musicsOfStory = [];
let currentMusic;
let musicsOfStoryStarted = false;

function preload() {
  images.push(loadImage('assets/images/image1.jpg'));
  images.push(loadImage('assets/images/image2.jpg'));
  images.push(loadImage('assets/images/image3.jpg'));
  images.push(loadImage('assets/images/image4.jpg'));
  images.push(loadImage('assets/images/image5.jpg'));
  images.push(loadImage('assets/images/image6.jpg'));

  musicsOfStory.push(loadSound('assets/musics/Enterin The Skies.mp3', () => {
    // Lecture automatique de la première musique une fois chargée
    currentMusic = musicsOfStory[0];
    if (currentMusic) {
      currentMusic.play();
    }
  }));
  musicsOfStory.push(loadSound('assets/musics/Orbital Colossus.mp3'));
  musicsOfStory.push(loadSound('assets/musics/Ove Melaa - Hero Within.mp3'));
  musicsOfStory.push(loadSound('assets/musics/Ove Melaa - High Stakes,Low Chances.mp3'));
  musicsOfStory.push(loadSound('assets/musics/Rise of spirit.mp3'));
  musicsOfStory.push(loadSound('assets/musics/Woodland Fantasy.mp3'));
};



/////////////////////////////////////////////
////////////FUNCTIONS FOR INTRO//////////////
/////////////////////////////////////////////

function mouseClicked() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    gameStarted = true;
  } else {
    if (currentMusic) {
      currentMusic.stop();
    }
    currentMusic = musicsOfStory[currentImageIndex];
    if (currentMusic) {
      currentMusic.play();
    }
  }
};


function keyTyped() {
  if (key === 'm' || key === 'M') {
    if (musicsOfStory[currentImageIndex].isPlaying()) { 
      musicsOfStory[currentImageIndex].stop();
    } else {
      musicsOfStory[currentImageIndex].play();
    }
  }
};