"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Message() {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown no-arrow mx-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "messagesDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-envelope fa-fw"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "badge badge-danger badge-counter"
  }, "7")), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
    "aria-labelledby": "messagesDropdown"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "dropdown-header"
  }, "Message Center"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list-image mr-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded-circle",
    src: "img/undraw_profile_1.svg",
    alt: "..."
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "status-indicator bg-success"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "font-weight-bold"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-truncate"
  }, "Hi there! I am wondering if you can help me with a problem I ve been having."), /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "Emily Fowler \xB7 58m"))), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list-image mr-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded-circle",
    src: "img/undraw_profile_2.svg",
    alt: "..."
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "status-indicator"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-truncate"
  }, "I have the photos that you ordered last month, how would you like them sent to you?"), /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "Jae Chun \xB7 1d"))), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list-image mr-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded-circle",
    src: "img/undraw_profile_3.svg",
    alt: "..."
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "status-indicator bg-warning"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-truncate"
  }, "Last month s report looks great, I am very happy with the progress so far, keep up the good work!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "Morgan Alvarez \xB7 2d"))), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list-image mr-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded-circle",
    src: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
    alt: "..."
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "status-indicator bg-success"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-truncate"
  }, "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they arent good..."), /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "Chicken the Dog \xB7 2w"))), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item text-center small text-gray-500",
    href: "#"
  }, "Read More Messages")));
}
var _default = Message;
exports.default = _default;