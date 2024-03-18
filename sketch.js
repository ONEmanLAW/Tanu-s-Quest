/////////////////////////////////////////////
//////////////////WORLDS/////////////////////
/////////////////////////////////////////////

currentWorld = 0;

/////////////////////////////////////////////
///////////VARIABLES FOR WORLDS//////////////
/////////////////////////////////////////////


  // world1 = [
  //   [
  //     [0,1,2],
  //     [3,4,5]
  //   ],
  //   [
  //     [0,1,2],
  //     [3,4,5]
  //   ],
  //   [
  //     [0,1,2],
  //     [3,4,5]
  //   ]
  // ],


  // world2 =[
  //   [
  //     [0,1,2],
  //     [3,4,5]
  //   ],
  //   [
  //     [0,1,2],
  //     [3,4,5]
  //   ],
  //   [
  //     [0,1,2],
  //     [3,4,5]
  //   ]
  // ],


  // world3 =[
  //   [
  //     [0,1,2],
  //     [3,4,5]
  //   ],
  //   [
  //     [0,1,2],
  //     [3,4,5]
  //   ],
  //   [
  //     [0,1,2],
  //     [3,4,5]
  //   ]
  // ],  
let worlds = [];
let decorationWorlds = [];
let collisonWorlds = []; 

let tileDictionnaries = [];
let worldsTileSizes = [];

let enemy;
let pointA;
let pointB;
let speed = 2;
let directionEnnemy = 1;


/////////////////////////////////////////////
/////////FUNCTION LAUNCH ON SETUP////////////
/////////////////////////////////////////////

