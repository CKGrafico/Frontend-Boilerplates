import { cid, useInject } from 'inversify-hooks';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { useExample } from '~/app/shared/example';
import './example.module.scss';
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
    <div styleName="example">
      <header styleName="example-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a styleName="example-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('test')}
        </a>
        <Button onClick={onClickText}>{state.property1}</Button>
      </header>
    </div>
  );
}
