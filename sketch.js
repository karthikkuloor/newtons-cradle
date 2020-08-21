
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Constraint=Matter.Constraint;
var hanger1,bob1,rope1,bob2,rope2,bob3,bob4,bob5,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

hanger1=new Hanger(400,200,200,20);
bob1=new Bob(375,335,40,40,);
bob2=new Bob(360,330,40,40);
bob3=new Bob(450,330,40,40);
bob4=new Bob(440,335,40,40);
bob5=new Bob(430,335,40,40);
rope1=new Rope(bob1.body,hanger1.body,bob1.diameter*-1,10);
rope2=new Rope(bob2.body,hanger1.body,bob2.diameter*-2,10);
rope3=new Rope(bob3.body,hanger1.body,bob3.diameter*2,10);
rope4=new Rope(bob4.body,hanger1.body,bob4.diameter*1,10);
rope5=new Rope(bob5.body,hanger1.body,bob5.diameter*0,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ifPressed();
  drawSprites();
 hanger1.display();
 bob1.display();
 bob2.display();
 rope1.display();
rope2.display();
rope3.display();
bob3.display();
bob4.display();
rope4.display();
bob5.display();
rope5.display();
 
	
}

function ifPressed(){
	if(keyCode===UP_ARROW){
		//console.log("boy");
		Body.applyForce(bob3.body,bob3.body.position,{x:100,y:-10});
	}
}


