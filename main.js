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
        <canvas></canvas>
        </section>
        `);

        const width = document.querySelector(".game-screen").offsetWidth;
        const height = document.querySelector(".game-screen").offsetHeight;
        const canvasElement = document.querySelector("canvas");

        canvasElement.setAttribute("width",width);
        canvasElement.setAttribute("height",height);

        //const game = new Gamepad(canvasElement);
        //game.gameOverCallBack(buildGameOver);
        //game.startLoop();

        //Falta aplicar la lógica para el YouWin

      /*
        const setPlayerDirection = (event) => { 
            if(event.code === "ArrowUp"){
                game.player.setDirection(-1);
            } else if (event.code === "ArrowDown"){
                game.player.setDirection(1);
            } else if (event.code ==="ArrowLeft"){
                game.player.setDirection(-1)
            } else if (event.code === "ArrowRight"){
                game.player.setDirection(1)
            }
        } 
        document.addEventListener("keydown", setPlayerDirection)
        */
        //No se bien como plantear las dos direcciones. 
    };

    const buildGameOver = () => {
        buildDom(`
        <section class="game-over">
        <h1>Game Over</h1>
        <button>Restart</button>
        </section>
        `)

        const restartButton = document.querySelector("button");
        restartButton.addEventListener("click",buildGameScreen);
    };
    const buildYouWin = () => {
        buildDom(`
        <section class="you-win">
        <h1>You Win</h1>
        <div>
        <p>Score:</p>
        <span class:"score"><span>
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