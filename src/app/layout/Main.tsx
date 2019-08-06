import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Example } from '~/app/example';

export default function () {
  return (
    <main>
      <Switch>
        <Route exact={true} path="/" component={Example} />
      </Switch>
    </main>
  );
}
