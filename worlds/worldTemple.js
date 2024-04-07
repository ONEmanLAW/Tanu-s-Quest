// Temple World.
let worldTempleTileDictionnary = {};
let worldTempleTileSize = 64;

let worldTempleBoard = [
  [45, 45, 45, 45, 45, 45, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [47, 47, 47, 47, 47, 47, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [38, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [38, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [38, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [38, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [38, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [35, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [33, 34, 37, 37, 37, 37, 30, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27],
  [47, 47, 47, 47, 47, 47, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
  [47, 47, 47, 47, 47, 47, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
];

let worldTempleDecorationTileDictionnary = {};
let worldTempleDecorationTileSize = 64;

let worldTempleDecorationBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 42, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 42, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 42, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 42, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 42, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 41, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let worldTempleCollisionBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];



function setupTileDictionariesTemple() {
  // Dictionnaire de tuiles du temple
  worldTempleTileDictionnary = {
    0: loadImage(''),
    1: loadImage(''),
    2: loadImage('assets/temple/2.png'),
    3: loadImage('assets/temple/3.png'),
    4: loadImage('assets/temple/4.png'),
    5: loadImage('assets/temple/5.png'),
    6: loadImage('assets/temple/6.png'),
    7: loadImage('assets/temple/7.png'),
    8: loadImage('assets/temple/8.png'),
    9: loadImage('assets/temple/9.png'),
    10: loadImage('assets/temple/10.png'),
    11: loadImage('assets/temple/11.png'),
    12: loadImage('assets/temple/12.png'),
    13: loadImage('assets/temple/13.png'),
    14: loadImage('assets/temple/14.png'),
    15: loadImage('assets/temple/15.png'),
    16: loadImage('assets/temple/16.png'),
    17: loadImage('assets/temple/17.png'),
    18: loadImage('assets/temple/18.png'),
    19: loadImage('assets/temple/19.png'),
    20: loadImage('assets/temple/20.png'),
    21: loadImage('assets/temple/21.png'),
    22: loadImage('assets/temple/22.png'),
    23: loadImage('assets/temple/23.png'),
  };

  // Dictionnaire de décoration de tuiles du temple
  worldTempleDecorationTileDictionnary = {
    0: loadImage(''),
    1: loadImage(''),
    2: loadImage('assets/temple/2.png'),
    3: loadImage('assets/temple/3.png'),
    4: loadImage('assets/temple/4.png'),
    5: loadImage('assets/temple/5.png'),
    6: loadImage('assets/temple/6.png'),
    7: loadImage('assets/temple/7.png'),
    8: loadImage('assets/temple/8.png'),
    9: loadImage('assets/temple/9.png'),
    10: loadImage('assets/temple/10.png'),
    11: loadImage('assets/temple/11.png'),
    12: loadImage('assets/temple/12.png'),
    13: loadImage('assets/temple/13.png'),
    14: loadImage('assets/temple/14.png'),
    15: loadImage('assets/temple/15.png'),
    16: loadImage('assets/temple/16.png'),
    17: loadImage('assets/temple/17.png'),
    18: loadImage('assets/temple/18.png'),
    19: loadImage('assets/temple/19.png'),
    20: loadImage('assets/temple/20.png'),
    21: loadImage('assets/temple/21.png'),
    22: loadImage('assets/temple/22.png'),
    23: loadImage('assets/temple/23.png'),
  };
};