class UmbrellaMan{
    constructor(x, y){
        this.body = ellipse(x, y, 100, 150);
        this.x = x;
        this.y = y;
        this.image = loadImage("umbrella.png");
        //World.add(world, this.body);
        //umbrellaManAdd.addImage(umbrellaImage);
    }
    display(){
        image(this.image , this.x, this.y, 100, 150);
    }
}