/////////////////////////////////////////////
///////////VARIABLES FOR HERO////////////////
/////////////////////////////////////////////

//Spawn of Hero.
let xHero = 17 * worldTempleTileSize;
let yHero = 7 * worldTempleTileSize;

// Size of Hero.
let wHero = worldTempleTileSize;
let hHero = worldTempleTileSize;


function adjustHeroSize(currentWorld) {
  wHero = worldsTileSizes[currentWorld];
  hHero = worldsTileSizes[currentWorld];
}

// Animation for Hero.
let heroSpeed = 7;

let myHeroRight = [];
let myHeroLeft = [];

let myHeroVillageLeft = [];
let myHeroVillageRight = [];
let myHeroVillageBottom = [];
let myHeroVillageTop = [];
let myHeroVillageIdleBottom = [];
let myHeroVillageIdleLeft = [];
let myHeroVillageIdleRight = [];
let myHeroVillageIdleTop = [];
let myHeroIdleRight = [];
let myHeroIdleLeft = [];
let currentIndex = 0;
let currentVillageIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;
let currentHeroVillageImage = 0;


// Mouvement Automatique Peronnage. Temple
let animationCounter = 0;
let animation = true;
let movementSpeed = worldTempleTileSize / 16;

// Movement automatique arrivée au village
let animationCounterVillage = 0;
let animationVillage = true;
let movementSpeedVillage = worldVillageTileSize / 16


// Life of Hero.
let hearts = 3;
let heartImage;
let gameOver = false;


//// Hearts

function preloadHeartImage() {
  heartImage = loadImage('assets/Images/heart.png');
}

function loseHeart() {
  if (hearts > 0 && !heroInvincible) { 
    hearts--;
    if (hearts === 0) {
      gameOver = true; 
    } else {
      activateCooldown();
    }
  }
};


let cameraX = 0;
let cameraY = 0;
function drawHearts() {
  const heartWidth = 80;
  const heartHeight = 80;
  const spacing = 10;
  const marginX = 20;
  const marginY = 20;

  // Déterminer la position absolue des cœurs en tenant compte de la caméra
  let absoluteMarginX = marginX + cameraX;
  let absoluteMarginY = marginY + cameraY;

  for (let i = 0; i < hearts; i++) {
    let x = absoluteMarginX + i * (heartWidth + spacing);

    // Dessiner l'image du cœur
    image(heartImage, x, absoluteMarginY, heartWidth, heartHeight);
  }
}

let heroInvincible = false;
let cooldownTimer = 0;
const cooldownDuration = 1500;


function activateCooldown() {
  heroInvincible = true; 
  cooldownTimer = millis();
};


function handleCooldown() {
  // Vérifier si le cooldown est actif
  if (heroInvincible) {
    // Calculer le temps écoulé depuis le début du cooldown
    let elapsedTime = millis() - cooldownTimer;
    // Vérifier si le temps écoulé dépasse la durée du cooldown
    if (elapsedTime >= cooldownDuration) {
      // Désactiver le cooldown
      resetCooldown();
    }
  }
};

function resetCooldown() {
  heroInvincible = false; // Désactiver l'invincibilité du héros
};













// let isAttacking = false;
// let attackDirection = 'right'; // Par défaut, le héros regarde vers la droite

// // Fonction pour détecter l'orientation du héros
// function detectDirection() {
//   // Vérifier si le joueur a appuyé sur les touches de déplacement
//   if (keyIsDown(68)) {
//     attackDirection = 'right';
//   } else if (keyIsDown(81)) {
//     attackDirection = 'left';
//   }
// }

// // Fonction pour gérer l'attaque
// function attack() {
//   isAttacking = true;
  
//   // Sauvegarder la position x et y du héros avant l'attaque
//   let originalX = xHero;
  
//   // Sauvegarder la largeur du héros avant l'attaque
//   let originalWidth = wHero;
  
//   if (attackDirection === 'right') {
//     wHero *= 2; // Augmente la largeur de wHero pour une attaque vers la droite
//   } else if (attackDirection === 'left') {
//     wHero *= -2; // Inverse la largeur de wHero pour une attaque vers la gauche
//   }
  
//   // Réinitialiser la position du héros après l'attaque
//   xHero = originalX;
// }

// // Fonction pour détecter les collisions entre le héros et l'ennemi pendant l'attaque
// function checkCollisionAttack() {
//   if (isAttacking) {
//     let attackX;

//     // Calculer la position de l'attaque en fonction de la direction
//     if (attackDirection === 'right') {
//       attackX = xHero + wHero;
//     } else if (attackDirection === 'left') {
//       // Ajuster la position de l'attaque pour une attaque à gauche
//       attackX = xHero + wHero;

//     }

