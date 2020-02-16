import { cid, useInject } from 'inversify-hooks';
import React, { useEffect, useState } from 'react';
import { GameStoreQuery } from '~/store';
import './hud.module.scss';

export function Hud() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [gameStoreQuery] = useInject<GameStoreQuery>(cid.GameStoreQuery);

  useEffect(() => {
    gameStoreQuery.position$.subscribe(setPosition);
  }, [gameStoreQuery]);

  return (
    <div styleName="huf" id="game">
      <div styleName="hud-adv">
        {position.x} - {position.y}
      </div>
    </div>
  );
}
