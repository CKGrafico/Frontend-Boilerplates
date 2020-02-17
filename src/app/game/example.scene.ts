import { inject } from 'inversify-hooks';
import { Scene } from 'phaser';
import { GameStoreService } from '~/store';
import { DudeInverseSprite } from '.';
import { DudeSprite } from './dude.sprite';

export class ExampleScene extends Scene {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  @inject() private dudeSprite: DudeSprite;
  @inject() private dudeInverseSprite: DudeInverseSprite;
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
    this.dudeSprite.preload(this);
    this.dudeInverseSprite.preload(this);
  }

  public create(): void {
    this.dudeSprite.create();
    this.dudeInverseSprite.create();

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  public update(): void {
    if (this.cursors.left.isDown) {
      this.dudeSprite.moveLeft();
      this.dudeInverseSprite.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.dudeSprite.moveRight();
      this.dudeInverseSprite.moveRight();
    } else {
      this.dudeSprite.moveStop();
      this.dudeInverseSprite.moveStop();
    }

    if (this.cursors.up.isDown) {
      this.dudeSprite.moveUp();
      this.dudeInverseSprite.moveUp();
    }

    this.gameStoreService.updatePosition(this.dudeSprite.object.x, this.dudeSprite.object.y);
  }
}
