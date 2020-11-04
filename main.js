const main = () => {
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML=html;
    };


    const buildSplashScreen = () => {
        buildDom(`
        <section class="splash-screen">
        <h1>Don't Be Infected</h1>
        <button>Start</button>
        </section>
        `);
        const startButton = document.querySelector("button");
        startButton.addEventListener("click",buildGameScreen);
    };

    const buildGameScreen = () => {
        buildDom(`
        <section class="game-screen">
        <h1>Don't Be Infected</h1>
        <div id="data">
        <div>
        <p>Score</p>
        <span class="score">0</span>
        </div>
        <div>
        <p>Lives</p>
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
                //game.player.draw("./image/Running emoji L.png")
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