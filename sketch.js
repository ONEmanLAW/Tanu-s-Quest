


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
  [1,1,4,4,1,1,1,1,2,2,2,2,2,2,2],
  [2,2,4,4,2,2,2,2,2,2,2,2,2,2,2],
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

let world1CollisonTileDictionnary = {};
let world1CollisonTileSize = 64;

let world1CollisionBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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



currentWorld = 1;

/////////////////////////////////////////////
///////////VARIABLES FOR WORLDS//////////////
/////////////////////////////////////////////

let worlds = [];
tileDictionnaries = [];
let worldsTileSizes = [];


/////////////////////////////////////////////
///////////VARIABLES FOR HERO////////////////
/////////////////////////////////////////////

//Spawn of Hero.
let xHero = 2 * world1TileSize;
let yHero = 6 * world1TileSize;

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
  worlds = [world1Board, world2Board, world1DecorationBoard, world2DecorationBoard, world1CollisionBoard, world2CollisionBoard];
  tileDictionnaries = [world1TileDictionnary, world2TileDictionnary, world1DecorationTileDictionnary, world2DecorationTileDictionnary];
  worldsTileSizes = [world1TileSize, world2TileSize, world1DecorationTileSize, world2DecorationTileSize];
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
///////////FUNCTION KEYSBINDS////////////////
/////////////////////////////////////////////

function checkKeys(currentMap) {
  let path = 5;

  if (currentMap === 0) {

    if (keyIsDown(81) && keyIsDown(68)) {
      return;
    };
  
    if (keyIsDown(68)) {
      xHero += heroSpeed;
      if (checkCollision(worlds[4],worldsTileSizes[currentWorld])) {
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
    
    if (keyIsDown(81)) {
      xHero -= heroSpeed;
      if (checkCollision(worlds[4],worldsTileSizes[currentWorld])) {
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


  if (currentMap === 1) {
    if (keyIsDown(90)) {
      yHero -= heroSpeed;
      if (checkCollision(worlds[5],worldsTileSizes[currentWorld]) || checkCollision(worlds[3],worldsTileSizes[3])) {
        yHero += path;
      }
    };
  
  
    if (keyIsDown(83)) {
      yHero += heroSpeed;
      if (checkCollision(worlds[5],worldsTileSizes[currentWorld]) || checkCollision(worlds[3],worldsTileSizes[3])) {
        yHero -= path;
      }
    };
    
    
    if (keyIsDown(68) && keyIsDown(81)) {
      return;
    };
    
    if (keyIsDown(68)) {
      xHero += heroSpeed;
      if (checkCollision(worlds[5],worldsTileSizes[currentWorld]) || checkCollision(worlds[3],worldsTileSizes[3])) {
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
    
    if (keyIsDown(81)) {
      xHero -= heroSpeed;
      if (checkCollision(worlds[5],worldsTileSizes[currentWorld]) || checkCollision(worlds[3],worldsTileSizes[3])) {
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


/////////////////////////////////////////////
/////////FUNCTIONS FOR COLLISION/////////////
/////////////////////////////////////////////

function checkCollision(world2CollisionBoard,tileSize) {
  for (let y = 0; y < world2CollisionBoard.length; y++) {
    const currentLine = world2CollisionBoard[y];
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



function draw() {
  drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
  checkKeys(currentWorld);

  if (currentWorld === 0) {
    drawFront(worlds[2], tileDictionnaries[2], worldsTileSizes[2]);
    image(currentHeroImage, xHero, yHero, wHero, hHero);
  } else if (currentWorld === 1) {
    image(currentHeroImage, xHero, yHero, wHero, hHero);
    drawFront(worlds[3], tileDictionnaries[3], worldsTileSizes[3]);
  };
};
