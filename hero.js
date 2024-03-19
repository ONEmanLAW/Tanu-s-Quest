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
  if (hearts > 0 && !heroInvincible) { // Vérifiez si le personnage a des vies et n'est pas invincible
    hearts--; // Réduire le nombre de vies
    if (hearts === 0) {
      gameOver = true; // Définir le drapeau de fin de partie si le personnage n'a plus de vies
    } else {
      // Activer le cooldown si le personnage perd une vie
      activateCooldown();
    }
  }
}


let heroInvincible = false;
let cooldownTimer = 0;
const cooldownDuration = 3000;


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
