import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './index.css';

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
        <Route exact path='*'>
          <Redirect to='/home/dashboard' />
        </Route>
        <Route path='/home' component={App} />
        <Route exact path='/project/:id' render={({ match }) => <UserLandPage match={match} />} />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
