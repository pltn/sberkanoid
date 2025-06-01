export default class Stick {
    constructor(x, y, width, c){
        console.log("created")
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = 4;
        this.features = {sticky: false}
        this.canvasContext = c
    }
    draw(){
        // console.log("drawing")
        this.canvasContext.beginPath();
        console.log("stick:", this.x-this.w/2, " w: ", this.w)
        this.canvasContext.rect(this.x-this.w/2, this.y, this.w, this.h);
        this.canvasContext.fillStyle = "#f00";
        this.canvasContext.fill();
        this.canvasContext.closePath()
    }
    updatePostion(x){
        this.x = x
    }
}