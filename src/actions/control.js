import * as ControlActionTypes from '../actiontypes/control';

export const startGame = () => {
    return {
        type: ControlActionTypes.GAME_START
    };
};

export const incScore = () => {
    return {
        type: ControlActionTypes.INC_SCORE
    };
};

export const endGame = () => {
    return {
        type: ControlActionTypes.GAME_END
    };
}

export const buttonPress = buttonIndex => {
    return {
        type: ControlActionTypes.BUTTON_PRESS,
        buttonIndex
    };
};

export const addToPlaybackSequence = () => {
    return {
        type: ControlActionTypes.ADD_TO_PLAYBACK_SEQUENCE
    };
};

export const wrongEntry = () => {
    return {
        type: ControlActionTypes.WRONG_ENTRY
    };
};

export const changeColorScheme = colorSchemeId => {
    return {
        type: ControlActionTypes.GAME_CHANGE_COLOR_SCHEME,
        colorSchemeId
    };
};