/////////////////////////////////////////////
///////////VARIABLES FOR HERO////////////////
/////////////////////////////////////////////

//Spawn of Hero.
let xHero = 17 * worldTempleTileSize;
let yHero = 7 * worldTempleTileSize;

// Size of Hero.
let wHero = worldTempleTileSize;
let hHero = worldTempleTileSize;

// Fonction pour ajuster la taille du héros en fonction du monde
function adjustHeroSize(currentWorld) {
  wHero = worldsTileSizes[currentWorld]; // Largeur du héros en fonction du monde actuel
  hHero = worldsTileSizes[currentWorld]; // Hauteur du héros en fonction du monde actuel
}

// Animation for Hero.
let heroSpeed = 7;
let myHeroRight = [];
let myHeroLeft = [];
let currentIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;

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

function preloadHeroTopImages() {

  heroTop0 = loadImage('hero_village.png');
  currentHeroTopImage = heroTop0;
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










