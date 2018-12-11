import PropTypes from "prop-types";
import React, { Component } from "react";
import { CSSTransition, transit } from "react-css-transition";

CSSTransition.childContextTypes = {};
const transitionStyles = {
  enterStyle: { transform: transit("translate(52.5%)", 100, "ease-in-out") },
  leaveStyle: { transform: transit("translate(0)", 100, "ease-in-out") },
  activeStyle: { transform: "translate(52.5%)" }
};

export default class ControlButtons extends Component {
  static propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    startGame: PropTypes.func.isRequired,
    changeColorScheme: PropTypes.func.isRequired
  };

  render() {
    const gameLightStyle = `game-light ${
      this.props.isPlaying ? "game-light-on" : ""
    }`;

    return (
      <div className="control-buttons">
        <div className={gameLightStyle} />
        <div onClick={() => this.props.startGame()} className="game-switch">
          <CSSTransition {...transitionStyles} active={this.props.isPlaying}>
            <div className="game-switch-toggle" />
          </CSSTransition>
        </div>
        <div
          onClick={() => this.props.changeColorScheme()}
          className={`game-reset ${
            !this.props.isPlaying ? "game-light-off" : ""
          }`}
        />
      </div>
    );
  }
}
