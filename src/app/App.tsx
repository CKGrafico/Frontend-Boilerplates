import { IonPhaser } from '@ion-phaser/react';
import React, { useMemo, useRef } from 'react';
import './app.i18n';
import './app.module.scss';
import { MyGame } from './game';
import { Hud } from './layout';

export default function App() {
  const $container = useRef<HTMLDivElement>(null);
  const game = useMemo(() => new MyGame(), []);

  return (
    <div styleName="app" id="game" ref={$container}>
      <Hud />
      {game && <IonPhaser game={game} />}
    </div>
  );
}
