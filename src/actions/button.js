import * as ButtonActionTypes from '../actiontypes/button';

export const pressButton = id => {
    return {
        type: ButtonActionTypes.PRESS_BUTTON,
        id
    };
};