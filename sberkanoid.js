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
    message: "Столкновение",
    side: "top"
})
const g = new GameBoard(ctx)
const s = new Stick(Sberkanoid.width/2, Sberkanoid.height-20, 100, ctx);
const b = new Ball(s.x, s.y-20, 20, s, ctx);





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
    g.draw();
    s.draw();
    b.draw();
}
// По движению мыши перерисовываем положение ракетки
Sberkanoid.addEventListener('mousemove', (e) => {
    console.log("mouse: ", e.clientX)
    s.updatePostion(e.clientX)
})
Sberkanoid.addEventListener('click', (e) => {
    b.fire();
})
animate()