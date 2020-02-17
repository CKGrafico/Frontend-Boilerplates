import { Query } from '@datorama/akita';
import { decorate } from 'inversify';
import { injectable } from 'inversify-hooks';
import { Scene } from 'phaser';

export function configurePhaserInjectables(): void {
  decorate(injectable(), Scene);
  decorate(injectable(), Query);
}
