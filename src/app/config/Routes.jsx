import React from 'react';
import { Route } from 'react-router-dom';

import Overview from 'app/containers/Overview/Overview';
import Liquidity from 'app/containers/Liquidity/Liquidity';

const routes = [
  {
    Component: Overview,
    exact: true,
    path: '/',
  },
  {
    Component: Liquidity,
    exact: true,
    path: '/liquidity/:coidId',
  },
];

const Routes = () => routes.map(({ Component, exact, path }) => (
  <Route strict exact={exact} path={path} key={path} component={Component} />
));

export default Routes;
