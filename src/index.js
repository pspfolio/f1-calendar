import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';

import Info from './components/Info/Info';
import Main from './components/Main/Main';
import GrandPrix from './containers/GrandPrix';

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
    },
    {
        time: '22 - 24 oct',
        name: 'Belgium'
    }
];

const store = configureStore();
store.dispatch(actions.setNavigation(nav));

const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Info}></IndexRoute>
                <Route path="grandprix/:name" component={GrandPrix}></Route>
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
