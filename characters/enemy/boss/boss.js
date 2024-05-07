let bossX = 7 * worldBossTileSize; 
let bossY = 4 * worldBossTileSize ; 
let bossWidth = worldBossTileSize * 6; 
let bossHeight= worldBossTileSize * 6;


let currentBossIndex = 0;
let myBossIdle = [];
let currentBossImage = 0;
let movementCounterBoss = 0;

function preloadBossImages() {
  // Idle Images for the Boss
  let boss0 = loadImage('characters/enemy/boss/assets/BossGobelin_idle1.png');
  myBossIdle.push(boss0);
  let boss1 = loadImage('characters/enemy/boss/assets/BossGobelin_idle2.png');
  myBossIdle.push(boss1);
  let boss2 = loadImage('characters/enemy/boss/assets/BossGobelin_idle3.png');
  myBossIdle.push(boss2);
  let boss3 = loadImage('characters/enemy/boss/assets/BossGobelin_idle4.png');
  myBossIdle.push(boss3);
  let boss4 = loadImage('characters/enemy/boss/assets/BossGobelin_idle5.png');
  myBossIdle.push(boss4);
  let boss5 = loadImage('characters/enemy/boss/assets/BossGobelin_idle6.png');
  myBossIdle.push(boss5);
  let boss6 = loadImage('characters/enemy/boss/assets/BossGobelin_idle7.png');
  myBossIdle.push(boss6);
  let boss7 = loadImage('characters/enemy/boss/assets/BossGobelin_idle8.png');
  myBossIdle.push(boss7);
  let boss8 = loadImage('characters/enemy/boss/assets/BossGobelin_idle9.png');
  myBossIdle.push(boss8);
  let boss9 = loadImage('characters/enemy/boss/assets/BossGobelin_idle10.png');
  myBossIdle.push(boss9);
  let boss10 = loadImage('characters/enemy/boss/assets/BossGobelin_idle11.png');
  myBossIdle.push(boss10);
  let boss11 = loadImage('characters/enemy/boss/assets/BossGobelin_idle12.png');
  myBossIdle.push(boss11);

  currentBossImage = boss0; // Définition de l'image de boss actuelle
}

function updateBossAnimation(animationArray) {
  movementCounterBoss += 1;
  // Réglez la vitesse de l'animation du boss comme vous le souhaitez
  // Par exemple, 15 frames par image
  if (movementCounterBoss >= 8) {
    currentBossIndex += 1;
    if (currentBossIndex === animationArray.length) {
      currentBossIndex = 0;
    }
    currentBossImage = animationArray[currentBossIndex];
    movementCounterBoss = 0;
  }
}





let bossDialogues = [
  { text: "Je suis le terrifiant Boss Gobelin, et je suis revenu pour réduire ce village en cendres !", boxType: "Boss" },
  { text: "Tanuki, tu oses te dresser contre moi ? Tu n'as aucune chance !", boxType: "Boss" },
  { text: "TU VAS VOIRE !!!", boxType: "Hero" },
];

let currentBossIntroductionIndex = 0;
let bossIntroActive = false;

function gererIntroductionBoss() {
  if (bossIntroActive && currentBossIntroductionIndex < bossDialogues.length) {
    let dialogueActuel = bossDialogues[currentBossIntroductionIndex].text;
    let boxType = bossDialogues[currentBossIntroductionIndex].boxType;
    let textWidth = 1100;
    let textHeight = 250;
    let textX = (width - textWidth) / 2;
    let textY = height - textHeight - 20 + 50;

    let boiteDeDialogue;
    if (boxType === "Boss") {
      boiteDeDialogue = boiteDeDialogueBoss;
    } else if (boxType === "Hero") {
      boiteDeDialogue = boiteDeDialogueHeroTuto;
    }
    
    fill(0);
    image(boiteDeDialogue, textX, textY, textWidth, textHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(dialogueActuel, textX + textWidth / 2 + 100, textY + textHeight / 2);
  }
}
