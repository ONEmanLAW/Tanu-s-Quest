/////////////////////////////////////////////
///////////FUNCTION KEYSBINDS////////////////
/////////////////////////////////////////////
let path = 5;

function moveLeft() {
  xHero -= heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero += path;
  }
  // HERO left Animation.
  updateAnimation(myHeroLeft);
}

function moveRight() {
  xHero += heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero -= path;
  }
  // HERO Right Animation.
  updateAnimation(myHeroRight);
}

function updateAnimation(animationArray) {
  movementCounter += 1;
  if (movementCounter >= 20 / heroSpeed) {
    currentIndex += 1;
    if (currentIndex === animationArray.length) {
      currentIndex = 0;
    }
    currentHeroImage = animationArray[currentIndex];
    movementCounter = 0;
  }
}

function checkKeys(currentMap) {
 

  if (!gameOver) {
    if (currentMap === 0 || currentMap === 2 || currentMap === 3 || currentMap === 4) {
      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      }

      if (keyIsDown(68)) {
        moveRight();
      }

      if (keyIsDown(81)) {
        moveLeft();
      }

      if (keyIsDown(32)) {
        jump();
      }
    }
    

    if (currentMap === 1 || currentMap === 2 currentMap === 3) {
      if (keyIsDown(90)) {
        yHero -= heroSpeed;
        if (checkCollision(collisonWorlds[currentMap], worldsTileSizes[currentWorld])) {
          yHero += path;
        }
      }

      if (keyIsDown(83)) {
        yHero += heroSpeed;
        if (checkCollision(collisonWorlds[currentMap], worldsTileSizes[currentWorld])) {
          yHero -= path;
        }
      }

      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      }

      if (keyIsDown(68)) {
        moveRight();
      }

      if (keyIsDown(81)) {
        moveLeft();
      }
    }
  }
}



let initialX = 2 * worldTempleTileSize;
let initialY = 6 * worldTempleTileSize;

function keyPressed() {
  if (key === 'n' || key === 'N') {
    if (checkNPCInteraction()) {
      currentDialogueGrandSageIndex++;
      if (currentDialogueGrandSageIndex >= dialoguesGrandSage.length) {
        currentDialogueGrandSageIndex = dialoguesGrandSage.length - 1;
      }
    };
  };

  if (key === 'h' && !gameOver) {
    loseHeart();
  } else if (gameOver && key === 'r') {
    hearts = 3;
    gameOver = false;
    xHero = initialX;
    yHero = initialY;
  }


  if (gameStart) {
    if (keyCode === RIGHT_ARROW) {
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        introImagesEnd = true;
      }
    } else if (keyCode === LEFT_ARROW) {
      if (currentImageIndex > 0) {
        currentImageIndex--;
      }
    }
  }
};
