class Thunder {
    constructor(){
        //this.body = rect(x, y, 100, 200);
        //var randName = round(random(1, 5));
        this.image = loadImage("Light.png");
    }
    display(){
        image(this.image, 200, 0, 100, 200);
    }
}