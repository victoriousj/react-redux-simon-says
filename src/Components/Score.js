import React from 'react';
import PropTypes from 'prop-types';

const Score = props => (
    <div className="game-score">
        <span>
            {props.score}
        </span>
    </div>
);

Score.propTypes = {
    score: PropTypes.string.isRequired
}

export default Score;