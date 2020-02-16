import { enableAkitaProdMode } from '@datorama/akita';
import React from 'react';
import ReactDOM from 'react-dom';
import 'reflect-metadata';
import App from './app/App';
import { containerBuilder } from './app/app.container';
import { configurePhaserInjectables } from './app/core';
import './styles/app.scss';

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  enableAkitaProdMode();
}

configurePhaserInjectables();
containerBuilder();

ReactDOM.render(<App />, document.getElementById('root'));
