/////////////////////////////////////////////
///////////FUNCTION KEYSBINDS////////////////
/////////////////////////////////////////////

function checkKeys(currentMap) {
  let path = 5;

  if(!gameOver) {
    if (currentMap === 0) {

      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      };
    
      // Right.
      if (keyIsDown(68)) {
        xHero += heroSpeed;
        if (checkCollision(collisonWorlds[0],worldsTileSizes[currentWorld])) {
          xHero -= path;
        }
        // HERO Right Animation.
        movementCounter += 1;
        if (movementCounter >= 20 / heroSpeed) {
          currentIndex +=1;
          if (currentIndex === myHeroRight.length) {
            currentIndex = 0;
          }
          currentHeroImage = myHeroRight[currentIndex];
          movementCounter = 0;
        }
      };
      
      // Left.
      if (keyIsDown(81)) {
        xHero -= heroSpeed;
        if (checkCollision(collisonWorlds[0],worldsTileSizes[currentWorld])) {
          xHero += path;
        }
        // HERO left Animation.
        movementCounter += 1;
        if (movementCounter >= 20 / heroSpeed) {
          currentIndex +=1;
          if (currentIndex === myHeroLeft.length) {
            currentIndex = 0;
          }
          currentHeroImage = myHeroLeft[currentIndex];
          movementCounter = 0;
        }
      };
  
      if (keyIsDown(32)) {
        jump = true;
      } else {
        jump = false;
      }
    };
  
  
  
    if (currentMap === 1) {
  
      // Up.
      if (keyIsDown(90)) {
        yHero -= heroSpeed;
        if (checkCollision(collisonWorlds[1],worldsTileSizes[currentWorld])) {
          yHero += path;
        }
      };
    
    // Down.
      if (keyIsDown(83)) {
        yHero += heroSpeed;
        if (checkCollision(collisonWorlds[1],worldsTileSizes[currentWorld])) {
          yHero -= path;
        }
      };
      
      
      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      };
      
      // Right.
      if (keyIsDown(68)) {
        xHero += heroSpeed;
        if (checkCollision(collisonWorlds[1],worldsTileSizes[currentWorld])) {
          xHero -= path;
        }
        // HERO Right Animation.
        movementCounter += 1;
        if (movementCounter >= 20 / heroSpeed) {
          currentIndex +=1;
          if (currentIndex === myHeroRight.length) {
            currentIndex = 0;
          }
          currentHeroImage = myHeroRight[currentIndex];
          movementCounter = 0;
        }
      };
      
      // Left.
      if (keyIsDown(81)) {
        xHero -= heroSpeed;
        if (checkCollision(collisonWorlds[1],worldsTileSizes[currentWorld])) {
          xHero += path;
        }
        // HERO left Animation.
        movementCounter += 1;
        if (movementCounter >= 20 / heroSpeed) {
          currentIndex +=1;
          if (currentIndex === myHeroLeft.length) {
            currentIndex = 0;
          }
          currentHeroImage = myHeroLeft[currentIndex];
          movementCounter = 0;
        }
      };
    };
  
  
  
    if (currentMap === 2) {
  
      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      };
    
      // Right.
      if (keyIsDown(68)) {
        xHero += heroSpeed;
        if (checkCollision(collisonWorlds[2],worldsTileSizes[currentWorld])) {
          xHero -= path;
        }
        // HERO Right Animation.
        movementCounter += 1;
        if (movementCounter >= 20 / heroSpeed) {
          currentIndex +=1;
          if (currentIndex === myHeroRight.length) {
            currentIndex = 0;
          }
          currentHeroImage = myHeroRight[currentIndex];
          movementCounter = 0;
        }
      };
      
      //Left.
      if (keyIsDown(81)) {
        xHero -= heroSpeed;
        if (checkCollision(collisonWorlds[2],worldsTileSizes[currentWorld])) {
          xHero += path;
        }
        // HERO left Animation.
        movementCounter += 1;
        if (movementCounter >= 20 / heroSpeed) {
          currentIndex +=1;
          if (currentIndex === myHeroLeft.length) {
            currentIndex = 0;
          }
          currentHeroImage = myHeroLeft[currentIndex];
          movementCounter = 0;
        }
      };
  
      if (keyIsDown(32)) {
        jump = true;
      } else {
        jump = false;
      }
    };
  
  
  
    if (currentMap === 3) {
      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      };
    
      // Right.
      if (keyIsDown(68)) {
        xHero += heroSpeed;
        if (checkCollision(collisonWorlds[3],worldsTileSizes[currentWorld])) {
          xHero -= path;
        }
        // HERO Right Animation.
        movementCounter += 1;
        if (movementCounter >= 20 / heroSpeed) {
          currentIndex +=1;
          if (currentIndex === myHeroRight.length) {
            currentIndex = 0;
          }
          currentHeroImage = myHeroRight[currentIndex];
          movementCounter = 0;
        }
      };
      
      //Left.
      if (keyIsDown(81)) {
        xHero -= heroSpeed;
        if (checkCollision(collisonWorlds[3],worldsTileSizes[currentWorld])) {
          xHero += path;
        }
        // HERO left Animation.
        movementCounter += 1;
        if (movementCounter >= 20 / heroSpeed) {
          currentIndex +=1;
          if (currentIndex === myHeroLeft.length) {
            currentIndex = 0;
          }
          currentHeroImage = myHeroLeft[currentIndex];
          movementCounter = 0;
        }
      };
  
      if (keyIsDown(32)) {
        jump = true;
      } else {
        jump = false;
      }
    }
  
  
  
    if (currentMap === 4) {
      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      };
    
      // Right.
      if (keyIsDown(68)) {
        xHero += heroSpeed;
        if (checkCollision(collisonWorlds[4],worldsTileSizes[currentWorld])) {
          xHero -= path;
        }
        // HERO Right Animation.
        movementCounter += 1;
        if (movementCounter >= 20 / heroSpeed) {
          currentIndex +=1;
          if (currentIndex === myHeroRight.length) {
            currentIndex = 0;
          }
          currentHeroImage = myHeroRight[currentIndex];
          movementCounter = 0;
        }
      };
      
      //Left.
      if (keyIsDown(81)) {
        xHero -= heroSpeed;
        if (checkCollision(collisonWorlds[4],worldsTileSizes[currentWorld])) {
          xHero += path;
        }
        // HERO left Animation.
        movementCounter += 1;
        if (movementCounter >= 20 / heroSpeed) {
          currentIndex +=1;
          if (currentIndex === myHeroLeft.length) {
            currentIndex = 0;
          }
          currentHeroImage = myHeroLeft[currentIndex];
          movementCounter = 0;
        }
      };
  
      if (keyIsDown(32)) {
        jump = true;
      } else {
        jump = false;
      }
    };
  }
};


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
    hearts--;
    
    if (hearts <= 0) {
      gameOver = true;
    }
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