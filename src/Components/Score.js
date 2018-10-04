import React, { Component } from 'react';

class Score extends Component {

    render() {
        return (                    
            <div className="game-score">
                <span>
                    {this.props.score}
                </span>
            </div>
        );
    }
}

export default Score;