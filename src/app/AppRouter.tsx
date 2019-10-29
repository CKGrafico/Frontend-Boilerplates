import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { exampleRoutes } from './example';

export default function AppRouter() {
  return (
    <main>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={() => <Redirect to="/example" />}
        />
        {exampleRoutes}
      </Switch>
    </main>
  );
}
