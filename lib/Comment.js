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

function Comment(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M310.857 530.286c30.285 0 54.857-24.573 54.857-54.857s-24.572-54.858-54.857-54.858S256 445.144 256 475.43s24.572 54.857 54.857 54.857zm201.143 0c30.285 0 54.857-24.573 54.857-54.857S542.285 420.57 512 420.57s-54.857 24.573-54.857 54.858 24.572 54.857 54.857 54.857zm201.143 0c30.285 0 54.857-24.573 54.857-54.857s-24.572-54.858-54.857-54.858-54.857 24.573-54.857 54.858 24.572 54.857 54.857 54.857zm256-420.572H54.857c-20.215 0-36.571 16.375-36.571 36.572V804.57c0 20.215 16.356 36.572 36.571 36.572H384L512 1024l128-182.857h329.143c20.215 0 36.571-16.357 36.571-36.572V146.286c0-20.197-16.356-36.572-36.571-36.572zM932.57 768H601.93L512 896.464 422.073 768H91.429V182.857H932.57V768z"
  }));
}

var _default = Comment;
exports.default = _default;