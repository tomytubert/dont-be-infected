class Virus {
    constructor(canvas){
        this.size = 20;
        this.canvas = canvas;
        this.ctx = this.canvas.width;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.speed = 5;
        this.direction = -1;// Empieza hacia arriba
    }

    update(){
        this.y = this.y + this.direction * this.speed;
    }

    draw(){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x,this.y - this.size / 2, this.size, this.size)
    }

    checkScreen(){
        if(this.y-this.size /2 <= 0){
            this.direction = 1;
        } else if (this.y + this.size / 2 >= this.canvas.height){
            this.direction = -1;
        }
    }

    setDirection(direction){
        this.direction = direction;
    }
}