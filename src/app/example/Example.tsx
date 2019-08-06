import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useExample } from '~/app/shared/example';
import css from './example.module.scss';
import { createStyles } from '~/app/helpers';
const styles = createStyles(css);

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
    <div className={styles.example}>
      <header className={styles.example$header}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          </p>
        <a
          className={styles.example$link}
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
