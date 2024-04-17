/////////////////////////////////////////////
////////////FUNCTION VARIABLES///////////////
/////////////////////////////////////////////

function setupWorldVariables() {
  currentWorld = 1;

  worlds = [];
  decorationWorlds = [];
  collisonWorlds = []; 

  tileDictionnaries = [];
  worldsTileSizes = [];
};

/////////////////////////////////////////////
///////////FUNCTION WORLDS SETUP/////////////
/////////////////////////////////////////////

function setupWorlds() {
  // Worlds
  worlds = [worldTempleBoard, worldVillageBoard, worldForetBoard, worldGrotteBoard, worldBossBoard];

  // Decoration Worlds
  decorationWorlds = [worldTempleDecorationBoard, worldVillageDecorationBoard, worldForetDecorationBoard, worldGrotteDecorationBoard, worldBossDecorationBoard];

  // Collision Worlds
  collisonWorlds = [worldTempleCollisionBoard, worldVillageCollisionBoard, worldForetCollisionBoard, worldGrotteCollisionBoard, worldBossCollisionBoard];

  // Tile Dictionaries
  tileDictionnaries = [worldTempleTileDictionnary, worldVillageTileDictionnary, worldForetTileDictionnary, worldGrotteTileDictionnary, worldBossTileDictionnary];

  // Tile Decoration Dictionaries
  tileDecorationDictionnaries = [worldTempleDecorationTileDictionnary, worldVillageDecorationTileDictionnary, worldForetDecorationTileDictionnary, worldGrotteDecorationTileDictionnary, worldBossDecorationTileDictionnary];

  // Worlds Tile Sizes
  worldsTileSizes = [worldTempleTileSize, worldVillageTileSize, worldForetTileSize, worldGrotteTileSize, worldBossTileSize];

  // Worlds Decoration Tile Sizes
  worldsDecorationTileSizes = [worldTempleDecorationTileSize, worldVillageDecorationTileSize, worldForetDecorationTileSize, worldGrotteDecorationTileSize, worldBossDecorationTileSize];
};