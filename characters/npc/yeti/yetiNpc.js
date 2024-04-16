let npcYetiImage;
let npcYetiX = 12 * worldVillageTileSize; 
let npcYetiY = 10 * worldVillageTileSize ; 
let npcYetiWidth = worldVillageTileSize + 10; 
let npcYetiHeight= worldVillageTileSize + 25;


let dialoguesYeti = [
  "Grrr, tu oses t'approcher de moi ?",
  "Je suis le puissant Yeti, roi de ces montagnes !",
  "Si tu ne veux pas finir en déjeuner, éloigne-toi !",
  "Mais... tu sembles différent des autres humains.",
  "Tu n'aurais pas une friandise à me donner, par hasard ?",
  "J'ai trop parler avec toi. Me parle pas !"
];

let currentDialogueYetiIndex = 0;

/////////////////////////////////////////////
////////FUNCTION FOR NPC Interaction/////////
/////////////////////////////////////////////

function checkNPCYetiInteraction() {
  let playerXCenter = xHero + wHero;
  let playerYCenter = yHero + hHero;
  let npcYetiXCenter = npcYetiX + npcYetiWidth;
  let npcYetiYCenter = npcYetiY + npcYetiHeight;

  let distance = dist(playerXCenter, playerYCenter, npcYetiXCenter, npcYetiYCenter); 
  if (distance < wHero + npcYetiWidth) {
    let textWidth = 1100; 
    let textHeight = 250;
    let textX = (width - textWidth) / 2;
    let textY = height - textHeight - 20;
    
    fill(0);
    image(boiteDeDialogueYeti, textX, textY, textWidth, textHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(dialoguesYeti[currentDialogueYetiIndex], textX + textWidth / 2 + 420, textY + textHeight / 2 + 55);

    // Retourne true pour indiquer que l'interaction a été traitée
    return true;
  }
  return false;
}