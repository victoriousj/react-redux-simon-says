export const parseScore = score => {
    let numScore = parseInt(++score);

    let parsedScore = score < 10 
        ? "00" + numScore
        : score < 99 
            ? "0" + numScore
            : numScore.toString()

    return parsedScore;
}

export const fetchRandomButtonIndex = () => Math.floor(Math.random() * 4);

export const getNextColorScheme = state => ++state.colorScheme !== state.buttonColors.length ? state.colorScheme : 0;

export const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);