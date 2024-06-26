// Village World.
let worldVillageTileDictionnary3 = {};
let worldVillageTileSize3 = 112;

let worldVillageBoard3 = [
  [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 136, 62, 19, 19, 19, 19, 19, 19, 18, 21, 21, 21, 21, 21, 131, 132, 132, 132, 132, 132, 133, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
  [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 137, 16, 19, 19, 19, 19, 19, 19, 18, 21, 21, 21, 21, 21, 136, 255, 256, 257, 258, 259, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
  [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 20, 137, 138, 138, 22, 23, 138, 138, 139, 21, 21, 21, 21, 21, 136, 250, 251, 252, 253, 254, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
  [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 28, 29, 21, 21, 21, 21, 21, 21, 21, 21, 136, 245, 246, 247, 248, 249, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
  [21, 21, 21, 21, 21, 131, 132, 132, 132, 132, 132, 132, 132, 132, 132, 34, 35, 132, 132, 132, 132, 132, 132, 132, 132, 37, 56, 19, 276, 277, 24, 38, 132, 132, 132, 132, 133, 21, 21, 21, 21, 21],
  [21, 21, 21, 21, 21, 136, 19, 19, 272, 19, 19, 19, 273, 19, 19, 118, 119, 19, 19, 19, 19, 272, 19, 19, 19, 44, 47, 47, 52, 53, 47, 45, 19, 19, 19, 269, 135, 133, 21, 21, 21, 21],
  [132, 133, 21, 21, 21, 136, 19, 19, 19, 19, 19, 42, 19, 19, 71, 118, 119, 148, 149, 150, 151, 19, 19, 19, 19, 19, 19, 267, 118, 119, 19, 70, 195, 196, 197, 198, 19, 18, 21, 21, 21, 21],
  [19, 135, 132, 133, 21, 137, 138, 16, 62, 19, 19, 19, 19, 115, 116, 124, 119, 144, 145, 146, 147, 70, 19, 19, 19, 273, 19, 19, 118, 119, 19, 19, 191, 192, 193, 194, 267, 18, 21, 21, 21, 21],
  [19, 19, 19, 18, 21, 21, 21, 136, 19, 268, 19, 19, 267, 118, 126, 121, 122, 140, 141, 142, 143, 115, 116, 116, 116, 116, 116, 116, 124, 119, 267, 19, 187, 188, 189, 190, 19, 18, 21, 21, 21, 21],
  [19, 19, 19, 18, 21, 21, 21, 136, 19, 19, 42, 19, 19, 118, 119, 19, 62, 19, 19, 19, 268, 118, 126, 121, 121, 121, 121, 121, 121, 122, 19, 19, 19, 19, 19, 19, 17, 139, 21, 21, 21, 21],
  [19, 19, 19, 25, 26, 26, 26, 130, 116, 116, 116, 116, 116, 124, 123, 116, 116, 116, 116, 116, 116, 124, 123, 117, 19, 19, 19, 19, 19, 19, 19, 19, 273, 19, 19, 19, 18, 21, 21, 21, 21, 21],
  [19, 19, 19, 31, 32, 32, 32, 127, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 125, 126, 121, 121, 125, 119, 19, 70, 19, 273, 164, 165, 166, 167, 19, 19, 19, 19, 18, 21, 131, 132, 132, 132],
  [19, 19, 19, 18, 21, 21, 21, 136, 19, 19, 56, 211, 212, 213, 214, 19, 19, 19, 118, 119, 19, 19, 118, 123, 116, 116, 117, 19, 160, 161, 162, 163, 19, 267, 19, 17, 139, 21, 136, 19, 19, 19],
  [138, 138, 138, 139, 21, 21, 21, 136, 19, 19, 19, 207, 208, 209, 210, 267, 115, 116, 124, 119, 273, 19, 120, 121, 121, 125, 119, 271, 156, 157, 158, 159, 71, 19, 19, 18, 21, 21, 136, 19, 19, 19],
  [21, 21, 21, 21, 21, 21, 21, 136, 19, 19, 19, 203, 204, 205, 206, 19, 118, 126, 121, 122, 19, 19, 19, 19, 62, 118, 123, 116, 116, 116, 116, 116, 116, 116, 116, 128, 26, 26, 27, 19, 19, 19],
  [21, 21, 21, 21, 21, 131, 132, 40, 41, 41, 41, 41, 39, 19, 19, 62, 118, 119, 180, 181, 182, 183, 271, 19, 19, 118, 126, 121, 121, 121, 121, 121, 121, 121, 121, 129, 32, 32, 33, 19, 19, 19],
  [21, 21, 21, 21, 21, 136, 233, 234, 235, 236, 237, 238, 48, 19, 19, 19, 118, 119, 176, 177, 178, 179, 19, 19, 19, 118, 119, 19, 19, 19, 267, 19, 273, 19, 56, 18, 21, 21, 136, 19, 19, 70],
  [21, 21, 21, 21, 21, 136, 227, 228, 229, 230, 231, 232, 48, 24, 19, 19, 118, 119, 172, 173, 174, 175, 70, 17, 138, 90, 89, 138, 138, 138, 138, 16, 19, 19, 19, 18, 21, 21, 136, 19, 19, 19],
  [21, 21, 21, 21, 21, 136, 222, 223, 224, 225, 123, 116, 82, 116, 116, 116, 124, 119, 19, 19, 19, 56, 19, 18, 21, 91, 94, 21, 21, 21, 21, 136, 19, 19, 49, 18, 21, 21, 137, 16, 19, 19],
  [21, 21, 21, 21, 21, 136, 19, 19, 19, 120, 121, 121, 81, 121, 121, 121, 121, 122, 19, 19, 273, 17, 138, 139, 21, 91, 94, 21, 21, 21, 21, 137, 138, 138, 138, 139, 21, 21, 20, 137, 138, 138],
  [21, 21, 21, 21, 21, 136, 19, 19, 19, 70, 19, 19, 46, 138, 138, 138, 138, 16, 269, 19, 17, 139, 21, 21, 21, 91, 94, 21, 99, 110, 98, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
  [21, 21, 21, 21, 21, 137, 138, 138, 138, 138, 138, 138, 139, 21, 21, 21, 20, 137, 138, 138, 139, 21, 99, 110, 110, 92, 93, 110, 109, 88, 107, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
  [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 108, 88, 88, 88, 88, 88, 88, 88, 107, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
  [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 108, 88, 88, 88, 88, 88, 88, 88, 107, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21]
];

let worldVillageDecorationTileDictionnary3 = {};
let worldVillageDecorationTileSize3 = 112;

let worldVillageDecorationBoard3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 67, 0, 0, 63, 67, 0, 0, 0, 0, 0, 0, 0, 260, 261, 262, 263, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 76, 0, 0, 72, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 57, 61, 0, 0, 0, 0, 0, 0, 51, 0, 0, 0, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 63, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 152, 153, 154, 0, 0, 57, 61, 0, 0, 0, 0, 0, 0, 0, 0, 199, 200, 201, 0, 0, 0, 0, 0, 0, 0],
  [274, 275, 0, 0, 0, 0, 72, 76, 0, 69, 274, 275, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 67, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [111, 112, 59, 60, 0, 0, 0, 0, 0, 78, 63, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 76, 0, 0, 0, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [63, 64, 65, 66, 0, 0, 0, 0, 0, 0, 72, 76, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 274, 275, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [72, 73, 74, 75, 0, 0, 0, 0, 51, 0, 0, 0, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 67, 0, 0, 171, 78, 0, 0, 0, 57, 61, 0, 0, 0, 0, 0, 0],
  [57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 218, 0, 0, 0, 274, 275, 0, 0, 0, 0, 0, 0, 68, 72, 76, 0, 168, 169, 170, 0, 0, 0, 63, 67, 0, 0, 0, 274, 275, 59],
  [63, 64, 65, 66, 0, 0, 0, 0, 0, 0, 0, 215, 216, 217, 0, 0, 63, 67, 0, 0, 69, 0, 0, 0, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 76, 0, 0, 0, 111, 96, 97],
  [72, 73, 74, 75, 0, 0, 0, 0, 57, 61, 0, 0, 0, 0, 0, 0, 72, 76, 0, 0, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 64, 65],
  [0, 0, 0, 0, 0, 0, 0, 0, 63, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 186, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 0, 0, 0, 0, 72, 73, 74],
  [0, 0, 0, 0, 0, 0, 0, 0, 72, 76, 0, 0, 0, 0, 0, 0, 0, 0, 265, 184, 185, 0, 0, 0, 0, 43, 219, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 239, 240, 241, 242, 243, 244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 87, 220, 221, 266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 78, 83, 84, 85, 86, 50, 0, 0, 0, 274, 275, 0, 0, 0, 0, 0, 69, 274, 275],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 67, 0, 0, 0, 0, 0, 78, 63, 64],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 76, 0, 0, 0, 0, 0, 0, 72, 73],
  [0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 78, 0, 0, 0, 54, 55, 0, 0, 0, 0, 0, 0, 0, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 274, 275, 0, 0, 57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95, 112, 0, 0, 95, 96, 97, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 67, 0, 0, 63, 64, 65, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let worldVillageCollisionBoard3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 13, 5, 5, 5, 5, 5, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 3, 4, 2, 2, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 3, 4, 2, 2, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 8, 5, 7, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 13, 5, 5, 5, 5, 5, 5, 5, 5, 2, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 3, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 14, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 8, 14, 0, 0, 0, 0],
  [2, 2, 0, 0, 0, 3, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 0, 0, 4, 0, 0, 0, 0],
  [2, 2, 2, 2, 0, 2, 2, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 0, 0, 5, 7, 0, 0, 0, 5, 0, 0, 0, 0, 4, 2, 2, 0, 0, 4, 0, 0, 0, 0],
  [2, 2, 2, 2, 0, 0, 0, 3, 0, 0, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
  [5, 5, 5, 14, 2, 2, 2, 3, 2, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 4, 2, 2, 0, 0, 0, 5, 7, 4, 0, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 4, 2, 2, 0, 0, 5, 7, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 0, 0, 0, 0, 4, 2, 0, 2, 2, 2, 2],
  [2, 2, 2, 2, 0, 0, 0, 3, 0, 0, 0, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 3, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 2, 15, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 4, 2, 2, 2, 2, 0, 4, 0, 0, 0, 0, 0, 4, 2, 2, 0, 0, 5, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 3, 4, 2, 2, 5, 5, 0, 4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 2, 2, 2, 2, 3, 0, 0, 0, 4, 0, 0, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 3, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 2, 0, 0, 0, 3, 5, 7, 0, 4, 0, 0, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2],
  [0, 0, 0, 0, 0, 3, 5, 0, 0, 0, 2, 2, 4, 2, 2, 2, 2, 3, 0, 5, 4, 2, 0, 0, 2, 0, 0, 2, 4, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 304, 304, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


function setupTileDictionariesVillage3() {
 worldVillageTileDictionnary3 = {

  0: loadImage(''),
  16: loadImage('worlds/assets/village3/16.png'),
  17: loadImage('worlds/assets/village3/17.png'),
  18: loadImage('worlds/assets/village3/18.png'),
  19: loadImage('worlds/assets/village3/19.png'),
  20: loadImage('worlds/assets/village3/20.png'),
  21: loadImage('worlds/assets/village3/21.png'),
  22: loadImage('worlds/assets/village3/22.png'),
  23: loadImage('worlds/assets/village3/23.png'),
  24: loadImage('worlds/assets/village3/24.png'),
  25: loadImage('worlds/assets/village3/25.png'),
  26: loadImage('worlds/assets/village3/26.png'),
  27: loadImage('worlds/assets/village3/27.png'),
  28: loadImage('worlds/assets/village3/28.png'),
  29: loadImage('worlds/assets/village3/29.png'),
  30: loadImage('worlds/assets/village3/30.png'),
  31: loadImage('worlds/assets/village3/31.png'),
  32: loadImage('worlds/assets/village3/32.png'),
  33: loadImage('worlds/assets/village3/33.png'),
  34: loadImage('worlds/assets/village3/34.png'),
  35: loadImage('worlds/assets/village3/35.png'),
  36: loadImage('worlds/assets/village3/36.png'),
  37: loadImage('worlds/assets/village3/37.png'),
  38: loadImage('worlds/assets/village3/38.png'),
  39: loadImage('worlds/assets/village3/39.png'),
  40: loadImage('worlds/assets/village3/40.png'),
  41: loadImage('worlds/assets/village3/41.png'),
  42: loadImage('worlds/assets/village3/42.png'),
  44: loadImage('worlds/assets/village3/44.png'),
  45: loadImage('worlds/assets/village3/45.png'),
  46: loadImage('worlds/assets/village3/46.png'),
  47: loadImage('worlds/assets/village3/47.png'),
  48: loadImage('worlds/assets/village3/48.png'),
  49: loadImage('worlds/assets/village3/49.png'),
  52: loadImage('worlds/assets/village3/52.png'),
  53: loadImage('worlds/assets/village3/53.png'),
  56: loadImage('worlds/assets/village3/56.png'),
  62: loadImage('worlds/assets/village3/62.png'),
  70: loadImage('worlds/assets/village3/70.png'),
  71: loadImage('worlds/assets/village3/71.png'),
  81: loadImage('worlds/assets/village3/81.png'),
  82: loadImage('worlds/assets/village3/82.png'),
  88: loadImage('worlds/assets/village3/88.png'),
  89: loadImage('worlds/assets/village3/89.png'),
  90: loadImage('worlds/assets/village3/90.png'),
  91: loadImage('worlds/assets/village3/91.png'),
  92: loadImage('worlds/assets/village3/92.png'),
  93: loadImage('worlds/assets/village3/93.png'),
  94: loadImage('worlds/assets/village3/94.png'),
  98: loadImage('worlds/assets/village3/98.png'),
  99: loadImage('worlds/assets/village3/99.png'),
  107: loadImage('worlds/assets/village3/107.png'),
  108: loadImage('worlds/assets/village3/108.png'),
  109: loadImage('worlds/assets/village3/109.png'),
  110: loadImage('worlds/assets/village3/110.png'),
  115: loadImage('worlds/assets/village3/115.png'),
  116: loadImage('worlds/assets/village3/116.png'),
  117: loadImage('worlds/assets/village3/117.png'),
  118: loadImage('worlds/assets/village3/118.png'),
  119: loadImage('worlds/assets/village3/119.png'),
  120: loadImage('worlds/assets/village3/120.png'),
  121: loadImage('worlds/assets/village3/121.png'),
  122: loadImage('worlds/assets/village3/122.png'),
  123: loadImage('worlds/assets/village3/123.png'),
  124: loadImage('worlds/assets/village3/124.png'),
  125: loadImage('worlds/assets/village3/125.png'),
  126: loadImage('worlds/assets/village3/126.png'),
  127: loadImage('worlds/assets/village3/127.png'),
  128: loadImage('worlds/assets/village3/128.png'),
  129: loadImage('worlds/assets/village3/129.png'),
  130: loadImage('worlds/assets/village3/130.png'),
  131: loadImage('worlds/assets/village3/131.png'),
  132: loadImage('worlds/assets/village3/132.png'),
  133: loadImage('worlds/assets/village3/133.png'),
  134: loadImage('worlds/assets/village3/134.png'),
  135: loadImage('worlds/assets/village3/135.png'),
  136: loadImage('worlds/assets/village3/136.png'),
  137: loadImage('worlds/assets/village3/137.png'),
  138: loadImage('worlds/assets/village3/138.png'),
  139: loadImage('worlds/assets/village3/139.png'),
  140: loadImage('worlds/assets/village3/140.png'),
  141: loadImage('worlds/assets/village3/141.png'),
  142: loadImage('worlds/assets/village3/142.png'),
  143: loadImage('worlds/assets/village3/143.png'),
  144: loadImage('worlds/assets/village3/144.png'),
  145: loadImage('worlds/assets/village3/145.png'),
  146: loadImage('worlds/assets/village3/146.png'),
  147: loadImage('worlds/assets/village3/147.png'),
  148: loadImage('worlds/assets/village3/148.png'),
  149: loadImage('worlds/assets/village3/149.png'),
  150: loadImage('worlds/assets/village3/150.png'),
  151: loadImage('worlds/assets/village3/151.png'),
  156: loadImage('worlds/assets/village3/156.png'),
  157: loadImage('worlds/assets/village3/157.png'),
  158: loadImage('worlds/assets/village3/158.png'),
  159: loadImage('worlds/assets/village3/159.png'),
  160: loadImage('worlds/assets/village3/160.png'),
  161: loadImage('worlds/assets/village3/161.png'),
  162: loadImage('worlds/assets/village3/162.png'),
  163: loadImage('worlds/assets/village3/163.png'),
  164: loadImage('worlds/assets/village3/164.png'),
  165: loadImage('worlds/assets/village3/165.png'),
  166: loadImage('worlds/assets/village3/166.png'),
  167: loadImage('worlds/assets/village3/167.png'),
  172: loadImage('worlds/assets/village3/172.png'),
  173: loadImage('worlds/assets/village3/173.png'),
  174: loadImage('worlds/assets/village3/174.png'),
  175: loadImage('worlds/assets/village3/175.png'),
  176: loadImage('worlds/assets/village3/176.png'),
  177: loadImage('worlds/assets/village3/177.png'),
  178: loadImage('worlds/assets/village3/178.png'),
  179: loadImage('worlds/assets/village3/179.png'),
  180: loadImage('worlds/assets/village3/180.png'),
  181: loadImage('worlds/assets/village3/181.png'),
  182: loadImage('worlds/assets/village3/182.png'),
  183: loadImage('worlds/assets/village3/183.png'),
  187: loadImage('worlds/assets/village3/187.png'),
  188: loadImage('worlds/assets/village3/188.png'),
  189: loadImage('worlds/assets/village3/189.png'),
  190: loadImage('worlds/assets/village3/190.png'),
  191: loadImage('worlds/assets/village3/191.png'),
  192: loadImage('worlds/assets/village3/192.png'),
  193: loadImage('worlds/assets/village3/193.png'),
  194: loadImage('worlds/assets/village3/194.png'),
  195: loadImage('worlds/assets/village3/195.png'),
  196: loadImage('worlds/assets/village3/196.png'),
  197: loadImage('worlds/assets/village3/197.png'),
  198: loadImage('worlds/assets/village3/198.png'),
  203: loadImage('worlds/assets/village3/203.png'),
  204: loadImage('worlds/assets/village3/204.png'),
  205: loadImage('worlds/assets/village3/205.png'),
  206: loadImage('worlds/assets/village3/206.png'),
  207: loadImage('worlds/assets/village3/207.png'),
  208: loadImage('worlds/assets/village3/208.png'),
  209: loadImage('worlds/assets/village3/209.png'),
  210: loadImage('worlds/assets/village3/210.png'),
  211: loadImage('worlds/assets/village3/211.png'),
  212: loadImage('worlds/assets/village3/212.png'),
  213: loadImage('worlds/assets/village3/213.png'),
  214: loadImage('worlds/assets/village3/214.png'),
  222: loadImage('worlds/assets/village3/222.png'),
  223: loadImage('worlds/assets/village3/223.png'),
  224: loadImage('worlds/assets/village3/224.png'),
  225: loadImage('worlds/assets/village3/225.png'),
  226: loadImage('worlds/assets/village3/226.png'),
  227: loadImage('worlds/assets/village3/227.png'),
  228: loadImage('worlds/assets/village3/228.png'),
  229: loadImage('worlds/assets/village3/229.png'),
  230: loadImage('worlds/assets/village3/230.png'),
  231: loadImage('worlds/assets/village3/231.png'),
  232: loadImage('worlds/assets/village3/232.png'),
  233: loadImage('worlds/assets/village3/233.png'),
  234: loadImage('worlds/assets/village3/234.png'),
  235: loadImage('worlds/assets/village3/235.png'),
  236: loadImage('worlds/assets/village3/236.png'),
  237: loadImage('worlds/assets/village3/237.png'),
  238: loadImage('worlds/assets/village3/238.png'),
  245: loadImage('worlds/assets/village3/245.png'),
  246: loadImage('worlds/assets/village3/246.png'),
  247: loadImage('worlds/assets/village3/247.png'),
  248: loadImage('worlds/assets/village3/248.png'),
  249: loadImage('worlds/assets/village3/249.png'),
  250: loadImage('worlds/assets/village3/250.png'),
  251: loadImage('worlds/assets/village3/251.png'),
  252: loadImage('worlds/assets/village3/252.png'),
  253: loadImage('worlds/assets/village3/253.png'),
  254: loadImage('worlds/assets/village3/254.png'),
  255: loadImage('worlds/assets/village3/255.png'),
  256: loadImage('worlds/assets/village3/256.png'),
  257: loadImage('worlds/assets/village3/257.png'),
  258: loadImage('worlds/assets/village3/258.png'),
  259: loadImage('worlds/assets/village3/259.png'),
  267: loadImage('worlds/assets/village3/267.png'),
  268: loadImage('worlds/assets/village3/268.png'),
  269: loadImage('worlds/assets/village3/269.png'),
  270: loadImage('worlds/assets/village3/270.png'),
  271: loadImage('worlds/assets/village3/271.png'),
  272: loadImage('worlds/assets/village3/272.png'),
  273: loadImage('worlds/assets/village3/273.png'),
  276: loadImage('worlds/assets/village3/276.png'),
  277: loadImage('worlds/assets/village3/277.png'),
 };

 worldVillageDecorationTileDictionnary3 = {

  0: loadImage(''),
  43: loadImage('worlds/assets/village3/43.png'),
  50: loadImage('worlds/assets/village3/50.png'),
  51: loadImage('worlds/assets/village3/51.png'),
  54: loadImage('worlds/assets/village3/54.png'),
  55: loadImage('worlds/assets/village3/55.png'),
  57: loadImage('worlds/assets/village3/57.png'),
  58: loadImage('worlds/assets/village3/58.png'),
  59: loadImage('worlds/assets/village3/59.png'),
  60: loadImage('worlds/assets/village3/60.png'),
  61: loadImage('worlds/assets/village3/61.png'),
  63: loadImage('worlds/assets/village3/63.png'),
  64: loadImage('worlds/assets/village3/64.png'),
  65: loadImage('worlds/assets/village3/65.png'),
  66: loadImage('worlds/assets/village3/66.png'),
  67: loadImage('worlds/assets/village3/67.png'),
  68: loadImage('worlds/assets/village3/68.png'),
  69: loadImage('worlds/assets/village3/69.png'),
  72: loadImage('worlds/assets/village3/72.png'),
  73: loadImage('worlds/assets/village3/73.png'),
  74: loadImage('worlds/assets/village3/74.png'),
  75: loadImage('worlds/assets/village3/75.png'),
  76: loadImage('worlds/assets/village3/76.png'),
  77: loadImage('worlds/assets/village3/77.png'),
  78: loadImage('worlds/assets/village3/78.png'),
  79: loadImage('worlds/assets/village3/79.png'),
  80: loadImage('worlds/assets/village3/80.png'),
  83: loadImage('worlds/assets/village3/83.png'),
  84: loadImage('worlds/assets/village3/84.png'),
  85: loadImage('worlds/assets/village3/85.png'),
  86: loadImage('worlds/assets/village3/86.png'),
  87: loadImage('worlds/assets/village3/87.png'),
  95: loadImage('worlds/assets/village3/95.png'),
  96: loadImage('worlds/assets/village3/96.png'),
  97: loadImage('worlds/assets/village3/97.png'),
  102: loadImage('worlds/assets/village3/102.png'),
  103: loadImage('worlds/assets/village3/103.png'),
  104: loadImage('worlds/assets/village3/104.png'),
  105: loadImage('worlds/assets/village3/105.png'),
  106: loadImage('worlds/assets/village3/106.png'),
  111: loadImage('worlds/assets/village3/111.png'),
  112: loadImage('worlds/assets/village3/112.png'),
  113: loadImage('worlds/assets/village3/113.png'),
  114: loadImage('worlds/assets/village3/114.png'),
  152: loadImage('worlds/assets/village3/152.png'),
  153: loadImage('worlds/assets/village3/153.png'),
  154: loadImage('worlds/assets/village3/154.png'),
  155: loadImage('worlds/assets/village3/155.png'),
  168: loadImage('worlds/assets/village3/168.png'),
  169: loadImage('worlds/assets/village3/169.png'),
  170: loadImage('worlds/assets/village3/170.png'),
  171: loadImage('worlds/assets/village3/171.png'),
  184: loadImage('worlds/assets/village3/184.png'),
  185: loadImage('worlds/assets/village3/185.png'),
  186: loadImage('worlds/assets/village3/186.png'),
  199: loadImage('worlds/assets/village3/199.png'),
  200: loadImage('worlds/assets/village3/200.png'),
  201: loadImage('worlds/assets/village3/201.png'),
  202: loadImage('worlds/assets/village3/202.png'),
  215: loadImage('worlds/assets/village3/215.png'),
  216: loadImage('worlds/assets/village3/216.png'),
  217: loadImage('worlds/assets/village3/217.png'),
  218: loadImage('worlds/assets/village3/218.png'),
  219: loadImage('worlds/assets/village3/219.png'),
  220: loadImage('worlds/assets/village3/220.png'),
  221: loadImage('worlds/assets/village3/221.png'),
  239: loadImage('worlds/assets/village3/239.png'),
  240: loadImage('worlds/assets/village3/240.png'),
  241: loadImage('worlds/assets/village3/241.png'),
  242: loadImage('worlds/assets/village3/242.png'),
  243: loadImage('worlds/assets/village3/243.png'),
  244: loadImage('worlds/assets/village3/244.png'),
  260: loadImage('worlds/assets/village3/260.png'),
  261: loadImage('worlds/assets/village3/261.png'),
  262: loadImage('worlds/assets/village3/262.png'),
  263: loadImage('worlds/assets/village3/263.png'),
  264: loadImage('worlds/assets/village3/264.png'),
  265: loadImage('worlds/assets/village3/265.png'),
  266: loadImage('worlds/assets/village3/266.png'),
  274: loadImage('worlds/assets/village3/274.png'),
  275: loadImage('worlds/assets/village3/275.png'),
 };
};