import * as states from './states';
const GAME = new Phaser.Game(800, 1000, Phaser.AUTO);

Object.keys(states).forEach(state => GAME.state.add(state, states[state]));

GAME.state.start('Boot');
