const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getTime()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    

}

function draw(){
    if(backgroundImg){
        background(backgroundImg)
    }
    // add condition to check if any background image is there to add

    
    Engine.update(engine);
    //getBackgroundImg()

    // write code to display time in correct format here


}

async function getTime(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json()
    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13)

    

    


    

    

    if(hour<=4 && hour >= 3){
        bg = "sunrise1.png"
    }

    if(hour<=6 && hour >= 5){
        bg = "sunrise2.png"
    }


    if(hour<=8 && hour >= 7){
        bg = "sunrise3.png"
    }


    if(hour<=10 && hour >= 9){
        bg = "sunrise4.png"
    }


    if(hour<=12 && hour >= 11){
        bg = "sunrise5.png"
    }


    if(hour<=14 && hour >= 13){
        bg = "sunrise6.png"
    }


    if(hour<=16 && hour >= 15){
        bg = "sunset7.png"
    }


    if(hour<=18 && hour >= 17){
        bg = "sunset8.png"
    }


    if(hour<=20 && hour >= 19){
        bg = "sunset9.png"
    }

    
    if(hour<=22 && hour >= 21){
        bg = "sunset10.png"
    }


    if(hour<=24 && hour >= 23){
        bg = "sunset11.png"
    }


    if(hour<=2 && hour >= 1){
        bg = "sunset12.png"
    }

    backgroundImg = loadImage(bg)
    

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
