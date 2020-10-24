export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const createPlayersArr = (quantityAnswers) => {
  return [true].concat(new Array(quantityAnswers - 1).fill(false));
};
