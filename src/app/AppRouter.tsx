import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { exampleModule } from './example';

export default function AppRouter() {
  return (
    <main>
      <Switch>
        <Route exact={true} path="/" render={() => <Redirect to="/example" />} />
        {exampleModule.routes}
      </Switch>
    </main>
  );
}
