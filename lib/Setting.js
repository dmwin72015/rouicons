"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Setting(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M999.044 405.283l-111.908-37.326c-2.21-5.74-4.6-11.444-7.166-17.148l52.8-105.525c7.023-14.046 4.278-31.016-6.846-42.14L822.681 99.9c-11.124-11.158-28.057-13.868-42.14-6.845l-105.56 52.763a386.34 386.34 0 00-17.113-7.13L620.542 26.78c-4.956-14.9-18.895-24.954-34.617-24.954H439.9c-15.721 0-29.661 10.054-34.617 24.956l-37.326 111.906a370.898 370.898 0 00-17.112 7.13L245.284 93.054c-14.046-7.058-31.016-4.313-42.14 6.845L99.9 203.144c-11.123 11.124-13.868 28.094-6.845 42.14l52.763 105.561a368.886 368.886 0 00-7.13 17.112L26.78 405.283C11.88 410.24 1.825 424.18 1.825 439.9v146.025c0 15.722 10.054 29.661 24.956 34.617l111.908 37.326a350.66 350.66 0 007.166 17.149l-52.8 105.525c-7.024 14.045-4.28 31.015 6.844 42.139l103.244 103.243c11.158 11.158 28.128 13.904 42.139 6.845l105.561-52.762a386.34 386.34 0 0017.113 7.13l37.325 111.907c4.956 14.902 18.896 24.956 34.617 24.956h146.025c15.722 0 29.662-10.054 34.652-24.956l37.255-111.871a435.511 435.511 0 0017.148-7.166l105.562 52.762c14.011 7.024 30.98 4.313 42.139-6.845l103.243-103.243c11.124-11.124 13.87-28.094 6.845-42.14l-52.762-105.56a386.34 386.34 0 007.13-17.113l111.908-37.326c14.901-4.956 24.955-18.895 24.955-34.617V439.9c.002-15.721-10.052-29.661-24.954-34.617zm-48.056 154.332l-103.673 34.58c-10.873 3.602-19.43 12.157-23.066 23.03-4.635 13.87-10.518 27.986-17.505 41.997a36.508 36.508 0 00.037 32.586l48.912 97.86-66.025 66.025-97.86-48.912c-10.231-5.133-22.353-5.133-32.586-.037-14.01 6.987-28.164 12.87-41.996 17.505a36.545 36.545 0 00-23.102 23.066l-34.509 103.673H466.21l-34.58-103.673c-3.602-10.873-12.157-19.43-23.03-23.066-13.869-4.635-27.986-10.518-41.997-17.505-10.267-5.098-22.39-5.098-32.586.037l-97.86 48.912-66.025-66.025 48.947-97.86a36.554 36.554 0 000-32.657c-6.952-13.903-12.833-28.022-17.504-41.925-3.636-10.874-12.193-19.43-23.067-23.03l-103.67-34.58V466.21l103.672-34.58c10.873-3.602 19.43-12.157 23.066-23.03 4.671-13.94 10.553-28.022 17.469-41.855a36.511 36.511 0 00.036-32.691l-48.947-97.897 66.025-66.025 97.897 48.947a36.396 36.396 0 0032.691-.036c13.832-6.916 27.915-12.8 41.855-17.468 10.873-3.636 19.43-12.193 23.03-23.067l34.578-103.67h93.405l34.58 103.672c3.602 10.873 12.157 19.43 23.03 23.066 13.87 4.635 27.986 10.518 41.997 17.505 10.231 5.062 22.353 5.062 32.586-.036l97.86-48.913 66.025 66.025-48.947 97.86a36.554 36.554 0 000 32.657c6.953 13.904 12.834 28.022 17.505 41.926 3.636 10.873 12.193 19.43 23.066 23.03l103.672 34.58v93.405zM512.913 330.381c-100.785 0-182.532 81.747-182.532 182.532 0 100.819 81.747 182.53 182.532 182.53 100.819 0 182.53-81.711 182.53-182.53 0-100.785-81.711-182.532-182.53-182.532zm0 292.05c-60.393 0-109.52-49.126-109.52-109.518s49.127-109.52 109.52-109.52S622.43 452.52 622.43 512.914 573.305 622.43 512.913 622.43z"
  }));
}

var _default = Setting;
exports.default = _default;