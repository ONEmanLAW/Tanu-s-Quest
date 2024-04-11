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
let currentIndex = 0;
let currentVillageIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;
let currentHeroVillageImage = 0;

// Life of Hero.
let hearts = 3;
let heartImage;
let gameOver = false;




// Mouvement Automatique Peronnage.
let animationCounter = 0;
let animation = true;
let movementSpeed = worldTempleTileSize / 16;



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
  const heartWidth = 64;
  const heartHeight = 64;
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



function preloadHeroImages() {
  // Right Hero Images
  hero0 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite1.png');
  myHeroRight.push(hero0);
  hero1 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite2.png');
  myHeroRight.push(hero1);
  hero2 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite3.png');
  myHeroRight.push(hero2);
  hero3 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite4.png');
  myHeroRight.push(hero3);
  hero4 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite5.png');
  myHeroRight.push(hero4);
  hero5 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite6.png');
  myHeroRight.push(hero5);
  hero6 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite7.png');
  myHeroRight.push(hero6);
  hero7 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite8.png');
  myHeroRight.push(hero7);
  hero8 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite9.png');
  myHeroRight.push(hero8);
  hero9 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite10.png');
  myHeroRight.push(hero9);
  hero10 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite11.png');
  myHeroRight.push(hero10);
  hero11 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite12.png');
  myHeroRight.push(hero11);
  hero12 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite13.png');
  myHeroRight.push(hero12);
  hero13 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite14.png');
  myHeroRight.push(hero13);
  hero14 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite15.png');
  myHeroRight.push(hero14);
  hero15 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite16.png');
  myHeroRight.push(hero15);

  // Left Hero Images
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche1.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche2.png')); 
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche3.png')); 
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche4.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche5.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche6.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche7.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche8.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche9.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche10.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche11.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche12.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche13.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche14.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche15.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche16.png'));

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










