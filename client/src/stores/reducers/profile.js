import * as actionType from '../actions/types';

const initialState = {
  name: '',
  profileImage: '',
  projects: [],
  spotify: '',
  instagram: '',
  tiktok: '',
  facebook: '',
  youtube: '',
  website: '',
  createdAt: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PROFILE_DATA:
      const { payload } = action;
      return {
        ...state,
        name: payload.name,
        projects: payload.projects,
        createdAt: payload.createdAt,
        profileImage: payload.profileImage,
        spotify: payload.spotify,
        instagram: payload.instagram,
        tiktok: payload.tiktok,
        facebook: payload.facebook,
        website: payload.website,
      };

    default:
      return state;
  }
};

export default rootReducer;
