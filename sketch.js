
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var paper1;

//var downwall,rightwall,leftwall;
var ground1
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
	 
	// ground = createSprite(600,680,1600,20)
	//downwall = createSprite(600,460,200,20)
	//downwall.shapeColor = "red"

	//rightwall = createSprite(690,400,20,100)
	//rightwall.shapeColor = "red"

	//leftwall = createSprite(510,400,20,100)
	//leftwall.shapeColor = "red"
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(570,400,20,200)
	paper1 = new Paper(20,200,20)
	ground1 = new Ground(600,480,1600,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
dustbin1.display()
 paper1.display()
 ground1.display()
}

function keyPressed() {
	console.log("hi")
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
		console.log("lol")
	}
}

