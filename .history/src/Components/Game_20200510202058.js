import React from 'react';
import '../Style/style.css';
import Login from './Login';
import Signup from './Signup';
import Store from './Store';
import { render } from '@testing-library/react';

class Game extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className="game-page">
                <div className="game-div">

                </div>
            </div>
        );
    }
}

export default Game;