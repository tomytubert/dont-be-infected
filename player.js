class Player {
    constructor(canvas,lives){
        this.size = 80;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = 10 + this.size / 2;
        this.y = this.canvas.height / 2;
        this.speed = 2;
        this.directionX = 0;
        this.directionY = 0;
        this.lives = lives;
        this.points = 0;
        this.counterOfGel = 0;
        this.widthSprite = 81;
        this.heightSprite = 20;
        this.ticksPerFrames = 15;
        this.numberOfFrames = 3;
        this.frameIndex = 0;
        this.tickCount = 0;
    }

    update(){
        this.y = this.y + this.directionY * this.speed
        this.x = this.x + this.directionX * this.speed
    }
    renderPlayer(){
        this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrames) {
      this.tickCount = 0;
      // Mirar si el indice esta dentro del frame
      if (this.frameIndex < this.numberOfFrames - 1) {
        // Ir al siguiente frame
        this.frameIndex += 1;
      } else {
        //Vuelve al frame 0 y crea animacion
        this.frameIndex = 0;
      }
    }
    }
    draw(){
    let img = new Image();
    img.src = "./image/Mario-Sprite.png"
    this.ctx.drawImage(img,this.x,this.y,this.size,this.size)   
    }
    drawL(){
    // let img = new Image();
    // img.src = "./image/MArioBros.png"
    // this.ctx.drawImage(img,this.x,this.y,this.size,this.size)
    let img = new Image();
        img.src = "./image/Mario-Sprite_D.png"
        this.ctx.drawImage(
        img,
        this.frameIndex * this.widthSprite / this.numberOfFrames,
        0,
        this.widthSprite / this.numberOfFrames,
        this.heightSprite,
        this.x,
        this.y,
        this.size,
        this.size
        )
    }

    drawR(){
        // let img = new Image();
        // img.src = "./image/MArioBrosL.png"
        // this.ctx.drawImage(img,this.x,this.y,this.size,this.size)
        let img = new Image();
        img.src = "./image/Mario-Sprite-I.png"
        this.ctx.drawImage(
        img,
        this.frameIndex * this.widthSprite / this.numberOfFrames,
        0,
        this.widthSprite / this.numberOfFrames,
        this.heightSprite,
        this.x,
        this.y,
        this.size,
        this.size
        )
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
        const collideBottom = this.y - this.size/4< enemy.y + enemy.size/2;
        
        if (collideRight && collideLeft && collideTop && collideBottom){
            this.directionX = this.directionX * -1;// Para que rebote cuando choca y no perder todas las vidas
            this.directionY = this.directionY * -1;
            console.log("chocado");
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

    virusDeadPoints(){
        this.points += 10
    }

    addGel(){
        this.counterOfGel++
    }

    addLives(){
    this.lives++
    }


}