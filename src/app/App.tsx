import { IonPhaser } from '@ion-phaser/react';
import { cid, useInject } from 'inversify-hooks';
import React, { useEffect, useRef } from 'react';
import './app.i18n';
import './app.module.scss';
import { Hud } from './hud';

export default function App() {
  const $container = useRef<HTMLDivElement>(null);
  const [game] = useInject(cid.Game);

  useEffect(() => {
    console.log(game);
  }, [game]);

  return (
    <div styleName="app" id="game" ref={$container}>
      {game && (
        <>
          <Hud />
          <IonPhaser game={game} />
        </>
      )}
    </div>
  );
}
