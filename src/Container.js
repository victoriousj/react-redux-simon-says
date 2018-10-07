import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import './App.css';
// import './App.2.css';
import Button from './Components/Button';
import Controls from './Components/Controls';
import * as ControlActionCreators from './actions/control';

class Container extends Component {

  render() {
    const { dispatch, isPlaying, highScore, currentPlaybackSequence, currentColorScheme, score, buttonColors } = this.props;

    const startGame = bindActionCreators(ControlActionCreators.startGame, dispatch);
    const buttonPress = bindActionCreators(ControlActionCreators.buttonPress, dispatch);
    const changeColorScheme = bindActionCreators(ControlActionCreators.changeColorScheme, dispatch);
    const buttonComponents = buttonColors[currentColorScheme].map((buttonColor, index) => 
      <Button 
        key={index}
        index={index} 
        color={buttonColor}
        buttonPress={buttonPress} 
      />);

    return (
      <div className="App">
        <div className="container">
          {buttonComponents}}
          <Controls 
            score={score}
            startGame={startGame}
            changeColorScheme={changeColorScheme}
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
