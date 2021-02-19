import React from 'react';
import '../styles/app.css';
import { containerBuilder } from './app.container';
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
