var drops = [], randomX, randomY;
var umbrellaImage, umbrellaMan, umbrellaManAdd;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var frame = 0;

var engine, world;

function preload(){
    umbrellaImage = loadImage('umbrella.png');
}

function setup(){
   createCanvas(400, 400);
   engine = Engine.create();
   world = engine.world;

   umbrellaMan = new UmbrellaMan(150, 250);
}

function draw(){
    background(0, 0, 0);

    Engine.update(engine);

    var maxdrops = 50;
    for(i = 0; i < maxdrops; i++){
        drops.push(new Drops(random(0, 400), random(0, 400)));
        drops[i].x+=5;
        drops[i].y+=5;
        drops[i].display();
        if(drops[i].y > 400 || drops[i].y > 400){
        drops[i].RePosition();
        }
    }
    umbrellaMan.display();
    frame++;
    if(frame % 50 == 0){
        var name = round(random(1, 3));
        var light = loadImage("Thunder"+name+".jpg");
        image(light, 200, 50, 400, 200);
    }
}

