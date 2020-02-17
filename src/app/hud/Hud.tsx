import React from 'react';
import { Alert } from './alert';
import './hud.module.scss';
import { Position } from './position';

export function Hud() {
  return (
    <div styleName="hud">
      <Position />
      <Alert />
    </div>
  );
}
