import React from 'react';
import '../Style/style.css';
import { render } from '@testing-library/react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {loggedIn: false};
  }

  render() {
    return (
      <div className="App">
  
      </div>
    );
  }

}

export default App;