function setup() {
  // Canvas For Story.
  createCanvas(windowWidth, windowHeight);

  // Positions Initial.
  enemy = createVector(7 * worldTempleTileSize, 6.5 * worldTempleTileSize); 
  pointA = createVector(7 * worldTempleTileSize); 
  pointB = createVector(10 * worldTempleTileSize);
  


  backgroundTutoImage = loadImage('assets/tuto/fondTutorielTest.jpg',() => {
    backgroundTutoImage.resize(width, height);
  });

  backgroundForetImage = loadImage('assets/foretEnchanter/fondForet.jpg',() => {
    backgroundForetImage.resize(width, height);
  });

  backgroundGrotteImage = loadImage('assets/grotteTenebreuse/fondGrotteTenebreuseTest.jpg',() => {
    backgroundGrotteImage.resize(width, height);
  });
  
  backgroundBossImage = loadImage('assets/niveauBoss/fondBoss.jpg',() => {
    backgroundBossImage.resize(width, height);
  });  
  

  // Canvas For Game.
  // createCanvas(worldTempleBoard[0].length * worldTempleTileSize, worldTempleBoard.length * worldTempleTileSize);
  

  worldTempleTileDictionnary = {

    0: loadImage(''),
    // Sol et SousSol Neige.
    1: loadImage('assets/tuto/neige/solNeige.png'),
    2: loadImage('assets/tuto/neige/sousSolNeige.png'),

    // Sol et SousSol Temple.
    3: loadImage('assets/tuto/solEtSousSolTemple/solTemple.png'),
    4: loadImage('assets/tuto/solEtSousSolTemple/solTempleEtNeige.png'),
    5: loadImage('assets/tuto/solEtSousSolTemple/sousSolTemple.png'),
    6: loadImage('assets/tuto/solEtSousSolTemple/sousSolTempleEtNeige.png'),

    // Piliers du Temple.
    7: loadImage('assets/tuto/piliersTemple/continuiterOmbrePilier.png'),
    8: loadImage('assets/tuto/piliersTemple/continuiterPilierDroite.png'),
    9: loadImage('assets/tuto/piliersTemple/continuiterPilierGauche.png'),
    10: loadImage('assets/tuto/piliersTemple/ombrePilierDroite.png'),
    11: loadImage('assets/tuto/piliersTemple/ombrePilierGauche.png'),
    12: loadImage('assets/tuto/piliersTemple/pilierDroite.png'),
    13: loadImage('assets/tuto/piliersTemple/pilierGauche.png'),
    14: loadImage('assets/tuto/piliersTemple/pilierEtSolDroite.png'),
    15: loadImage('assets/tuto/piliersTemple/pilierEtSolGauche.png'),

    // Toit du Temple.
    16: loadImage('assets/tuto/toitTemple/toitBasDroite.png'),
    17: loadImage('assets/tuto/toitTemple/toitBasGauche.png'),
    18: loadImage('assets/tuto/toitTemple/toitHautDroite.png'),
    19: loadImage('assets/tuto/toitTemple/toitHautGauche.png'),
  };

  worldTempleDecorationTileDictionnary = {

    0: loadImage(''),
  };


  worldVillageTileDictionnary = {

    0: loadImage(''),
  };

  worldVillageDecorationTileDictionnary = {

    0: loadImage(''),
  };


  worldForetTileDictionnary = {

    0: loadImage(''),
    // Sol et Sous Sol.
    1: loadImage('assets/foretEnchanter/sol/solHerbe1.png'),
    2: loadImage('assets/foretEnchanter/sol/solHerbe2.png'),
    3: loadImage('assets/foretEnchanter/sol/sousSolNoir1.png'),
    4: loadImage('assets/foretEnchanter/sol/sousSolNoir2.png'),

    // Bordures Droite et Gauche.
    5: loadImage('assets/foretEnchanter/sol/solBord1.png'),
    6: loadImage('assets/foretEnchanter/sol/solBord2.png'),
    7: loadImage('assets/foretEnchanter/sol/solBordDroite.png'),
    8: loadImage('assets/foretEnchanter/sol/solBordDroiteChampignon1.png'),
    9: loadImage('assets/foretEnchanter/sol/solBordDroiteChampignon2.png'),
    10: loadImage('assets/foretEnchanter/sol/solBordGauche.png'),
    11: loadImage('assets/foretEnchanter/sol/solBordGaucheChampignon1.png'),
    12: loadImage('assets/foretEnchanter/sol/solBordGaucheChampignon2.png'),

    // Piques.
    13: loadImage('assets/foretEnchanter/sol/solPique1.png'),
    14: loadImage('assets/foretEnchanter/sol/solPique2.png'),
    15: loadImage('assets/foretEnchanter/sol/solPiqueBordDroite.png'),
    16: loadImage('assets/foretEnchanter/sol/solPiqueBordGauche.png'),

    // Bordures Quand Pronfondeur.
    17: loadImage('assets/foretEnchanter/sol/dessousBordDroite.png'),
    18: loadImage('assets/foretEnchanter/sol/dessousBordGauche.png'),

    // Plateforme et Bordures des plateforme.
    19: loadImage('assets/foretEnchanter/plateforme/plateformeHerbe1.png'),
    20: loadImage('assets/foretEnchanter/plateforme/plateformeHerbe2.png'),
    21: loadImage('assets/foretEnchanter/plateforme/plateformeBordDroite.png'),
    22: loadImage('assets/foretEnchanter/plateforme/plateformeBordGauche.png'),
  };

  worldForetDecorationTileDictionnary = {

    // Herbes.
    0: loadImage(''),
    1: loadImage('assets/foretEnchanter/herbes/herbeHaute1.png'),
    2: loadImage('assets/foretEnchanter/herbes/herbeHaute2.png'),
    3: loadImage('assets/foretEnchanter/herbes/herbeBordDroite.png'),
    4: loadImage('assets/foretEnchanter/herbes/herbeBordGauche.png'),

    // Champignon.
    5: loadImage('assets/foretEnchanter/champignon/champignonOrange.png'),
    6: loadImage('assets/foretEnchanter/champignon/champignonViolet.png'),
    7: loadImage('assets/foretEnchanter/champignon/petitChampignon1.png'),
    8: loadImage('assets/foretEnchanter/champignon/petitChampignon2.png'),
  };


  worldGrotteTileDictionnary = {

    0: loadImage(''),
    // Sol et Sous Sol.
    1: loadImage('assets/grotteTenebreuse/sol/solSurface.png'),
    2: loadImage('assets/grotteTenebreuse/sol/sousSolTerre.png'),

    // Tuile qui montent
    3: loadImage('assets/grotteTenebreuse/tuilesQuiMontent/tuileQuiMonteDroite.png'),
    4: loadImage('assets/grotteTenebreuse/tuilesQuiMontent/tuileQuiMonteGauche.png'),
    5: loadImage('assets/grotteTenebreuse/tuilesQuiMontent/sousSolTuileQuiMonteDroite.png'),
    6: loadImage('assets/grotteTenebreuse/tuilesQuiMontent/sousSolTuileQuiMonteGauche.png'),

    // Plafond
    7: loadImage('assets/grotteTenebreuse/plafond/plafond1.png'),
    8: loadImage('assets/grotteTenebreuse/plafond/plafond2.png'),
    9: loadImage('assets/grotteTenebreuse/plafond/plafond3.png'),
    10: loadImage('assets/grotteTenebreuse/plafond/plafond4.png'),
    11: loadImage('assets/grotteTenebreuse/plafond/plafond5.png'),
    12: loadImage('assets/grotteTenebreuse/plafond/plafond6.png'),
    13: loadImage('assets/grotteTenebreuse/plafond/plafond7.png'),
    14: loadImage('assets/grotteTenebreuse/plafond/plafondAuDessus.png'),

    //Trou & Eau.
    15: loadImage('assets/grotteTenebreuse/trouEtEau/eauMilieu.png'),
    16: loadImage('assets/grotteTenebreuse/trouEtEau/eauDroite.png'),
    17: loadImage('assets/grotteTenebreuse/trouEtEau/eauGauche.png'),
    18: loadImage('assets/grotteTenebreuse/trouEtEau/trouDroiteBas.png'),
    19: loadImage('assets/grotteTenebreuse/trouEtEau/trouGaucheBas.png'),
    20: loadImage('assets/grotteTenebreuse/trouEtEau/trouDroiteHaut.png'),
    21: loadImage('assets/grotteTenebreuse/trouEtEau/trouGaucheHaut.png'),

    // Platforme.
    22: loadImage('assets/grotteTenebreuse/plateforme/plateformeDroite.png'),
    22: loadImage('assets/grotteTenebreuse/plateforme/plateformeGauche.png'),
  };

  worldGrotteDecorationTileDictionnary = {

    0: loadImage(''),
    // Herbes.
    1: loadImage('assets/grotteTenebreuse/herbes/herbeSeule.png'),
    2: loadImage('assets/grotteTenebreuse/herbes/herbeEtCristaux.png'),
    3: loadImage('assets/grotteTenebreuse/herbes/herbeEtChampignon.png'),
    
    // Obstacles.
    4: loadImage('assets/grotteTenebreuse/herbes/obstacleRocher.png'),
  };


  worldBossTileDictionnary = {

    0: loadImage(''),
    // Sol.
    1: loadImage('assets/niveauBoss/sol/sol1.png'),
    2: loadImage('assets/niveauBoss/sol/sol2.png'),
    3: loadImage('assets/niveauBoss/sol/sol3.png'),

    // Plafond.
    4: loadImage('assets/niveauBoss/plafond/plafond.png'),
    5: loadImage('assets/niveauBoss/plafond/plafondSansLumiere.png'),
  };

  worldBossDecorationTileDictionnary = {

    0: loadImage(''),
    // Plafond.
    1: loadImage('assets/niveauBoss/plafond/plafondCorde.png'),
    2: loadImage('assets/niveauBoss/plafond/lumierePlafond.png'),
  };


  // Right Hero Images.
  hero0 = loadImage('assets/hero_test.png');
  myHeroRight.push(hero0);
  hero1 = loadImage('assets/hero/run_1.png');
  myHeroRight.push(hero1);
  hero2 = loadImage('assets/hero/run_2.png');
  myHeroRight.push(hero2);
  hero3 = loadImage('assets/hero/run_3.png');
  myHeroRight.push(hero3);
  hero4 = loadImage('assets/hero/run_4.png');
  myHeroRight.push(hero4);

  //Left Hero Images.
  myHeroLeft.push(loadImage('assets/hero/run_0left.png'));
  myHeroLeft.push(loadImage('assets/hero/run_1left.png')); 
  myHeroLeft.push(loadImage('assets/hero/run_2left.png')); 
  myHeroLeft.push(loadImage('assets/hero/run_3left.png'));
  myHeroLeft.push(loadImage('assets/hero/run_4left.png'));

  currentHeroImage = hero0;


  // Worlds Setups.
  worlds = [worldTempleBoard, worldVillageBoard, worldForetBoard, worldGrotteBoard, worldBossBoard];

  decorationWorlds = [worldTempleDecorationBoard, worldVillageDecorationBoard, worldForetDecorationBoard, worldGrotteDecorationBoard, worldBossDecorationBoard];

  collisonWorlds = [worldTempleCollisionBoard, worldVillageCollisionBoard, worldForetCollisionBoard, worldGrotteCollisionBoard, worldBossCollisionBoard];

  
  tileDictionnaries = [worldTempleTileDictionnary, worldVillageTileDictionnary, worldForetTileDictionnary, worldGrotteTileDictionnary, worldBossTileDictionnary];

  tileDecorationDictionnaries = [worldTempleDecorationTileDictionnary, worldVillageDecorationTileDictionnary, worldForetDecorationTileDictionnary, worldGrotteDecorationTileDictionnary, worldBossDecorationTileDictionnary];


  worldsTileSizes = [worldTempleTileSize, worldVillageTileSize, worldForetTileSize, worldGrotteTileSize, worldBossTileSize];

  worldsDecorationTileSizes = [worldTempleDecorationTileSize, worldVillageDecorationTileSize, worldForetDecorationTileSize, worldGrotteDecorationTileSize, worldBossDecorationTileSize];


  npcGrandSageImage = loadImage('assets/hero/run_1left.png');
};


