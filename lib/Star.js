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

function Star(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1025 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M805.854 977.46a36.443 36.443 0 01-19.679-5.752L512.001 796.782 237.825 971.708c-12.75 8.108-29.07 7.572-41.18-1.25-12.178-8.82-17.676-24.213-13.891-38.748l81.75-314.818L13.327 410.251c-11.607-9.57-16.179-25.25-11.536-39.536 4.643-14.32 17.57-24.32 32.57-25.214l324.676-19.608L477.964 23.217C483.466 9.22 496.966.005 512 .005s28.535 9.215 34.035 23.214l118.927 302.676 324.675 19.608c15 .892 27.928 10.893 32.57 25.214 4.644 14.285.072 29.965-11.536 39.536l-251.174 206.64 81.75 314.817c3.785 14.535-1.715 29.928-13.894 38.748a36.536 36.536 0 01-21.5 7.001zM512.001 716.817c6.82 0 13.678 1.93 19.679 5.751l215.39 137.428-64.213-247.318c-3.571-13.75 1.18-28.357 12.144-37.429L892.32 412.893 637.25 397.5c-14.213-.857-26.605-9.892-31.818-23.142L512 136.574l-93.427 237.784c-5.215 13.25-17.608 22.287-31.821 23.142l-255.07 15.393 197.32 162.357c10.964 9.072 15.715 23.678 12.143 37.43l-64.214 247.317L492.324 722.57c6-3.823 12.856-5.75 19.677-5.75z"
  }));
}

var _default = Star;
exports.default = _default;