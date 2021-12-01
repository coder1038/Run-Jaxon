
var path,pathimage;
var boy,boyimage
var invisibleLeft,invisibleRight


function preload(){

  //pre-load images
  pathimage=loadImage('path.png')
  boyimage=loadAnimation('Runner-1.png','Runner-2.png')

}

function setup(){

  createCanvas(400,400);

  //create sprites here

  path=createSprite(200,100,20,60)
  path.addImage(pathimage)
  path.velocityY=4

  boy=createSprite(200,340,2,2)
  boy.addAnimation("running", boyimage)
  boy.scale=0.07
  
  //creating invisible ground
  invisibleLeft = createSprite(70,200,10,400);
  invisibleLeft.visible = false;

  invisibleRight = createSprite(340,200,10,400);
  invisibleRight.visible = false;
   
  
}

function draw() {
  
  background(100);

  if(path.y>400){
    
    path.y=0
  }

  boy.x=mouseX

  
  boy.collide(invisibleLeft);
  boy.collide(invisibleRight);

  
  drawSprites()
}
