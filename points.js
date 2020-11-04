class Points {

    constructor (canvas, y, x){
    this.canvas = canvas;
    this.size= 40;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    }

    draw(){
    let img = new Image();
    img.src ="./image/mascarilla.png"
    this.ctx.drawImage(img,this.x,this.y,this.size,this.size)
    }
}