import { inject } from 'inversify-hooks';
import { Scene } from 'phaser';
import { GameStoreQuery, GameStoreService } from '~/store';

export class ExampleScene extends Scene {
  private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
  private times: number;

  @inject() private gameStoreQuery: GameStoreQuery;
  @inject() private gameStoreService: GameStoreService;

  constructor() {
    const sceneConfig = {
      active: false,
      visible: false,
      key: 'Game'
    };

    super(sceneConfig);
  }

  public create() {
    this.bindEvents();
    this.square = this.add.rectangle(400, 400, 100, 100, 0xffffff) as any;
    this.physics.add.existing(this.square);
  }

  private bindEvents() {
    this.gameStoreQuery.times$.subscribe(times => (this.times = times));
  }

  public update() {
    const cursorKeys = this.input.keyboard.createCursorKeys();

    if (cursorKeys.up.isDown) {
      this.square.body.setVelocityY(-500);
    } else if (cursorKeys.down.isDown) {
      this.square.body.setVelocityY(500);
    } else {
      this.square.body.setVelocityY(0);
    }

    if (cursorKeys.right.isDown) {
      this.square.body.setVelocityX(500);
    } else if (cursorKeys.left.isDown) {
      this.square.body.setVelocityX(-500);
    } else {
      this.square.body.setVelocityX(0);
    }

    this.gameStoreService.updateTimes(this.square.body.velocity.x);
  }
}
