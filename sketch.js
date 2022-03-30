var spaceShip
var UFO
var spaceimg
var space
var meteor
var meteorimg

function preload() {
  spaceimg = loadImage("space.png")
}

function setup() {
  createCanvas(1000,700);
  space = createSprite(500,350);
  space.addImage(spaceimg);


  rectMode(CENTER);
  
}

function draw() 
{
  background(51);
  
  drawSprites();
}


