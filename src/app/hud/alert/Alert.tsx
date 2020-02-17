import { cid, useInject } from 'inversify-hooks';
import React, { useEffect, useState } from 'react';
import { GameStoreQuery } from '~/store';
import './alert.module.scss';

export function Alert() {
  const [visible, setVisible] = useState(false);
  const [gameStoreQuery] = useInject<GameStoreQuery>(cid.GameStoreQuery);

  useEffect(() => {
    gameStoreQuery.position$.subscribe(position => {
      setVisible(position.x && position.x % 100 === 0);
    });
  }, [gameStoreQuery]);

  return <>{visible && <div styleName="alert">100!</div>}</>;
}
