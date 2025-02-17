"use strict";

exports.__esModule = true;
var _exportNames = {
  useReactPWAInstall: true,
  ReactPWAInstallProvider: true,
  platforms: true,
  getPlatform: true
};
exports["default"] = exports.ReactPWAInstallProvider = exports.useReactPWAInstall = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Platforms = require("./Platforms");

exports.platforms = _Platforms.platforms;
exports.getPlatform = _Platforms.getPlatform;

var _Icons = require("./Icons");

Object.keys(_Icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _Icons[key];
});

var _this = void 0,
    _jsxFileName = "/Applications/MAMP/htdocs/react-pwa-install/src/index.js";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ReactPWAInstallContext = (0, _react.createContext)(Promise.reject);

var useReactPWAInstall = function useReactPWAInstall() {
  return (0, _react.useContext)(ReactPWAInstallContext);
};

exports.useReactPWAInstall = useReactPWAInstall;

var ReactPWAInstallProvider = function ReactPWAInstallProvider(_ref) {
  var children = _ref.children,
      enableLogging = _ref.enableLogging,
      dialogComponent = _ref.dialogComponent;
  var platform = typeof window === 'undefined' ? '' : (0, _Platforms.getPlatform)();
  var InstallDialog = dialogComponent;
  var awaitingPromiseRef = (0, _react.useRef)();
  var deferredprompt = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      dialogState = _useState[0],
      setDialogState = _useState[1];

  var _useState2 = (0, _react.useState)({
    supported: supported,
    isInstalled: isInstalled,
    pwaInstall: openDialog
  }),
      contextValue = _useState2[0],
      setContextValue = _useState2[1];

  (0, _react.useEffect)(function () {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPromptEvent);
    return function cleanup() {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPromptEvent);
    };
  }, []);

  function logger(message) {
    if (enableLogging) {
      console.log(message);
    }
  }

  function isInstalled() {
    if (window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches) {
      logger("isInstalled: true. Already in standalone mode");
      return true;
    }

    logger("isInstalled: false.");
    return false;
  }

  function supported() {
    if (deferredprompt.current != null && platform === _Platforms.platforms.NATIVE) {
      logger("supported: true - native platform");
      return true;
    }

    if (platform !== _Platforms.platforms.NATIVE && platform !== _Platforms.platforms.OTHER) {
      logger("supported: true - manual support");
      return true;
    }

    logger("supported: false");
    return false;
  }

  function handleBeforeInstallPromptEvent(event) {
    event.preventDefault();
    deferredprompt.current = event;
    logger("beforeinstallprompt event fired and captured");
    setContextValue({
      supported: supported,
      isInstalled: isInstalled,
      pwaInstall: openDialog
    });
  }

  function openDialog(options) {
    setDialogState(options);
    return new Promise(function (resolve, reject) {
      awaitingPromiseRef.current = {
        resolve: resolve,
        reject: reject
      };
    });
  }

  function handleClose() {
    setDialogState(null);

    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject();
    }
  }

  function handleInstall() {
    logger("handleInstall called");
    setDialogState(null);

    if (deferredprompt.current != null) {
      return deferredprompt.current.prompt().then(function (event) {
        return deferredprompt.current.userChoice;
      }).then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          logger("PWA native installation succesful");

          if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.resolve();
          }
        } else {
          logger("User opted out by cancelling native installation");

          if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.reject();
          }
        }
      })["catch"](function (err) {
        if (awaitingPromiseRef.current) {
          awaitingPromiseRef.current.resolve();
        }

        logger("Error occurred in the installing process: ", err);
      });
    } else {
      if (awaitingPromiseRef.current) {
        awaitingPromiseRef.current.resolve();
      }
    }
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(ReactPWAInstallContext.Provider, {
    value: contextValue,
    children: children,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement(InstallDialog, _extends({
    open: Boolean(dialogState),
    onSubmit: handleInstall,
    onClose: handleClose,
    platform: platform
  }, dialogState, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  })));
};

exports.ReactPWAInstallProvider = ReactPWAInstallProvider;
var _default = ReactPWAInstallProvider;
exports["default"] = _default;