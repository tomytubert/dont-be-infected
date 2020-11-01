# Dont-be-infected

## Descripción
Este juego consiste en poder llegar al final del mapa sin ser tocado, infectado, por el virus. El virus es la bola central que solo se mueve en una dirección. 

¡Contra más rápido lo hagas y más points azules cojas, más difícil será de superar tu record! 

## MVP (DOM-Canvas)

El Player podrá moverse tanto en el eje de las X como en el de las Y (up,down,left,right). El Virus, simpre se moverá en el eje de las Y (up,down).

Para ganar, tendrás que llegar al otro extremo sin ser tocado por el virus, en caso de tocarlo, perderás.

Para sumar más puntos tienes 2 opciones. Acabar la pantalla lo más rápido posible y coger los máximos points azules posibles. 

## Data structure 
1. index.html
2. main.js
3. game.js
4. player.js
5. virus.js
6. map.js
7. points.js

1. index.html file 
2. Main file
- buildDom
- buildSplashScreen / removeSplashScreen
- buildGameScreen / removeGameScreen
- buildGameOver/removeGameOver
- buildYouWin/ removeYouWin

3. Game Constructor

**Properties**
- canvas
- ctx
- player
- virus
- points
- isGameOver
- youWin
- checkAddPoints

**Methods**

- StartLoop
- updateCanvas
- clearCanvas
- drawCanvas
- checkAllCollision
- gameOverCallBack

4. Player Constructor

**Properties**
- canvas
- ctx
- x position
- y position
- size
- speed
- direction
- lives

**Methods**

- update
- draw
- setDirection
- checkScreen
- checkCollisionEnemy
- loselives

5. Virus Constructor

**Propeties**
- canvas
- ctx
- x position
- y position
- size
- speed
- direction

**Methods**

- update
- draw
- setDirection

6. Map Constructor

**Propeties**
- canvas
- ctx

**Methods**
- draw

7. Points Constructor

**Properties**
- canvas
- ctx
- x position
- y position

**Methods**
- draw
- checkCollisionPlayer
- AddPoints

## States and States Transitions

- startScreen
   - Start the Game
   - Vas a gameScreen cuando clicas el boton start
- gameScreen
   - El juego funciona mientras lives > 0
   - Vas a GameOverScreen cuando lives <= 0
   - Vas a WinScreen cuando consigues llegar al extremo de Canvas
- GameOverScreen
   - Enseña el mensaje de Game Over y el boton de Restart
   - Vuelves al gameScreen cuando clickas en Restart
- WinScreen
   - Enseña el mensaje de You Win, tus puntos, y el boton de Restart
   - Vuelves al gameScreen cuando clickas en Restart

## Backlog

- Crear más niveles, cada lvl tendrá un virus más.
- Crear movimiento aleatorio en los dos ejes al virus.
- Sumar vidas con algun point azul("Crear inyecciones")
- Poner un tiempo límite en las pantallas
- Sonidos y edición 

## Trello

https://trello.com/invite/b/WSEmaoap/d2c5b69d4ad1895b7cdc3ff18973d7d5/ironhack-dont-be-infected



KKKKKKKKK
PRueba Imac


