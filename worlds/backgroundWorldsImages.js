/////////////////////////////////////////////
////////FUNCTION BACKGROUND IMAGES///////////
/////////////////////////////////////////////

function preloadBackgroundImages() {
  backgroundTutoImage = loadImage('worlds/assets/temple/fondTemple.jpg',() => {
      backgroundTutoImage.resize(1980, 1152);
  });

  backgroundForetImage = loadImage('worlds/assets/foretEnchanter/fondForet.jpg',() => {
      backgroundForetImage.resize(16000, 1120);
  });

  backgroundGrotteImage = loadImage('worlds/assets/grotteTenebreuse/fondGrotteLong.jpg',() => {
      backgroundGrotteImage.resize(16000, 1120);
  });

  backgroundBossImage = loadImage('worlds/assets/boss/fondBoss.jpg',() => {
      backgroundBossImage.resize(3648, 1056);
  });  
};
