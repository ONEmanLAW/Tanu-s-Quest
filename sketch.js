/////////////////////////////////////////////
//////////////WORLDS VARIABLES///////////////
/////////////////////////////////////////////

setupWorldVariables(); // setup.js


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
}

function setup() {
  // Canvas For Story.
  createCanvas(windowWidth, windowHeight);

  
  


  // Tiles Dictionaries.
  setupTileDictionariesTemple(); // worldTemple.js
  setupTileDictionariesVillage(); // worldVillage.js
  setupTileDictionariesForet(); // worldForet.js
  setupTileDictionariesGrotte(); // worldGrotte.js
  setupTileDictionariesBoss(); // worldBoss.js
  // setupTileDictionariesVillage2(); // worldVillage2.js
  // setupTileDictionariesVillage3(); // worldVillage3.js


  // Worlds Preload
  setupWorlds(); // setup.js


  // Background Of Worlds.
  preloadBackgroundImages(); // backgroundImages.js
  

  // Animation Hero.
  preloadHeroImages(); // hero.js
  preloadHeroVillageImages(); // hero.js

  // Animation Yeti.
  preloadYetiImages(); // yetiNpc.js
  // Hearts Hero.
  preloadHeartImage(); // hero.js


  // Image Of Enemy.
  preloadEnemyImages(); // enemy.js
  // Positions Initial Of Enemy And Patrole.
  spawnEnemyAndPatrol(); // enemy.js

  preloadEnemy2Images(); // enemy2.js
  spawnEnemy2(); // enemy2.js
  
  preloadEnemy3Images(); // enemy3.js
  spawnEnemy3(); // enemy3.js

  // Image Of Npc
  preloadNPCImages(); // grandSageNpc.js
  preloadChatImage(); //grandSageNpc.js


  preloadHudImages(); // hud.js
};


/////////////////////////////////////////////
////////////FUNCTIONS FOR DRAW///////////////
/////////////////////////////////////////////

function draw() {
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
        
        // To Spawn NPC
        image(npcGrandSageImage, npcGrandSageX, npcGrandSageY, npcGrandSageWidth, npcGrandSageHeight);
        image(mannequinImage, mannequinX, mannequinY, mannequinWidth, mannequinHeight);
        image(currentHeroImage, xHero, yHero, wHero, hHero);
        

        // Pour voire le Collider
        stroke(255, 0, 0);
        noFill();
        rect(xHero, yHero, wHero, hHero); 
        
        
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
        };
        
        checkNPCYetiInteraction();  
        

        
        
      } else if (currentWorld === 2) {
        image(backgroundForetImage, 0, 0);
        updateParallaxCamera(16000, 1120);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        // image(enemyImage, xEnemy, yEnemy, wEnemy, hEnemy);
        // image(enemy2Image, xEnemy2, yEnemy2, wEnemy2, hEnemy2);
        // image(enemy3Image, xEnemy3, yEnemy3, wEnemy3, hEnemy3);
        image(currentHeroImage, xHero, yHero, wHero, hHero);
        drawFront(decorationWorlds[2], tileDecorationDictionnaries[2], worldsDecorationTileSizes[2]);
        // Pour voire le Collider
        stroke(255, 0, 0);
        noFill();
        rect(xHero, yHero, wHero, hHero);

        // For enemy 

        // rect(xEnemy, yEnemy, wEnemy, hEnemy);
        // rect(xEnemy2, yEnemy2, wEnemy2, hEnemy2); 
        // rect(xEnemy3, yEnemy3, wEnemy3, hEnemy3);   
          
        // // For Enemy.
        // moveEnemy();
        // checkEnemyCollision();

        // moveEnemy2();
        // checkEnemy2Collision(); 
        // detectPlayer2();


        // moveEnemy3();
        // checkEnemy3Collision(); 
        // detectPlayer3();
        
        handleCooldown();
        //applyGravity();
        checkHeroInFire();
        drawHud();
        drawHearts();

        if(!heroInFire) {
          image(imageFeu2, xFeu2, yFeu2, wFeu2, hFeu2);
        }
        
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
        updateNormalCamera(16000, 1120);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        drawFront(decorationWorlds[3], tileDecorationDictionnaries[3], worldsDecorationTileSizes[3]);
        image(currentHeroImage, xHero, yHero, wHero, hHero);
        
        
      } else if (currentWorld === 4) {
        updateNormalCamera(1824, 1056);
        image(backgroundBossImage, 0, 0);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        drawFront(decorationWorlds[4], tileDecorationDictionnaries[4], worldsDecorationTileSizes[4]);
        image(currentHeroImage, xHero, yHero, wHero, hHero);
      }  

    } else {
      textSize(32);
      fill(255,0 ,0);
      text("Game Over - Retry? Press 'r'", width/2, height/2);
    }
  }
};