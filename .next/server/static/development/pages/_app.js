module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/index */ "./store/index.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/index */ "./store/actions/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 // Stylings






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};
    let isAuth, isAdmin;
    false ? undefined : await ctx.store.dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_7__["serverAuth"](ctx.req));
    ctx.store.getState().auth.token != undefined ? isAuth = true : isAuth = false;
    ctx.store.getState().auth.isAdmin != undefined ? isAdmin = true : isAdmin = false;
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);
    const auth = {
      isAuth,
      isAdmin
    };
    return {
      pageProps,
      auth
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store,
      auth
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store
    }, __jsx(Component, _extends({}, pageProps, {
      auth: auth
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store_index__WEBPACK_IMPORTED_MODULE_6__["initStore"])(MyApp));

/***/ }),

/***/ "./store/actions/Portafolio.js":
/*!*************************************!*\
  !*** ./store/actions/Portafolio.js ***!
  \*************************************/
/*! exports provided: createPortfolio, getPortfolios, deletePortfolio, getPortfolioById, updatePortfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortfolio", function() { return createPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortfolios", function() { return getPortfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePortfolio", function() { return deletePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortfolioById", function() { return getPortfolioById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePortfolio", function() { return updatePortfolio; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionType */ "./store/actions/actionType.js");



const createPortfolio = async payload => {
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_actionType__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'portafolio', payload).then(response => response.data);
};
const getPortfolios = async () => {
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_actionType__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'portafolio').then(response => response.data);
};
const deletePortfolio = portfolioId => {
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token');
  const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': token
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${_actionType__WEBPACK_IMPORTED_MODULE_2__["URL"]}portafolio/${portfolioId}`, {
    headers: headers
  }).then(response => response.data);
};
const getPortfolioById = async id => {
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_actionType__WEBPACK_IMPORTED_MODULE_2__["URL"]}portafolio/${id}`).then(response => response.data);
};
const updatePortfolio = async portfolioData => {
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token');
  const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': token
  };
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`${_actionType__WEBPACK_IMPORTED_MODULE_2__["URL"]}portafolio/${portfolioData._id}`, portfolioData, {
    headers: headers
  }).then(response => response.data).catch(error => rejectPromise(error));
};

/***/ }),

/***/ "./store/actions/actionType.js":
/*!*************************************!*\
  !*** ./store/actions/actionType.js ***!
  \*************************************/
/*! exports provided: URL, AUTH, AUTH_START, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH", function() { return AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_START", function() { return AUTH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SUCCESS", function() { return AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGOUT", function() { return AUTH_LOGOUT; });
const URL = "https://web-portfolios.herokuapp.com/api/"; //auth

const AUTH = 'AUTH';
const AUTH_START = 'AUTH_START';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_ERROR = 'AUTH_ERROR';
const AUTH_LOGOUT = 'AUTH_LOGOUT';

/***/ }),

/***/ "./store/actions/auth.js":
/*!*******************************!*\
  !*** ./store/actions/auth.js ***!
  \*******************************/
/*! exports provided: authStart, authSuccess, authError, logOut, newUser, login, clientAuth, authCheckState, serverAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authStart", function() { return authStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSuccess", function() { return authSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authError", function() { return authError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newUser", function() { return newUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientAuth", function() { return clientAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authCheckState", function() { return authCheckState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverAuth", function() { return serverAuth; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionType */ "./store/actions/actionType.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



const authStart = () => {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_1__["AUTH_START"]
  };
};
const authSuccess = (token, userID, userName, isAdmin) => {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_1__["AUTH_SUCCESS"],
    idToken: token,
    userID: userID,
    userName: userName,
    isAdmin: isAdmin
  };
};
const authError = error => {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_1__["AUTH_ERROR"],
    error: error
  };
};
const logOut = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('token', {
    path: ''
  });
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOGOUT"]
  };
}; //NEW USER----------------------------------------------------------------------------------

