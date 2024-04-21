/////////////////////////////////////////////
//////////////CAMERA VARIABLES///////////////
/////////////////////////////////////////////

let prevCameraX;
let prevCameraY;
let parallaxSpeed = 2; // Vitesse de parallaxe, pour les mondes en vue horizontal.



/////////////////////////////////////////////
/////////FUNCTION POUR LES CAMERA ////////////
/////////////////////////////////////////////

// Camera pour mettre à jour la caméra normalement.
function updateNormalCamera(worldWidth, worldHeight) {
  if (!gameOver) {
    let targetCameraX = xHero - width / 2 + wHero / 2; 
    let targetCameraY = yHero - height / 2 + hHero / 2; 

    if (prevCameraX !== undefined && prevCameraY !== undefined) {
      targetCameraX = lerp(prevCameraX, targetCameraX, 0.1);
      targetCameraY = lerp(prevCameraY, targetCameraY, 0.1);
    }

    targetCameraX = constrain(targetCameraX, 0, worldWidth - width);
    targetCameraY = constrain(targetCameraY, 0, worldHeight - height);

    cameraX = targetCameraX;
    cameraY = targetCameraY;

    prevCameraX = cameraX;
    prevCameraY = cameraY;

    translate(-cameraX, -cameraY);
  }
}



// Camera avec le parallaxe, pour les monde vu e horizontal.
function updateParallaxCamera(worldWidth, worldHeight) {
  if (!gameOver) {
    let targetCameraX = xHero - width / 2 + wHero / 2; 
    let targetCameraY = yHero - height / 2 + hHero / 2; 

    if (prevCameraX !== undefined && prevCameraY !== undefined) {
      targetCameraX = lerp(prevCameraX, targetCameraX, 0.1);
      targetCameraY = lerp(prevCameraY, targetCameraY, 0.1);
    }

    targetCameraX = constrain(targetCameraX, 0, worldWidth - width);
    targetCameraY = constrain(targetCameraY, 0, worldHeight - height);

    // Calcul du déplacement parallaxe
    let parallaxOffsetX = (targetCameraX - prevCameraX) * parallaxSpeed;

    cameraX = targetCameraX;
    cameraY = targetCameraY;

    prevCameraX = cameraX;
    prevCameraY = cameraY;

    // Dessine les fonds avec déplacement parallaxe
    image(backgroundForetImage, -cameraX * 0.2, 0, worldWidth, worldHeight); // Parallaxe à 20% de la vitesse de la caméra

    // Dessine le personnage et les autres éléments de jeu sans déplacement parallaxe
    translate(-cameraX + parallaxOffsetX, -cameraY); // Ajoute le déplacement parallaxe à la translation horizontale
  }
}




// Camera avec Zoom
// function updateCamera(worldWidth, worldHeight) {
//   if (!gameOver) {
//     let zoomFactor = 1.5;

//     let cameraWidth = width / zoomFactor;
//     let cameraHeight = height / zoomFactor;

//     let targetCameraX = xHero - cameraWidth / 2 + wHero / 2; 
//     let targetCameraY = yHero - cameraHeight / 2 + hHero / 2; 

//     if (prevCameraX !== undefined && prevCameraY !== undefined) {
//       targetCameraX = lerp(prevCameraX, targetCameraX, 0.1);
//       targetCameraY = lerp(prevCameraY, targetCameraY, 0.1);
//     }

  
//     targetCameraX = constrain(targetCameraX, 0, worldWidth - cameraWidth);
//     targetCameraY = constrain(targetCameraY, 0, worldHeight - cameraHeight);

   
//     cameraX = targetCameraX;
//     cameraY = targetCameraY;

   
//     prevCameraX = cameraX;
//     prevCameraY = cameraY;
 
//     translate(-cameraX * zoomFactor, -cameraY * zoomFactor);
//     scale(zoomFactor);
//   }
// }