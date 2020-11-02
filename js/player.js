class Player {
    constructor(canvas,lives){
        this.size = 40;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = 10 + this.size / 2
        this.y = this.canvas.height / 2;
        this.speed = 2;
        this.directionX = 0;
        this.directionY = 0;
        this.lives = lives;
    }

    update(){
        this.y = this.y + this.directionY * this.speed//Habrá que ver para los otros sentidos
        this.x = this.x + this.directionX * this.speed
    }

    draw(){
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(
            this.x - this.size / 2,
            this.y - this.size / 2,
            this.size,
            this.size
        );
    }

    setDirectionX(direction){
        this.directionX=direction;
    }
    setDirectionY(direction){
        this.directionY=direction;
    }

    checkScreen(){
        //console.log("checkScreen")
        if(this.y-this.size /2 <= 0){
            console.log("checkScreen")
            this.directionY = 1;//habrá que mirar de cambiarlo para que no rebote
        } else if (this.y + this.size / 2 >= this.canvas.height){
            this.directionY = -1;
        }
    }

    checkCollisionEnemy(enemy) {
        const collideRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
        const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
        const collideTop = this.y + this.size / 2 > enemy.y - enemy.size / 2;
        const collideBottom = this.y - this.size / 2 < enemy.y + enemy.size / 2;
    
        if (collideRight && collideLeft && collideTop && collideBottom) {
        return true;
        }
    
        return false;
    }

    loseLive(){
        this.lives--;
    }

}