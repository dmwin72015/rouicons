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

function Qq(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M116.435 593.714c-33.54 78.964-38.985 154.297-12.059 168.37 18.572 9.696 47.686-12.382 74.936-52.909 10.791 44.157 37.493 84.137 75.633 116.21-40.004 14.768-66.135 38.886-66.135 66.232 0 44.954 70.709 81.302 157.978 81.302 78.716 0 143.907-29.538 155.94-68.371 3.232-.049 15.663-.049 18.796 0 12.083 38.784 77.324 68.371 155.989 68.371 87.267 0 157.978-36.398 157.978-81.302 0-27.297-26.105-51.464-66.135-66.232 38.089-32.123 64.889-72.053 75.631-116.21 27.251 40.527 56.29 62.605 74.887 52.909 26.95-14.073 21.631-89.456-12.032-168.37-26.355-62.058-62.11-107.754-89.457-117.848.398-3.929.596-7.958.596-11.935 0-23.968-6.661-46.146-18.049-64.196.199-1.393.199-2.834.199-4.227 0-11.038-2.636-21.381-7.114-30.332-6.909-161.309-111.93-289.402-281.866-289.402-170.036 0-275.106 128.093-281.943 289.402-4.525 9.001-7.135 19.343-7.135 30.332 0 1.393.099 2.835.15 4.227-11.288 18.05-17.951 40.178-17.951 64.196 0 3.978.15 7.955.498 11.935-27.151 10.094-63.028 55.841-89.333 117.848z"
  }));
}

var _default = Qq;
exports.default = _default;