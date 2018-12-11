import React, { Component } from "react";
import PropTypes from "prop-types";

import { sounds } from "../resources";

export default class Button extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    inputPause: PropTypes.bool.isRequired,
    buttonPress: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  registerButtonPress = () => {
    if (!this.props.inputPause && this.props.isPlaying) {
      this.buttonPress();
      this.props.buttonPress(this.props.index);
    }
  };

  buttonPress = () => {
    this.setState({ show: true });

    const soundEffect = new Audio();
    soundEffect.src = sounds[this.props.index];
    soundEffect.currentTime = 0.125;
    soundEffect.play();

    setTimeout(() => this.setState({ show: false }), 150);
  };

  render() {
    const { props, state } = this;
    const { color, inputPause, isPlaying } = props;

    const buttonStyle = `button ${
      state.show && !inputPause ? "button-shrink" : ""
    }`;
    const buttonOverlayStyle = `button-overlay ${
      state.show ? "button-overlay-on" : ""
    } ${isPlaying ? "game-on" : ""}`;

    return (
      <div
        className={buttonStyle}
        onClick={this.registerButtonPress}
        style={{ backgroundColor: color }}
      >
        <div className={buttonOverlayStyle} />
      </div>
    );
  }
}
