export const fetchRandomButtonIndex = () => 
    Math.floor(Math.random() * 4);

export const getNextColorScheme = state => 
    ++state.colorScheme !== state.buttonColors.length 
    ? state.colorScheme : 0;

export const delay = x => 
    new Promise(r => setTimeout(r, x));

export const parseScore = state => {
    let s = parseInt(state.score);
    let hs = parseInt(state.highScore);

    const parsedScore = ++s < 10 
        ? "00" + s : s < 99 ? "0" + s : s;

    const parsedHighScore = s > hs 
        ? parsedScore : state.highScore;
    
    const newState = {
        ...state,
        score: parsedScore,
        highScore: parsedHighScore,
    }
    return newState;
}