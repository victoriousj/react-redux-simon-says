import * as ControlActionTypes from '../actiontypes/control';

const initialState = {
    score: "000",
    
    highScore: "000",

    isPlaying: false,

    playbackSequence: [],
    
    playerPlaybackSequence: [],

    buttonColors: [
        [
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
        ]
    ],

    currentColorScheme: 0,

    fetchRandomButtonIndex: () => Math.floor(Math.random() * 4), 
};

export default function Control(state=initialState, action) {

    switch(action.type) {

        case ControlActionTypes.GAME_START: {
            if (!state.isPlaying) {
                return {
                    ...state,
                    isPlaying: true,
                    playbackSequence: []
                }
            }
            else {
                return Control(
                    state, 
                    {
                        type: ControlActionTypes.GAME_END
                    }
                );
            }
        };

        case ControlActionTypes.GAME_END: {
            return {
                ...state,
                score: "000",
                isPlaying: false,
                playerPlaybackSequence: []
            };
        };

        case ControlActionTypes.BUTTON_PRESS: {
            if (state.isPlaying) {
                let currentplayerPlaybackSequence = state.playerPlaybackSequence;
                currentplayerPlaybackSequence.push(action.buttonIndex);

                let newScore = parseScore(state.score);
                
                return {
                    ...state,
                    score: newScore,
                    playerPlaybackSequence: currentplayerPlaybackSequence
                };
            }
            return {
                ...state,
            }
        };

        case ControlActionTypes.GAME_CHANGE_COLOR_SCHEME: {
            return {
                ...state,
                currentColorScheme: state.currentColorScheme === 0 ? 1 : 0
            };
        };

        default:
            return state;
    }
}

// Helpers

const parseScore = score => {
    let numScore = parseInt(score);
    let parsedScore;

    numScore++;

    parsedScore = score < 9 
        ? score = "00" + numScore            
        : score = "0" + numScore;

    return parsedScore;
}

// end Helpers