/**
 * Sberkanoid
 */

const Sberkanoid = document.getElementById('sberkanoid')
const ctx = Sberkanoid.getContext("2d")
ctx.fillStyle = "#191919"
ctx.fillRect(0, 0, ctx.width, ctx.height);
Sberkanoid.width = innerWidth;
Sberkanoid.height = innerHeight;


import Stick from './modules/stick.js'
import Ball from './modules/ball.js'
import GameBoard from './modules/gameboard.js';

// Событие столкновения
// side может принимать значения: top | bottom | left | right
const Collision = new CustomEvent('collision', {
    side: "top",
    obj: null,
    addr: null,
    bubbles: true
})

const b = new Ball(0, 0, 20, ctx);
const s = new Stick(Sberkanoid.width/2, Sberkanoid.height-20, 100, ctx, b, Collision);
b.attachStick(s)
const g = new GameBoard(ctx, b, Collision)

function animate(){
    // console.log("go")
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,Sberkanoid.width, Sberkanoid.height)
    ctx.fillStyle = "#191919"
    ctx.fillRect(0, 0, ctx.width, ctx.height);
    g.checkCollision()
    s.checkCollision()
    g.draw();
    s.draw();
    b.draw();
}
// По движению мыши перерисовываем положение ракетки
Sberkanoid.addEventListener('mousemove', (e) => {
    // console.log("mouse: ", e.clientX)
    s.updatePostion(e.clientX)
})
Sberkanoid.addEventListener('click', (e) => {
    b.fire();
})
Sberkanoid.addEventListener('collision', (e) =>{
    if(e.obj == 'dead'){
        console.log("dead")
        b.v = {x: 0, y: 0};
        s.x = Sberkanoid.width/2;
        b.attachStick(s)
        b.onAir = false
        alert("you're dead")
        return;
    }
    if(e.obj == 'brick'){
        // g.mapLevel[e.arrd.r][e.addr.b] = '_'
        if(e.addr != null && e.obj == 'brick'){
            console.log(g.mapLevel[e.addr.r][e.addr.b])
            g.mapLevel[e.addr.r][e.addr.b] = '_'    
        }
        
    }
    console.log(e.obj, e.side, "collision!")
    b.bounse(e.side)
})
Sberkanoid.addEventListener('dead', (e) => {
    console.log("dead")
    b.v = {x: 0, y: 0};
    s.x = Sberkanoid.width/2;
    b.attachStick(s)
    alert("you're dead")
})
animate()