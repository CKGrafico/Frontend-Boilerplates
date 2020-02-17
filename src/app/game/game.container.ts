import { container } from 'inversify-props';
import { ISprite } from '~/app/core';
import { ExampleScene } from './example';
import { Game } from './game';
import { DudeInverseSprite, DudeSprite } from './shared';

export function gameContainer() {
  container.addSingleton<ISprite>(DudeSprite);
  container.addSingleton<ISprite>(DudeInverseSprite);
  container.addSingleton(ExampleScene);
  container.addSingleton(Game);
}
