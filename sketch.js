 var angle = 0;

function preload() {
img1 = loadImage("earth.png");
img2 = loadImage("sun.png");
}

function setup() {
  createCanvas(1200,1200);
  sun = createSprite(0, 0, 50, 50);
  sun.addImage("sun",img2);
  sun.scale = 0.5;
  sun.setCollider("circle",0,0,200);
  sun.debug = true;

  earth = createSprite(500, 50, 50, 50);
  earth.addImage("earth",img1);
  earth.scale = 0.1;
}

function draw() {
  background(255,255,255);  

angleMode(DEGREES);  
translate(400,200);
rotate(angle);
angle = angle + 1;
if(frameCount %10 === 0) {
  sun.scale = sun.scale + 0.02;
}

if(earth.isTouching(sun)) {
  earth.destroy();
}

  drawSprites();
}