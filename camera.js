// Caméra qui suit le personnage. 
let prevCameraX;
let prevCameraY;

// Camera Only If Not gameOver.
function updateCamera() {
  if (!gameOver) {
      cameraX = xHero - width / 2;
      cameraY = yHero - height / 2;

      if (prevCameraX !== undefined && prevCameraY !== undefined) {
          cameraX = lerp(prevCameraX, cameraX, 0.1);
          cameraY = lerp(prevCameraY, cameraY, 0.1);
      }
      prevCameraX = cameraX;
      prevCameraY = cameraY;

      translate(-cameraX, -cameraY);
  }
};