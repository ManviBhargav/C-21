var canvas;
var music;
var blueBox, redBox, yellowBox, greenBox;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    blueBox=createSprite(50,595,100,50);
    blueBox.shapeColor="blue";
    blueBox.debug = true;

    redBox=createSprite(200,595,100,50);
    redBox.shapeColor="red";
    redBox.debug = true;

    greenBox=createSprite(350,595,100,50);
    greenBox.shapeColor="green";
    greenBox.debug = true;

    yellowBox=createSprite(500,595,100,50);
    yellowBox.shapeColor="yellow";
    yellowBox.debug = true;

    //create box sprite and give velocity

    box = createSprite(random(20,750),20,20);
    box.shapeColor="white";
    box.debug = true;

    box.velocityX=+5;
    box.velocityY=-5;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();


    //add condition to check if box touching surface and make it box

    if(blueBox.isTouching(box)&&box.bounceOff(blueBox)){
        blueBox.shapeColor="black";
        box.shapeColor="black";

        blueBox.shapeColor="blue";
        box.shapeColor="white";
    }

    if(redBox.isTouching(box)&&box.bounceOff(redBox)){
        redBox.shapeColor="black";
        box.shapeColor="black";

        redBox.shapeColor="red";
        box.shapeColor="white";
    }

    if(greenBox.isTouching(box)&&box.bounceOff(greenBox)){
        greenBox.shapeColor="black";
        box.shapeColor="black";

        greenBox.shapeColor="green";
        box.shapeColor="white";
    }

    if(yellowBox.isTouching(box)&&box.bounceOff(yellowBox)){
        yellowBox.shapeColor="black";
        box.shapeColor="black";

        yellowBox.shapeColor="yellow";
        box.shapeColor="white";
    }
    drawSprites();
}
