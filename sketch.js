var maxDrops = 100;
var drops = [];
function preload(){
    personWalking = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
    thunder1 = loadImage("thunderbolt/1.png")
    thunder2 = loadImage("thunderbolt/2.png")
    thunder3 = loadImage("thunderbolt/3.png")
    thunder4 = loadImage("thunderbolt/4.png")

}


function setup(){
    createCanvas(500,600)
    person = createSprite(80,450,20,20)
    person.addAnimation("moving", personWalking)
    person.scale = 0.4
    fill(0)
    thunderbolt = createSprite(200,0,20,20)
    thunderbolt.scale = 0.9

   
}

function draw(){
    background(0)
    if(frameCount % 60 === 0) {
        //generate random obstacles
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: thunderbolt.addImage(thunder1);
                  break;
          case 2: thunderbolt.addImage(thunder2);
                  break;
          case 3: thunderbolt.addImage(thunder3);
                  break;
          case 4: thunderbolt.addImage(thunder4);
                  break;
          default: break;
        }
    }
    if(frameCount%40===0){
        for(var i=0; i<maxDrops;i++){
         fill("blue")
         ellipse(random(0,500),random(0,600),10,10)
         }
        }
    drawSprites()
    
}   

