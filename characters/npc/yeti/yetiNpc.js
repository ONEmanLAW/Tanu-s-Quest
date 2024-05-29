let npcYetiX = 12 * worldVillageTileSize; 
let npcYetiY = 10 * worldVillageTileSize ; 
let npcYetiWidth = worldVillageTileSize + 10; 
let npcYetiHeight= worldVillageTileSize + 25;

let npcYetiX2 = 15 * worldVillageTileSize; 
let npcYetiY2 = 5 * worldVillageTileSize ; 
let npcYetiWidth2 = worldVillageTileSize + 10; 
let npcYetiHeight2 = worldVillageTileSize + 25;






let dialoguesYeti = [
  { text: "OHHHHHHHH !!!", boxType: "Yeti" },
  { text: "!!!", boxType: "Hero" },
  { text: "Enfin quelqu'un!\nJe commençais à croire que le ciel me tombait sur la tête.", boxType: "Yeti" },
  { text: "Bonjour, qui êtes-vous ?", boxType: "Hero" },
  { text: "Je suis le Yeti.\nMa petite voix me dit que vous aller à la Forêt.", boxType: "Yeti" },
  { text: "Comment... vous savez?", boxType: "Hero" },
  { text: "OHHHHHHH, tu vas dans la Forêt !???", boxType: "Yeti" },
  { text: "Oui je dois sauver ma famille", boxType: "Hero" },
  { text: "J'ai quelques choses à te proposer,\n j'ai besoin d'une écorce,\n c'est pour cela que je suis venue ici.", boxType: "Yeti" },
  { text: "Une Ecorse ???", boxType: "Hero" },
  { text: "Oui il y a une écorce dans la forêt.\n Apporte-la-moi et je te donnerai quelques choses\nqui pourrait t'aider à sauver ta famille.", boxType: "Yeti" },
  { text: "En attendant cet endroit sans la brulée.\n J'aime bien je vais m'y installer.", boxType: "Yeti" },
  { text: "Une fois que tu as l'écorce\n rejointe moi au sud west du village dans ma maison.\nJe t'attenterai OHHHHHH.", boxType: "Yeti" },
  // Ajoute d'autres dialogues ici selon le besoin
];

let yetiDialogActive = false;
let conversationYetiFinished = false;
let currentYetiIndexQuete = 0; // Renommage de la variable
let lastPlayedYetiIndex = -1;

function playCharacterSoundYetiPart(boxType) {
  if (boxType === "Hero") {
    soundHero.play();
    soundYeti.stop();
  } else if (boxType === "Yeti") {
    if (!soundYeti.isPlaying()) {
      soundYeti.play();
      soundHero.stop();
    }
  }  
}

function gererDialoguesYeti() {
  if (yetiDialogActive && currentYetiIndexQuete < dialoguesYeti.length) {
    let dialogueActuel = dialoguesYeti[currentYetiIndexQuete].text;
    let boxType = dialoguesYeti[currentYetiIndexQuete].boxType;
    let textWidth = 1150; 
    let textHeight = 275; 
    let textX = (width - textWidth) / 2 + 300;
    let textY = height - textHeight - 20 + 65;
    
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

    // Jouer le son approprié si l'index a changé
    if (currentYetiIndexQuete !== lastPlayedYetiIndex) {
      playCharacterSoundYetiPart(boxType);
      lastPlayedYetiIndex = currentYetiIndexQuete;
    }
  } else {
    yetiDialogActive = false; // Désactive le dialogue du Yeti une fois que tous les dialogues ont été affichés
  }
}










let conversationYetiFinishedEcorse = false;

let dialoguesYetiEcorse = [
  { text: "OHHHHHHHHHHHHHHHHHH", boxType: "Yeti" },
  { text: "....", boxType: "Hero" },
  { text: "TANU, j'ai entendu tes exploi dans la foret,\n tu a pu ramener l'ecorcsse", boxType: "Yeti" },
  { text: "Oui le voici", boxType: "Hero" },
  { text: "INcroyable MERCI", boxType: "Yeti" },
  { text: "Voici pour toi.", boxType: "Yeti" },
  { text: "J'ai forgé cette épée avec soin.", boxType: "Yeti" },
  { text: "Tu ferra deux fois plus de dégats au Gobelin.", boxType: "Yeti" },
  { text: "Bonne chance.", boxType: "Yeti" },
  { text: "Merci.", boxType: "Hero" },
  // Ajoute d'autres dialogues ici selon le besoin
];

