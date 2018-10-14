import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect  } from 'react-redux';
import PropTypes from 'prop-types';

// import './App.2.css';

import './App.css';
import { sounds } from './resources';
import Button from './components/Button';
import Controls from './components/Controls';
import * as ControlActionCreators from './actions/control';

class Container extends Component {
  static propTypes = {
    score: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    highScore: PropTypes.string.isRequired,
    colorScheme: PropTypes.number.isRequired,
    buttonColors: PropTypes.array.isRequired,
    playbackSequence: PropTypes.array.isRequired,
    playerPlaybackSequence: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.soundEffect = new Audio();
    this.endGame = bindActionCreators(ControlActionCreators.endGame, dispatch);
    this.incScore = bindActionCreators(ControlActionCreators.incScore, dispatch);
    this.startGame = bindActionCreators(ControlActionCreators.startGame, dispatch);
    this.buttonPress = bindActionCreators(ControlActionCreators.buttonPress, dispatch);
    this.changeColorScheme = bindActionCreators(ControlActionCreators.changeColorScheme, dispatch);
    this.addToPlaybackSequence = bindActionCreators(ControlActionCreators.addToPlaybackSequence, dispatch);
  }

  componentDidMount() {
  }

  componentDidUpdate(prevState) {
    this.soundEffect.src = sounds[this.props.currentButton];
    if (prevState.isPlaying === false && this.props.isPlaying === true) {
      return; 
    }

    if (this.props.wrongEntry && this.props.playbackSequence.length > 0) {
      this.endGame();
    } 
  }

  render() {

    const buttonComponents = this.props.buttonColors[this.props.colorScheme].map((buttonColor, index) => 
      <Button key={index} index={index} color={buttonColor} isPlaying={this.props.isPlaying} buttonPress={this.buttonPress} />
    );

    return (
      <div className="App">
        <div className="container">
          {buttonComponents}
          <Controls 
            score={this.props.score}
            startGame={this.startGame}
            isPlaying={this.props.isPlaying}
            changeColorScheme={this.changeColorScheme}
          />
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => (
  {
    score: state.score,
    sounds: state.sounds,
    isPlaying: state.isPlaying,
    highScore: state.highScore,
    wrongEntry: state.wrongEntry,
    colorScheme: state.colorScheme,
    buttonColors: state.buttonColors,
    currentButton: state.currentButton,
    playbackSequence: state.playbackSequence,
    playerPlaybackSequence: state.playerPlaybackSequence,
  }
);

export default connect(mapStateToProps)(Container);