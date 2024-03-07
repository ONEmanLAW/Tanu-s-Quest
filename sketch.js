/////////////////////////////////////////////
//////////////////WORLDS/////////////////////
/////////////////////////////////////////////

// 1ST World.
let world1TileDictionnary = {};
let world1TileSize = 64;

let world1Board = [
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,1,1,1,1,1],
  [5,5,5,5,5,5,5,5,1,1,2,2,2,2,2],
  [5,5,5,5,5,5,5,1,1,2,2,2,2,2,2],
  [1,1,1,1,1,1,1,1,2,2,2,2,2,2,2],
  [2,2,1,1,2,2,2,2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

let world1DecorationTileDictionnary = {};
let world1DecorationTileSize = 64;

let world1DecorationBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,11,11,11,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,10,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,10,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let world1CollisionBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];


// 2ND World.
let world2TileDictionnary = {};
let world2TileSize = 64;

let world2Board = [
  [2,2,2,2,2,2,2,3,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,3,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,3,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,3,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,3,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,3,2,2,2,4,4,2,2],
  [2,2,2,2,2,2,2,3,2,2,2,4,4,2,2],
  [2,2,2,2,2,2,2,3,2,2,2,4,4,2,2],
  [2,2,2,2,2,2,2,3,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,3,2,2,2,2,2,2,2],
];

let world2DecorationTileDictionnary = {};
let world2DecorationTileSize = 64;

