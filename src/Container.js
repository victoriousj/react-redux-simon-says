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
    colorScheme: 0,
  };

  changeColorScheme = () => {
    let index = this.state.colorScheme === 0 ? 1 : 0;
    this.setState({colorScheme: index})
  };

  render() {
    const { dispatch, isPlaying, highScore, currentColorScheme, currentScore, buttonColors } = this.props;
    const buttonComponents = this.state.buttonColors[this.state.colorScheme].map((buttonColor, index) => 
      <Button color={buttonColor} key={index} />);

    return (
      <div className="App">
          <button type="button" onClick={this.changeColorScheme}>Change</button>
        <div className="container">
          {buttonComponents}}
          <Controls />
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => (
  {
    isPlaying: state.isPlaying,
    highScore: state.highScore,
    currentScore: state.currentScore,
    buttonColors: state.buttonColors,
    currentColorScheme: state.currentColorScheme
  }
);

export default connect(mapStateToProps)(Container);
