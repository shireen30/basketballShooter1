var hoopImg,hoop;
var basketballImg,basketball;
var restartImg;
var restartButton;
var score=0;

function preload(){
hoopImg=loadImage("hoop.png")
basketballImg = loadImage("basketball.png");
restartImg=loadImage("restart.png");
}

function setup(){

  createCanvas(600,700);


restartButton=createButton("Restart");
restartButton.position(420,600);
//restartButton.size(50,50);
restartButton.mouseClicked(hitAgain)

 hoop=createSprite(300,10)
 hoop.addImage(hoopImg);
 hoop.scale=0.5
hoop.debug=false;
hoop.setCollider("circle",0,0,100);

 basketball = createSprite(300,400);
 basketball.addImage(basketballImg);
 basketball.scale = 0.2;
 basketball.debug=false;

 hoop.velocityX=5;
 edges=createEdgeSprites()
}

function hitAgain(){
  console.log("hit")
basketball.x=300;
basketball.y=400;

}

function draw(){
  background("green");

  textSize(20);
  fill("black")
  text("Score:"+score,500,50);
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
 if(basketball.isTouching(hoop)){
   score+=1;
   hoop.x=10

 }
  drawSprites();
}
