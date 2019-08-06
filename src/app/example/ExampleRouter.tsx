import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Example from './Example';

export default function () {
  return (
    <Fragment>
        <Route exact={true} path="/example" component={Example} />
    </Fragment>
  );
}
