import React from 'react';
import '../Style/style.css';
import Login from './Login';
import Store from './Store';
import { render } from '@testing-library/react';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {loggedIn: false};
    }

    render() {
      if(this.state.loggedIn == false) {

          return (
              <Store />
          );

      } else {

          return (
              <Store />
          );

      }

  }
}

export default App;
