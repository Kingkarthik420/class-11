
var trex ,trex_running;
var edges;
var ground;
var invis
function preload(){
  //load the images nad animations
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
groundimg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  //create the sprites, creating groups, createing edges
  //create a trex sprite

 trex = createSprite(70,156,100,50);
  trex.addAnimation("run",trex_running);
  trex.scale= 0.4 
 ground = createSprite(300,175,600,10)
 ground.addImage("xyz",groundimg)
  ground.velocityX = -5;
 
invis =createSprite(40,185,600,10)
invis.visible=false
 edges = createEdgeSprites();

}

function draw(){
  //working of the game
  background("lightgrey")
  if(keyDown("space") && trex.y>150){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY +1.0

if(ground.x<0){
  ground.x = ground.width/2;
}





trex.collide(invis);

  drawSprites();
}
