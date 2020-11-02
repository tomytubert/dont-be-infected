class Map {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    draw(){
        this.ctx.strokeStyle = "black"
        this.ctx.strokeRect(0,0, this.canvas.width, this.canvas.height)
    }
}