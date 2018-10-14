import * as ControlActionTypes from '../actiontypes/control';
import * as Helpers from '../helpers/helpers';
import * as Resources from '../resources';
import { sounds } from '../resources';

const initialState = {
    score: "000",
    
    highScore: "000",

    isPlaying: false,

    playbackSequence: [],
    
    playerPlaybackSequence: [],

    buttonColors: Resources.colorSchemes,

    sounds: Resources.sounds,

    wrongEntry: false,

    colorScheme: 0,

    currentButton: null,
};

export default function Control(state=initialState, action) {

    switch(action.type) {

        case ControlActionTypes.GAME_END: {

            return {
                ...state,
                score: "000",
                isPlaying: false,
                currentButton: null,
                playbackSequence: [],
                playerPlaybackSequence: [],
            };
        }

        case ControlActionTypes.GAME_START: {
            let playbackSequence = [...state.playbackSequence, Helpers.fetchRandomButtonIndex()];
            
            return !state.isPlaying 
            ?   { ...state, isPlaying: true, playbackSequence, wrongEntry: false } 
            :   Control(state, { type: ControlActionTypes.GAME_END });
        }

        case ControlActionTypes.INC_SCORE: {
            let newScore = Helpers.parseScore(state.score);

            return {
                ...state,
                score: newScore,
            }
        }

        case ControlActionTypes.WRONG_ENTRY: {
            let soundEffect =  new Audio(sounds[4]);
            soundEffect.currentTime = 0.1;
            soundEffect.volume = 0.3;
            soundEffect.play();

            return {
                ...state,
                wrongEntry: true,
            }
        }

        case ControlActionTypes.BUTTON_PRESS: {
            let currentButton = action.buttonIndex;
            let newPlayerPlaybackSequence = [...state.playerPlaybackSequence, currentButton];

            // Start at the end of the array and work back
            for (let i = newPlayerPlaybackSequence.length; i--;) {
                if (state.playbackSequence[i] !== newPlayerPlaybackSequence[i]){
                    Control(state, {type: ControlActionTypes.WRONG_ENTRY});
                    return Control(state, { type: ControlActionTypes.GAME_END });
                }
            }

            // Skip slightly so sound is heard right after button press
            let soundEffect =  new Audio(sounds[currentButton]);
            soundEffect.currentTime = 0.125;
            soundEffect.play();
            
            // Return the player's inputs until they are the same length and contents, 
            // then reset the player array and add a new entry
            return state.playbackSequence.length !== newPlayerPlaybackSequence.length
                ? {...state, playerPlaybackSequence: newPlayerPlaybackSequence }
                : Control(state, { type: ControlActionTypes.ADD_TO_PLAYBACK_SEQUENCE })
        }

        case ControlActionTypes.ADD_TO_PLAYBACK_SEQUENCE: {
            let newPlaybackSequence = [...state.playbackSequence, Helpers.fetchRandomButtonIndex()];

            return {
                ...state,
                playerPlaybackSequence: [],
                playbackSequence: newPlaybackSequence
            }
        }

        case ControlActionTypes.GAME_CHANGE_COLOR_SCHEME: {
            let nextColorScheme = Helpers.getNextColorScheme(state);

            return {
                ...state,
                colorScheme: nextColorScheme
            };
        }

        default:
            return state;
    }
}