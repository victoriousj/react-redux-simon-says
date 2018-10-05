import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './App.css';
// import './App.2.css';
import Button from './Components/Button';
import Controls from './Components/Controls';
import * as ControlActionCreators from './actions/control';

class Container extends Component {
  state = {
    registerButtonClick: function() {},
  };

  render() {
    const { dispatch, isPlaying, highScore, currentColorScheme, score, buttonColors } = this.props;
    const startGame = bindActionCreators(ControlActionCreators.startGame, dispatch);
    const changeColorScheme = bindActionCreators(ControlActionCreators.changeColorScheme, dispatch);
    const buttonComponents = buttonColors[currentColorScheme].map((buttonColor, index) => 
      <Button color={buttonColor} key={index} />);

    return (
      <div className="App">
          <button type="button" onClick={changeColorScheme}>Change</button>
        <div className="container">
          {buttonComponents}}
          <Controls 
            score={score}
            startGame={startGame}
            isPlaying={isPlaying}
          />
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => (
  {
    score: state.score,
    isPlaying: state.isPlaying,
    highScore: state.highScore,
    buttonColors: state.buttonColors,
    currentColorScheme: state.currentColorScheme
  }
);

export default connect(mapStateToProps)(Container);
