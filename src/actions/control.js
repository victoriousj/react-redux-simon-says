import * as ControlActionTypes from '../actiontypes/control';


export const endGame = () => ({ type: ControlActionTypes.GAME_END });

export const incScore = () => ({ type: ControlActionTypes.INC_SCORE });

export const startGame = () => ({ type: ControlActionTypes.GAME_START });

export const wrongEntry = () => ({ type: ControlActionTypes.WRONG_ENTRY });

export const addToPlaybackSequence = () => ({ type: ControlActionTypes.ADD_TO_PLAYBACK_SEQUENCE });

export const buttonPress = buttonIndex => ({ type: ControlActionTypes.BUTTON_PRESS, buttonIndex });

export const changeColorScheme = colorSchemeId => ({ type: ControlActionTypes.GAME_CHANGE_COLOR_SCHEME, colorSchemeId });