let yetiDialogActiveEcorse = false;
let currentYetiIndexQueteEcorse = 0; // Renommage de la variable
let newSword = false; 

function gererDialoguesYetiEcorse() {
  if (yetiDialogActiveEcorse && currentYetiIndexQueteEcorse < dialoguesYetiEcorse.length) {
    let dialogueActuel = dialoguesYetiEcorse[currentYetiIndexQueteEcorse].text;
    let boxType = dialoguesYetiEcorse[currentYetiIndexQueteEcorse].boxType;
    let textWidth = 1150; 
    let textHeight = 275; 

    let textX = npcYetiX2 + (npcYetiWidth2 - textWidth) / 2 - 200; // Centrer horizontalement par rapport au Yeti
    let textY = npcYetiY2 - textHeight - 10; // Juste au-dessus du Yeti avec un petit décalage

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
    text(dialogueActuel, textX + 60 + textWidth / 2, textY + textHeight / 2);
  } else {
    yetiDialogActiveEcorse = false;
  }
}

function checkYetiInteraction() {
  let playerXCenter = xHero + wHero / 2;
  let playerYCenter = yHero + hHero / 2;
  let npcYetiXCenter = npcYetiX2 + npcYetiWidth2 / 2;
  let npcYetiYCenter = npcYetiY2 + npcYetiHeight2 / 2;

  let interactionDistance = wHero / 2 + npcYetiWidth2 / 2 - 10;

  let distance = dist(playerXCenter, playerYCenter, npcYetiXCenter, npcYetiYCenter); 

  if (distance < interactionDistance) {
    yetiDialogActiveEcorse = true; // Activer le dialogue du Yeti
    return true;
  }

  return false;
}





let conversationYetiFinishedEcorse2 = false;

let dialoguesYetiEcorse2 = [
  { text: "OHHHHHHHHHHHHHHHHHH", boxType: "Yeti" },
  { text: "....", boxType: "Hero" },
  { text: "TANU, j'ai entendu tes exploi dans la foret,\n tu a pu ramener l'ecorcsse", boxType: "Yeti" },
  { text: "Non maleresuement... ", boxType: "Hero" },
  { text: "Ah je suis plutot décu...", boxType: "Yeti" },
  { text: "Je pense que tu a plein de choses a faire aurevoir.", boxType: "Yeti" },
  // Ajoute d'autres dialogues ici selon le besoin
];

let yetiDialogActiveEcorse2 = false;
let currentYetiIndexQueteEcorse2 = 0; // Renommage de la variable

function gererDialoguesYetiEcorse2() {
  if (yetiDialogActiveEcorse2 && currentYetiIndexQueteEcorse2 < dialoguesYetiEcorse2.length) {
    let dialogueActuel = dialoguesYetiEcorse2[currentYetiIndexQueteEcorse2].text;
    let boxType = dialoguesYetiEcorse2[currentYetiIndexQueteEcorse2].boxType;
    let textWidth = 1150; 
    let textHeight = 275; 
    
    // Positionner le texte juste au-dessus du Yeti
    let textX = npcYetiX2 + (npcYetiWidth2 - textWidth) / 2 - 200; // Centrer horizontalement par rapport au Yeti
    let textY = npcYetiY2 - textHeight - 10; // Juste au-dessus du Yeti avec un petit décalage
    
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
    text(dialogueActuel, textX + 60 + textWidth / 2, textY + textHeight / 2);
  } else {
    yetiDialogActiveEcorse2 = false; // Désactive le dialogue du Yeti une fois que tous les dialogues ont été affichés
  }
}



function checkYetiInteraction2() {
  let playerXCenter = xHero + wHero / 2;
  let playerYCenter = yHero + hHero / 2;
  let npcYetiXCenter = npcYetiX2 + npcYetiWidth2 / 2;
  let npcYetiYCenter = npcYetiY2 + npcYetiHeight2 / 2;

  let interactionDistance = wHero / 2 + npcYetiWidth2 / 2 - 10;

  let distance = dist(playerXCenter, playerYCenter, npcYetiXCenter, npcYetiYCenter); 

  if (distance < interactionDistance) {
    yetiDialogActiveEcorse2 = true; // Activer le dialogue du Yeti
    return true;
  }

  return false;
}














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






