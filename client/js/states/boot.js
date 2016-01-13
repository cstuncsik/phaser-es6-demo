export default class Boot extends Phaser.State {

    preload() {
        this.game.stage.backgroundColor = '#000';
        this.load.image('loaderBg', 'img/loader-bg.png');
        this.load.image('loaderBar', 'img/loader-bar.png');
    }

    create() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('Preload');
    }

}
