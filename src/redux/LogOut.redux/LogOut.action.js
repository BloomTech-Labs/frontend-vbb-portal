export const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return {
    type: 'LOG_OUT',
  };
};
