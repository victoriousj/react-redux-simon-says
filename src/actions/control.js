import * as ControlActionTypes from '../actiontypes/control';

export const startGame = () => {
    return {
        type: ControlActionTypes.GAME_START
    };
};

export const endGame = () => {
    return {
        type: ControlActionTypes.GAME_END
    };
};

export const buttonPress = buttonIndex => {
    return {
        type: ControlActionTypes.BUTTON_PRESS,
        buttonIndex
    };
};

export const changeColorScheme = colorSchemeId => {
    return {
        type: ControlActionTypes.GAME_CHANGE_COLOR_SCHEME,
        colorSchemeId
    };
};