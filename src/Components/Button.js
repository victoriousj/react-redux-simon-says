import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { sounds } from '../resources';

export default class Button extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        inputPause: PropTypes.bool.isRequired,
        buttonPress: PropTypes.func.isRequired,
    };
    
    constructor(props) {
        super(props);
        
        this.state = { show: false };
        
        this.buttonPress = this.buttonPress.bind(this);
        this.registerButtonPress = this.registerButtonPress.bind(this);
    }
    
    buttonPress() {
        this.setState( { show: true });

        let soundEffect =  new Audio(sounds[this.props.index]);
        soundEffect.currentTime = 0.125;
        soundEffect.play();
                    
        setTimeout(() => this.setState( { show: false } ), 150);
    }

    registerButtonPress() {
        if (!this.props.inputPause && this.props.isPlaying) {
            this.buttonPress();
            this.props.buttonPress(this.props.index)
        }
    }

    render() {

        return (
            <div onClick={this.registerButtonPress} style={ {backgroundColor: this.props.color} } className={`button ${(this.state.show && !this.props.inputPause) ? 'button-shrink' : ''}`}>
                <div className={`button-overlay ${this.state.show ? "button-overlay-on" : ""} ${this.props.isPlaying ? "game-on" : ""}`} ></div>
            </div>
        );
    }
}
