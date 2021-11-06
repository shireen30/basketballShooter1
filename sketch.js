var hoopImg,hoop;
var basketballImg,basketball;

function preload(){
hoopImg=loadImage("hoop.png")
basketballImg = loadImage("basketball.png");
}

function setup(){

  createCanvas(600,700);
  hoop=createSprite(300,10)
 hoop.addImage(hoopImg);
 hoop.scale=0.5

 basketball = createSprite(300,400);
 basketball.addImage(basketballImg);
 basketball.scale = 0.2;

 hoop.velocityX=5;
 edges=createEdgeSprites()
}

function draw(){
  background("green");

  //moving  the basketball with the arrow keys
  if(keyDown("UP_ARROW")){
    basketball.velocityY = -19;
  }
  if(keyDown("LEFT_ARROW")){
    basketball.x = basketball.x-5;
  }
  if(keyDown("RIGHT_ARROW")){
    basketball.x=basketball.x+5;
  }
//fixing the depth to make the hoop more prominent
  hoop.depth=basketball.depth+1
 hoop.bounceOff(edges[1]);
 hoop.bounceOff(edges[0]);

 if(frameCount%100==0){
var rand=Math.round(random(1,3));
console.log(frameCount)
if(rand>1){
  hoop.velocityX=-7;
}
else{
  hoop.velocityX=7;
}
 }
  drawSprites();
}
