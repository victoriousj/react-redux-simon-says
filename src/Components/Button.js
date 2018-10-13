import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        buttonPress: PropTypes.func.isRequired,
    };
    
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.audioElement = React.createRef();
        this.showOverlay = this.showOverlay.bind(this);
    }
    
    showOverlay() {
        if (this.props.isPlaying) {
            this.setState( { show: true } );

            setTimeout(() => this.setState( { show: false } ), 150);
        }
    }

    render() {

        return (
            <div 
                onClick={() => this.props.buttonPress(this.props.index)}
                style={ {backgroundColor: this.props.color} } 
                className="button">

                <div onClick={this.showOverlay}
                    className={`button-overlay ${this.state.show ? "button-overlay-on" : ""} ${this.props.isPlaying ? "game-on" : ""}`} >
                </div>

                <audio 
                    ref={this.audioElement} 
                    src={this.props.sound}
                ></audio>
            </div>
        );
    }
}

export default Button;