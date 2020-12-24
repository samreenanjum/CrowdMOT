exports.ids = [1];
exports.modules = {

/***/ "./components/videoAnnotationDemo/videoAnnotationDemo.js":
/*!***************************************************************!*\
  !*** ./components/videoAnnotationDemo/videoAnnotationDemo.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-annotation-tool */ "react-annotation-tool");
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_annotation_tool__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _videoInstruction_videoInstruction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../videoInstruction/videoInstruction */ "./components/videoInstruction/videoInstruction.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_16__);



















var Demo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(Demo, _Component);

  function Demo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Demo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(Demo).call(this, props)); // const fs = require('fs');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "handleResultSubmit", function (result) {
      _this.setState({
        result: result
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "handleChange", function (event) {
      var target = event.target;
      var name = target.name;
      var value = target.type === "checkbox" ? target.checked : target.value;

      _this.setState(function (preState) {
        var input = preState.input;
        return {
          input: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, input, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])({}, name, value))
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
        var result, readFilePromise, _result, _result$url, url, _result$videoWidth, videoWidth, _result$defaultAnnota, defaultAnnotations;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                result = {};

                if (!_this.fileInput.current.files[0]) {
                  _context.next = 7;
                  break;
                }

                readFilePromise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
                  var fileReader = new FileReader();

                  fileReader.onload = function (event) {
                    if (!_this.isJsonString(event.target.result)) reject('Wrong json format');
                    var result = JSON.parse(event.target.result);
                    resolve(result);
                  };

                  fileReader.onerror = function (event) {
                    reject(event);
                  };

                  fileReader.readAsText(_this.fileInput.current.files[0]);
                });
                _context.next = 6;
                return readFilePromise;

              case 6:
                result = _context.sent;

              case 7:
                _result = result, _result$url = _result.url, url = _result$url === void 0 ? '' : _result$url, _result$videoWidth = _result.videoWidth, videoWidth = _result$videoWidth === void 0 ? 0 : _result$videoWidth, _result$defaultAnnota = _result.defaultAnnotations, defaultAnnotations = _result$defaultAnnota === void 0 ? [] : _result$defaultAnnota;

                _this.setState(function (preState) {
                  var input = preState.input;

                  if (annotations.length === 0) {
                    defaultAnnotations = _this.isJsonString(input.defaultAnnotations) ? JSON.parse(input.defaultAnnotations) : [];
                  }

                  return {
                    params: {
                      defaultAnnotations: defaultAnnotations,
                      url: url || input.url,
                      videoWidth: videoWidth !== 0 ? videoWidth : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(input.videoWidth, 10)
                    }
                  };
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "isJsonString", function (str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }

      return true;
    });

    var _defaultAnnotations = [];
    var previewNoticeList = ['Body range of the objects', 'Time at which the objects <u>leave</u>, <u>obscured</u>, <u>show up</u> and/or <u>split</u> (if applicable).'];
    var previewHeader = 'Please scan the video and observe the following to help you complete the task:';
    var emptyCheckSubmissionWarningText = 'Please annotate AND track one unmarked object to complete this task.';
    var emptyCheckAnnotationItemWarningText = 'Step 2: Please track the object bound by this box';
    var emptyAnnotationReminderText = 'Step 1: Click the button above to add a new box around a object';
    var _url = 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4';
    var _videoWidth = 500;
    _this.fileInput = react__WEBPACK_IMPORTED_MODULE_13___default.a.createRef();
    _this.state = {
      result: null,
      input: {
        defaultAnnotations: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_defaultAnnotations),
        url: _url,
        videoWidth: _videoWidth,
        previewHeader: previewHeader,
        previewNoticeList: previewNoticeList,
        emptyCheckSubmissionWarningText: emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText: emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText: emptyAnnotationReminderText
      },
      params: {
        defaultAnnotations: [],
        url: _url,
        videoWidth: _videoWidth,
        previewHeader: previewHeader,
        previewNoticeList: previewNoticeList,
        emptyCheckSubmissionWarningText: emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText: emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText: emptyAnnotationReminderText
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Demo, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          result = _this$state.result,
          input = _this$state.input,
          params = _this$state.params;
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(result));
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Container"], {
        fluid: true,
        className: "py-3"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1", {
        className: "display-4  text-center"
      }, "CrowdMOT: A Video Annotation Tool"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Row"], {
        className: "my-3 col-xs-12 col-lg-10 offset-lg-1"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Col"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_videoInstruction_videoInstruction__WEBPACK_IMPORTED_MODULE_15__["default"], null))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Form"], {
        className: "mb-2 col-xs-12 col-lg-10 offset-lg-1",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Label"], {
        for: "URL"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", null, "Enter the video URL:")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Input"], {
        type: "text",
        name: "url",
        placeholder: "http://...",
        value: input.url,
        onChange: this.handleChange
      }))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Row"], {
        className: "py-3",
        style: {
          background: "rgb(246, 246, 246)"
        }
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Col"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_annotation_tool__WEBPACK_IMPORTED_MODULE_14__["TwoDimensionalVideo"], {
        key: "".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(params.url), "\n\t\t\t\t\t\t\t    ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(params.defaultAnnotations), "\n\t\t\t\t\t\t\t    ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(params.videoWidth), "\n\t\t\t\t\t\t\t    ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(params.previewHeader), "\n\t\t\t\t\t\t\t    ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(params.previewNoticeList)),
        onSubmit: this.handleResultSubmit,
        url: params.url,
        annotations: params.annotations,
        videoWidth: params.videoWidth,
        previewHeader: params.previewHeader,
        previewNoticeList: params.previewNoticeList,
        hasReview: true,
        isEmptyCheckEnable: true,
        isSplitEnable: true,
        isShowHideEnable: true,
        numAnnotationsToBeAdded: 100000,
        emptyCheckSubmissionWarningText: params.emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText: params.emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText: params.emptyAnnotationReminderText
      }))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Row"], {
        className: "my-3 col-xs-12 col-lg-10 offset-lg-1"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Col"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Card"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("a", {
        href: dataStr,
        className: "btn btn-secondary btn-lg",
        download: "".concat(params.url, ".json")
      }, " Download the Annotations")))), "  "));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

