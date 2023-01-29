export const petCatAction = (amount) => {
  return {
    type: 'pet-cat',
    amount,
  };
};

export const ignoreCatAction = () => {
  return {
    type: 'ignore-cat',
  };
};
