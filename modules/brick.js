export default class Brick{
    constructor(x,y,w,h,b,c,coll,addr){
        this.x = x+1;
        this.y = y+1;
        this.w = w-2;
        this.h = h-3;
        this.ball = b;
        this.canvasContext = c;
        this.dead = false;
        this.coll = coll
        this.addr = addr
        // console.log(this.addr)
    }
    draw(){
        this.canvasContext.beginPath();
        this.canvasContext.rect(this.x, this.y, this.w, this.h)
        this.canvasContext.strokeStyle = "#040";
        this.canvasContext.stroke();
        this.canvasContext.fillStyle = "#91FF00";
        this.canvasContext.fill()
        this.canvasContext.closePath();
    }
    checkCollision(){
        // console.log(this.ball.y-this.ball.r)
        if((this.ball.y-this.ball.r <= this.y+this.h && this.ball.y+this.ball.r > this.y)&&(this.ball.x >= this.x && this.ball.x <= this.x+this.w)){
            this.coll.side = "bottom";
            this.coll.obj = "brick";
            this.coll.addr = this.addr;
            this.canvasContext.canvas.dispatchEvent(this.coll)
            return;
        }
    }
}