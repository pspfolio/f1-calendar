import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'

import Main from './components/Main/Main'
import GrandPrix from './containers/GrandPrix'
import Frontpage from './components/Frontpage'

import './normalize.css';
import './index.css';

const store = configureStore();

const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Frontpage}></IndexRoute>
                <Route path="grandprix/:raceId" component={GrandPrix}></Route>
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
