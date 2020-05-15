import React from 'react';
import '../Style/style.css';
import { render } from '@testing-library/react';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {loggedIn: false};
    }

    render() {
      if(this.state.loggedIn == false) {

          return (
              <Login />
          );

      } else {

          return (
              <Game />
          );

      }

  }

export default App;
