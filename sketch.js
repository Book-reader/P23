const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var playerArcher;
var baseimage,backgroundImg,playerimage;


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = { isStatic: true }; 
  playerBase = Bodies.rectangle(200, 350, 180, 150, options); 
  World.add(world, playerBase); 
  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options); 
  World.add(world,player) 
  playerArcher = new PlayerArcher( 340, playerBase.position.y - 112, 120, 120 ); 
  arrow = new PlayerArrow( playerArcher.body.position.x, playerArcher.body.position.y, 100, 10 );
}

function draw() {
  background(backgroundImg);
  arrow.display();
  playerArcher.display();

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  if (keyCode === 32){
    arrow.shoot(playerArcher.body.angle);
  }
  
}

/*function display() {
  var pos = this.body.position;
  var angle = this.body.angle;

  push ();
  translate (pos.x,pos.y);
  rotate(angle);
  imageMode (CENTER);
  image(this.image,0,0,this.width,this.height);
  pop ();
}*/


