import React from 'react';
import '../Style/style.css';
import Login from './Login';
import Signup from './Signup';
import Store from './Store';
import { render } from '@testing-library/react';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {loggedIn: false};
    }

    changeLoginStatus = () => {
      this.setState(prevState=> ({
        loggedIn: !prevState.loggedIn
      }));
    }

    render() {
      if(this.state.loggedIn === false) {

          return (
              <Login changeLoginStatus={this.changeLoginStatus} />
          );

      } else {

          return (
              <Store />
          );

      }

  }
}

export default App;