//     // Vérifier si l'ennemi est touché par l'attaque
//     if (
//       attackX < xEnemy2 + wEnemy2 &&
//       attackX > xEnemy2 &&
//       attackY < yEnemy2 + hEnemy2 &&
//       attackY > yEnemy2
//     ) {
//       // L'attaque a touché l'ennemi, faire disparaître l'ennemi
//       // Remplacer cette logique par votre code pour supprimer l'ennemi
//       xEnemy2 = -1000; // Déplacer l'ennemi hors de l'écran pour le faire disparaître
//       yEnemy2 = -1000;
//     }
//   }
// }


















































function preloadHeroImages() {
  // Right Hero Images
  hero0 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_01.png');
  myHeroRight.push(hero0);
  hero1 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_02.png');
  myHeroRight.push(hero1);
  hero2 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_03.png');
  myHeroRight.push(hero2);
  hero3 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_04.png');
  myHeroRight.push(hero3);
  hero4 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_05.png');
  myHeroRight.push(hero4);
  hero5 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_06.png');
  myHeroRight.push(hero5);
  hero6 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_07.png');
  myHeroRight.push(hero6);
  hero7 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_08.png');
  myHeroRight.push(hero7);
  hero8 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_09.png');
  myHeroRight.push(hero8);
  hero9 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_10.png');
  myHeroRight.push(hero9);
  hero10 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_11.png');
  myHeroRight.push(hero10);
  hero11 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_12.png');
  myHeroRight.push(hero11);
  


  // Left Hero Images
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_01.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_02.png')); 
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_03.png')); 
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_04.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_05.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_06.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_07.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_08.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_09.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_10.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_11.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_12.png'));

  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle1.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle2.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle3.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle4.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle5.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle6.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle7.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle8.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle9.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle10.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle11.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle12.png'));


  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche1.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche2.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche3.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche4.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche5.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche6.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche7.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche8.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche9.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche10.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche11.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche12.png'));
  
 
  currentHeroImage = hero0; // Définition de l'image de héros actuelle
}
























function preloadHeroVillageImages() {

  heroVillage0 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face1.png');
  myHeroVillageBottom.push(heroVillage0);
  heroVillage1 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face2.png');
  myHeroVillageBottom.push(heroVillage1);
  heroVillage2 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face3.png');
  myHeroVillageBottom.push(heroVillage2);
  heroVillage3 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face4.png');
  myHeroVillageBottom.push(heroVillage3);
  heroVillage4 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face5.png');
  myHeroVillageBottom.push(heroVillage4);
  heroVillage5 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face6.png');
  myHeroVillageBottom.push(heroVillage5);
  heroVillage6 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face7.png');
  myHeroVillageBottom.push(heroVillage6);
  heroVillage7 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face8.png');
  myHeroVillageBottom.push(heroVillage7);
  heroVillage8 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face9.png');
  myHeroVillageBottom.push(heroVillage8);
  heroVillage9 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face10.png');
  myHeroVillageBottom.push(heroVillage9);


  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos1.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos2.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos3.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos4.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos5.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos6.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos7.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos8.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos9.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos10.png'));





  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite1.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite2.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite3.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite4.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite5.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite6.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite7.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite8.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite9.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite10.png'));
  


  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche1.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche2.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche3.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche4.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche5.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche6.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche7.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche8.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche9.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche10.png'));


  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle1.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle2.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle3.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle4.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle5.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle6.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle7.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle8.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle9.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle10.png'));

  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche1.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche2.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche3.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche4.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche5.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche6.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche7.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche8.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche9.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche10.png'));

  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite1.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite2.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite3.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite4.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite5.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite6.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite7.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite8.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite9.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite10.png'));
  
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos1.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos2.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos3.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos4.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos5.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos6.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos7.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos8.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos9.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos10.png'));
  
  






  currentHeroVillageImage = heroVillage0;
}


















// Variables pour le saut
let isJumping = false;
let jumpForce = -10;
let gravity = 0.5;
let yVelocity = 0;
let maxJumpHeight = 10; // Ajustez selon vos besoins

function jump() {
  if (!isJumping) {
    isJumping = true;
    yVelocity = jumpForce;
  }
}

function applyGravity() {
  if (isJumping || yHero <= 7 * worldTempleTileSize) {
    yVelocity += gravity;
    yHero += yVelocity;
    
    if (yVelocity > 10) {
      yVelocity = 10;
    }
    
    if (yHero >= 7 * worldTempleTileSize) {
      yHero = 7 * worldTempleTileSize;
      isJumping = false;
      yVelocity = 0;
    }
  }
}



// function applyGravity() {
//   if (isJumping || !checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
//     // Si le héros saute ou n'est pas en collision avec le sol, appliquez la gravité
//     yVelocity += gravity;
//     yHero += yVelocity;
    
//     // Limitez la vitesse de chute
//     if (yVelocity > 10) {
//       yVelocity = 10;
//     }
//   } else {
//     // Arrêtez le saut lorsque le héros touche le sol
//     isJumping = false;
//     yVelocity = 0;
//   }
// }










