let cadreVide;
let imageEpee1;
let imageEpee2;
let imageFeu1;
let imageFeu2;
let imageEau1;
let imageEau2;
let imageTerre1;
let imageTerre2;
let imageVent1;
let imageVent2;
let imagePotion1;
let imagePotion2;
let imagePotion3;
let imagePotion4;
let imagecadreHeart;

let imagePierreEau;
let imagePierreTerre;
let imagePierreFeu;
let imagePierreVent;


function preloadHudImages() {
  cadreVide = loadImage('hud/cadreVide.png');
  imageEpee1 = loadImage('hud/imageEpee.png');
  imageEpee2 = loadImage('hud/imageEpee2.png');
  imageFeu1 = loadImage('hud/imageFeu1.png');
  imageFeu2 = loadImage('hud/imageFeu2.png');
  imageEau1 = loadImage('hud/imageEau1.png');
  imageEau2 = loadImage('hud/imageEau2.png');
  imageTerre1 = loadImage('hud/imageTerre1.png');
  imageTerre2 = loadImage('hud/imageTerre2.png');
  imageVent1 = loadImage('hud/imageVent1.png');
  imageVent2 = loadImage('hud/imageVent2.png');
  imagePotion1 = loadImage('hud/imagePotion1.png');
  imagePotion2 = loadImage('hud/imagePotion2.png');
  imagePotion3 = loadImage('hud/imagePotion3.png');
  imagePotion4 = loadImage('hud/imagePotion4.png');


  imageGrenouille = loadImage('hud/Grenouille.png');
  imagevillageoisSauvés = loadImage('hud/villageoisSauvés.png');

  imageEcorce = loadImage('hud/imageEcorce.png');
  imageCadreHeart = loadImage('hud/cadreHeart.png');

  imagePierreEau = loadImage('hud/pierreEau.png');
  imagePierreTerre = loadImage('hud/pierreTerre.png');
  imagePierreFeu = loadImage('hud/pierreFeu.png');
  imagePierreVent = loadImage('hud/pierreVent.png');
};





// Coordonnées et dimensions de l'image de feu
let xFeu2 = 7 * worldForetTileSize + 18;
let yFeu2 = 9 * worldForetTileSize + 18;
let wFeu2 = 64;
let hFeu2 = 64;
let heroInFire = false;
let heroHasFireStone = false;

function checkHeroInFire() {
  if (!heroInFire) {
    if (xHero + wHero > xFeu2 &&
        xHero < xFeu2 + wFeu2 &&
        yHero + hHero > yFeu2 &&
        yHero < yFeu2 + hFeu2) {
      heroInFire = true;
    }
  }
};

// // Coordonnées et dimensions de l'image de feu
// let xTerre = 7 * worldForetTileSize + 18;
// let yTerre = 9 * worldForetTileSize + 18;
// let wTerre = 64;
// let hTerre = 64;
// let heroInStone = false;
// let heroHasStoneStone = false;

// function checkHeroInStone() {
//   if (!heroInStone) {
//     if (xHero + wHero > xStone2 &&
//         xHero < xStone2 + wStone2 &&
//         yHero + hHero > yStone2 &&
//         yHero < yStone2 + hStone2) {
//       heroInStoneStone = true;
//     }
//   }
// };



// // Coordonnées et dimensions de l'image de l'eau
// let xEau2 = 10 * worldForetTileSize + 18;
// let yEau2 = 12 * worldForetTileSize + 18;
// let wEau2 = 64;
// let hEau2 = 64;
// let heroInWater2 = false;

// function checkHeroInWater2() {
//   if (!heroInWater2) {
//     if (xHero + wHero > xEau2 &&
//         xHero < xEau2 + wEau2 &&
//         yHero + hHero > yEau2 &&
//         yHero < yEau2 + hEau2) {
//       heroInWater2 = true;
//     }
//   }
// };


// // Coordonnées et dimensions de l'image du vent
// let xVent2 = 15 * worldForetTileSize + 18;
// let yVent2 = 5 * worldForetTileSize + 18;
// let wVent2 = 64;
// let hVent2 = 64;
// let heroInWind2 = false;

// function checkHeroInWind2() {
//   if (!heroInWind2) {
//     if (xHero + wHero > xVent2 &&
//         xHero < xVent2 + wVent2 &&
//         yHero + hHero > yVent2 &&
//         yHero < yVent2 + hVent2) {
//       heroInWind2 = true;
//     }
//   }
// };



