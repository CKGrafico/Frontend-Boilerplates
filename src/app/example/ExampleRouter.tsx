import React from 'react';
import { Route } from 'react-router-dom';
import Example from './Example';

export const exampleRoutes = (
  <Route exact={true} path="/example" component={Example} />
);
