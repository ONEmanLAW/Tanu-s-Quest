/////////////////////////////////////////////
///////////VARIABLES FOR HERO////////////////
/////////////////////////////////////////////

//Spawn of Hero.
let xHero = 17 * worldTempleTileSize;
let yHero = 7 * worldTempleTileSize;

// Size of Hero.
let wHero = worldTempleTileSize;
let hHero = worldTempleTileSize;

let potions = 0;


function adjustHeroSize(currentWorld) {
  wHero = worldsTileSizes[currentWorld];
  hHero = worldsTileSizes[currentWorld];
}

// Animation for Hero.
let heroSpeed = 7;

let myHeroRight = [];
let myHeroLeft = [];

let myHeroVillageLeft = [];
let myHeroVillageRight = [];
let myHeroVillageBottom = [];
let myHeroVillageTop = [];
let myHeroVillageIdleBottom = [];
let myHeroVillageIdleLeft = [];
let myHeroVillageIdleRight = [];
let myHeroVillageIdleTop = [];
let myHeroIdleRight = [];
let myHeroIdleLeft = [];
let myHeroDeath = [];
let myHeroAttaqueRight = [];
let myHeroAttaqueLeft = [];
let currentIndex = 0;
let currentVillageIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;
let currentHeroVillageImage = 0;


// Mouvement Automatique Peronnage. Temple
let animationCounter = 0;
let animation = true;
let movementSpeed = worldTempleTileSize / 16;

// Movement automatique arrivée au village
let animationCounterVillage = 0;
let animationVillage = true;
let movementSpeedVillage = worldVillageTileSize / 16;

// Movement automatique arrivée au Boss
let animationCounterBoss = 0;
let animationBoss = true;
let movementSpeedBoss = worldBossTileSize / 16;

















// let isAttacking = false;
// let attackDirection = 'right'; // Par défaut, le héros regarde vers la droite

// // Fonction pour détecter l'orientation du héros
// function detectDirection() {
//   // Vérifier si le joueur a appuyé sur les touches de déplacement
//   if (keyIsDown(68)) {
//     attackDirection = 'right';
//   } else if (keyIsDown(81)) {
//     attackDirection = 'left';
//   }
// }

// // Fonction pour gérer l'attaque
// function attack() {
//   isAttacking = true;
  
//   // Sauvegarder la position x et y du héros avant l'attaque
//   let originalX = xHero;
  
//   // Sauvegarder la largeur du héros avant l'attaque
//   let originalWidth = wHero;
  
//   if (attackDirection === 'right') {
//     wHero *= 2; // Augmente la largeur de wHero pour une attaque vers la droite
//   } else if (attackDirection === 'left') {
//     wHero *= -2; // Inverse la largeur de wHero pour une attaque vers la gauche
//   }
  
//   // Réinitialiser la position du héros après l'attaque
//   xHero = originalX;
// }

// // Fonction pour détecter les collisions entre le héros et l'ennemi pendant l'attaque
// function checkCollisionAttack() {
//   if (isAttacking) {
//     let attackX;

//     // Calculer la position de l'attaque en fonction de la direction
//     if (attackDirection === 'right') {
//       attackX = xHero + wHero;
//     } else if (attackDirection === 'left') {
//       // Ajuster la position de l'attaque pour une attaque à gauche
//       attackX = xHero + wHero;

//     }

//     // Vérifier si l'ennemi est touché par l'attaque
//     if (
//       attackX < xEnemy2 + wEnemy2 &&
//       attackX > xEnemy2 &&
//       attackY < yEnemy2 + hEnemy2 &&
//       attackY > yEnemy2
//     ) {
//       // L'attaque a touché l'ennemi, faire disparaître l'ennemi
//       // Remplacer cette logique par votre code pour supprimer l'ennemi
//       xEnemy2 = -1000; // Déplacer l'ennemi hors de l'écran pour le faire disparaître
//       yEnemy2 = -1000;
//     }
//   }
// }



















function checkHeroOutOfBounds() {
  if (yHero > 14 * 80) {
    hearts -= 3;
    gameOver = true;
  }
}















































