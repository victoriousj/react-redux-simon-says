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

export const changeColorScheme = colorSchemeId => {
    return {
        type: ControlActionTypes.GAME_CHANGE_COLOR_SCHEME,
        colorSchemeId
    }
}