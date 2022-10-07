
export const removeCatLifeAction = (amount) => {
  return {
    type: 'remove-cat-life',
    amount,
  };
};

export const addCatLifeAction = (amount) => {
  return {
    type: 'add-cat-life',
    amount,
  };
};
