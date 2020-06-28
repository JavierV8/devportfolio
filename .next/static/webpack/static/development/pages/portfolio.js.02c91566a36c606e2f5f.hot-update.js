webpackHotUpdate("static\\development\\pages\\portfolio.js",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_shared_BasePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/shared/BasePage */ "./components/shared/BasePage.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_portfolios_PortfolioCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/portfolios/PortfolioCard */ "./components/portfolios/PortfolioCard.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store_actions_Portafolio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/actions/Portafolio */ "./store/actions/Portafolio.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Portfolio = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Portfolio, _React$Component);

  var _super = _createSuper(Portfolio);

  function Portfolio() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Portfolio);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Portfolio, [{
    key: "navigateToEdit",
    value: function navigateToEdit(portfolioId, e) {
      e.stopPropagation();
      _routes__WEBPACK_IMPORTED_MODULE_12__["Router"].push({
        pathname: "/portfolioEdit",
        query: {
          id: portfolioId
        }
      });
    }
  }, {
    key: "displayDeleteWarning",
    value: function displayDeleteWarning(portfolioId, e) {
      e.stopPropagation();
      var isConfirm = confirm("Are you sure you want to delete this portfolio???");

      if (isConfirm) {
        this.deletePortfolio(portfolioId);
      }
    }
  }, {
    key: "deletePortfolio",
    value: function deletePortfolio(portfolioId) {
      Object(_store_actions_Portafolio__WEBPACK_IMPORTED_MODULE_13__["deletePortfolio"])(portfolioId).then(function () {
        _routes__WEBPACK_IMPORTED_MODULE_12__["Router"].pushRoute("/portfolio");
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "renderPortfolios",
    value: function renderPortfolios(portfolios) {
      var _this = this;

      var _this$props$auth = this.props.auth,
          isAuth = _this$props$auth.isAuth,
          isAdmin = _this$props$auth.isAdmin;
      portfolios.sort(function (a, b) {
        return a.num < b.num ? 1 : b.num < a.num ? -1 : 0;
      });
      return portfolios.map(function (portfolio, index) {
        return __jsx(_components_portfolios_PortfolioCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
          className: "portfolio-card",
          portfolio: portfolio
        }, isAuth && isAdmin ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          onClick: function onClick(e) {
            return _this.navigateToEdit(portfolio._id, e);
          },
          color: "warning"
        }, "Edit"), " ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          onClick: function onClick(e) {
            return _this.displayDeleteWarning(portfolio._id, e);
          },
          color: "danger"
        }, "Delete")) : null);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          portfolios = _this$props.portfolios,
          auth = _this$props.auth;
      return __jsx(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        auth: auth,
        className: "portfolio-cover"
      }, __jsx(_components_shared_BasePage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "portfolio-page bounceInRight",
        title: "Portfolio"
      }, __jsx("p", {
        className: "portfolio-text"
      }, "Feel free to see some of my code... Some concepts of software engineering that i like to share with the community:"), __jsx("div", {
        className: "portfolio-container"
      }, this.renderPortfolios(portfolios))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var portfolios;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                portfolios = [];
                _context.prev = 1;
                _context.next = 4;
                return Object(_store_actions_Portafolio__WEBPACK_IMPORTED_MODULE_13__["getPortfolios"])();

              case 4:
                portfolios = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 10:
                return _context.abrupt("return", {
                  portfolios: portfolios
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 7]]);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3J0Zm9saW8uanMiXSwibmFtZXMiOlsiUG9ydGZvbGlvIiwicG9ydGZvbGlvSWQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJpZCIsImlzQ29uZmlybSIsImNvbmZpcm0iLCJkZWxldGVQb3J0Zm9saW8iLCJ0aGVuIiwicHVzaFJvdXRlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicG9ydGZvbGlvcyIsInByb3BzIiwiYXV0aCIsImlzQXV0aCIsImlzQWRtaW4iLCJzb3J0IiwiYSIsImIiLCJudW0iLCJtYXAiLCJwb3J0Zm9saW8iLCJpbmRleCIsIm5hdmlnYXRlVG9FZGl0IiwiX2lkIiwiZGlzcGxheURlbGV0ZVdhcm5pbmciLCJyZW5kZXJQb3J0Zm9saW9zIiwiZ2V0UG9ydGZvbGlvcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxTOzs7Ozs7Ozs7Ozs7O21DQVdXQyxXLEVBQWFDLEMsRUFBRztBQUM3QkEsT0FBQyxDQUFDQyxlQUFGO0FBQ0FDLHFEQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNWQyxnQkFBUSxFQUFFLGdCQURBO0FBRVZDLGFBQUssRUFBRTtBQUFFQyxZQUFFLEVBQUVQO0FBQU47QUFGRyxPQUFaO0FBSUQ7Ozt5Q0FFb0JBLFcsRUFBYUMsQyxFQUFHO0FBQ25DQSxPQUFDLENBQUNDLGVBQUY7QUFDQSxVQUFNTSxTQUFTLEdBQUdDLE9BQU8sQ0FDdkIsbURBRHVCLENBQXpCOztBQUdBLFVBQUlELFNBQUosRUFBZTtBQUNiLGFBQUtFLGVBQUwsQ0FBcUJWLFdBQXJCO0FBQ0Q7QUFDRjs7O29DQUVlQSxXLEVBQWE7QUFDM0JVLHdGQUFlLENBQUNWLFdBQUQsQ0FBZixDQUNHVyxJQURILENBQ1EsWUFBTTtBQUNWUix1REFBTSxDQUFDUyxTQUFQLENBQWlCLFlBQWpCO0FBQ0QsT0FISCxXQUlTLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZCxDQUFUO0FBQUEsT0FKVDtBQUtEOzs7cUNBRWdCRyxVLEVBQVk7QUFBQTs7QUFBQSw2QkFDQyxLQUFLQyxLQUFMLENBQVdDLElBRFo7QUFBQSxVQUNuQkMsTUFEbUIsb0JBQ25CQSxNQURtQjtBQUFBLFVBQ1hDLE9BRFcsb0JBQ1hBLE9BRFc7QUFFM0JKLGdCQUFVLENBQUNLLElBQVgsQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBV0QsQ0FBQyxDQUFDRSxHQUFGLEdBQVFELENBQUMsQ0FBQ0MsR0FBVixHQUFnQixDQUFoQixHQUFvQkQsQ0FBQyxDQUFDQyxHQUFGLEdBQVFGLENBQUMsQ0FBQ0UsR0FBVixHQUFnQixDQUFDLENBQWpCLEdBQXFCLENBQXBEO0FBQUEsT0FBaEI7QUFFQSxhQUFPUixVQUFVLENBQUNTLEdBQVgsQ0FBZSxVQUFDQyxTQUFELEVBQVlDLEtBQVosRUFBc0I7QUFDMUMsZUFDRSxNQUFDLDZFQUFEO0FBQWUsbUJBQVMsRUFBQyxnQkFBekI7QUFBMEMsbUJBQVMsRUFBRUQ7QUFBckQsV0FDR1AsTUFBTSxJQUFJQyxPQUFWLEdBQ0MsTUFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRSxNQUFDLGtEQUFEO0FBQ0UsaUJBQU8sRUFBRSxpQkFBQ25CLENBQUQ7QUFBQSxtQkFBTyxLQUFJLENBQUMyQixjQUFMLENBQW9CRixTQUFTLENBQUNHLEdBQTlCLEVBQW1DNUIsQ0FBbkMsQ0FBUDtBQUFBLFdBRFg7QUFFRSxlQUFLLEVBQUM7QUFGUixrQkFERixFQU1ZLEdBTlosRUFPRSxNQUFDLGtEQUFEO0FBQ0UsaUJBQU8sRUFBRSxpQkFBQ0EsQ0FBRDtBQUFBLG1CQUFPLEtBQUksQ0FBQzZCLG9CQUFMLENBQTBCSixTQUFTLENBQUNHLEdBQXBDLEVBQXlDNUIsQ0FBekMsQ0FBUDtBQUFBLFdBRFg7QUFFRSxlQUFLLEVBQUM7QUFGUixvQkFQRixDQURELEdBZUcsSUFoQk4sQ0FERjtBQW9CRCxPQXJCTSxDQUFQO0FBc0JEOzs7NkJBRVE7QUFBQSx3QkFDc0IsS0FBS2dCLEtBRDNCO0FBQUEsVUFDQ0QsVUFERCxlQUNDQSxVQUREO0FBQUEsVUFDYUUsSUFEYixlQUNhQSxJQURiO0FBR1AsYUFDRSxNQUFDLHNFQUFEO0FBQVksWUFBSSxFQUFFQSxJQUFsQjtBQUF3QixpQkFBUyxFQUFDO0FBQWxDLFNBQ0UsTUFBQyxtRUFBRDtBQUFVLGlCQUFTLEVBQUMsOEJBQXBCO0FBQW1ELGFBQUssRUFBQztBQUF6RCxTQUNFO0FBQUcsaUJBQVMsRUFBQztBQUFiLDhIQURGLEVBS0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLYSxnQkFBTCxDQUFzQmYsVUFBdEIsQ0FESCxDQUxGLENBREYsQ0FERjtBQWFEOzs7Ozs7Ozs7O0FBL0VLQSwwQixHQUFhLEU7Ozt1QkFFSWdCLGdGQUFhLEU7OztBQUFoQ2hCLDBCOzs7Ozs7O0FBRUFGLHVCQUFPLENBQUNDLEtBQVI7OztpREFFSztBQUFFQyw0QkFBVSxFQUFWQTtBQUFGLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBUmFpQiw0Q0FBSyxDQUFDQyxTOztBQW9GZm5DLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3J0Zm9saW8uanMuMDJjOTE1NjZhMzZjNjA2ZTJmNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9CYXNlTGF5b3V0XCI7XHJcbmltcG9ydCBCYXNlUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvQmFzZVBhZ2VcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IFBvcnRmb2xpb0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9ydGZvbGlvcy9Qb3J0Zm9saW9DYXJkXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IHsgZ2V0UG9ydGZvbGlvcywgZGVsZXRlUG9ydGZvbGlvIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvUG9ydGFmb2xpb1wiO1xyXG5cclxuY2xhc3MgUG9ydGZvbGlvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgbGV0IHBvcnRmb2xpb3MgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHBvcnRmb2xpb3MgPSBhd2FpdCBnZXRQb3J0Zm9saW9zKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcG9ydGZvbGlvcyB9O1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb0VkaXQocG9ydGZvbGlvSWQsIGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBcIi9wb3J0Zm9saW9FZGl0XCIsXHJcbiAgICAgIHF1ZXJ5OiB7IGlkOiBwb3J0Zm9saW9JZCB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5RGVsZXRlV2FybmluZyhwb3J0Zm9saW9JZCwgZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGlzQ29uZmlybSA9IGNvbmZpcm0oXHJcbiAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHBvcnRmb2xpbz8/P1wiXHJcbiAgICApO1xyXG4gICAgaWYgKGlzQ29uZmlybSkge1xyXG4gICAgICB0aGlzLmRlbGV0ZVBvcnRmb2xpbyhwb3J0Zm9saW9JZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVQb3J0Zm9saW8ocG9ydGZvbGlvSWQpIHtcclxuICAgIGRlbGV0ZVBvcnRmb2xpbyhwb3J0Zm9saW9JZClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoUm91dGUoXCIvcG9ydGZvbGlvXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclBvcnRmb2xpb3MocG9ydGZvbGlvcykge1xyXG4gICAgY29uc3QgeyBpc0F1dGgsIGlzQWRtaW4gfSA9IHRoaXMucHJvcHMuYXV0aDtcclxuICAgIHBvcnRmb2xpb3Muc29ydCgoYSwgYikgPT4gKGEubnVtIDwgYi5udW0gPyAxIDogYi5udW0gPCBhLm51bSA/IC0xIDogMCkpO1xyXG5cclxuICAgIHJldHVybiBwb3J0Zm9saW9zLm1hcCgocG9ydGZvbGlvLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQb3J0Zm9saW9DYXJkIGNsYXNzTmFtZT1cInBvcnRmb2xpby1jYXJkXCIgcG9ydGZvbGlvPXtwb3J0Zm9saW99PlxyXG4gICAgICAgICAge2lzQXV0aCAmJiBpc0FkbWluID8gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMubmF2aWdhdGVUb0VkaXQocG9ydGZvbGlvLl9pZCwgZSl9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuZGlzcGxheURlbGV0ZVdhcm5pbmcocG9ydGZvbGlvLl9pZCwgZSl9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L1BvcnRmb2xpb0NhcmQ+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcG9ydGZvbGlvcywgYXV0aCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmFzZUxheW91dCBhdXRoPXthdXRofSBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY292ZXJcIj5cclxuICAgICAgICA8QmFzZVBhZ2UgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXBhZ2UgYm91bmNlSW5SaWdodFwiIHRpdGxlPVwiUG9ydGZvbGlvXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGV4dFwiPlxyXG4gICAgICAgICAgICBGZWVsIGZyZWUgdG8gc2VlIHNvbWUgb2YgbXkgY29kZS4uLiBTb21lIGNvbmNlcHRzIG9mIHNvZnR3YXJlXHJcbiAgICAgICAgICAgIGVuZ2luZWVyaW5nIHRoYXQgaSBsaWtlIHRvIHNoYXJlIHdpdGggdGhlIGNvbW11bml0eTpcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3J0Zm9saW9zKHBvcnRmb2xpb3MpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9CYXNlUGFnZT5cclxuICAgICAgPC9CYXNlTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==