/***/ "./components/videoInstruction/videoInstruction.css":
/*!**********************************************************!*\
  !*** ./components/videoInstruction/videoInstruction.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/videoInstruction/videoInstruction.js":
/*!*********************************************************!*\
  !*** ./components/videoInstruction/videoInstruction.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _videoInstruction_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./videoInstruction.css */ "./components/videoInstruction/videoInstruction.css");
/* harmony import */ var _videoInstruction_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_videoInstruction_css__WEBPACK_IMPORTED_MODULE_14__);

















var Instructions =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Instructions, _Component);

  function Instructions(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Instructions);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Instructions).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggle", function () {
      _this.setState({
        collapse: !_this.state.collapse
      });
    });

    _this.state = {
      collapse: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Instructions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Collapse"], {
        isOpen: this.state.collapse
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Motivation")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
        className: "mb-5"
      }, "The result of this task will empower researchers to track cells in different life cycle phases and contribute towards treating and preventing diseases, leading to new bio-inspired technology, and answering basic science questions about fundamental biological processes."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Task")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
        className: "mb-3"
      }, "Your task is to ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, " annotate the video by drawing bounding boxes around each biological cell and tracking the cells precisely"), " (as shown in the video). You will adjust the boxes at different intervals of the video, and the tool will automatically fill the gaps in the video. You may, however, have to correct any imperfections in the annotations autocompleted by the tool to ensure that the gaps are correctly annotated.  "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mb-5 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "figure"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_10___default.a, {
        url: "https://youtu.be/dnqS7uOWcOU",
        height: '140',
        width: '100%',
        playing: true,
        loop: true,
        muted: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "figure-caption"
      }, "Before")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdArrowForward"], {
        style: {
          margin: "0px 10px 30px 10px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "figure"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_10___default.a, {
        url: "https://youtu.be/BcXmdQrUeiI",
        height: '140',
        width: '100%',
        playing: true,
        loop: true,
        muted: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "figure-caption"
      }, "After"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
        className: "mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Instructions")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
        className: "font-weight-bold"
      }, "Step 1: Before you start "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
        className: "mb-4"
      }, "You must ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, " begin this task from the start of the video"), " and annotate one cell at a time. You can also adjust the speed of the video by clicking the \"x1\" button located below the cell video. "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
        className: "font-weight-bold"
      }, "Step 2: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "text-uppercase text-danger"
      }, " Add "), " a new bounding box "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
        className: "mb-4 d-flex align-items-center"
      }, "Click the  ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: true,
        style: {
          opacity: 1
        },
        color: "primary",
        className: "d-flex align-items-center instruc-button"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdAdd"], null), " Add a New Box"), " button to draw a new bounding box around a cell. Then, drag and resize the box to bound that cell."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
        className: "font-weight-bold"
      }, "Step 3: Track and bound ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "text-uppercase text-danger"
      }, "ONLY"), " the cell that you chose"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
        className: "mb-4"
      }, "Press the play button, and when the cell moves, pause the video. Then, drag and resize the box to ensure the cell is bounded ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "text-uppercase text-danger"
      }, "precisely"), ". Continue this process till the ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "end of the video"), ". ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Note"), ": The tool will automatically fill the annotations in the missing frames between the intervals you annotated. You must replay the video to verify that the automated annotation is accurate -- if not, pause the video and adjust the box to correct the annotation."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
        className: "font-weight-bold"
      }, " Step 4a: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "text-uppercase text-danger"
      }, " Split "), " the bounding box (if applicable)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center",
        style: {
          marginBottom: 5
        }
      }, "If the cell splits into two cells, use the ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: true,
        style: {
          opacity: 1
        },
        outline: true,
        className: "d-flex align-items-center instruc-button"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdCallSplit"], null), " Split"), " button to split the parent bounding box into two children boxes and adjust the new boxes to fit the new cells."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mb-2 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "figure"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_10___default.a, {
        url: "https://youtu.be/HEBr3O9Z47I",
        height: '120',
        width: '100%',
        playing: true,
        loop: true,
        muted: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "figure-caption"
      }, "Before")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdArrowForward"], {
        style: {
          margin: "0px 10px 30px 10px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "figure"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_10___default.a, {
        url: "https://youtu.be/9EDQdesolq0",
        height: '120',
        width: '100%',
        playing: true,
        loop: true,
        muted: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "figure-caption"
      }, "After"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
        className: "font-weight-bold"
      }, "Step 4b: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "text-uppercase text-danger"
      }, " Hide "), " the bounding box if the cell leaves the video frame or is obscured (if applicable)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center",
        style: {
          marginBottom: 5
        }
      }, "If the cell leaves the video frame or is obscured by other objects, use the ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: true,
        style: {
          opacity: 1
        },
        outline: true,
        className: "d-flex align-items-center instruc-button"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_12__["IoMdEyeOff"], null), " Hide "), " button to hide its box. "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mb-2 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "figure"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_10___default.a, {
        url: "https://youtu.be/YxilHqkKrfc",
        height: '120',
        width: '100%',
        playing: true,
        loop: true,
        muted: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "figure-caption"
      }, "Before")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdArrowForward"], {
        style: {
          margin: "0px 10px 30px 10px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "figure"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_10___default.a, {
        url: "https://youtu.be/0eclcrDoJTw",
        height: '120',
        width: '100%',
        playing: true,
        loop: true,
        muted: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "figure-caption"
      }, "After"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
        className: "font-weight-bold"
      }, "Step 5: Submit the task"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
        className: "align-items-center mb-5"
      }, "After you have annotated the cell in the entire video, replay the entire video to check your work. If the annotations are not correct, pause the video, and adjust the boxes. Repeat this process until all cells in the video are annotated. Once you ensure that the annotations are correct, click the ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: true,
        style: {
          opacity: 1
        },
        className: "align-items-center instruc-button"
      }, "Submit"), " button to submit the results. Click on the ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: true,
        style: {
          opacity: 1
        },
        className: "align-items-center instruc-button"
      }, " Download the annotations "), " button to save the results. "), "  ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
        className: "mb-5"
      }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Note"), ": You can delete and redo the annotation or go back and forth in the video as many times as you like to ensure the cell is correctly annotated from the start to the end of the video."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Demo of the Tool")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center",
        style: {
          marginBottom: 10
        }
      }, "Here is a short demo of the task:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_10___default.a, {
        url: "https://youtu.be/Wv-mCWM-KIw",
        height: '400px',
        width: '800px',
        controls: true,
        muted: true
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
        className: "pt-10"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Other Buttons:")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", {
        className: "col-sm-2 text-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: true,
        style: {
          opacity: 1
        },
        outline: true,
        className: "d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdUndo"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: true,
        style: {
          opacity: 1
        },
        outline: true,
        className: "d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdRedo"], null)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", {
        className: "col-sm-10 d-flex align-items-center",
        style: {
          marginBottom: 0
        }
      }, "can be used to redo and undo the changes."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", {
        className: "col-sm-2 text-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: true,
        style: {
          opacity: 1
        },
        outline: true,
        className: "instruc-delete-button"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdDelete"], null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", {
        className: "col-sm-10 d-flex align-items-center",
        style: {
          marginBottom: 0
        }
      }, "can be used to delete a bounding box or a trajectory (tracking annotation)."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", {
        className: "col-sm-2 text-right"
      }, "Resizing & Tracking history ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaChevronDown"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", {
        className: "col-sm-10 d-flex align-items-center",
        style: {
          marginBottom: 0
        }
      }, " can be used to track your annotations."))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        block: true,
        color: "secondary",
        onClick: this.toggle
      }, this.state.collapse ? "Hide" : "Show", " Instructions"));
    }
  }]);

  return Instructions;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Instructions);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=1.js.map