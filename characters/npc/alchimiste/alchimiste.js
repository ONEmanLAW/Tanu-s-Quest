let alchimisteX = 28 * worldVillageTileSize3; 
let alchimisteY = 4 * worldVillageTileSize3 ; 
let alchimisteWidth = worldVillageTileSize3 + 40; 
let alchimisteHeight = worldVillageTileSize3 + 40; 


let currentAlcimisteIndex = 0;
let myAlchimisteIdle = []; // Tableau pour les images d'attente du Grand Sage
let currentAlchimisteImage = 0;
let movementCounterAlchimiste = 0;

function preloadAlchimisteImages() {
  // Idle Images for Grand Sage
  for (let i = 1; i <= 8; i++) {
    let imageName = 'characters/npc/alchimiste/assets/Alchimiste_idle' + i + '.png';
    let image = loadImage(imageName);
    myAlchimisteIdle.push(image);
  }
  currentAlchimisteImage = myAlchimisteIdle[0]; // Définition de l'image du Grand Sage actuelle
}

function updateAlchimisteAnimation(animationArray) {
  movementCounterAlchimiste += 1;

  // Réglez la vitesse de l'animation du Grand Sage comme vous le souhaitez
  // Par exemple, 10 images par image
  if (movementCounterAlchimiste >= 10) {
    currentAlcimisteIndex += 1;
    if (currentAlcimisteIndex === animationArray.length) {
      currentAlcimisteIndex = 0;
    }
    currentAlchimisteImage = animationArray[currentAlcimisteIndex];
    movementCounterAlchimiste = 0;
  }
}