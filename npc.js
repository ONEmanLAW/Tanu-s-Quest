/////////////////////////////////////////////
///////////VARIABLES FOR NPC/////////////////
/////////////////////////////////////////////

let npcImage;

let npcX = 5 * worldTempleTileSize; 
let npcY = 6 * worldTempleTileSize ; 
let npcWidth = worldTempleTileSize -5; 
let npcHeight= worldTempleTileSize - 5; 

let dialogues = [
  "Bonjour, que puis-je faire pour vous ?",
  "Je m'appelle Bob et je suis chanteur.",
  "Je vends une hache pour 15 coins si tu veux!",
  "I am sorry, je n'ai pas d'autre information à vous donner.",
  "C'est bon, on a assez parlé."
];

let currentDialogueIndex = 0;

/////////////////////////////////////////////
////////FUNCTION FOR NPC Interaction/////////
/////////////////////////////////////////////

function checkNPCInteraction() {
  let playerXCenter = xHero + wHero ;
  let playerYCenter = yHero + hHero;
  let npcXCenter = npcX + npcWidth;
  let npcYCenter = npcY + npcHeight;

  let distance = dist(playerXCenter, playerYCenter, npcXCenter, npcYCenter);

  return distance < wHero + npcWidth;
};