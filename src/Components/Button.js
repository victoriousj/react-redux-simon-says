import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
    <div 
        onClick={() => console.log(props.index)}
        style={{backgroundColor: props.color}} 
        className="button">
    </div>
);

Button.propTypes = {
    index: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    buttonPress: PropTypes.func.isRequired,
};

export default Button;