function drawHud() {
  push(); 
  translate(cameraX, cameraY);

  image(imageCadreHeart, 5, 5, 350, 125);

  image(cadreVide, 30, 850, 600, 150);
  image(imageEpee2, 44, 861, 100, 100);
  image(imagePotion1, 160, 915, 75, 75);
  image(imageTerre1, 250, 915, 65, 65);
  
  // Vérifier si l'hero image est dans imageFeu2
  if (!heroInFire) {
    // Afficher imageFeu1 si l'hero image n'est pas dans imageFeu2
    image(imageFeu1, 340, 915, 65, 65);
  } else {
    // Afficher imageFeu2 si l'hero image est dans imageFeu2
    displayImageWithBlinkUniversal(imageFeu2, 340, 915, 65, 65);
    heroHasFireStone = true;
  }

  image(imageVent1, 430, 915, 65, 65);
  image(imageEau1, 520, 915, 65, 65);

  image(imageGrenouille, 1650, 30, 110, 110);
  image(imagevillageoisSauvés, 1400, 30, 200, 100);

  // Si la conversation avec le Yeti est terminée
  if (conversationYetiFinished) {
    displayImageWithBlink(imageEcorce, 1650, 200, 100, 100);
  } 
  
  pop();
}


// Crée est afficher les élements du tuto.
function drawHudTemple () {
  push();
  pop();
}



let timeStartedBlinking = 0; 
let blinkingDuration = 5000; 
let blinkingImages = {};


function displayImageWithBlink(img, x, y, w, h) {
  if (conversationYetiFinished) {
    if (timeStartedBlinking === 0) {
      timeStartedBlinking = millis(); 
    }

    let elapsedTime = millis() - timeStartedBlinking;

    if (elapsedTime < blinkingDuration) {
      if (floor(elapsedTime / 500) % 2 === 0) {
        image(img, x, y, w, h);
      }
    } else {
      image(img, x, y, w, h);
    }
  } else {
    
  }
}



function displayImageWithBlinkUniversal(img, x, y, w, h) {
  if (!blinkingImages[img]) {
    blinkingImages[img] = {
      timeStartedBlinking: millis(),
      blinkingDuration: 5000 
    };
  }
  let {timeStartedBlinking, blinkingDuration} = blinkingImages[img];
  let elapsedTime = millis() - timeStartedBlinking;
  if (elapsedTime < blinkingDuration) {
    if (floor(elapsedTime / 500) % 2 === 0) { 
      image(img, x, y, w, h);
    }
  } else {
    image(img, x, y, w, h);
  }
}



let displayDuration = 5 * 60;
let displayTimer = 0; 
let imageVisible = false; 
let imageDisplayed = false; 

function gestionTransitionImage() {
  if (!imageVisible && !imageDisplayed) { 
    if (!introDialogActive && !animation) { 
      imageVisible = true; 
      imageDisplayed = true; 
      displayTimer = 0; 
    }
  } else if (imageVisible) { 
    if (displayTimer < displayDuration) { 
      image(imageEpee2, 500, 500, 100, 100); 
      displayTimer++; 
    } else {
      imageVisible = false; 
    }
  }
}





// Life of Hero.
let hearts = 3;
let heartImage;
let gameOver = false;


//// Hearts

function preloadHeartImage() {
  heartImage = loadImage('hud/heart.png');
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
  const heartWidth = 75;
  const heartHeight = 75;
  const spacing = 30;
  const marginX = 30;
  const marginY = 25;

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


// let fadeOpacity = 0; // Opacité initiale pour la transition de fondu
// let fadeDuration = 1 * 0.5; // Durée de la transition en secondes à 1 FPS
// let displayDuration = 5 * 1; // Durée d'affichage de l'image en secondes à 1 FPS
// let fadeTimer = 0; // Timer pour contrôler la durée de la transition
// let transitionFinished = false; // Variable pour indiquer si la transition est terminée

// function gestionTransitionImage() {
//   if (!transitionFinished) { // Vérifiez si la transition n'est pas terminée
//     if (!introDialogActive && !animation) { // Vérifiez si le dialogue d'introduction est terminé et s'il n'y a pas d'animation en cours
//       if (fadeTimer < fadeDuration) {
//         // Transition d'apparition
//         fadeOpacity = map(fadeTimer, 0, fadeDuration, 0, 255);
//       } else if (fadeTimer < fadeDuration + displayDuration) {
//         // Image affichée sans transition
//         fadeOpacity = 255;
//       } else if (fadeTimer < fadeDuration * 2 + displayDuration) {
//         // Transition de disparition
//         fadeOpacity = map(fadeTimer, fadeDuration + displayDuration, fadeDuration * 2 + displayDuration, 255, 0);
//       } else {
//         // Transition terminée
//         transitionFinished = true;
//         fadeOpacity = 0; // Réinitialiser l'opacité à 0
//         fadeTimer = 0; // Réinitialiser le timer
//         return;
//       }

//       // Affichage de l'image avec la transition d'opacité
//       tint(255, fadeOpacity); // Appliquer l'opacité à l'image
//       image(imageEpee2, 500, 500, 100, 100);
//       tint(255, 255); // Réinitialiser la teinte à sa valeur normale

//       // Incrémentation du timer
//       fadeTimer++;
//     }
//   }
// }
