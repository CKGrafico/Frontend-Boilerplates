import { IonPhaser } from '@ion-phaser/react';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import './app.i18n';
import './app.module.scss';
import { AliceGame } from './game';
import { Hud } from './layout';
import { resizeGame } from './shared';

export default function App() {
  const $container = useRef<HTMLDivElement>(null);
  const game = useMemo(() => new AliceGame(), []);
  const onResizeWindow = useCallback(() => resizeGame(game, $container.current), [game, $container]);

  useEffect(() => {
    resizeGame(game, $container.current);
    window.addEventListener('resize', onResizeWindow);

    return () => window.removeEventListener('resize', onResizeWindow);
  }, [game, onResizeWindow]);

  return (
    <div styleName="app" id="game" ref={$container}>
      <Hud />
      {game && <IonPhaser game={game} />}
    </div>
  );
}
