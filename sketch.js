var car,wall,speed,weight
function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(50,90);
  weight=random(400,1500);
  car.velocityX=speed
  wall=createSprite(700,200,60,height/2)
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<car.width/2+wall.width/2)
  {car.velocityX=0
 var t=0.5*speed*weight*speed/22500
if(t>180)
{car.shapeColor="red"}
if(t<100)
{car.shapeColor="black"}
if(t>100&&t<180)
{car.shapeColor="pink"}}
  drawSprites();
}