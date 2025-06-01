export default class Stick {
    constructor(x, y, width, c, b, coll){
        // console.log("created")
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = 10;
        this.features = {sticky: false}
        this.ball = b;
        this.canvasContext = c
        this.coll = coll
    }
    draw(){
        // console.log("drawing")
        this.canvasContext.beginPath();
        // console.log("stick:", this.x-this.w/2, " w: ", this.w)
        this.canvasContext.rect(this.x-this.w/2, this.y, this.w, this.h);
        this.canvasContext.fillStyle = "#000";
        this.canvasContext.fill();
        this.canvasContext.closePath()
    }
    updatePostion(x){
        if((x-this.w/2 > 10) && (x+this.w/2 < this.canvasContext.canvas.width-10)){
            this.x = x
        }   
    }
    checkCollision(){
        console.log()
        if((this.ball.y+this.ball.r-1 >= this.y)&&(this.ball.x >= this.x-this.w/2 && this.ball.x <= this.x+this.w/2)){
            this.coll.side = "bottom";
            this.coll.obj = "stick"
            this.canvasContext.canvas.dispatchEvent(this.coll)
        }
    }
}