/**
 * Sberkanoid
 */

const Sberkanoid = document.getElementById('sberkanoid')
const ctx = Sberkanoid.getContext("2d")
Sberkanoid.width = innerWidth;
Sberkanoid.height = innerHeight;


import lvl_01  from './modules/levels/level_01.js'
import Stick from './modules/stick.js'
import Ball from './modules/ball.js'
import GameBoard from './modules/gameboard.js';

// console.log("before creation")

// Событие столкновения
// side может принимать значения: top | bottom | left | right
const Collision = new CustomEvent('collision', {
    side: "top",
    obj: null,
    bubbles: true
})

const b = new Ball(0, 0, 20, ctx);
const s = new Stick(Sberkanoid.width/2, Sberkanoid.height-20, 100, ctx, b, Collision);
b.attachStick(s)
const g = new GameBoard(ctx, b, Collision)

// class Brick {

// }

// class Info {

// }

// class Questions {

// }

function animate(){
    // console.log("go")
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,Sberkanoid.width, Sberkanoid.height)
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
    console.log(e.obj, e.side, "collision!")
    b.bounse(e.side)
})
animate()