let cadreVide;
let imageEpee1;
let imageEpee2;

function preloadHudImages() {
  cadreVide = loadImage('hud/cadreVide.png');
  imageEpee1 = loadImage('hud/imageEpee.png');
  imageEpee2 = loadImage('hud/imageEpee2.png');
  imageFeu1 = loadImage('hud/imageFeu1.png');
  imageEau1 = loadImage('hud/imageEau1.png');
  imageTerre1 = loadImage('hud/imageTerre1.png');
  imageVent1 = loadImage('hud/imageVent1.png');
  imagePotion1 = loadImage('hud/imagePotion1.png');
}

function drawHud() {
  push(); 
  translate(cameraX, cameraY);

  image(cadreVide, 30, 780, 600, 150);
  image(imageEpee2, 44, 791, 100, 100);
  image( imagePotion1, 125, 840, 75, 75);
  image(imageTerre1, 225, 840, 65, 65);
  image(imageFeu1, 325, 840, 65, 65);
  image(imageVent1, 425, 840, 65, 65);
  image(imageEau1, 525, 840, 65, 65);
  pop();
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


