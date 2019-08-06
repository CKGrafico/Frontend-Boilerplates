import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ExampleRouter } from './example';

export default function () {
  return (
    <main>
      <Switch>
        <Route exact={true} path="/" render={() => (<Redirect to="/example"/>)}/>
        <ExampleRouter />
      </Switch>
    </main>
  );
}
