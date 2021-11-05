import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { exampleModule } from './example';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingMessage />}>
        <Routes>
          {exampleModule.routes}
          <Route path="/" element={<Navigate replace to="/example" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
