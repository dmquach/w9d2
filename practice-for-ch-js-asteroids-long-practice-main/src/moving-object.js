class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.velocity = options.vel;
        this.radius = options.radius;
        this.color = options.color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    move() {
        this.pos[0] += this.velocity[0];
        this.pos[1] += this.velocity[1];
    }
}

export default MovingObject;