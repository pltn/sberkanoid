export default class GameBoard {
    constructor(c, b, coll){
        this.canvasContext = c;
        this.ball = b;
        this.x = 10;
        this.y = 100;
        this.h = this.canvasContext.canvas.height - 100;
        this.w = this.canvasContext.canvas.width;
        this.coll = coll 
        // console.log(this.canvasContext.canvas.width)
    }
    draw(){
        this.canvasContext.beginPath()
        this.canvasContext.rect(10, 100, this.w-20, this.h);
        this.canvasContext.strokeStyle = "red"
        this.canvasContext.stroke();
        this.canvasContext.closePath();
    }
    checkCollision(){
        // console.log(this.ball.y-this.ball.r <= this.y)
        if(this.ball.y-this.ball.r <= this.y){
            this.coll.side = "top"
            this.coll.obj = "board"
            this.canvasContext.canvas.dispatchEvent(this.coll)
        }
        if(this.ball.x-this.ball.r <= this.x){
            this.coll.side = "left"
            this.coll.obj = "board"
            this.canvasContext.canvas.dispatchEvent(this.coll)
        }
        if(this.ball.x+this.ball.r >= this.w){
            this.coll.side = "right"
            this.coll.obj = "board"
            this.canvasContext.canvas.dispatchEvent(this.coll)
        }
    }
    checkGameover(){

    }
}