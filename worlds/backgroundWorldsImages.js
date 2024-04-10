/////////////////////////////////////////////
////////FUNCTION BACKGROUND IMAGES///////////
/////////////////////////////////////////////

function preloadBackgroundImages() {
  backgroundTutoImage = loadImage('worlds/assets/temple/fondTemple.jpg',() => {
      backgroundTutoImage.resize(width, height);
  });

  backgroundForetImage = loadImage('worlds/assets/foretEnchanter/fondForet.jpg',() => {
      backgroundForetImage.resize(width, height);
  });

  backgroundGrotteImage = loadImage('worlds/assets/grotteTenebreuse/fondGrotteTenebreuseTest.jpg',() => {
      backgroundGrotteImage.resize(width, height);
  });

  backgroundBossImage = loadImage('assets/boss/fondBoss.jpg',() => {
      backgroundBossImage.resize(width, height);
  });  
};