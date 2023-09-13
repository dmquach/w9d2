import Game from "./game";

class GameView {
    constructor(ctx) {
        this.game = new Game(3);
        this.ctx = ctx;
    }

    start() {
        setInterval(() => {
            this.game.moveObjects()
            this.game.draw(this.ctx)
        }, 500);
    }
}

export default GameView;