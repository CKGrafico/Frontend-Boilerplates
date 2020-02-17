import { Scene } from 'phaser';
import { ISprite } from '~/app/core';

enum Animation {
  Left = 'left',
  Right = 'right',
  Turn = 'turn'
}

export class DudeSprite implements ISprite {
  public object: Phaser.Physics.Arcade.Sprite;
  public name = 'dude';
  private scene: Scene;

  public preload(scene: Scene): void {
    this.scene = scene;
    this.scene.load.spritesheet(this.name, '/images/dude.png', { frameWidth: 32, frameHeight: 48 });
  }

  public create(): void {
    this.object = this.scene.physics.add.sprite(120, 450, this.name);
    this.object.setScale(2, 2);
    this.object.setBounce(0.2);
    this.object.setCollideWorldBounds(true);

    this.scene.anims.create({
      key: Animation.Left,
      frames: this.scene.anims.generateFrameNumbers(this.name, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.scene.anims.create({
      key: Animation.Turn,
      frames: [{ key: this.name, frame: 4 }],
      frameRate: 20
    });

    this.scene.anims.create({
      key: Animation.Right,
      frames: this.scene.anims.generateFrameNumbers(this.name, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  }

  public moveLeft(): void {
    this.object.setVelocityX(-160);
    this.object.anims.play(Animation.Left, true);
  }

  public moveRight(): void {
    this.object.setVelocityX(160);
    this.object.anims.play(Animation.Right, true);
  }

  public moveStop(): void {
    this.object.setVelocityX(0);
    this.object.anims.play(Animation.Turn);
  }

  public moveUp(): void {
    this.object.setVelocityY(-330);
  }
}
