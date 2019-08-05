import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import logo from './logo.svg';
import './App.scss';
import { ExampleStoreType, useExampleStore } from '../store';

export default function () {
  const [t] = useTranslation();
  const [state, dispatch] = useExampleStore();

  useEffect(() => {
    console.log('hooks');
  }, []);


  function onClickText() {
    dispatch({
      type: ExampleStoreType.ADD_TO_FIRST,
      payload: 10
    });
  }

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
        <div onClick={onClickText}>{state.property1}</div>
      </header>
    </div>
  );
}