let world2DecorationBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,11,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,11,11,11,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,10,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,10,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let world2CollisionBoard = [
  [0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];


// 3RD World.
let world3TileDictionnary = {};
let world3TileSize = 64;

let world3Board = [
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,2,2,2,2,2],
  [5,5,5,5,5,5,5,5,2,6,3,3,3,3,3],
  [2,2,2,2,2,2,2,6,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
];

let world3DecorationTileDictionnary = {};
let world3DecorationTileSize = 64;

let world3DecorationBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
  [0,0,0,3,0,3,0,2,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let world3CollisionBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];


currentWorld = 0;


/////////////////////////////////////////////
///////////VARIABLES FOR WORLDS//////////////
/////////////////////////////////////////////

let worlds = [];
let decorationWorlds = [];
let collisonWorlds = []; 

tileDictionnaries = [];
let worldsTileSizes = [];


/////////////////////////////////////////////
///////////VARIABLES FOR HERO////////////////
/////////////////////////////////////////////

//Spawn of Hero.
let xHero = 2 * world1TileSize;
let yHero = 6 * world1TileSize ;

// Size of Hero.
let wHero = world1TileSize - 5;
let hHero = world1TileSize - 5;

// Animation for Hero.
let heroSpeed = 5;
let myHeroRight = [];
let myHeroLeft = [];
let currentIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;

// Jump & Gravity.
let jump = false;
let direction = 1;
let velocity = 4 ;
let jumpPower =  10;
let fallingSpeed = 4; // equal to velocity

let minHeight = 385;
let maxHeight = 150 ;
let jumpCounter = 0;


/////////////////////////////////////////////
///////////VARIABLES FOR NPC/////////////////
/////////////////////////////////////////////

let npcImage;

let npcX = 5*world1TileSize; 
let npcY = 6*world1TileSize ; 
let npcWidth = world1TileSize -5; 
let npcHeight= world1TileSize - 5; 


function preload() {
  // Charger l'image depuis le dossier assets
  npcImage = loadImage('assets/run_1left.png');
}


let dialogues = [
  "Bonjour, que puis-je faire pour vous ?",
  "Je m'appelle Bob et je suis chanteur.",
  "Je vends une hache pour 15 coins si tu veux!",
  "I am sorry, je n'ai pas d'autre information à vous donner.",
  "C'est bon, on a assez parlé."
];

let currentDialogueIndex = 0;



/////////////////////////////////////////////
/////////FUNCTION LAUNCH ON SETUP////////////
/////////////////////////////////////////////

function setup() {
  createCanvas(world1Board[0].length * world1TileSize, world1Board.length * world1TileSize);
  
  world1TileDictionnary = {

    1: loadImage('assets/grass.png'),
    2: loadImage('assets/dirt.png'),
    3: loadImage('assets/pavement.png'),
    4: loadImage('assets/sand.png'),
    5: loadImage('assets/sky.jpg')
  };

  world1DecorationTileDictionnary = {
    0: loadImage(''),
    10: loadImage('assets/log.png'),
    11: loadImage('assets/leaves.png')
  };


  world2TileDictionnary = {

    1: loadImage('assets/grass.png'),
    2: loadImage('assets/dirt.png'),
    3: loadImage('assets/pavement.png'),
    4: loadImage('assets/sand.png'),
  };

  world2DecorationTileDictionnary = {
    0: loadImage(''),
    10: loadImage('assets/log.png'),
    11: loadImage('assets/leaves.png')
  };


  world3TileDictionnary = {

    1: loadImage('assets/grass.png'),
    2: loadImage('assets/solHerbe1.png'),
    3: loadImage('assets/sousSolNoir.png'),
    4: loadImage('assets/sand.png'),
    5: loadImage('assets/sky.jpg'),
    6: loadImage('assets/solBordDroit2.png')
  };

  world3DecorationTileDictionnary = {
    0: loadImage(''),
    1: loadImage('assets/solBordGauche1.png'),
    2: loadImage('assets/solBordDroit1.png'),
    3: loadImage('assets/champignonBleu.png')
  };

  // Right Hero Images.
  hero0 = loadImage('assets/run_0.png');
  myHeroRight.push(hero0);
  hero1 = loadImage('assets/run_1.png');
  myHeroRight.push(hero1);
  hero2 = loadImage('assets/run_2.png');
  myHeroRight.push(hero2);
  hero3 = loadImage('assets/run_3.png');
  myHeroRight.push(hero3);
  hero4 = loadImage('assets/run_4.png');
  myHeroRight.push(hero4);

  //Left Hero Images.
  myHeroLeft.push(loadImage('assets/run_0left.png'));
  myHeroLeft.push(loadImage('assets/run_1left.png')); 
  myHeroLeft.push(loadImage('assets/run_2left.png')); 
  myHeroLeft.push(loadImage('assets/run_3left.png'));
  myHeroLeft.push(loadImage('assets/run_4left.png'));

  currentHeroImage = hero0;


  // Worlds Setups.
  worlds = [world1Board, world2Board, world3Board];

  decorationWorlds = [world1DecorationBoard, world2DecorationBoard, world3DecorationBoard];

  collisonWorlds = [world1CollisionBoard, world2CollisionBoard, world3CollisionBoard];

  
  tileDictionnaries = [world1TileDictionnary, world2TileDictionnary, world3TileDictionnary];

  tileDecorationDictionnaries = [ world1DecorationTileDictionnary, world2DecorationTileDictionnary, world3DecorationTileDictionnary];


  worldsTileSizes = [world1TileSize, world2TileSize, world3TileSize];

  worldsDecorationTileSizes = [ world1DecorationTileSize, world2DecorationTileSize, world3DecorationTileSize];
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





function gravity () {
  if (yHero >= minHeight && jump === false) {
    yHero = yHero;
    jumpCounter = 0;
  } else {
    yHero = yHero + (direction * velocity); // For Gravity
  }

  if (jump === true) {
    if (yHero <= maxHeight || jumpCounter >= jumpPower) {
      if (yHero >= minHeight) {
        yHero = minHeight;
      } else {
        velocity = fallingSpeed;
      }
      
    } else {
      velocity = -jumpPower;
      jumpCounter = jumpCounter + 1;
    }
  } else {
    velocity = fallingSpeed;
  }
}



/////////////////////////////////////////////
///////////FUNCTION KEYSBINDS////////////////
/////////////////////////////////////////////

function checkKeys(currentMap) {
  let path = 5;


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
  };
};



function keyPressed() {
  if (key === 'n' || key === 'N') {
    if (checkNPCInteraction()) {
      currentDialogueIndex++;
      if (currentDialogueIndex >= dialogues.length) {
        currentDialogueIndex = dialogues.length - 1;
      }
    };
  };
};


/////////////////////////////////////////////
////////FUNCTION FOR NPC Interaction/////////
/////////////////////////////////////////////

function checkNPCInteraction() {
  let playerXCenter = xHero + wHero ;
  let playerYCenter = yHero + hHero;
  let npcXCenter = npcX + npcWidth;
  let npcYCenter = npcY + npcHeight;

  let distance = dist(playerXCenter, playerYCenter, npcXCenter, npcYCenter);

  return distance < wHero + npcWidth;
};


/////////////////////////////////////////////
////////FUNCTIONS FOR CHANGING WORLDS////////
/////////////////////////////////////////////

function checkWorldChange(worldCollisionBoard, tileSize) {
  for (let y = 0; y < worldCollisionBoard.length; y++) {
    const currentLine = worldCollisionBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      if (currentTileValue === 2 && pointIsInRect(xHero + wHero / 2, yHero + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
          return true;
      }
    }
  }
  return false;
};


function changeWorldIfNeeded() {
  if (checkWorldChange(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    currentWorld = (currentWorld + 1) % worlds.length;
    
    xHero = 2 * worldsTileSizes[currentWorld];
    yHero = 6 * worldsTileSizes[currentWorld];
  }
};


/////////////////////////////////////////////
/////////FUNCTIONS FOR COLLISION/////////////
/////////////////////////////////////////////

function checkCollision(worldCollisionBoard,tileSize) {
  for (let y = 0; y < worldCollisionBoard.length; y++) {
    const currentLine = worldCollisionBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      if (currentTileValue === 1){
        if(rectIsInRect(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }
    }
  }
};


function pointIsInRect(xHero,yHero,xR,yR,wR,hR) {
  if( (xHero > xR && xHero < xR + wR) && (yHero > yR && yHero < yR + hR))
  {
    return true;
  }else{
    return false;
  }
};


function rectIsInRect(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le haut");
      return true;
    }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le bas");
      return true;
    }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le bas");
      return true;
    }
    
    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le haut");
      return true;
    } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la bas et la gauche");
      return true;
    }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par le bas et la droite");
      return true;
    }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la gauche");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le bas et la droite");
      return true;
    }
  };
};


