import TextButton from '../extensions/textbutton';

export default class Over extends Phaser.State {

    create() {

        this.gameOverTitle = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY-200, 'Game over', {
            font: '36px Tahoma',
            fill: 'white',
            align: 'center'
        });
        this.gameOverTitle.anchor.setTo(0.5);

        this.start = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY-30,
            asset: 'button',
            overFrame: 2,
            outFrame: 1,
            downFrame: 0,
            upFrame: 1,
            label: 'Try again',
            style: {
                font: '16px Verdana',
                fill: 'white',
                align: 'center'
            }
        });

        this.menu = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY+30,
            asset: 'button',
            overFrame: 2,
            outFrame: 1,
            downFrame: 0,
            upFrame: 1,
            label: 'Menu',
            style: {
                font: '16px Verdana',
                fill: 'white',
                align: 'center'
            }
        });

        this.btnOverSound = this.add.sound('menuOver');
        this.btnOutSound = this.add.sound('menuOut');
        this.btnDownSound = this.add.sound('menuDown');

        this.start.setOverSound(this.btnOverSound);
        this.start.setOutSound(this.btnOutSound);
        this.start.setDownSound(this.btnDownSound);
        this.menu.setOverSound(this.btnOverSound);
        this.menu.setOutSound(this.btnOutSound);
        this.menu.setDownSound(this.btnDownSound);

        this.start.onInputDown.add(()=>{
            this.state.start('Play');
        });

        this.menu.onInputDown.add(()=>{
            this.state.start('Menu');
        });

        this.gameOverPanel = this.add.group();
        this.gameOverPanel.add(this.gameOverTitle);
        this.gameOverPanel.add(this.start);
        this.gameOverPanel.add(this.menu);
    }
}
