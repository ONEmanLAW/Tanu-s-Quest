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


function setupTileDictionariesForet() {
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
};
