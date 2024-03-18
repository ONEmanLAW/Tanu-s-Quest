// // Caméra qui suit le personnage. 
// let prevCameraX;
// let prevCameraY;

// // Camera Only If Not gameOver.
// function updateCamera() {
//   if (!gameOver) {
//       cameraX = xHero - width / 2;
//       cameraY = yHero - height / 2;

//       if (prevCameraX !== undefined && prevCameraY !== undefined) {
//           cameraX = lerp(prevCameraX, cameraX, 0.1);
//           cameraY = lerp(prevCameraY, cameraY, 0.1);
//       }
//       prevCameraX = cameraX;
//       prevCameraY = cameraY;

//       translate(-cameraX, -cameraY);
//   }
// };



// let prevCameraX;
// let prevCameraY;
// let worldWidth; 
// let worldHeight; 


// function initWorldDimensions(width, height) {
//   worldWidth = width;
//   worldHeight = height;
// }

// function updateCamera() {
//   if (!gameOver) {
    
//     let cameraLeft = width / 2; 
//     let cameraRight = worldWidth - width / 2; 
//     let cameraTop = height / 2; 
//     let cameraBottom = worldHeight - height / 2;
   
//     let targetCameraX = constrain(xHero - width / 2, cameraLeft, cameraRight);
//     let targetCameraY = constrain(yHero - height / 2, cameraTop, cameraBottom);

    
//     cameraX = lerp(prevCameraX, targetCameraX, 0.1);
//     cameraY = lerp(prevCameraY, targetCameraY, 0.1);
    
    
//     prevCameraX = cameraX;
//     prevCameraY = cameraY;

    
//     translate(-cameraX, -cameraY);
//   }
// }
