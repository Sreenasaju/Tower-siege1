const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    //box1 = new Block(200,300,50,50);
    //box2 = new Block(240,100,50,100);
    //ground = new Ground(200,height,400,20)
    stand1 = new Ground(180,400,210,10)
    stand2 = new Ground(500,200,200,10)
    box1 = new Block(165,390,20,30)
    box2 = new Block(170,390,20,30)
    box3 = new Block(175,390,20,30)
    box4 = new Block(180,390,20,30)
    box5 = new Block(185,390,20,30)
    box6 = new Block(190,390,20,30)
    box7 = new Block(170,380,20,30)
    box8 = new Block(175,380,20,30)
    box9 = new Block(180,380,20,30)
    box10 = new Block(185,380,20,30)
    box11 = new Block(190,370,30)
    //box12 = new Block(195,365,20,30)
   // box13 = new Block(200,360,20,30)
    
}
function draw(){
    background(0);
    Engine.update(engine);
    
   // box1.display();
   // box2.display();
    //ground.display();
    stand1.display();
    stand2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
   // box12.display();
   // box13.display();
}