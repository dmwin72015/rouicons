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

function Delet(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M768 384c-19.2 0-32 12.8-32 32v377.6c0 25.6-19.2 38.4-38.4 38.4H326.4c-25.6 0-38.4-19.2-38.4-38.4V416c0-19.2-12.8-32-32-32s-32 12.8-32 32v377.6c0 57.6 44.8 102.4 102.4 102.4h364.8c57.6 0 102.4-44.8 102.4-102.4V416c6.4-19.2-6.4-32-25.6-32zM460.8 736V416c0-19.2-12.8-32-25.6-32s-38.4 12.8-38.4 32v320c0 19.2 12.8 32 32 32s32-12.8 32-32zm166.4 0V416c0-19.2-19.2-32-38.4-32s-25.6 12.8-25.6 32v320c0 19.2 12.8 32 25.6 32s38.4-12.8 38.4-32zM832 256H672v-44.8c0-44.8-38.4-83.2-83.2-83.2H435.2c-44.8 0-83.2 38.4-83.2 83.2V256H192c-19.2 0-32 12.8-32 32s12.8 32 32 32h640c19.2 0 32-12.8 32-32s-12.8-32-32-32zm-416-44.8c0-12.8 6.4-19.2 19.2-19.2h153.6c12.8 0 19.2 6.4 19.2 19.2V256H416v-44.8z"
  }));
}

var _default = Delet;
exports.default = _default;