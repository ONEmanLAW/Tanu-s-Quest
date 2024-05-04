// array assets = [path1, path2, ...]
// // 
// worldcandisplay = false
// fn loadAsset

//   while index < array assets.length
//     loadImage("path current index of array", counter + 1)

//   canworlddisplay = true




/////////////////////////////////////////////
//////////////WORLDS VARIABLES///////////////
/////////////////////////////////////////////

setupWorldVariables(); // setup.js


let allAssetsLoaded = false;

function preloadAssets() {
  return new Promise((resolve, reject) => {
  
    const assetPromises = [];

    
    assetPromises.push(loadTileDictionaries());
    assetPromises.push(loadWorldAssets());
    
   

    Promise.all(assetPromises)
      .then(() => {
        allAssetsLoaded = true;
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function loadWorldAssets() {
  return new Promise((resolve, reject) => {
   
    setupWorlds(); // setup.js
   
    resolve();
  });
}

function loadTileDictionaries() {
  return new Promise((resolve, reject) => {
    const promises = [
      new Promise((resolve, reject) => {
        setupTileDictionariesVillage(); // worldVillage.js
        resolve(); 
      }),
      new Promise((resolve, reject) => {
        setupTileDictionariesTemple(); // worldTemple.js
        resolve();
      }),
      new Promise((resolve, reject) => {
        setupTileDictionariesForet(); // worldForet.js
        resolve(); 
      }),
      new Promise((resolve, reject) => {
        setupTileDictionariesGrotte(); // worldGrotte.js
        resolve();
      }),
      new Promise((resolve, reject) => {
        setupTileDictionariesBoss(); // worldBoss.js
        resolve(); 
      }),
      new Promise((resolve, reject) => {
        setupTileDictionariesVillage2(); // worldVillage2.js
        resolve(); 
      }),
      // new Promise((resolve, reject) => {
      //   setupTileDictionariesVillage3(); // worldVillage3.js
      //   resolve(); 
      // })
    ];
    
    
    Promise.all(promises)
      .then(() => {
        
        resolve();
      })
      .catch((error) => {
        
        reject(error);
      });
  });
}


/////////////////////////////////////////////
/////////FUNCTION LAUNCH ON SETUP////////////
/////////////////////////////////////////////

// For Canavas.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  // For Intro.
  mainMenuButtons();
  introImages();
  
  // Animation Hero.
  preloadHeroImages(); // hero.js
  preloadHeroVillageImages(); // hero.js

  // Animation Yeti.
  preloadYetiImages(); // yetiNpc.js
  preloadBossImages(); 
  // Hearts Hero.
  preloadHeartImage(); // hero.js


  preloadEnemy1Image(); // enemyLevel1.js
  createEnemiesForet(); // enemyLevel1.js

  preloadEnemy2Image(); // enemy2Level.js
  createEnemiesForet2(); // enemy2Level.js
  
  preloadEnemy3Image(); // enemyLevel3.js
  createEnemiesForet3(); // enemyLevel3.js

  // Image Of Npc
  preloadNPCImages(); // grandSageNpc.js
  preloadChatImage(); //grandSageNpc.js
  preloadGrandSageImages(); //grandSageNPC.js
  preloadCageImage(); // prison.js
  preloadCageImageGrotte();


  preloadHudImages(); // hud.js
  preloadGameOverImages();
  // Background Of Worlds.
  preloadBackgroundImages(); // backgroundImages.js
}

function setup() {
  // Canvas For Story.
  createCanvas(windowWidth, windowHeight);
  musiqueFond.loop();

  preloadAssets()
    .then(() => {
      // Une fois que tous les assets sont chargés, commencez à dessiner
      //drawGame();
      console.log('YES');
    })
    .catch((error) => {
      console.error('Une erreur est survenue lors du chargement des assets :', error);
    });


  
};












let gameOverImage;
let retryImage;
let mainMenuImage;
let quitImage;

function preloadGameOverImages() {
  gameOverImage = loadImage('bloc game over.png');
  retryImage = loadImage('bouton rejouer.png');
  mainMenuImage = loadImage('bouton menu principal.png');
  quitImage = loadImage('bouton quitter.png');
}











function drawGame() {
  if (!gameStart) {
    if (scene === 'menu') {
      drawMainMenu();
    } else if (scene === 'parametre') {
      drawParametrePage();
    }
  } else if(gameStart && !introImagesEnd) { 
    // Start Of Intro With Images.
    image(images[currentImageIndex], 0, 0, width, height);
    } else {

    // Function For The Game.
    checkKeys(currentWorld);
    changeWorldIfNeeded();
    
    

    
    // If Hero Have Hearts Game is Not Over.
    if (hearts > 0) {
      if (currentWorld === 0) {
        updateNormalCamera(1800, 1056);
        image(backgroundTutoImage, 0, 0);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        drawFront(decorationWorlds[0], tileDecorationDictionnaries[0], worldsDecorationTileSizes[0]);
        
        // Spawn NPC.
       
        updateGrandSageAnimation(myGrandSageIdle);
        // Dessinez l'image actuelle du Grand Sage
        image(currentGrandSageImage, npcGrandSageX, npcGrandSageY, npcGrandSageWidth, npcGrandSageHeight);
        
        image(mannequinImage, mannequinX, mannequinY, mannequinWidth, mannequinHeight);

        // Spawn Hero.
        image(currentHeroImage, xHero, yHero, wHero, hHero);

        
        
        // Automatic Movement At Start.
        // One Tile = 16.
        if (animation && animationCounter < 144) {
          xHero -= movementSpeed;
          animationCounter++;
          updateAnimation(myHeroLeft);
        } else {
          animation = false;
        };

        if(!introDialogActive && !animation) {
          introDialogActive = true;
        } else if(introDialogActive) {
          gererIntroduction();
        }

        if (currentIntroductionIndex >= dialoguesIntroduction.length) {
          introDialogActive = false;
        }
        gestionTransitionImage();

        if(!introDialogActive && !animation) {
          checkGrandSageInteraction();
        }
        
        drawHudTemple ();
        applyGravityTemple();

      } else if (currentWorld === 1) {
        updateNormalCamera(4704, 2688);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        updateYetiAnimation(myYetiIdle);
        image(currentYetiImage, 12 * worldVillageTileSize, 10 * worldVillageTileSize, npcYetiWidth, npcYetiHeight);
        image(currentHeroVillageImage, xHero, yHero, 96, 96);
        drawFront(decorationWorlds[1], tileDecorationDictionnaries[1], worldsDecorationTileSizes[1]);
        drawHud();
        drawHearts();

        if (animationVillage && animationCounterVillage < 133) {
          xHero += movementSpeedVillage;
          animationCounterVillage++;
          updateAnimation(myHeroVillageRight);
        } else {
          animationVillage = false;
          yetiDialogActive = true;
        };
        
        //checkNPCYetiInteraction();
       
        // Vérifie si le dialogue du Yeti est actif
        if (yetiDialogActive) {
          gererDialoguesYeti();
        }

        
        
      } else if (currentWorld === 2) {
        image(backgroundForetImage, 0, 0);
        updateParallaxCameraForet(16000, 1120);
        drawFront(decorationWorlds[2], tileDecorationDictionnaries[2], worldsDecorationTileSizes[2]); 
        


        moveEnemies(); 
        drawEnemies();
        checkEnemyCollision(); 

        moveEnemies2(); 
        drawEnemies2(); 
        checkEnemy2Collision(); 
        detectPlayer2(); 


        moveEnemies3();
        drawEnemies3();
        checkEnemy3Collision();
        detectPlayer3(); 

        image(currentHeroImage, xHero, yHero, wHero, hHero);
        
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        
        handleCooldown();
        checkHeroInStone();
        drawHud();
        drawHearts();

        if(!heroInStone) {
          image(imagePierreTerre, xTerre, yTerre, wTerre, hTerre);
        }
        
        for (let i = 0; i < cagePositions.length; i++) {
          if (cageVisible[i]) {
            image(cageImage, cagePositions[i].x, cagePositions[i].y, cageWidth, cageHeight);
          }
        }
        checkCageInteraction();
        checkForestNpcSaved();
        
        //detectDirection();

        // if (isAttacking) {
        //   // Gérer l'attaque (animation, etc.)
        //   attack(); // Appeler la fonction pour activer l'attaque
          
        //   // Réinitialiser la taille du héros après l'attaque
        //   wHero = 80;
        //   hHero = 80;

        //   // Vérifier les collisions après l'attaque
        //   checkCollisionAttack();
          
        //   // Réinitialiser l'état de l'attaque
        //   isAttacking = false;
        // }


      } else if (currentWorld === 3) {
        image(backgroundGrotteImage, 0, 0);
        updateParallaxCameraGrotte(16000, 1120);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        drawFront(decorationWorlds[3], tileDecorationDictionnaries[3], worldsDecorationTileSizes[3]);
        image(currentHeroImage, xHero, yHero, wHero, hHero);


        for (let i = 0; i < cagePositionsGrotte.length; i++) {
          if (cageVisibleGrotte[i]) {
            image(cageImageGrotte, cagePositionsGrotte[i].x, cagePositionsGrotte[i].y, cageWidthGrotte, cageHeightGrotte);
          }
        }
        checkCageInteractionGrotte();
        checkGrotteNpcSaved();
        
        
      } else if (currentWorld === 4) {
        updateNormalCamera(1824, 1056);
        image(backgroundBossImage, 0, 0);
        image(currentBossImage, bossX, bossY, bossWidth, bossHeight);
        updateBossAnimation(myBossIdle);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        drawFront(decorationWorlds[4], tileDecorationDictionnaries[4], worldsDecorationTileSizes[4]);
        image(currentHeroImage, xHero, yHero, wHero, hHero);


      } else if(currentWorld === 5) {
        updateNormalCamera(4704, 2688);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        updateYetiAnimation(myYetiIdle);
        image(currentYetiImage, 12 * worldVillageTileSize, 10 * worldVillageTileSize, npcYetiWidth, npcYetiHeight);
        image(currentHeroVillageImage, xHero, yHero, 96, 96);
        drawFront(decorationWorlds[5], tileDecorationDictionnaries[5], worldsDecorationTileSizes[5]);
        drawHud();
        drawHearts();

      } else if(currentWorld === 6) {
        updateNormalCamera(4704, 2688);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        updateYetiAnimation(myYetiIdle);
        image(currentYetiImage, 12 * worldVillageTileSize, 10 * worldVillageTileSize, npcYetiWidth, npcYetiHeight);
        image(currentHeroVillageImage, xHero, yHero, 96, 96);
        drawFront(decorationWorlds[6], tileDecorationDictionnaries[6], worldsDecorationTileSizes[6]);
        drawHud();
        drawHearts();
      }

      
      if (hearts <= 0) {
        // Si le joueur est mort, afficher l'animation de mort du personnage
        updateAnimation(myHeroDeath);
      }

    } else {
// Si le joueur est mort (game over)
      // Calculer la position centrale verticale
      let centerY = height / 2;
      
      // Redimensionner les images pour les rendre plus petites
      let imageScale = 0.2; // Facteur de réduction de taille des images
      let gameOverWidth = gameOverImage.width * imageScale;
      let retryWidth = retryImage.width * imageScale;
      let mainMenuWidth = mainMenuImage.width * imageScale;
      let quitWidth = quitImage.width * imageScale;

      // Espacement vertical entre les images
      let verticalSpacing = 10;

      // Calculer la hauteur totale occupée par les images
      let totalHeight = gameOverImage.height * imageScale + retryImage.height * imageScale + mainMenuImage.height * imageScale + quitImage.height * imageScale + 3 * verticalSpacing;

      // Position de départ en Y pour le premier élément
      let startY = centerY - totalHeight / 2;

      // Position des images
      let gameOverX = width / 2 - gameOverWidth / 2;
      let gameOverY = startY;
      let retryX = width / 2 - retryWidth / 2;
      let retryY = gameOverY + gameOverImage.height * imageScale + verticalSpacing;
      let mainMenuX = width / 2 - mainMenuWidth / 2;
      let mainMenuY = retryY + retryImage.height * imageScale + verticalSpacing;
      let quitX = width / 2 - quitWidth / 2;
      let quitY = mainMenuY + mainMenuImage.height * imageScale + verticalSpacing;

  
      noStroke();
      fill(0, 10); // Noir avec une opacité de 15%
      rect(0, 0, width, height);

      // Afficher les images
      image(gameOverImage, gameOverX, gameOverY, gameOverWidth, gameOverImage.height * imageScale);
      image(retryImage, retryX, retryY, retryWidth, retryImage.height * imageScale);
      image(mainMenuImage, mainMenuX, mainMenuY, mainMenuWidth, mainMenuImage.height * imageScale);
      image(quitImage, quitX, quitY, quitWidth, quitImage.height * imageScale);

      // Gérer les clics sur les images
      if (mouseIsPressed) {
        if (mouseX > retryX && mouseX < retryX + retryWidth && 
            mouseY > retryY && mouseY < retryY + retryImage.height * imageScale) {
          // Retry
          
          if (gameOver) {
            hearts = 3;
            gameOver = false;
            xHero = 2 * worldTempleTileSize;
            yHero = 6 * worldTempleTileSize;
            resetEnemiesPosition();
            resetEnemies2Position();
            resetEnemies3Position();
            if (currentWorld === 2) {
              createEnemiesForet();
              createEnemiesForet2();
              createEnemiesForet3();
            }
          }
          // Ajoutez ici la logique pour relancer le niveau
        } else if (mouseX > mainMenuX && mouseX < mainMenuX + mainMenuWidth && 
                   mouseY > mainMenuY && mouseY < mainMenuY + mainMenuImage.height * imageScale) {
          // Main Menu
          location.reload(); // Rafraîchir la page
        } else if (mouseX > quitX && mouseX < quitX + quitWidth && 
                   mouseY > quitY && mouseY < quitY + quitImage.height * imageScale) {
          // Quitter
          window.close(); // Fermer le navigateur
        }
      }
    }
  }
}















/////////////////////////////////////////////
////////////FUNCTIONS FOR DRAW///////////////
/////////////////////////////////////////////
function draw() {
  // Dessinez votre jeu ici
  if (allAssetsLoaded) { //canworlddisplay
    drawGame();
  } else {
    // Affichez un message de chargement ou une animation de chargement
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Chargement...", width / 2, height / 2);
  }
}  
