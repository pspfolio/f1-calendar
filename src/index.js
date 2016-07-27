import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Info from './components/Info/Info';
import Main from './components/Main/Main';
import './index.css';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Info}></IndexRoute>

        </Route>
    </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
