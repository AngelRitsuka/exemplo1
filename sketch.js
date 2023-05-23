const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;

var slingShot; //corda

var fruit,cesta; //imagens
var backgroundImg ;

function preload()
{
  backgroundImg = loadImage("background.png");
  fruit=loadImage("melon.png");
  cesta=loadImage("basket.png")
}

function setup() 
{
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(450,390,900,20);
  
 

  //Desafio1:
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

//Desafio2
  slingShot = new Slingshot(this.ball,{x:100, y:100}); //corda

}
function draw() {
  background(backgroundImg); 
 
  Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  cesta.scale=.025;


  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(cesta,450,270)

  slingShot.display();
}

//segurar e solta (estilingue)
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  slingShot.fly();

}


