const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var bg, bg1;
var hindiButton, engButton;


function preload() {
    bg = loadImage("resources/background2.jpg");
    bg1 = loadImage("resources/background3.jpg");
    bg2 = loadImage("resources/background.jpg");

}

function setup() {

    createCanvas(displayWidth, displayHeight);

    engine = Engine.create();
    world = engine.world;

    //enterButton = new EnterButton(displayWidth / 2, displayHeight / 2 + 250, 170, 70);
    hindiButton = new HindiButton(displayWidth / 2 - 340, displayHeight / 2 + 250, 170, 70);
    engButton = new EngButton(displayWidth / 2 + 340, displayHeight / 2 + 250);





}

function draw() {
    background(bg);
    //stroke("black");
    //strokeWieght(20);

    Engine.update(engine);

    textSize(95);
    fill(255, 0, 0);
    textFont("Comic Sans Ms");
    text("My Newspaper", displayWidth / 2 - 325, displayHeight / 2 - 100);

    //enterButton.display();
    hindiButton.display();
    engButton.display();



}

/*function mouseClicked(engButton) {
    background(bg1);
    engButton.eNewsPage();
}*/