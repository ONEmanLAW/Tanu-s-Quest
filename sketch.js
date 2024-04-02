/////////////////////////////////////////////
//////////////////WORLDS/////////////////////
/////////////////////////////////////////////

currentWorld = 0;


/////////////////////////////////////////////
///////////VARIABLES FOR WORLDS//////////////
/////////////////////////////////////////////

let worlds = [];
let decorationWorlds = [];
let collisonWorlds = []; 

let tileDictionnaries = [];
let worldsTileSizes = [];


/////////////////////////////////////////////
/////////FUNCTION LAUNCH ON SETUP////////////
/////////////////////////////////////////////

function setup() {
  // Canvas For Story.
  createCanvas(windowWidth, windowHeight);

  // Positions Initial.
  spawnEnemyAndPatrol();
  preloadBackgroundImages();

  
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
       1: loadImage('assets/village/1.png'),
    2: loadImage('assets/village/2.png'),
    3: loadImage('assets/village/3.png'),
    4: loadImage('assets/village/4.png'),
    5: loadImage('assets/village/5.png'),
    6: loadImage('assets/village/6.png'),
    7: loadImage('assets/village/7.png'),
    8: loadImage('assets/village/8.png'),
    9: loadImage('assets/village/9.png'),
    10: loadImage('assets/village/10.png'),
    11: loadImage('assets/village/11.png'),
    12: loadImage('assets/village/12.png'),
    13: loadImage('assets/village/13.png'),
    14: loadImage('assets/village/14.png'),
    15: loadImage('assets/village/15.png'),
    16: loadImage('assets/village/16.png'),
    17: loadImage('assets/village/17.png'),
    18: loadImage('assets/village/18.png'),
    19: loadImage('assets/village/19.png'),
    20: loadImage('assets/village/20.png'),
    21: loadImage('assets/village/21.png'),
    22: loadImage('assets/village/22.png'),
    23: loadImage('assets/village/23.png'),
    24: loadImage('assets/village/24.png'),
    25: loadImage('assets/village/25.png'),
    26: loadImage('assets/village/26.png'),
    27: loadImage('assets/village/27.png'),
    28: loadImage('assets/village/28.png'),
    29: loadImage('assets/village/29.png'),
    30: loadImage('assets/village/30.png'),
    31: loadImage('assets/village/31.png'),
    32: loadImage('assets/village/32.png'),
    33: loadImage('assets/village/33.png'),
    34: loadImage('assets/village/34.png'),
    35: loadImage('assets/village/35.png'),
    36: loadImage('assets/village/36.png'),
    37: loadImage('assets/village/37.png'),
    38: loadImage('assets/village/38.png'),
    39: loadImage('assets/village/39.png'),
    40: loadImage('assets/village/40.png'),
    41: loadImage('assets/village/41.png'),
    42: loadImage('assets/village/42.png'),
    43: loadImage('assets/village/43.png'),
    44: loadImage('assets/village/44.png'),
    45: loadImage('assets/village/45.png'),
    46: loadImage('assets/village/46.png'),
    47: loadImage('assets/village/47.png'),
    48: loadImage('assets/village/48.png'),
    49: loadImage('assets/village/49.png'),
    50: loadImage('assets/village/50.png'),
    51: loadImage('assets/village/51.png'),
    52: loadImage('assets/village/52.png'),
    53: loadImage('assets/village/53.png'),
    54: loadImage('assets/village/54.png'),
    55: loadImage('assets/village/55.png'),
    56: loadImage('assets/village/56.png'),
    57: loadImage('assets/village/57.png'),
    58: loadImage('assets/village/58.png'),
    59: loadImage('assets/village/59.png'),
    60: loadImage('assets/village/60.png'),
    61: loadImage('assets/village/61.png'),
    62: loadImage('assets/village/62.png'),
    63: loadImage('assets/village/63.png'),
    64: loadImage('assets/village/64.png'),
    65: loadImage('assets/village/65.png'),
    66: loadImage('assets/village/66.png'),
    67: loadImage('assets/village/67.png'),
    68: loadImage('assets/village/68.png'),
    69: loadImage('assets/village/69.png'),
    70: loadImage('assets/village/70.png'),
    71: loadImage('assets/village/71.png'),
    72: loadImage('assets/village/72.png'),
    73: loadImage('assets/village/73.png'),
    74: loadImage('assets/village/74.png'),
    75: loadImage('assets/village/75.png'),
    76: loadImage('assets/village/76.png'),
    77: loadImage('assets/village/77.png'),
    78: loadImage('assets/village/78.png'),
    79: loadImage('assets/village/79.png'),
    80: loadImage('assets/village/80.png'),
    81: loadImage('assets/village/81.png'),
    82: loadImage('assets/village/82.png'),
    83: loadImage('assets/village/83.png'),
    84: loadImage('assets/village/84.png'),
    85: loadImage('assets/village/85.png'),
    86: loadImage('assets/village/86.png'),
    87: loadImage('assets/village/87.png'),
    88: loadImage('assets/village/88.png'),
    89: loadImage('assets/village/89.png'),
    90: loadImage('assets/village/90.png'),
    91: loadImage('assets/village/91.png'),
    92: loadImage('assets/village/92.png'),
    93: loadImage('assets/village/93.png'),
    94: loadImage('assets/village/94.png'),
    95: loadImage('assets/village/95.png'),
    96: loadImage('assets/village/96.png'),
    97: loadImage('assets/village/97.png'),
    98: loadImage('assets/village/98.png'),
    99: loadImage('assets/village/99.png'),
    100: loadImage('assets/village/100.png'),
    101: loadImage('assets/village/101.png'),
    102: loadImage('assets/village/102.png'),
    103: loadImage('assets/village/103.png'),
    104: loadImage('assets/village/104.png'),
    105: loadImage('assets/village/105.png'),
    106: loadImage('assets/village/106.png'),
    107: loadImage('assets/village/107.png'),
    108: loadImage('assets/village/108.png'),
    109: loadImage('assets/village/109.png'),
    110: loadImage('assets/village/110.png'),
    111: loadImage('assets/village/111.png'),
    112: loadImage('assets/village/112.png'),
    113: loadImage('assets/village/113.png'),
    114: loadImage('assets/village/114.png'),
    115: loadImage('assets/village/115.png'),
    116: loadImage('assets/village/116.png'),
    117: loadImage('assets/village/117.png'),
    118: loadImage('assets/village/118.png'),
    119: loadImage('assets/village/119.png'),
    120: loadImage('assets/village/120.png'),
    121: loadImage('assets/village/121.png'),
    122: loadImage('assets/village/122.png'),
    123: loadImage('assets/village/123.png'),
    124: loadImage('assets/village/124.png'),
    125: loadImage('assets/village/125.png'),
    126: loadImage('assets/village/126.png'),
    127: loadImage('assets/village/127.png'),
    128: loadImage('assets/village/128.png'),
    129: loadImage('assets/village/129.png'),
    130: loadImage('assets/village/130.png'),
    131: loadImage('assets/village/131.png'),
    132: loadImage('assets/village/132.png'),
    133: loadImage('assets/village/133.png'),
    134: loadImage('assets/village/134.png'),
    135: loadImage('assets/village/135.png'),
    136: loadImage('assets/village/136.png'),
    137: loadImage('assets/village/137.png'),
    138: loadImage('assets/village/138.png'),
    139: loadImage('assets/village/139.png'),
    140: loadImage('assets/village/140.png'),
    141: loadImage('assets/village/141.png'),
    142: loadImage('assets/village/142.png'),
    143: loadImage('assets/village/143.png'),
    144: loadImage('assets/village/144.png'),
    145: loadImage('assets/village/145.png'),
    146: loadImage('assets/village/146.png'),
    147: loadImage('assets/village/147.png'),
    148: loadImage('assets/village/148.png'),
    149: loadImage('assets/village/149.png'),
    150: loadImage('assets/village/150.png'),
    151: loadImage('assets/village/151.png'),
    152: loadImage('assets/village/152.png'),
    153: loadImage('assets/village/153.png'),
    154: loadImage('assets/village/154.png'),
    155: loadImage('assets/village/155.png'),
    156: loadImage('assets/village/156.png'),
    157: loadImage('assets/village/157.png'),
    158: loadImage('assets/village/158.png'),
    159: loadImage('assets/village/159.png'),
    160: loadImage('assets/village/160.png'),
    161: loadImage('assets/village/161.png'),
    162: loadImage('assets/village/162.png')
  };

  worldVillageDecorationTileDictionnary = {

    0: loadImage(''),
    1: loadImage('assets/village/1.png'),
    2: loadImage('assets/village/2.png'),
    3: loadImage('assets/village/3.png'),
    4: loadImage('assets/village/4.png'),
    5: loadImage('assets/village/5.png'),
    6: loadImage('assets/village/6.png'),
    7: loadImage('assets/village/7.png'),
    8: loadImage('assets/village/8.png'),
    9: loadImage('assets/village/9.png'),
    10: loadImage('assets/village/10.png'),
    11: loadImage('assets/village/11.png'),
    12: loadImage('assets/village/12.png'),
    13: loadImage('assets/village/13.png'),
    14: loadImage('assets/village/14.png'),
    15: loadImage('assets/village/15.png'),
    16: loadImage('assets/village/16.png'),
    17: loadImage('assets/village/17.png'),
    18: loadImage('assets/village/18.png'),
    19: loadImage('assets/village/19.png'),
    20: loadImage('assets/village/20.png'),
    21: loadImage('assets/village/21.png'),
    22: loadImage('assets/village/22.png'),
    23: loadImage('assets/village/23.png'),
    24: loadImage('assets/village/24.png'),
    25: loadImage('assets/village/25.png'),
    26: loadImage('assets/village/26.png'),
    27: loadImage('assets/village/27.png'),
    28: loadImage('assets/village/28.png'),
    29: loadImage('assets/village/29.png'),
    30: loadImage('assets/village/30.png'),
    31: loadImage('assets/village/31.png'),
    32: loadImage('assets/village/32.png'),
    33: loadImage('assets/village/33.png'),
    34: loadImage('assets/village/34.png'),
    35: loadImage('assets/village/35.png'),
    36: loadImage('assets/village/36.png'),
    37: loadImage('assets/village/37.png'),
    38: loadImage('assets/village/38.png'),
    39: loadImage('assets/village/39.png'),
    40: loadImage('assets/village/40.png'),
    41: loadImage('assets/village/41.png'),
    42: loadImage('assets/village/42.png'),
    43: loadImage('assets/village/43.png'),
    44: loadImage('assets/village/44.png'),
    45: loadImage('assets/village/45.png'),
    46: loadImage('assets/village/46.png'),
    47: loadImage('assets/village/47.png'),
    48: loadImage('assets/village/48.png'),
    49: loadImage('assets/village/49.png'),
    50: loadImage('assets/village/50.png'),
    51: loadImage('assets/village/51.png'),
    52: loadImage('assets/village/52.png'),
    53: loadImage('assets/village/53.png'),
    54: loadImage('assets/village/54.png'),
    55: loadImage('assets/village/55.png'),
    56: loadImage('assets/village/56.png'),
    57: loadImage('assets/village/57.png'),
    58: loadImage('assets/village/58.png'),
    59: loadImage('assets/village/59.png'),
    60: loadImage('assets/village/60.png'),
    61: loadImage('assets/village/61.png'),
    62: loadImage('assets/village/62.png'),
    63: loadImage('assets/village/63.png'),
    64: loadImage('assets/village/64.png'),
    65: loadImage('assets/village/65.png'),
    66: loadImage('assets/village/66.png'),
    67: loadImage('assets/village/67.png'),
    68: loadImage('assets/village/68.png'),
    69: loadImage('assets/village/69.png'),
    70: loadImage('assets/village/70.png'),
    71: loadImage('assets/village/71.png'),
    72: loadImage('assets/village/72.png'),
    73: loadImage('assets/village/73.png'),
    74: loadImage('assets/village/74.png'),
    75: loadImage('assets/village/75.png'),
    76: loadImage('assets/village/76.png'),
    77: loadImage('assets/village/77.png'),
    78: loadImage('assets/village/78.png'),
    79: loadImage('assets/village/79.png'),
    80: loadImage('assets/village/80.png'),
    81: loadImage('assets/village/81.png'),
    82: loadImage('assets/village/82.png'),
    83: loadImage('assets/village/83.png'),
    84: loadImage('assets/village/84.png'),
    85: loadImage('assets/village/85.png'),
    86: loadImage('assets/village/86.png'),
    87: loadImage('assets/village/87.png'),
    88: loadImage('assets/village/88.png'),
    89: loadImage('assets/village/89.png'),
    90: loadImage('assets/village/90.png'),
    91: loadImage('assets/village/91.png'),
    92: loadImage('assets/village/92.png'),
    93: loadImage('assets/village/93.png'),
    94: loadImage('assets/village/94.png'),
    95: loadImage('assets/village/95.png'),
    96: loadImage('assets/village/96.png'),
    97: loadImage('assets/village/97.png'),
    98: loadImage('assets/village/98.png'),
    99: loadImage('assets/village/99.png'),
    100: loadImage('assets/village/100.png'),
    101: loadImage('assets/village/101.png'),
    102: loadImage('assets/village/102.png'),
    103: loadImage('assets/village/103.png'),
    104: loadImage('assets/village/104.png'),
    105: loadImage('assets/village/105.png'),
    106: loadImage('assets/village/106.png'),
    107: loadImage('assets/village/107.png'),
    108: loadImage('assets/village/108.png'),
    109: loadImage('assets/village/109.png'),
    110: loadImage('assets/village/110.png'),
    111: loadImage('assets/village/111.png'),
    112: loadImage('assets/village/112.png'),
    113: loadImage('assets/village/113.png'),
    114: loadImage('assets/village/114.png'),
    115: loadImage('assets/village/115.png'),
    116: loadImage('assets/village/116.png'),
    117: loadImage('assets/village/117.png'),
    118: loadImage('assets/village/118.png'),
    119: loadImage('assets/village/119.png'),
    120: loadImage('assets/village/120.png'),
    121: loadImage('assets/village/121.png'),
    122: loadImage('assets/village/122.png'),
    123: loadImage('assets/village/123.png'),
    124: loadImage('assets/village/124.png'),
    125: loadImage('assets/village/125.png'),
    126: loadImage('assets/village/126.png'),
    127: loadImage('assets/village/127.png'),
    128: loadImage('assets/village/128.png'),
    129: loadImage('assets/village/129.png'),
    130: loadImage('assets/village/130.png'),
    131: loadImage('assets/village/131.png'),
    132: loadImage('assets/village/132.png'),
    133: loadImage('assets/village/133.png'),
    134: loadImage('assets/village/134.png'),
    135: loadImage('assets/village/135.png'),
    136: loadImage('assets/village/136.png'),
    137: loadImage('assets/village/137.png'),
    138: loadImage('assets/village/138.png'),
    139: loadImage('assets/village/139.png'),
    140: loadImage('assets/village/140.png'),
    141: loadImage('assets/village/141.png'),
    142: loadImage('assets/village/142.png'),
    143: loadImage('assets/village/143.png'),
    144: loadImage('assets/village/144.png'),
    145: loadImage('assets/village/145.png'),
    146: loadImage('assets/village/146.png'),
    147: loadImage('assets/village/147.png'),
    148: loadImage('assets/village/148.png'),
    149: loadImage('assets/village/149.png'),
    150: loadImage('assets/village/150.png'),
    151: loadImage('assets/village/151.png'),
    152: loadImage('assets/village/152.png'),
    153: loadImage('assets/village/153.png'),
    154: loadImage('assets/village/154.png'),
    155: loadImage('assets/village/155.png'),
    156: loadImage('assets/village/156.png'),
    157: loadImage('assets/village/157.png'),
    158: loadImage('assets/village/158.png'),
    159: loadImage('assets/village/159.png'),
    160: loadImage('assets/village/160.png'),
    161: loadImage('assets/village/161.png'),
    162: loadImage('assets/village/162.png')
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


  preloadHeroImages();


  setupWorlds();


  preloadEnemyImages();
  preloadNPCImages();
  preloadMiscImages();
};





