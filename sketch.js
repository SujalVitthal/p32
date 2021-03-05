const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var box1,box2,box3,box4,box5,box6,box7;
var strikerObject;

function setup() {

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,380,400,20);

  box1=new Box(150,300,50,20);
  box2=new Box(155,290,60,15);
  box3=new Box(155,165,50,50);
  box4=new Box(160,230,40,35);
  box5=new Box(160,205,50,25);
  box6=new Box(160,175,40,20);
  box7=new Box(160,140,50,15);

  strikerObject= new Striker(350,200);
  

}

function draw() {
  background("#FFD700");  

  Engine.update(engine);

  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  strikerObject.display();
}