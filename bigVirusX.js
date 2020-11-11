class BigVirusX { //Va de izquierda a derecha
    constructor(canvas,x,y){
        
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.size = 40;
        this.x = x;
        this.y = y;
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
        if(this.x<= 0){
            this.direction = 1;
        } else if (this.x + this.size >= this.canvas.width){
            this.direction = -1;
        }
    } 

    setDirection(direction){
    this.direction = direction;
    }
}