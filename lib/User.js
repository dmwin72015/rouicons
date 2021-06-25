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

function User(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M512 0C229.215 0 0 229.215 0 512s229.215 512 512 512 512-229.215 512-512S794.785 0 512 0zM253.07 865.536C261.359 729.713 374.143 621.714 512 621.714s250.642 108 258.93 243.822c-72.68 53.392-162.038 85.321-258.93 85.321s-186.25-31.929-258.93-85.321zM384 420.571c0-70.571 57.428-128 128-128s128 57.429 128 128-57.428 128-128 128-128-57.428-128-128zm451.608 386.822c-23.858-105.143-97.072-191.607-194.536-232.75 43.999-36.93 72.07-92.286 72.07-154.072 0-110.893-90.248-201.142-201.142-201.142S310.857 309.678 310.857 420.57c0 61.786 28.072 117.142 72.071 154.072-97.464 41.143-170.678 127.607-194.536 232.75C117.071 729.323 73.142 625.82 73.142 512 73.143 270 270 73.143 512 73.143S950.857 270 950.857 512c0 113.821-43.928 217.322-115.25 295.393z"
  }));
}

var _default = User;
exports.default = _default;