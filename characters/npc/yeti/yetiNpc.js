let npcYetiX = 12 * worldVillageTileSize; 
let npcYetiY = 10 * worldVillageTileSize ; 
let npcYetiWidth = worldVillageTileSize + 10; 
let npcYetiHeight= worldVillageTileSize + 25;

let conversationYetiFinished = false;



let dialoguesYeti = [
  { text: "OHHHHHHHHHHHHHHHH", boxType: "Yeti" },
  { text: "....", boxType: "Hero" },
  { text: "OH enfin quelqu'un comment, je commencais a croire que le ciel me tombait sur le tête.", boxType: "Yeti" },
  { text: "Bonjour auriez vous vu des tanuki ce faire kidnapper", boxType: "Hero" },
  { text: "Non pas du tout je suis la pour vendre des armes.", boxType: "Yeti" },
  { text: "Je pense me dérigier vers la fôret comme a dit le grand sage", boxType: "Hero" },
  { text: "OHHHHHHH, tu va dans la Fôret !!!???", boxType: "Yeti" },
  { text: "Eux oui.... excusez moi mais j'ai vraiment pas le temps...", boxType: "Hero" },
  { text: "J'ai quelque choses a te proposer, j'ai besoin d'une ecorse, c'est pour cela que je suis venu ici.", boxType: "Yeti" },
  { text: "Une Ecorse ???", boxType: "Hero" },
  { text: "Oui il y a une ecorse dans le fôret apporte la moi et je te donnerai quel que choses tu ne regrettera pas.", boxType: "Yeti" },
  { text: "En attandant cette endroit sans le brulée j'aime bien je vais m'y installer.", boxType: "Yeti" },
  { text: "Une fois que tu a l'ecorsse rejoint moi au sud west du village je t'attenderai OHHHHHH.", boxType: "Yeti" },
  // Ajoute d'autres dialogues ici selon le besoin
];

let yetiDialogActive = false;
let currentYetiIndexQuete = 0; // Renommage de la variable

function gererDialoguesYeti() {
  if (yetiDialogActive && currentYetiIndexQuete < dialoguesYeti.length) {
    let dialogueActuel = dialoguesYeti[currentYetiIndexQuete].text;
    let boxType = dialoguesYeti[currentYetiIndexQuete].boxType;
    let textWidth = 1100; 
    let textHeight = 250; 
    let textX = (width - textWidth) / 2 ;
    let textY = height - textHeight - 20 + 50;
    
    let boiteDeDialogue;
    if (boxType === "Yeti") {
      boiteDeDialogue = boiteDeDialogueYeti;
    } else if (boxType === "Hero") {
      boiteDeDialogue = boiteDeDialogueHero;
    }
    
    fill(0);
    image(boiteDeDialogue, textX, textY, textWidth, textHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(dialogueActuel, textX + textWidth / 2 + 100, textY + textHeight / 2);
    
    // Vérifie si c'est le dernier dialogue
    if (currentYetiIndexQuete === dialoguesYeti.length - 1) {
      conversationYetiFinished = true;
      yetiDialogActive = false;

      //dialoguesYeti.splice(0, currentYetiIndexQuete + 1);
    }
  }
}






// let dialoguesYeti = [
//   "Grrr, tu oses t'approcher de moi ?",
//   "Je suis le puissant Yeti, roi de ces montagnes !",
//   "Si tu ne veux pas finir en déjeuner, éloigne-toi !",
//   "Mais... tu sembles différent des autres humains.",
//   "Tu n'aurais pas une friandise à me donner, par hasard ?",
//   "J'ai trop parler avec toi. Me parle pas !"
// ];

// let currentDialogueYetiIndex = 0;

// /////////////////////////////////////////////
// ////////FUNCTION FOR NPC Interaction/////////
// /////////////////////////////////////////////

// function checkNPCYetiInteraction() {
//   let playerXCenter = xHero + wHero;
//   let playerYCenter = yHero + hHero;
//   let npcYetiXCenter = npcYetiX + npcYetiWidth;
//   let npcYetiYCenter = npcYetiY + npcYetiHeight;

//   let distance = dist(playerXCenter, playerYCenter, npcYetiXCenter, npcYetiYCenter); 
//   if (distance < wHero + npcYetiWidth) {
//     let textWidth = 1100; 
//     let textHeight = 250;
//     let textX = (width - textWidth) / 2;
//     let textY = height - textHeight - 20;
    
//     fill(0);
//     image(boiteDeDialogueYeti, textX, textY, textWidth, textHeight);
//     textSize(20);
//     textAlign(CENTER, CENTER);
//     fill(255);
//     text(dialoguesYeti[currentDialogueYetiIndex], textX + textWidth / 2 + 420, textY + textHeight / 2 + 55);

//     // Si c'est le dernier dialogue, marque la conversation comme terminée
//     if (currentDialogueYetiIndex === dialoguesYeti.length - 1) {
//       conversationYetiFinished = true;
//     }

//     // Retourne true pour indiquer que l'interaction a été traitée
//     return true;
//   }
//   return false;
// }


let currentYetiIndex = 0;
let myYetiIdle = [];
let currentYetiImage = 0;
let movementCounterYeti = 0;

function preloadYetiImages() {
  // Idle Images for Yeti
  yeti0 = loadImage('characters/npc/yeti/yeti_animation_idle1.png');
  myYetiIdle.push(yeti0);
  yeti1 = loadImage('characters/npc/yeti/yeti_animation_idle2.png');
  myYetiIdle.push(yeti1);
  yeti2 = loadImage('characters/npc/yeti/yeti_animation_idle3.png');
  myYetiIdle.push(yeti2);
  yeti3 = loadImage('characters/npc/yeti/yeti_animation_idle4.png');
  myYetiIdle.push(yeti3);
  yeti4 = loadImage('characters/npc/yeti/yeti_animation_idle5.png');
  myYetiIdle.push(yeti4);
  yeti5 = loadImage('characters/npc/yeti/yeti_animation_idle6.png');
  myYetiIdle.push(yeti5);
  yeti6 = loadImage('characters/npc/yeti/yeti_animation_idle7.png');
  myYetiIdle.push(yeti6);
  yeti7 = loadImage('characters/npc/yeti/yeti_animation_idle8.png');
  myYetiIdle.push(yeti7);

  currentYetiImage = yeti0; // Définition de l'image de héros actuelle
}



function updateYetiAnimation(animationArray) {
  movementCounterYeti += 1;
  // Réglez la vitesse de l'animation du Yeti comme vous le souhaitez
  // Par exemple, 20 frames par image
  if (movementCounterYeti >= 15) {
    currentYetiIndex += 1;
    if (currentYetiIndex === animationArray.length) {
      currentYetiIndex = 0;
    }
    currentYetiImage = animationArray[currentYetiIndex];
    movementCounterYeti = 0;
  }
}






