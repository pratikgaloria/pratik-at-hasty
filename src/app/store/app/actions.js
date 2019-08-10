export const constants = {
  SET_LIMIT: '[APP] SET_LIMIT',
};

export const setLimit = payload => ({
  type: constants.SET_LIMIT,
  payload,
});
