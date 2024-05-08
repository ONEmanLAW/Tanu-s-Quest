let npcBabyTanukiX = 19 * worldVillageTileSize;
let npcBabyTanukiY = 8.50 * worldVillageTileSize;
let npcBabyTanukiWidth = worldVillageTileSize - 35;
let npcBabyTanukiHeight = worldVillageTileSize - 35;



let currentBabyTanukiIndex = 0;
let mybabyTanukiIdle = []; // Tableau pour les images d'attente du bébé tanuki
let currentBabyTanukiImage = 0;
let movementCounterBabyTanuki = 0;

function preloadBabyTanukiImages() {
  // Chargement des images d'attente pour le bébé tanuki
  for (let i = 1; i <= 10; i++) {
    let imageName = 'characters/npc/npcbebe/assets/villageois_bebe_tanuki' + i + '.png';
    let image = loadImage(imageName);
    mybabyTanukiIdle.push(image);
  }
  currentBabyTanukiImage = mybabyTanukiIdle[0]; // Définition de l'image actuelle du bébé tanuki
}

function updateBabyTanukiAnimation(animationArray) {
  movementCounterBabyTanuki += 1;

  // Réglez la vitesse de l'animation du bébé tanuki comme vous le souhaitez
  // Par exemple, 10 images par image
  if (movementCounterBabyTanuki >= 10) {
    currentBabyTanukiIndex += 1;
    if (currentBabyTanukiIndex === animationArray.length) {
      currentBabyTanukiIndex = 0;
    }
    currentBabyTanukiImage = animationArray[currentBabyTanukiIndex];
    movementCounterBabyTanuki = 0;
  }
}
