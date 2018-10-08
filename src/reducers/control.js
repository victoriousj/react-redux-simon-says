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
        ],
        [
            "#2ecc71",
            "#9b59b6",
            "#fff",
            "#f0f",
        ]
    ],

    sounds: [
        `https://s3.amazonaws.com/freecodecamp/simonSound1.mp3`,
        `https://s3.amazonaws.com/freecodecamp/simonSound2.mp3`,
        `https://s3.amazonaws.com/freecodecamp/simonSound3.mp3`,
        `https://s3.amazonaws.com/freecodecamp/simonSound4.mp3`,
        `http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3`
    ],

    currentColorScheme: 0,

    fetchRandomButtonIndex: () => Math.floor(Math.random() * 4), 
};

export default function Control(state=initialState, action) {

    switch(action.type) {

        case ControlActionTypes.GAME_START: {
            if (!state.isPlaying) {
                let playbackSequence = [...state.playbackSequence, state.fetchRandomButtonIndex()];

                return {
                    ...state,
                    isPlaying: true,
                    playbackSequence,
                }
            }
            else {
                return Control(state, { type: ControlActionTypes.GAME_END });
            }
        }

        case ControlActionTypes.GAME_END: {

            return {
                ...state,
                score: "000",
                isPlaying: false,
                playbackSequence: [],
                playerPlaybackSequence: [],
            };
        }

        case ControlActionTypes.BUTTON_PRESS: {
            if (state.isPlaying) {                
                let currentPlayerPlaybackSequence = [...state.playerPlaybackSequence, action.buttonIndex];

                for (let i = 0; i < currentPlayerPlaybackSequence.length; i++) {
                    if (state.playbackSequence[i] !== currentPlayerPlaybackSequence[i]) {
                        let gameOver = new Audio(state.sounds[4])
                        gameOver.volume = 0.1;
                        gameOver.play();
                        return Control(state, { type: ControlActionTypes.GAME_END });
                    }
                }
                new Audio(state.sounds[action.buttonIndex]).play();


                if (currentPlayerPlaybackSequence.length !== state.playbackSequence.length) {
                    return {
                        ...state,
                        playerPlaybackSequence: currentPlayerPlaybackSequence
                    }
                }

                let newScore = parseScore(state.score);

                return {
                    ...state,
                    score: newScore,
                    playerPlaybackSequence: [],
                    playbackSequence: [...state.playbackSequence, state.fetchRandomButtonIndex()]
                };
            }

            return {
                ...state,
            }
        }

        case ControlActionTypes.GAME_CHANGE_COLOR_SCHEME: {
            let nextColorScheme = 
                state.currentColorScheme !== state.buttonColors.length -1 
                    ? state.currentColorScheme + 1
                    : 0;

            return {
                ...state,
                currentColorScheme: nextColorScheme
            };
        }

        default:
            return state;
    }
}

// Helpers

const parseScore = score => {
    let numScore = parseInt(++score);

    let parsedScore = score < 10 
        ? "00" + numScore
        : score < 99 
            ? "0" + numScore
            : numScore.toString()

    return parsedScore;
}

// end Helpers