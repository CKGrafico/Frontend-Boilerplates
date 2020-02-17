import { inject } from 'inversify-hooks';
import { Scene } from 'phaser';
import { GameStoreQuery, GameStoreService } from '~/store';

enum Sprite {
  Dude = 'dude'
}

enum Animation {
  Left = 'left',
  Right = 'right',
  Turn = 'turn'
}

export class ExampleScene extends Scene {
  private player: Phaser.Physics.Arcade.Sprite;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  @inject() private gameStoreQuery: GameStoreQuery;
  @inject() private gameStoreService: GameStoreService;

  constructor() {
    const sceneConfig = {
      key: 'Example',
      active: false,
      visible: false
    };

    super(sceneConfig);
  }

  public preload(): void {
    this.load.spritesheet(Sprite.Dude, '/images/dude.png', { frameWidth: 32, frameHeight: 48 });
  }

  public create(): void {
    this.player = this.physics.add.sprite(100, 450, Sprite.Dude);
    this.player.setScale(2, 2);
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: Animation.Left,
      frames: this.anims.generateFrameNumbers(Sprite.Dude, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: Animation.Turn,
      frames: [{ key: Sprite.Dude, frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: Animation.Right,
      frames: this.anims.generateFrameNumbers(Sprite.Dude, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  public update(): void {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play(Animation.Left, true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play(Animation.Right, true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play(Animation.Turn);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-330);
    }

    this.gameStoreService.updatePosition(this.player.x, this.player.y);
  }
}
