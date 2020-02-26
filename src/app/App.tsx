import React from 'react';
import { containerBuilder } from './app.container';
import '../styles/app.scss';
import './app.i18n';
import AppRouter from './AppRouter';
import { Header } from './layout';

containerBuilder();

export default function App() {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
}
