// Caméra qui suit le personnage. 
let prevCameraX;
let prevCameraY;

// Camera Only If Not gameOver.
function updateCamera() {
  if (!gameOver) {
      cameraX = xHero;
      cameraY = yHero / 50;

      if (prevCameraX !== undefined && prevCameraY !== undefined) {
          cameraX = lerp(prevCameraX, cameraX, 0.1);
          cameraY = lerp(prevCameraY, cameraY, 0.1);
      }
      prevCameraX = cameraX;
      prevCameraY = cameraY;

      translate(-cameraX, -cameraY);
  }
};



