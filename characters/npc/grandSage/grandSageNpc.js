/////////////////////////////////////////////
///////////VARIABLES FOR NPC/////////////////
/////////////////////////////////////////////

let npcGrandSageImage;
let boiteDeDialogue;

let npcGrandSageX = 5 * worldTempleTileSize; 
let npcGrandSageY = 6.50 * worldTempleTileSize ; 
let npcGrandSageWidth = worldTempleTileSize + 10; 
let npcGrandSageHeight= worldTempleTileSize + 50; 

let dialoguesGrandSage = [
  "Rends-toi à la forêt enchantée",
  "Vite tu n’as pas le temps il faut que tu ailles à la forêt enchantée",
  "Vite tu n’as pas le temps il faut que tu ailles à la forêt enchantée",
  "Combien de fois doit je te le repeter Tanu va à la forêt enchantée",
  "TU ME FAIT CHIER!!!!"
];

let currentDialogueGrandSageIndex = 0;

/////////////////////////////////////////////
////////FUNCTION FOR NPC Interaction/////////
/////////////////////////////////////////////

function checkGrandSageInteraction() {
  let playerXCenter = xHero + wHero;
  let playerYCenter = yHero + hHero;
  let npcGrandSageXCenter = npcGrandSageX + npcGrandSageWidth;
  let npcGrandSageYCenter = npcGrandSageY + npcGrandSageHeight;

    let textWidth = 1100; 
    let textHeight = 250;
    let textX = (width - textWidth) / 2 ;
    let textY = height - textHeight - 20 + 50;
    
  let distance = dist(playerXCenter, playerYCenter, npcGrandSageXCenter, npcGrandSageYCenter); 
  if (distance < wHero + npcGrandSageWidth) {
      fill(0);
      image(boiteDeDialogueGrandSage, textX, textY, textWidth, textHeight);
      textSize(20);
      textAlign(CENTER, CENTER);
      fill(255);
      text(dialoguesGrandSage[currentDialogueGrandSageIndex], textX + textWidth / 2 + 100, textY + textHeight / 2);

      return true;
  }

  return false;
}





function preloadNPCImages() {
  npcGrandSageImage = loadImage('characters/npc/grandSage/sage_test.png');
  mannequinImage = loadImage('characters/npc/mannequinTuto/mannequinTuto.png');
}



function preloadChatImage() {
  boiteDeDialogueGrandSage = loadImage('characters/dialogueBoxe/dialogueGrandSage.png');
  boiteDeDialogueHero = loadImage('characters/dialogueBoxe/dialogueTanu.png');
  boiteDeDialogueHeroTuto = loadImage('characters/dialogueBoxe/dialogueTanuTuto.png');
  boiteDeDialogueYeti = loadImage('characters/dialogueBoxe/dialogueYeti.png');

  boiteDeDialogueGrandSageSansN = loadImage('characters/dialogueBoxe/dialogueGrandSageSansN.png');
  boiteDeDialogueHeroSansN = loadImage('characters/dialogueBoxe/dialogueTanuSansN.png');
}




// let tutoEnCours = false;
// let currentDialogueIndex = 0;

// let dialoguesTutoriel = [
//   "Appuyez sur 'q' pour aller à gauche.",
//   "Appuyez sur 'd' pour aller à droite.",
//   "Appuez sur 'space' pour sauter",
// ];

// function gererTutoriel() {
//   if (tutoEnCours) {
//     let dialogueActuel = dialoguesTutoriel[currentDialogueIndex];
//     let textWidth = 1100; 
//     let textHeight = 250; 
//     let textX = (width - textWidth) / 2 ;
//     let textY = height - textHeight - 20 + 50;
    
//     fill(0);
//     image(boiteDeDialogueGrandSage, textX, textY, textWidth, textHeight);
//     textSize(20);
//     textAlign(CENTER, CENTER);
//     fill(255);
//     text(dialogueActuel, textX + textWidth / 2 + 100, textY + textHeight / 2);
//   }
// }


let dialoguesIntroduction = [
  { text: "Bienvenue, jeune Tanuki. Qu’est ce qui t'amène en ces temps sombres ?", boxType: "GrandSage" },
  { text: "Grand Sage, quelque chose de terrible est arrivé.\n Le village est détruit et je ne trouve personne ! J’ai besoin de votre aide !", boxType: "Hero" },
  { text: "Je crois savoir qui est le responsable ...\n Il y a bien longtemps, un énorme Gobelin est venu avec l'intention de détruire le village.\n J’ai réussi à le repousser, mais maintenant, il est de retour,\n et après toutes ces années de haine refoulée il est encore plus puissant que jamais !", boxType: "GrandSage" },
  { text: "Je ne savais pas... Mais comment allons-nous sauver les villageois et vaincre ce monstre ?", boxType: "Hero" },
  { text: "N’étant plus de taille à l’affronter personnellement. Ne t’inquiète pas ! Je vais t’entraîner.", boxType: "GrandSage" },
  { text: "Appuyez sur 'q' pour aller à gauche.", boxType: "GrandSageSansN" },
  { text: "Appuyez sur 'd' pour aller à droite.", boxType: "GrandSageSansN" },
  { text: "Appuyez sur 'space' pour sauter.", boxType: "GrandSageSansN" },
  { text: "Tiens! Avant de partir prends cette épée. Je te conseille de commencer ta quête par la forêt enchantée.", boxType: "GrandSage" },
  { text: "Une fois que tu est prêt appuie sur Entrer pour commencer ton avanture.", boxType: "GrandSageSansN" },
];

let currentIntroductionIndex = 0;
let introDialogActive = false;

function gererIntroduction() {
  if (introDialogActive && currentIntroductionIndex < dialoguesIntroduction.length) {
    let dialogueActuel = dialoguesIntroduction[currentIntroductionIndex].text;
    let boxType = dialoguesIntroduction[currentIntroductionIndex].boxType;
    let textWidth = 1100; 
    let textHeight = 250; 
    let textX = (width - textWidth) / 2 ;
    let textY = height - textHeight - 20 + 50;
    
    let boiteDeDialogue;
    if (boxType === "GrandSage") {
      boiteDeDialogue = boiteDeDialogueGrandSage;
    } else if (boxType === "Hero") {
      boiteDeDialogue = boiteDeDialogueHeroTuto;
    } else if (boxType === "GrandSageSansN") {
      boiteDeDialogue = boiteDeDialogueGrandSageSansN
    }
    
    fill(0);
    image(boiteDeDialogue, textX, textY, textWidth, textHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(dialogueActuel, textX + textWidth / 2 + 100, textY + textHeight / 2);
  }
}

