"use strict";

exports.__esModule = true;
exports["default"] = InstallDialogAction;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Platforms = require("./Platforms");

var _Icons = require("./Icons");

var _jsxFileName = "/Applications/MAMP/htdocs/react-pwa-install/src/InstallDialogAction.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DialogActionWithInstructions(props) {
  return /*#__PURE__*/_react["default"].createElement(_core.Box, {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "To install this app:"), /*#__PURE__*/_react["default"].createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: "flex",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, props.action1)), /*#__PURE__*/_react["default"].createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, props.action2))), /*#__PURE__*/_react["default"].createElement(_core.Box, {
    width: "100%",
    textAlign: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: props.onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Ok")));
}

function InstallDialogAction(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.DialogActions, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, props.platform === _Platforms.platforms.NATIVE && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: props.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: props.onSubmit,
    color: "primary",
    variant: "contained",
    disableElevation: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Install")), props.platform === _Platforms.platforms.IDEVICE && /*#__PURE__*/_react["default"].createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Tap the share button:", /*#__PURE__*/_react["default"].createElement(_Icons.IOSShareIcon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    })),
    action2: "then find and tap 'Add to Homescreen'",
    onSubmit: props.onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), props.platform === _Platforms.platforms.FIREFOX && /*#__PURE__*/_react["default"].createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Tap this icon on the address bar:", /*#__PURE__*/_react["default"].createElement(_Icons.FireFoxA2HSIcon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    })),
    action2: "then tap '+Add to Homescreen'",
    onSubmit: props.onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), props.platform === _Platforms.platforms.FIREFOX_NEW && /*#__PURE__*/_react["default"].createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Tap the menu button:", /*#__PURE__*/_react["default"].createElement(_Icons.MenuIcon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    })),
    action2: "then tap 'Install'",
    onSubmit: props.onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), props.platform === _Platforms.platforms.OPERA && /*#__PURE__*/_react["default"].createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Tap the menu button:", /*#__PURE__*/_react["default"].createElement(_Icons.MenuIcon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    })),
    action2: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "then tap \xA0'", /*#__PURE__*/_react["default"].createElement(_Icons.OperaA2HSIcon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }), "Home screen'"),
    onSubmit: props.onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), props.platform === _Platforms.platforms.OTHER && /*#__PURE__*/_react["default"].createElement(_core.Box, {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Unfortunately the install feature is not supported by your browser."), /*#__PURE__*/_react["default"].createElement(_core.Box, {
    width: "100%",
    textAlign: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: props.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, "Ok")))));
}

module.exports = exports.default;