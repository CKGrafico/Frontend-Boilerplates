import { cid, useInject } from 'inversify-hooks';
import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import { AnimationStyles } from '~/app/core';
import { GameStoreQuery } from '~/store';
import './alert.module.scss';

export function Alert() {
  const [visible, setVisible] = useState(false);
  const [gameStoreQuery] = useInject<GameStoreQuery>(cid.GameStoreQuery);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const animationTime = 500;
  const animationStyles: AnimationStyles = {
    default: { top: position.y, left: position.x, transition: `opacity ${animationTime}ms ease-in-out`, opacity: 0 },
    transition: {
      entering: { opacity: 1 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      exited: { opacity: 0 }
    }
  };

  useEffect(() => {
    gameStoreQuery.position$.subscribe(position => {
      setPosition(position);
      if (position.x && position.x % 100 === 0) {
        setVisible(true);
        setTimeout(() => setVisible(false), animationTime);
      }
    });
  }, [gameStoreQuery]);

  return (
    <>
      {position && (
        <Transition in={visible} timeout={animationTime} classNames="my-node">
          {state => (
            <div
              styleName="alert"
              style={{
                ...animationStyles.default,
                ...animationStyles.transition[state]
              }}
            >
              100!
            </div>
          )}
        </Transition>
      )}
    </>
  );
}
