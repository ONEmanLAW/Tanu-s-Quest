let cadreVide;
let imageEpee1;
let imageEpee2;

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
  
}

function drawHud() {
  push(); 
  translate(cameraX, cameraY);

  image(cadreVide, 30, 780, 600, 150);
  image(imageEpee2, 44, 791, 100, 100);
  image(imagePotion1, 125, 840, 75, 75);
  image(imageTerre1, 225, 840, 65, 65);
  image(imageFeu1, 325, 840, 65, 65);
  image(imageVent1, 425, 840, 65, 65);
  image(imageEau1, 525, 840, 65, 65);

  image(imageGrenouille, 1750, 30, 110, 110);
  image(imagevillageoisSauvés, 1500, 30, 200, 100);

  // Si la conversation avec le Yeti est terminée
  if (conversationYetiFinished) {
    displayImageWithBlink(imageEcorce, 1750, 200, 100, 100);
  } 
  
  pop();
}



let timeStartedBlinking = 0; // Variable pour stocker le temps auquel l'image a commencé à clignoter
let blinkingDuration = 5000; // Durée du clignotement en millisecondes (5 secondes)

// Fonction pour gérer l'affichage et le clignotement de l'image
function displayImageWithBlink(img, x, y, w, h) {
  if (conversationYetiFinished) {
    // Si la conversation avec le Yeti est terminée, commence le clignotement de l'image
    // Si c'est la première frame depuis que l'image a commencé à clignoter, note le temps actuel
    if (timeStartedBlinking === 0) {
      timeStartedBlinking = millis(); // Note le temps actuel
    }

    // Calcule le temps écoulé depuis que l'image a commencé à clignoter
    let elapsedTime = millis() - timeStartedBlinking;

    // Si le temps écoulé est inférieur à la durée de clignotement
    if (elapsedTime < blinkingDuration) {
      // Alterne entre afficher et masquer l'image toutes les 500 millisecondes
      if (floor(elapsedTime / 500) % 2 === 0) { // Alterne toutes les 500 ms
        // Affiche l'image
        image(img, x, y, w, h);
      }
    } else {
      // Si la durée de clignotement est écoulée, affiche normalement l'image
      image(img, x, y, w, h);
    }
  } else {
    // Si la conversation avec le Yeti n'est pas terminée, n'affiche pas l'image
  }
}






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


