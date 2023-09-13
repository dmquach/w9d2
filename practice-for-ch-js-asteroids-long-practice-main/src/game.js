import Asteroid from "./asteroid";
import { randomPos } from "./utils";
class Game {
    static DIM_X = 500
    static DIM_Y = 500
    static NUM_ASTEROIDS;

    constructor(astAmount) {
        this.asteroids = []
        this.addAsteroids(astAmount)
    }

    setDim(x, y) {
        Game.DIM_X = x
        Game.DIM_Y = y
    }

    addAsteroids(amount) {
        Game.NUM_ASTEROIDS += amount
        for (let i = 0; i < amount; i++) {
            let newAst = new Asteroid({pos: this.randomPosition()})
            this.asteroids.push(newAst)
        }
    }

    randomPosition() {
        return randomPos(Game.DIM_X, Game.DIM_Y)
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = 'salmon';
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.asteroids.forEach(ast => {
            ast.draw(ctx)
        })
    }

    moveObjects() {
        this.asteroids.forEach(function(ast) {
            ast.move();
        });
    }
}

export default Game;
