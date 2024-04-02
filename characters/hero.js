/////////////////////////////////////////////
///////////VARIABLES FOR HERO////////////////
/////////////////////////////////////////////

//Spawn of Hero.
let xHero = 2 * worldTempleTileSize ;
let yHero = 6 * worldTempleTileSize;

// Size of Hero.
let wHero = worldTempleTileSize;
let hHero = worldTempleTileSize;

// Animation for Hero.
let heroSpeed = 5;
let myHeroRight = [];
let myHeroLeft = [];
let currentIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;

// Life of Hero.
let hearts = 3;
let heartImage;
let gameOver = false;


// Jump & Gravity of Hero.
let jump = false;
let direction = 1;
let velocity = 4 ;
let jumpPower =  10;
let fallingSpeed = 4; // equal to velocity

let minHeight = 385;
let maxHeight = 150 ;
let jumpCounter = 0;


// Mouvement Automatique Peronnage.
let animationCounter = 0;
let animation = true;
let movementSpeed = worldTempleTileSize / 20;

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


function drawHearts() {
  const heartWidth = 64;
  const heartHeight = 64; 
  const spacing = 10; 
  const marginX = 20; 
  const marginY = 20; 

  for (let i = 0; i < hearts; i++) {
    let x = marginX + i * (heartWidth + spacing);

    // Dessiner l'image du cœur
    image(heartImage, x, marginY, heartWidth, heartHeight);
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
  hero0 = loadImage('assets/hero_plateforme.png');
  myHeroRight.push(hero0);
  hero1 = loadImage('assets/hero/run_1.png');
  myHeroRight.push(hero1);
  hero2 = loadImage('assets/hero/run_2.png');
  myHeroRight.push(hero2);
  hero3 = loadImage('assets/hero/run_3.png');
  myHeroRight.push(hero3);
  hero4 = loadImage('assets/hero/run_4.png');
  myHeroRight.push(hero4);

  // Left Hero Images
  myHeroLeft.push(loadImage('assets/hero/run_0left.png'));
  myHeroLeft.push(loadImage('assets/hero/run_1left.png')); 
  myHeroLeft.push(loadImage('assets/hero/run_2left.png')); 
  myHeroLeft.push(loadImage('assets/hero/run_3left.png'));
  myHeroLeft.push(loadImage('assets/hero/run_4left.png'));

  currentHeroImage = hero0; // Définition de l'image de héros actuelle
}


function preloadHeartImage() {
  heartImage = loadImage('assets/Images/heart.png');
}