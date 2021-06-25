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

function Frontend(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M870.4 1024H153.6C69.12 1024 0 954.88 0 870.4V153.6C0 69.12 69.12 0 153.6 0h716.8C954.88 0 1024 69.12 1024 153.6v716.8c0 84.48-69.12 153.6-153.6 153.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M144.384 134.144h735.232L819.2 798.72l-311.808 91.136-296.448-91.136-66.56-664.576zm588.8 200.704l17.92-100.864-473.6-1.024 30.72 302.592h308.224v79.36l-103.424 34.816-107.52-36.352-6.656-42.496-84.48 1.024 12.8 106.496 181.248 60.416 190.464-57.344 24.576-243.712h-335.36l-8.704-102.4h353.792v-.512z",
    "data-spm-anchor-id": "a313x.7781069.0.i17"
  }));
}

var _default = Frontend;
exports.default = _default;