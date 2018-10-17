import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect  } from 'react-redux';
import PropTypes from 'prop-types';

import Button from './components/Button';
import { delay } from './helpers/helpers';
import Controls from './components/Controls';
import * as ControlActionCreators from './actions/control';

class Container extends Component {
  static propTypes = {
    score: PropTypes.string.isRequired,
    hScore: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    inputPause: PropTypes.bool.isRequired,
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
    this.haltInput = bindActionCreators(ControlActionCreators.haltInput, dispatch);
    this.allowInput = bindActionCreators(ControlActionCreators.allowInput, dispatch);
    this.buttonPress = bindActionCreators(ControlActionCreators.buttonPress, dispatch);
    this.changeColorScheme = bindActionCreators(ControlActionCreators.changeColorScheme, dispatch);
    this.addToPlaybackSequence = bindActionCreators(ControlActionCreators.addToPlaybackSequence, dispatch);

    this.showPlaybackSequence = this.showPlaybackSequence.bind(this);
  }

  componentDidMount() {
    console.log('loaded');
  }

  componentDidUpdate(prevState) {
    if (this.props.playbackSequence.length !== prevState.playbackSequence.length && this.props.isPlaying === true) {
      setTimeout(() => { this.showPlaybackSequence() }, 1000);
    }
  }

  showPlaybackSequence() {  
    (async () => {
      for (let i = 0; i < this.props.playbackSequence.length;) {
        this.refs[this.props.playbackSequence[i++]].buttonPress();
        await delay(500);
      }
      await this.allowInput();
    })();
  }

  render() {
    const buttonComponents = this.props.buttonColors[this.props.colorScheme].map((buttonColor, index) => 
      <Button key={index} ref={index} index={index} color={buttonColor} isPlaying={this.props.isPlaying} inputPause={this.props.inputPause} buttonPress={this.buttonPress} />
    );

    return (
      <div className="App">
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionLeaveTimeout={0} transitionEnterTimeout={0} transitionAppearTimeout={700}>
        <div className="container">
          {buttonComponents}
          <Controls score={this.props.score} startGame={this.startGame} isPlaying={this.props.isPlaying} changeColorScheme={this.changeColorScheme} />
        </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  };
}

const mapStateToProps = state => (
  {
    score: state.score,
    hScore: state.hScore,
    isPlaying: state.isPlaying,
    inputPause: state.inputPause,
    colorScheme: state.colorScheme,
    buttonColors: state.buttonColors,
    currentButton: state.currentButton,
    playbackSequence: state.playbackSequence,
    playerPlaybackSequence: state.playerPlaybackSequence,
  }
);

export default connect(mapStateToProps)(Container);