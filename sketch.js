/////////////////////////////////////////////
//////////////WORLDS VARIABLES///////////////
/////////////////////////////////////////////

setupWorldVariables(); // setup.js


/////////////////////////////////////////////
/////////FUNCTION LAUNCH ON SETUP////////////
/////////////////////////////////////////////
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  // Canvas For Story.
  createCanvas(windowWidth, windowHeight);

  mainMenuButtons();
  introImages();


  // Tiles Dictionaries.
  setupTileDictionariesTemple(); // worldTemple.js
  setupTileDictionariesVillage(); // worldVillage.js
  setupTileDictionariesForet(); // worldForet.js
  setupTileDictionariesGrotte(); // worldGrotte.js
  setupTileDictionariesBoss(); // worldBoss.js


  // Worlds Preload
  setupWorlds(); // setup.js


  // Background Of Worlds.
  preloadBackgroundImages(); // backgroundImages.js
  


  // Animation Hero.
  preloadHeroImages(); // hero.js
  preloadHeroVillageImages(); // hero.js

  preloadYetiImages();
  // Hearts Hero.
  preloadHeartImage(); // hero.js


  // Image Of Enemy.
  preloadEnemyImages(); // enemy.js
  // Positions Initial Of Enemy And Patrole.
  spawnEnemyAndPatrol();

  preloadEnemy2Images();
  spawnEnemy2();
  

  // Image Of Npc
  preloadNPCImages(); // npc.js
  preloadChatImage();


  preloadHudImages();
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
    drawHearts();
    
    

    // If Hero Have Hearts Game is Not Over.
    if (hearts > 0) {
      if (currentWorld === 0) {
      updateNormalCamera(1824, 1056);
      image(backgroundTutoImage, 0, 0);
      drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
      drawFront(decorationWorlds[0], tileDecorationDictionnaries[0], worldsDecorationTileSizes[0]);
      
      // To Spawn NPC
      image(npcGrandSageImage, npcGrandSageX, npcGrandSageY, npcGrandSageWidth, npcGrandSageHeight);
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
     
      
     

    
      

      
      


      // if (checkNPCInteraction()) {  
      //   fill(0);

      //   image(boiteDeDialogueGrandSage, textX, textY, textWidth, textHeight);
      //   textSize(20);
      //   textAlign(CENTER, CENTER);
      //   fill(255);
      //   text(dialoguesGrandSage[currentDialogueGrandSageIndex], textX + textWidth / 2, textY + textHeight / 2);

      //   textSize(16);
      //   fill(255);
      //   text("Appuyez sur 'N' pour passer au prochain texte", width / 2 + cameraX, height - 80 + cameraY);
        
      // }; 
    

      } else if (currentWorld === 1) {
        updateNormalCamera(4704, 2688);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        image(currentHeroVillageImage, xHero, yHero, wHero, hHero);
        updateYetiAnimation(myYetiIdle);
        image(currentYetiImage, npcYetiX, npcYetiY, npcYetiWidth, npcYetiHeight);
        drawFront(decorationWorlds[1], tileDecorationDictionnaries[1], worldsDecorationTileSizes[1]);
        drawHud();
        
        checkNPCYetiInteraction();  
        
        
        // if (animationVillage && animationCounterVillage < 144) {
        //   xHero += movementSpeed;
        //   animationCounterVillage++;
        //   updateAnimationVillage(myHeroVillageRight);
        // } else {
        //   animationVillage = false;
        // };

        
        stroke(255, 0, 0);
        noFill();
        rect(xHero, yHero, wHero, hHero); 
        
        
      } else if (currentWorld === 2) {
        image(backgroundForetImage, 0, 0);
        updateParallaxCamera(16000, 1120);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        image(enemyImage, xEnemy, yEnemy, wEnemy, hEnemy);
        image(enemy2Image, xEnemy2, yEnemy2, wEnemy2, hEnemy2);
        image(currentHeroImage, xHero, yHero, wHero, hHero);
        drawFront(decorationWorlds[2], tileDecorationDictionnaries[2], worldsDecorationTileSizes[2]);
        // Pour voire le Collider
        stroke(255, 0, 0);
        noFill();
        rect(xHero, yHero, wHero, hHero);
        rect(xEnemy, yEnemy, wEnemy, hEnemy);
        rect(xEnemy2, yEnemy2, wEnemy2, hEnemy2);  
          
        // For Enemy.
        moveEnemy();
        checkEnemyCollision();

        moveEnemy2();
        checkEnemy2Collision(); 
        detectPlayer();
        handleCooldown();
        //applyGravity();
        drawHud();
        
        detectDirection();

        if (isAttacking) {
          // Gérer l'attaque (animation, etc.)
          attack(); // Appeler la fonction pour activer l'attaque
          
          // Réinitialiser la taille du héros après l'attaque
          wHero = 80;
          hHero = 80;

          // Vérifier les collisions après l'attaque
          checkCollisionAttack();
          
          // Réinitialiser l'état de l'attaque
          isAttacking = false;
        }

        

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
      drawHearts();
    } else {
      textSize(32);
      fill(255,0 ,0);
      text("Game Over - Retry? Press 'r'", width/2, height/2);
    }
  }
};