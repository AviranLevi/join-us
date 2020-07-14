import * as actionType from './types';

export const facebookLogin = (data) => (dispatch) => {
  console.log(data);
  const { name, email, picture } = data;
  if ((name, email)) {
    dispatch({
      type: actionType.FACEBOOK_LOGIN,
      payload: { name, email, imageSrc: picture.data.url },
    });
    dispatch({ type: actionType.CLOSE_LOGIN_TOAST, payload: false });
  } else {
    return {
      type: actionType.FACEBOOK_LOGIN_ERROR,
      payload: true,
    };
  }
};
