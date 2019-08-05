import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import logo from './logo.svg';
import './App.scss';

export default function () {
  const [t, i18n] = useTranslation();

  useEffect(() => {
    console.log('hooks');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('test')}
        </a>
      </header>
    </div>
  );
}
