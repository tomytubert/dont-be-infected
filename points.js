class Points {

    constructor (canvas, y, x){
    this.canvas = canvas;
    this.size= 10;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    }

    draw(){
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x,this.y,this.size,this.size);
    }
}