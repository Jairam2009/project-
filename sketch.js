var car ,wall
var speed ,weight
var deformation

function setup() {
  createCanvas(1600,400);
  speed =random(55,90);
  weight =random(400,1500);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  car.velocityX =speed;
  deformation = 0.5*weight*speed*speed/22500

}
function draw() {
  background(255,255,255);  
  if(deformation=  100){
  car.shapecolor ="red";
  }
  drawSprites();
}













