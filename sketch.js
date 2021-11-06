
var hoopImg,hoop;

function preload(){
hoopImg=loadImage("hoop.png")
}

function setup(){

  createCanvas(500,700);
  hoop=createSprite(250,10)
 hoop.addImage(hoopImg);
 hoop.scale=0.5

}

function draw(){
  background("green");
  drawSprites();
}