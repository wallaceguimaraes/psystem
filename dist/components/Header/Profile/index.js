"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Profile() {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown no-arrow"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "userDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "mr-2 d-none d-lg-inline text-gray-600 small"
  }, "Douglas McGee"), /*#__PURE__*/_react.default.createElement("img", {
    className: "img-profile rounded-circle",
    src: "img/undraw_profile.svg"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-right shadow animated--grow-in",
    "aria-labelledby": "userDropdown"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-user fa-sm fa-fw mr-2 text-gray-400"
  }), "Profile"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"
  }), "Settings"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-list fa-sm fa-fw mr-2 text-gray-400"
  }), "Activity Log"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#",
    "data-toggle": "modal",
    "data-target": "#logoutModal"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
  }), "Logout")));
}
var _default = Profile;
exports.default = _default;