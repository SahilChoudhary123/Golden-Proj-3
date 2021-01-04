const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree;
var slingshot, boy, platform;
var cons;
var mango, mango1, mango2, mango3, mango4;

function setup() {
  createCanvas(1000, 1000);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	platform = new Ground(150, 650, 300, 170);
  tree = new Tree(700, 275, 450, 450);
  boy = new Boy(150, 515);
	stone = new Stone(150, 150);
	cons = new SlingShot(stone.body, {x:150, y:50});

  mango = new Mango(350, 550);
  mango1 = new Mango(800, 450);
  mango2 = new Mango(975, 475);
  mango3 = new Mango(850, 350);
  mango4 = new Mango(970, 550);
}

function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  tree.display();
  platform.display();
  boy.display();
  stone.display();
  cons.display();
  
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    cons.fly();
}
