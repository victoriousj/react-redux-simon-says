import React, { Component } from 'react';

class Button extends Component {

    render() {
        return (
            <div style={{backgroundColor: this.props.color}} className="button"></div>
        );
    }
}

export default Button;