/////////////////////////////////////////////
///////////FUNCTION KEYSBINDS////////////////
/////////////////////////////////////////////

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
  let path = 5;

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
    }

    if (currentMap === 0 || currentMap === 2 || currentMap === 3 || currentMap === 4) {
      if (keyIsDown(32)) {
        jump = true;
      } else {
        jump = false;
      }
    }

    if (currentMap === 1) {
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




































let initialX = 2 * worldTempleTileSize - 10;
let initialY = 6 * worldTempleTileSize - 15;

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
};


/////////////////////////////////////////////
///////////FUNCTION KEYSBINDS////////////////
/////////////////////////////////////////////

function gravity() {
  
  const collision = checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld]);

 
  if (jump || !collision) {
    yHero += direction * velocity;
  }

  
  if (jump) {
   
    if (jumpCounter >= jumpPower) {
      velocity = fallingSpeed;
    } else {
      velocity = -jumpPower;
      jumpCounter++;
    }
  } else {
  
    if (!collision) {
      velocity = fallingSpeed;
    }
  }

  if (collision) {
    jump = false;
    jumpCounter = 0;
  }
}