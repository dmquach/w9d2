import MovingObject from "./moving-object.js";
import Asteroid from "./asteroid.js";
import Game from "./game.js";

window.MovingObject = MovingObject;
window.Game = Game

const canvasEl = document.getElementById('game-canvas');
canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

const ctx = canvasEl.getContext('2d');
// ctx.fillStyle = 'salmon';
// ctx.fillRect(0, 0, canvasEl.width,canvasEl.height);

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});
// mo.draw(ctx);
// mo.move();
// mo.draw(ctx);
// const ast = new Asteroid({ pos: [100, 100] });
// // console.log(ast.velocity)
// ast.draw(ctx);
const game = new Game(3)
game.setDim(50, 500)
game.draw(ctx)
