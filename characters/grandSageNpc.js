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
  npcGrandSageImage = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite1.png');
  npcYetiImage = loadImage('characters/hero/assets/yeti_animation_idle1.png');
}



function preloadChatImage() {
  boiteDeDialogueGrandSage = loadImage('dialogueGrandSage.png');
  boiteDeDialogueHero = loadImage('dialogueTanu.png');
  boiteDeDialogueYeti = loadImage('dialogueYeti.png')
}




let tutoEnCours = false;
let currentDialogueIndex = 0;

let dialoguesTutoriel = [
  "Appuyez sur 'q' pour aller à gauche.",
  "Appuyez sur 'd' pour aller à droite.",
  "Appuez sur 'space' pour sauter",
  ""
];

function gererTutoriel() {
  if (tutoEnCours) {
    let dialogueActuel = dialoguesTutoriel[currentDialogueIndex];
    let textWidth = 800;
    let textHeight = 200; 
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


let dialoguesIntroduction = [
  { text: "Grand Sage : \"Bienvenue, jeune Tanuki. Qu’est ce qui t'amène en ces temps sombres ?\"", boxType: "GrandSage" },
  { text: "Tanuki : inquiet \"Grand Sage, quelque chose de terrible est arrivé. Le village est détruit et je ne trouve personne ! J’ai besoin de votre aide !\"", boxType: "Hero" },
  { text: "Grand Sage : \"Je crois savoir qui est le responsable ... Il y a bien longtemps, un énorme Gobelin est venu avec l'intention de détruire le village. J’ai réussi à le repousser, mais maintenant, il est de retour, et après toutes ces années de haine refoulée il est encore plus puissant que jamais !\"", boxType: "GrandSage" },
  { text: "Tanuki : étonné \"Je ne savais pas... Mais comment allons-nous sauver les villageois et vaincre ce monstre ?\"", boxType: "Hero" },
  { text: "Grand Sage : \"N’étant plus de taille à l’affronter personnellement. Ne t’inquiète pas ! Je vais t’entraîner.\"", boxType: "GrandSage" }
];

let currentIntroductionIndex = 0;
let introDialogActive = false;

function gererIntroduction() {
  if (introDialogActive && currentIntroductionIndex < dialoguesIntroduction.length) {
    let dialogueActuel = dialoguesIntroduction[currentIntroductionIndex].text;
    let boxType = dialoguesIntroduction[currentIntroductionIndex].boxType;
    let textWidth = 800; 
    let textHeight = 200; 
    let textX = (width - textWidth) / 2;
    let textY = height - textHeight - 20;
    
    let boiteDeDialogue;
    if (boxType === "GrandSage") {
      boiteDeDialogue = boiteDeDialogueGrandSage;
    } else if (boxType === "Hero") {
      boiteDeDialogue = boiteDeDialogueHero;
    }
    
    fill(0);
    image(boiteDeDialogue, textX, textY, textWidth, textHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(dialogueActuel, textX + textWidth / 2, textY + textHeight / 2);
  }
}



let npcYetiImage;
let boiteDeDialogueHero;

let npcYetiX = 12 * worldVillageTileSize; 
let npcYetiY = 10 * worldVillageTileSize ; 
let npcYetiWidth = worldVillageTileSize + 10; 
let npcYetiHeight= worldVillageTileSize + 25;
