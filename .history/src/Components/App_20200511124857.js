import React from 'react';
import '../Style/style.css';
import Login from './Login';
import Signup from './Signup';
import Store from './Store';
import Game from './Game';
import Header from './Header';
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
              <React.Fragment>
              <Header />
              <Login changeLoginStatus={this.changeLoginStatus} />
              </React.Fragment>
          );

      } else {

          return (
              <React.Fragment>
              <Header />
              <Store />
              </React.Fragment>
          );

      }



  }
}

export default App;
