/////////////////////////////////////////////
////////VARIABLES FOR STARTING IMAGES////////
/////////////////////////////////////////////

let images = [];
let currentImageIndex = 0;
let scrollCanvas;
let introImagesEnd = false;

function introImages() {
  images.push(loadImage('Intro/images/image1.jpg'));
  images.push(loadImage('Intro/images/image2.jpg'));
  images.push(loadImage('Intro/images/image3.jpg'));
  images.push(loadImage('Intro/images/image4.jpg'));
  images.push(loadImage('Intro/images/image5.jpg'));
  images.push(loadImage('Intro/images/image6.jpg'));
};

