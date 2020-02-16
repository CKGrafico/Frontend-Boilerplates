import { cid, useInject } from 'inversify-hooks';
import React, { useEffect, useState } from 'react';
import { GameStoreQuery } from '~/store';
import './hud.module.scss';

export function Hud() {
  const [times, setTimes] = useState(0);
  const [gameStoreQuery] = useInject<GameStoreQuery>(cid.GameStoreQuery);

  useEffect(() => {
    gameStoreQuery.times$.subscribe(setTimes);
  }, [gameStoreQuery]);

  return (
    <div styleName="huf" id="game">
      <div styleName="hud-adv">{times}</div>
    </div>
  );
}
