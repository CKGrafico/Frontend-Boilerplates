import { inject } from 'inversify-hooks';
import { Scene } from 'phaser';
import { GameStoreQuery, GameStoreService } from '~/store';

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
    this.load.spritesheet('dude', '/images/dude.png', { frameWidth: 32, frameHeight: 48 });
  }

  public create(): void {
    this.player = this.physics.add.sprite(100, 450, 'dude');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  public update(): void {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }

    this.gameStoreService.updatePosition(this.player.x, this.player.y);
  }
}
