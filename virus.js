class Virus {
    constructor(canvas,x,y){
        this.size = 40;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.speed = 1;
        this.direction = -1;// Empieza hacia arriba
    }

    update(){
        this.y = this.y + this.direction * this.speed;
    }

    draw(){
        let img = new Image();
        img.src ="./image/virus.png"
        this.ctx.drawImage(img,this.x,this.y,this.size,this.size)
    }

    checkScreen(){
        if(this.y<= 0){
            this.direction = 1;
        } else if (this.y + this.size >= this.canvas.height){
            this.direction = -1;
        }
    } 

    setDirection(direction){
    this.direction = direction;
    }
}

class VirusRandom {
    constructor(canvas,x,y){
        this.size = 40;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.speed = 1;
        this.directionY = 1;
        this.directionX = 1;
    }

    update(){
        this.y = this.y + this.directionY * this.speed;
        this.x = this.x + this.directionX * this.speed;
    }

    draw(){
        let img = new Image();
        img.src ="./image/virus.png"
        this.ctx.drawImage(img,this.x,this.y,this.size,this.size)
    }

    setDirectionX(direction){
        this.directionX = direction;
        }
    setDirectionY(direction){
            this.directionY = direction;
        }

        checkScreen(){
            //console.log("checkScreen")
            if(this.y <= 0){
                this.directionY = 1;
            } else if (this.y + this.size >= this.canvas.height){
                this.directionY = -1;
            }
    
            if(this.x <= 0){
                this.directionX = 1;
            } else if (this.x + this.size >= this.canvas.width){
                this.directionX = -1;
            }
        }
}