import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import { fetchCardsIfNeeded } from './actions/'

import Main from './components/Main/Main'
import GrandPrix from './containers/GrandPrix'
import GrandPrixCards from './containers/GrandPrixCard'

import './normalize.css';
import './index.css';

const store = configureStore();
store.dispatch(fetchCardsIfNeeded());

const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={GrandPrixCards}></IndexRoute>
                <Route path="grandprix/:raceId/:name" component={GrandPrix}></Route>
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
