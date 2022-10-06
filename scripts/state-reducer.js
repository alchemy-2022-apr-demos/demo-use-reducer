const catState = {
  name: 'Astrophe',
  lives: 9,
  status: 'alive',
}

const reduceCatState = (catState, action) => {
  if(action.type == 'add-life') {
    return {
      ...catState,
      lives: catState.lives + action.amount,
    }
  } else if(action.type == 'remove-life') {
    const newLives = catState.lives - action.amount;
    return {
      ...catState,
      lives: newLives,
      status: newLives < 1 ? 'dead' : 'alive',
    }
  } else {
    return catState;
  }
}

const removeAction = { type: 'remove-life', amount: 10 };
const addAction = { type: 'add-life', amount: 1 };

const addedCatState = reduceCatState(catState, addAction);
console.log('addedCatState', addedCatState);
const finalCatState = reduceCatState(addedCatState, removeAction);

console.log('old cat state', catState);
console.log('newCatState', finalCatState);