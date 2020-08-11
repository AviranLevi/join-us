import axios from 'axios';
import * as actionType from './types';

export const getUserProfile = (userId) => (dispatch) => {
  axios
    .get(`/api/user/${userId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
