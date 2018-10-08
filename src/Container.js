import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect  } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
// import './App.2.css';
import Button from './components/Button';
import Controls from './components/Controls';
import * as ControlActionCreators from './actions/control';

class Container extends Component {
  static propTypes = {
    score: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    highScore: PropTypes.string.isRequired,
    buttonColors: PropTypes.array.isRequired,
    playbackSequence: PropTypes.array.isRequired,
    currentColorScheme: PropTypes.number.isRequired,
    playerPlaybackSequence: PropTypes.array.isRequired,
  };

  render() {
    const { dispatch, isPlaying, highScore, playerPlaybackSequence, playbackSequence, currentColorScheme, score, buttonColors } = this.props;

    const startGame = bindActionCreators(ControlActionCreators.startGame, dispatch);
    const buttonPress = bindActionCreators(ControlActionCreators.buttonPress, dispatch);
    const changeColorScheme = bindActionCreators(ControlActionCreators.changeColorScheme, dispatch);
    
    const buttonComponents = buttonColors[currentColorScheme].map((buttonColor, index) => 
      <Button key={index} index={index} color={buttonColor} buttonPress={buttonPress} />);

    return (
      <div className="App">
        <div className="container">
          {buttonComponents}
          <Controls 
            score={score}
            startGame={startGame}
            isPlaying={isPlaying}
            changeColorScheme={changeColorScheme}
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
    playbackSequence: state.playbackSequence,
    currentColorScheme: state.currentColorScheme,
    playerPlaybackSequence: state.playerPlaybackSequence,
  }
);

export default connect(mapStateToProps)(Container);
