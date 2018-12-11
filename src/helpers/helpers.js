export const fetchRandomButtonIndex = () => Math.floor(Math.random() * 4);

export const delay = x => new Promise(r => setTimeout(r, x));

export const getNextColorScheme = state => {
  return ++state.colorScheme !== state.buttonColors.length
    ? state.colorScheme
    : 0;
};

export const parseScore = state => {
  let s = parseInt(state.score);
  let hs = parseInt(state.highScore);

  const score = ++s < 10 ? `00${s}` : s < 99 ? `0${s}` : s;
  const highScore = s > hs ? score : state.highScore;

  return {
    ...state,
    score,
    highScore
  };
};
