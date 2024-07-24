
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;



function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;


  ball =  Guindaste;
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("Clique para Assoprar");
  button.position(width / 2, height - 100);
  button.class("blowButton")

  button.mousePressed(blow);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}


function blow() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});
}
