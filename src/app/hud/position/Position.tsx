import { cid, useInject } from 'inversify-hooks';
import React, { useEffect, useState } from 'react';
import { GameStoreQuery } from '~/store';
import './position.module.scss';

export function Position() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [gameStoreQuery] = useInject<GameStoreQuery>(cid.GameStoreQuery);

  useEffect(() => {
    gameStoreQuery.position$.subscribe(setPosition);
  }, [gameStoreQuery]);

  return (
    <div styleName="position">
      {position.x} - {position.y}
    </div>
  );
}
