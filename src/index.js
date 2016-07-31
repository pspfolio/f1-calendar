import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './stores/configureStore';
import * as actions from './actions';

import Info from './components/Info/Info';
import Main from './components/Main/Main';
import './normalize.css';
import './index.css';

const nav = [
    {
        time: '22 - 24 jul',
        name: 'Spanish'
    },
    {
        time: '22 - 24 oct',
        name: 'Italian'
    }
];

const store = configureStore();
store.dispatch(actions.setNavigation(nav));

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
