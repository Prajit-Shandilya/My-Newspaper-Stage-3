class EngButton {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 230;
        this.height = 130;
        this.image = loadImage("resources/eng.jpg");
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;


        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 230, 130);

    }
    eNewsPage() {
        background(bg1);
    }
}