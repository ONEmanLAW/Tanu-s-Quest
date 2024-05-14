let cadreVide;
let imageEpee1;
let imageEpee2;
let imageEpee3;
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
let imagePotion5;
let imagecadreHeart;

let imagePierreEau;
let imagePierreTerre;
let imagePierreFeu;
let imagePierreVent;

let imageEcorce1;
let imageEcorce2;
let imageEcorceMagique;

let imageDialogueObtenuEpeeGrenouille;

function preloadHudImages() {
  cadreVide = loadImage('hud/assets/cadreVide.png');
  imageEpee1 = loadImage('hud/assets/imageEpee.png');
  imageEpee2 = loadImage('hud/assets/imageEpee2.png');
  imageEpee3 = loadImage('hud/assets/imageEpee3.png');
  imageFeu1 = loadImage('hud/assets/imageFeu1.png');
  imageFeu2 = loadImage('hud/assets/imageFeu2.png');
  imageEau1 = loadImage('hud/assets/imageEau1.png');
  imageEau2 = loadImage('hud/assets/imageEau2.png');
  imageTerre1 = loadImage('hud/assets/imageTerre1.png');
  imageTerre2 = loadImage('hud/assets/imageTerre2.png');
  imageVent1 = loadImage('hud/assets/imageVent1.png');
  imageVent2 = loadImage('hud/assets/imageVent2.png');
  imagePotion1 = loadImage('hud/assets/imagePotion1.png');
  imagePotion2 = loadImage('hud/assets/imagePotion2.png');
  imagePotion3 = loadImage('hud/assets/imagePotion3.png');
  imagePotion4 = loadImage('hud/assets/imagePotion4.png');
  imagePotion5 = loadImage('hud/assets/imagePotion5.png');


  imageGrenouille = loadImage('hud/assets/Grenouille.png');
  imagevillageoisSauvés = loadImage('hud/assets/villageoisSauvés.png');

  imageEcorce1 = loadImage('hud/assets/imageEcorce1.png');
  imageEcorce2 = loadImage('hud/assets/imageEcorce2.png');
  imageEcorceMagique = loadImage('hud/assets/imageEcorceMagique.png')
  imageCadreHeart = loadImage('hud/assets/cadreHeart.png');

  imagePierreEau = loadImage('hud/assets/pierreEau.png');
  imagePierreTerre = loadImage('hud/assets/pierreTerre.png');
  imagePierreFeu = loadImage('hud/assets/pierreFeu.png');
  imagePierreVent = loadImage('hud/assets/pierreVent.png');

  imageDialogueObtenuEpeeGrenouille = loadImage('hud/assets/dialogueObtenuEpeeGrenouille.png');
};



// Coordonnées et dimensions de l'image de feu
let xEcorce = 70 * worldForetTileSize + 18;
let yEcorce = 4 * worldForetTileSize + 18;
let wEcorce = 64;
let hEcorce = 64;
let heroInEcorce = false;
let heroHasEcorce = false;

function checkHeroInEcorce() {
  if (!heroInFire) {
    if (xHero + wHero > xEcorce &&
        xHero < xEcorce + wEcorce &&
        yHero + hHero > yEcorce &&
        yHero < yEcorce + hEcorce) {
      heroInEcorce = true;
    }
  }
};

// Coordonnées et dimensions de l'image de feu
let xFeu2 = 56 * worldGrotteTileSize + 18;
let yFeu2 = 10 * worldGrotteTileSize + 18;
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

// Coordonnées et dimensions de l'image de feu
let xTerre = 178 * worldForetTileSize + 18;
let yTerre = 9 * worldForetTileSize + 18;
let wTerre = 64;
let hTerre = 64;
let heroInStone = false;
let heroHasStoneStone = false;

function checkHeroInStone() {
  if (!heroInStone) {
    if (xHero + wHero > xTerre &&
        xHero < xTerre + wTerre &&
        yHero + hHero > yTerre &&
        yHero < yTerre + hTerre) {
      heroInStone = true;
    }
  }
};



// Coordonnées et dimensions de l'image de l'eau
let xEau = 140 * worldGrotteTileSize + 18;
let yEau = 9 * worldGrotteTileSize + 18;
let wEau = 64;
let hEau = 64;
let heroInWater = false;
let heroHasWaterStone = false;

function checkHeroInWater() {
  if (!heroInWater) {
    if (xHero + wHero > xEau &&
        xHero < xEau + wEau &&
        yHero + hHero > yEau &&
        yHero < yEau + hEau) {
      heroInWater = true;
    }
  }
};


// Coordonnées et dimensions de l'image du vent
let xVent = 126 * worldGrotteTileSize + 18;
let yVent = 9 * worldGrotteTileSize + 18;
let wVent = 64;
let hVent = 64;
let heroInWind = false;
let heroHasWindStone = false;

