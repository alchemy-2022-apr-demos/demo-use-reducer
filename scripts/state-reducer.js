const catState = {
  name: 'Astrophe',
  pets: 0,
  status: 'sad',
};

const reduceCatState = (catState, action) => {
  if (action.type == 'pet-cat') {
    const newPets = catState.pets + action.amount;
    return {
      ...catState,
      pets: newPets,
      status: newPets > 4 ? 'happy' : 'sad',
    };
  } else if (action.type == 'ignore-cat') {
    const newPets = catState.pets - action.amount;
    return {
      ...catState,
      pets: newPets,
      status: newPets > 4 ? 'happy' : 'sad',
    };
  } else {
    return catState;
  }
};

const ignoreAction = { type: 'ignore-cat', amount: 1 };
const petAction = { type: 'pet-cat', amount: 3 };

const addedCatState = reduceCatState(catState, petAction);
console.log('addedCatState', addedCatState);
const finalCatState = reduceCatState(addedCatState, ignoreAction);

console.log('old cat state', catState);
console.log('newCatState', finalCatState);
