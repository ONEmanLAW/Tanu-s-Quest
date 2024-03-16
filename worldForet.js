// Foret World.
let worldForetTileDictionnary = {};
let worldForetTileSize = 64;

let worldForetBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,21,19,20,22,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,8,2,1,2,12,0,0,0,0,0,0,0],
  [1,1,2,6,3,3,3,5,2,1,1,10,0,7,2],
  [3,3,3,4,3,3,3,3,3,4,3,16,14,15,3],
  [3,3,3,3,4,4,3,3,3,3,4,4,3,3,3],
];

let worldForetDecorationTileDictionnary = {};
let worldForetDecorationTileSize = 64;

let worldForetDecorationBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,2,3,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,7,1,5,0,0,0,0,0,0,0,0],
  [6,2,1,0,0,0,0,0,2,8,1,0,0,0,2],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let worldForetCollisionBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,0,0,0,1,1,1,1,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
];