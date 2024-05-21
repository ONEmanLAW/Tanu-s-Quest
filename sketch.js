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
        setupTileDictionariesBoss(); // worldBoss.js
        resolve(); 
      }),
      new Promise((resolve, reject) => {
        setupTileDictionariesVillage3(); // worldVillage3.js
        resolve(); 
      }),
      new Promise((resolve, reject) => {
        setupTileDictionariesGrotte(); // worldGrotte.js
        resolve();
      }),
       // new Promise((resolve, reject) => {
      //   setupTileDictionariesVillage2(); // worldVillage2.js
      //   resolve(); 
      // }),
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










let loadingGif;
let maPolice;
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
  preloadOutroImages();
  
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
  createEnemiesGrotte();


  preloadEnemy2Animations(); // enemy2Level.js
  createEnemiesForet2(); // enemy2Level.js
  createEnemiesGrotte2();
 
  
  preloadEnemy3Animations(); // enemyLevel3.js
  createEnemiesForet3();
  createEnemiesGrotte3();
  

  // Image Of Npc
  preloadNPCImages(); // grandSageNpc.js
  preloadChatImage(); //grandSageNpc.js
  preloadGrandSageImages(); //grandSageNPC.js
  preloadCageImage(); // prison.js
  preloadCageImageGrotte();
  preloadAlchimisteImages();
  preloadBabyTanukiImages();


  preloadHudImages(); // hud.js
  preloadGameOverImages();
  // Background Of Worlds.
  preloadBackgroundImages(); 
  preloadBarDeVieBoss();

  loadingGif = loadImage('pageDeChargement.gif');
  maPolice = loadFont('Minecraftia-Regular.ttf');
  
}

function setup() {
  // Canvas For Story.
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

 
  introGif.show();
  introGif.size(windowWidth, windowHeight);
  introGif.position(0, 0);
  

  introVideo.size(windowWidth, windowHeight);
  introVideo.position(0, 0); 
  

  outroVideo = createVideo('outro/assets/videoFin.mp4');
  outroVideo.size(windowWidth, windowHeight);
  outroVideo.position(0, 0);
  outroVideo.hide();

  introGif.mousePressed(() => {
    introGif.hide();
    introVideo.show();
    introVideo.play();
    introVideo.onended(() => {
      introVideo.hide();
      scene = 'menu';
      musiqueFond.loop();
    });
  });

  textFont(maPolice);

  // Sounds and musics :
  swordAndGrenouilleSound = loadSound('hud/sounds/swordAndGrenouilleSound.mp3');

  musiqueBackgroundTemple = loadSound('worlds/music/ok.mp3');
  musiqueBackgroundVillage = loadSound('worlds/music/TownTheme.mp3')
  musiqueBackgroundForest = loadSound('worlds/music/song18.mp3');
  musiqueBackgroundVillage2 = loadSound('worlds/music/Orbital Colossus.mp3');
  musiqueBackgroundGrotte = loadSound('worlds/music/Woodland Fantasy.mp3');
  musiqueBackgroundVillage3 = loadSound('worlds/music/Alexander Ehlers - Waking the devil.mp3');
  musiqueBackgroundBoss = loadSound('worlds/music/Alexander Ehlers - Doomed.mp3');

  preloadAssets()
    .then(() => {
      drawGame();
    })
    .catch((error) => {
      console.error('Une erreur est survenue lors du chargement des assets :', error);
    });

    
};





let isLoadingScreenActive = true;

let musiqueBackgroundTemple;
let musiqueBackgroundVillage;
let musiqueBackgroundForest;
let musiqueBackgroundVillage2;
let musiqueBackgroundGrotte;
let musiqueBackgroundVillage3;
let musiqueBackgroundBoss;


function drawLoadingScreen() {
  // Dessiner l'image GIF de chargement
  image(loadingGif, 0, 0, width, height);
}


