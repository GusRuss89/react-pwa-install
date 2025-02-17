var _jsxFileName = "/Applications/MAMP/htdocs/react-pwa-install/src/InstallDialog.js";
import React from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import InstallDialogAction from "./InstallDialogAction";
export default function InstallDialog(props) {
  return /*#__PURE__*/React.createElement(Dialog, {
    open: props.open,
    onClose: props.onClose,
    "aria-labelledby": "dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement(DialogTitle, {
    id: "dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, props.title || "Install Web App"), /*#__PURE__*/React.createElement(DialogContent, {
    dividers: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, !!props.logo && /*#__PURE__*/React.createElement(Box, {
    mr: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: props.logo,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  })), !!props.features && /*#__PURE__*/React.createElement(Box, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Key Features:"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, props.features))), !!props.description && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Description:"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, props.description))), /*#__PURE__*/React.createElement(InstallDialogAction, {
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