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
    startGame: function() {},
    registerButtonClick: function() {},
  };

  render() {
    const { dispatch, isPlaying, highScore, currentColorScheme, score, buttonColors } = this.props;
    const changeColorScheme = bindActionCreators(ControlActionCreators.changeColorScheme, dispatch);

    const buttonComponents = buttonColors[currentColorScheme].map((buttonColor, index) => 
      <Button color={buttonColor} key={index} />);

    return (
      <div className="App">
          <button type="button" onClick={changeColorScheme}>Change</button>
        <div className="container">
          {buttonComponents}}
          <Controls score={score}/>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => (
  {
    isPlaying: state.isPlaying,
    highScore: state.highScore,
    score: state.score,
    buttonColors: state.buttonColors,
    currentColorScheme: state.currentColorScheme
  }
);

export default connect(mapStateToProps)(Container);