function preloadHeroImages() {
  // Right Hero Images
  hero0 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_01.png');
  myHeroRight.push(hero0);
  hero1 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_02.png');
  myHeroRight.push(hero1);
  hero2 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_03.png');
  myHeroRight.push(hero2);
  hero3 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_04.png');
  myHeroRight.push(hero3);
  hero4 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_05.png');
  myHeroRight.push(hero4);
  hero5 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_06.png');
  myHeroRight.push(hero5);
  hero6 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_07.png');
  myHeroRight.push(hero6);
  hero7 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_08.png');
  myHeroRight.push(hero7);
  hero8 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_09.png');
  myHeroRight.push(hero8);
  hero9 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_10.png');
  myHeroRight.push(hero9);
  hero10 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_11.png');
  myHeroRight.push(hero10);
  hero11 = loadImage('characters/hero/assets/myHeroRight/hero_plateforme_marche_droite_12.png');
  myHeroRight.push(hero11);
  


  // Left Hero Images
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_01.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_02.png')); 
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_03.png')); 
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_04.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_05.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_06.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_07.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_08.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_09.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_10.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_11.png'));
  myHeroLeft.push(loadImage('characters/hero/assets/myHeroLeft/hero_plateforme_marche_gauche_12.png'));

  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle1.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle2.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle3.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle4.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle5.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle6.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle7.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle8.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle9.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle10.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle11.png'));
  myHeroIdleRight.push(loadImage('characters/hero/assets/myHeroIdleRight/hero_plateforme_idle12.png'));


  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche1.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche2.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche3.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche4.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche5.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche6.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche7.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche8.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche9.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche10.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche11.png'));
  myHeroIdleLeft.push(loadImage('characters/hero/assets/myHeroIdleLeft/hero_plateforme_idle_gauche12.png'));

  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort1.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort2.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort3.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort4.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort5.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort6.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort7.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort8.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort9.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort10.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort11.png'));
  // myHeroDeath.push(loadImage('characters/hero/assets/myHeroDeath/hero_plateforme_mort12.png'));

  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite1.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite2.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite3.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite4.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite5.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite6.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite7.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite8.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite9.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite10.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite11.png'));
  myHeroAttaqueRight.push(loadImage('characters/hero/assets/myHeroAttaqueRight/hero_plateforme_attaque_droite12.png'));

  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche1.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche2.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche3.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche4.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche5.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche6.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche7.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche8.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche9.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche10.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche11.png'));
  myHeroAttaqueLeft.push(loadImage('characters/hero/assets/myHeroAttaqueLeft/hero_plateforme_attaque_gauche12.png'));
  
 
  currentHeroImage = hero0; // Définition de l'image de héros actuelle
}
























function preloadHeroVillageImages() {

  heroVillage0 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face1.png');
  myHeroVillageBottom.push(heroVillage0);
  heroVillage1 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face2.png');
  myHeroVillageBottom.push(heroVillage1);
  heroVillage2 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face3.png');
  myHeroVillageBottom.push(heroVillage2);
  heroVillage3 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face4.png');
  myHeroVillageBottom.push(heroVillage3);
  heroVillage4 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face5.png');
  myHeroVillageBottom.push(heroVillage4);
  heroVillage5 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face6.png');
  myHeroVillageBottom.push(heroVillage5);
  heroVillage6 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face7.png');
  myHeroVillageBottom.push(heroVillage6);
  heroVillage7 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face8.png');
  myHeroVillageBottom.push(heroVillage7);
  heroVillage8 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face9.png');
  myHeroVillageBottom.push(heroVillage8);
  heroVillage9 = loadImage('characters/hero/assets/myHeroVillageBottom/hero village marche face10.png');
  myHeroVillageBottom.push(heroVillage9);


  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos1.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos2.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos3.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos4.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos5.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos6.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos7.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos8.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos9.png'));
  myHeroVillageTop.push(loadImage('characters/hero/assets/myHeroVillageTop/hero village marche dos10.png'));





  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite1.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite2.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite3.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite4.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite5.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite6.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite7.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite8.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite9.png'));
  myHeroVillageRight.push(loadImage('characters/hero/assets/myHeroVillageRight/hero village marche droite10.png'));
  


  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche1.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche2.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche3.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche4.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche5.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche6.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche7.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche8.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche9.png'));
  myHeroVillageLeft.push(loadImage('characters/hero/assets/myHeroVillageLeft/hero village marche gauche10.png'));


  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle1.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle2.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle3.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle4.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle5.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle6.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle7.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle8.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle9.png'));
  myHeroVillageIdleBottom.push(loadImage('characters/hero/assets/myHeroVillageIdleBottom/hero_village_iddle10.png'));

  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche1.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche2.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche3.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche4.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche5.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche6.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche7.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche8.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche9.png'));
  myHeroVillageIdleLeft.push(loadImage('characters/hero/assets/myHeroVillageIdleLeft/hero_village_idle_gauche10.png'));

  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite1.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite2.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite3.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite4.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite5.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite6.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite7.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite8.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite9.png'));
  myHeroVillageIdleRight.push(loadImage('characters/hero/assets/myHeroVillageIdleRight/hero_village_idle_droite10.png'));
  
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos1.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos2.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos3.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos4.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos5.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos6.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos7.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos8.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos9.png'));
  myHeroVillageIdleTop.push(loadImage('characters/hero/assets/myHeroVillageIdleTop/hero_village_iddle_dos10.png'));
  
  






  currentHeroVillageImage = heroVillage0;
}


















