
class Game{
    constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.enemies;
    this.isGameOver = false;
    this.youWin = false;
    this.points = [];
    }

    startLoop(){
        //this.player = new this.player(this.canvas, 1) Le doy vidas al Player y lo creo

        const loop = () => {
            //this.enemies = new Enemy(this.canvas, y) Creo el enemigo y lo colóco 

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
        this.ctx.clearREct(0,0, this.canvas.width, this.canvas.height);
    }

    drawCanvas(){
        this.player.draw()
        this.enemies.draw()
        this.points.forEach((points) => {
            points.draw()
        });
    }

    checkAllCollisions(){
        this.player.checkScreen();
        if(this.player.checkCollisionEnemy){
            this.player.loselive();
        if(this.player.lives === 0){
            this.isGameOver = true;
            this.onGameOver();
        }
        }
    };

    gameOverCallback(callback){
        this.onGameOver = callback
    }
}