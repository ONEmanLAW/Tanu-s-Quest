/////////////////////////////////////////////
////////FUNCTION BACKGROUND IMAGES///////////
/////////////////////////////////////////////

function preloadBackgroundImages() {
  backgroundTutoImage = loadImage('worlds/assets/temple/fondTemple.jpg',() => {
      backgroundTutoImage.resize(width, height);
  });

  backgroundForetImage = loadImage('worlds/assets/foretEnchanter/fondForet.jpg',() => {
      backgroundForetImage.resize(worldWidth, worldHeight);
  });

  backgroundGrotteImage = loadImage('worlds/assets/grotteTenebreuse/fondGrotteLong.jpg',() => {
      backgroundGrotteImage.resize(worldwidth, worldheight);
  });

  backgroundBossImage = loadImage('worlds/assets/boss/fondBoss.jpg',() => {
      backgroundBossImage.resize(width, height);
  });  
};
