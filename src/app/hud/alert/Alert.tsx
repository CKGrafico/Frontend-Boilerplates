import { cid, useInject } from 'inversify-hooks';
import React, { useEffect, useState } from 'react';
import { GameStoreQuery } from '~/store';
import './alert.module.scss';

export function Alert() {
  const [visible, setVisible] = useState(false);
  const [gameStoreQuery] = useInject<GameStoreQuery>(cid.GameStoreQuery);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    gameStoreQuery.position$.subscribe(position => {
      setPosition(position);
      if (position.x && position.x % 100 === 0) {
        setVisible(true);
        setTimeout(() => setVisible(false), 1000);
      }
    });
  }, [gameStoreQuery]);

  return (
    <>
      {visible && position && (
        <div styleName="alert" style={{ top: position.y, left: position.x }}>
          100!
        </div>
      )}
    </>
  );
}
