
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	

	engine = Engine.create();
	world = engine.world;

	log = new DustbinClass(500,565,200,20);
	log.shapeColor = color(255,0,0);
	log2 = new DustbinClass(400,525,20,100);
	log.shapeColor = color(255,0,0);
	log3 = new DustbinClass(600,525,20,100);
	log.shapeColor = color(255,0,0);
	
	ground = new GroundClass(400,600,800,20);
    
	

	//Create the Bodies Here.

	paper = new PaperClass(200,300,35);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  log.display();
  log2.display();
  log3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}