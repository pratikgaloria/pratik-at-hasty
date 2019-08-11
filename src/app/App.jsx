import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'app/config/Routes';
import Base from 'app/components/Base/Base';
import 'app/styles/reset.css';

const App = () => (
  <Router>
    <Base>
      <Routes />
    </Base>
  </Router>
);

export default App;
