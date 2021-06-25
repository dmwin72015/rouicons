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

function Search(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M234.826 557.578a256.841 256.841 0 01-7.344-26.095c-2.208-9.802-11.833-16.039-21.816-13.794-9.838 2.21-16.04 11.976-13.83 21.815a290.725 290.725 0 008.413 29.836c2.603 7.593 9.696 12.37 17.29 12.37 1.96 0 3.92-.285 5.88-.998 9.554-3.207 14.65-13.617 11.407-23.134zm240.72 172.206c-85.622 0-164.97-42.704-212.238-114.14-5.56-8.447-17.003-10.729-25.274-5.167-8.412 5.56-10.729 16.859-5.169 25.273 54.04 81.736 144.76 130.539 242.682 130.539 10.088 0 18.251-8.128 18.251-18.251 0-10.052-8.163-18.254-18.251-18.254zm537.747 179.373L909.15 805.925c-14.26-14.259-37.359-14.259-51.616 0l-73.467-73.466c58.032-69.62 93.001-159.162 93.001-256.905 0-221.756-179.8-401.521-401.558-401.521h-.07c-221.723 0-401.488 179.8-401.488 401.558.037 221.756 179.8 401.556 401.593 401.556 97.741 0 187.25-35.004 256.904-93.072l73.467 73.468c-14.292 14.26-14.257 37.359 0 51.614l103.234 104.149c14.26 14.259 37.358 14.259 51.614 0l52.527-52.53c14.294-14.26 14.257-37.36.002-51.619zM475.547 804.144c-181.156 0-328.553-147.4-328.59-328.553 0-181.156 147.363-328.554 328.482-328.554h.108c181.156 0 328.516 147.363 328.516 328.517s-147.362 328.59-328.516 328.59z"
  }));
}

var _default = Search;
exports.default = _default;