import React from 'react';
import AppRouter from './AppRouter';
import { Header } from './layout';

export default function App() {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
}
