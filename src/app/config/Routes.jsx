import React from 'react';
import { Route } from 'react-router-dom';

import Overview from 'app/containers/Overview/Overview';
import Liquidity from 'app/containers/Liquidity/Liquidity';

export const routes = [
  {
    id: 'overview',
    icon: 'fas fa-stream',
    Component: Overview,
    exact: true,
    path: '/',
    title: 'Market overview',
  },
  {
    id: 'liquidity',
    icon: 'fas fa-chart-bar',
    Component: Liquidity,
    exact: true,
    path: '/liquidity',
  },
];

const Routes = () => routes.map(({ Component, exact, path }) => (
  <Route strict exact={exact} path={path} key={path} component={Component} />
));

export default Routes;
