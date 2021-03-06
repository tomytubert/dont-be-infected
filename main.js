const main = () => {
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML=html;
    };


    const buildSplashScreen = () => {
        buildDom(`
        <div class="leaf">
        <div>  <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div><img src="./image/MArioBros.png" height="75px" width="75px"></img></div>
        <div>  <img src="./image/virus.png" height="75px" width="75px" ></img></div>
        <div><img  src="./image/virus.png" height="75px" width="75px"></img></div>
        <div> <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div>   <img src="./image/MArioBros.png" height="75px" width="75px"></div>
        <div><img src="./image/virus.png" height="75px" width="75px"></div>
        </div>
        
        <div class="leaf leaf1">
        <div>  <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div><img src="./image/MArioBros.png" height="75px" width="75px"></img></div>
        <div>  <img src="./image/virus.png" height="75px" width="75px" ></img></div>
        <div><img  src="./image/virus.png" height="75px" width="75px"></img></div>
        <div> <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div>   <img src="./image/MArioBros.png" height="75px" width="75px"></div>
        <div><img src="./image/virus.png" height="75px" width="75px"></div>
        </div>
        
        <div class="leaf leaf2">
        <div>  <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div><img src="./image/MArioBros.png" height="75px" width="75px"></img></div>
        <div>  <img src="./image/virus.png" height="75px" width="75px" ></img></div>
        <div><img  src="./image/virus.png" height="75px" width="75px"></img></div>
        <div> <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div>   <img src="./image/MArioBros.png" height="75px" width="75px"></div>
        <div><img src="./image/virus.png" height="75px" width="75px"></div>
        </div>
        
        <section class="splash-screen">
        <h1 class="typewriter">Don't Be Infected</h1>
        <button class="animate__animated animate__pulse">Start</button>
        </section>
        `);
        const startButton = document.querySelector("button");
        startButton.addEventListener("click",buildInstructionsScreen);
    };

    const buildInstructionsScreen = () => {
        buildDom(`
        <div class="leaf">
        <div>  <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div><img src="./image/MArioBros.png" height="75px" width="75px"></img></div>
        <div>  <img src="./image/virus.png" height="75px" width="75px" ></img></div>
        <div><img  src="./image/virus.png" height="75px" width="75px"></img></div>
        <div> <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div>   <img src="./image/MArioBros.png" height="75px" width="75px"></div>
        <div><img src="./image/virus.png" height="75px" width="75px"></div>
        </div>
        
        <div class="leaf leaf1">
        <div>  <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div><img src="./image/MArioBros.png" height="75px" width="75px"></img></div>
        <div>  <img src="./image/virus.png" height="75px" width="75px" ></img></div>
        <div><img  src="./image/virus.png" height="75px" width="75px"></img></div>
        <div> <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div>   <img src="./image/MArioBros.png" height="75px" width="75px"></div>
        <div><img src="./image/virus.png" height="75px" width="75px"></div>
        </div>
        
        <div class="leaf leaf2">
        <div>  <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div><img src="./image/MArioBros.png" height="75px" width="75px"></img></div>
        <div>  <img src="./image/virus.png" height="75px" width="75px" ></img></div>
        <div><img  src="./image/virus.png" height="75px" width="75px"></img></div>
        <div> <img src="./image/virus.png" height="75px" width="75px"></img></div>
        <div>   <img src="./image/MArioBros.png" height="75px" width="75px"></div>
        <div><img src="./image/virus.png" height="75px" width="75px"></div>
        </div>

        <section class="instruction-screen">
        <h1 class="typewriter">Don't Be Infected</h1>
    <div id="instruction-box" class="animate__animated animate__fadeIn">
        <div class="half-box">
            <div>
                <img src="./image/Esquivar Virus.jpg" height="200px" width="300px">
                <p>Esquiva los virus para no perder vidas</p>
            </div>
            <div>
                <img src="./image/coge gel.jpg" height="200px" width="300px">
                <p>Consigue gel para poder eliminar el virus durante 5s y conseguir 10 puntos</p>
            </div>
        </div>
        <div class="half-box">
            <div>
                <img src="./image/Score.jpg" height="200px" width="300px">
                <p>Recuerda llevar siempre mascarilla! Consigue 1 punto</p>
            </div>
            <div>
                <img src="./image/vidas.jpg" height="200px" width="300px">
                <p>Ya existen las vacunas. No olvides de ponertelas para ganar vidas</p>
            </div>
        </div>
    </div>
        <button class="animate__animated animate__pulse">Start</button>
        </section>
        `)
        const startButton = document.querySelector("button");
        startButton.addEventListener("click",buildGameScreen);
    }

    const buildGameScreen = () => {
        buildDom(`
        <section class="game-screen">
        <h1 class="white-title non-margin">Don't Be Infected</h1>
        <div id="data">
        <div>
        <p class="white-title">Score</p>
        <span class="score white-title">0</span>
        </div>
        <div class="box">
        <p class="black-title">Power</p>
        <div id="bar"></div>
        </div>
        <div>
        <p class="white-title">Lives</p>
        <span class="lives"></span>
        </div>
        </div>
        <canvas></canvas>
        </section>
        `);

        const width = document.querySelector(".game-screen").offsetWidth;
        const height = document.querySelector(".game-screen").offsetHeight;
        const canvasElement = document.querySelector("canvas");

        canvasElement.setAttribute("width",width);
        canvasElement.setAttribute("height",height);

        const game = new Game(canvasElement);
        game.gameOverCallBack(buildGameOver);
        game.startLoop();
        game.renderHearthLives();
        
        
        const setPlayerDirection = (event) => { 
            if(event.code === "ArrowUp"){
                game.player.setDirectionY(-1);
            } else if (event.code === "ArrowDown"){
                game.player.setDirectionY(1);
            } else if (event.code ==="ArrowLeft"){
                game.player.setDirectionX(-1)
            } else if (event.code === "ArrowRight"){
                game.player.setDirectionX(1)
                //game.player.draw("./image/Running emoji R.png")
            }
        } 
        document.addEventListener("keydown", setPlayerDirection)
        
    };

    const buildGameOver = (score) => {
        buildDom(`
        <section class="game-over">
        <h1>Game Over</h1>
        <div>
        <p>Score:</p>
        <span class="score">${score}<span>
        </div>
        <button>Restart</button>
        </section>
        `)

        const restartButton = document.querySelector("button");
        restartButton.addEventListener("click",buildGameScreen);
    };
    buildSplashScreen();
};

window.addEventListener("load",main)