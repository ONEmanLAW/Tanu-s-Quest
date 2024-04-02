// Temple World.
let worldTempleTileDictionnary = {};
let worldTempleTileSize = 64;

let worldTempleBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,2,14,8,6,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,8,2,1,2,14,0,0,0,0,0,0,0],
  [1,1,2,6,3,3,3,5,2,1,1,10,0,7,2],
  [3,3,3,4,3,3,3,3,3,4,3,16,14,15,3],
  [3,3,3,3,4,4,3,3,3,3,4,4,3,3,3],
];

let worldTempleDecorationTileDictionnary = {};
let worldTempleDecorationTileSize = 64;

let worldTempleDecorationBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let worldTempleCollisionBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];



function setupTileDictionariesTemple() {
  // Dictionnaire de tuiles du temple
  worldTempleTileDictionnary = {
      0: loadImage(''),
      1: loadImage('assets/tuto/neige/solNeige.png'),
      2: loadImage('assets/tuto/neige/sousSolNeige.png'),
      3: loadImage('assets/tuto/solEtSousSolTemple/solTemple.png'),
      4: loadImage('assets/tuto/solEtSousSolTemple/solTempleEtNeige.png'),
      5: loadImage('assets/tuto/solEtSousSolTemple/sousSolTemple.png'),
      6: loadImage('assets/tuto/solEtSousSolTemple/sousSolTempleEtNeige.png'),
      7: loadImage('assets/tuto/piliersTemple/continuiterOmbrePilier.png'),
      8: loadImage('assets/tuto/piliersTemple/continuiterPilierDroite.png'),
      9: loadImage('assets/tuto/piliersTemple/continuiterPilierGauche.png'),
      10: loadImage('assets/tuto/piliersTemple/ombrePilierDroite.png'),
      11: loadImage('assets/tuto/piliersTemple/ombrePilierGauche.png'),
      12: loadImage('assets/tuto/piliersTemple/pilierDroite.png'),
      13: loadImage('assets/tuto/piliersTemple/pilierGauche.png'),
      14: loadImage('assets/tuto/piliersTemple/pilierEtSolDroite.png'),
      15: loadImage('assets/tuto/piliersTemple/pilierEtSolGauche.png'),
      16: loadImage('assets/tuto/toitTemple/toitBasDroite.png'),
      17: loadImage('assets/tuto/toitTemple/toitBasGauche.png'),
      18: loadImage('assets/tuto/toitTemple/toitHautDroite.png'),
      19: loadImage('assets/tuto/toitTemple/toitHautGauche.png')
  };

  // Dictionnaire de décoration de tuiles du temple
  worldTempleDecorationTileDictionnary = {
      0: loadImage('')
  };
}