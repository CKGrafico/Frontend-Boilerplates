import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { exampleModule } from './example';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..</div>;

  return (
    <Suspense fallback={<LoadingMessage />}>
      <Switch>
        <Route exact={true} path="/" render={() => <Redirect to="/example" />} />
        {exampleModule.routes}
      </Switch>
    </Suspense>
  );
}
