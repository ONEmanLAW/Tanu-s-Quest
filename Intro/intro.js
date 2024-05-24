/////////////////////////////////////////////
////////VARIABLES FOR STARTING IMAGES////////
/////////////////////////////////////////////

let images = [];
let sounds = [];
let currentImageIndex = 0;
let scrollCanvas;
let introImagesEnd = false;
let currentSound;
let soundPlaying = false;
let currentSoundIndex = -1;

function introImagesAndSounds() {
  images.push(loadImage('Intro/images/image1.jpg'));
  sounds.push(loadSound('Intro/sounds/slide1et2.mp3'));
  images.push(loadImage('Intro/images/image2.jpg'));
  images.push(loadImage('Intro/images/image3.jpg'));
  sounds.push(loadSound('Intro/sounds/slide3et4et5.mp3'));
  images.push(loadImage('Intro/images/image4.jpg'));
  images.push(loadImage('Intro/images/image5.jpg'));
  images.push(loadImage('Intro/images/image6.jpg'));
  sounds.push(loadSound('Intro/sounds/slide6.mp3'));
};


function playCurrentSound() {
  let soundIndex;
  if (currentImageIndex <= 1) {
    soundIndex = 0; // Son pour les index 0 et 1
  } else if (currentImageIndex >= 2 && currentImageIndex <= 4) {
    soundIndex = 1; // Son pour les index 2, 3 et 4
  } else if (currentImageIndex === 5) {
    soundIndex = 2; // Son pour l'index 5
  } else {
    return; // Pas de son pour les autres index
  }

  if (soundIndex !== currentSoundIndex) {
    stopCurrentSound();
    currentSound = sounds[soundIndex];
    currentSound.play();
    currentSoundIndex = soundIndex;
  }
}

function stopCurrentSound() {
  if (currentSound) {
    currentSound.stop();
    currentSound = null;
    currentSoundIndex = -1;
  }
}