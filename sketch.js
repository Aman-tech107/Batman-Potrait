var drops = [], randomX, randomY;
var umbrellaImage, umbrellaMan, umbrellaManAdd;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var frame = 0;
var thunder;

var engine, world;

function preload(){
    umbrellaImage = loadImage('umbrella.png');
}

function setup(){
   createCanvas(400, 400);
   engine = Engine.create();
   world = engine.world;

   umbrellaMan = new UmbrellaMan(150, 250);

   thunder = new Thunder();
   
}

function draw(){
    background(0, 0, 0);

    Engine.update(engine);

    var maxdrops = 100;
    for(i = 0; i < maxdrops; i++){
        drops[i] = (new Drops(random(0, 400), random(0, 400)));
        drops[i].x+=1;
        drops[i].y+=1;
        drops[i].display();
        if(drops[i].y > 400 || drops[i].y > 400){
        drops[i].RePosition();
        console.log("Reposition");
        }
    }
    umbrellaMan.display();
    frame++;
    console.log(frame % 10 === 0);
    
    if(frame % 10 === 0){
        /*var numberName = round(random(1, 7));
        var name = "Thunder"+numberName+".jpg";
        var light = loadImage(name);
        image(light, 200, 200, 50, 50);
        console.log(name);*/
        
        //console.log(thunder);
        thunder.display();
    }
}

