/**
 * sleep.
 * Takes in a time in ms and resolves a promise after that amount of time
 *
 * @param {number} timeInMS: value used for setTimeout
 */
export const sleep = async (timeInMS) => {
  return new Promise((resolve) => setTimeout(resolve, timeInMS));
};
