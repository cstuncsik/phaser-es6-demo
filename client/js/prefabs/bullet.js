export default class Bullet extends Phaser.Sprite {

    constructor(data) {
        super(data.game, data.x, data.y, data.asset);

        this.anchor.setTo(0.5);
        this.scale.setTo(0.8);
        this.health = data.health;
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;

        if (data.tint) {
            this.tint = data.tint;
        }

    }
}
