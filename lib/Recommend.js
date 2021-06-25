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

function Recommend(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M722.44 348.294l-29.249-4.55-77.996-11.7-34.578-72.926-13-27.558c-27.298-57.067-85.145-57.067-112.444 0l-13 27.558-34.577 72.927-77.996 11.7-29.249 4.549c-60.837 9.23-77.996 66.817-34.578 111.664l22.099 21.06 56.027 56.546-13 79.556-4.94 30.029c-10.659 63.177 36.529 99.445 90.996 69.806l25.999-14.299 69.156-37.698 69.157 37.698 25.999 14.3c54.467 29.638 101.264-6.11 90.995-69.807l-4.81-29.639-13-79.556 56.028-56.937 20.929-21.449c43.418-44.457 25.869-102.045-34.968-111.274zM841.904.041a151.832 151.832 0 01155.082 148.453v821.559c0 41.208-33.148 63.437-73.186 50.047L511.98 883.997 100.161 1020.1c-40.688 13.39-73.186-8.97-73.186-50.047V148.494A151.572 151.572 0 01182.057.041z"
  }));
}

var _default = Recommend;
exports.default = _default;