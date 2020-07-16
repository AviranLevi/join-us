import * as actionType from '../actions/types';

const initialState = {
  signUp: {
    name: false,
    email: false,
    password: false,
    phone: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
