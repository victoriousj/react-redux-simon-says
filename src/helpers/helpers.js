export const parseScore = state => {
    console.log('state', state);
    let s = parseInt(state.score);
    let hs = parseInt(state.highScore);

    let parsedScore = ++s < 10 
    ? "00" + s
    : s < 99 
    ? "0" + s
    : s.toString();

    let parsedHighScore = s > hs ? parsedScore : state.highScore;
    
    let newState = {
        ...state,
        score: parsedScore,
        highScore: parsedHighScore,
    }
    console.log('state', newState);
    return newState;
}

export const fetchRandomButtonIndex = () => Math.floor(Math.random() * 4);

export const getNextColorScheme = state => ++state.colorScheme !== state.buttonColors.length ? state.colorScheme : 0;

export const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);