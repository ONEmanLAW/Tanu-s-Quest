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


// 2ND World.
let world2TileDictionnary = {};
let world2TileSize = 64;

let world2Board = [
  [1,1,1,1,1,1,1,3,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,3,1,1,1,1,1,1,1],
  [1,2,2,1,1,1,1,3,1,1,1,1,1,1,1],
  [1,2,2,2,1,1,1,3,1,1,1,1,1,1,1],
  [1,1,2,2,1,1,1,3,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,3,1,1,1,4,4,1,1],
  [1,1,1,1,1,1,1,3,1,1,1,4,4,1,1],
  [1,1,1,1,1,1,1,3,1,1,1,4,4,1,1],
  [1,1,1,1,1,1,1,3,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,3,1,1,1,1,1,1,1],
];

currentWorld = 0;


/////////////////////////////////////////////
///////////VARIABLES FOR WORLDS//////////////
/////////////////////////////////////////////
let worlds = [];
tileDictionnaries = [];
let worldsTileSizes = [];

/////////////////////////////////////////////
///////////VARIABLES FOR HERO////////////////
/////////////////////////////////////////////


let xHero = 2 * world1TileSize;
let yHero = 6 * world1TileSize;

let wHero = world1TileSize;
let hHero = world1TileSize * 1

let heroSpeed = 5;
let myHeroRight = [];
let myHeroLeft = [];
let currentIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;




function setup() {
  createCanvas(world1Board[0].length * world1TileSize, world1Board.length * world1TileSize);
  
  // Tiles for 1st World.
  world1TileDictionnary = {

    1: loadImage('assets/grass.png'),
    2: loadImage('assets/dirt.png'),
    3: loadImage('assets/pavement.png'),
    4: loadImage('assets/sand.png'),
    5: loadImage('assets/sky.jpg'),
  }

  // Tiles for 2nd World.
  world2TileDictionnary = {

    1: loadImage('assets/grass.png'),
    2: loadImage('assets/dirt.png'),
    3: loadImage('assets/pavement.png'),
    4: loadImage('assets/sand.png'),
  }

  // Hero Images
  // Right Images
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

  currentHeroImage = hero0;

  //Left Images
  myHeroLeft.push(loadImage('assets/run_0left.png'));
  myHeroLeft.push(loadImage('assets/run_1left.png')); 
  myHeroLeft.push(loadImage('assets/run_2left.png')); 
  myHeroLeft.push(loadImage('assets/run_3left.png'));
  myHeroLeft.push(loadImage('assets/run_4left.png'));



  worlds = [world1Board, world2Board];
  tileDictionnaries = [world1TileDictionnary, world2TileDictionnary];
  worldsTileSizes = [world1TileSize, world2TileSize];
}



function drawWorld(gameBoard, tileDictionnary, tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      let currentImageName = tileDictionnary[currentTileValue];

      image(currentImageName, x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
}



function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    currentIndex = 0;
  }
  return false;
}

function getKeys() {
  if (keyIsDown(UP_ARROW)) {
    yHero -= heroSpeed;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yHero += heroSpeed;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xHero += heroSpeed;
    
    // For HERO Right Animation.
    movementCounter += 1;
    if (movementCounter >= 20 / heroSpeed) {
      currentIndex +=1;
      if (currentIndex === myHeroRight.length) {
        currentIndex = 0;
      }
      currentHeroImage = myHeroRight[currentIndex];
      movementCounter = 0;
    }
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    xHero -= heroSpeed;

    // For HERO left Animation.
    movementCounter += 1;
    if (movementCounter >= 20 / heroSpeed) {
      currentIndex +=1;
      if (currentIndex === myHeroLeft.length) {
        currentIndex = 0;
      }
      currentHeroImage = myHeroLeft[currentIndex];
      movementCounter = 0;
    }
  }
};



function draw() {
  drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);

  getKeys();
  image(currentHeroImage, xHero, yHero, wHero, hHero);
}
