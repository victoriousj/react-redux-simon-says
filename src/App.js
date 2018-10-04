import React, { Component } from 'react';

import './App.css';
// import './App.2.css';
import Button from './Components/Button';
import Controls from './Components/Controls';

class App extends Component {
  state = {
    isPlaying: false,
    highScore: 0,
    currentScore: 0,
    registerButtonClick: function() {},
    startGame: function() {},
    buttonColors: [[
      "#e74c3c",
      "#f1c40f",
      "#2ecc71",
      "#9b59b6"
    ],
    [
      "#f0f",
      "#fff",
      "#f00",
      "#0ff"
    ]],
    currentColorScheme: function (index = 0) {
      return this.buttonColors[index];
    }
  };

  render() {
    const buttons = this.state.currentColorScheme().map(buttonColor => 
      <Button color={buttonColor} />);

    return (
      <div className="App">
        <div className="container">
          {buttons}}
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;
