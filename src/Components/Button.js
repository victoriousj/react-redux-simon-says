import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        buttonPress: PropTypes.func.isRequired,
    };
    
    constructor(props) {
        super(props);
        this.state = { show: false };

        this.buttonPress = this.buttonPress.bind(this);
    }
    
    buttonPress() {
        if (this.props.isPlaying) {
            this.props.buttonPress(this.props.index)
            
            this.setState( { show: true }, 
                () => setTimeout(() => 
                    this.setState( { show: false } ), 150));
        }
    }

    render() {

        return (
            <div onClick={this.buttonPress} style={ {backgroundColor: this.props.color} } className="button">
                <div className={`button-overlay ${this.state.show ? "button-overlay-on" : ""} ${this.props.isPlaying ? "game-on" : ""}`} ></div>
            </div>
        );
    }
}
