import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './App.css';
// import './App.2.css';
import Button from './components/Button';
import Controls from './components/Controls';
import * as ControlActionCreators from './actions/control';

class Container extends Component {
  state = {
    highScore: 0,
    currentScore: 0,
    isPlaying: false,
    startGame: function() {},
    registerButtonClick: function() {},
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
    const { dispatch } = this.props;
    const buttonComponents = this.state.currentColorScheme().map((buttonColor, index) => 
      <Button color={buttonColor} key={index} />);

    return (
      <div className="App">
        <div className="container">
          {buttonComponents}}
          <Controls />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    control: state.control,
    currentColorScheme: state.currentColorScheme,
  }
);

export default connect(mapStateToProps)(Container);
