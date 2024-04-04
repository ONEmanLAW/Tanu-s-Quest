let prevCameraX;
let prevCameraY;


function updateCamera(worldWidth, worldHeight) {
  if (!gameOver) {
    let zoomFactor = 1.5;

    let cameraWidth = width / zoomFactor;
    let cameraHeight = height / zoomFactor;

    let targetCameraX = xHero - cameraWidth / 2 + wHero / 2; 
    let targetCameraY = yHero - cameraHeight / 2 + hHero / 2; 

    if (prevCameraX !== undefined && prevCameraY !== undefined) {
      targetCameraX = lerp(prevCameraX, targetCameraX, 0.1);
      targetCameraY = lerp(prevCameraY, targetCameraY, 0.1);
    }

  
    targetCameraX = constrain(targetCameraX, 0, worldWidth - cameraWidth);
    targetCameraY = constrain(targetCameraY, 0, worldHeight - cameraHeight);

   
    cameraX = targetCameraX;
    cameraY = targetCameraY;

   
    prevCameraX = cameraX;
    prevCameraY = cameraY;
 
    translate(-cameraX * zoomFactor, -cameraY * zoomFactor);
    scale(zoomFactor);
  }
}


