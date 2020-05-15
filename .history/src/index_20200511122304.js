import React from 'react';
import ReactDOM from 'react-dom';
import './Style/style.css';
import App from './Components/App';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Store from './Components/Store';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

ReactDOM.render(
  <Switch>
    <Route path = "/" component = {App} />
    <Route path = "login" component = {Login} />
    <Route path="signup" component = {Signup} />
  </Switch>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
