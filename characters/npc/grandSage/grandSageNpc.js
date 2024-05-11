/////////////////////////////////////////////
///////////VARIABLES FOR NPC/////////////////
/////////////////////////////////////////////

let npcGrandSageImage;
let boiteDeDialogue;

let npcGrandSageX = 5 * worldTempleTileSize; 
let npcGrandSageY = 6.50 * worldTempleTileSize ; 
let npcGrandSageWidth = worldTempleTileSize + 120; 
let npcGrandSageHeight= worldTempleTileSize + 50; 

let dialoguesGrandSage = [
  "Rends-toi à la forêt enchantée",
  "Vite tu n'as pas le temps il faut que tu ailles à la forêt enchantée",
  "Vite tu n'as pas le temps il faut que tu ailles à la forêt enchantée",
  "Combien de fois doit je te le repeter Tanu va à la forêt enchantée",
  "TU ME FAIT CHIER!!!!"
];

let currentDialogueGrandSageIndex = 0;

/////////////////////////////////////////////
////////FUNCTION FOR NPC Interaction/////////
/////////////////////////////////////////////

function checkGrandSageInteraction() {
  let playerXCenter = xHero + wHero / 2;
  let playerYCenter = yHero + hHero / 2;
  let npcGrandSageXCenter = npcGrandSageX + npcGrandSageWidth / 2;
  let npcGrandSageYCenter = npcGrandSageY + npcGrandSageHeight / 2;

  let textWidth = 1100; 
  let textHeight = 250;
  let textX = (width - textWidth) / 2 ;
  let textY = height - textHeight - 20 + 50;
  
  let distance = dist(playerXCenter, playerYCenter, npcGrandSageXCenter, npcGrandSageYCenter); 
  let interactionDistance = wHero / 2 + npcGrandSageWidth / 2 - 10; // Réduire de 10 pixels

  if (distance < interactionDistance) {
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
  mannequinImage = loadImage('characters/npc/mannequinTuto/mannequinTuto.png');
}



function preloadChatImage() {
  boiteDeDialogueGrandSage = loadImage('characters/dialogueBoxe/dialogueGrandSage.png');
  boiteDeDialogueHero = loadImage('characters/dialogueBoxe/dialogueTanu.png');
  boiteDeDialogueHeroTuto = loadImage('characters/dialogueBoxe/dialogueTanuTuto.png');
  boiteDeDialogueYeti = loadImage('characters/dialogueBoxe/dialogueYeti.png');

  boiteDeDialogueGrandSageSansN = loadImage('characters/dialogueBoxe/dialogueGrandSageSansN.png');
  boiteDeDialogueHeroSansN = loadImage('characters/dialogueBoxe/dialogueTanuSansN.png');

  boiteDeDialogueBoss = loadImage('characters/dialogueBoxe/grandDialogueBoss.png');
  boiteDeDialogueAlcimiste = loadImage('characters/dialogueBoxe/dialogueAlchimiste1.png');
  boiteDeDialogueGrenouille = loadImage('characters/dialogueBoxe/dialogueGrenouille1.png');
}









let dialoguesIntroduction = [
  { text: "Bienvenue, jeune Tanuki. Qu’est ce qui t'amène en ces temps sombres ?", boxType: "GrandSage" },
  { text: "Grand Sage, quelque chose de terrible est arrivé.\n Le village est détruit et je ne trouve personne ! J’ai besoin de votre aide !", boxType: "Hero" },
  { text: "Je crois savoir qui est le responsable ...\n Il y a bien longtemps, un énorme Gobelin est venu avec l'intention de détruire le village.\n J’ai réussi à le repousser, mais maintenant, il est de retour,\n et après toutes ces années de haine refoulée il est encore plus puissant que jamais !", boxType: "GrandSage" },
  { text: "Je ne savais pas... Mais comment allons-nous sauver les villageois et vaincre ce monstre ?", boxType: "Hero" },
  { text: "N’étant plus de taille à l’affronter personnellement. Ne t’inquiète pas ! Je vais t’entraîner.", boxType: "GrandSage" },
  { text: "Appuie sur 'q' pour aller à gauche.", boxType: "GrandSageSansN" },
  { text: "Appuie sur 'd' pour aller à droite.", boxType: "GrandSageSansN" },
  { text: "Appuie sur 'space' pour sauter.", boxType: "GrandSageSansN" },
  { text: "Appuie sur 'e' pour attaquer.", boxType: "GrandSageSansN" },
  { text: "Quand tu sera dans le village appuie sur 'z' pour aller vers le haut.", boxType: "GrandSageSansN" },
  { text: "Quand tu sera dans le village appuie sur 's' pour aller vers le bas.", boxType: "GrandSageSansN" },
  { text: "Parfait mainteant je vais t'expliquer le HUD.", boxType: "GrandSage" },
  { text: "En haut a gauche sont vos coeurs, attention si tu n'a plus de coeurs tu mourra.", boxType: "GrandSage" },
  { text: "Ici il y a ta barre qui contiendera ton épée", boxType: "GrandSage" },
  { text: "Ici tu pourra stocker tes potions", boxType: "GrandSage" },
  { text: "Ici tu pourra stocker les pierre que tu pourra récupére", boxType: "GrandSage" },
  { text: "Ici tu pourra voire le nombre de villagiois sauvée.", boxType: "GrandSage" },
  { text: "Merci Grand Sage tu verra je ramerai tout le monde au village.", boxType: "Hero" },
  { text: "Tiens! Avant de partir prends cette épée.\n Je te conseille de commencer ta quête en te rendant la forêt enchantée.", boxType: "GrandSage" },
  { text: "Une fois que tu est prêt appuie sur 'enter' pour commencer ton aventure.", boxType: "GrandSageSansN" },
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









let dialoguesInForet = [
  { text: "LE GRAND SAGE A UN MESSAGE POUR VOUS CRAOOOO", boxType: "Grenouille" },
  { text: "...", boxType: "Hero" },
  { text: "ALLooo", boxType: "GrandSage" },
  { text: "Oui grand Sage", boxType: "Hero" },
  { text: "ALLoooOOOOOOOOO !!!", boxType: "GrandSage" },
  { text: "OUIIIIII JE SUIS LAAAA !", boxType: "Hero" },
  { text: "Hohhh Tanu, oui oui désoler je sais pas bien tuiliser cette grenouille la tecnologie c top enfaite mais c dur", boxType: "GrandSage" },
  { text: "... ", boxType: "Hero" },
];

let currentDialogueForetIndex = 0;
let foretDialogActive = false;

function gererDialogueForet() {
  if (foretDialogActive && currentDialogueForetIndex < dialoguesInForet.length) {
    let dialogueActuel = dialoguesInForet[currentDialogueForetIndex].text;
    let boxType = dialoguesInForet[currentDialogueForetIndex].boxType;
    let textWidth = 1100; 
    let textHeight = 250; 
    let textX = (width - textWidth) / 2 ;
    let textY = height - textHeight - 20 + 50;
    
    let boiteDeDialogue;
    if (boxType === "Grenouille") {
      boiteDeDialogue = boiteDeDialogueGrenouille;
    } else if (boxType === "Hero") {
      boiteDeDialogue = boiteDeDialogueHeroTuto;
    } else if(boxType === "GrandSage") {
      boiteDeDialogue = boiteDeDialogueGrandSage;
    }
    
    fill(0);
    image(boiteDeDialogue, textX, textY, textWidth, textHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(dialogueActuel, textX + textWidth / 2 + 100, textY + textHeight / 2);
  }
}






///////// GRAND SAGE ANIMATION /////////////

let currentGrandSageIndex = 0;
let myGrandSageIdle = []; // Tableau pour les images d'attente du Grand Sage
let currentGrandSageImage = 0;
let movementCounterGrandSage = 0;

function preloadGrandSageImages() {
  // Idle Images for Grand Sage
  for (let i = 1; i <= 12; i++) {
    let imageName = 'characters/npc/grandSage/assets/sage_idle' + i + '.png';
    let image = loadImage(imageName);
    myGrandSageIdle.push(image);
  }
  currentGrandSageImage = myGrandSageIdle[0]; // Définition de l'image du Grand Sage actuelle
}

function updateGrandSageAnimation(animationArray) {
  movementCounterGrandSage += 1;

  // Réglez la vitesse de l'animation du Grand Sage comme vous le souhaitez
  // Par exemple, 10 images par image
  if (movementCounterGrandSage >= 10) {
    currentGrandSageIndex += 1;
    if (currentGrandSageIndex === animationArray.length) {
      currentGrandSageIndex = 0;
    }
    currentGrandSageImage = animationArray[currentGrandSageIndex];
    movementCounterGrandSage = 0;
  }
}