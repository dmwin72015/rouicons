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

function Hot(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M926.442 372.934c48.654-53.159 16.362-208.767 8.232-187.511-8.13 21.358-41.753 24.409-41.753 24.409s14.231-11.18 5.058-93.705C888.887 33.542 859.276-.04 859.276-.04s-20.395 31.556-62.149 72.326-110.066 44.805-110.066 44.805 3.051-11.16 6.103-30.04c3.05-18.86-4.034-40.28-4.034-40.28s-9.154 13.31-58.115 44.866c-25.515 16.485-39.071 21.85-46.28 23.201a457.465 457.465 0 10215.116 807.158 457.424 457.424 0 00126.57-549.183v.122zM373.348 744.067h-58.853V630.233H197.058v113.793h-58.791v-275.81h58.79V579.49h117.438V468.154h58.77v275.79l.083.123zM540.709 503.56c-23.016 0-41.139 8.539-54.326 25.638-13.31 17.098-19.904 39.255-19.904 66.408 0 26.846 6.47 48.777 19.412 65.794 12.942 17.037 30.696 25.514 53.221 25.514 23.017 0 40.955-8.109 53.774-24.409 12.819-16.361 19.228-38.272 19.228-65.793 0-28.75-6.225-51.46-18.675-68.129-12.45-16.668-30.02-25.023-52.73-25.023zm111.336 205.102c-25.023 26.804-57.746 40.156-98.21 40.156-39.5 0-71.61-13.003-96.325-38.948-24.655-25.884-36.983-59.282-36.983-100.114 0-43.228 12.574-78.388 37.843-105.54 25.207-27.092 58.545-40.649 99.93-40.649 39.439 0 71.117 13.126 95.22 39.379 23.999 26.252 36.02 59.937 36.02 101.076 0 42.982-12.533 77.896-37.495 104.64zm258.63-192.406h-78.736v227.75h-58.893V516.379h-78.49v-48.225h216.078v48.04l.04.062zm0 0"
  }));
}

var _default = Hot;
exports.default = _default;