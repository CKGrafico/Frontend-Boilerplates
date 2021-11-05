import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Example = lazy(() => import('./Example'));

export default <Route path="/example" element={<Example />} />;
