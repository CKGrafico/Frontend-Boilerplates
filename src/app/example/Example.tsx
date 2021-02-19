import { cid, useInject } from 'inversify-hooks';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { useExample } from '~/app/shared/example';
import './example.css';
import { IExampleAlertService } from './shared';

export default function Example() {
  const [t] = useTranslation();
  const [state, incrementProperty1] = useExample();
  const [exampleAlertService] = useInject<IExampleAlertService>(cid.IExampleAlertService);

  useEffect(() => {
    exampleAlertService.get();
  }, [exampleAlertService]);

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
          className="example-link u-color-basic-bright"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('test')}
        </a>
        <Button onClick={onClickText}>{state.property1}</Button>
      </header>
    </div>
  );
}
