/////////////////////////////////////////////
///////////VARIABLES FOR HERO////////////////
/////////////////////////////////////////////

//Spawn of Hero.
let xHero = 2 * worldTempleTileSize - 10;
let yHero = 6 * worldTempleTileSize - 15;

// Size of Hero.
let wHero = worldTempleTileSize * 1.05;
let hHero = worldTempleTileSize * 1.25;

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
  if (hearts > 0) {
    hearts--;
    if (hearts === 0) {
      gameOver = true;
    }
  }
}
