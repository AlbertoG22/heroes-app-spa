import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeroesRoutes } from '../heroes/';
import { LogInPage } from '../auth/pages/LogInPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={
          <PublicRoute>
            <LogInPage />
          </PublicRoute>
        } />
        {/* <Route path='login' element={<LogInPage />} /> */}

        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
        {/* <Route path='/*' element={<HeroesRoutes />} /> */}

      </Routes>
    </>
  );
};
