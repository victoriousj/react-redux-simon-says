import React from 'react';
import PropTypes from 'prop-types';

const ControlButtons = props => (
    <div className="control-buttons">
    <div className={
        `game-light
        ${props.isPlaying
            ? 'game-light-on'
            : ''}`
        }>
        </div>
        <div 
            className={
                `game-switch 
                ${props.isPlaying 
                ? 'game-on' 
                : 'game-off'}`
            } 
            onClick={() => props.startGame()}
        >
            <div className="game-slider"></div>
        </div>
        <div className={
        `game-reset
        ${!props.isPlaying
            ? 'game-light-off'
            : ''}`
        }>
    </div>
    </div>
)

ControlButtons.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
}

export default ControlButtons;