export const catReducer = (state, action) => {
  if(action.type == 'remove-cat-life') {
    const newLives = state.lives - action.amount;
    return {
      ...state,
      lives: newLives,
      status: newLives < 1 ? 'dead' : 'alive',
    };
  } else {
    return state;
  }
};
