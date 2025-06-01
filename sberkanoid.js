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

// console.log("before creation")
const s = new Stick(Sberkanoid.width/2, Sberkanoid.height-20, 100, ctx);
const b = new Ball(s.x, s.y-20, 20, s, ctx);
// b.draw();
// s.draw()

// ctx.beginPath();
// ctx.rect(10, 10, 50, 2);
// ctx.fillStyle = "red";
// ctx.fill();

// class GameBoard{

// }

// class Ball {
//     constructor(r){
//         this.r = r
//     }

//     draw(){

//     }

//     update(){

//     }
// }

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
animate()