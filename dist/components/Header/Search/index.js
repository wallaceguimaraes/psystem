"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Search() {
  return /*#__PURE__*/_react.default.createElement("form", {
    className: "d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control bg-light border-0 small",
    placeholder: "Search for...",
    "aria-label": "Search",
    "aria-describedby": "basic-addon2"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary",
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-search fa-sm"
  })))));
}
var _default = Search;
exports.default = _default;