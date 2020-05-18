"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Hello extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("h1", null, "Hello, remote es6 react component!");
  }

}

var _default = Hello;
exports.default = _default;
