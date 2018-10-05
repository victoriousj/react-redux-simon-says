import React, { Component } from 'react';

import Score from './Score';
import ControlButtons from './ControlButtons';

class Controls extends Component {

    render() {
        return(
            <div className="controls">
                <div className="game-name">
                    <span>simon</span>
                </div>
                <div className="game-controls">
                    <Score score={this.props.score} />
                    <ControlButtons isPlaying={this.props.isPlaying} startGame={this.props.startGame}/>
                </div>
            </div>
        );
    }
}

export default Controls;