import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from './authActions';
import initAuthState from './initAuthState';

const authReducer = (state = { ...initAuthState }, action) => {
  switch(action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return { ...state };
  }
};

export default authReducer;
