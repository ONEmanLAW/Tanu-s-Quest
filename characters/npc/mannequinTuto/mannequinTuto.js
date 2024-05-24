let mannequinImage;

let mannequinX = 13 * worldTempleTileSize; 
let mannequinY = 7 * worldTempleTileSize; 
let mannequinWidth = worldTempleTileSize; 
let mannequinHeight = worldTempleTileSize; 

let mannequinGif;
let canAttackMannequin = true;
let isMannequinAnimating = false;
let hitSound;

function preloadNPCImages() {
  mannequinImage = loadImage('characters/npc/mannequinTuto/mannequinTuto.png');
  mannequinGif = createImg('epouvantail.gif', 'mannequin animation');
  mannequinGif.size(mannequinWidth, mannequinHeight); // Redimensionner le GIF
  mannequinGif.position(mannequinX, mannequinY); // Positionner le GIF
  mannequinGif.hide(); // Pour masquer l'élément GIF initialement
}

function checkCollisionWithMannequin() {
  if (isAttacking && canAttackMannequin) {
    // Calculer la distance entre le héros et le mannequin
    let distance = dist(xHero, yHero, mannequinX, mannequinY);

    // Vérifier si la distance est inférieure à la somme des demi-largeurs des deux objets
    if (distance < (wHero / 2 + mannequinWidth / 2)) {
      // Jouer le son de frappe
      hitSound.play();

      // Lancer l'animation du mannequin immédiatement
      startMannequinAnimation();

      // Définir un délai de 500 ms avant de cacher le GIF
      setTimeout(hideMannequinAnimation, 300);

      // Mettre le cooldown pour éviter l'animation immédiate répétée
      canAttackMannequin = false;
      setTimeout(() => {
        canAttackMannequin = true;
      }, 200); // 2 secondes de cooldown avant de pouvoir relancer l'animation
    }
  }
}

// Fonction pour démarrer l'animation du mannequin
function startMannequinAnimation() {
  isMannequinAnimating = true;
  mannequinGif.position(mannequinX, mannequinY); // Assurer que la position est correcte
  mannequinGif.size(mannequinWidth, mannequinHeight); // Assurer que la taille est correcte
  mannequinGif.show();
}

// Fonction pour cacher l'animation du mannequin
function hideMannequinAnimation() {
  mannequinGif.hide();
  isMannequinAnimating = false;
}