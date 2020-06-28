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
      return window.open(portfolio.demo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BvcnRmb2xpb3MvUG9ydGZvbGlvQ2FyZC5qcyJdLCJuYW1lcyI6WyJQb3J0Zm9saW9DYXJkIiwicHJvcHMiLCJwb3J0Zm9saW8iLCJjaGlsZHJlbiIsInRpdGxlIiwiaW1hZ2UiLCJ0b29scyIsImRlc2NyaXB0aW9uIiwid2luZG93Iiwib3BlbiIsInVybCIsImRlbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUN2QkMsU0FEdUIsR0FDQ0QsS0FERCxDQUN2QkMsU0FEdUI7QUFBQSxNQUNaQyxRQURZLEdBQ0NGLEtBREQsQ0FDWkUsUUFEWTtBQUUvQixTQUNFLE1BQUMsK0NBQUQ7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FDRSxNQUFDLHFEQUFEO0FBQVksYUFBUyxFQUFDO0FBQXRCLEtBQ0dELFNBQVMsQ0FBQ0UsS0FEYixDQURGLEVBSUUsTUFBQyxtREFBRDtBQUFVLGFBQVMsRUFBQztBQUFwQixLQUNFO0FBQUssT0FBRyxnQ0FBeUJGLFNBQVMsQ0FBQ0csS0FBbkMsQ0FBUjtBQUFvRCxTQUFLLEVBQUM7QUFBMUQsSUFERixFQUVFO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FBcUNILFNBQVMsQ0FBQ0ksS0FBL0MsQ0FGRixFQUdFLE1BQUMsbURBQUQ7QUFBVSxhQUFTLEVBQUM7QUFBcEIsS0FDR0osU0FBUyxDQUFDSyxXQURiLENBSEYsRUFNRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dKLFFBREgsRUFFRSxNQUFDLGlEQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxhQUFTLEVBQUMsZUFGWjtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1LLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxTQUFTLENBQUNRLEdBQXRCLENBQU47QUFBQTtBQUhYLGNBRkYsRUFTRSxNQUFDLGlEQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxhQUFTLEVBQUMsZUFGWjtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1GLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxTQUFTLENBQUNTLElBQXRCLENBQU47QUFBQTtBQUhYLGlCQVRGLENBTkYsQ0FKRixDQURGO0FBK0JELENBakNEOztLQUFNWCxhO0FBbUNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9ydGZvbGlvLmpzLmFmZGQ3ZmJjZmFiMWIxNGZjOWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRIZWFkZXIsIENhcmRCb2R5LCBDYXJkVGV4dCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IFBvcnRmb2xpb0NhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHBvcnRmb2xpbywgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY2FyZFwiPlxyXG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICB7cG9ydGZvbGlvLnRpdGxlfVxyXG4gICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJjYXJkQm94XCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2AuLi8uLi9zdGF0aWMvaW1hZ2VzLyR7cG9ydGZvbGlvLmltYWdlfWB9IHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWNhcmQtdG9vbHNcIj57cG9ydGZvbGlvLnRvb2xzfTwvcD5cclxuICAgICAgICA8Q2FyZFRleHQgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAge3BvcnRmb2xpby5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZE1vcmVcIj5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2l0SHViLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKHBvcnRmb2xpby51cmwpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHaXRIdWJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJnaXRIdWItYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4ocG9ydGZvbGlvLmRlbW8pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBsaXZlIERFTU9cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9DYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9