/////////////////////////////////////////////
////////////FUNCTIONS FOR DRAW///////////////
/////////////////////////////////////////////

function draw() {
  drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
  checkKeys(currentWorld);

  if (currentWorld === 0) {
    drawFront(decorationWorlds[0], tileDecorationDictionnaries[0], worldsDecorationTileSizes[0]);
    image(currentHeroImage, xHero, yHero, wHero, hHero);
    
    // NPC
    image(npcImage, npcX, npcY, npcWidth, npcHeight);
    if (checkNPCInteraction()) {
      textSize(20);
      textAlign(CENTER);
      fill(255);
      text(dialogues[currentDialogueIndex], npcX + npcWidth / 2, npcY - 20);
      textSize(16);
      text(CENTER);
      text("Appuyez sur la touche 'N' pour passer au prochain dialogue", 250, height - 80);
    };

    gravity();
    
  } else if (currentWorld === 1) {
    image(currentHeroImage, xHero, yHero, wHero, hHero);
    drawFront(decorationWorlds[1], tileDecorationDictionnaries[1], worldsDecorationTileSizes[1]);

  } else if (currentWorld === 2) {
    drawFront(decorationWorlds[2], tileDecorationDictionnaries[2], worldsDecorationTileSizes[2]);
    image(currentHeroImage, xHero, yHero, wHero, hHero);
  }
  changeWorldIfNeeded();

};
