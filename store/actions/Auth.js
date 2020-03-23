import axios from 'axios';
import * as actionType from './actionType';
import Cookies from "js-cookie";

export const authStart = () => {
  return {
    type: actionType.AUTH_START
  }
}

export const authSuccess = (token, userID, userName, isAdmin) => {
  return {
    type: actionType.AUTH_SUCCESS,
    idToken: token,
    userID: userID,
    userName: userName,
    isAdmin: isAdmin
  }
}

export const authError = (error) => {
  return {
    type: actionType.AUTH_ERROR,
    error: error
  }
}

export const logOut = () => {
  Cookies.remove('token', { path: '' });
  return {
    type: actionType.AUTH_LOGOUT
  }
}

//NEW USER----------------------------------------------------------------------------------
export const newUser = (name, email, password) => {
  return async dispatch => {
    dispatch(authStart());
    const token = Cookies.get('token');
    if (token) {
      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    }
    const authData = {
      email: email,
      password: password,
      name: name
    };
    try {
      let res = await axios.post(actionType.URL + 'users', authData, { headers: headers });
      const { name, _id, isAdmin } = res.data;
      const token = res.headers.x_auth_token;
      Cookies.set('token', token);
      dispatch(authSuccess(token, _id, name, isAdmin));
    }
    catch {
      dispatch(authError(error.response.data.error));
    }
  }
};

//LOGIN------------------------------------------------------------------------------------
export const login = (password, name) => {
  return async dispatch => {
    dispatch(authStart());
    const authData = {
      email: name,
      password: password
    }
    try {
      let res = await axios.post(actionType.URL + 'auth', authData);
      const { name, _id, isAdmin } = res.data;
      const token = res.headers.x_auth_token;
      Cookies.set('token', token);
      dispatch(authSuccess(token, _id, name, isAdmin));
    }
    catch {
      dispatch(authError("error!!!"));
    };
  };
};


//CHECK FOR TOKEN ON CLIENT SIDE----------------------------------------------------------
export const clientAuth = () => {
  return async dispatch => {
    await dispatch(authCheckState());
  }
}

export const authCheckState = () => {
  return async dispatch => {
    const token = Cookies.get('token');
    if (token) {
      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
      try {
        let res = await axios.post(actionType.URL + 'auth/verifyToken', null, { headers: headers });
        const { userId, userName, isAdmin } = res.data;
        dispatch(authSuccess(token, userId, userName, isAdmin));
      } catch (error) {
        Cookies.remove('token', { path: '' });
        dispatch(authError(error.response.data));
      }
    }
  };
};

//CHECK FOR TOKEN ON SERVER SIDE-------------------------------------------------------------------------
export const serverAuth = (req) => {
  return async dispatch => {
    if (req.headers.cookie) {
      const cookie = req.headers.cookie.substr(6);
      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': cookie
      }
      try {
        let res = await axios.post(actionType.URL + 'auth/verifyToken', null, { headers: headers })
        const { userId, userName, isAdmin } = res.data;
        dispatch(authSuccess(cookie, userId, userName, isAdmin));
      } catch (error) {
        console.log(error.response.data)
        dispatch(authError(error.response.data));
      }
    }
  }
}

