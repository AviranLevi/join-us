import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

//components
import App from './App';
import UserLandPage from './pages/user-land-page/UserLandPage';

//stores
import FeaturesStore from './stores/reducers/features';
import UserStore from './stores/reducers/user';
import ProjectStore from './stores/reducers/project';
import ErrorStore from './stores/reducers/errors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
const enhancer = composeEnhancers(applyMiddleware(thunk));

const reducer = combineReducers({
  user: UserStore,
  features: FeaturesStore,
  project: ProjectStore,
  errors: ErrorStore,
});
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path='/project/:id' render={({ match }) => <UserLandPage match={match} />} />
          <Route path='/home' component={App} />
          <Redirect from='*' to='/home/dashboard' />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
