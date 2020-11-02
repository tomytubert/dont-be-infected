
class Game{
    constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.enemies;
    this.isGameOver = false;
    this.youWin = false;
    this.points = [];
    this.map;
    }

    startLoop(){
        this.player = new Player (this.canvas, 1) //Le doy vidas al Player y lo creo
        this.map = new Map (this.canvas)
        this.enemies = new Virus(this.canvas,this.canvas.height/2)

        const loop = () => {

            if(Math.random()>0.99){
            let x = Math.random()*this.canvas.width
            let y = Math.random()*this.canvas.height
            this.points.push(new Points(this.canvas,y,x))
            }

            this.checkAllCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();

            if(!this.isGameOver && !this.youWin){
                window.requestAnimationFrame(loop)
            }
        };

        window.requestAnimationFrame(loop)
    }

    updateCanvas(){
        this.player.update();
        this.enemies.update()
    };

    clearCanvas(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

    drawCanvas(){
        this.player.draw()
        this.enemies.draw()
        this.map.draw()

        this.points.forEach((points) => {
            points.draw()
        });
    }

    checkAllCollisions(){

        this.player.checkScreen();
        this.enemies.checkScreen();

        this.points.forEach((point,index)=>{
            if(this.player.checkCollisionPoint(point)){
                this.player.addPoints();
                this.points.splice(index,1);
            }
        });

        if(this.player.checkCollisionEnemy(this.enemies)){
            this.player.loseLive();
        if(this.player.lives === 0){
            this.isGameOver = true;
            this.onGameOver();
        }

        if(this.player.x > this.canvas.width){ // No me funciona, revisarla.
            this.youWin = true; 
            this.onYouWin();
        }
        }
    };

    gameOverCallBack(callback){
        this.onGameOver = callback
    }
}