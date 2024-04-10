/////////////////////////////////////////////
////////FUNCTIONS FOR CHANGING WORLDS////////
/////////////////////////////////////////////

function checkWorldChange(worldCollisionBoard, tileSize) {
  for (let y = 0; y < worldCollisionBoard.length; y++) {
    const currentLine = worldCollisionBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      if (currentTileValue === 300 && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers le temple
        currentWorld = 0;
        xHero = 12 * worldsTileSizes[currentWorld];
        yHero = 6 * worldsTileSizes[currentWorld];
        return true;
      } else if ((currentTileValue === 301 || currentTileValue === 305 || currentTileValue === 306) && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers le village
        currentWorld = 1;
        if (currentTileValue === 301) {
          xHero = 3 * worldsTileSizes[currentWorld]; 
          yHero = 10 * worldsTileSizes[currentWorld];
        } else if (currentTileValue === 305) {
          xHero = 17 * worldsTileSizes[currentWorld]; 
          yHero = 2 * worldsTileSizes[currentWorld];
        } else if (currentTileValue === 306) {
          xHero = 40 * worldsTileSizes[currentWorld]; 
          yHero = 15 * worldsTileSizes[currentWorld];
        }
        return true;
      } else if (currentTileValue === 302  && pointIsInRect(xHero, yHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers la forêt
        currentWorld = 2;
        xHero = 2 * worldsTileSizes[currentWorld];
        yHero = 9 * worldsTileSizes[currentWorld];
        return true;
      } else if (currentTileValue === 303 && pointIsInRect(xHero, yHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers la grotte
        currentWorld = 3;
        xHero = 2 * worldsTileSizes[currentWorld]; 
        yHero = 9 * worldsTileSizes[currentWorld];
        return true;
      } else if (currentTileValue === 304 && pointIsInRect(xHero, yHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers le boss
        currentWorld = 4;
        xHero = 2 * worldsTileSizes[currentWorld]; 
        yHero = 8 * worldsTileSizes[currentWorld];
        return true;
      } 
    }
  }
  return false;
};





function changeWorldIfNeeded() {
  if (checkWorldChange(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    currentWorld = (currentWorld) % worlds.length;

    adjustHeroSize(currentWorld);
  }
};