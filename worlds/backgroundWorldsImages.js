/////////////////////////////////////////////
////////FUNCTION BACKGROUND IMAGES///////////
/////////////////////////////////////////////

function preloadBackgroundImages() {
  backgroundTutoImage = loadImage('assets/tuto/fondTutorielTest.jpg',() => {
      backgroundTutoImage.resize(width, height);
  });

  backgroundForetImage = loadImage('assets/foretEnchanter/fondForet.jpg',() => {
      backgroundForetImage.resize(width, height);
  });

  backgroundGrotteImage = loadImage('assets/grotteTenebreuse/fondGrotteTenebreuseTest.jpg',() => {
      backgroundGrotteImage.resize(width, height);
  });

  backgroundBossImage = loadImage('assets/boss/fondBoss.jpg',() => {
      backgroundBossImage.resize(width, height);
  });  
};