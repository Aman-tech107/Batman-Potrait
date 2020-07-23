class Drops {
    constructor(x, y){
        this.body = ellipse(this.x, this.y, 4, 4);
        this.x = x;
        this.y = y;
    }
    display(){
        fill("blue");
        circle(this.x, this.y, 4, 4);
    }
    RePosition(){
        this.x = random(0, 395);
        this.y = random(0, 395);
    }
}