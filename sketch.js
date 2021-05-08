
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;
var ground;

function preload()
{
  	dustbin = loadImage("dustbin.jpeg");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper(100,100,70);

	dustbin1 = new Dustbin(width/2,470,150,20);
	dustbin2 = new Dustbin(470,430,20,100);
	dustbin3 = new Dustbin(330,430,20,100);

	ground = new Ground(600,height,1200,40);
	
  
}


function draw() {
  background("white");

  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  image(dustbin,320,310,170,170);
  
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position, {x: 50 , y: -100 });
	}
}








