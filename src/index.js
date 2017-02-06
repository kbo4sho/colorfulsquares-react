import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import Card from './app/components/Card';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import { fetchDataAsync } from './app/actions'

import 'bootstrap-css-only/css/bootstrap.css';
import './index.css';

const store = configureStore();

store.dispatch(fetchDataAsync()).then(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/detail" component={Card}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
