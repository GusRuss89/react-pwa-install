var _jsxFileName = "/Applications/MAMP/htdocs/react-pwa-install/src/InstallDialogAction.js";
import React from "react";
import { DialogActions, Typography, Button, Box } from "@material-ui/core";
import { platforms } from "./Platforms";
import { IOSShareIcon, FireFoxA2HSIcon, MenuIcon, OperaA2HSIcon } from "./Icons";

function DialogActionWithInstructions(props) {
  return /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement(Box, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "To install this app:"), /*#__PURE__*/React.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
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
  }, props.action1)), /*#__PURE__*/React.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, props.action2))), /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    textAlign: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: props.onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Ok")));
}

export default function InstallDialogAction(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DialogActions, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, props.platform === platforms.NATIVE && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: props.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
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
  }, "Install")), props.platform === platforms.IDEVICE && /*#__PURE__*/React.createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/React.createElement(React.Fragment, null, "Tap the share button:", /*#__PURE__*/React.createElement(IOSShareIcon, {
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
  }), props.platform === platforms.FIREFOX && /*#__PURE__*/React.createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/React.createElement(React.Fragment, null, "Tap this icon on the address bar:", /*#__PURE__*/React.createElement(FireFoxA2HSIcon, {
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
  }), props.platform === platforms.FIREFOX_NEW && /*#__PURE__*/React.createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/React.createElement(React.Fragment, null, "Tap the menu button:", /*#__PURE__*/React.createElement(MenuIcon, {
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
  }), props.platform === platforms.OPERA && /*#__PURE__*/React.createElement(DialogActionWithInstructions, {
    action1: /*#__PURE__*/React.createElement(React.Fragment, null, "Tap the menu button:", /*#__PURE__*/React.createElement(MenuIcon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    })),
    action2: /*#__PURE__*/React.createElement(React.Fragment, null, "then tap \xA0'", /*#__PURE__*/React.createElement(OperaA2HSIcon, {
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
  }), props.platform === platforms.OTHER && /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, /*#__PURE__*/React.createElement(Box, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Unfortunately the install feature is not supported by your browser."), /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    textAlign: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: props.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, "Ok")))));
}