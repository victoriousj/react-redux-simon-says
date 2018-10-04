import React, { Component } from 'react';

import './App.css';
// import './App.2.css';
import Button from './Components/Button';
import Controls from './Components/Controls';

class App extends Component {
  state = {
    buttonColors: [
      "#e74c3c",
      "#f1c40f",
      "#2ecc71",
      "#9b59b6"
    ]
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.state.buttonColors.map(button => <Button />)}
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;
