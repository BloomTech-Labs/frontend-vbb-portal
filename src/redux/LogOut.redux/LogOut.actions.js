export const LOG_OUT = 'LOG_OUT';
/**
 * logOut.
 * Log out action. Deletes localStorage token and expirationDate
 */
export const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return {
    type: LOG_OUT,
  };
};
