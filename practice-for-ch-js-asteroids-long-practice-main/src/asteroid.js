import { randomVec } from "./utils.js";
import MovingObject from "./moving-object.js";

class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "brown";

    constructor(options) {
        super({
            pos: options.pos,
            vel: randomVec(Math.floor(Math.random() * 20)),
            radius: Asteroid.RADIUS,
            color: Asteroid.COLOR
        })
    }
}

export default Asteroid;