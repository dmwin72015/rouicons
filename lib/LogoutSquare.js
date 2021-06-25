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

function LogoutSquare(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M113.088 712.512v121.6c0 12.8 6.4 19.2 19.2 19.2h441.6c12.8 0 19.2-6.4 19.2-19.2v-115.2c0-19.2 19.2-38.4 38.4-38.4s38.4 19.2 38.4 38.4v115.2c0 51.2-38.4 89.6-89.6 89.6h-448c-51.2 0-89.6-38.4-89.6-89.6v-659.2c0-51.2 38.4-89.6 89.6-89.6h441.6c51.2 0 89.6 38.4 89.6 89.6v115.2c0 19.2-19.2 38.4-38.4 38.4s-32-12.8-32-32v-121.6c0-12.8-6.4-19.2-19.2-19.2h-441.6c-12.8 0-19.2 6.4-19.2 19.2v537.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M740.288 622.912c-12.8 12.8-12.8 38.4 0 51.2 6.4 6.4 19.2 12.8 25.6 12.8s19.2-6.4 25.6-12.8l134.4-134.4c12.8-12.8 12.8-38.4 0-51.2l-134.4-134.4c-12.8-12.8-38.4-12.8-51.2 0s-12.8 38.4 0 51.2l76.8 76.8h-352c-19.2-6.4-38.4 12.8-38.4 32s19.2 38.4 38.4 38.4h352l-76.8 70.4z"
  }));
}

var _default = LogoutSquare;
exports.default = _default;