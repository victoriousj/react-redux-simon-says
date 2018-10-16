import * as ControlActionTypes from '../actiontypes/control';
import * as Helpers from '../helpers/helpers';
import * as Resources from '../resources';
import { sounds } from '../resources';

const initialState = {
    score: "000",
    
    hScore: "000",
    
    colorScheme: 0,
    
    isPlaying: false,

    inputPause: false,
    
    currentButton: null,
    
    playbackSequence: [],
    
    playerPlaybackSequence: [],

    buttonColors: Resources.colorSchemes,
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
            let playbackSequence = [
                ...state.playbackSequence, 
                Helpers.fetchRandomButtonIndex()
            ];
            
            if (state.isPlaying) {
                return Control(state, { type: ControlActionTypes.GAME_END });
            }

            return { 
                ...state, 
                isPlaying: true, 
                playbackSequence,
            } 
        }

        case ControlActionTypes.INPUT_PAUSE: {

            return {
                ...state,
                inputPause: !state.inputPause,
            }
        }

        case ControlActionTypes.BUTTON_PRESS: {
            let newPlayerPlaybackSequence = [
                ...state.playerPlaybackSequence, 
                action.buttonIndex
            ];

            // Start at the end of the array and work back
            for (let i = newPlayerPlaybackSequence.length; i--;) {
                if (state.playbackSequence[i] !== newPlayerPlaybackSequence[i]){
                    let soundEffect =  new Audio(sounds[4]);
                    soundEffect.volume = 0.07;
                    soundEffect.play();
                    return Control(state, { type: ControlActionTypes.GAME_END });
                }
            }
            
            if (state.playbackSequence.length !== newPlayerPlaybackSequence.length) {
                return {
                    ...state, 
                    playerPlaybackSequence: newPlayerPlaybackSequence 
                }
            }
            state = Helpers.parseScore(state);
            return Control(state, { type: ControlActionTypes.ADD_TO_PLAYBACK_SEQUENCE })
        }

        case ControlActionTypes.ADD_TO_PLAYBACK_SEQUENCE: {
            let newPlaybackSequence = [
                ...state.playbackSequence, 
                Helpers.fetchRandomButtonIndex()
            ];

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