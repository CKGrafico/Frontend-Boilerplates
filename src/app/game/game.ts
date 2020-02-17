import { cid, container } from 'inversify-hooks';
import { Game as PhaserGame } from 'phaser';

export class Game extends PhaserGame {
  constructor() {
    const scene = [container.get(cid.ExampleScene)];

    const config = {
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: '100%',
        height: '100%'
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: true
        }
      },
      scene
    };

    super(config);
  }
}
