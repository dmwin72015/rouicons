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

function Dashboard(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M488 216h48c5.312 0 8 2.688 8 8v92.032c0 5.312-2.688 8-8 8h-48c-5.312 0-8-2.688-8-8V224c0-5.312 2.688-8 8-8zM285.76 319.68l33.92-33.92c3.776-3.84 7.552-3.84 11.328 0l65.024 64.96c3.776 3.776 3.776 7.552 0 11.328l-33.92 33.92c-3.84 3.776-7.552 3.776-11.328 0l-65.088-64.96c-3.712-3.84-3.712-7.552 0-11.328zM224 480h92.032c5.312 0 8 2.688 8 8v48c0 5.312-2.688 8-8 8H224c-5.312 0-8-2.688-8-8v-48c0-5.312 2.688-8 8-8zm484.032 0H800c5.312 0 8 2.688 8 8v48c0 5.312-2.688 8-8 8h-92.032c-5.312 0-7.936-2.688-7.936-8v-48c0-5.312 2.624-8 7.936-8zm-80.064-129.28l65.024-65.024c3.84-3.712 7.552-3.712 11.328 0l33.92 33.92c3.84 3.84 3.84 7.616 0 11.392l-64.96 65.024c-3.776 3.776-7.552 3.776-11.328 0l-33.92-33.92c-3.776-3.84-3.776-7.552 0-11.328zM924.8 337.6a448.064 448.064 0 10-638.976 561.216c5.76 3.392 12.416 5.184 19.2 5.184h413.952c6.784 0 13.44-1.792 19.2-5.248A447.808 447.808 0 00960 512a445.248 445.248 0 00-35.2-174.4zm-91.52 362.112a374.4 374.4 0 01-124.928 128.32H315.648a372.032 372.032 0 11517.632-128.32zM544 625.6V464a8 8 0 00-8-8h-48a8 8 0 00-8 8v161.6a64 64 0 1064 0z"
  }));
}

var _default = Dashboard;
exports.default = _default;