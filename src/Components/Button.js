import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
    <div 
        onClick={() => props.buttonPress(props.index)}
        style={{backgroundColor: props.color}} 
        className="button">
        {/* <div className={props.isOverlay ? "button-overlay" : ""} > */}
        <div className={"button-overlay"} >
        </div>
    </div>
);

Button.propTypes = {
    index: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    buttonPress: PropTypes.func.isRequired,
};

export default Button;