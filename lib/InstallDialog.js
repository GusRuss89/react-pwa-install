"use strict";

exports.__esModule = true;
exports["default"] = InstallDialog;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _InstallDialogAction = _interopRequireDefault(require("./InstallDialogAction"));

var _jsxFileName = "/Applications/MAMP/htdocs/react-pwa-install/src/InstallDialog.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function InstallDialog(props) {
  return /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
    open: props.open,
    onClose: props.onClose,
    "aria-labelledby": "dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, {
    id: "dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, props.title || "Install Web App"), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, {
    dividers: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    display: "flex",
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, !!props.logo && /*#__PURE__*/_react["default"].createElement(_core.Box, {
    mr: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.logo,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  })), !!props.features && /*#__PURE__*/_react["default"].createElement(_core.Box, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Key Features:"), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body2",
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, props.features))), !!props.description && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Description:"), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body2",
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, props.description))), /*#__PURE__*/_react["default"].createElement(_InstallDialogAction["default"], {
    platform: props.platform,
    onSubmit: props.onSubmit,
    onClose: props.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
}

module.exports = exports.default;