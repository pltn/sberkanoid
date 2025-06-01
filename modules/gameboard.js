export default class GameBoard {
    constructor(c){
        this.canvasContext = c;
        this.h = this.canvasContext.canvas.height - 100;
        this.w = this.canvasContext.canvas.width;
        console.log(this.canvasContext.canvas.width)
    }
    draw(){
        this.canvasContext.beginPath()
        this.canvasContext.rect(10, 101, this.w-20, this.h);
        this.canvasContext.strokeStyle = "red"
        this.canvasContext.stroke();
        this.canvasContext.closePath();
    }
    checkCollision(){

    }
    checkGameover(){

    }
}