import { Scene } from 'phaser';

export interface ISprite {
  object: Phaser.Physics.Arcade.Sprite;
  name: string;
  preload(scene: Scene): void;
  create(): void;
}
