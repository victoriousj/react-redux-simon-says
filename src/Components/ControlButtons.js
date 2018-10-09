import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransition, transit } from 'react-css-transition';

CSSTransition.childContextTypes = {
    // this can be empty
}

const transitionStyles = {
    defaultStyle: {
        transform: "translateX(-1.8vh)"
    },
    enterStyle: {
      transform: transit("translateX(1.8vh)", 200, "ease-in-out"),
    },
    leaveStyle: {
      transform: transit("translateX(-1.8vh)", 200, "ease-in-out"),
    },
    activeStyle: {
      transform: "translate(1.8vh, 0)",
    },
  };

  const switchStyle = {
    borderRadius: "2px",
    background: "#bdc3c7",
    height: "2.5vh",
    width: "2.5vh",
    marginTop: '.25vh'
  };

  const Switch = () => {
      return (
            <div style={ switchStyle }> </div>
        )
    }

class ControlButtons extends Component {
    static propTypes = {
        isPlaying: PropTypes.bool.isRequired,
    }

    render() {
        return (
            <div className="control-buttons">
                <div className={
                    `game-light
                    ${this.props.isPlaying ? 'game-light-on' : ''}`
                    }>
                </div>
                <div 
                    onClick={() => this.props.startGame()}
                    className={`game-switch ${this.props.isPlaying ? 'game-on' : 'game-off'}`}
                >
                    <CSSTransition {...transitionStyles} active={this.props.isPlaying}>
                        <Switch />
                    </CSSTransition>
                </div>
                <div 
                    onClick={() => this.props.changeColorScheme()}
                    className={`game-reset ${!this.props.isPlaying ? 'game-light-off' : ''}`}>
                </div>
            </div>
        )
    }
}

export default ControlButtons;