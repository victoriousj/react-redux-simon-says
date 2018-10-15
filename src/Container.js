import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect  } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import Button from './components/Button';
import { delay } from './helpers/helpers';
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

    this.endGame = bindActionCreators(ControlActionCreators.endGame, dispatch);
    this.startGame = bindActionCreators(ControlActionCreators.startGame, dispatch);
    this.inputPause = bindActionCreators(ControlActionCreators.inputPause, dispatch);
    this.buttonPress = bindActionCreators(ControlActionCreators.buttonPress, dispatch);
    this.changeColorScheme = bindActionCreators(ControlActionCreators.changeColorScheme, dispatch);
    this.addToPlaybackSequence = bindActionCreators(ControlActionCreators.addToPlaybackSequence, dispatch);

    this.showPlaybackSequence = this.showPlaybackSequence.bind(this);
  }

  componentDidUpdate(prevState) {
    if (this.props.playbackSequence.length !== prevState.playbackSequence.length) {
      this.showPlaybackSequence();
    }
  }

  showPlaybackSequence() {
    let playbackSequence = this.props.playbackSequence;
    let refs = this.refs;

    this.inputPause();
    
    async function animatePlaybackSequence() {
      for (let i = 0; i < playbackSequence.length; i++) {
        console.log(playbackSequence[i]);
        refs[playbackSequence[i]].buttonPress();
        await delay(500);
      }
    };

    animatePlaybackSequence().then(this.inputPause);
  }

  render() {
    const buttonComponents = this.props.buttonColors[this.props.colorScheme].map((buttonColor, index) => 
      <Button key={index} ref={index} index={index} color={buttonColor} isPlaying={this.props.isPlaying} inputPause={this.props.inputPause} buttonPress={this.buttonPress} />
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
    inputPause: state.inputPause,
    colorScheme: state.colorScheme,
    buttonColors: state.buttonColors,
    currentButton: state.currentButton,
    playbackSequence: state.playbackSequence,
    playerPlaybackSequence: state.playerPlaybackSequence,
  }
);

export default connect(mapStateToProps)(Container);