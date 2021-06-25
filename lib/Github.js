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

function Github(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M512 95.872a426.667 426.667 0 00-134.912 831.445c21.333 3.755 29.312-9.045 29.312-20.266 0-10.112-.512-43.734-.512-79.446-107.221 19.712-134.955-26.154-143.488-50.133a155.136 155.136 0 00-43.733-60.288c-14.934-7.979-36.267-27.733-.555-28.245a85.376 85.376 0 0165.621 43.733 91.179 91.179 0 00124.246 35.2 89.77 89.77 0 0127.221-57.088c-94.933-10.667-194.133-47.445-194.133-210.645A166.059 166.059 0 01284.8 385.45a153.344 153.344 0 014.267-113.067s35.712-11.179 117.333 43.733a402.219 402.219 0 01213.333 0c81.579-55.466 117.334-43.733 117.334-43.733a153.301 153.301 0 014.266 113.067 165.077 165.077 0 0143.734 114.688c0 163.712-99.755 199.978-194.688 210.645a101.035 101.035 0 0128.8 78.933c0 57.088-.512 102.955-.512 117.334 0 11.221 7.978 24.533 29.312 20.266A426.88 426.88 0 00512 95.872z"
  }));
}

var _default = Github;
exports.default = _default;