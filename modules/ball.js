export default class Ball {
    constructor(x, y, r, c, s = null){
        this.onAir = false;
        this.x = x;
        this.y = y;
        // Радиус шара
        this.r = r;
        // Начальный угол вылета шана
        this.getStartAngle();
        this.a = 1.57;
        this.v = {
            x: 0, 
            y: 0
        }
        // Ускорение
        this.accel = 5;
        // Палка
        this.stick = s;
        this.canvasContext = c;
        console.log("ball created");
    }
    attachStick(s){
        this.stick = s
        this.x = this.stick.x;
        this.y = this.stick.y-20;
    }
    draw(){
        this.canvasContext.beginPath()
        if(this.onAir == false){
            this.canvasContext.arc(this.stick.x, this.stick.y-this.r, this.r, 0, Math.PI*2, false)
        } else {
            this.x += this.v.x
            this.y += this.v.y
            this.canvasContext.arc(this.x + this.v.x, this.y + this.v.y, this.r, 0, Math.PI*2, false)
        }
        this.canvasContext.fillStyle = "green";
        this.canvasContext.fill();
        this.canvasContext.closePath();
        
    }
    fire(){
        if(this.onAir == false){
            this.x = this.stick.x;
            this.y = this.stick.y - this.r;
            this.getStartAngle()
            this.onAir = true;
        }
    }
    getStartAngle(){
        const half_pi = 1.57;
        let a = 1;
        while (a > 0.5){
            a = Math.random()
        }
        let i = Math.random()
        if(i > 0.5){
            this.a = half_pi + a
        } else {
            this.a = half_pi - a
        }
        this.v = {
            x: Math.cos(this.a)*this.accel, 
            y: -Math.sin(this.a)*this.accel
        }
    }
    bounse(s){
        if(s == "top" || s == "bottom"){
            this.v.y *= -1;
            this.x += this.v.x;
            this.y += this.v.y;
        }
        if(s == "left" || s == "right"){
            this.v.x *= -1;
            // this.x += this.v.x;
            // this.y += this.v.y;
        }
    }
}