function checkHeroInWind() {
  if (!heroInWind) {
    if (xHero + wHero > xVent &&
        xHero < xVent + wVent &&
        yHero + hHero > yVent &&
        yHero < yVent + hVent) {
      heroInWind = true;
    }
  }
};




function drawHud() {
  push(); 
  translate(cameraX, cameraY);

  image(imageCadreHeart, 30, 5, 350, 125);

  image(cadreVide, 30, 850, 600, 150);
  
  if (!newSword) {
    image(imageEpee2, 44, 861, 100, 100);
  } else {
    image(imageEpee3, 44, 861, 100, 100);
  }
  
  
  if (!alchimisteDialogueFinished) {
    image(imagePotion1, 160, 915, 75, 75);
  }

  if (!heroInStone) {
    image(imageTerre1, 250, 915, 65, 65)
  } else {
    displayImageWithBlinkUniversal(imageTerre2, 250, 915, 65, 65);
    heroHasStoneStone = true;
  }

  if (!heroInFire) {
    image(imageFeu1, 340, 915, 65, 65);
  } else {
    displayImageWithBlinkUniversal(imageFeu2, 340, 915, 65, 65);
    heroHasFireStone = true;
  }

  if (!heroInWind) {
    image(imageVent1, 430, 915, 65, 65);
  } else {
    displayImageWithBlinkUniversal(imageVent2, 430, 915, 65, 65);
    heroHasWindStone = true;
  }

  if(!heroInWater) {
    image(imageEau1, 520, 915, 65, 65);
  } else {
    displayImageWithBlinkUniversal(imageEau2, 520, 915, 65, 65);
    heroHasWaterStone = true;
  }
  



  image(imageGrenouille, 1650, 30, 110, 110);
  image(imagevillageoisSauvés, 1400, 30, 200, 100);

  // Si la conversation avec le Yeti est terminée
  if (conversationYetiFinished && !heroInEcorce) {
    displayImageWithBlink(imageEcorce1, 1650, 200, 100, 100);
  } else if(conversationYetiFinished && heroInEcorce) {
    displayImageWithBlinkUniversal(imageEcorce2, 1650, 200, 100, 100);
    heroHasEcorce = true;
  }

  if (alchimisteDialogueFinished && potions === 3) {
    displayImageWithBlinkUniversal(imagePotion4, 160, 915, 75, 75)
  } else if (alchimisteDialogueFinished && potions === 2) {
    displayImageWithBlinkUniversal(imagePotion3, 160, 915, 75, 75)
  } else if(alchimisteDialogueFinished && potions === 1) {
    displayImageWithBlinkUniversal(imagePotion2, 160, 915, 75, 75)
  } else if(alchimisteDialogueFinished && potions === 0) {
    displayImageWithBlinkUniversal(imagePotion5, 160, 915, 75, 75)
  } 

  pop();
}


// Crée est afficher les élements du tuto.
function drawHudTemple () {
  push();
  if (currentIntroductionIndex === 12) {
    image(imageCadreHeart, 5, 100, 350, 125);
    drawHearts();
  } else if(currentIntroductionIndex === 13) {
    image(imageCadreHeart, 5, 100, 350, 125);
    drawHearts();

    image(cadreVide, 30, 850, 600, 150);
    image(imageEpee1, 44, 861, 100, 100);
  } else if(currentIntroductionIndex === 14) {
    image(imageCadreHeart, 5, 100, 350, 125);
    drawHearts();

    image(cadreVide, 30, 850, 600, 150);
    image(imageEpee1, 44, 861, 100, 100);
    image(imagePotion1, 160, 915, 75, 75);

  } else if(currentIntroductionIndex === 15) {
    image(imageCadreHeart, 5, 100, 350, 125);
    drawHearts();

    image(cadreVide, 30, 850, 600, 150);
    image(imageEpee1, 44, 861, 100, 100);
    image(imagePotion1, 160, 915, 75, 75);

    image(imageTerre1, 250, 915, 65, 65);
    image(imageFeu1, 340, 915, 65, 65);
    image(imageVent1, 430, 915, 65, 65);
    image(imageEau1, 520, 915, 65, 65);
  } else if (currentIntroductionIndex === 16) {
    image(imageCadreHeart, 5, 100, 350, 125);
    drawHearts();

    image(cadreVide, 30, 850, 600, 150);
    image(imageEpee1, 44, 861, 100, 100);
    image(imagePotion1, 160, 915, 75, 75);

    image(imageTerre1, 250, 915, 65, 65);
    image(imageFeu1, 340, 915, 65, 65);
    image(imageVent1, 430, 915, 65, 65);
    image(imageEau1, 520, 915, 65, 65);
    image(imagevillageoisSauvés, 1400, 30, 200, 100);
  }
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
      image(imageDialogueObtenuEpeeGrenouille, 750, 350, 700, 200); 
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
  heartImage = loadImage('hud/assets/heart.png');
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
const cooldownDuration = 2000;


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
