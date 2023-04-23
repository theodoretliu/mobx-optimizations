export const SIZE = 10000;

export const randomInt = (limit = SIZE) => {
  return Math.floor(Math.random() * limit);
};
