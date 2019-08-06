import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useExample } from '~/app/shared/example.hook';
import './example.scss';

export default function () {
  const [t] = useTranslation();
  const [state, incrementProperty1] = useExample();

  useEffect(() => {
    console.log('hooks');
  }, []);


  function onClickText() {
    incrementProperty1();
  }

  return (
    <div className="example">
      <header className="example-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          </p>
        <a
          className="example-link"
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