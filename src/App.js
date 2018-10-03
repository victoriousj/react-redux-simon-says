import React, { Component } from 'react';

import './App.css';
import Button from './Components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Button />
          <Button />
          <Button />
          <Button />
          <div className="controls">
            <div className="game-name">
              <span>SIMON</span>
            </div>
            <div className="game-controls">
              <div className="game-score">
                <span>
                  000
                </span>
              </div>
              <div className="game-light"></div>
              <div className="game-switch">
                <div className="game-slider"></div>
              </div>
              <div className="game-reset"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
