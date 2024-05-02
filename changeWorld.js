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
        xHero = 16 * worldsTileSizes[currentWorld];
        yHero = 7 * worldsTileSizes[currentWorld];
        return true;
      } else if (currentTileValue === 301 && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers le village détruit
        currentWorld = 1;
        if (currentTileValue === 301) {
          xHero = 2 * worldsTileSizes[currentWorld]; 
          yHero = 10 * worldsTileSizes[currentWorld];
        }
        return true;
      } else if (currentTileValue === 302  && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers la forêt
        currentWorld = 2;
        xHero = 2 * worldsTileSizes[currentWorld];
        yHero = 9 * worldsTileSizes[currentWorld];
        return true;
      } else if (currentTileValue === 303 && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers la grotte
        currentWorld = 3;
        xHero = 2 * worldsTileSizes[currentWorld]; 
        yHero = 9 * worldsTileSizes[currentWorld];
        return true;
      } else if (currentTileValue === 304 && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers le boss
        currentWorld = 4;
        xHero = 2 * worldsTileSizes[currentWorld]; 
        yHero = 8 * worldsTileSizes[currentWorld];
        return true;
      } else if(currentTileValue === 305 && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers le village un peu reconstruit
        if (isForestNpcSaved && heroHasStoneStone) {
          currentWorld = 5;
          // Mettez ici les coordonnées de téléportation appropriées pour la tuile 305
          return true;
        }
      } else if(currentTileValue === 306 && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        // Code pour le changement de monde vers le village reconstruit
        currentWorld === 6;

        return true;
      }
    }
  }
  return false;
}




function changeWorldIfNeeded() {
  if (checkWorldChange(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    currentWorld = (currentWorld) % worlds.length;

    adjustHeroSize(currentWorld);
  }
};