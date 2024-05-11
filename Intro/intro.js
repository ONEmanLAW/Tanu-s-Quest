/////////////////////////////////////////////
////////VARIABLES FOR STARTING IMAGES////////
/////////////////////////////////////////////

let images = [];
let currentImageIndex = 0;
let scrollCanvas;
let introImagesEnd = false;

function introImages() {
  images.push(loadImage('Intro/images/image1.gif'));
  images.push(loadImage('Intro/images/image2.gif'));
  images.push(loadImage('Intro/images/image3.gif'));
  images.push(loadImage('Intro/images/image4.gif'));
  images.push(loadImage('Intro/images/image5.gif'));
  images.push(loadImage('Intro/images/image6.gif'));
};

