import {
  initialUserState,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_USER,
  SET_AUTHENTICATED,
} from "../AuthContext.consts";

export const userReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialUserState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        authConfirmInProgress: false,
        ...action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
