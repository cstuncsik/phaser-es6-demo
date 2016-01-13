export default class TextButton extends Phaser.Button {

    constructor(data) {
        super(data.game, data.x, data.y, data.asset, data.callback, data.callbackContext, data.overFrame, data.outFrame, data.downFrame, data.upFrame);

        this.anchor.setTo(0.5);

        this.label = data.label;
        this.style = data.style;
        this.text = new Phaser.Text(this.game, 0, 0, this.label, this.style);
        this.text.anchor.setTo(0.5);

        this.addChild(this.text);

    }
}
