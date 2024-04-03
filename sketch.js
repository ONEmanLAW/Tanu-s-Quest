/////////////////////////////////////////////
//////////////WORLDS VARIABLES///////////////
/////////////////////////////////////////////

setupWorldVariables(); // setup.js


/////////////////////////////////////////////
/////////FUNCTION LAUNCH ON SETUP////////////
/////////////////////////////////////////////

function setup() {
  // Canvas For Story.
  createCanvas(windowWidth, windowHeight);


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
  // Hearts Hero.
  preloadHeartImage(); // hero.js


  // Image Of Enemy.
  preloadEnemyImages(); // enemy.js
  // Positions Initial Of Enemy And Patrole.
  spawnEnemyAndPatrol(); // enemy.js
  

  // Image Of Npc
  preloadNPCImages(); // npc.js
};


/////////////////////////////////////////////
////////////FUNCTIONS FOR DRAW///////////////
/////////////////////////////////////////////

let textWidth = 400;
let textHeight = 100;

function draw() {
  if (!introImagesEnd) {
    // Start Of Intro With Images.
    image(images[currentImageIndex], 0, 0, width, height);
  } else {
    // Music Stops Playing.
    if (currentMusic && currentMusic.isPlaying()) {
      currentMusic.stop();
    };

    // Function For The Game.
    checkKeys(currentWorld);
    changeWorldIfNeeded();
    drawHearts();
    

    // If Hero Have Hearts Game is Not Over.
    if (hearts > 0) {
      if (currentWorld === 0) {
      image(backgroundTutoImage, 0, 0);
      drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
      drawFront(decorationWorlds[0], tileDecorationDictionnaries[0], worldsDecorationTileSizes[0]);
      image(enemyImage, xEnemy, yEnemy, wEnemy, hEnemy);
      // To Spawn NPC
      image(npcGrandSageImage, npcGrandSageX, npcGrandSageY, npcGrandSageWidth, npcGrandSageHeight);
      image(currentHeroImage, xHero, yHero, wHero, hHero);

      // Pour voire le Collider
      stroke(255, 0, 0);
      noFill();
      rect(xHero, yHero, wHero, hHero); 
      rect(xEnemy, yEnemy, wEnemy, hEnemy); 
      
      
      // Automatic Movement At Start.
      // One Tile = 20.
      if (animation && animationCounter < 80) {
        xHero += movementSpeed;
        animationCounter++;
        updateAnimation(myHeroRight);
      } else {
        animation = false;
      };

      // For Enemy.
      moveEnemy();
      checkEnemyCollision();
      handleCooldown();

      
      let textX = (width - textWidth) / 2;
      let textY = height - textHeight - 20;


      if (checkNPCInteraction()) {  
        fill(0);
        // Mettre une image a la place.
        rect(textX, textY, textWidth, textHeight);
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(255);
        text(dialoguesGrandSage[currentDialogueGrandSageIndex], textX + textWidth / 2, textY + textHeight / 2);

        // textSize(16);
        // fill(255);
        // text("Appuyez sur 'N' pour passer au prochain texte", width / 2 + cameraX, height - 80 + cameraY);
        
      }; 
    

      } else if (currentWorld === 1) {
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        image(currentHeroImage, xHero, yHero, wHero, hHero);
        drawFront(decorationWorlds[1], tileDecorationDictionnaries[1], worldsDecorationTileSizes[1]);

      } else if (currentWorld === 2) {
        image(backgroundForetImage, 0, 0);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        drawFront(decorationWorlds[2], tileDecorationDictionnaries[2], worldsDecorationTileSizes[2]);
        image(currentHeroImage, xHero, yHero, wHero, hHero); 

      } else if (currentWorld === 3) {
        image(backgroundGrotteImage, 0, 0);
        drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
        drawFront(decorationWorlds[3], tileDecorationDictionnaries[3], worldsDecorationTileSizes[3]);
        image(currentHeroImage, xHero, yHero, wHero, hHero);
        
      } else if (currentWorld === 4) {
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