const newUser = (name, email, password) => {
  return async dispatch => {
    dispatch(authStart());
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('token');

    if (token) {
      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
      };
    }

    const authData = {
      email: email,
      password: password,
      name: name
    };

    try {
      let res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_actionType__WEBPACK_IMPORTED_MODULE_1__["URL"] + 'users', authData, {
        headers: headers
      });
      const {
        name,
        _id,
        isAdmin
      } = res.data;
      const token = res.headers.x_auth_token;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('token', token);
      dispatch(authSuccess(token, _id, name, isAdmin));
    } catch {
      dispatch(authError(error.response.data.error));
    }
  };
}; //LOGIN------------------------------------------------------------------------------------

const login = (password, name) => {
  return async dispatch => {
    dispatch(authStart());
    const authData = {
      email: name,
      password: password
    };

    try {
      let res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_actionType__WEBPACK_IMPORTED_MODULE_1__["URL"] + 'auth', authData);
      const {
        name,
        _id,
        isAdmin
      } = res.data;
      const token = res.headers.x_auth_token;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('token', token);
      dispatch(authSuccess(token, _id, name, isAdmin));
    } catch {
      dispatch(authError("error!!!"));
    }

    ;
  };
}; //CHECK FOR TOKEN ON CLIENT SIDE----------------------------------------------------------

const clientAuth = () => {
  return async dispatch => {
    await dispatch(authCheckState());
  };
};
const authCheckState = () => {
  return async dispatch => {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('token');

    if (token) {
      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
      };

      try {
        let res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_actionType__WEBPACK_IMPORTED_MODULE_1__["URL"] + 'auth/verifyToken', null, {
          headers: headers
        });
        const {
          userId,
          userName,
          isAdmin
        } = res.data;
        dispatch(authSuccess(token, userId, userName, isAdmin));
      } catch (error) {
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('token', {
          path: ''
        });
        dispatch(authError(error.response.data));
      }
    }
  };
}; //CHECK FOR TOKEN ON SERVER SIDE-------------------------------------------------------------------------

const serverAuth = req => {
  return async dispatch => {
    if (req.headers.cookie) {
      const cookie = req.headers.cookie.substr(6);
      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': cookie
      };

      try {
        let res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_actionType__WEBPACK_IMPORTED_MODULE_1__["URL"] + 'auth/verifyToken', null, {
          headers: headers
        });
        const {
          userId,
          userName,
          isAdmin
        } = res.data;
        dispatch(authSuccess(cookie, userId, userName, isAdmin));
      } catch (error) {
        console.log(error.response.data);
        dispatch(authError(error.response.data));
      }
    }
  };
};

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: createPortfolio, newUser, login, logOut, authCheckState, clientAuth, serverAuth, authSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portafolio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portafolio */ "./store/actions/Portafolio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPortfolio", function() { return _Portafolio__WEBPACK_IMPORTED_MODULE_0__["createPortfolio"]; });

/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./store/actions/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newUser", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["newUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["logOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authCheckState", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["authCheckState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientAuth", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["clientAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serverAuth", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["serverAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authSuccess", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["authSuccess"]; });




/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/Auth */ "./store/reducers/Auth.js");


 //reducer


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _reducers_Auth__WEBPACK_IMPORTED_MODULE_3__["default"]
});
const initStore = (initialState = {}) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/***/ }),

/***/ "./store/reducers/Auth.js":
/*!********************************!*\
  !*** ./store/reducers/Auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionType */ "./store/actions/actionType.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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
  return _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return _objectSpread(_objectSpread({}, state), {}, {
    token: action.idToken,
    userId: action.userID,
    nombre: action.userName,
    isAdmin: action.isAdmin,
    error: null,
    loading: false
  });
};

const authError = (state, action) => {
  return _objectSpread(_objectSpread({}, state), {}, {
    error: action.error,
    token: null,
    userId: null,
    isAdmin: null,
    nombre: null,
    loading: false
  });
};

