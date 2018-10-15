import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect  } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
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
    this.startGame = bindActionCreators(ControlActionCreators.startGame, dispatch);
    this.buttonPress = bindActionCreators(ControlActionCreators.buttonPress, dispatch);
    this.changeColorScheme = bindActionCreators(ControlActionCreators.changeColorScheme, dispatch);
    this.addToPlaybackSequence = bindActionCreators(ControlActionCreators.addToPlaybackSequence, dispatch);
  }

  componentDidUpdate(prevState) {
    if (this.props.playbackSequence.length !== prevState.playbackSequence.length) {
      // Logic for displaying the playback sequence to users.
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
          <Controls score={this.props.score} startGame={this.startGame} isPlaying={this.props.isPlaying} changeColorScheme={this.changeColorScheme} />
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
    colorScheme: state.colorScheme,
    buttonColors: state.buttonColors,
    currentButton: state.currentButton,
    playbackSequence: state.playbackSequence,
    playerPlaybackSequence: state.playerPlaybackSequence,
  }
);

export default connect(mapStateToProps)(Container);