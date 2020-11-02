class Road {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    draw(){
        this.canvas.strokeRect(0,0, this.canvas.width, this.canvas.height)
    }
}