const authLogOut = (state, action) => {
  return _objectSpread(_objectSpread({}, state), {}, {
    token: null,
    userId: null,
    isAdmin: null,
    nombre: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_actionType__WEBPACK_IMPORTED_MODULE_0__["AUTH_START"]:
      return authStart(state, action);

    case _actions_actionType__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"]:
      return authSuccess(state, action);

    case _actions_actionType__WEBPACK_IMPORTED_MODULE_0__["AUTH_ERROR"]:
      return authError(state, action);

    case _actions_actionType__WEBPACK_IMPORTED_MODULE_0__["AUTH_LOGOUT"]:
      return authLogOut(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9Qb3J0YWZvbGlvLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvYWN0aW9uVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9BdXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwiY3R4IiwiaXNBdXRoIiwiaXNBZG1pbiIsInN0b3JlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwicmVxIiwiZ2V0U3RhdGUiLCJhdXRoIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJwcm9wcyIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsImNyZWF0ZVBvcnRmb2xpbyIsInBheWxvYWQiLCJheGlvcyIsInBvc3QiLCJhY3Rpb25UeXBlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImdldFBvcnRmb2xpb3MiLCJnZXQiLCJkZWxldGVQb3J0Zm9saW8iLCJwb3J0Zm9saW9JZCIsIkNvb2tpZXMiLCJoZWFkZXJzIiwiZGVsZXRlIiwiZ2V0UG9ydGZvbGlvQnlJZCIsImlkIiwidXBkYXRlUG9ydGZvbGlvIiwicG9ydGZvbGlvRGF0YSIsInBhdGNoIiwiX2lkIiwiY2F0Y2giLCJlcnJvciIsInJlamVjdFByb21pc2UiLCJVUkwiLCJBVVRIIiwiQVVUSF9TVEFSVCIsIkFVVEhfU1VDQ0VTUyIsIkFVVEhfRVJST1IiLCJBVVRIX0xPR09VVCIsImF1dGhTdGFydCIsInR5cGUiLCJhdXRoU3VjY2VzcyIsInVzZXJJRCIsInVzZXJOYW1lIiwiaWRUb2tlbiIsImF1dGhFcnJvciIsImxvZ091dCIsInJlbW92ZSIsInBhdGgiLCJuZXdVc2VyIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJhdXRoRGF0YSIsInJlcyIsInhfYXV0aF90b2tlbiIsInNldCIsImxvZ2luIiwiY2xpZW50QXV0aCIsImF1dGhDaGVja1N0YXRlIiwidXNlcklkIiwic2VydmVyQXV0aCIsImNvb2tpZSIsInN1YnN0ciIsImxvZyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiYXV0aFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJub21icmUiLCJsb2FkaW5nIiwiYXV0aFJlZGlyZWN0UGF0aCIsInN0YXRlIiwiYWN0aW9uIiwiYXV0aExvZ091dCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrRDs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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L0QsV0FBTyxFQUFFLElBTFg7QUFNRTRFLFVBQU0sRUFBRSxJQU5WO0FBT0VDLFdBQU8sRUFBRTtBQVBYO0FBU0QsQ0FWRDs7QUFXQSxNQUFNSSxVQUFVLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3BDLHlDQUNLRCxLQURMO0FBRUV4RSxTQUFLLEVBQUUsSUFGVDtBQUdFd0QsVUFBTSxFQUFFLElBSFY7QUFJRS9ELFdBQU8sRUFBRSxJQUpYO0FBS0U0RSxVQUFNLEVBQUU7QUFMVjtBQU9ELENBUkQ7O0FBU0EsTUFBTU0sT0FBTyxHQUFHLENBQUNILEtBQUssR0FBR1IsWUFBVCxFQUF1QlMsTUFBdkIsS0FBa0M7QUFDaEQsVUFBUUEsTUFBTSxDQUFDckMsSUFBZjtBQUNFLFNBQUszQiw4REFBTDtBQUE0QixhQUFPMEIsU0FBUyxDQUFDcUMsS0FBRCxFQUFRQyxNQUFSLENBQWhCOztBQUM1QixTQUFLaEUsZ0VBQUw7QUFBOEIsYUFBTzRCLFdBQVcsQ0FBQ21DLEtBQUQsRUFBUUMsTUFBUixDQUFsQjs7QUFDOUIsU0FBS2hFLDhEQUFMO0FBQTRCLGFBQU9nQyxTQUFTLENBQUMrQixLQUFELEVBQVFDLE1BQVIsQ0FBaEI7O0FBQzVCLFNBQUtoRSwrREFBTDtBQUE2QixhQUFPaUUsVUFBVSxDQUFDRixLQUFELEVBQVFDLE1BQVIsQ0FBakI7O0FBRTdCO0FBQVMsYUFBT0QsS0FBUDtBQU5YO0FBUUQsQ0FURDs7QUFVZUcsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuLy8gU3R5bGluZ3NcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICAgICAgICBsZXQgaXNBdXRoLCBpc0FkbWluO1xyXG4gICAgICAgIHByb2Nlc3MuYnJvd3NlciA/XHJcbiAgICAgICAgICAgIGF3YWl0IGN0eC5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmNsaWVudEF1dGgoKSlcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBhd2FpdCBjdHguc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5zZXJ2ZXJBdXRoKGN0eC5yZXEpKTtcclxuICAgICAgICBjdHguc3RvcmUuZ2V0U3RhdGUoKS5hdXRoLnRva2VuICE9IHVuZGVmaW5lZCA/IGlzQXV0aCA9IHRydWUgOiBpc0F1dGggPSBmYWxzZTtcclxuICAgICAgICBjdHguc3RvcmUuZ2V0U3RhdGUoKS5hdXRoLmlzQWRtaW4gIT0gdW5kZWZpbmVkID8gaXNBZG1pbiA9IHRydWUgOiBpc0FkbWluID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgICAgICBjb25zdCBhdXRoID0geyBpc0F1dGgsIGlzQWRtaW4gfTtcclxuICAgICAgICByZXR1cm4geyBwYWdlUHJvcHMsIGF1dGggfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUsIGF1dGggfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gYXV0aD17YXV0aH0gLz5cclxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKE15QXBwKTtcclxuIiwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSAnLi9hY3Rpb25UeXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQb3J0Zm9saW8gPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLnBvc3QoYWN0aW9uVHlwZS5VUkwgKyAncG9ydGFmb2xpbycsIHBheWxvYWQpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRQb3J0Zm9saW9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldChhY3Rpb25UeXBlLlVSTCArICdwb3J0YWZvbGlvJykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKTtcclxufVxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9ydGZvbGlvID0gKHBvcnRmb2xpb0lkKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICd4LWF1dGgtdG9rZW4nOiB0b2tlblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHthY3Rpb25UeXBlLlVSTH1wb3J0YWZvbGlvLyR7cG9ydGZvbGlvSWR9YCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFBvcnRmb2xpb0J5SWQgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQoYCR7YWN0aW9uVHlwZS5VUkx9cG9ydGFmb2xpby8ke2lkfWApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBvcnRmb2xpbyA9IGFzeW5jIChwb3J0Zm9saW9EYXRhKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICd4LWF1dGgtdG9rZW4nOiB0b2tlblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLnBhdGNoKGAke2FjdGlvblR5cGUuVVJMfXBvcnRhZm9saW8vJHtwb3J0Zm9saW9EYXRhLl9pZH1gLCBwb3J0Zm9saW9EYXRhLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3RQcm9taXNlKGVycm9yKSlcclxufSIsImV4cG9ydCBjb25zdCBVUkwgPSBcImh0dHBzOi8vd2ViLXBvcnRmb2xpb3MuaGVyb2t1YXBwLmNvbS9hcGkvXCJcclxuLy9hdXRoXHJcbmV4cG9ydCBjb25zdCBBVVRIID0gJ0FVVEgnO1xyXG5leHBvcnQgY29uc3QgQVVUSF9TVEFSVCA9ICdBVVRIX1NUQVJUJztcclxuZXhwb3J0IGNvbnN0IEFVVEhfU1VDQ0VTUyA9ICdBVVRIX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUiA9ICdBVVRIX0VSUk9SJztcclxuZXhwb3J0IGNvbnN0IEFVVEhfTE9HT1VUID0gJ0FVVEhfTE9HT1VUJzsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlIGZyb20gJy4vYWN0aW9uVHlwZSc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoU3RhcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IGFjdGlvblR5cGUuQVVUSF9TVEFSVFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhTdWNjZXNzID0gKHRva2VuLCB1c2VySUQsIHVzZXJOYW1lLCBpc0FkbWluKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IGFjdGlvblR5cGUuQVVUSF9TVUNDRVNTLFxyXG4gICAgaWRUb2tlbjogdG9rZW4sXHJcbiAgICB1c2VySUQ6IHVzZXJJRCxcclxuICAgIHVzZXJOYW1lOiB1c2VyTmFtZSxcclxuICAgIGlzQWRtaW46IGlzQWRtaW5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogYWN0aW9uVHlwZS5BVVRIX0VSUk9SLFxyXG4gICAgZXJyb3I6IGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xyXG4gIENvb2tpZXMucmVtb3ZlKCd0b2tlbicsIHsgcGF0aDogJycgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IGFjdGlvblR5cGUuQVVUSF9MT0dPVVRcclxuICB9XHJcbn1cclxuXHJcbi8vTkVXIFVTRVItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBuZXdVc2VyID0gKG5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaChhdXRoU3RhcnQoKSk7XHJcbiAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAneC1hdXRoLXRva2VuJzogdG9rZW5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYXV0aERhdGEgPSB7XHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICBuYW1lOiBuYW1lXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYWN0aW9uVHlwZS5VUkwgKyAndXNlcnMnLCBhdXRoRGF0YSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICBjb25zdCB7IG5hbWUsIF9pZCwgaXNBZG1pbiB9ID0gcmVzLmRhdGE7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gcmVzLmhlYWRlcnMueF9hdXRoX3Rva2VuO1xyXG4gICAgICBDb29raWVzLnNldCgndG9rZW4nLCB0b2tlbik7XHJcbiAgICAgIGRpc3BhdGNoKGF1dGhTdWNjZXNzKHRva2VuLCBfaWQsIG5hbWUsIGlzQWRtaW4pKTtcclxuICAgIH1cclxuICAgIGNhdGNoIHtcclxuICAgICAgZGlzcGF0Y2goYXV0aEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vL0xPR0lOLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IChwYXNzd29yZCwgbmFtZSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaChhdXRoU3RhcnQoKSk7XHJcbiAgICBjb25zdCBhdXRoRGF0YSA9IHtcclxuICAgICAgZW1haWw6IG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYWN0aW9uVHlwZS5VUkwgKyAnYXV0aCcsIGF1dGhEYXRhKTtcclxuICAgICAgY29uc3QgeyBuYW1lLCBfaWQsIGlzQWRtaW4gfSA9IHJlcy5kYXRhO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHJlcy5oZWFkZXJzLnhfYXV0aF90b2tlbjtcclxuICAgICAgQ29va2llcy5zZXQoJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgICBkaXNwYXRjaChhdXRoU3VjY2Vzcyh0b2tlbiwgX2lkLCBuYW1lLCBpc0FkbWluKSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCB7XHJcbiAgICAgIGRpc3BhdGNoKGF1dGhFcnJvcihcImVycm9yISEhXCIpKTtcclxuICAgIH07XHJcbiAgfTtcclxufTtcclxuXHJcblxyXG4vL0NIRUNLIEZPUiBUT0tFTiBPTiBDTElFTlQgU0lERS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IGNsaWVudEF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGF3YWl0IGRpc3BhdGNoKGF1dGhDaGVja1N0YXRlKCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhDaGVja1N0YXRlID0gKCkgPT4ge1xyXG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAneC1hdXRoLXRva2VuJzogdG9rZW5cclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGFjdGlvblR5cGUuVVJMICsgJ2F1dGgvdmVyaWZ5VG9rZW4nLCBudWxsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VySWQsIHVzZXJOYW1lLCBpc0FkbWluIH0gPSByZXMuZGF0YTtcclxuICAgICAgICBkaXNwYXRjaChhdXRoU3VjY2Vzcyh0b2tlbiwgdXNlcklkLCB1c2VyTmFtZSwgaXNBZG1pbikpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCd0b2tlbicsIHsgcGF0aDogJycgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goYXV0aEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG4vL0NIRUNLIEZPUiBUT0tFTiBPTiBTRVJWRVIgU0lERS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IHNlcnZlckF1dGggPSAocmVxKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgICAgY29uc3QgY29va2llID0gcmVxLmhlYWRlcnMuY29va2llLnN1YnN0cig2KTtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICd4LWF1dGgtdG9rZW4nOiBjb29raWVcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGFjdGlvblR5cGUuVVJMICsgJ2F1dGgvdmVyaWZ5VG9rZW4nLCBudWxsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICBjb25zdCB7IHVzZXJJZCwgdXNlck5hbWUsIGlzQWRtaW4gfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIGRpc3BhdGNoKGF1dGhTdWNjZXNzKGNvb2tpZSwgdXNlcklkLCB1c2VyTmFtZSwgaXNBZG1pbikpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgZGlzcGF0Y2goYXV0aEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IHtcclxuICAgIGNyZWF0ZVBvcnRmb2xpb1xyXG59IGZyb20gJy4vUG9ydGFmb2xpbyc7XHJcbmV4cG9ydCB7XHJcbiAgICBuZXdVc2VyLFxyXG4gICAgbG9naW4sXHJcbiAgICBsb2dPdXQsXHJcbiAgICBhdXRoQ2hlY2tTdGF0ZSxcclxuICAgIGNsaWVudEF1dGgsXHJcbiAgICBzZXJ2ZXJBdXRoLFxyXG4gICAgYXV0aFN1Y2Nlc3NcclxufSBmcm9tICcuL2F1dGgnOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG4vL3JlZHVjZXJcclxuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvQXV0aCc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXV0aDogYXV0aFJlZHVjZXIsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpKTtcclxufTsiLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZSc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdG9rZW46IG51bGwsXHJcbiAgdXNlcklkOiBudWxsLFxyXG4gIGlzQWRtaW46IG51bGwsXHJcbiAgbm9tYnJlOiBudWxsLFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIGF1dGhSZWRpcmVjdFBhdGg6ICcvJ1xyXG59O1xyXG5cclxuY29uc3QgYXV0aFN0YXJ0ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGxvYWRpbmc6IHRydWVcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGF1dGhTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICB0b2tlbjogYWN0aW9uLmlkVG9rZW4sXHJcbiAgICB1c2VySWQ6IGFjdGlvbi51c2VySUQsXHJcbiAgICBub21icmU6IGFjdGlvbi51c2VyTmFtZSxcclxuICAgIGlzQWRtaW46IGFjdGlvbi5pc0FkbWluLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBsb2FkaW5nOiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGF1dGhFcnJvciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgIHRva2VuOiBudWxsLFxyXG4gICAgdXNlcklkOiBudWxsLFxyXG4gICAgaXNBZG1pbjogbnVsbCxcclxuICAgIG5vbWJyZTogbnVsbCxcclxuICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgfVxyXG59XHJcbmNvbnN0IGF1dGhMb2dPdXQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIHRva2VuOiBudWxsLFxyXG4gICAgdXNlcklkOiBudWxsLFxyXG4gICAgaXNBZG1pbjogbnVsbCxcclxuICAgIG5vbWJyZTogbnVsbCxcclxuICB9XHJcbn1cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlLkFVVEhfU1RBUlQ6IHJldHVybiBhdXRoU3RhcnQoc3RhdGUsIGFjdGlvbilcclxuICAgIGNhc2UgYWN0aW9uVHlwZS5BVVRIX1NVQ0NFU1M6IHJldHVybiBhdXRoU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZS5BVVRIX0VSUk9SOiByZXR1cm4gYXV0aEVycm9yKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlLkFVVEhfTE9HT1VUOiByZXR1cm4gYXV0aExvZ091dChzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==