export const isEmpty = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const findErrors = (errorsObj) => {
  const errors = Object.keys(errorsObj).map((key) => (errorsObj[key] ? true : false));
  const err = errors.find((error) => error);
  if (err) {
    return false;
  }
  return true;
};

export const saveTokenInLocalStorage = (token) => localStorage.setItem('accessToken', token);
export const getTokenFromLocalStorage = () => localStorage.getItem('accessToken') || null;
