import * as ControlActionTypes from '../actiontypes/control';

const initialState = {
    score: "000",
    
    highScore: "000",

    isPlaying: false,

    currentPlaybackSequence: [],

    buttonColors: [[
      "#e74c3c",
      "#f1c40f",
      "#2ecc71",
      "#9b59b6"
    ],
    [
      "#f0f",
      "#fff",
      "#f00",
      "#0ff"
    ]],

    currentColorScheme: 0,
};

export default function Control(state=initialState, action) {

    switch(action.type) {

        case ControlActionTypes.GAME_START: {
            return {
                ...state,
                isPlaying: state.isPlaying === true ? false : true,
            }
        }

        case ControlActionTypes.GAME_END: {
            return {
                ...state,
                isPlaying: false,
            }
        }

        case ControlActionTypes.GAME_CHANGE_COLOR_SCHEME: {
            return {
                ...state,
                currentColorScheme: state.currentColorScheme === 0 ? 1 : 0
            }
        }

        default:
            return state;
    }
}