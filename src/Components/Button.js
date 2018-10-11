import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonOverlay from './ButtonOverlay';

class Button extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        buttonPress: PropTypes.func.isRequired,
    };
    
    constructor(props) {
        super(props);
        this.audioElement = React.createRef();
    }

    render() {
        return (
            <div 
                onClick={() => this.props.buttonPress(this.props.index)}
                style={ {backgroundColor: this.props.color} } 
                className="button">
                <ButtonOverlay isPlaying={this.props.isPlaying} />
                <audio 
                    ref={this.audioElement} 
                    src={this.props.sound}
                ></audio>
            </div>
        );
    }
}

export default Button;