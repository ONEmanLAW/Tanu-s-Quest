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
  { text: "Bonjour Alchimiste,\n le Grand Sage m'a dit de passer vous voir.", boxType: "Hero" },
  { text: "Bonjour Tanu, Merci encore de nous avoir sauvée.", boxType: "Alchimiste" },
  { text: "J'ai quelque choses pour toi !", boxType: "Alchimiste" },
  { text: "Voici des potions pour toi,\n si jamais tu perds trop de cœurs,\n tu peut utilier 'r' pour récupérer de la vie.", boxType: "Alchimiste" },
  { text: "Je te remercie pour ton don!", boxType: "Hero" },
  // Ajoutez d'autres dialogues ici
];

let currentAlchimisteIndex = 0;
let alchimisteDialogActive = false;
let alchimisteDialogueFinished = false;
let lastPlayedAlchimisteIndex = -1;

function playCharacterSoundHearts(boxType) {

  if (boxType === "Hero") {
    if (!soundHero.isPlaying()) {
      soundHero.play();
    }
  } else if (boxType === "Alchimiste") {
    if (!soundAlchimiste.isPlaying()) {
      soundAlchimiste.play();
    }
  }
}

// Fonction pour gérer le dialogue de l'alchimiste
function gererDialoguesAlchimiste() {
  if (alchimisteDialogActive && currentAlchimisteIndex < dialoguesAlchimiste.length) {
    let dialogueActuel = dialoguesAlchimiste[currentAlchimisteIndex].text;
    let boxType = dialoguesAlchimiste[currentAlchimisteIndex].boxType;
    let textWidth = 1150; 
    let textHeight = 275; 
    
    let boiteDeDialogueX = 2480; 
    let boiteDeDialogueY = 120; 
    
    let textX = boiteDeDialogueX + textWidth / 2 + 60;
    let textY = boiteDeDialogueY + textHeight / 2; 
    
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

    // Jouer le son approprié si l'index a changé
    if (currentAlchimisteIndex !== lastPlayedAlchimisteIndex) {
      playCharacterSoundHearts(boxType);
      lastPlayedAlchimisteIndex = currentAlchimisteIndex;
    }
  } else {
    // Si tous les dialogues ont été affichés, le dialogue de l'alchimiste est terminé
    
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
  if (distance < 2 * worldVillageTileSize) {
    // Activer le dialogue de l'alchimiste
    alchimisteDialogActive = true;
    return true;
  }

  return false;
}


