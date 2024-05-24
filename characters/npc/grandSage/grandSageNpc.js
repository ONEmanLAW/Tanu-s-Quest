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
  "Rends-toi au village Tanu.",
  "Vite tu n'as pas le temps il faut que tu ailles au village.",
  "Tanu, tout le monde compte sur toi, rends toi au village.",
  "Combien de fois doit je te le repeter Tanu va au village.",
  "On vas mourir ..."
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
  let textY = height - textHeight - 15;
  
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
  { text: "Bienvenue, jeune Tanuki.\n Qu’est-ce qui t'amène en ces temps sombres ?", boxType: "GrandSage" },
  { text: "Grand Sage, quelque chose de terrible est arrivé.\n Le village est détruit et je ne trouve personne!\n J’ai besoin de votre aide !", boxType: "Hero" },
  { text: "Il y a bien longtemps, le Gobelin est venu,\n avec l'intention de détruire le village.\n J’ai réussi à le repousser, mais maintenant, il est de retour!", boxType: "GrandSage" },
  { text: "Je ne savais pas...\n Mais comment allons-nous sauver les villageois et vaincre ce monstre ?", boxType: "Hero" },
  { text: "Je ne suis plus de taille à l’affronter personnellement.\n Mais ne t’inquiète pas! Je vais t’entraîner.", boxType: "GrandSage" },
  { text: "Appuie sur 'q' pour aller à gauche.", boxType: "GrandSageSansN" },
  { text: "Appuie sur 'd' pour aller à droite.", boxType: "GrandSageSansN" },
  { text: "Appuie sur 'space' pour sauter.", boxType: "GrandSageSansN" },
  { text: "Appuie sur 'e' pour attaquer.", boxType: "GrandSageSansN" },
  { text: "Dans le village, appuie sur 'z' pour aller vers le haut.", boxType: "GrandSageSansN" },
  { text: "Dans le village, appuie sur 's' pour aller vers le bas.", boxType: "GrandSageSansN" },
  { text: "Parfait, maintenant je vais t'expliquer le HUD.", boxType: "GrandSage" },
  { text: "En haut à gauche sont tes cœurs,\n attention si tu n'as plus de cœurs, tu mourras!", boxType: "GrandSage" },
  { text: "Ici, il y a ta barre qui contiendra ton épée.", boxType: "GrandSage" },
  { text: "Ici, tu pourras stocker tes potions,\n pour te redonner des cœurs.", boxType: "GrandSage" },
  { text: "Ici, tu pourras stocker les pierres,\n que tu pourras récupérer.", boxType: "GrandSage" },
  { text: "Ici, tu verra le nombre de villageois sauvés.", boxType: "GrandSage" },
  { text: "Merci, Grand Sage. Tu verras, je ramènerai tout le monde au village.", boxType: "Hero" },
  { text: "Attends, prends cette épée,\n et cette grenouille qui nous permettra de communiquer.\n Je te conseille de commencer ta quête en te rendant au village.", boxType: "GrandSage" },
  { text: "Une fois que tu es prêt pour partir,\n appuie sur 'enter' récupérer l'épée et la grenouille.", boxType: "GrandSageSansN" },
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
    let textY = height - textHeight - 15;
    
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
  { text: "LE GRAND SAGE A UN MESSAGE POUR VOUS CROAAAA", boxType: "Grenouille" },
  { text: "...", boxType: "Hero" },
  { text: "Allooo ?!", boxType: "GrandSage" },
  { text: "Oui Grand Sage.", boxType: "Hero" },
  { text: "AlllOOOOLLLLL ??!!", boxType: "GrandSage" },
  { text: "OUIIII JE SUIS LAAA !!!", boxType: "Hero" },
  { text: "Hohhh Tanu, oui désolé je sais pas bien utiliser cette grenouille.\nLa technologie c'est est tellement complexe.", boxType: "GrandSage" },
  { text: "...", boxType: "Hero" },
  { text: "Bon, il faut que tu sauves les 9 Tanuki qui sont dans la forêt,\ntu peux voir en haut à gauche, combien tu as n'a sauvé.", boxType: "GrandSage" },
  { text: "Tu pourras pas sortir tant que tu les auras pas sauvé.", boxType: "GrandSage" },
  { text: "Mais fait attention il y a des gobelins!", boxType: "GrandSage" },
  { text: "Attention au gobelin Tueur avec les yeux rouges.\n Ce sont les plus dangereux!", boxType: "GrandSage" },
  { text: "Ne oublie pas la pierre de la terre.\nJe t'expliquerai plus tard à quoi ça sert.", boxType: "GrandSage" },
  { text: "LE GRAND SAGE A FINIT DE VOUS PARLER CROAAAA", boxType: "Grenouille" },
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
    let textY = height - textHeight - 15;
    
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



let dialoguesFinishForet = [
  { text: "LE GRAND SAGE A UN MESSAGE POUR VOUS CROAAAA", boxType: "Grenouille" },
  { text: "...", boxType: "Hero" },
  { text: "Tanu je ressens que tu a sauvé tout les villagois.", boxType: "GrandSage" },
  { text: "Tu a aussi récupérer la pierre de la terre.", boxType: "GrandSage" },
  { text: "Je te l'ai pas dit.\n Mais les quatres pierres te permettrons d'ouvrir le portails.\n Tu pourra aller au chateau et vaincre le boss.", boxType: "GrandSage" },
  { text: "Tu pourras récupérer les autres pierres pendant ta quête", boxType: "GrandSage" },
  { text: "En revenant au village, va voir l'alchimiste.\nPour qu'il te donne ces fameuses potions pour te soigner.", boxType: "GrandSage" },
  { text: "LE GRAND SAGE A FINIT DE VOUS PARLER CROAAAA", boxType: "Grenouille" },
];

let currentDialogueFinishForetIndex = 0;
let foretFinishDialogActive = false;
let foretFinishDialogFinish = false;

function gererDialogueFinishForet() {
  if (foretFinishDialogActive && currentDialogueFinishForetIndex < dialoguesFinishForet.length) {
    let dialogueActuel = dialoguesFinishForet[currentDialogueFinishForetIndex].text;
    let boxType = dialoguesFinishForet[currentDialogueFinishForetIndex].boxType;
    let textWidth = 1100; 
    let textHeight = 250; 
    let textX = (width - textWidth) / 2 ;
    let textY = height - textHeight - 15;
    
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









