var background,backgroundImg;
var astronaut;
var sleep,bath,brush,drink,eat,move,gym;



function preload(){
  backgroundImg = loadImage("image/iss.png")
  sleep = loadAnimation("image/sleep")
  bath = loadAnimation("image/bath1.png","image/bath2.png")
  brush = loadAnimation("image/brush.png")
  drink=loadAnimation("image/drink1.png","image/drink2.png")
  eat = loadAnimation("image/eat1.png","image/eat2.png")
  move = loadAnimation("image/move.png","image/move1.png")
  gym = loadAnimation("image/gym1.png","image/gym2.png")
}




function setup() {
  createCanvas(800,400);

astronaut=createSprite(300,230)
astronaut.addAnimation("sleeping",sleep)
astranaut.scale=0.1;

}

function draw() {
  background(backgroundImg);
 
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym)
    astronaut.changeAnimation("gyming")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("M")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("move")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  drawSprites();
  Text("press arrows key and key m to see his daily routine",400,100);
  TextSize(24)
}