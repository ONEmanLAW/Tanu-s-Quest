/////////////////////////////////////////////
///////////VARIABLES FOR NPC/////////////////
/////////////////////////////////////////////

let npcGrandSageImage;
let boiteDeDialogue;

let npcGrandSageX = 5 * worldTempleTileSize; 
let npcGrandSageY = 6 * worldTempleTileSize ; 
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
  let playerXCenter = xHero + wHero ;
  let playerYCenter = yHero + hHero;
  let npcGrandSageXCenter = npcGrandSageX + npcGrandSageWidth;
  let npcGrandSageYCenter = npcGrandSageY + npcGrandSageHeight;

  let distance = dist(playerXCenter, playerYCenter, npcGrandSageXCenter, npcGrandSageYCenter);

  return distance < wHero + npcGrandSageWidth;
};

function preloadNPCImages() {
  npcGrandSageImage = loadImage('assets/hero/run_1left.png');
}

function preloadChatImage() {
  boiteDeDialogueGrandSage = loadImage('Dialogue1.png'),
  boiteDeDialogueHero = loadImage('Dialogue2.png')
}



