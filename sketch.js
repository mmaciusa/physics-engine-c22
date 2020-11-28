const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var box,box2, ground;
function setup(){
  createCanvas(600,400);

  engine=Engine.create()
  world=engine.world;
  var  boxOptions={
    restitution:1
  }
  var box2Options={
    restitution:1.2
  }
  box=Bodies.circle(300,10,20,boxOptions);
  World.add(world,box)
  box2=Bodies.circle(200,10,20,box2Options);
  World.add(world,box2)
  var groundOptions={
    isStatic:true
  }
  ground=Bodies.rectangle(300,350,width,20,groundOptions);
  World.add(world,ground);
}
function draw(){
  background ("red");
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(box.position.x, box.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, width,20);
  ellipse(box2.position.x, box2.position.y,30,30);

}