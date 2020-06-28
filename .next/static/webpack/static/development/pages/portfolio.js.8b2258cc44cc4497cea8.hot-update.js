webpackHotUpdate("static\\development\\pages\\portfolio.js",{

/***/ "./components/portfolios/PortfolioCard.js":
/*!************************************************!*\
  !*** ./components/portfolios/PortfolioCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PortfolioCard = function PortfolioCard(props) {
  var portfolio = props.portfolio,
      children = props.children;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "portfolio-card"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
    className: "portfolio-card-header"
  }, portfolio.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    className: "cardBox"
  }, __jsx("img", {
    src: "../../static/images/".concat(portfolio.image),
    width: "100%"
  }), __jsx("p", {
    className: "portfolio-card-tools"
  }, portfolio.tools), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    className: "portfolio-card-text"
  }, portfolio.description), __jsx("div", {
    className: "readMore"
  }, children, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    className: "gitHub-button",
    onClick: function onClick() {
      return window.open(portfolio.url);
    }
  }, "GitHub"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    className: "gitHub-button",
    onClick: function onClick() {
      return window.open(portfolio.url);
    }
  }, "live DEMO"))));
};

_c = PortfolioCard;
/* harmony default export */ __webpack_exports__["default"] = (PortfolioCard);

var _c;

$RefreshReg$(_c, "PortfolioCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BvcnRmb2xpb3MvUG9ydGZvbGlvQ2FyZC5qcyJdLCJuYW1lcyI6WyJQb3J0Zm9saW9DYXJkIiwicHJvcHMiLCJwb3J0Zm9saW8iLCJjaGlsZHJlbiIsInRpdGxlIiwiaW1hZ2UiLCJ0b29scyIsImRlc2NyaXB0aW9uIiwid2luZG93Iiwib3BlbiIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3ZCQyxTQUR1QixHQUNDRCxLQURELENBQ3ZCQyxTQUR1QjtBQUFBLE1BQ1pDLFFBRFksR0FDQ0YsS0FERCxDQUNaRSxRQURZO0FBRS9CLFNBQ0UsTUFBQywrQ0FBRDtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUNFLE1BQUMscURBQUQ7QUFBWSxhQUFTLEVBQUM7QUFBdEIsS0FDR0QsU0FBUyxDQUFDRSxLQURiLENBREYsRUFJRSxNQUFDLG1EQUFEO0FBQVUsYUFBUyxFQUFDO0FBQXBCLEtBQ0U7QUFBSyxPQUFHLGdDQUF5QkYsU0FBUyxDQUFDRyxLQUFuQyxDQUFSO0FBQW9ELFNBQUssRUFBQztBQUExRCxJQURGLEVBRUU7QUFBRyxhQUFTLEVBQUM7QUFBYixLQUFxQ0gsU0FBUyxDQUFDSSxLQUEvQyxDQUZGLEVBR0UsTUFBQyxtREFBRDtBQUFVLGFBQVMsRUFBQztBQUFwQixLQUNHSixTQUFTLENBQUNLLFdBRGIsQ0FIRixFQU1FO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0osUUFESCxFQUVFLE1BQUMsaURBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLGFBQVMsRUFBQyxlQUZaO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTUssTUFBTSxDQUFDQyxJQUFQLENBQVlQLFNBQVMsQ0FBQ1EsR0FBdEIsQ0FBTjtBQUFBO0FBSFgsY0FGRixFQVNFLE1BQUMsaURBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLGFBQVMsRUFBQyxlQUZaO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTUYsTUFBTSxDQUFDQyxJQUFQLENBQVlQLFNBQVMsQ0FBQ1EsR0FBdEIsQ0FBTjtBQUFBO0FBSFgsaUJBVEYsQ0FORixDQUpGLENBREY7QUErQkQsQ0FqQ0Q7O0tBQU1WLGE7QUFtQ1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3J0Zm9saW8uanMuOGIyMjU4Y2M0NGNjNDQ5N2NlYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEhlYWRlciwgQ2FyZEJvZHksIENhcmRUZXh0LCBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuY29uc3QgUG9ydGZvbGlvQ2FyZCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcG9ydGZvbGlvLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT1cInBvcnRmb2xpby1jYXJkXCI+XHJcbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInBvcnRmb2xpby1jYXJkLWhlYWRlclwiPlxyXG4gICAgICAgIHtwb3J0Zm9saW8udGl0bGV9XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cImNhcmRCb3hcIj5cclxuICAgICAgICA8aW1nIHNyYz17YC4uLy4uL3N0YXRpYy9pbWFnZXMvJHtwb3J0Zm9saW8uaW1hZ2V9YH0gd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY2FyZC10b29sc1wiPntwb3J0Zm9saW8udG9vbHN9PC9wPlxyXG4gICAgICAgIDxDYXJkVGV4dCBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICB7cG9ydGZvbGlvLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkTW9yZVwiPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJnaXRIdWItYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4ocG9ydGZvbGlvLnVybCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdpdEh1YlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdpdEh1Yi1idXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3Blbihwb3J0Zm9saW8udXJsKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgbGl2ZSBERU1PXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==