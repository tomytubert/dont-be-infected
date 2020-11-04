class Player {
    constructor(canvas,lives){
        this.size = 80;
        //this.height = 80;
        //this.width = 60;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = 10 + this.size / 2;
        this.y = this.canvas.height / 2;
        this.speed = 2;
        this.directionX = 0;
        this.directionY = 0;
        this.lives = lives;
        this.points = 0;
    }

    update(){
        this.y = this.y + this.directionY * this.speed
        this.x = this.x + this.directionX * this.speed
    }
    drawL(){
    let img = new Image();
    img.src = "./image/Running emoji L.png"
    this.ctx.drawImage(img,this.x,this.y,this.size,this.size)
    }

    drawR(){
        let img = new Image();
        img.src = "./image/Running emoji R.png"
        this.ctx.drawImage(img,this.x,this.y,this.size,this.size)
        }

    setDirectionX(direction){
        this.directionX=direction;
    }
    setDirectionY(direction){
        this.directionY=direction;
    }

    checkScreen(){
        //console.log("checkScreen")
        if(this.y <= 0){
            this.directionY = 1;
            //console.log("A")
        } else if (this.y + this.size >= this.canvas.height){
            this.directionY = -1;
            //console.log("U");
        }

        if(this.x <= 0){
            this.directionX = 1;
            //console.log("L")
        } else if (this.x + this.size >= this.canvas.width){
            this.directionX = -1;
            //console.log("R")
        }

    }
    checkCollisionEnemy(enemy) {
        const collideRight = this.x + this.size/2 > enemy.x - enemy.size/2;
        const collideLeft = this.x - this.size/4 < enemy.x;
        const collideTop = this.y + this.size/2 > enemy.y - enemy.size/2;
        const collideBottom = this.y -this.size/4< enemy.y;
        
        if (collideRight && collideLeft && collideTop && collideBottom){
            this.directionX = this.directionX * -1;// Para que rebote cuando choca y no perder todas las vidas
            this.directionY = this.directionY * -1;
        return true;
        } else {
            return false;
        }
    }

    checkCollisionPoint(point) {
        const collideRight = this.x + this.size / 2 > point.x - point.size / 2;
        const collideLeft = this.x - this.size / 4 < point.x + point.size / 2;
        const collideTop = this.y + this.size / 2 > point.y - point.size / 2;
        const collideBottom = this.y - this.size / 4 < point.y + point.size / 2;
    
        if (collideRight && collideLeft && collideTop && collideBottom) {
        return true;
        }
    
        return false;
    }

    loseLive(){
        this.lives--;
    }

    addPoints(){
        this.points++
        const score = document.querySelector(".score")
        score.innerText = this.points
    }

}