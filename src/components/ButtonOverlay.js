import React, { Component } from 'react';

class ButtonOverlay extends Component {
    constructor() {
        super();
        this.state = { show: false };
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
                className={`button-overlay ${this.state.show ? "button-overlay-on" : ""} ${this.props.isPlaying ? "game-on" : ""}`} 
                onClick={this.showOverlay}
            ></div>
        );
    };
}

export default ButtonOverlay;