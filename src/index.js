/* eslint-disable import/default */
import DevTool from 'mobx-react-devtools';

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./favicon.ico');

render(
  <div>
    {process.env.NODE_ENV == 'development' ? <DevTool /> : null}
    <Router history={browserHistory} routes={routes} />
  </div>,
  document.getElementById('app')
);
