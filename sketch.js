// Variables pour mondes.
let worlds = [];
tileDictionnaries = [];
let worldsTileSizes = [];

// 1ST World.
let world1TileDictionnary = {};
let world1TileSize = 64;

let world1Board = [
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,6,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,1,1,1,1,1],
  [5,5,5,5,5,5,5,5,1,1,2,2,2,2,2],
  [5,5,5,5,5,5,5,1,1,2,2,2,2,2,2],
  [1,1,4,4,1,1,1,1,2,2,2,2,2,2,2],
  [2,2,4,4,2,2,2,2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];


// Seconde World.
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



function setup() {
  createCanvas(world1Board[0].length * world1TileSize, world1Board.length * world1TileSize);
  
  // Tiles for 1st World.
  world1TileDictionnary = {

    1: loadImage('assets/grass.png'),
    2: loadImage('assets/dirt.png'),
    3: loadImage('assets/pavement.png'),
    4: loadImage('assets/sand.png'),
    5: loadImage('assets/sky.jpg'),
    6: loadImage('assets/sun.png'),
  }

  // Tiles for 2nd World.
  world2TileDictionnary = {

    1: loadImage('assets/grass.png'),
    2: loadImage('assets/dirt.png'),
    3: loadImage('assets/pavement.png'),
    4: loadImage('assets/sand.png'),
  }

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



function draw() {

  drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);

}
