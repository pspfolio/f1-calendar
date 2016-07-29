import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './stores/configureStore';
import * as actions from './actions';

import Info from './components/Info/Info';
import Main from './components/Main/Main';
import './index.css';

const nav = [
    {
        imgSrc: "http://vignette3.wikia.nocookie.net/rr3/images/e/e8/Circuit_Catalunya_2007.svg/revision/latest?cb=20160413121045", name: "Spanish"
    },
    {
        imgSrc: "http://vignette3.wikia.nocookie.net/rr3/images/e/e8/Circuit_Catalunya_2007.svg/revision/latest?cb=20160413121045", name: "Italian"
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
