/////////////////////////////////////////////
////////FUNCTIONS FOR CHANGING WORLDS////////
/////////////////////////////////////////////

function checkWorldChange(worldCollisionBoard, tileSize) {
  for (let y = 0; y < worldCollisionBoard.length; y++) {
    const currentLine = worldCollisionBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      if (currentTileValue === 300 && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        currentWorld = 0; // Le temple (Je sais pas pourquoi l'index 9 !!!)
        xHero = 12 * worldsTileSizes[currentWorld];
        yHero = 6 * worldsTileSizes[currentWorld];
        return true;
      } else if (currentTileValue === 301 && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        currentWorld = 1; // Le Village
        xHero = 3 * worldsTileSizes[currentWorld]; 
        yHero = 10 * worldsTileSizes[currentWorld];
        return true;
      }else if (currentTileValue === 302 && pointIsInRect(xHero, yHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        currentWorld = 2; // La Fôret
        xHero = 2 * worldsTileSizes[currentWorld];
        yHero = 9 * worldsTileSizes[currentWorld];
        return true;
      } else if (currentTileValue === 303 && pointIsInRect(xHero, yHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        currentWorld = 3; // La Grotte
        xHero = 2 * worldsTileSizes[currentWorld]; 
        yHero = 9 * worldsTileSizes[currentWorld];
        return true;
      } else if (currentTileValue === 304 && pointIsInRect(xHero, yHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
        currentWorld = 4; // Le Boss
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