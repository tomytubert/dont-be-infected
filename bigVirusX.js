class BigVirusX { //Va de izquierda a derecha
    constructor(canvas,x){
        
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.size = this.canvas.height;
        this.x = x -this.size;
        this.y = 0;
        this.speed = 1;
        this.direction = 1;// Empieza hacia derecha
    }

    update(){
        this.x = this.x + this.direction * this.speed;
    }

    draw(){
        let img = new Image();
        img.src ="./image/virus.png"
        this.ctx.drawImage(img,this.x,this.y,this.size,this.size)
    }

    checkScreen(){
        if(this.x + this.size > this.canvas.width/2){
            this.direction = -1;
        } 
        if (this.x + this.size/2 <= this.canvas.width/2){
            console.log("a");
        }
    } 

    setDirection(direction){
    this.direction = direction;
    }
}