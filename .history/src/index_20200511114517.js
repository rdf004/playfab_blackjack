import React from 'react';
import ReactDOM from 'react-dom';
import './Style/style.css';
import App from './Components/App';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Store from './Components/Store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {App} />
      <Route path = "login" component = {Login} />
    </Route>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
