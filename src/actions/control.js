import * as ControlActionTypes from '../actiontypes/control';

export const gameStart = () => {
    return {
        type: ControlActionTypes.GAME_START
    };
};

export const gameEnd = () => {
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