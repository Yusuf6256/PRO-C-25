
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,2000,10);
	dustbinObj=new Dustbin(1200,650);

	paper = new Paper(300, 550, 60,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paper.display();
  groundObject.display();
  dustbinObj.display();

  
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ 
		Matter.Body.applyForce(paper.body,paper.body.position,{x:550,y:-1200}); 
	}
}
