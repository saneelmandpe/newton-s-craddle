const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
var roof,rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5;
function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof=new Roof(700,80,600,50);
  World.add(world,roof);
  bob1=new Bob(400,600);
	bob2=new Bob(500,600);
	bob3=new Bob(600,600);
	bob4=new Bob(700,600);
	bob5=new Bob(800,600);
	rope1=new Rope(bob1.body,roof.body,-200,0);
  World.add(world,rope1);
  rope2=new Rope(bob2.body,roof.body,-100,0);
  World.add(world,rope2);
  rope3=new Rope(bob3.body,roof.body,0,0);
  World.add(world,rope3);
  rope4=new Rope(bob4.body,roof.body,100,0);
  World.add(world,rope4 );
  rope5=new Rope(bob5.body,roof.body,200,0);
  World.add(world,rope5 );
  
	
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("orange");
  Engine.update(engine); 
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:5000,y:0})
  }
}

 