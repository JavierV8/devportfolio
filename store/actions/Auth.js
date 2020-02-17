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

export const auth = (password, name, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    let authData = null;
    isSignup ? authData = {
      email: email,
      password: password,
      name: name
    } :
      authData = {
        email: name,
        password: password
      }
    let url = null;
    isSignup ? url = 'http://localhost:4000/api/users' : url = 'http://localhost:4000/api/auth';
    axios.post(url, authData)
      .then(response => {
        let name = response.data.name;
        let id = response.data._id;
        let isAdmin = response.data.isAdmin;
        //let token = Object.entries(response.headers)[2];
        //token = token[1];
        const token = response.headers.x_auth_token;
        Cookies.set('token', token);
        dispatch(authSuccess(token, id, name, isAdmin));
      })
      .catch(error => {
        dispatch(authError(error.response.data.error));
      });
  };
};


export const authCheckState = () => {
  return async dispatch => {
    const token = Cookies.get('token');
    if (token) {
      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
      try {
        let res = await axios.post('http://localhost:4000/api/auth/verifyToken', null, { headers: headers });
        const userId = res.data.userId;
        const userName = res.data.user;
        const isAdmin = res.data.isAdmin;
        dispatch(authSuccess(token, userId, userName, isAdmin));
      } catch (error) {
        Cookies.remove('token', { path: '' });
        dispatch(authError(error.response.data));
      }
    }
  };
};
export const clientAuth = () => {
  return async dispatch => {
    await dispatch(authCheckState());
  }
}
export const serverAuth = (req) => {
  return async dispatch => {
    if (req.headers.cookie) {
      const cookie = req.headers.cookie.substr(6);
      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': cookie
      }
      try {
        let res = await axios.post('http://localhost:4000/api/auth/verifyToken', null, { headers: headers })
        const userId = res.data.userId;
        const userName = res.data.user;
        const isAdmin = res.data.isAdmin;
        dispatch(authSuccess(cookie, userId, userName, isAdmin));
      } catch (error) {
        console.log(error.response.data)
        dispatch(authError(error.response.data));
      }
    }
  }
}
