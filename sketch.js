var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(440,200,50,50);
  bullet.shapeColor = "white";
  bullet.debug = true;
  bullet.velocityX = 4;
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "yellow";
  wall.debug = true;

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

}

function draw() {

  console.log(hasCollided);

  background("blue");  


  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed/(thickness*thickness*thickness));
  
  
    if(damage>10){
      wall.shapeColor = "red";
    }
  
    if(damage<10){
      wall.shapeColor = "green";
    }
  
 
 
  }
  
  drawSprites();

}
  
 

  function hasCollided(bulletdummy,walldummy){
    bulletRightEdge = bulletdummy.x + bulletdummy.width;
    wallLeftEdge = walldummy.x;
    
    if(bulletRightEdge>=wallLeftEdge)
    {
    return true;
    }

    else{
      return false;
    }

  }