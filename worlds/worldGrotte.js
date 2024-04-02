// Grotte World.
let worldGrotteTileDictionnary = {};
let worldGrotteTileSize = 64;

let worldGrotteBoard = [
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

let worldGrotteDecorationTileDictionnary = {};
let worldGrotteDecorationTileSize = 64;

let worldGrotteDecorationBoard = [
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

let worldGrotteCollisionBoard = [
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



function setupTileDictionariesGrotte() {
  worldGrotteTileDictionnary = {

    0: loadImage(''),
    // Sol et Sous Sol.
    1: loadImage('assets/grotteTenebreuse/sol/solSurface.png'),
    2: loadImage('assets/grotteTenebreuse/sol/sousSolTerre.png'),
  
    // Tuile qui montent
    3: loadImage('assets/grotteTenebreuse/tuilesQuiMontent/tuileQuiMonteDroite.png'),
    4: loadImage('assets/grotteTenebreuse/tuilesQuiMontent/tuileQuiMonteGauche.png'),
    5: loadImage('assets/grotteTenebreuse/tuilesQuiMontent/sousSolTuileQuiMonteDroite.png'),
    6: loadImage('assets/grotteTenebreuse/tuilesQuiMontent/sousSolTuileQuiMonteGauche.png'),
  
    // Plafond
    7: loadImage('assets/grotteTenebreuse/plafond/plafond1.png'),
    8: loadImage('assets/grotteTenebreuse/plafond/plafond2.png'),
    9: loadImage('assets/grotteTenebreuse/plafond/plafond3.png'),
    10: loadImage('assets/grotteTenebreuse/plafond/plafond4.png'),
    11: loadImage('assets/grotteTenebreuse/plafond/plafond5.png'),
    12: loadImage('assets/grotteTenebreuse/plafond/plafond6.png'),
    13: loadImage('assets/grotteTenebreuse/plafond/plafond7.png'),
    14: loadImage('assets/grotteTenebreuse/plafond/plafondAuDessus.png'),
  
    //Trou & Eau.
    15: loadImage('assets/grotteTenebreuse/trouEtEau/eauMilieu.png'),
    16: loadImage('assets/grotteTenebreuse/trouEtEau/eauDroite.png'),
    17: loadImage('assets/grotteTenebreuse/trouEtEau/eauGauche.png'),
    18: loadImage('assets/grotteTenebreuse/trouEtEau/trouDroiteBas.png'),
    19: loadImage('assets/grotteTenebreuse/trouEtEau/trouGaucheBas.png'),
    20: loadImage('assets/grotteTenebreuse/trouEtEau/trouDroiteHaut.png'),
    21: loadImage('assets/grotteTenebreuse/trouEtEau/trouGaucheHaut.png'),
  
    // Platforme.
    22: loadImage('assets/grotteTenebreuse/plateforme/plateformeDroite.png'),
    22: loadImage('assets/grotteTenebreuse/plateforme/plateformeGauche.png'),
  };
  
  worldGrotteDecorationTileDictionnary = {
  
    0: loadImage(''),
    // Herbes.
    1: loadImage('assets/grotteTenebreuse/herbes/herbeSeule.png'),
    2: loadImage('assets/grotteTenebreuse/herbes/herbeEtCristaux.png'),
    3: loadImage('assets/grotteTenebreuse/herbes/herbeEtChampignon.png'),
    
    // Obstacles.
    4: loadImage('assets/grotteTenebreuse/herbes/obstacleRocher.png'),
  };
}
