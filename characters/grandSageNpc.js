/////////////////////////////////////////////
///////////VARIABLES FOR NPC/////////////////
/////////////////////////////////////////////

let npcGrandSageImage;
let boiteDeDialogue;

let npcGrandSageX = 5 * worldTempleTileSize; 
let npcGrandSageY = 7 * worldTempleTileSize ; 
let npcGrandSageWidth = worldTempleTileSize; 
let npcGrandSageHeight= worldTempleTileSize; 

let dialoguesGrandSage = [
  "Bonjour, que puis-je faire pour vous ?",
  "Je m'appelle Bob et je suis chanteur.",
  "Je vends une hache pour 15 coins si tu veux!",
  "I am sorry, je n'ai pas d'autre information à vous donner.",
  "C'est bon, on a assez parlé."
];

let currentDialogueGrandSageIndex = 0;

/////////////////////////////////////////////
////////FUNCTION FOR NPC Interaction/////////
/////////////////////////////////////////////

function checkNPCInteraction() {
  let playerXCenter = xHero + wHero;
  let playerYCenter = yHero + hHero;
  let npcGrandSageXCenter = npcGrandSageX + npcGrandSageWidth;
  let npcGrandSageYCenter = npcGrandSageY + npcGrandSageHeight;

  let distance = dist(playerXCenter, playerYCenter, npcGrandSageXCenter, npcGrandSageYCenter);

  return distance < wHero + npcGrandSageWidth;
};

function preloadNPCImages() {
  npcGrandSageImage = loadImage('assets/hero/run_1.png');
}

function preloadChatImage() {
  boiteDeDialogueGrandSage = loadImage('Dialogue1.png');
}






let tutoEnCours = false;
let currentDialogueIndex = 0;

let dialoguesTutoriel = [
  "Appuyez sur 'q' pour aller à gauche.",
  "Appuyez sur 'd' pour aller à droite.",
  "Appuez sur 'space' pour sauter",
];

function gererTutoriel() {
  if (tutoEnCours) {
    let dialogueActuel = dialoguesTutoriel[currentDialogueIndex];
    let textWidth = 800; // Remplacez cette valeur par la largeur de votre boîte de dialogue
    let textHeight = 200; // Remplacez cette valeur par la hauteur de votre boîte de dialogue
    let textX = (width - textWidth) / 2;
    let textY = height - textHeight - 20;
    
    fill(0);
    image(boiteDeDialogueGrandSage, textX, textY, textWidth, textHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(dialogueActuel, textX + textWidth / 2, textY + textHeight / 2);
  }
}


