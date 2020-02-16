import { cid, container } from 'inversify-hooks';
import { Game } from 'phaser';

export class ExampleGame extends Game {
  constructor() {
    const scene = [container.get(cid.ExampleScene)];

    const config = {
      parent: 'game',
      width: '100%',
      height: '100%',
      type: Phaser.AUTO,
      physics: {
        default: 'arcade',
        arcade: {
          debug: true
        }
      },
      scene
    };

    super(config);
  }
}
