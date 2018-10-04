import React, { Component } from 'react';

class ControlButtons extends Component {

    render() {
        return (
            <div className="control-buttons">
                <div className="game-light"></div>
                    <div className="game-switch">
                        <div className="game-slider"></div>
                    </div>
                <div className="game-reset"></div>
            </div>
        );
    }
}

export default ControlButtons;