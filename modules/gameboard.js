import Brick from "./brick.js";
import lvl_01 from "./levels/level_01.js";

export default class GameBoard {
    constructor(c, b, coll){
        this.canvasContext = c;
        this.ball = b;
        this.x = 10;
        this.y = 100;
        this.h = this.canvasContext.canvas.height - 100;
        this.w = this.canvasContext.canvas.width;
        this.coll = coll
        this.mapLevel = lvl_01
        this.bricks = []
        // console.log(this.canvasContext.canvas.width)
    }
    draw(){
        this.canvasContext.beginPath()
        this.canvasContext.rect(10, 100, this.w-20, this.h);
        this.canvasContext.strokeStyle = "#bbb"
        this.canvasContext.stroke();
        this.canvasContext.fillStyle = "#444";
        this.canvasContext.fill();
        this.canvasContext.closePath();
        this.drawLevel()
    }
    checkCollision(){
        // console.log(this.ball.y-this.ball.r <= this.y)
        if(this.ball.y-this.ball.r <= this.y){
            this.coll.side = "top";
            this.coll.obj = "board";
            this.coll.addr = null;
            this.canvasContext.canvas.dispatchEvent(this.coll)
        }
        if(this.ball.x-this.ball.r <= this.x){
            this.coll.side = "left";
            this.coll.obj = "board";
            this.coll.addr = null;
            this.canvasContext.canvas.dispatchEvent(this.coll)
        }
        if(this.ball.x+this.ball.r >= this.w){
            this.coll.side = "right";
            this.coll.obj = "board";
            this.coll.addr = null;
            this.canvasContext.canvas.dispatchEvent(this.coll)
        }
        if(this.ball.y > 800){
            this.coll.side = null;
            this.coll.obj = "dead";
            this.coll.addr = null;
            this.canvasContext.canvas.dispatchEvent(this.coll)
        }
    }
    checkGameover(){
        
    }
    drawLevel(){
        this.mapLevel.forEach((row, r_idx) =>{
            const r_len = row.length;
            const b_width = (this.w-this.x-5) / r_len - 1;
            const b_height = 40;
            row.forEach((b, b_idx) => {
                if(b == '_'){
                    return;
                }
                if(b == 'A'){
                    this.bricks.push(new Brick(this.x+2+b_width*b_idx, this.y+b_height*r_idx, b_width, b_height, this.ball, this.canvasContext, this.coll, {r: r_idx, b: b_idx}))
                    this.bricks[this.bricks.length-1].checkCollision()
                    this.bricks[this.bricks.length-1].draw()
                }
            })
        } )
    }
}