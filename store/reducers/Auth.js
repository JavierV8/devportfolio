import * as actionType from '../actions/actionType';

const initialState = {
  token: null,
  userId: null,
  isAdmin: null,
  nombre: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
};

const authStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: true
  }
}

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.idToken,
    userId: action.userID,
    nombre: action.userName,
    isAdmin: action.isAdmin,
    error: null,
    loading: false
  }
}


const authError = (state, action) => {
  return {
    ...state,
    error: action.error,
    token: null,
    userId: null,
    isAdmin: null,
    nombre: null,
    loading: false
  }
}
const authLogOut = (state, action) => {
  return {
    ...state,
    token: null,
    userId: null,
    isAdmin: null,
    nombre: null,
  }
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_START: return authStart(state, action)
    case actionType.AUTH_SUCCESS: return authSuccess(state, action);
    case actionType.AUTH_ERROR: return authError(state, action);
    case actionType.AUTH_LOGOUT: return authLogOut(state, action);

    default: return state
  }
}
export default reducer;
