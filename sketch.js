
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject, rope1, rope2, rope3, rope4, rope5;



function setup() {
	createCanvas(1600,1600);

	engine = Engine.create();
	world = engine.world;
  bobDiameter = 40;
  //Create the Bodies Here.
  startX=width/2
  startY=height*4+500

  bobObject1 = new Bob(startX-bobDiameter*2,startY);
	bobObject2 = new Bob(startX-bobDiameter,startY);
	bobObject3 = new Bob(startX,startY);
	bobObject4 = new Bob(startX+bobDiameter,startY);
  bobObject5 = new Bob(startX+bobDiameter*2,startY);
  
  roofObject = new Roof (width/2,height/4,width/7,20); 

  rope1 = new Rope(bobObject5.body, roofObject.body,-bobDiameter*2, 0);
  rope2 = new Rope(bobObject4.body, roofObject.body,-bobDiameter*1,0);
  rope3 = new Rope(bobObject3.body, roofObject.body,bobDiameter,0,0);
  rope4 = new Rope(bobObject2.body, roofObject.body,bobDiameter*2, 0);
  rope5 = new Rope(bobObject1.body, roofObject.body,bobDiameter*1, 0);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roofObject.display();
  drawSprites();
 }