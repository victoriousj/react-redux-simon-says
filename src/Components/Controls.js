import React from 'react';

import Score from './Score';
import ControlButtons from './ControlButtons';

const Controls = props => (
    <div className="controls">
        <div className="game-name">
            <span>simon</span>
        </div>
        <div className="game-controls">
            <Score 
                score={props.score} 
                isPlaying={props.isPlaying}
                />
            <ControlButtons 
                isPlaying={props.isPlaying} 
                startGame={props.startGame}
                changeColorScheme={props.changeColorScheme}
            />
        </div>
    </div>
);

export default Controls;