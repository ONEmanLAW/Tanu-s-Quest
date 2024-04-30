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
  worlds = [worldTempleBoard, worldVillageBoard, worldForetBoard, worldGrotteBoard, worldBossBoard, worldVillageBoard2, worldVillageBoard3];

  // Decoration Worlds
  decorationWorlds = [worldTempleDecorationBoard, worldVillageDecorationBoard, worldForetDecorationBoard, worldGrotteDecorationBoard, worldBossDecorationBoard, , worldVillageDecorationBoard3];

  // Collision Worlds
  collisonWorlds = [worldTempleCollisionBoard, worldVillageCollisionBoard, worldForetCollisionBoard, worldGrotteCollisionBoard, worldBossCollisionBoard, worldVillageCollisionBoard2, worldVillageCollisionBoard3,];

  // Tile Dictionaries
  tileDictionnaries = [worldTempleTileDictionnary, worldVillageTileDictionnary, worldForetTileDictionnary, worldGrotteTileDictionnary, worldBossTileDictionnary, worldVillageTileDictionnary2, worldVillageTileDictionnary3];

  // Tile Decoration Dictionaries
  tileDecorationDictionnaries = [worldTempleDecorationTileDictionnary, worldVillageDecorationTileDictionnary, worldForetDecorationTileDictionnary, worldGrotteDecorationTileDictionnary, worldBossDecorationTileDictionnary, worldVillageDecorationTileDictionnary2, worldVillageDecorationTileDictionnary3];

  // Worlds Tile Sizes
  worldsTileSizes = [worldTempleTileSize, worldVillageTileSize, worldForetTileSize, worldGrotteTileSize, worldBossTileSize, worldVillageTileSize2, worldVillageTileSize3];

  // Worlds Decoration Tile Sizes
  worldsDecorationTileSizes = [worldTempleDecorationTileSize, worldVillageDecorationTileSize, worldForetDecorationTileSize, worldGrotteDecorationTileSize, worldBossDecorationTileSize, worldVillageDecorationTileSize2, worldVillageDecorationTileSize3];
};