/////////////////////////////////////////////
////////VARIABLES FOR STARTING IMAGES////////
/////////////////////////////////////////////

let images = [];
let currentImageIndex = 0;
let scrollCanvas;
let introImagesEnd = false;

let musicsOfStory = [];
let currentMusic;
let musicsOfStoryStarted = false;

function preload() {

  images.push(loadImage('assets/images/Intro Images/image1.jpg'));
  images.push(loadImage('assets/images/Intro Images/image2.jpg'));
  images.push(loadImage('assets/images/Intro Images/image3.jpg'));
  images.push(loadImage('assets/images/Intro Images/image4.jpg'));
  images.push(loadImage('assets/images/Intro Images/image5.jpg'));
  images.push(loadImage('assets/images/Intro Images/image6.jpg'));

  musicsOfStory.push(loadSound('music/Enterin The Skies.mp3', () => {
    // Lecture automatique de la première musique une fois chargée
    currentMusic = musicsOfStory[0];
    if (currentMusic) {
      currentMusic.play();
    }
  }));
  musicsOfStory.push(loadSound('music/Orbital Colossus.mp3'));
  musicsOfStory.push(loadSound('music/Ove Melaa - Hero Within.mp3'));
  musicsOfStory.push(loadSound('/music/Ove Melaa - High Stakes,Low Chances.mp3'));
  musicsOfStory.push(loadSound('music/Rise of spirit.mp3'));
  musicsOfStory.push(loadSound('music/Woodland Fantasy.mp3'));
};



/////////////////////////////////////////////
////////////FUNCTIONS FOR INTRO//////////////
/////////////////////////////////////////////


function keyTyped() {
  if (gameStart) {
    if (key === 'm' || key === 'M') {
      if (musicsOfStory[currentImageIndex].isPlaying()) { 
        musicsOfStory[currentImageIndex].stop();
      } else {
        musicsOfStory[currentImageIndex].play();
      }
    }
  }
};