function drawGame() {
  if (!gameStart) {
    if (scene === 'intro') {
      drawIntro();
    } else if (scene === 'menu') {
      drawMainMenu();
    } else if (scene === 'parametre') {
      drawParametrePage();
    }
  
  } else if (gameStart && !introImagesEnd) {
    noCursor();
    image(images[currentImageIndex], 0, 0, width, height);
  } else {
    // Fonction pour le jeu
    checkKeys(currentWorld);
    changeWorldIfNeeded();
  
    
    

    
    // If Hero Have Hearts Game is Not Over.
    if (hearts > 0) {
      if (currentWorld === 0) {
        noCursor();
        if (isLoadingScreenActive) {
          drawLoadingScreen();

          setTimeout(function() {
              isLoadingScreenActive = false; // Désactiver l'écran de chargement
          }, 3000); // 3000 millisecondes = 3 secondes (temps d'affichage de l'écran de chargement)
        } else {
          if (!musiqueBackgroundTemple.isPlaying()) {
            musiqueBackgroundTemple.loop(); // Jouer la musique en boucle
          }
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

          if(!introDialogActive && !animation) {
            checkGrandSageInteraction();
          }
          gestionTransitionImage();
          
          drawHudTemple ();
          applyGravityTemple();
        }




      } else if (currentWorld === 1) {
        musiqueBackgroundTemple.stop();
        musiqueBackgroundForest.stop();
        noCursor();
        if (!isLoadingScreenActive) {
          drawLoadingScreen();
          setTimeout(function() {
              isLoadingScreenActive = true;
          }, 3000);
        } else {
          if (!musiqueBackgroundVillage.isPlaying()) {
            musiqueBackgroundVillage.loop(); // Jouer la musique en boucle
          }

        updateNormalCamera(4704, 2688);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        image(currentHeroVillageImage, xHero, yHero, 96, 96);
        drawFront(decorationWorlds[1], tileDecorationDictionnaries[1], worldsDecorationTileSizes[1]);
        


        // Phase 1 du village aprés le temple.
        if (!isForestNpcSaved && !heroHasStoneStone) {
          updateYetiAnimation(myYetiIdle);
          image(currentYetiImage, 12 * worldVillageTileSize, 10 * worldVillageTileSize, npcYetiWidth, npcYetiHeight);

          if (animationVillage && animationCounterVillage < 133) {
            xHero += movementSpeedVillage;
            animationCounterVillage++;
            updateAnimationVillage(myHeroVillageRight);
          } else {
            animationVillage = false;
            yetiDialogActive = true;
          };
          
          if (yetiDialogActive) {
            gererDialoguesYeti();
          }
  
          if (currentYetiIndexQuete >= dialoguesYeti.length && yetiDialogActive) {
            yetiDialogActive = false;
          }
        }
        

        // Phase 2 du village aprés la Foret.
        if (isForestNpcSaved && heroHasStoneStone) {
          musiqueBackgroundVillage.stop();
          if (!musiqueBackgroundVillage2.isPlaying()) {
            musiqueBackgroundVillage2.loop(); // Jouer la musique en boucle
          }

          updateAlchimisteAnimation(myAlchimisteIdle);
          image(currentAlchimisteImage, alchimisteX, alchimisteY, alchimisteWidth, alchimisteHeight);
          if (checkAlchimisteInteraction()) {
            alchimisteDialogActive = true;
          } else {
            alchimisteDialogActive = false;
          }
          gererDialoguesAlchimiste();

          updateBabyTanukiAnimation(mybabyTanukiIdle);
          image(currentBabyTanukiImage, npcBabyTanukiX, npcBabyTanukiY, npcBabyTanukiWidth, npcBabyTanukiHeight);

          updateYetiAnimation(myYetiIdle);
          image(currentYetiImage, 15 * worldVillageTileSize, 5 * worldVillageTileSize, npcYetiWidth, npcYetiHeight);
          if (heroHasEcorce) {
            if(checkYetiInteraction()) {
              yetiDialogActiveEcorse = true;
            } else {
              yetiDialogActiveEcorse = false
            }
            gererDialoguesYetiEcorse();
            
          } else {
            if(checkYetiInteraction2()) {
              yetiDialogActiveEcorse2 = true;
            } else {
              yetiDialogActiveEcorse2 = false;
            }
            gererDialoguesYetiEcorse2();
          }
        }

        
        

        
        
        drawHud();
        drawHearts();
        if (!isForestNpcSaved && !heroHasStoneStone) {
          displayTotalTanukisSaved();
        } else {
          displayTotalTanukisSaved2();
        }
        
      }
      } else if (currentWorld === 2) {
        musiqueBackgroundVillage.stop();
        noCursor();
        if (isLoadingScreenActive) {
          drawLoadingScreen(); // Afficher l'écran de chargement
          // Charger le nouveau monde après 3 secondes
          setTimeout(function() {
              isLoadingScreenActive = false; // Désactiver l'écran de chargement
          }, 3000); // 3000 millisecondes = 3 secondes (temps d'affichage de l'écran de chargement)
        } else {
          if (!musiqueBackgroundForest.isPlaying()) {
            musiqueBackgroundForest.loop(); // Jouer la musique en boucle
          }
          foretDialogActive = true;
          
        image(backgroundForetImage, 0, 0);
        updateParallaxCameraForet(16000, 1120);
        drawFront(decorationWorlds[2], tileDecorationDictionnaries[2], worldsDecorationTileSizes[2]); 
        


        moveEnemies(); 
        drawEnemies();
        checkEnemyCollision(); 

        
        checkEnemy2Collision(); 
        moveEnemies2();
        detectPlayer2();
        updateAnimationState2();
        drawEnemies2();


        checkEnemy3Collision();
        moveEnemies3();
        detectPlayer3(); 
        updateAnimationState3();
        drawEnemies3();

        image(currentHeroImage, xHero, yHero, 80, 80);
        
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        
        handleCooldown();
        
        drawHud();
        drawHearts();
        applyGravity();

        checkHeroInStone();
        if (!heroInStone) {
          image(imagePierreTerre, xTerre, yTerre, wTerre, hTerre);
        } else if (showAnimationPierre && !pierreAnimationFinished) {
          image(animationPierreTerre, xTerre, yTerre, wTerre, hTerre);
          setTimeout(() => {
            pierreAnimationFinished = true;
          }, 700);
        }

        checkHeroInEcorce();
        if (!heroInEcorce) {
          image(imageEcorceMagique, xEcorce, yEcorce, wEcorce, hEcorce);
        } else if (showAnimationEcorce && !ecorceAnimationFinished) {
          image(animationEcorce, xEcorce, yEcorce, wEcorce, hEcorce);
          setTimeout(() => {
            ecorceAnimationFinished = true;
          }, 700);
        }

        for (let i = 0; i < cagePositions.length; i++) {
          if (cageVisible[i]) {
            image(cageImage, cagePositions[i].x, cagePositions[i].y, cageWidth, cageHeight);
          }
        }

        checkCageInteraction();
        checkForestNpcSaved();
        checkHeroOutOfBounds();


        if(foretDialogActive) {
          gererDialogueForet();
        }
        

        if(heroHasStoneStone && isForestNpcSaved) {
          foretFinishDialogActive = true;
          gererDialogueFinishForet();
        }
        
      }
      } else if (currentWorld === 3) {
        musiqueBackgroundVillage2.stop();
        noCursor();
        if (isLoadingScreenActive) {
          drawLoadingScreen();
          setTimeout(function() {
              isLoadingScreenActive = false;
          }, 3000);
        } else {
          if (!musiqueBackgroundGrotte.isPlaying()) {
            musiqueBackgroundGrotte.loop();
          }

        image(backgroundGrotteImage, 0, 0);
        updateParallaxCameraGrotte(16000, 1120);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        drawFront(decorationWorlds[3], tileDecorationDictionnaries[3], worldsDecorationTileSizes[3]);
        
        image(currentHeroImage, xHero, yHero, 80, 80);

        moveEnemiesGrotte(); 
        drawEnemiesGrotte();
        checkEnemyCollisionGrotte(); 

        checkEnemy2CollisionGrotte(); 
        moveEnemies2Grotte();
        detectPlayer2Grotte();
        updateAnimationState2Grotte();
        drawEnemies2Grotte();

        checkEnemy3CollisionGrotte();
        moveEnemies3Grotte();
        detectPlayer3Grotte(); 
        updateAnimationState3Grotte();
        drawEnemies3Grotte();


      
        


        for (let i = 0; i < cagePositionsGrotte.length; i++) {
          if (cageVisibleGrotte[i]) {
            image(cageImageGrotte, cagePositionsGrotte[i].x, cagePositionsGrotte[i].y, cageWidthGrotte, cageHeightGrotte);
          }
        }


        checkHeroInFire();
        if (!heroInFire) {
          image(imagePierreFeu, xFeu2, yFeu2, wFeu2, hFeu2);
        } else if (showAnimationPierreFeu && !pierreFeuAnimationFinished) {
          image(animationPierreFeu, xFeu2, yFeu2, wFeu2, hFeu2);
          setTimeout(() => {
            pierreFeuAnimationFinished = true;
          }, 700);
        }

        checkHeroInWind();
        if (!heroInWind) {
          image(imagePierreVent, xVent, yVent, wVent, hVent);
        } else if (showAnimationPierreVent && !pierreVentAnimationFinished) {
          image(animationPierreVent, xVent, yVent, wVent, hVent);
          setTimeout(() => {
            pierreVentAnimationFinished = true;
          }, 700);
        }

        checkHeroInWater();
        if (!heroInWater) {
          image(imagePierreEau, xEau, yEau, wEau, hEau);
        } else if (showAnimationPierreEau && !pierreEauAnimationFinished) {
          image(animationPierreEau, xEau, yEau, wEau, hEau);
          setTimeout(() => {
            pierreEauAnimationFinished = true;
          }, 700); 
        }

        handleCooldown();
        drawHud();
        drawHearts();
        applyGravity();
        checkHeroOutOfBounds();

        checkCageInteractionGrotte();
        checkGrotteNpcSaved();


      }
      } else if (currentWorld === 4) {
        musiqueBackgroundVillage3.stop();
        noCursor();
        if (isLoadingScreenActive) {
          drawLoadingScreen();
          
          setTimeout(function() {
              isLoadingScreenActive = false; 
          }, 3000);
        } else {
          if (!musiqueBackgroundBoss.isPlaying()) {
            musiqueBackgroundBoss.loop(); // Jouer la musique en boucle
          }
          potions = 3;
        if(animationBoss) {
          updateNormalCamera(3648, 960);
        } else {
          updateNormalCamera(1800, 960);
        }
        image(backgroundBossImage, 0, 0);
        image(currentBossImage, bossX, bossY, bossWidth, bossHeight);
        updateBossAnimation(myBossIdle);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        drawFront(decorationWorlds[4], tileDecorationDictionnaries[4], worldsDecorationTileSizes[4]);
        image(currentHeroImage, xHero, yHero, wHero, hHero);

        
        applyGravityBoss();

        if (animationBoss && animationCounterBoss < 250) {
          xHero -= movementSpeedBoss;
          animationCounterBoss++;
          updateAnimation(myHeroLeft);
        } else {
          animationBoss = false;
        };

        if(!bossIntroActive && !animationBoss) {
          bossIntroActive = true;
        } else if(bossIntroActive) {
          gererIntroductionBoss();
        }

        if (currentBossIntroductionIndex >= bossDialogues.length) {
          bossIntroActive = false;
          battleBoss = true;
        }



        moveEnemiesBoss(); 
        drawEnemiesBoss();
        checkEnemyCollisionBoss(); 

        checkEnemy2CollisionBoss(); 
        moveEnemies2Boss();
        detectPlayer2Boss();
        updateAnimationState2Boss();
        drawEnemies2Boss();

        checkEnemy3CollisionBoss();
        moveEnemies3Boss();
        detectPlayer3Boss(); 
        updateAnimationState3Boss();
        drawEnemies3Boss();

        if (battleBoss) {
          drawBossHealthBar();
          if (bossPhase === 0) {
            let enemiesToSpawn = spawnEnemyAtSpecificTime(1, 1);
            enemiesBoss = enemiesBoss.concat(enemiesToSpawn);

            let enemiesToSpawn2 = spawnEnemyAtSpecificTime2(1, 1);
            enemies2Boss = enemies2Boss.concat(enemiesToSpawn2);

            bossPhase = 1;
          } else if (bossPhase === 1) {
            if (goblinsAreDefeated(1) && goblinsAreDefeated2(1)) {
              bossHealth = 80; 
              let enemiesToSpawn = spawnEnemyAtSpecificTime(2, 2);
              enemiesBoss = enemiesBoss.concat(enemiesToSpawn);

              let enemiesToSpawn2 = spawnEnemyAtSpecificTime2(2, 2);
              enemies2Boss = enemies2Boss.concat(enemiesToSpawn2);

              let enemiesToSpawn3 = spawnEnemyAtSpecificTime3(1, 2);
              enemies3Boss = enemies3Boss.concat(enemiesToSpawn3);

              bossPhase = 2;
            }
          } else if (bossPhase === 2) {
            if (goblinsAreDefeated(2) && goblinsAreDefeated2(2) && goblinsAreDefeated3(2)) {
              bossHealth = 50;
              let enemiesToSpawn = spawnEnemyAtSpecificTime(2, 3);
              enemiesBoss = enemiesBoss.concat(enemiesToSpawn);

              let enemiesToSpawn2 = spawnEnemyAtSpecificTime2(2, 3);
              enemies2Boss = enemies2Boss.concat(enemiesToSpawn2);

              let enemiesToSpawn3 = spawnEnemyAtSpecificTime3(2, 3);
              enemies3Boss = enemies3Boss.concat(enemiesToSpawn3);
              bossPhase = 3;
            }
          } else if (bossPhase === 3) {
            if (goblinsAreDefeated(3) && goblinsAreDefeated2(3) && goblinsAreDefeated3(3)) {
              bossHealth = 0;
            }
          }
        }

        handleCooldown();
        drawHud();
        drawHearts();

        if (bossDead) {
          image(outroImages[outroImageIndex], 0, 0, width, height);
        }
      }

      } else if(currentWorld === 5) {
        musiqueBackgroundGrotte.stop();
        noCursor();
        if (!isLoadingScreenActive) {
          drawLoadingScreen();
          setTimeout(function() {
              isLoadingScreenActive = true; 
          }, 3000);
        } else {
          if (!musiqueBackgroundVillage3.isPlaying()) {
            musiqueBackgroundVillage3.loop(); // Jouer la musique en boucle
          }
        updateNormalCamera(4704, 2688);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        updateYetiAnimation(myYetiIdle);
        image(currentYetiImage, 12 * worldVillageTileSize3, 10 * worldVillageTileSize3, npcYetiWidth, npcYetiHeight);
        image(currentHeroVillageImage, xHero, yHero, 96, 96);
        drawFront(decorationWorlds[5], tileDecorationDictionnaries[5], worldsDecorationTileSizes[5]);
        
        drawHud();
        drawHearts();
        displayTotalTanukisSaved3();
      }
    }

      
      // if (hearts <= 0) {
      //   // Si le joueur est mort, afficher l'animation de mort du personnage
      //   updateAnimation(myHeroDeath);
      // }

    } else {
      cursor('url(curseurSite.png), auto')
      gameOverMenu();
    }
  }
}















/////////////////////////////////////////////
////////////FUNCTIONS FOR DRAW///////////////
/////////////////////////////////////////////
function draw() {
  if (allAssetsLoaded) {
    drawGame();
  } else {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Chargement...", width / 2, height / 2);
  }
}  
