import * as ControlActionTypes from '../actiontypes/control';

const initialState = {
    highScore: "000",

    score: "000",

    isPlaying: false,

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
                isPlaying: true,
            }
        }

        case ControlActionTypes.GAME_END: {
            return {
                ...state,
                isPlaying: false,
            }
        }

        case ControlActionTypes.GAME_CHANGE_COLOR_SCHEME: {
            let scheme = state.currentColorScheme === 0 ? 1 : 0;
            console.log(scheme);
            return {
                ...state,
                currentColorScheme: scheme
            }
        }

        default:
            return state;
    }
}