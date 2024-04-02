/////////////////////////////////////////////
////////FUNCTIONS FOR CHANGING WORLDS////////
/////////////////////////////////////////////

function checkWorldChange(worldCollisionBoard, tileSize) {
  for (let y = 0; y < worldCollisionBoard.length; y++) {
    const currentLine = worldCollisionBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      if (currentTileValue === 2 && pointIsInRect(xHero -10 + wHero / 2, yHero -15 + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
          return true;
      }
    }
  }
  return false;
};


function changeWorldIfNeeded() {
  if (checkWorldChange(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    currentWorld = (currentWorld + 1) % worlds.length;
    
    xHero = 12 * worldsTileSizes[currentWorld];
    yHero = 6 * worldsTileSizes[currentWorld];
  }
};