/////////////////////////////////////////////
//////////////FUNCTIONS DRAW/////////////////
/////////////////////////////////////////////

function drawWorld(gameBoard, tileDictionnary, tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      let currentImageName = tileDictionnary[currentTileValue];

      image(currentImageName, x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
};


function drawFront(gameBoard, tileDictionnary, tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      let currentImageName = tileDictionnary[currentTileValue];

      image(currentImageName, x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
};


/////////////////////////////////////////////
////////////FUNCTIONS FOR DRAW///////////////
/////////////////////////////////////////////

let textWidth = 400;
let textHeight = 100;

function draw() {
  if (!gameStarted) {
    // Start Of Intro.
    image(images[currentImageIndex], 0, 0, width, height);
  } else {
    // Music Stops Playing.
    if (currentMusic && currentMusic.isPlaying()) {
      currentMusic.stop();
    };

    // Function For The Game.
    //updateCamera();
    checkKeys(currentWorld);
    changeWorldIfNeeded();

    // If Hero Have Hearts Game is Not Over.
    if (hearts > 0) {
      if (currentWorld === 0) {
      image(backgroundTutoImage, 0, 0);
      drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
      drawFront(decorationWorlds[0], tileDecorationDictionnaries[0], worldsDecorationTileSizes[0]);
      image(currentHeroImage, xHero, yHero, wHero, hHero);
      
      fill(255, 0, 0); // Rouge
      ellipse(enemy.x, enemy.y, 20, 20);
      moveEnemy();
      
      // Automatic Movement At Start.
      // One Tile = 20.
      if (animation && animationCounter < 80) {
        xHero += movementSpeed;
        animationCounter++;
        updateAnimation(myHeroRight);
      } else {
        animation = false;
      };


      
    

      // To Spawn NPC
      image(npcGrandSageImage, npcGrandSageX, npcGrandSageY, npcGrandSageWidth, npcGrandSageHeight);
      let textX = (width - textWidth) / 2 //+ cameraX;
      let textY = height - textHeight - 20 //+ cameraY;


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
    } else {
      textSize(32);
      fill(255,0 ,0);
      text("Game Over - Retry? Press 'r'", width/2, height/2);
    }
  }
};



function moveEnemy() {
  enemy.x += speed * directionEnnemy;
  
  if ((directionEnnemy === 1 && enemy.x >= pointB.x) || (directionEnnemy === -1 && enemy.x <= pointA.x)) {
    directionEnnemy *= -1;
  }
}