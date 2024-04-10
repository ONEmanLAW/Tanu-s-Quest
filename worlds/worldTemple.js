// Temple World.
let worldTempleTileDictionnary = {};
let worldTempleTileSize = 96;

let worldTempleBoard = [
  [21, 21, 21, 21, 21, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [23, 23, 23, 23, 23, 23, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [9, 10, 13, 13, 13, 13, 13, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [16, 16, 16, 16, 16, 16, 16, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [16, 16, 16, 16, 16, 16, 16, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

let worldTempleDecorationTileDictionnary = {};
let worldTempleDecorationTileSize = 96;

let worldTempleDecorationBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 17, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 8, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let worldTempleCollisionBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 301],
  [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];



function setupTileDictionariesTemple() {
  // Dictionnaire de tuiles du temple
  worldTempleTileDictionnary = {
    0: loadImage(''),
    1: loadImage(''),
    2: loadImage('worlds/assets/temple/2.png'),
    3: loadImage('worlds/assets/temple/3.png'),
    4: loadImage('worlds/assets/temple/4.png'),
    5: loadImage('worlds/assets/temple/5.png'),
    6: loadImage('worlds/assets/temple/6.png'),
    7: loadImage('worlds/assets/temple/7.png'),
    8: loadImage('worlds/assets/temple/8.png'),
    9: loadImage('worlds/assets/temple/9.png'),
    10: loadImage('worlds/assets/temple/10.png'),
    11: loadImage('worlds/assets/temple/11.png'),
    12: loadImage('worlds/assets/temple/12.png'),
    13: loadImage('worlds/assets/temple/13.png'),
    14: loadImage('worlds/assets/temple/14.png'),
    15: loadImage('worlds/assets/temple/15.png'),
    16: loadImage('worlds/assets/temple/16.png'),
    17: loadImage('worlds/assets/temple/17.png'),
    18: loadImage('worlds/assets/temple/18.png'),
    19: loadImage('worlds/assets/temple/19.png'),
    20: loadImage('worlds/assets/temple/20.png'),
    21: loadImage('worlds/assets/temple/21.png'),
    22: loadImage('worlds/assets/temple/22.png'),
    23: loadImage('worlds/assets/temple/23.png'),
  };

  // Dictionnaire de décoration de tuiles du temple
  worldTempleDecorationTileDictionnary = {
    0: loadImage(''),
    1: loadImage(''),
    2: loadImage('worlds/assets/temple/2.png'),
    3: loadImage('worlds/assets/temple/3.png'),
    4: loadImage('worlds/assets/temple/4.png'),
    5: loadImage('worlds/assets/temple/5.png'),
    6: loadImage('worlds/assets/temple/6.png'),
    7: loadImage('worlds/assets/temple/7.png'),
    8: loadImage('worlds/assets/temple/8.png'),
    9: loadImage('worlds/assets/temple/9.png'),
    10: loadImage('worlds/assets/temple/10.png'),
    11: loadImage('worlds/assets/temple/11.png'),
    12: loadImage('worlds/assets/temple/12.png'),
    13: loadImage('worlds/assets/temple/13.png'),
    14: loadImage('worlds/assets/temple/14.png'),
    15: loadImage('worlds/assets/temple/15.png'),
    16: loadImage('worlds/assets/temple/16.png'),
    17: loadImage('worlds/assets/temple/17.png'),
    18: loadImage('worlds/assets/temple/18.png'),
    19: loadImage('worlds/assets/temple/19.png'),
    20: loadImage('worlds/assets/temple/20.png'),
    21: loadImage('worlds/assets/temple/21.png'),
    22: loadImage('worlds/assets/temple/22.png'),
    23: loadImage('worlds/assets/temple/23.png'),
  };
};