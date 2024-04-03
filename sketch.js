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
































let gameStart = false;
let volume = 0.5; // Volume par défaut
let scene = 'menu'; // Scène par défaut

let jouerButton;
let parametreButton;
let exitButton;


function mainMenuButtons() {
  backgroundImage = loadImage('test.jpeg');
  jouerButton = loadImage('assets/boss/2.png');
  parametreButton = loadImage('assets/boss/3.png');
  exitButton = loadImage('assets/boss/4.png');
};

function drawMainMenu() {
  // Dessiner les boutons du menu principal
  image(backgroundImage, 0, 0, width, height);
  image(jouerButton, 800, 100, 200, 200);
  image(parametreButton, 800, 300, 200, 200);
  image(exitButton, 800, 700, 200, 200);
  
}


let musicEnabled = true;
// Déclaration des variables pour le curseur de volume
let sliderWidth = 300; // Largeur du curseur
let sliderHeight = 40; // Hauteur du curseur
let sliderHandleSize = 20; // Taille du bouton de manipulation du curseur
let sliderX; // Position horizontale du curseur
let sliderY; // Position verticale du curseur
let sliderHandleX; // Position horizontale du bouton de manipulation du curseur

function drawParametrePage() {
  // Dessiner la page des paramètres
  // Fond
  image(backgroundImage, 0, 0, width, height);
  
  fill(0);
  textSize(24);
  text('Volume:', width / 2 - 50, height / 2 - 50);

  // Calcul de la position du curseur et du bouton de manipulation du curseur
  sliderX = (width - sliderWidth) / 2;
  sliderY = (height - sliderHeight) / 2;
  sliderHandleX = sliderX + volume * (sliderWidth - sliderHandleSize);

  // Dessin du curseur
  fill(100);
  rect(sliderX, sliderY, sliderWidth, sliderHeight, 5); // Corps du curseur
  fill(150);
  rect(sliderHandleX, sliderY, sliderHandleSize, sliderHeight, 5); 

  fill(0);
  textSize(20);
  text('Musique:', 100, 200);
  rect(250, 185, 20, 20);
  fill(musicEnabled ? 0 : 255); // Si la musique est désactivée, la croix est blanche
  textSize(16);
  if (!musicEnabled) {
    text('X', 257, 199); // Afficher une croix à l'intérieur du carré si la musique est désactivée
  }

  // Afficher le bouton "Retour"
  fill(0);
  textSize(20);
  text('Retour', 100, 300);
  triangle(50, height / 2, 150, height / 2 - 50, 150, height / 2 + 50); 
}

function mouseClicked() {
  // Gérer les clics en fonction de la scène
  if (scene === 'menu') {
    // Clic sur le bouton "Jouer"
    if (!gameStart && isClicked(800, 100, jouerButton.width, jouerButton.height)) {
      gameStart = true;
    } 
    // Clic sur le bouton "Paramètres"
    else if (isClicked(800, 300, parametreButton.width, parametreButton.height)) {
      scene = 'parametre'; // Passer à la page des paramètres
    } 
    // Clic sur le bouton "Quitter"
    else if (isClicked(800, 700, exitButton.width, exitButton.height)) {
      // Fermer le navigateur
      window.close();
    }
  } 
  // Gérer les clics sur la page des paramètres
  else if (scene === 'parametre') {
     // Clic sur le curseur de volume pour ajuster le volume
     if (mouseX > sliderX && mouseX < sliderX + sliderWidth && mouseY > sliderY && mouseY < sliderY + sliderHeight) {
      volume = constrain((mouseX - sliderX) / sliderWidth, 0, 1);
      if (currentMusic) {
        currentMusic.setVolume(volume);
      }
    }

    // Clic sur le carré pour activer ou désactiver la musique
    if (mouseX > 250 && mouseX < 270 && mouseY > 185 && mouseY < 205) {
      musicEnabled = !musicEnabled; // Inverser l'état de la musique
      if (currentMusic) {
        if (musicEnabled) {
          currentMusic.play(); // Activer la musique
        } else {
          currentMusic.stop(); // Désactiver la musique
        }
      }
    }
     // Vérifier si le clic est dans la zone de la flèche pour le bouton "Retour"
    if (mouseX > 50 && mouseX < 150 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
      scene = 'menu'; // Revenir au menu principal
    }
  }
}

// Fonction pour vérifier si un bouton est cliqué
function isClicked(x, y, buttonWidth, buttonHeight) {
  return mouseX > x && mouseX < x + buttonWidth && mouseY > y && mouseY < y + buttonHeight;
}











































/////////////////////////////////////////////
////////////FUNCTIONS FOR DRAW///////////////
/////////////////////////////////////////////

let textWidth = 400;
let textHeight = 100;

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