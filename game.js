
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
    this.vaccine;
    this.actualLives;
    }


    startLoop(){
        this.player = new Player (this.canvas, 3) //Le doy vidas al Player y lo creo
        this.map = new Map (this.canvas)
        this.enemies = new Virus(this.canvas,this.canvas.height/2)
        this.actualLives = this.player.lives;
        

        const loop = () => {
            
            if(Math.random()>0.99){
            let x = Math.random()*this.canvas.width
            let y = Math.random()*this.canvas.height
            this.points.push(new Points(this.canvas,y,x))
            }

            if(Math.random()*10000>9995){ //Creo aquí la vida 
                let x = Math.random()*this.canvas.width
                let y = Math.random()*this.canvas.height
                this.vaccine = new Vaccine(this.canvas,y,x)
            }
        

            this.checkAllCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();

            // if(this.actualLives < this.player.lives ){ //Hay que buscar una condición para que se reproduzca una vez
            //     console.log("ifLives")
            //     for(let i=0; i<this.player.lives; i++){
            //         this.renderHearthLives();
            //         console.log("forLives")
            //     }
            // }
            if(!this.isGameOver){
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

        if(this.player.directionX === 0){
            this.player.drawL()
        } else if (this.player.directionX === -1){
            this.player.drawR()
        } else if (this.player.directionX === 1){
            this.player.drawL()
        }
        this.enemies.draw()
        this.map.draw()

        if(this.vaccine){
            //console.log(this.vaccine.x,this.vaccine.y)
            this.vaccine.draw()
        }

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

    
            //Choque de con la vaccine
        if(this.vaccine){
            if(this.player.checkCollisionPoint(this.vaccine)){
                this.player.addLives();//Añado vidas
                this.vaccine = null;
                //console.log(this.player.lives)
            }
        }
    

        if(this.player.checkCollisionEnemy(this.enemies)){
            this.player.loseLive();
            const heart = document.querySelector(".img")
            heart.remove()
        }
        if(this.player.lives === 0){
            this.isGameOver = true;
            this.onGameOver(this.player.points);
        }
    };

    gameOverCallBack(callback){
        this.onGameOver = callback
        //this.player.points = score
    }

    renderHearthLives(){
        
        if(this.actualLives < this.player.lives ){
            for(let i=0; i<this.player.lives; i++){
                //console.log(this.player.lives)
            const img =  `
            <img class="img" src="./image/heart.png">
            `;
            const lives = document.querySelector(".lives");
            const heart = document.createElement("div");
            lives.appendChild(heart)
            heart.innerHTML = img
            }
        }
        }
}