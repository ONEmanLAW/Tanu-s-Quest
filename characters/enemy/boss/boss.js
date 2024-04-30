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
