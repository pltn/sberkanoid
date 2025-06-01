export default class Ball {
    constructor(x, y, r, s, c){
        this.onAir = false;
        this.x = x;
        this.y = y;
        this.r = r;
        this.stick = s;
        this.canvasContext = c;
        console.log("ball created");
    }

    draw(){
        this.canvasContext.beginPath()
        if(this.onAir == false){
            this.canvasContext.arc(this.stick.x, this.stick.y-this.r, this.r, 0, Math.PI*2, false)
        } else {
            this.canvasContext.arc(s.x, this.y, this.r, 0, Math.PI*2, false)
        }
        this.canvasContext.fillStyle = "green";
        this.canvasContext.fill();
        this.canvasContext.closePath();
    }
    fire(){
        this.onAir = true;
        
    }
}