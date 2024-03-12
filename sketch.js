/////////////////////////////////////////////
//////////////////WORLDS/////////////////////
/////////////////////////////////////////////

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
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];



// Village World.
let worldVillageTileDictionnary = {};
let worldVillageTileSize = 64;

let worldVillageBoard = [
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

let worldVillageDecorationTileDictionnary = {};
let worldVillageDecorationTileSize = 64;

let worldVillageDecorationBoard = [
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

let worldVillageCollisionBoard = [
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
  [2,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
  [1,1,1,1,0,0,0,1,1,1,1,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
];



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
  [2,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
  [1,1,1,1,0,0,0,1,1,1,1,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
];



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


currentWorld = 0;


/////////////////////////////////////////////
////////VARIABLES FOR STARTING IMAGES////////
/////////////////////////////////////////////

let images = [];
let currentImageIndex = 0;
let scrollCanvas;
let gameStarted = false;

let musicsOfStory = [];
let currentMusic;
let musicsOfStoryStarted = false;

function preload() {
  images.push(loadImage('assets/images/image1.jpg'));
  images.push(loadImage('assets/images/image2.jpg'));
  images.push(loadImage('assets/images/image3.jpg'));
  images.push(loadImage('assets/images/image4.jpg'));
  images.push(loadImage('assets/images/image5.jpg'));
  images.push(loadImage('assets/images/image6.jpg'));

  musicsOfStory.push(loadSound('assets/musics/Enterin The Skies.mp3', () => {
    // Lecture automatique de la première musique une fois chargée
    currentMusic = musicsOfStory[0];
    if (currentMusic) {
      currentMusic.play();
    }
  }));
  musicsOfStory.push(loadSound('assets/musics/Orbital Colossus.mp3'));
  musicsOfStory.push(loadSound('assets/musics/Ove Melaa - Hero Within.mp3'));
  musicsOfStory.push(loadSound('assets/musics/Ove Melaa - High Stakes,Low Chances.mp3'));
  musicsOfStory.push(loadSound('assets/musics/Rise of spirit.mp3'));
  musicsOfStory.push(loadSound('assets/musics/Woodland Fantasy.mp3'));
};





/////////////////////////////////////////////
///////////VARIABLES FOR WORLDS//////////////
/////////////////////////////////////////////

let worlds = [];
let decorationWorlds = [];
let collisonWorlds = []; 

let tileDictionnaries = [];
let worldsTileSizes = [];


/////////////////////////////////////////////
///////////VARIABLES FOR HERO////////////////
/////////////////////////////////////////////

//Spawn of Hero.
let xHero = 2 * worldTempleTileSize;
let yHero = 6 * worldTempleTileSize;

// Size of Hero.
let wHero = worldTempleTileSize - 5;
let hHero = worldTempleTileSize -5;

// Animation for Hero.
let heroSpeed = 5;
let myHeroRight = [];
let myHeroLeft = [];
let currentIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;

// Jump & Gravity.
let jump = false;
let direction = 1;
let velocity = 4 ;
let jumpPower =  10;
let fallingSpeed = 4; // equal to velocity

let minHeight = 385;
let maxHeight = 150 ;
let jumpCounter = 0;


/////////////////////////////////////////////
///////////VARIABLES FOR NPC/////////////////
/////////////////////////////////////////////

let npcImage;

let npcX = 5 * worldTempleTileSize; 
let npcY = 6 * worldTempleTileSize ; 
let npcWidth = worldTempleTileSize -5; 
let npcHeight= worldTempleTileSize - 5; 

let dialogues = [
  "Bonjour, que puis-je faire pour vous ?",
  "Je m'appelle Bob et je suis chanteur.",
  "Je vends une hache pour 15 coins si tu veux!",
  "I am sorry, je n'ai pas d'autre information à vous donner.",
  "C'est bon, on a assez parlé."
];

let currentDialogueIndex = 0;


/////////////////////////////////////////////
/////////FUNCTION LAUNCH ON SETUP////////////
/////////////////////////////////////////////

function setup() {
  // Canvas For Story.
  createCanvas(windowWidth, windowHeight);
  
  // Canvas For Game.
  createCanvas(worldTempleBoard[0].length * worldTempleTileSize, worldTempleBoard.length * worldTempleTileSize);
  

  worldTempleTileDictionnary = {

    0: loadImage(''),
    // Sol et SousSol Neige.
    1: loadImage('assets/tuto/neige/solNeige.png'),
    2: loadImage('assets/tuto/neige/sousSolNeige.png'),

    // Sol et SousSol Temple.
    3: loadImage('assets/tuto/solEtSousSolTemple/solTemple.png'),
    4: loadImage('assets/tuto/solEtSousSolTemple/solTempleEtNeige.png'),
    5: loadImage('assets/tuto/solEtSousSolTemple/sousSolTemple.png'),
    6: loadImage('assets/tuto/solEtSousSolTemple/sousSolTempleEtNeige.png'),

    // Piliers du Temple.
    7: loadImage('assets/tuto/piliersTemple/continuiterOmbrePilier.png'),
    8: loadImage('assets/tuto/piliersTemple/continuiterPilierDroite.png'),
    9: loadImage('assets/tuto/piliersTemple/continuiterPilierGauche.png'),
    10: loadImage('assets/tuto/piliersTemple/ombrePilierDroite.png'),
    11: loadImage('assets/tuto/piliersTemple/ombrePilierGauche.png'),
    12: loadImage('assets/tuto/piliersTemple/pilierDroite.png'),
    13: loadImage('assets/tuto/piliersTemple/pilierGauche.png'),
    14: loadImage('assets/tuto/piliersTemple/pilierEtSolDroite.png'),
    15: loadImage('assets/tuto/piliersTemple/pilierEtSolGauche.png'),

    // Toit du Temple.
    16: loadImage('assets/tuto/toitTemple/toitBasDroite.png'),
    17: loadImage('assets/tuto/toitTemple/toitBasGauche.png'),
    18: loadImage('assets/tuto/toitTemple/toitHautDroite.png'),
    19: loadImage('assets/tuto/toitTemple/toitHautGauche.png'),
  };

  worldTempleDecorationTileDictionnary = {

    0: loadImage(''),
  };


  worldVillageTileDictionnary = {

    0: loadImage(''),
  };

  worldVillageDecorationTileDictionnary = {

    0: loadImage(''),
  };


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


  // Right Hero Images.
  hero0 = loadImage('assets/hero/run_0.png');
  myHeroRight.push(hero0);
  hero1 = loadImage('assets/hero/run_1.png');
  myHeroRight.push(hero1);
  hero2 = loadImage('assets/hero/run_2.png');
  myHeroRight.push(hero2);
  hero3 = loadImage('assets/hero/run_3.png');
  myHeroRight.push(hero3);
  hero4 = loadImage('assets/hero/run_4.png');
  myHeroRight.push(hero4);

  //Left Hero Images.
  myHeroLeft.push(loadImage('assets/hero/run_0left.png'));
  myHeroLeft.push(loadImage('assets/hero/run_1left.png')); 
  myHeroLeft.push(loadImage('assets/hero/run_2left.png')); 
  myHeroLeft.push(loadImage('assets/hero/run_3left.png'));
  myHeroLeft.push(loadImage('assets/hero/run_4left.png'));

  currentHeroImage = hero0;


  // Worlds Setups.
  worlds = [worldTempleBoard, worldVillageBoard, worldForetBoard, worldGrotteBoard, worldBossBoard];

  decorationWorlds = [worldTempleDecorationBoard, worldVillageDecorationBoard, worldForetDecorationBoard, worldGrotteDecorationBoard, worldBossDecorationBoard];

  collisonWorlds = [worldTempleCollisionBoard, worldVillageCollisionBoard, worldForetCollisionBoard, worldGrotteCollisionBoard, worldBossCollisionBoard];

  
  tileDictionnaries = [worldTempleTileDictionnary, worldVillageTileDictionnary, worldForetTileDictionnary, worldGrotteTileDictionnary, worldBossTileDictionnary];

  tileDecorationDictionnaries = [ worldTempleDecorationTileDictionnary, worldVillageDecorationTileDictionnary, worldForetDecorationTileDictionnary, worldGrotteDecorationTileDictionnary, worldBossDecorationTileDictionnary];


  worldsTileSizes = [worldTempleTileSize, worldVillageTileSize, worldForetTileSize, worldGrotteTileSize, worldBossTileSize];

  worldsDecorationTileSizes = [ worldTempleDecorationTileSize, worldVillageDecorationTileSize, worldForetDecorationTileSize, worldGrotteDecorationTileSize, worldBossDecorationTileSize];


  backgroundTutoImage = loadImage('assets/tuto/fondTutorielTest.jpg',() => {
    backgroundForetImage.resize(width, height);
  });

  backgroundForetImage = loadImage('assets/foretEnchanter/fondForet.jpg',() => {
    backgroundForetImage.resize(width, height);
  });

  backgroundGrotteImage = loadImage('assets/grotteTenebreuse/fondGrotteTenebreuseTest.jpg',() => {
    backgroundForetImage.resize(width, height);
  });
  
  backgroundBossImage = loadImage('assets/niveauBoss/fondBoss.jpg',() => {
    backgroundForetImage.resize(width, height);
  });  
  

  npcImage = loadImage('assets/hero/run_1left.png');
};


/////////////////////////////////////////////
////////////FUNCTIONS MOUSECLICKED///////////
/////////////////////////////////////////////


function mouseClicked() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    gameStarted = true;
  } else {
    if (currentMusic) {
      currentMusic.stop();
    }
    currentMusic = musicsOfStory[currentImageIndex];
    if (currentMusic) {
      currentMusic.play();
    }
  }
};


function keyTyped() {
  if (key === 'm' || key === 'M') {
    if (musicsOfStory[currentImageIndex].isPlaying()) { 
      musicsOfStory[currentImageIndex].stop();
    } else {
      musicsOfStory[currentImageIndex].play();
    }
  }
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

function gravity() {
  
  const collision = checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld]);

 
  if (jump || !collision) {
    yHero += direction * velocity;
  }

  
  if (jump) {
   
    if (jumpCounter >= jumpPower) {
      velocity = fallingSpeed;
    } else {
      velocity = -jumpPower;
      jumpCounter++;
    }
  } else {
  
    if (!collision) {
      velocity = fallingSpeed;
    }
  }

  if (collision) {
    jump = false;
    jumpCounter = 0;
  }
}


/////////////////////////////////////////////
///////////FUNCTION KEYSBINDS////////////////
/////////////////////////////////////////////

function checkKeys(currentMap) {
  let path = 5;

  if (currentMap === 0) {

    if (keyIsDown(68) && keyIsDown(81)) {
      return;
    };
  
    // Right.
    if (keyIsDown(68)) {
      xHero += heroSpeed;
      if (checkCollision(collisonWorlds[0],worldsTileSizes[currentWorld])) {
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
    
    // Left.
    if (keyIsDown(81)) {
      xHero -= heroSpeed;
      if (checkCollision(collisonWorlds[0],worldsTileSizes[currentWorld])) {
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

    if (keyIsDown(32)) {
      jump = true;
    } else {
      jump = false;
    }
  };



  if (currentMap === 1) {

    // Up.
    if (keyIsDown(90)) {
      yHero -= heroSpeed;
      if (checkCollision(collisonWorlds[1],worldsTileSizes[currentWorld])) {
        yHero += path;
      }
    };
  
  // Down.
    if (keyIsDown(83)) {
      yHero += heroSpeed;
      if (checkCollision(collisonWorlds[1],worldsTileSizes[currentWorld])) {
        yHero -= path;
      }
    };
    
    
    if (keyIsDown(68) && keyIsDown(81)) {
      return;
    };
    
    // Right.
    if (keyIsDown(68)) {
      xHero += heroSpeed;
      if (checkCollision(collisonWorlds[1],worldsTileSizes[currentWorld])) {
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
    
    // Left.
    if (keyIsDown(81)) {
      xHero -= heroSpeed;
      if (checkCollision(collisonWorlds[1],worldsTileSizes[currentWorld])) {
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



  if (currentMap === 2) {

    if (keyIsDown(68) && keyIsDown(81)) {
      return;
    };
  
    // Right.
    if (keyIsDown(68)) {
      xHero += heroSpeed;
      if (checkCollision(collisonWorlds[2],worldsTileSizes[currentWorld])) {
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
    
    //Left.
    if (keyIsDown(81)) {
      xHero -= heroSpeed;
      if (checkCollision(collisonWorlds[2],worldsTileSizes[currentWorld])) {
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

    if (keyIsDown(32)) {
      jump = true;
    } else {
      jump = false;
    }
  };



  if (currentMap === 3) {
    if (keyIsDown(68) && keyIsDown(81)) {
      return;
    };
  
    // Right.
    if (keyIsDown(68)) {
      xHero += heroSpeed;
      if (checkCollision(collisonWorlds[3],worldsTileSizes[currentWorld])) {
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
    
    //Left.
    if (keyIsDown(81)) {
      xHero -= heroSpeed;
      if (checkCollision(collisonWorlds[3],worldsTileSizes[currentWorld])) {
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

    if (keyIsDown(32)) {
      jump = true;
    } else {
      jump = false;
    }
  }



  if (currentMap === 4) {
    if (keyIsDown(68) && keyIsDown(81)) {
      return;
    };
  
    // Right.
    if (keyIsDown(68)) {
      xHero += heroSpeed;
      if (checkCollision(collisonWorlds[4],worldsTileSizes[currentWorld])) {
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
    
    //Left.
    if (keyIsDown(81)) {
      xHero -= heroSpeed;
      if (checkCollision(collisonWorlds[4],worldsTileSizes[currentWorld])) {
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

    if (keyIsDown(32)) {
      jump = true;
    } else {
      jump = false;
    }
  };
};


function keyPressed() {
  if (key === 'n' || key === 'N') {
    if (checkNPCInteraction()) {
      currentDialogueIndex++;
      if (currentDialogueIndex >= dialogues.length) {
        currentDialogueIndex = dialogues.length - 1;
      }
    };
  };
};


/////////////////////////////////////////////
////////FUNCTION FOR NPC Interaction/////////
/////////////////////////////////////////////

function checkNPCInteraction() {
  let playerXCenter = xHero + wHero ;
  let playerYCenter = yHero + hHero;
  let npcXCenter = npcX + npcWidth;
  let npcYCenter = npcY + npcHeight;

  let distance = dist(playerXCenter, playerYCenter, npcXCenter, npcYCenter);

  return distance < wHero + npcWidth;
};


/////////////////////////////////////////////
////////FUNCTIONS FOR CHANGING WORLDS////////
/////////////////////////////////////////////

function checkWorldChange(worldCollisionBoard, tileSize) {
  for (let y = 0; y < worldCollisionBoard.length; y++) {
    const currentLine = worldCollisionBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      if (currentTileValue === 2 && pointIsInRect(xHero + wHero / 2, yHero + hHero, tileSize * x, tileSize * y, tileSize, tileSize)) {
          return true;
      }
    }
  }
  return false;
};


function changeWorldIfNeeded() {
  if (checkWorldChange(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    currentWorld = (currentWorld + 1) % worlds.length;
    
    xHero = 2 * worldsTileSizes[currentWorld];
    yHero = 6 * worldsTileSizes[currentWorld];
  }
};


/////////////////////////////////////////////
/////////FUNCTIONS FOR COLLISION/////////////
/////////////////////////////////////////////

function checkCollision(worldCollisionBoard,tileSize) {
  for (let y = 0; y < worldCollisionBoard.length; y++) {
    const currentLine = worldCollisionBoard[y];
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


/////////////////////////////////////////////
////////////FUNCTIONS FOR DRAW///////////////
/////////////////////////////////////////////

function draw() {

  if (!gameStarted) {
    image(images[currentImageIndex], 0, 0, width, height);
    
  } else {
    if (currentMusic && currentMusic.isPlaying()) {
      currentMusic.stop();
    };
    checkKeys(currentWorld);
    changeWorldIfNeeded();

    if (currentWorld === 0) {
    image(backgroundTutoImage, 0, 0);
    drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
    drawFront(decorationWorlds[0], tileDecorationDictionnaries[0], worldsDecorationTileSizes[0]);
    image(currentHeroImage, xHero, yHero, wHero, hHero);
    
    // NPC
    image(npcImage, npcX, npcY, npcWidth, npcHeight);
    if (checkNPCInteraction()) {
      textSize(20);
      textAlign(CENTER);
      fill(255);
      text(dialogues[currentDialogueIndex], npcX + npcWidth / 2, npcY - 20);
      textSize(16);
      text(CENTER);
      text("Appuyez sur 'N' pour passer au prochain text", 250, height - 80);
    };

    } else if (currentWorld === 1) {
      drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
      image(currentHeroImage, xHero, yHero, wHero, hHero);
      drawFront(decorationWorlds[1], tileDecorationDictionnaries[1], worldsDecorationTileSizes[1]);

    } else if (currentWorld === 2) {
      image(backgroundForetImage, 0, 0);
      drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
      drawFront(decorationWorlds[2], tileDecorationDictionnaries[2], worldsDecorationTileSizes[2]);
      image(currentHeroImage, xHero, yHero, wHero, hHero); 

    } else if (currentWorld === 3) {
      image(backgroundGrotteImage, 0, 0);
      drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
      drawFront(decorationWorlds[3], tileDecorationDictionnaries[3], worldsDecorationTileSizes[3]);
      image(currentHeroImage, xHero, yHero, wHero, hHero);
      
    } else if (currentWorld === 4) {
      image(backgroundBossImage, 0, 0);
      drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
      drawFront(decorationWorlds[4], tileDecorationDictionnaries[4], worldsDecorationTileSizes[4]);
      image(currentHeroImage, xHero, yHero, wHero, hHero);
    }  
  }
};
