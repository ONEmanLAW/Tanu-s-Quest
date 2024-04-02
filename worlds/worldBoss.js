// Boss World.
let worldBossTileDictionnary = {};
let worldBossTileSize = 64;

let worldBossBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,2,1,4,4,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,5,2,1,2,5,0,0,0,0,0,0,0],
  [1,1,2,5,3,3,3,5,2,1,1,1,0,1,2],
  [3,3,3,4,3,3,3,3,3,4,3,4,4,5,3],
  [3,3,3,3,4,4,3,3,3,3,4,4,3,3,3],
];

let worldBossDecorationTileDictionnary = {};
let worldBossDecorationTileSize = 64;

let worldBossDecorationBoard = [
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

let worldBossCollisionBoard = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

function setupTileDictionariesBoss() {
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
}

