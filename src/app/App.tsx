import React from 'react';
import AppRouter from './AppRouter';
import { Header } from './layout';

export default function () {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
}
