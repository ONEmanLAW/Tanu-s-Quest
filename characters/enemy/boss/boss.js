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

  currentBossImage = boss0;
}

function updateBossAnimation(animationArray) {
  movementCounterBoss += 1;
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
  { text: "GOBELIN JE VAIS TE TUER !!!", boxType: "Hero" },
  { text: "HAHA, ENCORE UN TANUKI,\n vient donc me tuer avant que je mange ta famille HAHA!", boxType: "Boss" },
  { text: "Tu n'as aucune chance !", boxType: "Boss" },
  { text: "TU VAS VOIR !!!", boxType: "Hero" },
];

let currentBossIntroductionIndex = 0;
let bossIntroActive = false;
let bossIntroFinish = false;
let lastPlayedBossIndex = -1;

function playCharacterSoundBoss(boxType) {
  if (boxType === "Hero") {
    if (!soundHero.isPlaying()) {
      soundHero.play();
      soundBoss.stop();
    }
  } else if (boxType === "Boss") {
    if (!soundBoss.isPlaying()) {
      soundBoss.play();
      soundHero.stop();
    }
  }
}


function gererIntroductionBoss() {
  if (bossIntroActive && currentBossIntroductionIndex < bossDialogues.length) {
    let dialogueActuel = bossDialogues[currentBossIntroductionIndex].text;
    let boxType = bossDialogues[currentBossIntroductionIndex].boxType;
    let textWidth = 1100;
    let textHeight = 250;
    let textX = (width - textWidth) / 2;
    let textY = height - textHeight - 15;

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

     // Jouer le son approprié si l'index a changé
     if (currentBossIntroductionIndex !== lastPlayedBossIndex) {
      playCharacterSoundBoss(boxType);
      lastPlayedBossIndex = currentBossIntroductionIndex;
    }
  }
}






let bossHealth = 100;
let bossMaxHealth = 100; 
let bossPhase = 0;
let bossDead = false;
let battleBoss = false;

let bossImagePhase0_1, bossImagePhase2, bossImagePhase3, bossImageDead;

function preloadBarDeVieBoss() {
  // Charger les images
  bossImagePhase0_1 = loadImage('characters/enemy/boss/assets/barreVie1.png');
  bossImagePhase2 = loadImage('characters/enemy/boss/assets/barreVie2.png');
  bossImagePhase3 = loadImage('characters/enemy/boss/assets/barreVie3.png');
  bossImageDead = loadImage('characters/enemy/boss/assets/barreVie4.png');
}

function drawBossHealthBar() {
  let bossImage;

  if (bossHealth <= 0) {
    bossImage = bossImageDead;
  } else if (bossPhase === 0 || bossPhase === 1) {
    bossImage = bossImagePhase0_1;
  } else if (bossPhase === 2) {
    bossImage = bossImagePhase2;
  } else if (bossPhase === 3) {
    bossImage = bossImagePhase3;
  }

  if (bossImage) {
    image(bossImage, 420, 50);
  }
}

