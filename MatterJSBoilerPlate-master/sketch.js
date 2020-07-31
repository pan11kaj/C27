
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
var ground,ball,ball2,ball3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(270,200,200,10);     
	 ball =  new Ball(220,300,30); 
	 ball2 =  new Ball(250,300,30); 
	 ball3 =  new Ball(280,300,30); 
	 ball4 =  new Ball(310,300,30); 
	 ball5 =  new Ball(340,300,30); 
	 rope1 = new Rope(ball.body,ground.body2,);
	 rope2 = new Rope(ground.body,ball2.body);
	 rope3 = new Rope(ground.body,ball3.body);
	 rope4 = new Rope(ground.body,ball4.body);
	 rope5 = new Rope(ground.body,ball5.body);
	 
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  

  ground.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