// Variables pour le saut
let isJumping = false;
let jumpForce = -10;
let gravity = 0.5;
let yVelocity = 0;

function jump() {
  if (!isJumping) {
    isJumping = true;
    yVelocity = jumpForce;
  }
}





function applyGravity() {
  // Appliquer la gravité
  yVelocity += gravity;
  
  // Si le personnage est en train de sauter, mettre à jour sa position verticale
  if (isJumping) {
    yHero += yVelocity;
  }
  
  // Vérifier si le personnage va entrer en collision avec le sol lors du prochain déplacement
  let nextY = yHero + yVelocity;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld], nextY)) {
    // Si oui, arrêter le saut 5px avant la collision
    isJumping = false;
    yVelocity = 0;
    yHero = Math.floor(yHero / 80) * 80; // Arrondir à la tuile la plus proche
  }
}











function applyGravityTemple() {
  if (isJumping || yHero <= 7 * worldTempleTileSize) {
    yVelocity += gravity;
    yHero += yVelocity;
    
    if (yVelocity > 10) {
      yVelocity = 10;
    }
    
    if (yHero >= 7 * worldTempleTileSize) {
      yHero = 7 * worldTempleTileSize;
      isJumping = false;
      yVelocity = 0;
    }
  }
}








let isAttacking = false;
const attackDuration = 200;
const attackCooldown = 200;
let baseWidthHero = 80;

let attackAnimationFrame = 0;
let attackAnimationDirection = '';
let attackTimeout, cooldownTimeout;

function heroAttack() {
  if (!isAttacking) {
    isAttacking = true;
    attackAnimationFrame = 0;
    attackAnimationDirection = (lastHorizontalDirection === 'right') ? 'right' : 'left';

    // Play attack animation
    playAttackAnimation();

    // Set timeout to end the attack animation
    attackTimeout = setTimeout(() => {
      isAttacking = false;
      updateIdleAnimation(); // Return to idle animation
    }, attackDuration);

    // Set cooldown for next attack
    cooldownTimeout = setTimeout(() => {
      isAttacking = false;
    }, attackCooldown);
  }
}

function playAttackAnimation() {
  if (isAttacking) {
    let animationArray = (attackAnimationDirection === 'right') ? myHeroAttaqueRight : myHeroAttaqueLeft;
    currentHeroImage = animationArray[attackAnimationFrame];
    attackAnimationFrame = (attackAnimationFrame + 1) % animationArray.length;

    setTimeout(playAttackAnimation, attackDuration / animationArray.length);
  }
}

function updateIdleAnimation() {
  if (lastHorizontalDirection === 'right') {
    currentHeroImage = myHeroIdleRight[0];
  } else {
    currentHeroImage = myHeroIdleLeft[0];
  }
}
