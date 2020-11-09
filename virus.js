class Virus {
    constructor(canvas,y){
        this.size = 40;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = this.canvas.width / 2;
        this.y = y;
        this.speed = 1;
        this.direction = -1;// Empieza hacia arriba
    }

    update(){
        this.y = this.y + this.direction * this.speed;
    }

    draw(){
        let img = new Image();
        img.src ="./image/virus.png"
        this.ctx.drawImage(img,this.x,this.y,this.size,this.size)
    }

    checkScreen(){
        if(this.y<= 0){
            this.direction = 1;
        } else if (this.y + this.size >= this.canvas.height){
            this.direction = -1;
        }
    } 

    setDirection(direction){
    this.direction = direction;
    }
}

// class BigVirusX extends Virus {

//     constructor(canvas,x){
//         super(size,canvas,ctx,x,y,speed);
//         this.size = this.canvas.height;
//         this.y = this.canvas.height / 2;
//         this.x = x-this.size/2;//Le daré o -this.size/2 o el ancho para que salga por un lado o por otro
//     }

//     update(){
//         this.x = this.x + this.direction*this.speed
//     }

//     checkScreen(){
//         if(this.x>= 0){// 0 será el punto de retorno del lado izquierdo
//             this.direction = 1;
//         } else if (this.x <= this.canvas.width){
//             this.direction = -1;
//         }
//     } 
//}