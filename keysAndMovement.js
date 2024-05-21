/////////////////////////////////////////////
///////////FUNCTION KEYSBINDS////////////////
/////////////////////////////////////////////
let path = 7;

function moveLeft() {
  xHero -= heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero += path;
  }
  // HERO Left Animation.
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



function moveTopVillage() {
  yHero -= heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    yHero += path;
  }
  // HERO Top Village Animation
  updateAnimationVillage(myHeroVillageTop);
}

function moveBottomVillage() {
  yHero += heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes  [currentWorld])) {
    yHero -= path;
  }
  // HERO Bottom Village Animation
  updateAnimationVillage(myHeroVillageBottom);
}

function moveLeftVillage() {
  xHero -= heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero += path;
  }
  // HERO Left Village Animation.
  updateAnimationVillage(myHeroVillageLeft);
}

function moveRightVillage() {
  xHero += heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero -= path;
  }
  // HERO Right Village Animation.
  updateAnimationVillage(myHeroVillageRight);
}


/////////////////////////////////////////////
/////////////FUNCTION UPDATE/////////////////
/////////////////////////////////////////////

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

function updateAnimation(animationArray) {
  if (!isAttacking) {
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
}



/////////////////////////////////////////////
/////////////FUNCTION CHECKKEYS//////////////
/////////////////////////////////////////////

let lastDirection = 'down';
let lastHorizontalDirection = 'left';

function checkKeys(currentMap) {
  if (!gameOver) {
    if (currentMap === 0) {
      if (animation) {
        return;
      }
    } else if (currentMap  === 1) {
      if (animationVillage) {
        return;
      }
    } else if (currentMap === 4) {
      if (animationBoss) {
        return;
      }
    }
    // Temple, Foret, Grotte, Boss
    if (currentMap === 0 || currentMap === 2 || currentMap === 3 || currentMap === 4) {
      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      }

      
      if (keyIsDown(68)) {
        moveRight();
        lastHorizontalDirection = 'right';
      } else if (keyIsDown(81)) {
        moveLeft();
        lastHorizontalDirection = 'left';
      }


      if (keyIsDown(32)) {
        jump();
      }


      if (!keyIsDown(68) && !keyIsDown(81)) {
        if (lastHorizontalDirection === 'right') {
          updateAnimation(myHeroIdleRight);
        } else if (lastHorizontalDirection === 'left') {
          updateAnimation(myHeroIdleLeft);
        }
      }
    }
    
    // Village
    if (currentMap === 1 || currentMap === 5 || currentMap === 4 ) {
      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      }

      if (keyIsDown(90) && keyIsDown(83)) {
        return;
      }
      

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
};



/////////////////////////////////////////////
///////////FUNCTION KEYSPRESSED//////////////
/////////////////////////////////////////////

let initialX = 2 * worldTempleTileSize;
let initialY = 6 * worldTempleTileSize;

function keyPressed() {


  if(!introDialogActive && !animation) {
    if (keyCode === 78) {
      if (checkGrandSageInteraction()) {
        currentDialogueGrandSageIndex++;
        if (currentDialogueGrandSageIndex >= dialoguesGrandSage.length) {
          currentDialogueGrandSageIndex = dialoguesGrandSage.length - 1;
        }
      }
    }
  };

  if (keyCode === 78) { // Touche "N"
    if (foretDialogActive && currentDialogueForetIndex < dialoguesInForet.length - 1) {
        currentDialogueForetIndex++;
    } else if (foretDialogActive && currentDialogueForetIndex === dialoguesInForet.length - 1) {
        foretDialogActive = false;
        // Supprimer les dialogues de la forêt une fois que le dernier dialogue a été affiché
        dialoguesInForet.splice(0, dialoguesInForet.length);
    }
  }

  if (keyCode === 78) { // Touche "N"
    if (yetiDialogActiveEcorse && currentYetiIndexQueteEcorse < dialoguesYetiEcorse.length - 1) {
        currentYetiIndexQueteEcorse++;
    } else if (yetiDialogActiveEcorse && currentYetiIndexQueteEcorse === dialoguesYetiEcorse.length - 1) {
        yetiDialogActiveEcorse = false;
        // Supprimer les dialogues de l'écorse une fois que le dernier dialogue a été affiché
        dialoguesYetiEcorse.splice(0, dialoguesYetiEcorse.length);
        newSword = true;
    }
  }

  if (keyCode === 78) { // Touche "N"
    if (yetiDialogActiveEcorse2 && currentYetiIndexQueteEcorse2 < dialoguesYetiEcorse2.length - 1) {
        currentYetiIndexQueteEcorse2++;
    } else if (yetiDialogActiveEcorse2 && currentYetiIndexQueteEcorse2 === dialoguesYetiEcorse2.length - 1) {
        yetiDialogActiveEcorse2 = false;
        // Supprimer les dialogues de l'écorse une fois que le dernier dialogue a été affiché
        dialoguesYetiEcorse2.splice(0, dialoguesYetiEcorse2.length);
    }
  }

  if (keyCode === 78) { // Touche "N"
    if (foretFinishDialogActive && currentDialogueFinishForetIndex < dialoguesFinishForet.length - 1) {
        currentDialogueFinishForetIndex++;
    } else if (foretFinishDialogActive && currentDialogueFinishForetIndex === dialoguesFinishForet.length - 1) {
        foretFinishDialogActive = false;
        foretFinishDialogFinish = true;
        // Supprimer les dialogues de fin de la forêt une fois que le dernier dialogue a été affiché
        dialoguesFinishForet.splice(0, dialoguesFinishForet.length);
    }
  }


  

  if (keyCode === 78) { // Touche "N"
    if (alchimisteDialogActive && currentAlchimisteIndex < dialoguesAlchimiste.length - 1) {
      currentAlchimisteIndex++;
    } else if (alchimisteDialogActive && currentAlchimisteIndex === dialoguesAlchimiste.length - 1) {
      alchimisteDialogActive = false;
      alchimisteDialogueFinished = true;
      hearts = 3;
      potions = 3;
      // Supprimez les dialogues de l'alchimiste une fois que le dernier dialogue a été affiché
      dialoguesAlchimiste.splice(0, dialoguesAlchimiste.length);
    }
  }

  if (keyCode === 78) { 
    if (bossIntroActive && currentBossIntroductionIndex < bossDialogues.length - 1) {
      currentBossIntroductionIndex++;
    } else if (bossIntroActive && currentBossIntroductionIndex === bossDialogues.length - 1) {
      bossIntroActive = false;
      // Supprimez les dialogues du boss une fois que le dernier dialogue a été affiché
      bossDialogues.splice(0, bossDialogues.length);
    }
  };


  if(keyCode === 78) {
    if(yetiDialogActive && currentYetiIndexQuete < dialoguesYeti.length - 1) {
      currentYetiIndexQuete++;
    } else if(yetiDialogActive && currentYetiIndexQuete === dialoguesYeti.length - 1) {
      yetiDialogActive = false;
      conversationYetiFinished = true;
      dialoguesYeti.splice(0, dialoguesYeti.length);
    }
  }





  if(currentWorld === 3 || currentWorld === 4 || currentWorld === 1 || currentWorld === 2) {
    if (keyCode === 82) { // Touche R pour le code '82'.
      if (potions > 0 && hearts < 3) {
        hearts++;
        potions--;
      }
    }
  }
  

  // Pour test les potions
  if (keyCode === 72) {  // Touche H pour le code '72'.
    loseHeart();
  }

  // Pour test le boss.
  if (keyCode === 80) { // Touche P pour le code '80'.
    
    if (bossHealth > 0) {
      bossHealth -= 10;
    }
  }

  if (bossHealth === 0) {
    bossDead = true;
  }
  

  
  
  if (currentWorld === 0 || currentWorld === 2 || currentWorld === 3 || currentWorld === 4) {
    if (key === 'e') {
      heroAttack();
    }
  };

  if (key === 't') {
    let cageIndex = checkCageInteraction();
    if (cageIndex !== -1) {
      counterForet += 3; 
      counterForet = min(counterForet, 9); 
      cageVisible[cageIndex] = false; 
      
      if (counterForet === 9) {
        isForestNpcSaved = true;
      }
    }
  }

  if (key === 't') {
    let cageIndexGrotte = checkCageInteractionGrotte();
    if (cageIndexGrotte !== -1) {
      counterGrotte += 3; 
      counterGrotte= min(counterGrotte, 9); 
      cageVisibleGrotte[cageIndexGrotte] = false;
    }

    if (counterGrotte === 9) {
      isGrottetNpcSaved = true;
    }
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
  };


  if (bossDead) {
    image(outroImages[outroImageIndex], 0, 0, width, height);
    if (keyIsPressed && keyCode === RIGHT_ARROW) {
      outroImageIndex++;
      if (outroImageIndex >= outroImages.length) {
        outroImagesEnd = true;
        outroVideo.play();
        outroVideo.show();
        videoPlaying = true;
      }
    } else if (keyIsPressed && keyCode === LEFT_ARROW) {
      if (outroImageIndex > 0) {
        outroImageIndex--;
      }
    }
  } else if (videoPlaying) {
    image(outroVideo, 0, 0, width, height);
    if (outroVideo.elt.ended) {
      videoPlaying = false;
      outroVideo.hide();
      // Ajoutez votre logique de fin, par exemple revenir au menu principal ou redémarrer le jeu
      // resetGame();
    }
  }

  // Intro Tuto.
  if (keyCode === 78 && currentIntroductionIndex >= 5 && currentIntroductionIndex <= 10) {
    return;
  };
  
  if (keyCode === 78) { 
    if (introDialogActive && currentIntroductionIndex < dialoguesIntroduction.length - 1) {
      currentIntroductionIndex++;
    } else if (introDialogActive && currentIntroductionIndex === dialoguesIntroduction.length - 1) {
      introDialogActive = false;
    }
  };


  
  if (introDialogActive) {
    if (currentIntroductionIndex === 5) {
      if (keyCode === 81) { // Appuie sur 'q' pour aller à gauche
        currentIntroductionIndex++;
      }
    } else if (currentIntroductionIndex === 6) {
      if (keyCode === 68) { // Appuie sur 'd' pour aller à droite
        currentIntroductionIndex++;
      }
    } else if (currentIntroductionIndex === 7) {
      if (keyCode === 32) { // Appuie sur 'espace' pour sauter
        currentIntroductionIndex++;
      }
    } else if (currentIntroductionIndex === 19) {
      if (keyCode === 13) { // Appuie sur 'enter' pour sauter
        currentIntroductionIndex++;
      }
    } else if(currentIntroductionIndex === 8) {
      if(keyCode === 69) {
        currentIntroductionIndex++;
      }
    } else if(currentIntroductionIndex === 9) {
      if(keyCode === 90) {
        currentIntroductionIndex++
      }
    } else if(currentIntroductionIndex === 10) {
      if(keyCode === 83) {
        currentIntroductionIndex++;
      }
    }
  }
};