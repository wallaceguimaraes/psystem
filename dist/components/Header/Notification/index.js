"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Notification() {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown no-arrow mx-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "alertsDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-bell fa-fw"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "badge badge-danger badge-counter"
  }, "3+")), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
    "aria-labelledby": "alertsDropdown"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "dropdown-header"
  }, "Alerts Center"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mr-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-circle bg-primary"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-file-alt text-white"
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "December 12, 2019"), /*#__PURE__*/_react.default.createElement("span", {
    className: "font-weight-bold"
  }, "A new monthly report is ready to download!"))), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mr-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-circle bg-success"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-donate text-white"
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "December 7, 2019"), "$290.29 has been deposited into your account!")), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mr-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-circle bg-warning"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-exclamation-triangle text-white"
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "December 2, 2019"), "Spending Alert: We ve noticed unusually high spending for your account.")), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item text-center small text-gray-500",
    href: "#"
  }, "Show All Alerts")));
}
var _default = Notification;
exports.default = _default;