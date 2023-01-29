export const catReducer = (state, action) => {
  if (action.type == 'ignore-cat') {
    const newPets = state.pets - 1;
    return {
      ...state,
      pets: newPets,
      status: newPets > 4 ? 'happy' : 'sad',
    };
  } else {
    return state;
  }
};
