webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Word_Carousel_Word_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Word_Carousel/Word_Carousel */ "./components/Word_Carousel/Word_Carousel.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Index = function Index(props) {
  var auth = props.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      imageWdith = _useState[0],
      setImageWdith = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isIniciated = _useState2[0],
      setIsIniciated = _useState2[1];

  var resizeFunction = function resizeFunction() {
    var widthPage = window.innerWidth;
    var heightPage = window.innerHeight;

    if (widthPage < heightPage) {
      var widhtScreen = window.innerHeight * 1.1;
      var imageWidht = widhtScreen / 6;
      setImageWdith(imageWidht);
      document.getElementById("image-index-id").style.height = "70vh";
      document.getElementById("image-index-id").style.width = widhtScreen + "px";

      if (window.innerWidth < 450) {
        var _widhtScreen = window.innerHeight;

        var _imageWidht = _widhtScreen / 6;

        setImageWdith(_imageWidht);
        document.getElementById("image-index-id").style.height = "70vh";
        document.getElementById("image-index-id").style.width = _widhtScreen + "px";
      }
    } else {
      var _imageWidht2 = window.innerWidth / 2 * 95 / 100 / 6;

      setImageWdith(_imageWidht2 - 1);
      var widthBox = window.innerWidth / 2;
      var porcent = widthBox * 80 / 100;
      document.getElementById("image-index-id").style.height = porcent + "px";
    }

    setIsIniciated(false);
    setTimeout(function () {
      for (var i = 1; i < 37; i++) {
        document.getElementById("image_".concat(i)).style.transform = "translate(".concat(0, "px, ", 0, "px)");
      }
    }, 10);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', resizeFunction);
    resizeFunction();
    return function () {
      window.removeEventListener('resize', resizeFunction);
    };
  }, [resizeFunction]);

  var redirectPage = function redirectPage() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/about');
  };

  var imageStyle = [];
  var random1 = null;
  var random2 = null;
  var images1 = [];
  var images = [];

  if (isIniciated) {
    for (var i = 1; i < 38; i++) {
      random1 = Math.floor(Math.random() * (600 - -600 + 1)) + -600, random2 = Math.floor(Math.random() * (600 - -600 + 1)) + -600, imageStyle.push({
        transform: "translate(".concat(random1, "px, ").concat(random2, "px)")
      });
    }
  } else {
    for (var _i = 1; _i < 38; _i++) {
      imageStyle.push({
        transform: "0px",
        minWidth: imageWdith - 5
      });
    }
  }

  for (var _i2 = 1; _i2 < 10; _i2++) {
    images1.push(__jsx("img", {
      style: imageStyle[_i2],
      id: "image_".concat(_i2),
      className: "imageCara",
      src: "../static/images/cara/index_0".concat(_i2, ".png")
    }));
  }

  for (var _i3 = 10; _i3 < 37; _i3++) {
    images.push(__jsx("img", {
      style: imageStyle[_i3],
      id: "image_".concat(_i3),
      className: "imageCara",
      src: "../static/images/cara/index_".concat(_i3, ".png")
    }));
  }

  return __jsx(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    auth: auth,
    headerType: "index"
  }, __jsx("div", {
    className: "main-section"
  }, __jsx("div", {
    md: "6",
    className: "image-index",
    id: "image-index-id"
  }, images1, images), __jsx("div", {
    md: "6",
    className: "text-index",
    id: "text-index-id"
  }, __jsx("div", {
    className: "text-index-welcome",
    id: "text-index-welcome-id"
  }, __jsx("div", {
    className: "text-index-welcome-1"
  }, "Hi Im"), __jsx("div", {
    className: "text-index-welcome-2"
  }, "Javier Sanchez"), __jsx(_components_Word_Carousel_Word_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "text-index-welcome-4"
  }, "Passionate about information technologies and Self-learning software engineering."), __jsx("div", {
    className: "text-index-welcome-5"
  }, __jsx(react_typed__WEBPACK_IMPORTED_MODULE_2___default.a, {
    loop: true,
    typeSpeed: 80,
    backSpeed: 10,
    strings: ["Front-End thenclogies JavaScript | CSS | HTML...", "Back-End thencoligies NodeJS | Express | MongoDB...", "IOT technologies Node-Red|Arduino|MQTT...", "Control systems technologies PLC|HMI|OPC-UA..."],
    smartBackspace: true,
    shuffle: false,
    backDelay: 5000,
    fadeOut: false,
    fadeOutDelay: 100,
    loopCount: 0,
    showCursor: true,
    cursorChar: "|"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "index-about-button",
    onClick: redirectPage
  }, "about me")), __jsx("div", {
    className: "index-footer"
  }, __jsx("img", {
    src: "../static/images/logos/github.png",
    className: "github-img",
    onClick: function onClick() {
      return window.open("https://github.com/javierV8");
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.07edf9eade97dc42a594.hot-update.js.map