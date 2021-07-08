
function preload(){
  ship_img=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  bg_img=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 
   
    //background
    bg=createSprite(200,200,400,10)
    bg.addImage(bg_img)
    bg.scale=0.25
    bg.velocityX=-2;
   // bg.x=bg.width/10

     //Ship sprite
     ship=createSprite(130,200,10,10);
     ship.addAnimation("sea",ship_img)
     ship.scale=0.25;
}

function draw() {
  background("blue");

  
  console.log(bg.x)
  console.log(bg.width)
  if(bg.x<0){
    bg.x=bg.width/10;
  }
 drawSprites();
}