/////////////////////////////////////////////
////////////FUNCTIONS FOR DRAW///////////////
/////////////////////////////////////////////

let textWidth = 400;
let textHeight = 100;

function draw() {
  if (!gameStarted) {
    // Start Of Intro.
    image(images[currentImageIndex], 0, 0, width, height);
  } else {
    // Music Stops Playing.
    if (currentMusic && currentMusic.isPlaying()) {
      currentMusic.stop();
    };

    // Function For The Game.
    //updateCamera();
    checkKeys(currentWorld);
    changeWorldIfNeeded();
    drawHearts();
    

    // If Hero Have Hearts Game is Not Over.
    if (hearts > 0) {
      if (currentWorld === 0) {
      image(backgroundTutoImage, 0, 0);
      drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
      drawFront(decorationWorlds[0], tileDecorationDictionnaries[0], worldsDecorationTileSizes[0]);
      image(enemyImage, xEnemy, yEnemy, wEnemy, hEnemy);
      // To Spawn NPC
      image(npcGrandSageImage, npcGrandSageX, npcGrandSageY, npcGrandSageWidth, npcGrandSageHeight);
      image(currentHeroImage, xHero, yHero, wHero, hHero);

      // Pour voire le Collider
      stroke(255, 0, 0);
      noFill();
      rect(xHero, yHero, wHero, hHero); 
      rect(xEnemy, yEnemy, wEnemy, hEnemy); 
      
      
      // Automatic Movement At Start.
      // One Tile = 20.
      if (animation && animationCounter < 80) {
        xHero += movementSpeed;
        animationCounter++;
        updateAnimation(myHeroRight);
      } else {
        animation = false;
      };

      // For Enemy.
      moveEnemy();
      checkEnemyCollision();
      handleCooldown();

      
      let textX = (width - textWidth) / 2;
      let textY = height - textHeight - 20;


      if (checkNPCInteraction()) {  
        fill(0);
        // Mettre une image a la place.
        rect(textX, textY, textWidth, textHeight);
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(255);
        text(dialoguesGrandSage[currentDialogueGrandSageIndex], textX + textWidth / 2, textY + textHeight / 2);

        // textSize(16);
        // fill(255);
        // text("Appuyez sur 'N' pour passer au prochain texte", width / 2 + cameraX, height - 80 + cameraY);
        
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
      drawHearts();
    } else {
      textSize(32);
      fill(255,0 ,0);
      text("Game Over - Retry? Press 'r'", width/2, height/2);
    }
  }
};