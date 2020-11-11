
class Game{
    constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.enemiesY = []; 
    this.enemiesX = [];
    this.enemiesRandom = [];
    this.isGameOver = false;
    this.points = [];
    this.map;
    this.vaccine;
    this.activeEnemiesX = true;
    this.activeEnemiesY = true;
    this.activeEnemiesRandom = true;
    this.activeRenderHearth = true;
    }


    startLoop(){
        this.player = new Player (this.canvas, 1) //Le doy vidas al Player y lo creo
        this.map = new Map (this.canvas)
        const loop = () => {
            
            if(Math.random()>0.99){
            let x = Math.random()*(this.canvas.width-80)
            let y = Math.random()*(this.canvas.height-80)
            this.points.push(new Points(this.canvas,y,x))
            }

            if(Math.random()*10000>9990){ //Creo aquí la vida 
                let x = Math.random()*(this.canvas.width-80)//le resto por que se me salian del canvas
                let y = Math.random()*(this.canvas.height-80)
                this.vaccine = new Vaccine(this.canvas,y,x)
            }

            function multiple(valor,multiple){

                let resto = valor % multiple;
                if(resto===0){
                    return true;
                } else {
                    return false
                }
            };


            //Creación de los virus que va  random
            if(multiple(this.player.points,2) && this.player.points > 0 && this.activeEnemiesRandom){
                let a = Math.random()
                let x = Math.random()*(this.canvas.width)
                    if(a > 0.5){
                    this.enemiesRandom.push(new VirusRandom(this.canvas,x,this.canvas.height-15)) 
                    this.activeEnemiesRandom = false;
                    console.log("R1");
                    } else {
                    this.enemiesRandom.push(new VirusRandom(this.canvas,x,-15)) 
                    this.activeEnemiesRandom = false;
                    console.log("R2");
                    }
                    setTimeout(()=>{
                    this.activeEnemiesRandom = true;
                    },10000)
            }
            //Creación de los virus que van en el ejeY
            if(multiple(this.player.points,20) && this.player.points > 0 && this.activeEnemiesY){
                let a = Math.random()
                let x = Math.random()*(this.canvas.width)
                    if(a > 0.5){
                    this.enemiesX.push(new Virus(this.canvas,x,this.canvas.height-15)) 
                    this.activeEnemiesY = false;
                    } else {
                    this.enemiesX.push(new Virus(this.canvas,x,-15)) 
                    this.activeEnemiesY = false;
                    }
                    setTimeout(()=>{
                    this.activeEnemiesY = true;
                    },10000)
            }
            //Creación de los virus que van en el ejeX
            if(multiple(this.player.points,15) && this.player.points > 0 && this.activeEnemiesX){
                let a = Math.random()
                let y = Math.random()*(this.canvas.height)
                if(a > 0.5){
                    this.enemiesX.push(new BigVirusX(this.canvas,-15,y))// de derecha a izquierda
                    this.activeEnemiesX = false;
                
                } else {
                    this.enemiesX.push(new BigVirusX(this.canvas,this.canvas.width-15,y))// de izquierda a derecha
                    this.activeEnemiesX = false;
                }
                setTimeout(()=>{
                    this.activeEnemiesX = true;
                },10000)
            }
        

            this.checkAllCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
            this.renderHearthLives();
            if(!this.isGameOver){
                window.requestAnimationFrame(loop)
            }
        };

        window.requestAnimationFrame(loop)
    }

    updateCanvas(){
        this.player.update();
        if(this.enemies){
            this.enemies.forEach((enemies)=>{
                enemies.update();
            })
        }
        if(this.enemiesX){
            this.enemiesX.forEach((enemiesX)=>{
                enemiesX.update();
            })
        }
        if(this.enemiesRandom){
            this.enemiesRandom.forEach((enemiesRandom)=>{
                enemiesRandom.update();
            })
        }
        
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

        if(this.enemiesRandom){
            this.enemiesRandom.forEach((enemiesRandom)=>{
                enemiesRandom.draw();
            })
        }
        if(this.enemies){
            this.enemies.forEach((enemies)=>{
                enemies.draw();
            })
        }

        if(this.enemiesX){
            this.enemiesX.forEach((enemiesX)=>{
                enemiesX.draw();
            })
        }
        this.map.draw();

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
        if(this.enemies){
            this.enemies.forEach((enemies)=>{
                enemies.checkScreen();
            });
        }
        if(this.enemiesX){
            this.enemiesX.forEach((enemiesX)=>{
                enemiesX.checkScreen();
            });
        }
        if(this.enemiesRandom){
            this.enemiesRandom.forEach((enemiesRandom)=>{
                enemiesRandom.checkScreen();
            });
        }
        
        
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
                this.activeRenderHearth = true;
                //console.log(this.player.lives)
            }
        }
    
        if(this.enemies){
            this.enemies.forEach((enemie,index)=>{

                if(this.player.checkCollisionEnemy(enemie)){
                    this.player.loseLive();
                    const heart = document.querySelector(".img")
                    heart.remove()
                };
            });
        };

if(this.enemiesX){
    this.enemiesX.forEach((enemieX,index)=>{

        if(this.player.checkCollisionEnemy(enemieX)){
            this.player.loseLive();
            const heart = document.querySelector(".img")
            heart.remove()
        };
    });
};

if(this.enemiesRandom){
    this.enemiesRandom.forEach((enemieRandom,index)=>{

        if(this.player.checkCollisionEnemy(enemieRandom)){
            this.player.loseLive();
            const heart = document.querySelector(".img")
            heart.remove()
        };
    });
};

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
        
        if(this.player.lives !=0 && this.activeRenderHearth){

            const img =  `
            <img class="img animate__animated animate__bounceIn " src="./image/heart.png">
            `;
            const lives = document.querySelector(".lives");
            const heart = document.createElement("div");
            lives.appendChild(heart)
            heart.innerHTML = img
            this.activeRenderHearth = false;
        }
}
}