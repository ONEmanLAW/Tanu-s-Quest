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





// Dialogues de l'alchimiste
let dialoguesAlchimiste = [
  { text: "Salutations, jeune aventurier. En quoi puis-je vous être utile ?", boxType: "Alchimiste" },
  { text: "L'alchimiste, j'ai besoin de votre expertise. Le village est en danger et j'ai besoin de votre aide !", boxType: "Hero" },
  // Ajoutez d'autres dialogues ici
];

let currentAlchimisteIndex = 0;
let alchimisteDialogActive = false;

// Fonction pour gérer le dialogue de l'alchimiste
function gererDialoguesAlchimiste() {
  if (alchimisteDialogActive && currentAlchimisteIndex < dialoguesAlchimiste.length) {
    let dialogueActuel = dialoguesAlchimiste[currentAlchimisteIndex].text;
    let boxType = dialoguesAlchimiste[currentAlchimisteIndex].boxType;
    let textWidth = 1100; 
    let textHeight = 250; 
    
    // Position de la boîte de dialogue à côté de l'alchimiste
    let boiteDeDialogueX = alchimisteX + alchimisteWidth + 20; // 20 pixels de décalage
    let boiteDeDialogueY = alchimisteY - 50; // Position au-dessus de l'alchimiste
    
    // Position du texte à l'intérieur de la boîte de dialogue
    let textX = boiteDeDialogueX + 50; // 50 pixels de décalage horizontal
    let textY = boiteDeDialogueY + 50; // 50 pixels de décalage vertical
    
    // Sélection de l'image de la boîte de dialogue en fonction du type
    let boiteDeDialogue;
    if (boxType === "Alchimiste") {
      boiteDeDialogue = boiteDeDialogueAlcimiste;
    } else if (boxType === "Hero") {
      boiteDeDialogue = boiteDeDialogueHero;
    }
    
    // Affichage de la boîte de dialogue et du texte
    fill(0);
    image(boiteDeDialogue, boiteDeDialogueX, boiteDeDialogueY, textWidth, textHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(dialogueActuel, textX, textY);
  }
}

function checkAlchimisteInteraction() {
  let playerXCenter = xHero + wHero;
  let playerYCenter = yHero + hHero;
  let alchimisteXCenter = alchimisteX + alchimisteWidth / 2; // Centre de l'alchimiste en X
  let alchimisteYCenter = alchimisteY + alchimisteHeight / 2; // Centre de l'alchimiste en Y

  // Calculer la distance entre le joueur et l'alchimiste
  let distance = dist(playerXCenter, playerYCenter, alchimisteXCenter, alchimisteYCenter); 

  // Vérifier si le joueur est à au moins 2 blocs de distance de l'alchimiste
  if (distance < 2 * worldVillageTileSize3) {
    // Activer le dialogue de l'alchimiste
    alchimisteDialogActive = true;
    return true;
  }

  return false;
}


