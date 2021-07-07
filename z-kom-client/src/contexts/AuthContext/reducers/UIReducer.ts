import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS } from "../AuthContext.consts";

export const uiReducer = (state, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
        isTokenError: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
