let path = 7;
let lastDirection = 'down';
let lastHorizontalDirection = 'left';

function moveLeft() {
  xHero -= heroSpeed;
  handleCollision();
  updateAnimation(myHeroLeft);
}

function moveRight() {
  xHero += heroSpeed;
  handleCollision();
  updateAnimation(myHeroRight);
}

function moveTopVillage() {
  yHero -= heroSpeed;
  handleCollision();
  updateAnimationVillage(myHeroVillageTop);
}

function moveBottomVillage() {
  yHero += heroSpeed;
  handleCollision();
  updateAnimationVillage(myHeroVillageBottom);
}

function moveLeftVillage() {
  xHero -= heroSpeed;
  handleCollision();
  updateAnimationVillage(myHeroVillageLeft);
}

function moveRightVillage() {
  xHero += heroSpeed;
  handleCollision();
  updateAnimationVillage(myHeroVillageRight);
}

function handleCollision() {
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    if (lastDirection === 'left' || lastDirection === 'right') {
      xHero += (lastDirection === 'left') ? path : -path;
    } else {
      yHero += (lastDirection === 'up') ? path : -path;
    }
  }
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

function updateAnimationVillage(animationArray) {
  movementCounter += 1;
  if (movementCounter >= 20 / heroSpeed) {
    currentVillageIndex += 1;
    if (currentVillageIndex === animationArray.length) {
      currentVillageIndex = 0;
    }
    currentHeroVillageImage = animationArray[currentVillageIndex];
    movementCounter = 0;
  }
}

function checkKeys(currentMap) {
  if (!gameOver) {
    if ((currentMap === 0 || currentMap === 2 || currentMap === 3 || currentMap === 4) && (keyIsDown(68) || keyIsDown(81))) {
      if (keyIsDown(68)) {
        moveRight();
        lastHorizontalDirection = 'right';
      } else if (keyIsDown(81)) {
        moveLeft();
        lastHorizontalDirection = 'left';
      }
    } else if (currentMap === 1 && (keyIsDown(68) || keyIsDown(81) || keyIsDown(90) || keyIsDown(83))) {
      if (keyIsDown(68)) {
        moveRightVillage();
        lastDirection = 'right';
      } else if (keyIsDown(81)) {
        moveLeftVillage();
        lastDirection = 'left';
      } else if (keyIsDown(90)) {
        moveTopVillage();
        lastDirection = 'up';
      } else if (keyIsDown(83)) {
        moveBottomVillage();
        lastDirection = 'down';
      }
    }

    if (!keyIsDown(68) && !keyIsDown(81) && !keyIsDown(90) && !keyIsDown(83)) {
      if (lastDirection === 'up') {
        updateAnimationVillage(myHeroVillageIdleTop);
      } else if (lastDirection === 'down') {
        updateAnimationVillage(myHeroVillageIdleBottom);
      } else if (lastDirection === 'left') {
        updateAnimationVillage(myHeroVillageIdleLeft);
      } else if (lastDirection === 'right') {
        updateAnimationVillage(myHeroVillageIdleRight);
      }
    }
  }
}

function keyPressed() {
  if (!introDialogActive && !animation) {
    if ((key === 'n' || key === 'N') && checkGrandSageInteraction()) {
      currentDialogueGrandSageIndex++;
      if (currentDialogueGrandSageIndex >= dialoguesGrandSage.length) {
        currentDialogueGrandSageIndex = dialoguesGrandSage.length - 1;
      }
    }
  }

  if ((key === 'n' || key === 'N') && checkNPCYetiInteraction()) {
    currentDialogueYetiIndex++;
    if (currentDialogueYetiIndex >= dialoguesYeti.length) {
      currentDialogueYetiIndex = dialoguesYeti.length - 1;
    }
  }

  if (key === 'h' && !gameOver) {
    loseHeart();
  } else if (gameOver && key === 'r') {
    hearts = 3;
    gameOver = false;
    xHero = initialX;
    yHero = initialY;
  }

  if (currentWorld === 2 || currentWorld === 3 || currentWorld === 4) {
    if (key === 'e') {
      attack();
    }
  }

  if (gameStart) {
    if (keyCode === RIGHT_ARROW) {
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        introImagesEnd = true;
      }
    } else if (keyCode === LEFT_ARROW && currentImageIndex > 0) {
      currentImageIndex--;
    }
  }

  if (keyCode === 78 && currentIntroductionIndex >= 5 && currentIntroductionIndex <= 7) {
    return;
  }

  if (keyCode === 78 && introDialogActive) {
    if (currentIntroductionIndex < dialoguesIntroduction.length - 1) {
      currentIntroductionIndex++;
    } else {
      introDialogActive = false;
    }
  }

  if (introDialogActive && (currentIntroductionIndex === 5 || currentIntroductionIndex === 6 || currentIntroductionIndex === 7 || currentIntroductionIndex === 9)) {
    if ((currentIntroductionIndex === 5 && keyCode === 81) || (currentIntroductionIndex === 6 && keyCode === 68) || (currentIntroductionIndex === 7 && keyCode === 32) || (currentIntroductionIndex === 9 && keyCode === 13)) {
      currentIntroductionIndex++;
    }
  }
}
