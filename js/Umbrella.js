class Umbrella{
    constructor(){
        this.x = 20
        this.y = 40
        this.animation = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
    }
    display(){
        fill(255)
        ellipse(this.x, this.y, 15, 15)
        image(this.image, this.x, this.y,40,40)
    }
    update(){
        
    }
}