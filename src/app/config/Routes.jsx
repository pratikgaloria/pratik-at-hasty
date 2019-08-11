import React from 'react';
import { Route } from 'react-router-dom';

import Overview from 'app/containers/Overview/Overview';
import Liquidity from 'app/containers/Liquidity/Liquidity';

export const routes = [
  {
    id: 'overview',
    Component: Overview,
    exact: true,
    path: '/',
  },
  {
    id: 'liquidity',
    Component: Liquidity,
    exact: true,
    path: '/liquidity',
  },
];

const Routes = () => routes.map(({ Component, exact, path }) => (
  <Route strict exact={exact} path={path} key={path} component={Component} />
));

export default Routes;
