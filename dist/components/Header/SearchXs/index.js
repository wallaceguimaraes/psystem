"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SearchXs = function SearchXs() {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown no-arrow d-sm-none"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "searchDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-search fa-fw"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in",
    "aria-labelledby": "searchDropdown"
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "form-inline mr-auto w-100 navbar-search"
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
  })))))));
};
var _default = SearchXs;
exports.default = _default;