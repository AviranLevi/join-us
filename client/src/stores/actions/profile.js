import axios from 'axios';
import * as actionType from './types';

export const getUserProfile = (userId) => (dispatch) => {
  axios
    .get(`/api/user/${userId}`)
    .then((res) => {
      const { data } = res;
      const { user, projects } = data;
      dispatch({ type: actionType.PROFILE_DATA, payload: { ...user, projects } });
    })
    .catch((err) => console.log(err));
};
